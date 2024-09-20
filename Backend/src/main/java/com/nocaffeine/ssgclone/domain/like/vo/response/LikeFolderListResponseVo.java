package com.nocaffeine.ssgclone.domain.like.vo.response;

import com.nocaffeine.ssgclone.domain.like.dto.LikeFolderDto;
import lombok.Getter;

@Getter
public class LikeFolderListResponseVo {
    private Long folderId;
    private String name;

    public LikeFolderListResponseVo(LikeFolderDto likeFolderDto) {
        this.folderId = likeFolderDto.getLikeFolderId();
        this.name = likeFolderDto.getName();
    }

    public static LikeFolderListResponseVo dtoToVo(LikeFolderDto likeFolderDto){
        return new LikeFolderListResponseVo(likeFolderDto);
    }
}
