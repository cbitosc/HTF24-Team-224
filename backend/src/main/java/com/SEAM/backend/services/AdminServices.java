package com.SEAM.backend.services;


import com.SEAM.backend.models.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SEAM.backend.models.Admin;
import com.SEAM.backend.repo.AdminRepo;

import java.util.Objects;

@Service
public class AdminServices {

    @Autowired
    public AdminRepo repo;

     public String adminAuthentication(Admin user) {

         try {
             Admin u = repo.findById(user.club).get();
             if (Objects.equals(u.password, user.password)){
                 return "AuthenticationPass";
             }
             else
                 return "AuthenticationFailed";
         } catch (Exception e) {
             return "NoUserFound";
         }

    }
}
