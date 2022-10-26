package com.nology.backend;

import javax.persistence.*;
import java.util.Random;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id = new Random().nextLong();

    private String name;

    private String imageUrl;

    private int maxLevel;

    private int weight;

    @Lob
    private String description;

    @Lob
    private String levels;

    @Lob
    private String superLevel;

    @Lob
    private String behaviour;

    @Lob
    private String notes;
}
