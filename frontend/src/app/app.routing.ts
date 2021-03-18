import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './layouts/guest/guest.component';
import {LoginComponent} from './login/login.component';
import {SidebarComponent} from './sidebar/sidebar.component';
const routes: Routes =[
  {
    path: '',
    component: LoginComponent,
   },
   {
    path: 'guest',
    component: GuestComponent,
   },
   {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
    path: '',
    loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
}]},
{
  path: '**',
  redirectTo: '',
  
 },

   

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
