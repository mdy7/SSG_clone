package com.nocaffeine.ssgclone.common.oauth2.handler;


import com.nocaffeine.ssgclone.common.jwt.JwtTokenProvider;
import com.nocaffeine.ssgclone.common.oauth2.dto.CustomOAuth2User;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
@RequiredArgsConstructor
@Slf4j
public class CustomOAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtTokenProvider jwtTokenProvider;


    /**
     * OAuth2 로그인 성공시 JWT 토큰 생성 후 리다이렉트
     */
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        log.info("OAuth2 로그인 성공");

        CustomOAuth2User customUserDetails = (CustomOAuth2User) authentication.getPrincipal();
        Member member = customUserDetails.getMember();

        String token = jwtTokenProvider.createToken(member.getUuid());

        // 응답 헤더에 JWT 토큰을 추가
        response.addHeader("Authorization", "Bearer " + token);
        String url = "http://localhost:3000";

        getRedirectStrategy().sendRedirect(request, response, url);
    }


}
