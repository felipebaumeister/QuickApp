import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Empresa } from './empresa';

const API = "https://localhost:44343"

@Injectable()
export class EmpresaService  {
    
    constructor(private http: HttpClient) { }

  add(empresa: Empresa) {
     console.log(empresa);
 
     return this.http.post(API + '/api/Empresa', empresa)
  }
}