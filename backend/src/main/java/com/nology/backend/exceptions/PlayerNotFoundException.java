package com.nology.backend.exceptions;

public class PlayerNotFoundException extends RuntimeException{
    public PlayerNotFoundException() {
        super("Player not found.");
    }
}
