package com.nocaffeine.ssgclone.domain.product.dto.response.viewhistory;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ViewHistoryPageListResponseDto {

    private boolean next;
    private boolean last;
    private List<ViewHistoryResponseDto> viewHistoryResponseDtoList;

    public static ViewHistoryPageListResponseDto fromViewHistoryPageListResponseDto(boolean next, boolean last, List<ViewHistoryResponseDto> viewHistoryResponseDtoList) {
        return ViewHistoryPageListResponseDto.builder()
                .next(next)
                .last(last)
                .viewHistoryResponseDtoList(viewHistoryResponseDtoList)
                .build();
    }
}
