package com.nocaffeine.ssgclone.domain.like.dto;


import com.nocaffeine.ssgclone.domain.like.vo.request.ProductLikeMoveRequestVo;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductLikeAddDto {

    private List<Long> likeFolderId;
    private List<Long> productId;


    public static ProductLikeAddDto voToDto(ProductLikeMoveRequestVo productLikeMoveRequestVo){
        return ProductLikeAddDto.builder()
                .likeFolderId(productLikeMoveRequestVo.getLikeFolderId())
                .productId(productLikeMoveRequestVo.getProductId())
                .build();
    }

}
