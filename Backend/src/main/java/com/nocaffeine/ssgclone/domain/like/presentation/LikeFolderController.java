package com.nocaffeine.ssgclone.domain.like.presentation;


import com.nocaffeine.ssgclone.common.CommonResponse;
import com.nocaffeine.ssgclone.common.security.AuthenticationMember;
import com.nocaffeine.ssgclone.common.security.JwtTokenProvider;
import com.nocaffeine.ssgclone.domain.like.application.LikeFolderService;
import com.nocaffeine.ssgclone.domain.like.dto.ProductLikeAddDto;
import com.nocaffeine.ssgclone.domain.like.dto.LikeFolderDto;
import com.nocaffeine.ssgclone.domain.like.dto.ProductLikeListDto;
import com.nocaffeine.ssgclone.domain.like.dto.ProductLikeRemoveDto;
import com.nocaffeine.ssgclone.domain.like.vo.request.*;
import com.nocaffeine.ssgclone.domain.like.vo.response.LikeFolderListResponseVo;
import com.nocaffeine.ssgclone.domain.like.vo.response.LikeProductListResponseVo;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@Tag(name = "Like Folder", description = "좋아요 폴더")
@RequestMapping("/api/v1/like/folder")
public class LikeFolderController {

    private final LikeFolderService likeFolderService;

    @Operation(summary = "폴더 추가", description = "폴더 추가")
    @PostMapping
    public CommonResponse<String> folderAdd(@AuthenticationMember Member member, @RequestBody LikeFolderAddRequestVo likeFolderAddRequestVo){
        LikeFolderDto likeFolderDto = LikeFolderDto.voToDto(likeFolderAddRequestVo);
        likeFolderService.addLikeFolder(likeFolderDto, member);
        return CommonResponse.success("폴더 추가 성공");

    }

    @Operation(summary = "폴더 조회", description = "폴더 조회")
    @GetMapping
    public CommonResponse<List<LikeFolderListResponseVo>> folderList(@AuthenticationMember Member member){
        List<LikeFolderDto> likeFolderListDto = likeFolderService.findLikeFolder(member);

        List<LikeFolderListResponseVo> likeFolderListResponseVo = new ArrayList<>();
        for (LikeFolderDto likeFolderDto : likeFolderListDto) {
            likeFolderListResponseVo.add(LikeFolderListResponseVo.dtoToVo(likeFolderDto));
        }

        return CommonResponse.success("폴더 조회 성공",likeFolderListResponseVo);
    }

    @Operation(summary = "폴더 삭제", description = "폴더 삭제")
    @DeleteMapping
    public CommonResponse<String> folderRemove(@AuthenticationMember Member member, @RequestBody LikeFolderRemoveRequestVo likeFolderRemoveRequestVo){
        LikeFolderDto likeFolderDto = LikeFolderDto.voToDto(likeFolderRemoveRequestVo);
        likeFolderService.removeLikeFolder(likeFolderDto, member);
        return CommonResponse.success("폴더 삭제 성공");
    }

    @Operation(summary = "폴더 이름 수정", description = "폴더 이름 수정")
    @PatchMapping
    public CommonResponse<String> folderModify(@AuthenticationMember Member member, @RequestBody LikeFolderModifyRequestVo likeFolderModifyRequestVo){
        LikeFolderDto likeFolderDto = LikeFolderDto.voToDto(likeFolderModifyRequestVo);
        likeFolderService.modifyLikeFolder(likeFolderDto, member);
        return CommonResponse.success("폴더 이름 수정 성공");
    }

    @Operation(summary = "선택한 폴더에 좋아요 상품 추가", description = "선택한 폴더에 좋아요 상품 추가")
    @PostMapping("/product")
    public CommonResponse<String> productLikeAdd(@AuthenticationMember Member member, @RequestBody ProductLikeMoveRequestVo productLikeMoveRequestVo){
        ProductLikeAddDto productLikeAddDto = ProductLikeAddDto.voToDto(productLikeMoveRequestVo);
        likeFolderService.addProductLike(productLikeAddDto, member);
        return CommonResponse.success("폴더 추가 성공");
    }

    @Operation(summary = "폴더에 담긴 상품 좋아요 조회", description = "폴더 담긴 상품 좋아요 조회")
    @GetMapping("/{likeFolderId}/product")
    public CommonResponse<List<LikeProductListResponseVo>> productLikeList(@AuthenticationMember Member member, @PathVariable("likeFolderId") Long likeFolderId){
        List<ProductLikeListDto> likeFolderProductList = likeFolderService.findProductLike(likeFolderId, member);

        List<LikeProductListResponseVo> likeFolderListResponseVo = new ArrayList<>();
        for (ProductLikeListDto productLikeListDto : likeFolderProductList) {
            likeFolderListResponseVo.add(LikeProductListResponseVo.dtoToVo(productLikeListDto));
        }

        return CommonResponse.success("폴더 상품 조회 성공", likeFolderListResponseVo);
    }

    @Operation(summary = "폴더에 담긴 상품 좋아요 삭제", description = "폴더 담긴 상품 좋아요 삭제")
    @DeleteMapping("/product")
    public CommonResponse<String> productLikeRemove(@AuthenticationMember Member member, @RequestBody ProductLikeRemoveRequestVo productLikeRemoveRequestVo){
        ProductLikeRemoveDto productLikeRemoveDto = ProductLikeRemoveDto.voToDto(productLikeRemoveRequestVo);
        likeFolderService.removeProductLike(productLikeRemoveDto, member);
        return CommonResponse.success("폴더 삭제 성공");
    }



}
