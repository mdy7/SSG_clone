package com.nocaffeine.ssgclone.domain.specialprice.infrastructure;

import com.nocaffeine.ssgclone.domain.specialprice.domain.SpecialPrice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecialPriceRepository extends JpaRepository<SpecialPrice, Long> {
}
