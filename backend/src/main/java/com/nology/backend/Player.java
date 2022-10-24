package com.nology.backend;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id = new Random().nextLong();

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "weapon_id", referencedColumnName = "id")
    @OneToOne(mappedBy = "player", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Weapon weapon;

    @OneToMany(
            mappedBy = "player",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Skill> skills = new ArrayList<>();

    @OneToOne(mappedBy = "player", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Special special;

    private String name;

    private String imageUrl;

    private String generation;

    private int hp;

    private double attack;

    private double speed;

    private int critical;

    private boolean flat;

    public Player() {
    }

    public Player(long id, Weapon weapon, List<Skill> skills, Special special, String name, String imageUrl, String generation, int hp, double attack, double speed, int critical, boolean flat) {
        this.id = id;
        this.weapon = weapon;
        this.skills = skills;
        this.special = special;
        this.name = name;
        this.imageUrl = imageUrl;
        this.generation = generation;
        this.hp = hp;
        this.attack = attack;
        this.speed = speed;
        this.critical = critical;
        this.flat = flat;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Weapon getWeapon() {
        return weapon;
    }

    public void setWeapon(Weapon weapon) {
        this.weapon = weapon;
    }

    public List<Skill> getSkills() {
        return skills;
    }

    public void setSkills(List<Skill> skills) {
        this.skills = skills;
    }

    public Special getSpecial() {
        return special;
    }

    public void setSpecial(Special special) {
        this.special = special;
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

    public String getGeneration() {
        return generation;
    }

    public void setGeneration(String generation) {
        this.generation = generation;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public double getAttack() {
        return attack;
    }

    public void setAttack(double attack) {
        this.attack = attack;
    }

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }

    public int getCritical() {
        return critical;
    }

    public void setCritical(int critical) {
        this.critical = critical;
    }

    public boolean isFlat() {
        return flat;
    }

    public void setFlat(boolean flat) {
        this.flat = flat;
    }

    public void addSkill(Skill skill) {
        skills.add(skill);
        skill.setPlayer(this);
    }

    public void removeSkill(Skill skill) {
        skills.remove(skill);
        skill.setPlayer(null);
    }
}
