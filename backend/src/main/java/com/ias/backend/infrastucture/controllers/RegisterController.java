package com.ias.backend.infrastucture.controllers;
 
import org.springframework.web.bind.annotation.GetMapping;
 
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class RegisterController {
@GetMapping("/register")
public String register(){
    return "Registro";
}
    
}
 
 
 
 
 
 
 
