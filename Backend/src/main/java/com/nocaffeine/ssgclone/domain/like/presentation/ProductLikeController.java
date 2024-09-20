package com.nocaffeine.ssgclone.domain.like.presentation;


import com.nocaffeine.ssgclone.common.CommonResponse;
import com.nocaffeine.ssgclone.common.security.AuthenticationMember;
import com.nocaffeine.ssgclone.domain.like.application.ProductLikeService;
import com.nocaffeine.ssgclone.domain.like.dto.request.ProductLikeAddRequest;
import com.nocaffeine.ssgclone.domain.like.dto.request.ProductLikeListRequestDto;
import com.nocaffeine.ssgclone.domain.like.dto.request.ProductLikeRemoveRequest;
import com.nocaffeine.ssgclone.domain.like.dto.response.LikeStatusResponseDto;
import com.nocaffeine.ssgclone.domain.like.dto.response.ProductLikeListResponse;
import com.nocaffeine.ssgclone.domain.like.vo.request.ProductLikeListRequestVo;
import com.nocaffeine.ssgclone.domain.like.vo.response.ProductLikeStatusVo;
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
@RequestMapping("/api/v1/like/product")
public class ProductLikeController {

    private final ProductLikeService productLikeService;

    @Operation(summary = "상품 좋아요 추가", description = "상품 좋아요 추가")
    @PostMapping
    public CommonResponse<String> addProductLike(@AuthenticationMember Member member, @RequestBody ProductLikeAddRequest productLikeAddRequest){
        productLikeService.addProductLike(productLikeAddRequest, member);
        return CommonResponse.success("좋아요 성공");
    }

    @Operation(summary = "상품 좋아요 취소", description = "상품 좋아요 취소")
    @DeleteMapping
    public CommonResponse<String> removeProductLike(@AuthenticationMember Member member, @RequestBody ProductLikeRemoveRequest productLikeRemoveRequest){
        productLikeService.removeProductLike(productLikeRemoveRequest, member);
        return CommonResponse.success("좋아요 취소 성공");
    }

    @Operation(summary = "상품 좋아요 여러개 취소", description = "상품 좋아요 여러개 취소")
    @DeleteMapping("/list")
    public CommonResponse<String> removeListProductLike(@AuthenticationMember Member member, @RequestBody ProductLikeListRequestVo productLikeListRequestVo){
        productLikeService.removeListProductLike(ProductLikeListRequestDto.voToDto(productLikeListRequestVo), member);
        return CommonResponse.success("좋아요 여러개 취소 성공");
    }

    @Operation(summary = "상품 좋아요 조회", description = "상품 좋아요 조회")
    @GetMapping
    public CommonResponse<List<ProductLikeListResponse>> findProductLike(@AuthenticationMember Member member){
        return CommonResponse.success("좋아요 조회 성공", productLikeService.findProductLike(member));
    }

    @Operation(summary = "상품 좋아요 여부", description = "상품 좋아요 여부")
    @GetMapping("/{productId}")
    public CommonResponse<ProductLikeStatusVo> isProductLike(@AuthenticationMember Member member, @PathVariable("productId") Long productId){
        return CommonResponse.success("좋아요 여부 조회 성공", LikeStatusResponseDto.dtoToProductVo(productLikeService.isProductLike(productId, member)));
    }


}
