package com.nocaffeine.ssgclone.domain.like.dto.request;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductLikeAddRequest {
    private Long productId;
}
