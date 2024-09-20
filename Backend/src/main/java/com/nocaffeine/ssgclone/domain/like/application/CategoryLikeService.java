package com.nocaffeine.ssgclone.domain.like.application;

import com.nocaffeine.ssgclone.domain.like.dto.request.CategoryLikeAddRequest;
import com.nocaffeine.ssgclone.domain.like.dto.request.CategoryLikeRemoveRequest;
import com.nocaffeine.ssgclone.domain.like.dto.response.CategoryLikeListResponse;
import com.nocaffeine.ssgclone.domain.member.domain.Member;

import java.util.List;

public interface CategoryLikeService {
    void addCategoryLike(CategoryLikeAddRequest categoryLikeAddRequest, Member member);
    List<CategoryLikeListResponse> findCategoryLike(Member member);
    void removeCategoryLike(CategoryLikeRemoveRequest categoryLikeRemoveRequest, Member member);

}
