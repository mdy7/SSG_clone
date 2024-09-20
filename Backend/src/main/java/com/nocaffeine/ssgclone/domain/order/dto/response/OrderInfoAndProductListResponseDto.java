package com.nocaffeine.ssgclone.domain.order.dto.response;

import com.nocaffeine.ssgclone.domain.order.domain.Orders;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderInfoAndProductListResponseDto {

    private Long orderNumber;
    private Long orderId;
    private String receiverName;
    private int totalPrice;
    private Orders.OrderStatus orderStatus;
    private LocalDateTime orderDate;
    private String orderPhoneNumber;
    private String region;

    private List<OrderProductListResponseDto> orderProductList;
}
