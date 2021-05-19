import { Component, OnInit } from '@angular/core';
import { Guest } from 'app/guest/guest';
import { LoginService } from 'app/shared/services/login.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


export const ROUTESGUEST: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Bienvenido Portal GUEST',  icon: 'pe-7s-home', class: '' },
    { path: '/admin/user', title: 'Tu Perfil',  icon:'pe-7s-id', class: '' },
    { path: '/admin/table', title: 'Historial',  icon:'pe-7s-note2', class: '' },
    //{ path: '/admin/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    //{ path: '/admin/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    //{ path: '/admin/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    //{ path: '/admin/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    //{ path: '/admin/calculadora', title: 'Calculadora',  icon:'pe-7s-calculator', class: '' },
   // { path: 'house', title: 'Quiero Ofrecer mi casa',  icon:'pe-7s-rocket', class: 'active-pro' },
];

export const ROUTESHOST: RouteInfo[] = [
  { path: 'house', title: 'Bienvenido Portal HOST',  icon:'pe-7s-id', class: '' },
  { path: '/admin/user', title: 'Tu Perfil',  icon:'pe-7s-id', class: '' },
  { path: '/admin/table', title: 'Historial',  icon:'pe-7s-note2', class: '' },
  //{ path: 'house', title: 'Quiero Ofrecer mi casa',  icon:'pe-7s-rocket', class: 'active-pro' },

]

export const ROUTES: RouteInfo[] = [
  { path: '/admin/dashboard', title: 'Bienvenido Portal FULL',  icon: 'pe-7s-home', class: '' },
  { path: '/admin/dashboard', title: 'Buscar',  icon: 'pe-7s-home', class: '' },
  { path: '/admin/user', title: 'Tu Perfil',  icon:'pe-7s-id', class: '' },
  { path: '/admin/table', title: 'Historial',  icon:'pe-7s-note2', class: '' },
  { path: 'house', title: 'Quiero Ofrecer mi casa',  icon:'pe-7s-rocket', class: 'active-pro' },

]


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private service: LoginService) { }

  ngOnInit() {
    let respuesta;
    let username = this.service.username
    let password = this.service.password;
    this.service.getLogin(username, password).subscribe(data => {
      respuesta=data;
      var usuario: Guest;
      usuario=respuesta;
      console.log(usuario.rol)
      if(usuario.rol==1){
    this.menuItems = ROUTESGUEST.filter(menuItem => menuItem);
      }
      else if(usuario.rol==2){
        this.menuItems = ROUTESHOST.filter(menuItem => menuItem);
      }
      else{
        this.menuItems = ROUTES.filter(menuItem => menuItem);
      }
  })
}
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
