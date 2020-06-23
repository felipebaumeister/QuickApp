import { EmpresaService } from './../../empresas/empresa/empresa.service';
import { Vaga } from './../vaga/vaga';
import { OcupacaoService } from './../../ocupacao/ocupacao-service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ocupacao } from 'src/app/ocupacao/ocupacao';
import { Router } from '@angular/router';
import { VagaService } from '../vaga/vaga.service';
import { Empresa } from 'src/app/empresas/empresa/empresa';

@Component({
  selector: 'app-nova-vaga',
  templateUrl: './nova-vaga.component.html',
  styleUrls: ['./nova-vaga.component.css']
})
export class NovaVagaComponent implements OnInit {

  vagaForm: FormGroup;
  ocupacoes: Ocupacao[];
  idOcupacao: string;
  empresa: Empresa;

  constructor(private ocupacaoService: OcupacaoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private vagaService: VagaService,
    private empresaService: EmpresaService) { }

  ngOnInit() {
    this.ocupacaoService.listAll().subscribe((ocupacoes) => { 
      this.ocupacoes = ocupacoes;
      this.idOcupacao = ocupacoes[0].id;
    });

    this.empresa = this.empresaService.getData();

    this.vagaForm = this.formBuilder.group({
      titulo: [``, [
        Validators.required
      ]],
      descricaoIntegra: [``, [
        Validators.required
      ]],
      idOcupacao : [''],

      tipoContratacao: [''],
      duracao: [''],
      valor: [''],
      dataInicio: [''],
      dataFim: [''],
      cidade: [''],
      estado: [''],
    });
  }

  selectOption(id: string) {
    this.idOcupacao = id;
  }

  
  addVaga() {

    const novaVaga = this.vagaForm.getRawValue() as Vaga;
    novaVaga.idOcupacao = this.idOcupacao;
    novaVaga.idEmpresa = this.empresa.id;

      this.vagaService
        .add(novaVaga).subscribe(() => {

          this.router.navigate(['','empregador'])
        }, err => console.log(err))


  }

}
