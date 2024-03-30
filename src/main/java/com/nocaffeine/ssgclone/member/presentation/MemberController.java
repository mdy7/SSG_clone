package com.nocaffeine.ssgclone.member.presentation;

import com.nocaffeine.ssgclone.common.CommonResponse;
import com.nocaffeine.ssgclone.member.dto.request.MemberLoginRequestDto;
import com.nocaffeine.ssgclone.member.dto.request.MemberPasswordRequestDto;
import com.nocaffeine.ssgclone.member.dto.request.MemberSaveRequestDto;
import com.nocaffeine.ssgclone.member.application.MemberService;
import com.nocaffeine.ssgclone.common.security.JwtTokenProvider;
import com.nocaffeine.ssgclone.member.dto.response.MemberDetailResponseDto;
import com.nocaffeine.ssgclone.member.dto.response.TokenResponseDto;
import com.nocaffeine.ssgclone.member.vo.request.EmailRequestVo;
import com.nocaffeine.ssgclone.member.vo.request.MemberLoginRequestVo;
import com.nocaffeine.ssgclone.member.vo.request.MemberPasswordRequestVo;
import com.nocaffeine.ssgclone.member.vo.request.MemberSaveRequestVo;
import com.nocaffeine.ssgclone.member.vo.response.MemberDetailResponseVo;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class MemberController {

    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    @Operation(summary = "이메일 중복 검증", description = "이메일 중복 검증", tags = {"Duplication Email"})
    @GetMapping("/duplication")
    public CommonResponse<String> duplicationEmail(@RequestParam String email) {
        memberService.duplicationEmail(email);
        return CommonResponse.success("이메일 중복 검증 성공");
    }

    @Operation(summary = "회원가입", description = "회원가입", tags = {"Sign Up"})
    @PostMapping("/member")
    public CommonResponse<String> memberCreate(@RequestBody MemberSaveRequestVo memberSaveRequestVo) {
        memberService.addMember(MemberSaveRequestDto.voToDto(memberSaveRequestVo));
        return CommonResponse.success("회원가입 성공");
    }

    @Operation(summary = "로그인", description = "로그인", tags = {"Log In"})
    @PostMapping("/member/login")
    public ResponseEntity<CommonResponse<TokenResponseDto>> logIn(@RequestBody MemberLoginRequestVo memberLoginRequestVo) {
        TokenResponseDto tokenResponseDto = memberService.logIn(MemberLoginRequestDto.voToDto(memberLoginRequestVo));
        return ResponseEntity.ok()
                .header(HttpHeaders.AUTHORIZATION, tokenResponseDto.getAccessToken())
                .body(CommonResponse.success("로그인 성공"));
    }

    @Operation(summary = "비밀번호 변경", description = "비밀번호 변경", tags = {"Change Password"})
    @PatchMapping("/member/password")
    public CommonResponse<String> changePassword(@RequestBody MemberPasswordRequestVo memberPasswordRequestVo) {
        String memberUuid = jwtTokenProvider.validateAndGetUserUuid(jwtTokenProvider.getHeader());
        memberService.updatePassword(memberUuid, MemberPasswordRequestDto.voToDto(memberPasswordRequestVo));
        return CommonResponse.success("비밀번호 변경 성공");
    }

    @Operation(summary = "회원 상세 정보", description = "회원 상세 정보", tags = {"Member Detail"})
    @GetMapping("/member")
    public CommonResponse<MemberDetailResponseVo> memberDetail() {
        String memberUuid = jwtTokenProvider.validateAndGetUserUuid(jwtTokenProvider.getHeader());
        return CommonResponse.success("회원 상세 조회 성공",MemberDetailResponseDto.dtoToVo(memberService.findMember(memberUuid)));
    }

    @Operation(summary = "회원 탈퇴", description = "회원 탈퇴", tags = {"Remove Member"})
    @DeleteMapping("/member")
    public CommonResponse<String> memberRemove() {
        String memberUuid = jwtTokenProvider.validateAndGetUserUuid(jwtTokenProvider.getHeader());
        memberService.removeMember(memberUuid);
        return CommonResponse.success("회원 탈퇴 성공");
    }

    @Operation(summary = "이메일 인증코드 발송", description = "이메일 인증코드 발송", tags = {"Email Certification"})
    @PostMapping("/email-auth")
    public CommonResponse<String> emailAuth(@RequestBody EmailRequestVo emailRequestVo) {
        memberService.emailAuth(emailRequestVo);
        return CommonResponse.success("이메일 인증코드 발송 성공");
    }

}
