package com.nocaffeine.ssgclone.domain.like.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryLikeAddRequest {
    private Long mediumCategoryId;
    private Long smallCategoryId;
    private Long tinyCategoryId;
}
