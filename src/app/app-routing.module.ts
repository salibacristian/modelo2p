import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './helpers/auth.guard';
import { AltaVehiculoComponent } from './components/alta-vehiculo/alta-vehiculo.component';


const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   {path: 'home' , component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'register' , component: RegisterComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'alta-vehiculo' , component: AltaVehiculoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
