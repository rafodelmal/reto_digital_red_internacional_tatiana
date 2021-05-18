import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './guest/guest.component';
import {LoginComponent} from './login/login.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { SignComponent } from './sign/sign.component';
import { CanActiveGuard } from './can-active.guard';
import { HouseComponent } from './house/house.component';
const routes: Routes =[
  {
    path: '',
    component: GuestComponent,
    
   },
   {
    path: 'guest',
    component: GuestComponent,
   },
   {
    path: 'sign',
    component: SignComponent,
   },
   {
    path: 'house',
    component: HouseComponent,
   },
   {
    path: 'admin',
    component: AdminLayoutComponent, canActivate: [CanActiveGuard],
    children: [
      {
    path: '',
    loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule', 
     
}]},
{
  path: 'admin/user',
  component: AdminLayoutComponent, canActivate: [CanActiveGuard],
 },
 {path: 'admin/house',
 component: HouseComponent, canActivate: [CanActiveGuard],
},
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
