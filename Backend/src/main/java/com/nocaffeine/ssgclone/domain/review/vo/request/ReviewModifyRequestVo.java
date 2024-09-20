package com.nocaffeine.ssgclone.domain.review.vo.request;

import lombok.Getter;

import java.util.List;

@Getter
public class ReviewModifyRequestVo {
    private Long reviewId;
    private String content;
    private int rate;

    private List<String> imageUrl;

}
