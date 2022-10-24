package com.nology.backend.exceptions;

public class SkillNotFoundException extends RuntimeException{
    public SkillNotFoundException() {
        super("Skill not found.");
    }
}
