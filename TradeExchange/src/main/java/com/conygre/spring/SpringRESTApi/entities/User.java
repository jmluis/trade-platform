package com.conygre.spring.SpringRESTApi.entities;

import java.util.Dictionary;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
    @Id
    private String id;
    private String name;
    private short pin;

    private Trade[] trades;
    
    private Dictionary<String, Double> stockPortfolio;

    public User() {
    }
}