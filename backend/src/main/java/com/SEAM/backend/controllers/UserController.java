package com.SEAM.backend.controllers;

import com.SEAM.backend.models.UserBody;
import com.SEAM.backend.models.UserModel;
import com.SEAM.backend.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin
public class UserController {

    @Autowired
    public UserServices service;

    @RequestMapping("/")
    public String home(){
        return "Server";
    }

    @PostMapping("/post")
    public ResponseEntity<UserModel> postController(@RequestBody UserModel user){
        System.out.println("controller");
        return new ResponseEntity<>( service.putData(user), HttpStatus.OK);
    }

    @PostMapping("/login")
    public String searchController(@RequestBody UserBody user){
        System.out.println(user);
        return service.searchUser(user);
    }


}
