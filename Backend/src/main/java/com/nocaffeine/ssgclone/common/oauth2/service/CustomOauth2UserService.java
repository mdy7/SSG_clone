package com.nocaffeine.ssgclone.common.oauth2.service;


import com.nocaffeine.ssgclone.common.oauth2.dto.CustomOAuth2User;
import com.nocaffeine.ssgclone.common.oauth2.dto.KakaoResponse;
import com.nocaffeine.ssgclone.common.oauth2.dto.OAuth2Response;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import com.nocaffeine.ssgclone.domain.member.domain.MemberRole;
import com.nocaffeine.ssgclone.domain.member.domain.SnsInfo;
import com.nocaffeine.ssgclone.domain.member.infrastructure.MemberRepository;
import com.nocaffeine.ssgclone.domain.member.infrastructure.SnsInfoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomOauth2UserService extends DefaultOAuth2UserService {

    private final MemberRepository memberRepository;
    private final SnsInfoRepository snsInfoRepository;

    /**
     * 소셜 로그인 성공시 후처리
     */
    @Override
    public OAuth2User loadUser(OAuth2UserRequest request) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(request);
        OAuth2Response oauth2Response = new KakaoResponse(oAuth2User.getAttributes());

        String providerId = oauth2Response.getProviderId();
        String provider = oauth2Response.getProvider();
        String email = oauth2Response.getEmail();


        Optional<Member> memberOptional = memberRepository.findByEmail(email);

        if (memberOptional.isPresent()) {
            // 이미 회원정보가 있을경우
            Member member = memberOptional.get();

            // SnsInfo 테이블에서 소셜 로그인 정보가 있는지 확인
            Optional<SnsInfo> snsInfoOptional = snsInfoRepository.findBySnsIdAndMemberAndSnsType(providerId, member, provider);
            if (snsInfoOptional.isEmpty()) {
                // 소셜 로그인 정보가 없으면 기존 아이디와 연동
                SnsInfo snsInfo = SnsInfo.builder()
                        .snsType(provider)
                        .member(member)
                        .snsId(providerId)
                        .build();
                snsInfoRepository.save(snsInfo);
            }

            return new CustomOAuth2User(member, oAuth2User.getAttributes());
        } else {
            // 회원정보가 없을 경우 회원가입
            Member newMember = registerNewMember(oauth2Response);
            return new CustomOAuth2User(newMember, oAuth2User.getAttributes());
        }
    }

    private Member registerNewMember(OAuth2Response oauth2Response) {
        Member savedMember = memberRepository.save(
                Member.builder()
                        .email(oauth2Response.getEmail())
                        .uuid(UUID.randomUUID().toString())
                        .name(oauth2Response.getName())
                        .password(UUID.randomUUID().toString())
                        .phoneNumber("010-0000-0000")
                        .role(MemberRole.USER)
                        .build()
        );

        snsInfoRepository.save(SnsInfo.builder()
                .member(savedMember)
                .snsType(oauth2Response.getProvider())
                .snsId(oauth2Response.getProviderId())
                .build());

        return savedMember;
    }



}
