package com.ias.backend.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "usuario_taty")
@Data
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column
    private int id;
    @Column
    private String username;
    @Column
    private String password;
    @Column
    private String name;
    @Column
    private String usercountry;
    @Column
    private String usercity;
    @Column
    private String address;
    @Column
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
