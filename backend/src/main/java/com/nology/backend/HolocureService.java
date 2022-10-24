package com.nology.backend;

import com.nology.backend.exceptions.PlayerNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class HolocureService {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    SkillRepository skillRepository;

    @Autowired
    SpecialRepository specialRepository;

    @Autowired
    WeaponRepository weaponRepository;


    public void addPlayer(Player player){
        playerRepository.save(player);
    }

    public void addSkill(Skill skill){
        skillRepository.save(skill);
    }

    public void addSpecial(Special special){
        specialRepository.save(special);
    }

    public void addWeapon(Weapon weapon){
        weaponRepository.save(weapon);
    }


    public Player getPlayerById(long id){
        Optional<Player> player = playerRepository.findById(id);
        if (player.isPresent()){
            return player.get();
        } else {
            throw new PlayerNotFoundException();
        }
    }

    public List<String> getGenerations(){
        return playerRepository.getDistinctGenerations();
    }

    public List<Player> getPlayersByGeneration(String generation){
        return playerRepository.getAllByGenerationIgnoreCase(generation);
    }

    public Player getPlayerByName(String name){
        return playerRepository.getFirstByNameIgnoreCase(name);
    }

    public List<Player> getAllPlayers(int limit){
        return playerRepository.findAll()
                .stream()
                .limit(limit)
                .collect(Collectors.toList());
    }

    public long getNumberOfPlayers(){
        return playerRepository.count();
    }


    public void updatePlayer (Player newPlayer, long id){
        if(!playerRepository.existsById(id)){
            throw new PlayerNotFoundException();
        }

        newPlayer.setId(id);

        playerRepository.save(newPlayer);
    }

}
