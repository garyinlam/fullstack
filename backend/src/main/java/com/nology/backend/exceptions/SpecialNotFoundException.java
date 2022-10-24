package com.nology.backend.exceptions;

public class SpecialNotFoundException extends RuntimeException{
    public SpecialNotFoundException() {
        super("Special not found.");
    }
}
