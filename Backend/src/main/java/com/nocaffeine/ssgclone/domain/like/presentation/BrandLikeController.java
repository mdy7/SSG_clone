package com.nocaffeine.ssgclone.domain.like.presentation;


import com.nocaffeine.ssgclone.common.CommonResponse;
import com.nocaffeine.ssgclone.common.security.AuthenticationMember;
import com.nocaffeine.ssgclone.domain.like.application.BrandLikeService;
import com.nocaffeine.ssgclone.domain.like.dto.request.BrandLikeRemoveRequest;
import com.nocaffeine.ssgclone.domain.like.dto.request.BrandLikeAddRequest;
import com.nocaffeine.ssgclone.domain.like.dto.response.BrandLikeListResponse;
import com.nocaffeine.ssgclone.domain.like.dto.response.LikeStatusResponseDto;
import com.nocaffeine.ssgclone.domain.like.vo.response.BrandLikeStatusVo;
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
@RequestMapping("/api/v1/like/brand")
public class BrandLikeController {

    private final BrandLikeService brandLikeService;

    @Operation(summary = "브랜드 좋아요 추가", description = "브랜드 좋아요 추가")
    @PostMapping
    public CommonResponse<String> addBrandLike(@AuthenticationMember Member member, @RequestBody BrandLikeAddRequest brandLikeAddRequest){
        brandLikeService.addBrandLike(brandLikeAddRequest, member);
        return CommonResponse.success("브랜드 좋아요 성공");
    }

    @Operation(summary = "브랜드 좋아요 취소", description = "브랜드 좋아요 취소")
    @DeleteMapping
    public CommonResponse<String> removeBrandLike(@AuthenticationMember Member member, @RequestBody BrandLikeRemoveRequest brandLikeRemoveRequest){
        brandLikeService.removeBrandLike(brandLikeRemoveRequest, member);
        return CommonResponse.success("브랜드 좋아요 취소 성공");
    }

    @Operation(summary = "브랜드 좋아요 조회", description = "브랜드 좋아요 조회")
    @GetMapping
    public CommonResponse<List<BrandLikeListResponse>> brandLikeList(@AuthenticationMember Member member){
        return CommonResponse.success("브랜드 좋아요 조회 성공", brandLikeService.findBrandLike(member));
    }

    @Operation(summary = "브랜드 좋아요 여부", description = "브랜드 좋아요 여부")
    @GetMapping("/{brandId}")
    public CommonResponse<BrandLikeStatusVo> isBrandLike(@AuthenticationMember Member member, @PathVariable("brandId") Long brandId){
        return CommonResponse.success("브랜드 좋아요 여부 조회 성공", LikeStatusResponseDto.dtoToBrandVo(brandLikeService.isBrandLike(brandId, member)));
    }
}

