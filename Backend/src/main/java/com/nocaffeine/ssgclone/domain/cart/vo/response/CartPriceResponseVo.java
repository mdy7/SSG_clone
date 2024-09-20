package com.nocaffeine.ssgclone.domain.cart.vo.response;

import lombok.Getter;

@Getter
public class CartPriceResponseVo {
    private int quantity;
    private int totalPrice;

    public CartPriceResponseVo(int quantity, int totalPrice) {
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
}
