package com.nocaffeine.ssgclone.domain.product.dto.response.productimage;

import com.nocaffeine.ssgclone.domain.product.domain.Product;
import com.nocaffeine.ssgclone.domain.product.domain.ProductImage;
import com.nocaffeine.ssgclone.domain.product.domain.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductImageResponseDto {

    private Long id;
    private Image image;
    private Product product;

    public static ProductImageResponseDto fromProductImage(ProductImage productImage) {
        return ProductImageResponseDto.builder()
                .id(productImage.getId())
                .image(productImage.getImage())
                .product(productImage.getProduct())
                .build();
    }
}
