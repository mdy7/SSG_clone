package com.nocaffeine.ssgclone.domain.member.dto.response;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TokenResponseDto {
    private String accessToken;
}
