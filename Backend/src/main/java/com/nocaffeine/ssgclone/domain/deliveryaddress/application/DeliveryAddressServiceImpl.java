package com.nocaffeine.ssgclone.domain.deliveryaddress.application;


import com.nocaffeine.ssgclone.common.exception.BaseException;
import com.nocaffeine.ssgclone.domain.deliveryaddress.domain.DeliveryAddress;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.request.DeliveryAddressAddRequestDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.request.DeliveryAddressModifyRequestDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.response.DeliveryAddressDefaultResponseDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.response.DeliveryAddressDetailResponseDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.response.DeliveryAddressListResponseDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.infrastructure.DeliveryAddressRepository;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.nocaffeine.ssgclone.common.exception.ErrorCode.NO_EXIST_ADDRESS;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class DeliveryAddressServiceImpl implements DeliveryAddressService{

    private final DeliveryAddressRepository deliveryAddressRepository;

    /**
     * 배송지 추가
     */
    @Override
    @Transactional
    public void addDeliveryAddress(DeliveryAddressAddRequestDto deliveryAddressAddRequestDto, Member member) {
        // 회원에게 등록된 기본 배송지가 있는지 확인
        boolean hasDefaultAddress = deliveryAddressRepository.existsByMemberAndDefaultCheck(member, true);

        deliveryAddressRepository.save(DeliveryAddress.builder()
                .member(member)
                .addressName(deliveryAddressAddRequestDto.getAddressName())
                .recipient(deliveryAddressAddRequestDto.getRecipient())
                .phoneNumber(deliveryAddressAddRequestDto.getPhoneNumber())
                .zip(deliveryAddressAddRequestDto.getZip())
                .post(deliveryAddressAddRequestDto.getPost())
                .street(deliveryAddressAddRequestDto.getStreet())
                .defaultCheck(!hasDefaultAddress)
                .build());
    }


    /**
     * 배송지 삭제
     */
    @Override
    @Transactional
    public void removeDeliveryAddress(Long deliveryAddressId, Member member) {
        DeliveryAddress deliveryAddress = deliveryAddressRepository.findByIdAndMember(deliveryAddressId, member)
                .orElseThrow(() -> new BaseException(NO_EXIST_ADDRESS));

        deliveryAddressRepository.delete(deliveryAddress);
    }


    /**
     * 배송지 수정
     */
    @Override
    @Transactional
    public void modifyDeliveryAddress(DeliveryAddressModifyRequestDto deliveryAddressModifyRequestDto, Member member) {
        DeliveryAddress deliveryAddress = deliveryAddressRepository.findByIdAndMember(deliveryAddressModifyRequestDto.getDeliveryAddressId(), member)
                .orElseThrow(() -> new BaseException(NO_EXIST_ADDRESS));

        deliveryAddressRepository.save(
                DeliveryAddress.builder()
                .id(deliveryAddress.getId())
                .member(deliveryAddress.getMember())
                .addressName(deliveryAddressModifyRequestDto.getAddressName())
                .recipient(deliveryAddressModifyRequestDto.getRecipient())
                .phoneNumber(deliveryAddressModifyRequestDto.getPhoneNumber())
                .zip(deliveryAddressModifyRequestDto.getZip())
                .post(deliveryAddressModifyRequestDto.getPost())
                .street(deliveryAddressModifyRequestDto.getStreet())
                .defaultCheck(deliveryAddress.isDefaultCheck())
                .build()
        );


    }


    /**
     * 배송지 조회
     */
    @Override
    public List<DeliveryAddressListResponseDto> findDeliveryAddress(Member member) {
        List<DeliveryAddress> deliveryAddresses = deliveryAddressRepository.findByMember(member);

        List<DeliveryAddressListResponseDto> deliveryAddressListResponseDto = new ArrayList<>();
        for (DeliveryAddress deliveryAddress : deliveryAddresses) {
            deliveryAddressListResponseDto.add(DeliveryAddressListResponseDto.builder()
                    .deliveryAddressId(deliveryAddress.getId())
                    .addressName(deliveryAddress.getAddressName())
                    .recipient(deliveryAddress.getRecipient())
                    .phoneNumber(deliveryAddress.getPhoneNumber())
                    .zip(deliveryAddress.getZip())
                    .post(deliveryAddress.getPost())
                    .street(deliveryAddress.getStreet())
                    .defaultCheck(deliveryAddress.isDefaultCheck())
                    .build());

        }

        return deliveryAddressListResponseDto;
    }

    /**
     * 기본 배송지 설정
     */
    @Override
    @Transactional
    public void setDefaultDeliveryAddress(Long deliveryAddressId, Member member) {
        // 기존에 있던 기본 배송지 해제
        deliveryAddressRepository.findByMemberAndDefaultCheck(member, true).ifPresent(deliveryAddress -> {
            deliveryAddressRepository.save(
                    DeliveryAddress.builder()
                    .id(deliveryAddress.getId())
                    .member(deliveryAddress.getMember())
                    .addressName(deliveryAddress.getAddressName())
                    .recipient(deliveryAddress.getRecipient())
                    .phoneNumber(deliveryAddress.getPhoneNumber())
                    .zip(deliveryAddress.getZip())
                    .post(deliveryAddress.getPost())
                    .street(deliveryAddress.getStreet())
                    .defaultCheck(false)
                    .build()
            );
        });

        DeliveryAddress deliveryAddress = deliveryAddressRepository.findById(deliveryAddressId)
                .orElseThrow(() -> new BaseException(NO_EXIST_ADDRESS));

        deliveryAddressRepository.save(
                DeliveryAddress.builder()
                .id(deliveryAddress.getId())
                .member(deliveryAddress.getMember())
                .addressName(deliveryAddress.getAddressName())
                .recipient(deliveryAddress.getRecipient())
                .phoneNumber(deliveryAddress.getPhoneNumber())
                .zip(deliveryAddress.getZip())
                .post(deliveryAddress.getPost())
                .street(deliveryAddress.getStreet())
                .defaultCheck(true)
                .build()
        );
    }

    /**
     * 배송지 상세 조회
     */
    @Override
    public DeliveryAddressDetailResponseDto findDeliveryAddressDetail(Long addressId, Member member) {
        DeliveryAddress deliveryAddress = deliveryAddressRepository.findByIdAndMember(addressId, member)
                .orElseThrow(() -> new BaseException(NO_EXIST_ADDRESS));

        return DeliveryAddressDetailResponseDto.builder()
                .deliveryAddressId(deliveryAddress.getId())
                .addressName(deliveryAddress.getAddressName())
                .recipient(deliveryAddress.getRecipient())
                .phoneNumber(deliveryAddress.getPhoneNumber())
                .zip(deliveryAddress.getZip())
                .post(deliveryAddress.getPost())
                .street(deliveryAddress.getStreet())
                .defaultCheck(deliveryAddress.isDefaultCheck())
                .build();
    }

    /**
     * 기본 배송지 조회
     */
    @Override
    public DeliveryAddressDefaultResponseDto findDefaultDeliveryAddress(Member member) {
        DeliveryAddress deliveryAddress = deliveryAddressRepository.findByMemberAndDefaultCheck(member, true)
                .orElseThrow(() -> new BaseException(NO_EXIST_ADDRESS));

        return DeliveryAddressDefaultResponseDto.builder()
                .deliveryAddressId(deliveryAddress.getId())
                .addressName(deliveryAddress.getAddressName())
                .recipient(deliveryAddress.getRecipient())
                .phoneNumber(deliveryAddress.getPhoneNumber())
                .zip(deliveryAddress.getZip())
                .post(deliveryAddress.getPost())
                .street(deliveryAddress.getStreet())
                .defaultCheck(deliveryAddress.isDefaultCheck())
                .build();


    }


}
