package com.ias.backend.infrastucture.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ias.backend.domain.User;
import com.ias.backend.repository.UserRepository;
import org.springframework.http.MediaType;
@RestController

public class UserController {
    @Autowired 
    private UserRepository userRepository;

 

    public UserController(UserRepository _userRepository){
        this.userRepository = _userRepository;
    }
    @PostMapping
    @RequestMapping("/sign")
    public ResponseEntity<User> saveUser(@RequestBody User user){
        return new ResponseEntity<User>(userRepository.save(user), HttpStatus.CREATED);
    }
    @GetMapping
  
    public ResponseEntity<Iterable<User>> getAllUser(){
        return new ResponseEntity<Iterable<User>>(userRepository.findAll(), HttpStatus.ACCEPTED);
    }
  @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return new ResponseEntity<User  >(userRepository.save(user), HttpStatus.ACCEPTED);
    }

  /*  @GetMapping
    @RequestMapping("/guest")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        
        return new ResponseEntity<User>(userRepository.findByUsername(username), HttpStatus.ACCEPTED);
    }*/
 // holi
    @GetMapping
    @RequestMapping("/login")
    public ResponseEntity<User> getUserByUsernameAndPasword(String username,String password) {
        
        return new ResponseEntity<User>(userRepository.findByUsernameAndPassword(username,password), HttpStatus.ACCEPTED);
    }
    
}