package com.nology.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> getAllByGenerationIgnoreCase (String generation);

    Player getFirstByNameIgnoreCase (String name);

    @Query(value = "SELECT DISTINCT generation FROM player", nativeQuery = true)
    List<String> getDistinctGenerations();

    void deletePlayerById(long id);
}
