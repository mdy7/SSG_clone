package com.nocaffeine.ssgclone.domain.product.infrastructure;

import com.nocaffeine.ssgclone.domain.product.domain.SizeOption;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SizeOptionRepository extends JpaRepository<SizeOption, Long> {
}
