package com.SEAM.backend.controllers;

import com.SEAM.backend.services.Attendancedtoservices;
import com.SEAM.backend.models.*;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.List;

@RestController
@RequestMapping
@CrossOrigin
public class Attendancedto {

    @Autowired
    private Attendancedtoservices userService;

//    @GetMapping("/with-attendance/{eid}")
//    public List<UserEventModel> getUsersWithAttendance(@PathVariable String eid) {
//        System.out.println("1");
//        return userService.getUsersWithAttendance(eid);
//    }

    @GetMapping("/download/{eid}")
    public void download(HttpServletResponse response,@PathVariable String eid) throws IOException {
        userService.createXL(response,eid);
    }
}

