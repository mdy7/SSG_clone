package com.nocaffeine.ssgclone.domain.order.infrastructure;

import com.nocaffeine.ssgclone.domain.member.domain.Member;
import com.nocaffeine.ssgclone.domain.order.domain.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Long> {

    List<Orders> findByUuid(String memberUuid);

    Optional<Orders> findByOrderNumber(Long orderNumber);

    Optional<Orders> findByPhoneNumberAndOrderNumber(String orderPhone, Long orderNumber);

    List<Orders> findByStatusAndUuid(Orders.OrderStatus orderStatus, String memberUuid);

}
