package com.nocaffeine.ssgclone.domain.like.application;

import com.nocaffeine.ssgclone.domain.brandstore.domain.Brand;
import com.nocaffeine.ssgclone.domain.brandstore.infrastructure.BrandRepository;
import com.nocaffeine.ssgclone.common.exception.BaseException;
import com.nocaffeine.ssgclone.domain.like.domain.BrandLike;
import com.nocaffeine.ssgclone.domain.like.dto.request.BrandLikeRemoveRequest;
import com.nocaffeine.ssgclone.domain.like.dto.request.BrandLikeAddRequest;
import com.nocaffeine.ssgclone.domain.like.dto.response.BrandLikeListResponse;
import com.nocaffeine.ssgclone.domain.like.dto.response.LikeStatusResponseDto;
import com.nocaffeine.ssgclone.domain.like.infrastructure.BrandLikeRepository;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import com.nocaffeine.ssgclone.domain.member.infrastructure.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.nocaffeine.ssgclone.common.exception.BaseResponseStatus.*;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class BrandLikeServiceImp implements BrandLikeService{

    private final MemberRepository memberRepository;
    private final BrandLikeRepository brandLikeRepository;
    private final BrandRepository brandRepository;


    /**
     * 브랜드 좋아요 하기
     */
    @Override
    @Transactional
    public void addBrandLike(BrandLikeAddRequest brandLikeAddRequest, Member member) {
        Brand brand = brandRepository.findById(brandLikeAddRequest.getBrandId())
                .orElseThrow(() -> new BaseException(NO_EXIST_BRAND));

        if(brandLikeRepository.findByMemberAndBrand(member, brand).isPresent()){
            // 이미 좋아요 했을경우
            throw new BaseException(ALREADY_ADDED_WISH_BRAND);
        }

        BrandLike brandLike = BrandLike.builder()
                .member(member)
                .brand(brand)
                .build();

        brandLikeRepository.save(brandLike);
    }


    /**
     * 브랜드 좋아요 취소
     */
    @Override
    @Transactional
    public void removeBrandLike(BrandLikeRemoveRequest brandLikeRemoveRequest, Member member) {
        Brand brand = brandRepository.findById(brandLikeRemoveRequest.getBrandId())
                .orElseThrow(() -> new BaseException(NO_EXIST_BRAND));

        BrandLike brandLike = brandLikeRepository.findByMemberAndBrand(member, brand)
                .orElseThrow(() -> new BaseException(NO_EXIST_WISH_BRAND));

        brandLikeRepository.delete(brandLike);
    }


    /**
     * 브랜드 좋아요 목록 조회
     */
    @Override
    public List<BrandLikeListResponse> findBrandLike(Member member) {
        List<BrandLike> bradList = brandLikeRepository.findByMember(member);

        List<BrandLikeListResponse> brandLikeListResponses = new ArrayList<>();


        for (BrandLike brandLike : bradList) {
            BrandLikeListResponse response = BrandLikeListResponse.builder()
                    .brandId(brandLike.getBrand().getId())
                    .brandName(brandLike.getBrand().getName())
                    .build();

            brandLikeListResponses.add(response);
        }

        return brandLikeListResponses;
    }

    @Override
    public LikeStatusResponseDto isBrandLike(Long brandId, Member member) {
        Brand brand = brandRepository.findById(brandId)
                .orElseThrow(() -> new BaseException(NO_EXIST_BRAND));

        return LikeStatusResponseDto.builder()
                .isLike(brandLikeRepository.findByMemberAndBrand(member, brand).isPresent())
                .build();
    }


}
