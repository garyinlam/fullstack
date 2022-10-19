package com.nology.backend;

import javax.persistence.*;
import java.util.Random;
import java.util.Set;

@Entity
public class Character {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id = new Random().nextInt();


    private Weapon weapon;


    private Set<Skill> skills;


    private Special special;

    private String name;

    private String imageUrl;

    private String group;

    private String description;

    private int hp;

    private double attack;

    private double speed;

    private int critical;

    private boolean flat;
}
