package com.nocaffeine.ssgclone.domain.like.application;

import com.nocaffeine.ssgclone.domain.like.dto.request.CategoryLikeAddRequest;
import com.nocaffeine.ssgclone.domain.like.dto.request.CategoryLikeRemoveRequest;
import com.nocaffeine.ssgclone.domain.like.dto.response.CategoryLikeListResponse;

import java.util.List;

public interface CategoryLikeService {
    void addCategoryLike(CategoryLikeAddRequest categoryLikeAddRequest, String memberUuid);
    List<CategoryLikeListResponse> findCategoryLike(String memberUuid);
    void removeCategoryLike(CategoryLikeRemoveRequest categoryLikeRemoveRequest, String memberUuid);

}
