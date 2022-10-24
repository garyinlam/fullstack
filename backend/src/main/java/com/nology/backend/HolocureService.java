package com.nology.backend;

import com.nology.backend.exceptions.PlayerNotFoundException;
import com.nology.backend.exceptions.SkillNotFoundException;
import com.nology.backend.exceptions.SpecialNotFoundException;
import com.nology.backend.exceptions.WeaponNotFoundException;
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

    @Autowired
    ItemRepository itemRepository;


    public void addPlayer(Player player){
        playerRepository.save(player);
    }

    public void addItem(Item item){
        itemRepository.save(item);
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

    public void addWeapon(Weapon weapon){
        weaponRepository.save(weapon);
    }

    public Weapon getWeaponById(long id){
        Optional<Weapon> weapon = weaponRepository.findById(id);
        if (weapon.isPresent()){
            return weapon.get();
        } else {
            throw new WeaponNotFoundException();
        }
    }

    public Weapon getWeaponByPlayerId(long id){
        return weaponRepository.getFirstByPlayerId(id);
    }

    public List<String> getWeaponTypes(){
        return weaponRepository.getDistinctWeaponTypes();
    }

    public List<Weapon> getWeaponsByType(String type) {
        return weaponRepository.getAllByWeaponTypeIgnoreCase(type);
    }

    public List<Weapon> getAllWeapons(int limit){
        return weaponRepository.findAll()
                .stream()
                .limit(limit)
                .collect(Collectors.toList());
    }

    public long getNumberOfWeapons(){
        return weaponRepository.count();
    }

    public void updateWeapon (Weapon newWeapon, long id){
        if(!weaponRepository.existsById(id)){
            throw new WeaponNotFoundException();
        }

        newWeapon.setId(id);

        weaponRepository.save(newWeapon);
    }


    public void addSkill(Skill skill){
        skillRepository.save(skill);
    }

    public Skill getSkillById(long id){
        Optional<Skill> skill = skillRepository.findById(id);
        if (skill.isPresent()){
            return skill.get();
        } else {
            throw new SkillNotFoundException();
        }
    }

    public List<Skill> getSkillsByPlayerId(long id){
        return skillRepository.getAllByPlayerId(id);
    }

    public void updateSkill (Skill newSkill, long id){
        if(!skillRepository.existsById(id)){
            throw new SkillNotFoundException();
        }

        newSkill.setId(id);

        skillRepository.save(newSkill);
    }


    public void addSpecial(Special special){
        specialRepository.save(special);
    }

    public Special getSpecialById(long id){
        Optional<Special> special = specialRepository.findById(id);
        if (special.isPresent()){
            return special.get();
        } else {
            throw new SpecialNotFoundException();
        }
    }

    public Special getSpecialByPlayerId(long id){
        return specialRepository.getFirstByPlayerId(id);
    }

    public void updateSpecial (Special newSpecial, long id){
        if(!specialRepository.existsById(id)){
            throw new SpecialNotFoundException();
        }

        newSpecial.setId(id);

        specialRepository.save(newSpecial);
    }
}
