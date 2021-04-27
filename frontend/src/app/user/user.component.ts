import { Component, OnInit, Input } from '@angular/core';
import { Guest } from 'app/layouts/guest/guest';
import { LoginService } from 'app/shared/services/login.service';
import Swal from 'sweetalert2';


import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: any;
  name: any;
  password: any;
  country: any;
  dep: any;
  city: any;
  adress: any;
  barrio: any;
  email:  any;
  phone:  any;
  rol:    any;
 
  constructor(private service:LoginService, private datosLogin: LoginService) { }

  ngOnInit() {
    let username, password

    this.username=this.datosLogin.username;
    this.password=this.datosLogin.password;

    let respuesta: Guest;

   /* this.datosLogin.getLogin(usernameLogin, passwordLogin).subscribe(respuesta=>{

      respuesta.forEach(datos => {
        this.name=datos.name
        
      });
    })*/
  }
  update(){
    let username=this.username;
    let password=this.password;
    console.log(username)
  console.log(password)
  let usuario = new Guest(username, password);
  this.service.getLogin(username,password).subscribe(data=>{
    if(data!==null){
      console.log(usuario)
      this.service.saveUser(usuario).subscribe(data=>{
    console.log(data);
    }, error=>alert(error));
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Te registraste correctamente!! Bienvenido',
    showConfirmButton: false,
    timer: 1500
    })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario ya existe! intentalo nuevamente',
        
      })
    }
    
  });
}

}
