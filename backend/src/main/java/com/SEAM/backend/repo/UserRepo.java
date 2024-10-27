package com.SEAM.backend.repo;

import com.SEAM.backend.models.UserEventModel;
import com.SEAM.backend.models.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserRepo extends MongoRepository <UserModel, String> {
    List<UserModel> findByEmail(String email);

    @Query(value = "{'_Id':?0}" , fields = "{'username':1 , 'roll_no':1 , 'branch':1 ,  'semester':1 }'")
    UserEventModel findByPid(String pid);

}
