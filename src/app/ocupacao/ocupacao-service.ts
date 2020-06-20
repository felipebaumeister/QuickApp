import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Ocupacao } from './ocupacao';

const API = 'https://localhost:44343';

@Injectable({
    providedIn: 'root'
})
export class OcupacaoService{

    constructor(private http: HttpClient){

    }

    // listFromFilter() {
    //     return this.http
    //     .get<Ocupacao[]>(API + '/api/Vaga');
    // }

    listAll() {
        return this.http
        .get<Ocupacao[]>(API + '/api/Ocupacao');
    }

    // listFromPaginated(UserName: string, page: number) {

    //     const params = new HttpParams().append('page', page.toString());

    //     return this.http
    //     .get<Ocupacao[]>(API + '/' + UserName + '/photos', {params});
    // }
}