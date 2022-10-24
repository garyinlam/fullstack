package com.nology.backend;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SkillRepository extends JpaRepository<Skill,Long> {
    List<Skill> getAllByPlayerId(long playerId);
}
