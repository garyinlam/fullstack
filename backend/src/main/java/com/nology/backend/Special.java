package com.nology.backend;

import javax.persistence.*;
import java.util.Random;

@Entity
public class Special {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id = new Random().nextLong();

    @OneToOne(mappedBy = "character")
    private Character character;

    private String name;

    private String imageUrl;

    private int cooldown;

    private String description;
}
