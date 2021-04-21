import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getLogin<T>(username, password): Observable <T>{
   console.log(username);
   console.log(password);
    return  this.http.get('http://localhost:8080/login?username='+username+'&password='+password).pipe(map((response)=>response as T));

  }
}
