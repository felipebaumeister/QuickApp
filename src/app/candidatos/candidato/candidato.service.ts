import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Candidato } from './candidato';

const API = "https://localhost:44343"

@Injectable()
export class CandidatoService  {
    
    constructor(private http: HttpClient) { }

  add(candidato: Candidato) {
     console.log(candidato);
 
     return this.http.post(API + '/api/Candidato', candidato)
  }
}