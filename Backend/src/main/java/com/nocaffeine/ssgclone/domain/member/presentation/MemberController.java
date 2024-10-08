package com.nocaffeine.ssgclone.domain.member.presentation;

import com.nocaffeine.ssgclone.common.CommonResponse;
import com.nocaffeine.ssgclone.common.security.AuthenticationMember;
import com.nocaffeine.ssgclone.domain.member.application.MemberService;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import com.nocaffeine.ssgclone.domain.member.dto.request.MemberPasswordRequestDto;
import com.nocaffeine.ssgclone.domain.member.dto.response.MemberDetailResponseDto;
import com.nocaffeine.ssgclone.domain.member.vo.request.MemberPasswordRequestVo;
import com.nocaffeine.ssgclone.domain.member.vo.response.MemberDetailResponseVo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequiredArgsConstructor
@Tag(name = "Member", description = "회원")
@RequestMapping("/api/v1")
public class MemberController {

    private final MemberService memberService;


    @Operation(summary = "비밀번호 변경", description = "비밀번호 변경")
    @PutMapping("/member/password")
    public CommonResponse<String> changePassword(@AuthenticationMember Member member, @RequestBody MemberPasswordRequestVo memberPasswordRequestVo) {
        memberService.updatePassword(member, MemberPasswordRequestDto.voToDto(memberPasswordRequestVo));
        return CommonResponse.success("비밀번호 변경 성공");
    }

    @Operation(summary = "회원 상세 정보", description = "회원 상세 정보")
    @GetMapping("/member")
    public CommonResponse<MemberDetailResponseVo> memberDetail(@AuthenticationMember Member member) {
        return CommonResponse.success("회원 상세 조회 성공", MemberDetailResponseDto.dtoToVo(memberService.findMember(member)));
    }

    @Operation(summary = "회원 탈퇴", description = "회원 탈퇴")
    @DeleteMapping("/member")
    public CommonResponse<String> memberRemove(@AuthenticationMember Member member) {
        memberService.removeMember(member);
        return CommonResponse.success("회원 탈퇴 성공");
    }

}
