import { EmpresaService } from './../../empresas/empresa/empresa.service';
import { VagaService } from './vaga.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from './vaga';
import { CandidatoService } from 'src/app/candidatos/candidato/candidato.service';
import { Candidato } from 'src/app/candidatos/candidato/candidato';
import { Empresa } from 'src/app/empresas/empresa/empresa';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent implements OnInit {

  @Input() vaga : Vaga;
  candidato: Candidato;
  canditadoNaoCadastrado: boolean = false;
  vagaEmpresaAtual: boolean = false;
  empresa: Empresa;

  constructor(private vagaService: VagaService,
    private router: Router,
    private candidatoService: CandidatoService,
    private empresaService: EmpresaService) { 
     
    }

  ngOnInit() {
    this.candidato = this.candidatoService.getData();
    this.empresa = this.empresaService.getData();
    this.canditadoNaoCadastrado = this.candidatoService.exists();
    this.vagaEmpresaAtual = this.empresaService.exists();
  }

  addCandidato() {
    this.vagaService.addCandidato(this.vaga.id, this.candidato.id)
      .subscribe(vaga => {
        console.log("Inscrição realizada com sucesso")
        return this.router.navigate(['', 'candidato'])
      });
  }

  verCandidatos(idVaga: string) {
    return this.router.navigate(['', 'candidatos-vaga', idVaga])
  }



}
