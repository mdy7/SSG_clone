package com.nocaffeine.ssgclone.domain.review.dto.response;


import com.nocaffeine.ssgclone.domain.review.vo.response.ReviewImageResponseVo;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReviewImageResponseDto {
    private String imageUrl;

    public static ReviewImageResponseVo dtoToVo(ReviewImageResponseDto reviewImageResponseDto) {
        return new ReviewImageResponseVo(reviewImageResponseDto.getImageUrl());
    }
}
