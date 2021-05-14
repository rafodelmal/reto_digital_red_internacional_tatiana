import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Buscar',  icon: 'pe-7s-home', class: '' },
    { path: '/admin/user', title: 'Tu Perfil',  icon:'pe-7s-id', class: '' },
    { path: '/admin/table', title: 'Historial',  icon:'pe-7s-note2', class: '' },
    //{ path: '/admin/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    //{ path: '/admin/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    //{ path: '/admin/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    //{ path: '/admin/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    //{ path: '/admin/calculadora', title: 'Calculadora',  icon:'pe-7s-calculator', class: '' },
    { path: '/sign', title: 'Quiero Ofrecer mi casa',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
