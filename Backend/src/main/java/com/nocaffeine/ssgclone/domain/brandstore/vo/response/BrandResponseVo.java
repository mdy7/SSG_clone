package com.nocaffeine.ssgclone.domain.brandstore.vo.response;

import com.nocaffeine.ssgclone.domain.brandstore.dto.response.BrandResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = lombok.AccessLevel.PROTECTED)
public class BrandResponseVo {

    private Long brandId;
    private String brandName;


    public BrandResponseVo(Long brandId, String brandName) {
        this.brandId = brandId;
        this.brandName = brandName;
    }

    public static BrandResponseVo convertToVo(BrandResponseDto brandResponseDto) {
        return new BrandResponseVo(
                brandResponseDto.getBrandId(),
                brandResponseDto.getBrandName()
        );
    }
}
