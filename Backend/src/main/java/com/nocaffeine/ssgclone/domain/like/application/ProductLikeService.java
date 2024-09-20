package com.nocaffeine.ssgclone.domain.like.application;

import com.nocaffeine.ssgclone.domain.like.dto.request.ProductLikeAddRequest;
import com.nocaffeine.ssgclone.domain.like.dto.request.ProductLikeListRequestDto;
import com.nocaffeine.ssgclone.domain.like.dto.request.ProductLikeRemoveRequest;
import com.nocaffeine.ssgclone.domain.like.dto.response.LikeStatusResponseDto;
import com.nocaffeine.ssgclone.domain.like.dto.response.ProductLikeListResponse;
import com.nocaffeine.ssgclone.domain.member.domain.Member;

import java.util.List;

public interface ProductLikeService {

    void addProductLike(ProductLikeAddRequest productLikeAddRequest, Member member);
    void removeProductLike(ProductLikeRemoveRequest productLikeRemoveRequest, Member member);
    void removeListProductLike(ProductLikeListRequestDto productLikeListRequestDto, Member member);
    List<ProductLikeListResponse> findProductLike(Member member);
    LikeStatusResponseDto isProductLike(Long productId, Member member);
}
