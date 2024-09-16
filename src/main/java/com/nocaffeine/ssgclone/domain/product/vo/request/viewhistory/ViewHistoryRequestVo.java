package com.nocaffeine.ssgclone.domain.product.vo.request.viewhistory;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ViewHistoryRequestVo {

    private Long productId;

}
