package com.nocaffeine.ssgclone.domain.order.vo.response;

import com.nocaffeine.ssgclone.domain.order.domain.Orders;
import com.nocaffeine.ssgclone.domain.order.dto.response.OrderInfoAndProductListResponseDto;
import com.nocaffeine.ssgclone.domain.order.dto.response.OrderProductListResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = lombok.AccessLevel.PROTECTED)
public class OrderInfoAndProductListResponseVo {

    private Long orderNumber;
    private Long orderId;
    private String receiverName;
    private int totalPrice;
    private Orders.OrderStatus orderStatus;
    private LocalDateTime orderDate;
    private String orderPhoneNumber;
    private String region;

    private List<OrderProductListResponseVo> orderProductList;

    public OrderInfoAndProductListResponseVo(Long orderNumber, Long orderId, String receiverName, int totalPrice, Orders.OrderStatus orderStatus, LocalDateTime orderDate, List<OrderProductListResponseVo> orderProductListResponseDtoList,String orderPhoneNumber,String region) {
        this.orderNumber = orderNumber;
        this.orderId = orderId;
        this.receiverName = receiverName;
        this.totalPrice = totalPrice;
        this.orderStatus = orderStatus;
        this.orderDate = orderDate;
        this.orderProductList = orderProductListResponseDtoList;
        this.orderPhoneNumber = orderPhoneNumber;
        this.region = region;
    }

    public static OrderInfoAndProductListResponseVo convertToVo(OrderInfoAndProductListResponseDto orderInfoAndProductListResponseDto) {
        List<OrderProductListResponseVo> OrderProductListResponseDtoList = new ArrayList<>();

        for (OrderProductListResponseDto orderProductListResponseDto : orderInfoAndProductListResponseDto.getOrderProductList()){
            OrderProductListResponseDtoList.add(OrderProductListResponseVo.convertToVo(orderProductListResponseDto));
        }

        return new OrderInfoAndProductListResponseVo(

                orderInfoAndProductListResponseDto.getOrderNumber(),
                orderInfoAndProductListResponseDto.getOrderId(),
                orderInfoAndProductListResponseDto.getReceiverName(),
                orderInfoAndProductListResponseDto.getTotalPrice(),
                orderInfoAndProductListResponseDto.getOrderStatus(),
                orderInfoAndProductListResponseDto.getOrderDate(),
                OrderProductListResponseDtoList,
                orderInfoAndProductListResponseDto.getOrderPhoneNumber(),
                orderInfoAndProductListResponseDto.getRegion()

        );
    }
}
