package com.ias.backend.infrastucture.controllers;

import java.util.List;

import com.ias.backend.domain.House;
import com.ias.backend.repository.HouseRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class HouseController {
    @Autowired 
    private HouseRepository houseRepository;

        public HouseController(@Qualifier("houses") HouseRepository _houseRepository){
        this.houseRepository = _houseRepository;
    }
    @PostMapping
    //(value="/public")
    @RequestMapping("/public")
    public ResponseEntity<House> saveHouse(@RequestBody House house){
        return new ResponseEntity<House>(houseRepository.save(house), HttpStatus.CREATED);
    }

    @GetMapping
    //(value="/search")
   @RequestMapping("/search")
    public ResponseEntity<Iterable<House>> getAllHouses(){
        return new ResponseEntity<Iterable<House>>(houseRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping
    //(value="/searchAvailable")
   @RequestMapping("/searchAvailable")
    public ResponseEntity<Iterable<House>> search(int available){
        return new ResponseEntity<Iterable<House>>(houseRepository.findByAvailable(available), HttpStatus.ACCEPTED);
    }

    /*@GetMapping(value="/searchCity")
    //@RequestMapping("/searchCity")
    public ResponseEntity<Iterable<House>> searchCity(int available, String housecity){
        return new ResponseEntity<Iterable<House>>(houseRepository.findByCity(available,housecity), HttpStatus.ACCEPTED);
    }*/

    //@GetMapping
    //(value="/updateHouse") 
     @PutMapping("/updateHouse")
    public ResponseEntity<House> updateHouse(@RequestBody House house){
    
        return new ResponseEntity<House  >(houseRepository.save(house), HttpStatus.ACCEPTED);
    }

   @GetMapping
   //(value="/host") 
    @RequestMapping("/host")
      
    public ResponseEntity<House> getHouseByUsername(String username) {
        
        return new ResponseEntity<House>(houseRepository.findByUsername(username), HttpStatus.ACCEPTED);
    }

   /*@GetMapping
    @RequestMapping("/search")
      
    public ResponseEntity<Iterable<House>> getHouses(){
        return new ResponseEntity<Iterable<House>>(houseRepository.findAll(), HttpStatus.ACCEPTED);
    }*/


 // holi
  /*  @GetMapping
    @RequestMapping("/login")
    public ResponseEntity<User> getUserByUsernameAndPasword(String username,String password) {
        
        return new ResponseEntity<User>(userRepository.findByUsernameAndPassword(username,password), HttpStatus.ACCEPTED);
    }
*/    
}
