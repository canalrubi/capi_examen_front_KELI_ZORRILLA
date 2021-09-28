
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from './pages/tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  {
    path: '', //Ruta padre
    children:[
      { path: 'listado',  component: TablaUsuariosComponent},

      { path: '**',       redirectTo: '/'}
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class UsuariosRoutingModule { }