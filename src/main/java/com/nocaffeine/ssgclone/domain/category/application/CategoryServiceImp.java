package com.nocaffeine.ssgclone.domain.category.application;

import com.nocaffeine.ssgclone.domain.category.domain.LargeCategory;
import com.nocaffeine.ssgclone.domain.category.domain.MediumCategory;
import com.nocaffeine.ssgclone.domain.category.domain.SmallCategory;
import com.nocaffeine.ssgclone.domain.category.domain.TinyCategory;
import com.nocaffeine.ssgclone.domain.category.dto.response.CategoryResponseDto;
import com.nocaffeine.ssgclone.domain.category.dto.response.LargeCategoryResponseDto;
import com.nocaffeine.ssgclone.domain.category.infrastructure.LargeCategoryRepository;
import com.nocaffeine.ssgclone.domain.category.infrastructure.MediumCategoryRepository;
import com.nocaffeine.ssgclone.domain.category.infrastructure.SmallCategoryRepository;
import com.nocaffeine.ssgclone.domain.category.infrastructure.TinyCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CategoryServiceImp implements CategoryService {

    private final LargeCategoryRepository largeCategoryRepository;
    private final MediumCategoryRepository mediumCategoryRepository;
    private final SmallCategoryRepository smallCategoryRepository;
    private final TinyCategoryRepository tinyCategoryRepository;


    @Override
    public List<LargeCategoryResponseDto> findLargeCategories() {
        List<LargeCategoryResponseDto> largeCategoryList = new ArrayList<>();

        for (LargeCategory largeCategory : largeCategoryRepository.findAll()){
            LargeCategoryResponseDto largeCategoryDto = LargeCategoryResponseDto.builder()
                    .largeCategoryId(largeCategory.getId())
                    .largeCategoryName(largeCategory.getName())
                    .imageUrl(largeCategory.getImageUrl())
                    .build();
            largeCategoryList.add(largeCategoryDto);
        }
        return largeCategoryList;
    }

    @Override
    public List<CategoryResponseDto> findMediumCategories(Long largeId) {

        List<CategoryResponseDto> mediumCategoryDtoList = new ArrayList<>();

        for (MediumCategory mediumCategory : mediumCategoryRepository.findByLargeCategoryId(largeId)) {
            CategoryResponseDto mediumCategoryDto = CategoryResponseDto.builder()
                    .id(mediumCategory.getId())
                    .name(mediumCategory.getName())
                    .build();
            mediumCategoryDtoList.add(mediumCategoryDto);
        }
        return mediumCategoryDtoList;
    }

    @Override
    public List<CategoryResponseDto> findSmallCategories(Long mediumId) {
        List<CategoryResponseDto> smallCategoryDtoList = new ArrayList<>();

        for (SmallCategory smallCategory : smallCategoryRepository.findByMediumCategoryId(mediumId)) {
            CategoryResponseDto smallCategoryDto = CategoryResponseDto.builder()
                    .id(smallCategory.getId())
                    .name(smallCategory.getName())
                    .build();
            smallCategoryDtoList.add(smallCategoryDto);

        }

        return smallCategoryDtoList;
    }

    @Override
    public List<CategoryResponseDto> findTinyCategories(Long smallId) {
        List<CategoryResponseDto> tinyCategoryDtoList = new ArrayList<>();

        for (TinyCategory tinyCategory : tinyCategoryRepository.findBySmallCategoryId(smallId)) {
            CategoryResponseDto tinyCategoryDto = CategoryResponseDto.builder()
                    .id(tinyCategory.getId())
                    .name(tinyCategory.getName())
                    .build();
            tinyCategoryDtoList.add(tinyCategoryDto);
        }

        return tinyCategoryDtoList;
    }
}








