package com.nocaffeine.ssgclone.domain.product.dto.response.category;

import com.nocaffeine.ssgclone.domain.category.domain.LargeCategory;
import com.nocaffeine.ssgclone.domain.category.domain.MediumCategory;
import com.nocaffeine.ssgclone.domain.category.domain.ProductCategoryList;
import com.nocaffeine.ssgclone.domain.category.domain.SmallCategory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductCategoryResponseDto {

    private ProductCategoryList productCategoryList;
    private LargeCategory largeCategory;
    private MediumCategory mediumCategory;
    private SmallCategory smallCategory;

    public static ProductCategoryResponseDto fromProductCategoryList(ProductCategoryList productCategoryList) {
        return ProductCategoryResponseDto.builder()
                .productCategoryList(productCategoryList)
                .largeCategory(productCategoryList.getLargeCategory())
                .mediumCategory(productCategoryList.getMediumCategory())
                .smallCategory(productCategoryList.getSmallCategory())
                .build();
    }

}
