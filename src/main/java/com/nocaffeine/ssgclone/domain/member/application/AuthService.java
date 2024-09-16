package com.nocaffeine.ssgclone.domain.member.application;

import com.nocaffeine.ssgclone.domain.member.dto.request.*;
import com.nocaffeine.ssgclone.domain.member.dto.response.TokenResponseDto;

public interface AuthService {
    void snsAddMember(SnsMemberAddRequestDto snsMemberAddRequestDto);
    TokenResponseDto snsLogin(SnsMemberLoginRequestDto snsMemberLoginRequestDto);

    void addMember(MemberSaveRequestDto memberSaveRequestDto);
    void duplicationEmail(String email);
    TokenResponseDto logIn(MemberLoginRequestDto memberLoginRequestDto);

    void emailAuth(AuthEmailRequestDto authEmailRequestDto);
    void emailAuthCodeCheck(String email, String code);

    void logout(String token);
}
