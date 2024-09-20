package com.nocaffeine.ssgclone.domain.like.dto.response;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BrandLikeListResponse {
    private Long brandId;
    private String brandName;
}
