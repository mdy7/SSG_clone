package com.nocaffeine.ssgclone.domain.like.infrastructure;

import com.nocaffeine.ssgclone.domain.like.domain.LikeFolder;
import com.nocaffeine.ssgclone.domain.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikeFolderRepository extends JpaRepository<LikeFolder, Long> {
    List<LikeFolder> findByMember(Member member);

    Optional<LikeFolder> findByIdAndMember(Long id, Member member);
}
