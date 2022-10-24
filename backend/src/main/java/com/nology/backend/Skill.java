package com.nology.backend;

import javax.persistence.*;
import java.util.Random;

@Entity
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id = new Random().nextLong();

    @ManyToOne(fetch = FetchType.LAZY)
    private Player player;

    private String name;

    private String imageUrl;

    private String level1;
    private String level2;
    private String level3;

    private String notes;


    public Skill() {
    }

    public Skill(long id, Player player, String name, String imageUrl, String level1, String level2, String level3, String notes) {
        this.id = id;
        this.player = player;
        this.name = name;
        this.imageUrl = imageUrl;
        this.level1 = level1;
        this.level2 = level2;
        this.level3 = level3;
        this.notes = notes;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getLevel1() {
        return level1;
    }

    public void setLevel1(String level1) {
        this.level1 = level1;
    }

    public String getLevel2() {
        return level2;
    }

    public void setLevel2(String level2) {
        this.level2 = level2;
    }

    public String getLevel3() {
        return level3;
    }

    public void setLevel3(String level3) {
        this.level3 = level3;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
