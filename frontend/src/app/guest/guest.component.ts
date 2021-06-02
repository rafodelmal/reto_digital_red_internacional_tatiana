import { Component, OnInit, Input, Output } from '@angular/core';
import { LoginService } from 'app/shared/services/login.service';
import { Guest } from './guest';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { stringify } from '@angular/compiler/src/util';
import { AuthService } from 'app/shared/services/auth.service';
import { identifierModuleUrl } from '@angular/compiler';
import { HttpResponse } from '@angular/common/http';


declare var $: any
@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  username: any;
  password: any;
  showResult: boolean;
  respuesta: any;
  rol:  any;

  constructor(private router: Router, private service: LoginService, private authService: AuthService) { }

  routeRedirect = '';

  ngOnInit(): void {
    this.showResult = false;
  }

  login() {
    //uso del servicio autorizacion para saber el estado del usuario logeado
   

    //instancio inputs con variable
    //console.log('prueba');
    let username = this.username;
    let password = this.password;
    let answer
    let rol

    

    console.log(username);
    console.log(password);

    this.service.getLogin(username, password).subscribe(data => {
      this.respuesta=data; 
     
       console.log('esta es la resouesta login'+this.respuesta)
      if (data === null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Intentalo de nuevo o registrate!',

        })
      }
      else {
        
        this.authService.login();
        this.routeRedirect = this.authService.urlUsuarioIntentAcceder;
        this.authService.urlUsuarioIntentAcceder = '';
        this.router.navigate([this.routeRedirect]);
     
        this.respuesta=data;
        var usuario: Guest;
        usuario=this.respuesta;
        //console.log('posicion de data'+this.respuesta.rol)
        //if(data[4]===2){
         // console.log('este es lo que llega de back'+this.respuesta);
         if(this.respuesta.rol==2){
          this.router.navigate(['/admin/house']);
            

        
        console.log('el rol es'+this.respuesta.rol)
         }
        
        else{
       
        this.router.navigate(['/admin/dashboard']);
          console.log(this.respuesta.username)
        }
      }

    })

    }
   
  }

  


