import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'app/house/house';
import { LoginService } from 'app/shared/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  housecity: any;
  housecountry: any;
  available: any;
  photo: any
  houses: any;
  idhouse: any;
    
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
    this.service.getHouseAvailable(1).subscribe(data => {
     this.houses = new House;
     this.houses=data; 
     
      console.log(data)
     })
  }  

  searchdis(){
  let housecity = this.housecity;
  let housecountry = this.housecountry;
  let available=1;
  
  this.service.getHouseAvailable(available)
  }
  
  housereserve(house2){
  /*var idcasa = document.getElementById("idhouse");*/
  console.log('este es el id house cuando hago click es : '+house2)
 this.service.getIdHouse(house2)
  this.router.navigate(['/admin/reserve']);
  }
  

}
