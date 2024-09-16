package com.nocaffeine.ssgclone.domain.product.infrastructure;

import com.nocaffeine.ssgclone.domain.product.domain.ColorOption;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColorOptionRepository extends JpaRepository<ColorOption, Long> {
}
