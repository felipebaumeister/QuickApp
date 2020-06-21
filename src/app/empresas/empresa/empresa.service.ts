import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Empresa } from './empresa';

const API = "https://localhost:44343";
const KEY = 'Empresa';

@Injectable()
export class EmpresaService  {
    
    constructor(private http: HttpClient) { }

  add(empresa: Empresa) {
     console.log(empresa);
 
     return this.http.post(API + '/api/Empresa', empresa)
  }

  getByIdUser  (idUsuario:string)  {
    return this.http.get<Empresa>(API + '/api/Empresa/get-by-user/' + idUsuario)
  }


  setData(empresa: Empresa){
    window.localStorage.setItem(KEY, JSON.stringify(empresa))
  }

  getData(): Empresa {
    return JSON.parse(window.localStorage.getItem(KEY)) as Empresa;
  }

  exists(): boolean {
    return !!window.localStorage.getItem(KEY);
  }

  removeData(){
    window.localStorage.removeItem(KEY)
  }


}