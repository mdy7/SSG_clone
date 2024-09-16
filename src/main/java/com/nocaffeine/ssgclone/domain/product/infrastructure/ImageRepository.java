package com.nocaffeine.ssgclone.domain.product.infrastructure;

import com.nocaffeine.ssgclone.domain.product.domain.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    Optional<Image> findById(Long id);

    @Query("SELECT i.url FROM Image i WHERE i.id = :thumbnailId")
    String findByUrlQuery(@Param("thumbnailId") Long thumbnailId);
}
