package com.nology.backend;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Random;

@Entity
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id = new Random().nextInt();

    private Character character;

    private String name;

    private String imageUrl;

    private String level1;
    private String level2;
    private String level3;

    private String notes;

}
