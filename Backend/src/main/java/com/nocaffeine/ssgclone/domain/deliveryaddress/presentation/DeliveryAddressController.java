package com.nocaffeine.ssgclone.domain.deliveryaddress.presentation;


import com.nocaffeine.ssgclone.common.CommonResponse;
import com.nocaffeine.ssgclone.common.security.AuthenticationMember;
import com.nocaffeine.ssgclone.domain.deliveryaddress.application.DeliveryAddressService;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.request.DeliveryAddressAddRequestDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.request.DeliveryAddressModifyRequestDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.response.DeliveryAddressDefaultResponseDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.response.DeliveryAddressDetailResponseDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.dto.response.DeliveryAddressListResponseDto;
import com.nocaffeine.ssgclone.domain.deliveryaddress.vo.request.DeliveryAddressAddRequestVo;
import com.nocaffeine.ssgclone.domain.deliveryaddress.vo.request.DeliveryAddressModifyRequestVo;
import com.nocaffeine.ssgclone.domain.deliveryaddress.vo.response.DeliveryAddressDefaultResponseVo;
import com.nocaffeine.ssgclone.domain.deliveryaddress.vo.response.DeliveryAddressDetailResponseVo;
import com.nocaffeine.ssgclone.domain.deliveryaddress.vo.response.DeliveryAddressListResponseVo;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@Tag(name = "DeliveryAddress", description = "배송지 관리")
@RequestMapping("/api/v1/delivery-address")
public class DeliveryAddressController {

    private final DeliveryAddressService deliveryAddressService;

    @Operation(summary = "새 배송지 추가", description = "새 배송지 추가")
    @PostMapping
    public CommonResponse<String> addDeliveryAddress(@AuthenticationMember Member member, @RequestBody DeliveryAddressAddRequestVo deliveryAddressAddRequestVo) {
        deliveryAddressService.addDeliveryAddress(DeliveryAddressAddRequestDto.voToDto(deliveryAddressAddRequestVo), member);
        return CommonResponse.success("배송지 추가 성공");
    }

    @Operation(summary = "배송지 삭제", description = "배송지 삭제")
    @DeleteMapping("{deliveryAddressId}")
    public CommonResponse<String> removeDeliveryAddress(@AuthenticationMember Member member, @PathVariable("deliveryAddressId") Long deliveryAddressId) {
        deliveryAddressService.removeDeliveryAddress(deliveryAddressId, member);
        return CommonResponse.success("배송지 삭제 성공");
    }

    @Operation(summary = "배송지 리스트 조회", description = "배송지 리스트 조회")
    @GetMapping
    public CommonResponse<List<DeliveryAddressListResponseVo>> findDeliveryAddress(@AuthenticationMember Member member) {
        List<DeliveryAddressListResponseVo> deliveryAddressListResponseVo = new ArrayList<>();
        for(DeliveryAddressListResponseDto address : deliveryAddressService.findDeliveryAddress(member)) {
            deliveryAddressListResponseVo.add(DeliveryAddressListResponseDto.dtoToVo(address));
        }

        return CommonResponse.success("배송지 조회 성공", deliveryAddressListResponseVo);
    }


    @Operation(summary = "배송지 수정", description = "배송지 수정")
    @PutMapping
    public CommonResponse<String> modifyDeliveryAddress(@AuthenticationMember Member member, @RequestBody DeliveryAddressModifyRequestVo deliveryAddressAddRequestVo) {
        deliveryAddressService.modifyDeliveryAddress(DeliveryAddressModifyRequestDto.voToDto(deliveryAddressAddRequestVo), member);
        return CommonResponse.success("배송지 수정 성공");
    }

    @Operation(summary = "기본 배송지 설정", description = "기본 배송지 설정")
    @PutMapping("/{deliveryAddressId}/default")
    public CommonResponse<String> setDefaultDeliveryAddress(@AuthenticationMember Member member, @PathVariable("deliveryAddressId") Long deliveryAddressId) {
        deliveryAddressService.setDefaultDeliveryAddress(deliveryAddressId, member);
        return CommonResponse.success("기본 배송지 설정 성공");
    }

    @Operation(summary = "배송지 상세 조회", description = "배송지 상세 조회")
    @GetMapping("/{deliveryAddressId}")
    public CommonResponse<DeliveryAddressDetailResponseVo> findDeliveryAddressDetail(@AuthenticationMember Member member, @PathVariable("deliveryAddressId") Long deliveryAddressId) {
        DeliveryAddressDetailResponseVo deliveryAddressDetailResponseVo = DeliveryAddressDetailResponseDto.dtoToVo(deliveryAddressService.findDeliveryAddressDetail(deliveryAddressId, member));
        return CommonResponse.success("배송지 상세 조회 성공",deliveryAddressDetailResponseVo);
    }

    @Operation(summary = "기본 배송지 조회", description = "기본 배송지 조회")
    @GetMapping("/default")
    public CommonResponse<DeliveryAddressDefaultResponseVo> findDefaultDeliveryAddress(@AuthenticationMember Member member) {
        return CommonResponse.success("기본 배송지 조회 성공", DeliveryAddressDefaultResponseDto.dtoToVo(deliveryAddressService.findDefaultDeliveryAddress(member)));
    }


}
