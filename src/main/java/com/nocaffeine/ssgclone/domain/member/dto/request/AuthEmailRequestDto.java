package com.nocaffeine.ssgclone.domain.member.dto.request;

import com.nocaffeine.ssgclone.domain.member.vo.request.AuthEmailRequestVo;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthEmailRequestDto {
    private String email;

    public static AuthEmailRequestDto voToDto(AuthEmailRequestVo authEmailRequestVo) {
        return AuthEmailRequestDto.builder()
                .email(authEmailRequestVo.getEmail())
                .build();
    }
}
