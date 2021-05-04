import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'app/layouts/guest/guest';
import { LoginService } from 'app/shared/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private router: Router, private service: LoginService) { }
  username: any;
  password: any;

  ngOnInit(): void {

  }

  sign() {
    let username = this.username;
    let password = this.password;
    console.log(username)
    console.log(password)
    let usuario = new Guest();
    usuario.login(username, password)
    this.service.getLogin(username, password).subscribe(data => {
      if (data === null) {
        console.log(usuario)
        this.service.saveUser(usuario).subscribe(data => {
          console.log(data);
        }, error => alert(error));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Te registraste correctamente!! Bienvenido',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/guest']);
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario ya existe!, intentalo nuevamente',

        })
      }

    });
  }
}