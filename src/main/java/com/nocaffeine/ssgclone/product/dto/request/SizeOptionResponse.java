package com.nocaffeine.ssgclone.product.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SizeOptionResponse {

    // SizeOption 엔티티의 필드들을 가져온다.
    private Long id;
    private String size;
}
