package com.nocaffeine.ssgclone.domain.order.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderIdListResponseDto {

    private Long orderId;

}
