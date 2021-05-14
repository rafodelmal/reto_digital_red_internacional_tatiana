import { Component, OnInit, Input } from '@angular/core';
import { Guest } from 'app/guest/guest';
import { LoginService } from 'app/shared/services/login.service';
import { analytics } from 'googleapis/build/src/apis/analytics';
import { data } from 'jquery';
import Swal from 'sweetalert2';
import { User } from './User';






@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: any;
  username: any;
  name: any;
  password: any;
  usercountry: any;
  usercity: any;
  address: any;
  rol: number;



  constructor(private service: LoginService, private datosLogin: LoginService) { }

  ngOnInit() {
    let respuesta;
    let username = this.service.username
    let password = this.service.password;
    this.service.getLogin(username, password).subscribe(data => {
      respuesta=data;
      var usuario: User;
      usuario=respuesta;
      console.log("estes es:"+usuario)
      this.id=usuario.id
      this.username=usuario.username;
      this.password=usuario.password;
      this.name=usuario.name;
      this.usercountry=usuario.usercountry;
      this.usercity=usuario.usercity;
      this.address=usuario.address;
      this.rol=usuario.rol;
    
    
    
    })
    

  }
  update() {
    let id = this.id
    let username = this.username;
    let password = this.password;
    let name = this.name;
    let usercountry =this.usercountry;
    let usercity = this.usercity;
    let address = this.address;
    let rol = this.rol;
    console.log(username)
    console.log(password)
    let usuario = new Guest();
    usuario.id=id
    usuario.username=username;
    usuario.password=password;
    usuario.name=name;
    usuario.usercountry=usercountry;
    usuario.usercity=usercity;
    usuario.address=address;
    usuario.rol=rol;
    console.log(usuario);
    this.service.updateUser(usuario).subscribe(data => {
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
