package com.nocaffeine.ssgclone.domain.like.presentation;


import com.nocaffeine.ssgclone.common.CommonResponse;
import com.nocaffeine.ssgclone.common.security.AuthenticationMember;
import com.nocaffeine.ssgclone.domain.like.application.CategoryLikeService;
import com.nocaffeine.ssgclone.domain.like.dto.request.CategoryLikeAddRequest;
import com.nocaffeine.ssgclone.domain.like.dto.request.CategoryLikeRemoveRequest;
import com.nocaffeine.ssgclone.domain.like.dto.response.CategoryLikeListResponse;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@Tag(name = "Like", description = "좋아요")
@RequestMapping("/api/v1/like/category")
public class CategoryLikeController {

    private final CategoryLikeService categoryLikeService;

    @Operation(summary = "카테고리 좋아요 추가", description = "카테고리 좋아요 추가")
    @PostMapping
    public CommonResponse<String> addCategoryLike(@AuthenticationMember Member member, @RequestBody CategoryLikeAddRequest categoryLikeAddRequest){
        categoryLikeService.addCategoryLike(categoryLikeAddRequest, member);
        return CommonResponse.success("카테고리 좋아요 성공");
    }

    @Operation(summary = "카테고리 좋아요 조회", description = "카테고리 좋아요 조회")
    @GetMapping
    public CommonResponse<List<CategoryLikeListResponse>> findCategoryLike(@AuthenticationMember Member member){
        return CommonResponse.success("카테고리 좋아요 조회 성공",categoryLikeService.findCategoryLike(member));
    }

    @Operation(summary = "카테고리 좋아요 삭제", description = "카테고리 좋아요 삭제")
    @DeleteMapping
    public CommonResponse<String> removeCategoryLike(@AuthenticationMember Member member, @RequestBody CategoryLikeRemoveRequest categoryLikeRemoveRequest){
        categoryLikeService.removeCategoryLike(categoryLikeRemoveRequest, member);
        return CommonResponse.success("카테고리 좋아요 삭제 성공");
    }



}
