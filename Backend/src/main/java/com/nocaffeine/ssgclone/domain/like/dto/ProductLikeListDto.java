package com.nocaffeine.ssgclone.domain.like.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductLikeListDto {
    private Long productLikeId;
    private Long productId;

}
