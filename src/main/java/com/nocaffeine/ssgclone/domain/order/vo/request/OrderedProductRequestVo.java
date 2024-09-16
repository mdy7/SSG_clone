package com.nocaffeine.ssgclone.domain.order.vo.request;

import lombok.Getter;

@Getter
public class OrderedProductRequestVo {
    private Long optionSelectedProductId;
    private int count;
    private int price;
}
