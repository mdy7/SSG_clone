package com.nocaffeine.ssgclone.domain.member.vo.request;

import lombok.Getter;

@Getter
public class AuthCheckRequestVo {
    private String email;
    private String authCode;
}
