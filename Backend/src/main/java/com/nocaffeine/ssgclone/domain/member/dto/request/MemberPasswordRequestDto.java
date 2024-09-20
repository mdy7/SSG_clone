package com.nocaffeine.ssgclone.domain.member.dto.request;

import com.nocaffeine.ssgclone.domain.member.vo.request.MemberPasswordRequestVo;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberPasswordRequestDto {
    public String password;
    public String PasswordCheck;

    public static MemberPasswordRequestDto voToDto(MemberPasswordRequestVo memberPasswordRequestVo) {
        return MemberPasswordRequestDto.builder()
                .password(memberPasswordRequestVo.getPassword())
                .PasswordCheck(memberPasswordRequestVo.getPasswordCheck())
                .build();
    }
}
