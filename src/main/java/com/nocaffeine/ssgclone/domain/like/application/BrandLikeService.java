package com.nocaffeine.ssgclone.domain.like.application;

import com.nocaffeine.ssgclone.domain.like.dto.request.BrandLikeRemoveRequest;
import com.nocaffeine.ssgclone.domain.like.dto.request.BrandLikeAddRequest;
import com.nocaffeine.ssgclone.domain.like.dto.response.BrandLikeListResponse;
import com.nocaffeine.ssgclone.domain.like.dto.response.LikeStatusResponseDto;
import com.nocaffeine.ssgclone.domain.member.domain.Member;

import java.util.List;

public interface BrandLikeService {

    void addBrandLike(BrandLikeAddRequest brandLikeAddRequest, Member member);
    void removeBrandLike(BrandLikeRemoveRequest brandLikeRemoveRequest, Member member);

    List<BrandLikeListResponse> findBrandLike(Member member);

    LikeStatusResponseDto isBrandLike(Long brandId, Member member);
}
