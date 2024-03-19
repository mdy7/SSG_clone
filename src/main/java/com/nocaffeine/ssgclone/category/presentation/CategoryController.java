package com.nocaffeine.ssgclone.category.presentation;

import com.nocaffeine.ssgclone.category.application.CategoryService;
import com.nocaffeine.ssgclone.category.domain.SmallCategory;
import com.nocaffeine.ssgclone.category.domain.TinyCategory;
import com.nocaffeine.ssgclone.category.dto.SmallCategoryResponse;
import com.nocaffeine.ssgclone.category.dto.request.MediumCategoryRequest;
import com.nocaffeine.ssgclone.category.dto.response.MediumCategoryDto;
import com.nocaffeine.ssgclone.category.dto.response.SmallCategoryDto;
import com.nocaffeine.ssgclone.category.dto.response.TinyCategoryDto;
import com.nocaffeine.ssgclone.common.ResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    //대분류 + 중분류
    @GetMapping("/api/v1/category/{large_id}")
    public ResponseDto<List<MediumCategoryDto>> getMediumcategory(@PathVariable Long large_id) {
        List<MediumCategoryDto> mediumCategoryDtoList = categoryService.findLargetoMedium(large_id);
        return ResponseDto.success("성공", mediumCategoryDtoList);
    }

    @GetMapping("/api/v1/category/{large_id}/{medium_id}")
    public ResponseDto<List<SmallCategoryDto>> getSmallcategory(@PathVariable Long large_id, Long medium_id) {
        List<SmallCategoryDto> smallCategoryDtoList = categoryService.findMediumtoSmall(medium_id);
        return ResponseDto.success("성공", smallCategoryDtoList);
    }

    @GetMapping("/api/v1/category/{large_id}/{medium_id}/{tiny_id}")
    public ResponseDto<List<TinyCategoryDto>> getTinycategory(@PathVariable Long large_id, Long medium_id, Long small_id) {
        List<TinyCategoryDto> tinyCategoryDtoList = categoryService.findSmalltoTiny(small_id);
        return ResponseDto.success("성공", tinyCategoryDtoList);
    }


}
