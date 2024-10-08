package com.nocaffeine.ssgclone.domain.specialprice.dto.response;

import com.nocaffeine.ssgclone.domain.specialprice.domain.SpecialPriceList;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SpecialPriceProductIdResponseDto {

    private Long productId;

    public static SpecialPriceProductIdResponseDto fromSpecialPriceProductIdResponseDto(SpecialPriceList specialPriceList) {
        return SpecialPriceProductIdResponseDto.builder()
                .productId(specialPriceList.getProduct().getId())
                .build();
    }
}
