package com.nocaffeine.ssgclone.domain.member.application;


import com.nocaffeine.ssgclone.domain.member.dto.request.MemberPasswordRequestDto;
import com.nocaffeine.ssgclone.domain.member.dto.response.MemberDetailResponseDto;

public interface MemberService {


    void updatePassword(String memberUuid, MemberPasswordRequestDto memberPasswordRequestDto);

    MemberDetailResponseDto findMember(String memberUuid);

    void removeMember(String memberUuid);

}
