package com.nocaffeine.ssgclone.domain.review.vo.response;

import lombok.Getter;

@Getter
public class ReviewListResponseVo {
    private Long reviewId;


    public ReviewListResponseVo(Long reviewId, String memberName, String content, int rate, String createdAt) {
        this.reviewId = reviewId;

    }
}
