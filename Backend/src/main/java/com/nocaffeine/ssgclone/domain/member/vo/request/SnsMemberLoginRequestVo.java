package com.nocaffeine.ssgclone.domain.member.vo.request;

import lombok.Getter;

@Getter
public class SnsMemberLoginRequestVo {
    private String snsId;
    private String snsType;
    private String email;
}
