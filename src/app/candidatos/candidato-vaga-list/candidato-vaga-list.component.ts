import { VagaService } from './../../vagas/vaga/vaga.service';
import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato/candidato';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-candidato-vaga-list',
  templateUrl: './candidato-vaga-list.component.html',
  styleUrls: ['./candidato-vaga-list.component.css']
})
export class CandidatoVagaListComponent implements OnInit {

  candidatos: Candidato[] = [];
  idVaga: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private vagaService: VagaService) { }

  ngOnInit() {
    debugger
    this.idVaga = this.activatedRoute.snapshot.params.idVaga;
    this.vagaService.getVagaComCandidatos(this.idVaga)
      .subscribe(candidatos => {
        debugger
        this.candidatos = candidatos;
      })
  }

  aprovarCandidato(idCandidato: string) {
      
  }

}
