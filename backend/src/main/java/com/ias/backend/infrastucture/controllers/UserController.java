package com.ias.backend.infrastucture.controllers;

import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ias.backend.domain.User;
import com.ias.backend.repository.UserRepository;
import org.springframework.http.MediaType;
@RestController

public class UserController {

    private UserRepository userRepository;

 

    public UserController(UserRepository _userRepository){
        this.userRepository = _userRepository;
    }
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        return new ResponseEntity<User>(userRepository.save(user), HttpStatus.CREATED);
    }
    @GetMapping
    @RequestMapping
    public ResponseEntity<Iterable<User>> getAllUser(){
        return new ResponseEntity<Iterable<User>>(userRepository.findAll(), HttpStatus.ACCEPTED);
    }
  @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return new ResponseEntity<User>(userRepository.save(user), HttpStatus.NO_CONTENT);
    }

    @GetMapping
    @RequestMapping("/prueba/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        
        return new ResponseEntity<User>(userRepository.findByUsername(username), HttpStatus.ACCEPTED);
    }

    @GetMapping
    @RequestMapping("/prueba/{username}/{password}")
    public ResponseEntity<User> getUserByUsernameAndPasword(@PathVariable String username, @PathVariable String password) {
        
        return new ResponseEntity<User>(userRepository.findByUsernameAndPassword(username,password), HttpStatus.ACCEPTED);
    }
    
}