package com.nocaffeine.ssgclone.domain.like.domain;

import com.nocaffeine.ssgclone.domain.member.domain.Member;
import com.nocaffeine.ssgclone.domain.product.domain.Product;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class ProductLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotNull
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @NotNull
    private Product product;

    @Column(name = "like_folder_id")
    private Long likeFolder;


    @Builder
    public ProductLike(Member member, Product product, Long likeFolder) {
        this.member = member;
        this.product = product;
        this.likeFolder = likeFolder;
    }

}

