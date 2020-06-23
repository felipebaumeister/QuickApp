import { Ocupacao } from './../../ocupacao/ocupacao';
import { Component, OnInit } from '@angular/core';
import { OcupacaoService } from 'src/app/ocupacao/ocupacao-service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { CandidatoService } from '../candidato/candidato.service';
import { Candidato } from '../candidato/candidato';

@Component({
  selector: 'app-novo-candidato',
  templateUrl: './novo-candidato.component.html',
  styleUrls: ['./novo-candidato.component.css']
})
export class NovoCandidatoComponent implements OnInit {

  candidatoForm: FormGroup;
  user$: Observable<User>;
  ocupacoes: Ocupacao[];
  idOcupacao: string;


  constructor(private ocupacaoService: OcupacaoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private candidatoService: CandidatoService,
    private userService: UserService) {
    this.user$ = userService.getUser();
  }

  ngOnInit() {

    this.ocupacaoService.listAll().subscribe((ocupacoes) => {
      this.ocupacoes = ocupacoes;
      this.idOcupacao = ocupacoes[0].id;
    });

    this.candidatoForm = this.formBuilder.group({
      nome: ['', [
        Validators.required
      ]],
      sobrenome: ['', [
        Validators.required
      ]],
      competencias: ['', [
        Validators.required
      ]],
      telefoneCelular: ['', [
        Validators.required
      ]],
      telefoneResidencial: [''],
      telefoneComercial: [''],
      CEP: ['', [
        Validators.required
      ]],
      endereco: ['', [
        Validators.required
      ]],
      numero: ['', [
        Validators.required
      ]],
      complemento: [''],
      CPF_CNPJ: ['', [
        Validators.required
      ]],
      dataNascimento: ['', [
        Validators.required
      ]],
      idOcupacao: ['']
    });
  }

  selectOption(id: string) {
    this.idOcupacao = id;
  }



  addCandidato() {

    const novoCandidato = this.candidatoForm.getRawValue() as Candidato;
    novoCandidato.idCupacao = this.idOcupacao;

    this.user$.subscribe((user) => {

      novoCandidato.idUsuario = user.id;

      this.candidatoService
        .add(novoCandidato).subscribe(() => {
          this.router.navigate(['', 'candidato'])
        }, err => console.log(err))
    })

  }

}
