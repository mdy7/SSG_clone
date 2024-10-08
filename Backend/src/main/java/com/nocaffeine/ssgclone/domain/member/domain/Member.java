package com.nocaffeine.ssgclone.domain.member.domain;

import com.nocaffeine.ssgclone.common.BaseTimeEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class Member extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(length = 100)
    private String email;

    @NotNull
    @Column(length = 255)
    private String password;

    @Column(length = 255)
    private String uuid;

    @NotNull
    @Column(length = 50)
    private String name;

    @NotNull
    @Column(length = 50)
    private String phoneNumber;

    @Column(length = 255)
    private String address;

    // 탈퇴여부
    @NotNull
    private boolean status;

    @Enumerated(EnumType.STRING)
    private MemberRole role;


    public void hashPassword(String password) {
        this.password = new BCryptPasswordEncoder().encode(password);
    }
}

