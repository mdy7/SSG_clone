package com.nocaffeine.ssgclone.domain.order.vo.response;

import lombok.Getter;

@Getter
public class OrderStatusResponseVo {
    private int count;

    public OrderStatusResponseVo(int count) {
        this.count = count;
    }
}
