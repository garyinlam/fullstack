package com.nology.backend;

import javax.persistence.*;
import java.util.Random;

@Entity
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id = new Random().nextLong();

    @ManyToOne(fetch = FetchType.LAZY)
    private Character character;

    private String name;

    private String imageUrl;

    private String level1;
    private String level2;
    private String level3;

    private String notes;

}
