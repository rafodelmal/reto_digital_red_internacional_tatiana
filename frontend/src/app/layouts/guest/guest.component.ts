import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/shared/services/login.service';
import { Guest } from './guest';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs/operators';
declare var $:any
@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  username: any
  password: any
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
      alert('Usuario no existe');
    }
    else{
      this.respuesta = new Guest(data);
      this.router.navigate(['/admin']);
      console.log(this.respuesta.id);
    }
     
    
    
  }
    );

    
  }
}
function isObjectEmpty(arg0: any) {
  throw new Error('Function not implemented.');
}

