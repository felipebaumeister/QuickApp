import { VagaCandidato } from './../../candidatos/vaga-candidato/vaga-candidato';
import { Vaga } from './vaga';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VagaSearch } from './vaga-search';

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

     addCandidato(idVaga: string, idCandidato: string){
         debugger;
         const vagaCandidato = {idVaga : idVaga, idCandidato : idCandidato} as VagaCandidato;
         return this.http.post(API + '/api/VagaCandidato', vagaCandidato)
     }

     getVagasDisponiveis() {
        return this.http
        .get<Vaga[]>(API + '/api/Vaga/vagas-disponiveis');
     }

     listFromVagaSearch(vagaSearch: VagaSearch) {
        return this.http.post<Vaga[]>(API + '/api/Vaga/vagas-by-filter', vagaSearch);
     }

     getVagasDisponiveisByEmpresa(idEmpresa: string) {
        return this.http
        .get<Vaga[]>(API + '/api/Vaga/vagas-disponiveis-empresa/' + idEmpresa);
     }
}




