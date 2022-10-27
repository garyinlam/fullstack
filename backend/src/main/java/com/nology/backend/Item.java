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
    private String notes;

    public Item() {
    }

    public Item(long id, String name, String imageUrl, int maxLevel, int weight, String description, String levels, String superLevel, String notes) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.maxLevel = maxLevel;
        this.weight = weight;
        this.description = description;
        this.levels = levels;
        this.superLevel = superLevel;
        this.notes = notes;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public int getMaxLevel() {
        return maxLevel;
    }

    public void setMaxLevel(int maxLevel) {
        this.maxLevel = maxLevel;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLevels() {
        return levels;
    }

    public void setLevels(String levels) {
        this.levels = levels;
    }

    public String getSuperLevel() {
        return superLevel;
    }

    public void setSuperLevel(String superLevel) {
        this.superLevel = superLevel;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
