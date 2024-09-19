package com.nocaffeine.ssgclone.domain.like.application;


import com.nocaffeine.ssgclone.common.exception.BaseException;
import com.nocaffeine.ssgclone.domain.like.infrastructure.LikeFolderRepository;
import com.nocaffeine.ssgclone.domain.like.infrastructure.ProductLikeRepository;
import com.nocaffeine.ssgclone.domain.like.domain.LikeFolder;
import com.nocaffeine.ssgclone.domain.like.domain.ProductLike;
import com.nocaffeine.ssgclone.domain.like.dto.ProductLikeAddDto;
import com.nocaffeine.ssgclone.domain.like.dto.LikeFolderDto;
import com.nocaffeine.ssgclone.domain.like.dto.ProductLikeListDto;
import com.nocaffeine.ssgclone.domain.like.dto.ProductLikeRemoveDto;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import com.nocaffeine.ssgclone.domain.member.infrastructure.MemberRepository;
import com.nocaffeine.ssgclone.domain.product.domain.Product;
import com.nocaffeine.ssgclone.domain.product.infrastructure.ProductRepository;
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
public class LikeFolderServiceImpl implements LikeFolderService{

    private final LikeFolderRepository likeFolderRepository;
    private final MemberRepository memberRepository;
    private final ProductLikeRepository productLikeRepository;
    private final ProductRepository productRepository;
    /**
     * 폴더 추가
     */
    @Override
    @Transactional
    public void addLikeFolder(LikeFolderDto likeFolderDto, Member member) {
        LikeFolder likeFolder = LikeFolder.builder()
                .name(likeFolderDto.getName())
                .member(member)
                .build();

        likeFolderRepository.save(likeFolder);
    }

    /**
     * 좋아요 폴더 삭제
     */
    @Override
    @Transactional
    public void removeLikeFolder(LikeFolderDto likeFolderDto, Member member) {
        LikeFolder likeFolder = likeFolderRepository.findByIdAndMember(likeFolderDto.getLikeFolderId(), member)
                .orElseThrow(() -> new BaseException(NO_DATA));

        likeFolderRepository.delete(likeFolder);
    }

    /**
     * 좋아요 폴더 조회
     */
    @Override
    public List<LikeFolderDto> findLikeFolder(Member member) {
        List<LikeFolder> likeFolder = likeFolderRepository.findByMember(member);

        List<LikeFolderDto> responses = new ArrayList<>();

        for (LikeFolder folder : likeFolder) {
            LikeFolderDto likeFolderDto = LikeFolderDto.builder()
                    .likeFolderId(folder.getId())
                    .name(folder.getName())
                    .build();

            responses.add(likeFolderDto);
        }
        return responses;
    }


    /**
     * 좋아요 폴더 이름 수정
     */
    @Override
    @Transactional
    public void modifyLikeFolder(LikeFolderDto likeFolderDto, Member member) {
        LikeFolder likeFolder = likeFolderRepository.findByIdAndMember(likeFolderDto.getLikeFolderId(), member)
                .orElseThrow(() -> new BaseException(NO_DATA));

        likeFolder.changeName(likeFolderDto.getName());
    }


    /**
     * 폴더에 좋아요 상품 추가
     */
    @Override
    @Transactional
    public void addProductLike(ProductLikeAddDto productLikeAddDto, Member member) {
        for (Long likeFolderId : productLikeAddDto.getLikeFolderId()){
            LikeFolder likeFolder = likeFolderRepository.findById(likeFolderId)
                    .orElseThrow(() -> new BaseException(NO_EXIST_WISH_FOLDER));

            for (Long productId : productLikeAddDto.getProductId()) {
                Product product = productRepository.findById(productId)
                        .orElseThrow(() -> new BaseException(NO_DATA));

                // 폴더에 이미 있을경우 예외처리
                try {
                    productLikeRepository.findByProductAndLikeFolder(product, likeFolder.getId())
                            .ifPresent(like -> {
                                throw new BaseException(ALREADY_ADDED_FOLDER);
                            });
                } catch (Exception e) {
                    continue;
                }

                productLikeRepository.save(ProductLike.builder()
                        .member(member)
                        .likeFolder(likeFolder.getId())
                        .product(product)
                        .build());

            }
        }
    }

    /**
     * 폴더에 있는 상품 조회
     */
    @Override
    public List<ProductLikeListDto> findProductLike(Long likeFolderId, Member member) {
        List<ProductLike> productLike = productLikeRepository.findByLikeFolder(likeFolderId);

        List<ProductLikeListDto> responses = new ArrayList<>();

        for (ProductLike like : productLike) {
            ProductLikeListDto productLikeListDto = ProductLikeListDto.builder()
                    .productLikeId(like.getId())
                    .productId(like.getProduct().getId())
                    .build();

            responses.add(productLikeListDto);
        }
        return responses;
    }

    /**
     * 폴더에 있는 상품 삭제
     */
    @Override
    @Transactional
    public void removeProductLike(ProductLikeRemoveDto productLikeRemoveDto, Member member) {
        for (Long productLikeId : productLikeRemoveDto.getProductLikeId()) {
            ProductLike productLike = productLikeRepository.findByIdAndLikeFolder(productLikeId, productLikeRemoveDto.getLikeFolderId())
                    .orElseThrow(() -> new BaseException(NO_DATA));
            productLikeRepository.delete(productLike);
        }
    }

}
