package com.nocaffeine.ssgclone.domain.order.infrastructure;

import com.nocaffeine.ssgclone.domain.order.domain.OrderProduct;
import com.nocaffeine.ssgclone.domain.order.domain.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OrderProductRepository extends JpaRepository<OrderProduct, Long>{
    List<OrderProduct> findAllByOrder(Orders order);
}
