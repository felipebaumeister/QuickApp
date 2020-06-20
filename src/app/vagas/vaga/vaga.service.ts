import { Vaga } from './vaga';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = 'https://localhost:44343';

@Injectable({
    providedIn: 'root'
})
export class VagaService{

    constructor(private http: HttpClient){

    }

    listFromFilter() {
        return this.http
        .get<Vaga[]>(API + '/api/Vaga');
    }

    listFromPaginated(UserName: string, page: number) {

        const params = new HttpParams().append('page', page.toString());

        return this.http
        .get<Vaga[]>(API + '/' + UserName + '/photos', {params});
    }

    add(vaga: Vaga) {
        console.log(vaga);
    
        return this.http.post(API + '/api/Vaga', vaga)
     }
}




