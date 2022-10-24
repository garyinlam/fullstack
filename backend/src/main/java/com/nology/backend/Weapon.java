package com.nology.backend;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Random;

@Entity
public class Weapon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id = new Random().nextLong();

    @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player_id", referencedColumnName = "id")
    private Player player;

    private String name;

    private String imageUrl;

    private String description;

    private String weaponType;

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

    private long component1;
    private long component2;

    private int hitRange;

    private String notes;

    private String level1;
    private String level2;
    private String level3;
    private String level4;
    private String level5;
    private String level6;
    private String levelAwakened;

    public Weapon() {
    }

    public Weapon(long id, Player player, String name, String imageUrl, String description, String weaponType, String damage, String attackTime, String attackCount, String attackDelay, String hitLimit, String hitCooldown, String area, String duration, String projectileSpeed, String knockbackDuration, String knockbackSpeed, long component1, long component2, int hitRange, String notes, String level1, String level2, String level3, String level4, String level5, String level6, String levelAwakened) {
        this.id = id;
        this.player = player;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.weaponType = weaponType;
        this.damage = damage;
        this.attackTime = attackTime;
        this.attackCount = attackCount;
        this.attackDelay = attackDelay;
        this.hitLimit = hitLimit;
        this.hitCooldown = hitCooldown;
        this.area = area;
        this.duration = duration;
        this.projectileSpeed = projectileSpeed;
        this.knockbackDuration = knockbackDuration;
        this.knockbackSpeed = knockbackSpeed;
        this.component1 = component1;
        this.component2 = component2;
        this.hitRange = hitRange;
        this.notes = notes;
        this.level1 = level1;
        this.level2 = level2;
        this.level3 = level3;
        this.level4 = level4;
        this.level5 = level5;
        this.level6 = level6;
        this.levelAwakened = levelAwakened;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getWeaponType() {
        return weaponType;
    }

    public void setWeaponType(String weaponType) {
        this.weaponType = weaponType;
    }

    public String getDamage() {
        return damage;
    }

    public void setDamage(String damage) {
        this.damage = damage;
    }

    public String getAttackTime() {
        return attackTime;
    }

    public void setAttackTime(String attackTime) {
        this.attackTime = attackTime;
    }

    public String getAttackCount() {
        return attackCount;
    }

    public void setAttackCount(String attackCount) {
        this.attackCount = attackCount;
    }

    public String getAttackDelay() {
        return attackDelay;
    }

    public void setAttackDelay(String attackDelay) {
        this.attackDelay = attackDelay;
    }

    public String getHitLimit() {
        return hitLimit;
    }

    public void setHitLimit(String hitLimit) {
        this.hitLimit = hitLimit;
    }

    public String getHitCooldown() {
        return hitCooldown;
    }

    public void setHitCooldown(String hitCooldown) {
        this.hitCooldown = hitCooldown;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getProjectileSpeed() {
        return projectileSpeed;
    }

    public void setProjectileSpeed(String projectileSpeed) {
        this.projectileSpeed = projectileSpeed;
    }

    public String getKnockbackDuration() {
        return knockbackDuration;
    }

    public void setKnockbackDuration(String knockbackDuration) {
        this.knockbackDuration = knockbackDuration;
    }

    public String getKnockbackSpeed() {
        return knockbackSpeed;
    }

    public void setKnockbackSpeed(String knockbackSpeed) {
        this.knockbackSpeed = knockbackSpeed;
    }

    public int getHitRange() {
        return hitRange;
    }

    public void setHitRange(int hitRange) {
        this.hitRange = hitRange;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
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

    public String getLevel4() {
        return level4;
    }

    public void setLevel4(String level4) {
        this.level4 = level4;
    }

    public String getLevel5() {
        return level5;
    }

    public void setLevel5(String level5) {
        this.level5 = level5;
    }

    public String getLevel6() {
        return level6;
    }

    public void setLevel6(String level6) {
        this.level6 = level6;
    }

    public String getLevelAwakened() {
        return levelAwakened;
    }

    public void setLevelAwakened(String levelAwakened) {
        this.levelAwakened = levelAwakened;
    }

    public long getComponent1() {
        return component1;
    }

    public void setComponent1(long component1) {
        this.component1 = component1;
    }

    public long getComponent2() {
        return component2;
    }

    public void setComponent2(long component2) {
        this.component2 = component2;
    }
}
