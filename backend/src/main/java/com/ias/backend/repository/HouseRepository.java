package com.ias.backend.repository;

import java.util.List;

import com.ias.backend.domain.House;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Qualifier("houses")
@Repository
public interface HouseRepository extends CrudRepository<House, Integer>{

    

    House findByUsername(String username);

   Iterable<House> findByAvailable(int available);


//Iterable<House> findByCity(int available, String housecity );
}
    

