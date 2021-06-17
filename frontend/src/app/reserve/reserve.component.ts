import { Component, OnInit } from '@angular/core';
import { House } from 'app/house/house';
import { LoginService } from 'app/shared/services/login.service';
import { User } from 'app/user/User';
import Swal from 'sweetalert2';
import { Reserve } from './reserve';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  username: any;
  usernamehost: any;
  idhouse: any;
  phone: any;
  photo: any;
  housecity: any;
  housecountry: any;
  houseaddress: any;
  fechaend: any;
  fechainit: any;
  idguest: any;
  name: any;
  


  


  constructor(private service: LoginService) { }

  ngOnInit() {
   let respuesta;
    let usernameguest;
    let usernamehost1;
    let name = this.name;
    let idhouseser = this.service.idhouse
    let phone = this.phone;
    let photo = this.photo;
    let housecity = this.housecity;
    let houseaddress = this.houseaddress;
    let housecountry = this.housecountry
   // console.log("este es id house de service"+idhouse)
    this.service.getHousebyId(idhouseser).subscribe(data => {
      respuesta=data;
      var casa : House;
      casa=respuesta;
      console.log("estes es idhouse:"+casa.username)
      this.idhouse=casa.idhouse;
      usernamehost1=casa.username
      this.phone=casa.phone;
      this.photo=casa.photo;
      this.housecity=casa.housecity;
      this.housecountry=casa.housecountry;
      this.houseaddress=casa.houseaddress;
      console.log('este es el usuaruio host'+usernamehost1)
      this.service.getUser(usernamehost1).subscribe(data => {
        respuesta=data;
        var usuario : User;
        usuario=respuesta;
        console.log("estes es:"+usuario)
        this.usernamehost=usuario.name;
      });
     });
     
     
    console.log(this.service.idhouse)

}
  createReserveHouse(){
    console.log("esto trae metodo reservce: "+this.service.usernamelogin)
    let idhousecre=this.idhouse
    let usernamehostcre=this.service.usernamelogin;
    let usernameguestcre=this.service.username;
    let fechainitcre=this.fechainit;
    let fechaendcre=this.fechaend;
    let reserva = new Reserve();
    reserva.createReserve(idhousecre,usernamehostcre,usernameguestcre,fechainitcre,fechaendcre)
      
this.service.saveReserve(reserva).subscribe(data => {
        console.log(data);
      }, error => alert(error));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Reserva realizada correctamente',
        showConfirmButton: false,
        timer: 1500
      });


  
    
  }  

  }

  
