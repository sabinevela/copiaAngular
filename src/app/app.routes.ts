import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PeliculasComponent } from './rutas/peliculas/peliculas.component';
import { PeliculasDetailsComponent } from './rutas/peliculas-details/peliculas-details.component';
import { ApiComponent } from './pages/api/api.component';
import { guardianGuard } from './guards/guardian.guard';

export const routes: Routes = [
    {path:'', redirectTo:"/inicio",pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'inicio',component:InicioComponent},
    {path:'home',component:HomeComponent,canActivate:[guardianGuard]},
    {path:'perfil',component:PerfilComponent},
    {path:'peliculas',component:PeliculasComponent},
    {path:'peliculas/:id',component:PeliculasDetailsComponent},
    {path:'api',component:ApiComponent},
    {path:'**',component:Error404Component}
];
