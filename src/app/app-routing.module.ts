import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from './usuarios/pages/tabla-usuarios/tabla-usuarios.component';


const routes: Routes = [

  {path: 'usuarios', 
    loadChildren:()=> import('./usuarios/usuarios.module').then(m=>m.UsuariosModule) 
  },
  {path: 'usuarios/listado',     component: TablaUsuariosComponent}, 

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
