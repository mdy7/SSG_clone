package com.nocaffeine.ssgclone.domain.product.application;


import com.nocaffeine.ssgclone.domain.product.dto.response.total.ProductTotalResponseDto;

public interface TotalService {

    ProductTotalResponseDto findProductTotal(Long productId);


}
