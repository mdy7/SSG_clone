package com.nocaffeine.ssgclone.domain.cart.presentation;


import com.nocaffeine.ssgclone.common.security.AuthenticationMember;
import com.nocaffeine.ssgclone.domain.cart.application.CartService;
import com.nocaffeine.ssgclone.domain.cart.dto.request.CartAddRequestDto;
import com.nocaffeine.ssgclone.domain.cart.dto.response.CartCountResponseDto;
import com.nocaffeine.ssgclone.domain.cart.dto.response.CartListResponseDto;
import com.nocaffeine.ssgclone.domain.cart.dto.response.CartPriceResponseDto;
import com.nocaffeine.ssgclone.domain.cart.vo.request.CartAddRequestVo;
import com.nocaffeine.ssgclone.domain.cart.vo.response.CartCountResponseVo;
import com.nocaffeine.ssgclone.domain.cart.vo.response.CartListResponseVo;
import com.nocaffeine.ssgclone.domain.cart.vo.response.CartPriceResponseVo;
import com.nocaffeine.ssgclone.common.CommonResponse;
import com.nocaffeine.ssgclone.common.security.JwtTokenProvider;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@Tag(name = "Cart", description = "장바구니")
@RequestMapping("/api/v1/cart")
public class CartController {

    private final CartService cartService;


    @Operation(summary = "장바구니에 상품 추가", description = "장바구니에 상품 추가")
    @PostMapping
    public CommonResponse<String> cartAdd(@AuthenticationMember Member member, @RequestBody CartAddRequestVo cartAddRequestVo) {
        cartService.addCart(CartAddRequestDto.voToDto(cartAddRequestVo), member);
        return CommonResponse.success("장바구니 상품 추가 성공.");
    }

    @Operation(summary = "장바구니 상품 선택 삭제", description = "장바구니에 상품 선택 삭제")
    @DeleteMapping
    public CommonResponse<String> cartRemoveList(@RequestParam("cartId") List<Long> cartId) {
        cartService.removeCartList(cartId);
        return CommonResponse.success("장바구니 상품 삭제 성공.");
    }

    @Operation(summary = "장바구니 상품 단건 삭제", description = "장바구니 상품 단건 삭제")
    @DeleteMapping("/{cartId}")
    public CommonResponse<String> cartRemoveOne(@PathVariable("cartId") Long cartId) {
        cartService.removeCart(cartId);
        return CommonResponse.success("장바구니 단건 삭제 성공.");
    }


    @Operation(summary = "장바구니 상품 리스트 조회", description = "장바구니 상품 리스트 조회")
    @GetMapping
    public CommonResponse<List<CartListResponseVo>> cartList(@AuthenticationMember Member member) {
        List<CartListResponseVo> cartListResponseVo = new ArrayList<>();
        for (CartListResponseDto cartListResponseDto : cartService.findCart(member)) {
            cartListResponseVo.add(CartListResponseDto.dtoToVo(cartListResponseDto));
        }

        return CommonResponse.success("장바구니 리스트 조회 성공",cartListResponseVo);
    }

    @Operation(summary = "장바구니 상품 수량 1증가", description = "장바구니 상품 수량 1증가")
    @PutMapping("/{cartId}/increase")
    public CommonResponse<String> cartModify(@PathVariable("cartId") Long cartId) {
        cartService.increaseCount(cartId);
        return CommonResponse.success("장바구니 상품 수량 증가 성공");
    }

    @Operation(summary = "장바구니 상품 수량 1감소", description = "장바구니 상품 수량 1감소")
    @PutMapping("/{cartId}/decrease")
    public CommonResponse<String> cartDecrease(@PathVariable("cartId") Long cartId) {
        cartService.decreaseCount(cartId);
        return CommonResponse.success("장바구니 상품 수량 감소 성공");
    }


    @Operation(summary = "장바구니 상품 개수 조회", description = "장바구니 상품 개수 조회")
    @GetMapping("/count")
    public CommonResponse<CartCountResponseVo> cartCount(@AuthenticationMember Member member) {
        return CommonResponse.success("장바구니 상품 개수 조회 성공", CartCountResponseDto.dtoToVo(cartService.totalCountCart(member)));
    }

    @Operation(summary = "장바구니 선택한 상품 가격 조회", description = "장바구니 선택한 상품 가격 조회")
    @GetMapping("/price")
    public CommonResponse<CartPriceResponseVo> cartPrice(@RequestParam List<Long> cartId){
        return CommonResponse.success("장바구니 선택한 상품 가격 조회 성공", CartPriceResponseDto.dtoToVo(cartService.findTotalPrice(cartId)));
    }

    @Operation(summary = "장바구니 상품 선택", description = "장바구니 상품 선택")
    @PutMapping("/{cartId}/check")
    public CommonResponse<String> cartCheck(@PathVariable("cartId") Long cartId) {
        cartService.checkCart(cartId);
        return CommonResponse.success("장바구니 상품 선택 성공");
    }

    @Operation(summary = "장바구니 상품 선택 해제", description = "장바구니 상품 선택 해제")
    @PutMapping("/{cartId}/uncheck")
    public CommonResponse<String> cartUnCheck(@PathVariable("cartId") Long cartId) {
        cartService.unCheckCart(cartId);
        return CommonResponse.success("장바구니 상품 선택 해제 성공");
    }

    @Operation(summary = "장바구니 선택 상품만 조회", description = "장바구니 선택 상품만 조회")
    @GetMapping("/checked")
    public CommonResponse<List<CartListResponseVo>> cartCheckedList(@AuthenticationMember Member member) {

        List<CartListResponseVo> cartListResponseVo = new ArrayList<>();
        for (CartListResponseDto cartListResponseDto : cartService.findCheckedCart(member)) {
            cartListResponseVo.add(CartListResponseDto.dtoToVo(cartListResponseDto));
        }

        return CommonResponse.success("장바구니 선택 상품 조회 성공",cartListResponseVo);
    }


}
