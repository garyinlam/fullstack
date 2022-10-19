package com.nology.backend;

import javax.persistence.*;
import java.util.Random;

@Entity
public class Weapon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id = new Random().nextLong();

    @OneToOne(mappedBy = "character")
    private Character character;

    private String name;

    private String imageUrl;

    private String description;

    private String type;

    private String damage;

    private String attackTime;

    private String attackCount;

    private String attackDelay;

    private String hitLimit;

    private String hitCooldown;

    private String area;

    private String duration;

    private String projectileSpeed;

    private String knockbackDuration;

    private String knockbackSpeed;


    private int range;

    private String notes;

    private String level1;
    private String level2;
    private String level3;
    private String level4;
    private String level5;
    private String level6;
    private String levelAwakened;
}
