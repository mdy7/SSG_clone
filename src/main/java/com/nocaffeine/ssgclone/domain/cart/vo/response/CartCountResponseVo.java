package com.nocaffeine.ssgclone.domain.cart.vo.response;

import lombok.Getter;

@Getter
public class CartCountResponseVo {
    private int cartCount;

    public CartCountResponseVo(int cartCount) {
        this.cartCount = cartCount;
    }
}
