import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  readonly API_URL = 'http://127.0.0.1:8000/api/v1/';

  constructor(private httpClient: HttpClient) { }

  listadoDeUsuarios(){
    return this.httpClient.get(this.API_URL + 'users');
  }


}
