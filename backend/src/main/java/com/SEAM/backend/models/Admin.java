package com.SEAM.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Document(collection = "Admin")
@AllArgsConstructor
@Data
public class Admin {
    @Id
    public String club;
    public String password;
}
