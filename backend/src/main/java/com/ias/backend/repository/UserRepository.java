package com.ias.backend.repository;



import com.ias.backend.domain.User;


import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
 

    User findByUsername(String username);
    User findByUsernameAndPassword(String username, String password);

}