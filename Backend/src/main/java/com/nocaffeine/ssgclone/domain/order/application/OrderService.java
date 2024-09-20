package com.nocaffeine.ssgclone.domain.order.application;

import com.nocaffeine.ssgclone.domain.order.dto.request.GuestOrderInfoRequestDto;
import com.nocaffeine.ssgclone.domain.order.dto.request.OrderNumberRequestDto;
import com.nocaffeine.ssgclone.domain.order.dto.response.*;
import com.nocaffeine.ssgclone.domain.order.dto.request.OrderIdRequestDto;
import com.nocaffeine.ssgclone.domain.order.dto.request.UserOrderSaveRequestDto;

import java.util.List;

public interface OrderService {

    OrderNameAndOrderIdResponseDto addMemberOrder (UserOrderSaveRequestDto userOrderSaveRequestDto);

    void removeOrder(OrderIdRequestDto orderIdRequestDto);

    MemberOrderInfoResponseDto findOrderInfo(String memberUuid);

    List<OrderIdListResponseDto> findOrderIdList(String memberUuid);

    OrderInfoAndProductListResponseDto findOrderProductList(OrderNumberRequestDto orderNumberRequestDto);


    OrderInfoAndProductListResponseDto findGuestOrderInfo(GuestOrderInfoRequestDto guestOrderInfoRequestDto);

    OrderStatusResponseDto findOrderStatusCount(String status, String memberUuid);
}
