package com.nocaffeine.ssgclone.domain.like.application;

import com.nocaffeine.ssgclone.domain.like.dto.ProductLikeAddDto;
import com.nocaffeine.ssgclone.domain.like.dto.LikeFolderDto;
import com.nocaffeine.ssgclone.domain.like.dto.ProductLikeListDto;
import com.nocaffeine.ssgclone.domain.like.dto.ProductLikeRemoveDto;
import com.nocaffeine.ssgclone.domain.member.domain.Member;

import java.util.List;

public interface LikeFolderService {

    void addLikeFolder(LikeFolderDto likeFolderDto, Member member);
    void removeLikeFolder(LikeFolderDto likeFolderDto, Member member);
    List<LikeFolderDto> findLikeFolder(Member member);
    void modifyLikeFolder(LikeFolderDto likeFolderDto, Member member);

    void addProductLike(ProductLikeAddDto productLikeAddDto, Member member);
    List<ProductLikeListDto> findProductLike(Long likeFolderId, Member member);
    void removeProductLike(ProductLikeRemoveDto productLikeRemoveDto, Member member);
}

