package com.nocaffeine.ssgclone.domain.member.dto.request;


import com.nocaffeine.ssgclone.domain.member.vo.request.AuthCheckRequestVo;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthCheckRequestDto {
    private String email;
    private String authCode;

    public static AuthCheckRequestDto voToDto(AuthCheckRequestVo authCheckRequestVo) {
        return AuthCheckRequestDto.builder()
                .email(authCheckRequestVo.getEmail())
                .authCode(authCheckRequestVo.getAuthCode())
                .build();
    }
}
