package com.nocaffeine.ssgclone.domain.product.infrastructure;

import com.nocaffeine.ssgclone.domain.product.domain.AddOption;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddOptionRepository extends JpaRepository<AddOption, Long> {
}
