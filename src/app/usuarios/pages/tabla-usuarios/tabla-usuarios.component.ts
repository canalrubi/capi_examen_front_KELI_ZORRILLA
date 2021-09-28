import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

    

  listado: any = [];

  constructor(private usuariosService: UsuariosService) { 

    this.listadoDeUsuarios();
  }

  ngOnInit(): void {
  }

  
  listadoDeUsuarios(){

    
    this.usuariosService.listadoDeUsuarios().subscribe(res=>{
      this.listado = res;

    }, errors =>{
        console.log('No se pudo cargar el listado');
     
    })
  }


}
