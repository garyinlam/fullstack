package com.nology.backend.exceptions;

public class WeaponNotFoundException extends RuntimeException{
    public WeaponNotFoundException() {
        super("Weapon not found.");
    }
}
