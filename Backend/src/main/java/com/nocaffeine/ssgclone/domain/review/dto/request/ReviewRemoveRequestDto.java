package com.nocaffeine.ssgclone.domain.review.dto.request;

import com.nocaffeine.ssgclone.domain.review.vo.request.ReviewRemoveRequestVo;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReviewRemoveRequestDto {
    private Long reviewId;

    public static ReviewRemoveRequestDto voToDto(ReviewRemoveRequestVo reviewRemoveRequestVo) {
        return ReviewRemoveRequestDto.builder()
                .reviewId(reviewRemoveRequestVo.getReviewId())
                .build();
    }
}
