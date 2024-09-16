package com.nocaffeine.ssgclone.domain.product.application;

import com.nocaffeine.ssgclone.domain.product.dto.response.productimage.ProductImageResponseDto;

import java.util.List;

public interface ProductImageService {

    List<ProductImageResponseDto> getProductImageList(Long id);

}
