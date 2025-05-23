import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { HomeComponent } from './paginas/home/home.component';
import { IniciarComponent } from './paginas/iniciar/iniciar.component';

export const routes: Routes = [
    {path:'', redirectTo:'/inicio',pathMatch:'full'},
    {path:'inicio', component: InicioComponent},    
    {path:'home', component: HomeComponent},
    {path: 'iniciar', component: IniciarComponent}
];