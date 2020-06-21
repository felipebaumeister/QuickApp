import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Candidato } from './candidato';

const API = "https://localhost:44343"

const KEY = "Candidato";

@Injectable()
export class CandidatoService  {
    
    constructor(private http: HttpClient) { }

  add(candidato: Candidato) {
     console.log(candidato);
 
     return this.http.post(API + '/api/Candidato', candidato)
  }

  getByIdUser  (idUsuario:string)  {
    return this.http.get(API + '/api/Candidato/get-by-user/' + idUsuario)
  }

  setData(candidato: Candidato){
    window.localStorage.setItem(KEY, JSON.stringify(candidato))
  }

  getData(): Candidato {
    return JSON.parse(window.localStorage.getItem(KEY)) as Candidato;
  }

  exists(): boolean {
    return !!window.localStorage.getItem(KEY);
  }

  removeData(){
    window.localStorage.removeItem(KEY)
  }
}