package com.nocaffeine.ssgclone.domain.product.infrastructure;

import com.nocaffeine.ssgclone.domain.product.domain.Product;
import com.nocaffeine.ssgclone.domain.product.domain.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {

    List<ProductImage> findByProductId(Long id);

    List<ProductImage> findByProduct(Product product);
}
