import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Guest } from 'app/guest/guest';
import { House } from 'app/house/house';
import { Reserve } from 'app/reserve/reserve';
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
  housecity: any;
  housecountry: any;
  available: any;
  name: any;
  idhouse: any;
  usernamelogin: any;

  getLogin<Guest>(usernamelogin, password): Observable <Guest>{
   this.usernamelogin=usernamelogin;
   this.password=password;
    return  this.http.get('http://localhost:8080/login?username='+usernamelogin+'&password='+password).pipe(map((response)=>response as Guest));

  }

  getHouse<House>(username): Observable <House>{
    this.username=username;
    
     return  this.http.get('http://localhost:8080/host?username='+username).pipe(map((response)=>response as House));
 
   }

   getHousebyId<House>(idhouse): Observable <House>{
    this.idhouse=idhouse;
    
     return  this.http.get('http://localhost:8080/hostid?idhouse='+idhouse).pipe(map((response)=>response as House));
 
   }
   getUser<User>(username): Observable <User>{
    this.username=username;
    
     return  this.http.get('http://localhost:8080/guest?username='+username).pipe(map((response)=>response as User));
 
   }
   getHouseAvailable<House>(available): Observable <House>{
    available=1;
    
     return  this.http.get('http://localhost:8080/searchAvailable?available='+available).pipe(map((response)=>response as House));
 
   }

   getAllHouses<House>(): Observable <House>{
    
    
     return  this.http.get('http://localhost:8080/search').pipe(map((response)=>response as House));
 
   }
 /*  getHouses<House>(housecity, housecountry, available): Observable <House>{
    this.housecity=housecity;
    this.housecountry=housecountry;
    this.available=available;*/

    
    // return  this.http.get('http://localhost:8080/host?username='+username).pipe(map((response)=>response as House));
 
  // }

  getIdHouse(idhouse){
    this.idhouse=idhouse;

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

  updateHouse(casa: House): Observable<any>{
    console.log("llega al service:", casa)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(casa);
    console.log(headers," ", body)

    return this.http.put('http://localhost:8080/updateHouse', body, {'headers':headers})

  }

  saveHouse(casa: House): Observable<any>{
    console.log("llega al service:", casa)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(casa);
    console.log(headers," ", body)

    return this.http.post('http://localhost:8080/public', body, {'headers':headers})

  }

  saveReserve(reserva: Reserve): Observable<any>{
    console.log("llega al service:", reserva)

    const headers =  { 'content-type': 'application/json'};
    const body = JSON.stringify(reserva);
    console.log(headers," ", body)

    return this.http.post('http://localhost:8080/reservehouse', body, {'headers':headers})

  }

}
