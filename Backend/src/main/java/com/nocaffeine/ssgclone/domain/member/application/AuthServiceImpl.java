package com.nocaffeine.ssgclone.domain.member.application;


import com.nocaffeine.ssgclone.common.EmailProvider;
import com.nocaffeine.ssgclone.common.exception.BaseException;
import com.nocaffeine.ssgclone.common.redis.RedisUtils;
import com.nocaffeine.ssgclone.common.jwt.JwtTokenProvider;
import com.nocaffeine.ssgclone.domain.deliveryaddress.domain.DeliveryAddress;
import com.nocaffeine.ssgclone.domain.deliveryaddress.infrastructure.DeliveryAddressRepository;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import com.nocaffeine.ssgclone.domain.member.domain.MemberRole;
import com.nocaffeine.ssgclone.domain.member.domain.SnsInfo;
import com.nocaffeine.ssgclone.domain.member.dto.request.*;
import com.nocaffeine.ssgclone.domain.member.dto.response.TokenResponseDto;
import com.nocaffeine.ssgclone.domain.member.infrastructure.MemberRepository;
import com.nocaffeine.ssgclone.domain.member.infrastructure.SnsInfoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

import static com.nocaffeine.ssgclone.common.exception.ErrorCode.*;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class AuthServiceImpl implements AuthService{

    private final SnsInfoRepository snsInfoRepository;
    private final MemberRepository memberRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final EmailProvider emailProvider;
    private final AuthenticationManager authenticateManager;
    private final RedisUtils redisUtils;
    private final DeliveryAddressRepository deliveryAddressRepository;

    /**
     *  소셜 회원가입
     */
    @Override
    @Transactional
    public void snsAddMember(SnsMemberAddRequestDto snsMemberAddRequestDto) {
        if(snsInfoRepository.findBySnsIdAndSnsType(snsMemberAddRequestDto.getSnsId(),
                snsMemberAddRequestDto.getSnsType()).isPresent()){
            throw new BaseException(DUPLICATE_SNS_MEMBERS);
        }

        duplicationEmail(snsMemberAddRequestDto.getEmail());

        String uuid = UUID.randomUUID().toString();
        Member member = Member.builder()
                .email(snsMemberAddRequestDto.getEmail())
                .password(uuid)
                .name(snsMemberAddRequestDto.getName())
                .phoneNumber(snsMemberAddRequestDto.getPhoneNumber())
                .status(false)
                .uuid(uuid)
                .build();

        memberRepository.save(member);

        SnsInfo snsInfo = SnsInfo.builder()
                .snsId(snsMemberAddRequestDto.getSnsId())
                .snsType(snsMemberAddRequestDto.getSnsType())
                .member(member)
                .build();

        snsInfoRepository.save(snsInfo);

        deliveryAddressRepository.save(DeliveryAddress.builder()
                .member(member)
                .addressName("기본배송지")
                .recipient("받는분")
                .phoneNumber("phone")
                .zip("null")
                .post("null")
                .street("null")
                .defaultCheck(true)
                .build());

    }


    /**
     *  소셜 로그인
     */
    @Override
    @Transactional
    public TokenResponseDto snsLogin(SnsMemberLoginRequestDto snsMemberLoginRequestDto) {
        SnsInfo snsInfo = snsInfoRepository.findBySnsIdAndSnsType(snsMemberLoginRequestDto.getSnsId(), snsMemberLoginRequestDto.getSnsType())
                .orElseThrow(() -> new BaseException(NO_EXIST_SNS_MEMBERS));

        Member member = memberRepository.findById(snsInfo.getMember().getId())
                .orElseThrow(() -> new BaseException(NO_EXIST_MEMBERS));

        if(member.isStatus()){
            throw new BaseException(WITHDRAWAL_MEMBERS);
        }

        String token = createToken(member.getUuid());

        return TokenResponseDto.builder()
                .accessToken(token)
                .build();
    }

    /**
     * 아이디 중복 확인
     */
    @Override
    public void duplicationEmail(String email) {
        if (memberRepository.findByEmail(email).isPresent()) {
            throw new BaseException(DUPLICATE_EMAIL);
        }
    }

    /**
     * 일반 회원가입
     */
    @Override
    @Transactional
    public void join(MemberSaveRequestDto memberSaveRequestDto) {
        duplicationEmail(memberSaveRequestDto.getEmail());
        createMember(memberSaveRequestDto);
    }

    private void createMember(MemberSaveRequestDto memberSaveRequestDto) {
        String uuid = UUID.randomUUID().toString();

        Member member = Member.builder()
                .email(memberSaveRequestDto.getEmail())
                .password(memberSaveRequestDto.getPassword())
                .uuid(uuid)
                .name(memberSaveRequestDto.getName())
                .phoneNumber(memberSaveRequestDto.getPhoneNumber())
                .status(false)
                .role(MemberRole.USER)
                .build();

        // 비밀번호 암호화
        member.hashPassword(memberSaveRequestDto.getPassword());

        memberRepository.save(member);

        deliveryAddressRepository.save(DeliveryAddress.builder()
                .member(member)
                .addressName("기본배송지")
                .recipient("받는분")
                .phoneNumber("phone")
                .zip("null")
                .post("null")
                .street("null")
                .defaultCheck(true)
                .build());

    }

    /**
     * 일반 로그인
     */
    @Override
    public TokenResponseDto logIn(MemberLoginRequestDto memberLoginRequestDto) {
        Member member = memberRepository.findByEmail(memberLoginRequestDto.getEmail())
                .orElseThrow(() -> new BaseException(FAILED_TO_LOGIN));

        if(member.isStatus()){
            throw new BaseException(WITHDRAWAL_MEMBERS);
        }

        authenticateManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        memberLoginRequestDto.getEmail(),
                        memberLoginRequestDto.getPassword())
        );


        return TokenResponseDto.builder()
                .accessToken(createToken(member.getUuid()))
                .build();
    }


    private String createToken(String uuid) {
        return jwtTokenProvider.createToken(uuid);
    }

    /**
     * 이메일 인증코드 발송
     */
    @Override
    @Transactional
    public void emailAuth(AuthEmailRequestDto authEmailRequestDto) {
        String authCode = createAuthCode();

        duplicationEmail(authEmailRequestDto.getEmail());

        if(!emailProvider.sendAuthMail(authEmailRequestDto.getEmail(), authCode)){
            throw new BaseException(MASSAGE_SEND_FAILED);
        }

        log.info("이메일 인증코드 : {}", authCode);

        // Redis에 이메일 인증 코드 저장
        redisUtils.setData(authEmailRequestDto.getEmail(), authCode, 300000); // 5분 동안 유효
    }

    public static String createAuthCode() {
        String authCode = "";

        for(int count = 0; count < 6; count++){
            authCode += (int)(Math.random() * 10);
        }

        return authCode;
    }

    /**
     * 이메일 인증코드 확인
     */
    @Override
    @Transactional
    public void emailAuthCodeCheck(String email, String code) {
        // Redis에서 이메일 인증 코드 가져오기
        String authCode = redisUtils.getData(email);

        if(authCode == null){
            throw new BaseException(NO_EXIST_AUTH);
        }

        if(!authCode.equals(code)){
            throw new BaseException(MASSAGE_VALID_FAILED);
        }

        // 인증 코드 확인 후 Redis 에서 삭제
        redisUtils.deleteData(email);
    }

    /**
     * 로그아웃
     */
    @Override
    public void logout(String accessToken) {
        Long expiration = jwtTokenProvider.getExpiration(accessToken);
        log.info("만료시간 : {}", expiration);
        redisUtils.setData(accessToken, "logout", expiration);
    }
}
