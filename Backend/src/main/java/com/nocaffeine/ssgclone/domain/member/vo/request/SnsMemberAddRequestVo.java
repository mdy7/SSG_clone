package com.nocaffeine.ssgclone.domain.member.vo.request;

import com.nocaffeine.ssgclone.domain.member.dto.request.SnsMemberAddRequestDto;
import lombok.Getter;

@Getter
public class SnsMemberAddRequestVo {
    private String snsId;
    private String snsType;
    private String email;

    private String name;
    private String phoneNumber;

    public static SnsMemberAddRequestDto voToDto(SnsMemberAddRequestVo snsMemberAddRequestVo) {
        return SnsMemberAddRequestDto.builder()
                .snsId(snsMemberAddRequestVo.getSnsId())
                .snsType(snsMemberAddRequestVo.getSnsType())
                .email(snsMemberAddRequestVo.getEmail())
                .name(snsMemberAddRequestVo.getName())
                .phoneNumber(snsMemberAddRequestVo.getPhoneNumber())
                .build();
    }
}
