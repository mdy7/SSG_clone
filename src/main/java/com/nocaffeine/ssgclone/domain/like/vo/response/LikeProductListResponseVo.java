package com.nocaffeine.ssgclone.domain.like.vo.response;

import com.nocaffeine.ssgclone.domain.like.dto.ProductLikeListDto;
import lombok.Getter;

@Getter
public class LikeProductListResponseVo {
    private Long productLikeId;
    private Long productId;

    public LikeProductListResponseVo(ProductLikeListDto productLikeListDto) {
        this.productLikeId = productLikeListDto.getProductLikeId();
        this.productId = productLikeListDto.getProductId();
    }

    public static LikeProductListResponseVo dtoToVo(ProductLikeListDto productLikeListDto){
        return new LikeProductListResponseVo(productLikeListDto);
    }

}
