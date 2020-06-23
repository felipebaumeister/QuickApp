import { EmpresaService } from './../../empresas/empresa/empresa.service';
import { VagaService } from './vaga.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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

  @Input() vaga: Vaga;
  candidato: Candidato;
  canditadoInscrito: boolean = false;
  canditadoLogado: boolean = false;
  vagaEmpresaAtual: boolean = false;
  empresa: Empresa;

  constructor(private vagaService: VagaService,
    private router: Router,
    private candidatoService: CandidatoService,
    private empresaService: EmpresaService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.vaga)
     this.verificaCandidato();
  }

  ngOnInit() {
    this.candidato = this.candidatoService.getData();
    this.empresa = this.empresaService.getData();

    this.verificaCandidato()
    this.vagaEmpresaAtual = this.empresaService.exists();
  }

  addCandidato() {
    this.vagaService.addCandidato(this.vaga.id, this.candidato.id)
      .subscribe(vaga => {
        console.log("Inscrição realizada com sucesso")
        this.canditadoInscrito = true;
        return this.router.navigate(['', 'candidato'])
      });
  }

  verCandidatos(idVaga: string) {
    return this.router.navigate(['', 'candidatos-vaga', idVaga])
  }

  protected verificaCandidato() {
    if (!this.candidatoService.exists()) {
      this.canditadoLogado = false;
    } else {
      this.canditadoLogado = true;

      if(this.vaga && this.candidato)
      this.candidatoService.inscritoEmVaga(this.vaga.id, this.candidato.id).subscribe(inscrito => this.canditadoInscrito = inscrito)
    }
  }

}
