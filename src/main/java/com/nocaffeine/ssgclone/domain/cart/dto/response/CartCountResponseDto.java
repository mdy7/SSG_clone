package com.nocaffeine.ssgclone.domain.cart.dto.response;

import com.nocaffeine.ssgclone.domain.cart.vo.response.CartCountResponseVo;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartCountResponseDto {
    private int cartCount;

    public static CartCountResponseVo dtoToVo(CartCountResponseDto cartCountResponseDto) {
        return new CartCountResponseVo(cartCountResponseDto.getCartCount());

    }
}
