package com.nocaffeine.ssgclone.domain.like.infrastructure;

import com.nocaffeine.ssgclone.domain.brandstore.domain.Brand;
import com.nocaffeine.ssgclone.domain.like.domain.BrandLike;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BrandLikeRepository extends JpaRepository<BrandLike, Long> {
    Optional<BrandLike> findByMemberAndBrand(Member member, Brand brand);

    List<BrandLike> findByMember(Member member);
}
