package com.nology.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WeaponRepository extends JpaRepository<Weapon, Long> {
    List<Weapon> getAllByWeaponTypeIgnoreCase (String weaponType);

    Weapon getFirstByPlayerId (long playerId);
    @Query(value = "SELECT DISTINCT weapon_type FROM weapon", nativeQuery = true)
    List<String> getDistinctWeaponTypes();

    @Query(value = "SELECT player_id FROM weapon WHERE id = :weaponId", nativeQuery = true)
    Long getPlayerIdById(@Param("weaponId") Long weaponId);
}
