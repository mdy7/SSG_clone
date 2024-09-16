package com.nocaffeine.ssgclone.domain.order.dto.request;

import com.nocaffeine.ssgclone.domain.order.vo.request.OrderIdRequestVo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderIdRequestDto {

    private Long orderNumber;

    public static OrderIdRequestDto convertToDto(OrderIdRequestVo orderIdRequestVo){
        return OrderIdRequestDto.builder()
                .orderNumber(orderIdRequestVo.getOrderNumber())
                .build();
    }
}
