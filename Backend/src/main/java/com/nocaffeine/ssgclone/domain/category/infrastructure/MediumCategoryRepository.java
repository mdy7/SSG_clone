package com.nocaffeine.ssgclone.domain.category.infrastructure;

import com.nocaffeine.ssgclone.domain.category.domain.MediumCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MediumCategoryRepository extends JpaRepository<MediumCategory, Long> {

    List<MediumCategory> findByLargeCategoryId(Long largeCategoryId);
}
