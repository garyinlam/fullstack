package com.nology.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HolocureController {

    @Autowired
    HolocureService holocureService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(RuntimeException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @PostMapping("/character")
    public ResponseEntity<Player> createPlayer(@RequestBody Player player) {
        holocureService.addPlayer(player);
        return ResponseEntity.status(HttpStatus.CREATED).body(player);
    }


    @GetMapping("/characters")
    public ResponseEntity<List<Player>> getPlayers(@RequestParam(required = false) String generation, @RequestParam(defaultValue = "10") int limit){
        if(generation != null){
            return ResponseEntity.status(HttpStatus.OK).body(holocureService.getPlayersByGeneration(generation));
        }
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getAllPlayers(limit));
    }

    @GetMapping("/characters/generations")
    public ResponseEntity<List<String>> getGenerations(){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getGenerations());
    }

    @GetMapping("/characters/count")
    public ResponseEntity<Long> getPlayerCount(){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getNumberOfPlayers());
    }

    @GetMapping("/character/{id}")
    public ResponseEntity<Player> getPlayerById(@PathVariable long id){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getPlayerById(id));
    }

    @GetMapping("/character/{id}/name")
    public ResponseEntity<String> getPlayerNameById(@PathVariable long id){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getPlayerNameById(id));
    }

    @GetMapping("/character")
    public ResponseEntity<Player> getPlayer(@RequestParam String name){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getPlayerByName(name));
    }


    @PutMapping("/character/{id}")
    public ResponseEntity<Player> updatePlayer(@RequestBody Player newPlayer, @PathVariable long id){
        newPlayer.setId(id);
        holocureService.updatePlayer(newPlayer,id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(newPlayer);
    }


    @PostMapping("/weapon")
    public ResponseEntity<Weapon> createWeapon(@RequestBody Weapon weapon) {
        holocureService.addWeapon(weapon);
        return ResponseEntity.status(HttpStatus.CREATED).body(weapon);
    }

    @GetMapping("/weapons")
    public ResponseEntity<List<Weapon>> getWeapons(@RequestParam(required = false) String type, @RequestParam(defaultValue = "10") int limit){
        if(type != null){
            return ResponseEntity.status(HttpStatus.OK).body(holocureService.getWeaponsByType(type));
        }
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getAllWeapons(limit));
    }

    @GetMapping("/weapons/types")
    public ResponseEntity<List<String>> getWeaponTypes(){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getWeaponTypes());
    }
    @GetMapping("/weapons/count")
    public ResponseEntity<Long> getWeaponCount(){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getNumberOfWeapons());
    }

    @GetMapping("/weapon/{id}")
    public ResponseEntity<Weapon> getWeaponById(@PathVariable long id){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getWeaponById(id));
    }

    @GetMapping("/weapon/{id}/character")
    public ResponseEntity<Long> getCharacterByWeaponId(@PathVariable long id){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getPlayerIdByWeaponId(id));
    }

    @GetMapping("/weapon")
    public ResponseEntity<Weapon> getWeapon(@RequestParam long id){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getWeaponByPlayerId(id));
    }

    @PutMapping("/weapon/{id}")
    public ResponseEntity<Weapon> updateWeapon(@RequestBody Weapon newWeapon, @PathVariable long id){
        newWeapon.setId(id);
        holocureService.updateWeapon(newWeapon,id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(newWeapon);
    }


    @PostMapping("/skill")
    public ResponseEntity<Skill> createSkill(@RequestBody Skill skill) {
        holocureService.addSkill(skill);
        return ResponseEntity.status(HttpStatus.CREATED).body(skill);
    }

    @GetMapping("/skill/{id}")
    public ResponseEntity<Skill> getSkillById(@PathVariable long id){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getSkillById(id));
    }

    @GetMapping("/skills")
    public ResponseEntity<List<Skill>> getSkills(@RequestParam long id){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getSkillsByPlayerId(id));
    }

    @PutMapping("/skill/{id}")
    public ResponseEntity<Skill> updateWeapon(@RequestBody Skill newSkill, @PathVariable long id){
        newSkill.setId(id);
        holocureService.updateSkill(newSkill,id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(newSkill);
    }

    @PostMapping("/special")
    public ResponseEntity<Special> createSpecial(@RequestBody Special special) {
        holocureService.addSpecial(special);
        return ResponseEntity.status(HttpStatus.CREATED).body(special);
    }

    @GetMapping("/special/{id}")
    public ResponseEntity<Special> getSpecialById(@PathVariable long id){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getSpecialById(id));
    }

    @GetMapping("/special")
    public ResponseEntity<Special> getSpecial(@RequestParam long id){
        return ResponseEntity.status(HttpStatus.OK).body(holocureService.getSpecialByPlayerId(id));
    }

    @PutMapping("/special/{id}")
    public ResponseEntity<Special> updateWeapon(@RequestBody Special newSpecial, @PathVariable long id){
        newSpecial.setId(id);
        holocureService.updateSpecial(newSpecial,id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(newSpecial);
    }
}
