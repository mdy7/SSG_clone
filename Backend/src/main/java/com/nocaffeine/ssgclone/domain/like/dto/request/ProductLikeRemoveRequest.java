package com.nocaffeine.ssgclone.domain.like.dto.request;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductLikeRemoveRequest {
    private Long productId;
}
