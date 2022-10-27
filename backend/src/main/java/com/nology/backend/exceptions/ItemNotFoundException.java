package com.nology.backend.exceptions;

public class ItemNotFoundException extends RuntimeException{
    public ItemNotFoundException() {
        super("Item not found.");
    }
}
