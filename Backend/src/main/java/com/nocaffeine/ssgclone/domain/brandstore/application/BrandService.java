package com.nocaffeine.ssgclone.domain.brandstore.application;

import com.nocaffeine.ssgclone.domain.brandstore.dto.response.BrandProductIdPageListResponseDto;
import com.nocaffeine.ssgclone.domain.brandstore.dto.response.BrandProductIdResponseDto;
import com.nocaffeine.ssgclone.domain.brandstore.dto.response.BrandResponseDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BrandService {

    BrandResponseDto findBrand(Long productId);

    List<BrandProductIdResponseDto> findBrandProductList(Long brandId);

    BrandProductIdPageListResponseDto findBrandProductListPaged(Long brandId, Pageable page);
}
