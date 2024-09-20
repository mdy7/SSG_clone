package com.nocaffeine.ssgclone.domain.deliveryaddress.application;

import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.request.DeliveryAddressAddRequestDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.request.DeliveryAddressModifyRequestDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.response.DeliveryAddressDefaultResponseDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.response.DeliveryAddressDetailResponseDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.response.DeliveryAddressListResponseDto;
import com.nocaffeine.ssgclone.domain.member.domain.Member;

import java.util.List;

public interface DeliveryAddressService {

    void addDeliveryAddress(DeliveryAddressAddRequestDto deliveryAddressAddRequestDto, Member member);
    void removeDeliveryAddress(Long addressId , Member member);
    void modifyDeliveryAddress(DeliveryAddressModifyRequestDto deliveryAddressModifyRequestDto, Member member);
    void setDefaultDeliveryAddress(Long deliveryAddressId, Member member);
    List<DeliveryAddressListResponseDto> findDeliveryAddress(Member member);
    DeliveryAddressDetailResponseDto findDeliveryAddressDetail(Long addressId, Member member);
    DeliveryAddressDefaultResponseDto findDefaultDeliveryAddress(Member member);


}
