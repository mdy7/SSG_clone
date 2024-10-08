package com.nocaffeine.ssgclone.domain.like.application;


import com.nocaffeine.ssgclone.common.exception.BaseException;
import com.nocaffeine.ssgclone.domain.like.domain.CategoryLike;
import com.nocaffeine.ssgclone.domain.like.dto.request.CategoryLikeAddRequest;
import com.nocaffeine.ssgclone.domain.like.dto.request.CategoryLikeRemoveRequest;
import com.nocaffeine.ssgclone.domain.like.dto.response.CategoryLikeListResponse;
import com.nocaffeine.ssgclone.domain.like.infrastructure.CategoryLikeRepository;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import com.nocaffeine.ssgclone.domain.member.infrastructure.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.nocaffeine.ssgclone.common.exception.ErrorCode.*;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class CategoryLikeServiceImp implements CategoryLikeService{

    private final MemberRepository memberRepository;
    private final CategoryLikeRepository categoryLikeRepository;


    /**
     * 카테고리 좋아요 추가
     */
    @Override
    @Transactional
    public void addCategoryLike(CategoryLikeAddRequest categoryLikeAddRequest, Member member) {
        categoryLikeRepository.findByMemberAndMediumCategoryAndSmallCategoryAndTinyCategory(member, categoryLikeAddRequest.getMediumCategoryId(),
                categoryLikeAddRequest.getSmallCategoryId(), categoryLikeAddRequest.getTinyCategoryId())
                .ifPresent(categoryLike -> {
                    throw new BaseException(ALREADY_ADDED_WISH_CATEGORY);
                });

        CategoryLike categoryLike = CategoryLike.builder()
                .mediumCategory(categoryLikeAddRequest.getMediumCategoryId())
                .smallCategory(categoryLikeAddRequest.getSmallCategoryId())
                .tinyCategory(categoryLikeAddRequest.getTinyCategoryId())
                .member(member)
                .build();

        categoryLikeRepository.save(categoryLike);

    }


    /**
     * 카테고리 좋아요 조회
     */
    @Override
    public List<CategoryLikeListResponse> findCategoryLike(Member member) {
        List<CategoryLike> categoryLike = categoryLikeRepository.findByMember(member);

        List<CategoryLikeListResponse> response = new ArrayList<>();

        for (CategoryLike like : categoryLike) {

            CategoryLikeListResponse CategoryLikeResponse = CategoryLikeListResponse.builder()
                    .CategoryLikeId(like.getId())
                    .mediumCategoryId(like.getMediumCategory())
                    .smallCategoryId(like.getSmallCategory())
                    .tinyCategoryId(like.getTinyCategory())
                    .build();

            response.add(CategoryLikeResponse);
        }

        return response;
    }

    /**
     * 카테고리 좋아요 삭제
     */
    @Override
    @Transactional
    public void removeCategoryLike(CategoryLikeRemoveRequest categoryLikeRemoveRequest, Member member) {
        CategoryLike categoryLike = categoryLikeRepository.findByIdAndMember(categoryLikeRemoveRequest.getCategoryLikeId(), member)
                .orElseThrow(() -> new BaseException(NO_DATA));

        categoryLikeRepository.delete(categoryLike);
    }
}
