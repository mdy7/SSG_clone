package com.nocaffeine.ssgclone.domain.like.infrastructure;

import com.nocaffeine.ssgclone.domain.like.domain.ProductLike;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import com.nocaffeine.ssgclone.domain.product.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductLikeRepository extends JpaRepository<ProductLike, Long> {
    Optional<ProductLike> findByMemberAndProduct(Member member, Product product);

    List<ProductLike> findByMember(Member member);

    Optional<ProductLike> findByProductAndLikeFolder(Product product, Long id);

    List<ProductLike> findByLikeFolder(Long id);

    Optional<ProductLike> findByIdAndLikeFolder(Long id, Long likeFolder);

}
