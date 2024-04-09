package com.nocaffeine.ssgclone.brandstore.presentation;

import com.nocaffeine.ssgclone.brandstore.application.BrandService;
import com.nocaffeine.ssgclone.brandstore.vo.response.BrandProductIdResponseVo;
import com.nocaffeine.ssgclone.brandstore.vo.response.BrandResponseVo;
import com.nocaffeine.ssgclone.common.CommonResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/")
public class BrandController {

    private final BrandService brandService;
    @Operation(summary = "상품 브랜드 조회", description = "상품 브랜드 조회", tags = {"Product"})
    @GetMapping("product/{productId}/brand")
    public CommonResponse<BrandResponseVo> brandList(@PathVariable("productId") Long productId){

        return CommonResponse.success("브랜드를 성공적으로 찾았습니다.", BrandResponseVo.convertToVo(brandService.findBrand(productId)));
    }

    @Operation(summary = "브랜드별 상품 id 조회", description = "브랜드별 상품 id 조회", tags = {"Brand"})
    @GetMapping("brand/{brandId}/products")
    public CommonResponse<List<BrandProductIdResponseVo>> brandProductList(@PathVariable("brandId") Long brandId){

        return CommonResponse.success("브랜드별 상품을 성공적으로 찾았습니다.", BrandProductIdResponseVo.convertToVo(brandService.findBrandProductList(brandId)));
    }
}
