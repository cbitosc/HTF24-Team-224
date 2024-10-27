package com.SEAM.backend.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.SEAM.backend.models.Admin;
import com.SEAM.backend.services.AdminServices;

@RestController
@RequestMapping
@CrossOrigin
public class AdminController {

    @Autowired AdminServices service;

    @PostMapping("/adminLogin")
    public ResponseEntity<String> postController(@RequestBody Admin ad){
        System.out.println("controller");
        return new ResponseEntity<>( service.adminAuthentication(ad), HttpStatus.OK);
    }

    
}
