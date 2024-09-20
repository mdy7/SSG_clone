package com.nocaffeine.ssgclone.domain.product.vo.request.viewhistory;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class ViewHistoryDeleteRequestVo {

    private List<Long> productIds;
}
