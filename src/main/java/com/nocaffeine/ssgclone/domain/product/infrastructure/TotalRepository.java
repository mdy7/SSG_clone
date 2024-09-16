package com.nocaffeine.ssgclone.domain.product.infrastructure;

import com.nocaffeine.ssgclone.domain.product.domain.Product;
import com.nocaffeine.ssgclone.domain.product.domain.Total;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TotalRepository extends JpaRepository<Total, Long> {

    Optional<Total> findByProduct(Product product);

}
