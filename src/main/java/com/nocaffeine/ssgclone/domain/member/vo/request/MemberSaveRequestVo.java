package com.nocaffeine.ssgclone.domain.member.vo.request;

import lombok.Getter;

@Getter
public class MemberSaveRequestVo {
    private String email;
    private String password;
    private String name;
    private String phoneNumber;

}
