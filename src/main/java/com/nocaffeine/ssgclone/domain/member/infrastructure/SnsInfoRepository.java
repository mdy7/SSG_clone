package com.nocaffeine.ssgclone.domain.member.infrastructure;

import com.nocaffeine.ssgclone.domain.member.domain.SnsInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SnsInfoRepository extends JpaRepository<SnsInfo, Long>{

    Optional<SnsInfo> findBySnsId(String snsId);

    Optional<SnsInfo> findBySnsIdAndSnsType(String snsId, String snsType);
}
