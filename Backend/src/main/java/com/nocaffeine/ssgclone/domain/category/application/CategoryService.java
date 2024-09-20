package com.nocaffeine.ssgclone.domain.category.application;

import com.nocaffeine.ssgclone.domain.category.dto.response.CategoryResponseDto;
import com.nocaffeine.ssgclone.domain.category.dto.response.LargeCategoryResponseDto;

import java.util.List;

public interface CategoryService {

    List<LargeCategoryResponseDto> findLargeCategories();
    List<CategoryResponseDto> findMediumCategories(Long largeId);

    List<CategoryResponseDto> findSmallCategories(Long mediumId);

    List<CategoryResponseDto> findTinyCategories(Long smallId);


}
