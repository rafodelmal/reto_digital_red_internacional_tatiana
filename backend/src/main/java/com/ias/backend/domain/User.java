package com.ias.backend.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "usuario_taty")
@Data
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String username;
    private String password;
    private String name;
    private String usercountry;
    private String usercity;
    private String address;
    private int rol;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getUsercountry() {
        return usercountry;
    }
    public void setUsercountry(String usercountry) {
        this.usercountry = usercountry;
    }
    public String getUsercity() {
        return usercity;
    }
    public void setUsercity(String usercity) {
        this.usercity = usercity;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public int getRol() {
        return rol;
    }
    public void setRol(int rol) {
        this.rol = rol;
    }

    
    
}
