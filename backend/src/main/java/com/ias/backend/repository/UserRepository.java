package com.ias.backend.repository;



import com.ias.backend.domain.User;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Qualifier("user")
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
 

    User findByUsername(String username);
    User findByUsernameAndPassword(String username, String password);

}