package com.nocaffeine.ssgclone.domain.like.application;


import com.nocaffeine.ssgclone.common.exception.BaseException;
import com.nocaffeine.ssgclone.domain.like.infrastructure.ProductLikeRepository;
import com.nocaffeine.ssgclone.domain.like.domain.ProductLike;
import com.nocaffeine.ssgclone.domain.like.dto.request.ProductLikeAddRequest;
import com.nocaffeine.ssgclone.domain.like.dto.request.ProductLikeListRequestDto;
import com.nocaffeine.ssgclone.domain.like.dto.request.ProductLikeRemoveRequest;
import com.nocaffeine.ssgclone.domain.like.dto.response.LikeStatusResponseDto;
import com.nocaffeine.ssgclone.domain.like.dto.response.ProductLikeListResponse;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import com.nocaffeine.ssgclone.domain.product.domain.Product;
import com.nocaffeine.ssgclone.domain.product.infrastructure.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.nocaffeine.ssgclone.common.exception.ErrorCode.*;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class ProductLikeServiceImp implements ProductLikeService {

    private final ProductLikeRepository productLikeRepository;
    private final ProductRepository productRepository;

    /**
     * 상품 좋아요 하기
     */
    @Override
    @Transactional
    public void addProductLike(ProductLikeAddRequest productLikeAddRequest, Member member) {
        Product product = productRepository.findById(productLikeAddRequest.getProductId())
                .orElseThrow(() -> new BaseException(NO_PRODUCT));

        if(productLikeRepository.findByMemberAndProduct(member, product).isPresent()){
            // 이미 좋아요 했을경우
            throw new BaseException(ALREADY_ADDED_WISH_PRODUCT);
        }

        ProductLike productLike = ProductLike.builder()
                .member(member)
                .product(product)
                .build();

        productLikeRepository.save(productLike);
    }

    /**
     * 상품 좋아요 취소
     */
    @Override
    @Transactional
    public void removeProductLike(ProductLikeRemoveRequest productLikeRemoveRequest, Member member) {
        Product product = productRepository.findById(productLikeRemoveRequest.getProductId())
                .orElseThrow(() -> new BaseException(NO_PRODUCT));

        ProductLike productLike = productLikeRepository.findByMemberAndProduct(member, product)
                .orElseThrow(() -> new BaseException(NO_EXIST_WISH_PRODUCT));

        productLikeRepository.delete(productLike);

    }

    @Override
    @Transactional
    public void removeListProductLike(ProductLikeListRequestDto productLikeListRequestDto, Member member) {
        for (Long productId : productLikeListRequestDto.getProductId()) {
            Product product = productRepository.findById(productId)
                    .orElseThrow(() -> new BaseException(NO_PRODUCT));

            ProductLike productLike = productLikeRepository.findByMemberAndProduct(member, product)
                    .orElseThrow(() -> new BaseException(NO_EXIST_WISH_PRODUCT));

            productLikeRepository.delete(productLike);
        }
    }

    /**
     * 상품 좋아요 목록 조회
     */
    @Override
    public List<ProductLikeListResponse> findProductLike(Member member) {
        List<ProductLike> productLike = productLikeRepository.findByMember(member);

        List<ProductLikeListResponse> productLikeListResponses = new ArrayList<>();

        for (ProductLike like : productLike) {
            ProductLikeListResponse response = ProductLikeListResponse.builder()
                    .productLikeId(like.getId())
                    .productId(like.getProduct().getId())
                    .build();

            productLikeListResponses.add(response);
        }

        return productLikeListResponses;
    }

    /**
     * 상품 좋아요 여부 조회
     */
    @Override
    public LikeStatusResponseDto isProductLike(Long productId, Member member) {
        Product product = productRepository.findById(productId).orElseThrow(()
                -> new BaseException(NO_PRODUCT));

        return LikeStatusResponseDto.builder()
                .productId(productId)
                .isLike(productLikeRepository.findByMemberAndProduct(member, product).isPresent())
                .build();
    }

}
