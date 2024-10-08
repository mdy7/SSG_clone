package com.nocaffeine.ssgclone.domain.product.vo.response.productoption;

import com.nocaffeine.ssgclone.domain.product.domain.AddOption;
import com.nocaffeine.ssgclone.domain.product.domain.ColorOption;
import com.nocaffeine.ssgclone.domain.product.domain.Product;
import com.nocaffeine.ssgclone.domain.product.domain.SizeOption;
import com.nocaffeine.ssgclone.domain.product.dto.response.productoption.OptionSelectedProductResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class OptionSelectedProductResponseVo {

    private Long optionSelectedProductId;
    private Long productId;
    private String productName;
    private int productPrice;
    private int productDiscount;
    private String size;
    private String color;
    private String addOption;
    private int stock;

    public OptionSelectedProductResponseVo(Long id, Product product, SizeOption sizeOption, ColorOption colorOption, AddOption addOption, int stock) {
        this.optionSelectedProductId = id;
        this.productId = product.getId();
        this.productName = product.getName();
        this.productPrice = product.getPrice();
        this.productDiscount = product.getDiscount();
        this.size = sizeOption.getSize();
        this.color = colorOption.getColor();
        this.addOption = addOption.getOptionName();
        this.stock = stock;
    }

    public static OptionSelectedProductResponseVo optionSelectedProductDtoToVo(OptionSelectedProductResponseDto optionSelectedProductResponseDto) {
        return new OptionSelectedProductResponseVo(
                optionSelectedProductResponseDto.getId(),
                optionSelectedProductResponseDto.getProduct(),
                optionSelectedProductResponseDto.getSizeOption(),
                optionSelectedProductResponseDto.getColorOption(),
                optionSelectedProductResponseDto.getAddOption(),
                optionSelectedProductResponseDto.getStock()
        );
    }
}
