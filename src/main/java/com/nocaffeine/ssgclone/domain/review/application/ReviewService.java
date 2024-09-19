package com.nocaffeine.ssgclone.domain.review.application;

import com.nocaffeine.ssgclone.domain.member.domain.Member;
import com.nocaffeine.ssgclone.domain.review.dto.request.ReviewAddRequestDto;
import com.nocaffeine.ssgclone.domain.review.dto.request.ReviewModifyRequestDto;
import com.nocaffeine.ssgclone.domain.review.dto.request.ReviewRemoveRequestDto;
import com.nocaffeine.ssgclone.domain.review.dto.response.ReviewDetailResponseDto;
import com.nocaffeine.ssgclone.domain.review.dto.response.ReviewImageResponseDto;
import com.nocaffeine.ssgclone.domain.review.dto.response.ReviewListResponseDto;
import com.nocaffeine.ssgclone.domain.review.dto.response.ReviewPossibleWriteResponseDto;

import java.util.List;

public interface ReviewService {

    void addReview(ReviewAddRequestDto reviewAddRequestDto, Member member);

    void removeReview(ReviewRemoveRequestDto reviewRemoveRequestDto, Member member);

    List<ReviewPossibleWriteResponseDto> findWritableReviews(Member member);

    void modifyReview(ReviewModifyRequestDto reviewModifyRequestDto, Member member);

    List<ReviewListResponseDto> findReviewByProduct(Long productId);

    ReviewDetailResponseDto findReviewDetail(Long reviewId);

    List<ReviewImageResponseDto> findReviewImage(Long reviewId);

    List<ReviewListResponseDto> findMyReviews(Member member);
}
