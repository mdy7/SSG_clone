package com.nocaffeine.ssgclone.domain.review.infrastructure;

import com.nocaffeine.ssgclone.domain.review.domain.Review;
import com.nocaffeine.ssgclone.domain.review.domain.ReviewImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewImageRepository extends JpaRepository<ReviewImage, Long> {
    List<ReviewImage> findByReview(Review review);
}
