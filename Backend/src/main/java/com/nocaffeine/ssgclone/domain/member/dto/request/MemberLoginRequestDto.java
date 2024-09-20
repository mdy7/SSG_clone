package com.nocaffeine.ssgclone.domain.member.dto.request;

import com.nocaffeine.ssgclone.domain.member.vo.request.MemberLoginRequestVo;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberLoginRequestDto {
    private String email;
    private String password;

    public static MemberLoginRequestDto voToDto(MemberLoginRequestVo memberLoginRequestVo) {
        return MemberLoginRequestDto.builder()
                .email(memberLoginRequestVo.getEmail())
                .password(memberLoginRequestVo.getPassword())
                .build();
    }

}

