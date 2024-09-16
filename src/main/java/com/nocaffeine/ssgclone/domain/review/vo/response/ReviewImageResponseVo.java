package com.nocaffeine.ssgclone.domain.review.vo.response;

import lombok.Getter;

@Getter
public class ReviewImageResponseVo {
    private String imageUrl;

    public ReviewImageResponseVo(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
