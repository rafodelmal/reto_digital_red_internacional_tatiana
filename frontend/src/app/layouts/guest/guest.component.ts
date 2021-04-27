import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'app/shared/services/login.service';
import { Guest } from './guest';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs/operators';
import Swal from 'sweetalert2';
declare var $:any
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

  constructor(private router: Router, private service:LoginService) { }

  ngOnInit(): void {
    this.showResult=false;
  }
  
  login(){
    console.log('prueba');
  let username=this.username;
  let password=this.password;  
  let answer=0
    
  console.log(username);
  console.log(password);
  
  this.service.getLogin(username,password).subscribe(data=>{
    if(data===null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo o registrate!',
        
      })
    }
    else{
      this.respuesta = new Guest(password, username);
      this.router.navigate(['/admin/user']);
      console.log(this.respuesta.id)

    }
     
    
    
  }
    );

    
  }
}

