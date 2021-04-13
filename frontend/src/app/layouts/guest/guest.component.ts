import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/shared/services/login.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  username: any
  password: any
  showResult: boolean

  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }
  login(){
  let username=this.username
  let password=this.password
  let respuesta
    console.log(password)
  this.service.getLogin(username,password).subscribe(data=>
    respuesta=data);

    console.log(respuesta)
  }
}
