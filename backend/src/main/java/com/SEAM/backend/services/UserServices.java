package com.SEAM.backend.services;

import com.SEAM.backend.models.UserBody;
import com.SEAM.backend.models.UserModel;
import com.SEAM.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Objects;


@Service
public class UserServices {
    @Autowired
    public UserRepo repo;

    public UserModel putData(UserModel user) {
        return repo.save(user);
    }

    public String searchUser(UserBody user) {
        try {
            UserModel u = repo.findByEmail(user.email).getFirst();
            if (Objects.equals(u.password, user.password)){
                return "Yes "+u.admission_no;
            }
            else
                return "AuthFuck";
        } catch (Exception e) {
            return "No User";
        }
    }

}