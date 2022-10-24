package com.nology.backend;

import org.springframework.data.jpa.repository.JpaRepository;


public interface SpecialRepository extends JpaRepository<Special, Long> {
    Special getFirstByPlayerId (long playerId);

}
