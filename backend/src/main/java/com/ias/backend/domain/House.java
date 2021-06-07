package com.ias.backend.domain;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "casa_taty")
@Data
public class House {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column
    private int idhouse;

    @Column
    private String username;

    @Column
    private int phone;
    @Column
    private String housecountry;
    @Column
    private String housecity;
    @Column
    private String houseaddress;
    @Column
    private int available;
    @Column
    private String photo;
    public int getIdhouse() {
        return idhouse;
    }
    public void setIdhouse(int idhouse) {
        this.idhouse = idhouse;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public int getPhone() {
        return phone;
    }
    public void setPhone(int phone) {
        this.phone = phone;
    }
    public String getHousecountry() {
        return housecountry;
    }
    public void setHousecountry(String housecountry) {
        this.housecountry = housecountry;
    }
    public String getHousecity() {
        return housecity;
    }
    public void setHousecity(String housecity) {
        this.housecity = housecity;
    }
    public String getHouseaddress() {
        return houseaddress;
    }
    public void setHouseaddress(String houseaddress) {
        this.houseaddress = houseaddress;
    }
    public int getAvailable() {
        return available;
    }
    public void setAvailable(int available) {
        this.available = available;
    }
    public String getPhoto() {
        return photo;
    }
    public void setPhoto(String photo) {
        this.photo = photo;
    }
    
    
    
    
    
    
}
