package com.nocaffeine.ssgclone.domain.category.infrastructure;

import com.nocaffeine.ssgclone.domain.category.domain.LargeCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LargeCategoryRepository extends JpaRepository<LargeCategory, Long>{
}
