import { Component, OnInit, Input, Output } from '@angular/core';
import { LoginService } from 'app/shared/services/login.service';
import { Guest } from './guest';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { stringify } from '@angular/compiler/src/util';
import { AuthService } from 'app/shared/services/auth.service';


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
  respuesta: Guest;
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
      
     console.log('este objeto llega data'+data)
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

        console.log(data[0])
        if(data[4]===2){
          
          this.respuesta = new Guest();
          this.respuesta.roluser(username, password,rol)
          this.router.navigate(['/admin/dashboard']);
            console.log(this.respuesta.username)

        
        console.log('el rol es'+this.respuesta.username)
        
        }
        else{
       
        this.router.navigate(['/admin/dashboard']);
          console.log(this.respuesta.username)
        }
      }

    })

    }
   
  }

  


