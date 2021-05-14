import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Guest } from 'app/guest/guest';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  @Output() datos : any;
  
  username: any;
  password: any;

  getLogin<Guest>(username, password): Observable <Guest>{
   this.username=username;
   this.password=password;
    return  this.http.get('http://localhost:8080/login?username='+username+'&password='+password).pipe(map((response)=>response as Guest));

  }

  saveUser(usuario: Guest): Observable<any>{
    console.log("llega al service:", usuario)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(usuario);
    console.log(headers," ", body)

    return this.http.post('http://localhost:8080/sign', body, {'headers':headers})

  }

  updateUser(usuario: Guest): Observable<any>{
    console.log("llega al service:", usuario)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(usuario);
    console.log(headers," ", body)

    return this.http.put('http://localhost:8080/update', body, {'headers':headers})

  }
}
