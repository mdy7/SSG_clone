package com.nocaffeine.ssgclone.domain.product.application;

import com.nocaffeine.ssgclone.common.exception.BaseException;
import com.nocaffeine.ssgclone.domain.product.domain.Product;
import com.nocaffeine.ssgclone.domain.product.domain.Total;
import com.nocaffeine.ssgclone.domain.product.infrastructure.ProductRepository;
import com.nocaffeine.ssgclone.domain.product.infrastructure.TotalRepository;
import com.nocaffeine.ssgclone.domain.product.dto.response.total.ProductTotalResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

import static com.nocaffeine.ssgclone.common.exception.ErrorCode.*;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TotalServiceImpl implements TotalService {

    private final TotalRepository totalRepository;
    private final ProductRepository productRepository;

    /**
     * 상품의 집계 조회.
     */
    @Override
    public ProductTotalResponseDto findProductTotal(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new BaseException(NO_PRODUCT));

        Total total = totalRepository.findByProduct(product)
                .orElseGet(() -> Total.builder()
                        .product(product)
                        .rateAverage(0.0)
                        .sales(0)
                        .build());

        return ProductTotalResponseDto.builder()
                .totalId(total.getId())
                .productId(product.getId())
                .sales(total.getSales())
                .rateAverage(BigDecimal.valueOf(total.getRateAverage()))
                .reviewCount(total.getReviewCount())
                .build();
    }
}
