import { VagaService } from './vaga.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from './vaga';
import { CandidatoService } from 'src/app/candidatos/candidato/candidato.service';
import { Candidato } from 'src/app/candidatos/candidato/candidato';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent implements OnInit {

  @Input() vaga : Vaga;
  candidato: Candidato;
  canditadoNaoCadastrado: boolean = false ;

  constructor(private vagaService: VagaService,
    private router: Router,
    private candidatoService: CandidatoService) { 
     
    }

  ngOnInit() {
    this.candidato = this.candidatoService.getData();
    this.canditadoNaoCadastrado = this.candidatoService.exists();
  }

  addCandidato() {
    this.vagaService.addCandidato(this.vaga.id, this.candidato.id)
      .subscribe(vaga => {
        console.log("Inscrição realizada com sucesso")
        this.router.navigate(['', 'candidato'])
      });
    
  }



}
