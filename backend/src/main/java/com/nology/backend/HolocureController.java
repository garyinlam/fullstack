package com.nology.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HolocureController {

    @Autowired
    HolocureService holocureService;

    @PostMapping("/character")
    public ResponseEntity<Player> createPlayer(@RequestBody Player player) {
        holocureService.addPlayer(player);
        return ResponseEntity.status(HttpStatus.CREATED).body(player);
    }


    @GetMapping("/characters")
    public ResponseEntity<List<Player>> getPlayers(@RequestParam(required = false) String generation, @RequestParam(required = false) String name, @RequestParam(defaultValue = "10") int limit){
        if (name != null){
            return ResponseEntity.status(HttpStatus.OK).body(holocureService.getPlayersByName(name));
        }
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


    @PutMapping("/character/{id}")
    public ResponseEntity<Player> updatePlayer(@RequestBody Player newPlayer, @PathVariable long id){
        newPlayer.setId(id);
        holocureService.updatePlayer(newPlayer,id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(newPlayer);
    }
}