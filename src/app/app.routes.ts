import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "inicio",
        pathMatch: "full"
    },
    {
        path: "inicio",
        component: InicioComponent
    },
    {
        path: "servicios",
        component: ServiciosComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: "proyectos",
        component:ProyectosComponent
    },
    {
        path: 'nosotros',
        component: NosotrosComponent
    },
];
