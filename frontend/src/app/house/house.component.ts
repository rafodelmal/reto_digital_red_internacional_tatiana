import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/shared/services/login.service';
import { User } from 'app/user/User';
import Swal from 'sweetalert2';
import { House } from './house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  available: any;
  phone: any;
  housecountry: any;
  housecity: any;
  houseaddress: any;
  username: any;
  idhouse: any;
  photo: any;
  respuesta: House;
  tipo: boolean = true;
  tipo1: boolean = true;
  constructor(private service: LoginService, private datosLogin: LoginService, private router: Router) { }

  ngOnInit()  {
    let respuesta;
    let username = this.service.username
    let password = this.service.password;
   this.service.getHouse(username).subscribe(data => {
      respuesta=data;
      if(data===null){
  
      this.service.getLogin(username, password).subscribe(data => {
      respuesta=data;
      var usuario: User;
      usuario=respuesta;
     
      this.username=usuario.username;
      this.housecountry=usuario.usercountry;
      this.housecity=usuario.usercity;
      this.houseaddress=usuario.address;
      
      
      });
      }  
    else{
      
      var casa: House;
      casa=respuesta;
      this.idhouse=casa.idhouse
      this.username=casa.username;
      this.available=casa.available;
      this.phone=casa.phone;
      this.housecountry=casa.housecountry;
      this.housecity=casa.housecity;
      this.houseaddress=casa.houseaddress;
      this.photo=casa.photo;
      
    } 
    
    })
    
  }

  public(){
    let username = this.username;
    let phone = this.phone;
    let housecountry = this.housecountry;
    let housecity = this.housecity;
    let houseaddress = this.houseaddress;
    let available = this.available;
    let photo = this.photo;
   
    if (this.phone === undefined || this.housecountry === undefined || this.housecity === undefined || this.houseaddress === undefined || this.available === undefined || this.photo === undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes diligenciar todos los campos',

      })
    }
    else {

     let casa = new House();
      casa.create(username, phone, housecountry, housecity, houseaddress, available, photo)
      casa.login(username)
      console
     this.service.getHouse(username).subscribe(data => {
        if (data === null) {
          console.log(casa)
          this.service.saveHouse(casa).subscribe(data => {
            console.log(data);

          }, error => alert(error));
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Publicaste la casa correctamente!',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/admin/house']);
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puedes publicar ',

          })
        }

      }
    )
    
  }




  }

  uploadHouse(){
    let idhouse = this.idhouse;
    let username = this.username;
    let phone = this.phone;
    let housecountry =this.housecountry;
    let housecity = this.housecity;
    let houseaddress = this.houseaddress;
    let available = this.available;
    let photo = this.photo
    console.log(username)
    
    let casa = new House();
    casa.idhouse=idhouse
    casa.username=username;
    casa.phone=phone;
    casa.housecountry=housecountry;
    casa.housecity=housecity;
    casa.houseaddress=houseaddress;
    casa.available=available;
    casa.photo=photo;
    console.log(casa);
    console.log(casa.idhouse);
    this.service.getHouse(username).subscribe(data => {
      if (data === null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Primero debes actualizar ',

        })
      }
      else {
        this.service.updateHouse(casa).subscribe(data => {
          console.log(data);
        }, error => alert(error));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Actualizado correctamente',
          showConfirmButton: false,
          timer: 1500
        });

      }

    }
  )
    


  

  }
}
