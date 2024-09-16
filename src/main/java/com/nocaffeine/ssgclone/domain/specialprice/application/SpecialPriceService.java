package com.nocaffeine.ssgclone.domain.specialprice.application;
import com.nocaffeine.ssgclone.domain.specialprice.dto.response.SpecialPriceDetailResponseDto;
import com.nocaffeine.ssgclone.domain.specialprice.dto.response.SpecialPriceIdListResponseDto;
import com.nocaffeine.ssgclone.domain.specialprice.dto.response.SpecialPriceInfoResponseDto;
import com.nocaffeine.ssgclone.domain.specialprice.dto.response.SpecialPriceProductPageListResponseDto;
import org.springframework.data.domain.Pageable;

import java.util.List;
public interface SpecialPriceService {
    List<SpecialPriceIdListResponseDto> findSpecialPriceIds();

    SpecialPriceInfoResponseDto findSpecialPriceInfo(Long specialPriceId);

    SpecialPriceDetailResponseDto findSpecialPriceProductList(Long specialPriceId);

    SpecialPriceProductPageListResponseDto findSpecialPriceRandomIdPaged(Pageable page);
}