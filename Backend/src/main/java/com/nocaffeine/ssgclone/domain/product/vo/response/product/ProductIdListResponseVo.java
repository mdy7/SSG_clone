package com.nocaffeine.ssgclone.domain.product.vo.response.product;

import com.nocaffeine.ssgclone.domain.product.dto.response.product.ProductIdListResponseDto;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ProductIdListResponseVo {

    private Long id;
    private Long productId;

    public ProductIdListResponseVo(Long id, Long productId) {
        this.id = id;
        this.productId = productId;
    }

    public static List<ProductIdListResponseVo> convertToVo(List<ProductIdListResponseDto> productIdListResponseDtoList) {

        List<ProductIdListResponseVo> productIdListResponseVoList = new ArrayList<>();

        for (ProductIdListResponseDto productIdListResponseDto : productIdListResponseDtoList) {
            productIdListResponseVoList.add(new ProductIdListResponseVo(
                    productIdListResponseDto.getId(),
                    productIdListResponseDto.getProductId()
            ));
        }
        return productIdListResponseVoList;
    }
}
