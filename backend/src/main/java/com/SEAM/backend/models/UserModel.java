package com.SEAM.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "Users")
@AllArgsConstructor
@Data
public class UserModel {

    public String username;
    public String email;
    public String password;
    @Id
    public String admission_no;
    public String roll_no;
    public String branch;
    public int semester;
    public ArrayList<String> attended = new ArrayList<>();
    public ArrayList<String> registered = new ArrayList<>();
}
