package com.ias.backend.infrastucture.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ias.backend.domain.User;
import com.ias.backend.repository.UserRepository;
import org.springframework.http.MediaType;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value="/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {
    
    private UserRepository userRepository;

    public UserController(UserRepository _userRepository){
        this.userRepository = _userRepository;
    }
    @PostMapping(value="/sign")
    public ResponseEntity<User> saveUser(@RequestBody User user){
        return new ResponseEntity<User>(userRepository.save(user), HttpStatus.CREATED);
    }

    @GetMapping
     public ResponseEntity<Iterable<User>> getAllUser(){
        return new ResponseEntity<Iterable<User>>(userRepository.findAll(), HttpStatus.ACCEPTED);
    }
  
    @PutMapping(value="/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return new ResponseEntity<User  >(userRepository.save(user), HttpStatus.ACCEPTED);
    }

    @GetMapping("/guest")
    public ResponseEntity<User> getUserByUsername(String username) {
        return new ResponseEntity<User>(userRepository.findByUsername(username), HttpStatus.ACCEPTED);
    }
 // holi
    @GetMapping(value="/login")
    public ResponseEntity<User> getUserByUsernameAndPasword(String username,String password) {
        return new ResponseEntity<User>(userRepository.findByUsernameAndPassword(username,password), HttpStatus.ACCEPTED);
    }
    
}