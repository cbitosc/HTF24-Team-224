package com.SEAM.backend.repo;

import com.SEAM.backend.models.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface AdminRepo extends MongoRepository <Admin, String> {

    List<Admin> findByclub(String club);
}
