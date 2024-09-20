package com.nocaffeine.ssgclone.domain.cart.dto.response;

import com.nocaffeine.ssgclone.domain.cart.vo.response.CartPriceResponseVo;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartPriceResponseDto {

    private int quantity;
    private int totalPrice;

    public static CartPriceResponseVo dtoToVo(CartPriceResponseDto cartPriceResponseDto) {
        return new CartPriceResponseVo(cartPriceResponseDto.getQuantity(), cartPriceResponseDto.getTotalPrice());
    }
}
