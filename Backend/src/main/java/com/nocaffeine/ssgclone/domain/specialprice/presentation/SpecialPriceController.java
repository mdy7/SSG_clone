package com.nocaffeine.ssgclone.domain.specialprice.presentation;
import com.nocaffeine.ssgclone.common.CommonResponse;
import com.nocaffeine.ssgclone.domain.specialprice.application.SpecialPriceService;
import com.nocaffeine.ssgclone.domain.specialprice.dto.response.SpecialPriceProductPageListResponseDto;
import com.nocaffeine.ssgclone.domain.specialprice.vo.response.SpecialPriceDetailResponseVo;
import com.nocaffeine.ssgclone.domain.specialprice.vo.response.SpecialPriceIdListResponseVo;
import com.nocaffeine.ssgclone.domain.specialprice.vo.response.SpecialPriceInfoResponseVo;
import com.nocaffeine.ssgclone.domain.specialprice.vo.response.SpecialPriceProductIPageListResponseVo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;
@RestController
@Slf4j
@RequiredArgsConstructor
@Tag(name="special", description = "특가")
@RequestMapping("api/v1/special")
public class SpecialPriceController {

    private final SpecialPriceService specialPriceService;

    @Operation(summary = "특가 id 나열", description = "특가 id 나열")
    @GetMapping
    public CommonResponse<List<SpecialPriceIdListResponseVo>> specialPriceList(){

        return CommonResponse.success("특가 목록을 순서대로 찾았습니다.", SpecialPriceIdListResponseVo.convertToVo(specialPriceService.findSpecialPriceIds()));

    }

    @Operation(summary = "특가별 정보 나열", description = "특가별 정보 나열")
    @GetMapping("/{specialPriceId}/list")
    public CommonResponse<SpecialPriceInfoResponseVo>
        specialPriceInfoList(@PathVariable("specialPriceId") Long specialPriceId){

     return CommonResponse.success("특가별 정보를 성공적으로 찾았습니다.",
            SpecialPriceInfoResponseVo.convertToVo(specialPriceService.findSpecialPriceInfo(specialPriceId)));
 }

    @Operation(summary = "특가별 상품 id 및 특가정보", description = "특가별 상품 id 및 특가정보")
    @GetMapping("/{specialPriceId}/product-list")
    public CommonResponse<SpecialPriceDetailResponseVo> specialPriceProductList(@PathVariable("specialPriceId") Long specialPriceId){

        return CommonResponse.success("특가별 상품 id를 성공적으로 찾았습니다.", SpecialPriceDetailResponseVo.convertToVo(specialPriceService.findSpecialPriceProductList(specialPriceId)));
    }

    @Operation(summary = "쓱 특가", description = "특가 id 랜덤 조회")
    @GetMapping("/random")
    public CommonResponse<List<SpecialPriceIdListResponseVo>> randomSpecialPriceIdList(){

        List<SpecialPriceIdListResponseVo> specialPriceIdListResponseVoList = SpecialPriceIdListResponseVo.convertToVo(specialPriceService.findSpecialPriceIds());
        Collections.shuffle(specialPriceIdListResponseVoList);

        return CommonResponse.success("특가 id를 랜덤으로 모두 찾았습니다.", specialPriceIdListResponseVoList);

    }

    // 특가별 상품 id 랜덤 페이징 조회
    @Operation(summary = "오늘의 장보기 페이징", description = "특가별 상품 id 랜덤 페이징 조회")
    @GetMapping("/random/special-price-product-paged")
    public CommonResponse<SpecialPriceProductIPageListResponseVo> getRandomSpecialPriceProductListPaged(
            @PageableDefault(size = 20,  sort = "id") Pageable page) {

        SpecialPriceProductPageListResponseDto specialPriceProductPageListResponseDto = specialPriceService.findSpecialPriceRandomIdPaged(page);

        return CommonResponse.success("특가별 상품을 랜덤으로 페이징으로 모두 찾았습니다.",
                SpecialPriceProductIPageListResponseVo.fromDtoToVo(specialPriceProductPageListResponseDto));
    }
}