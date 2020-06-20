import { Observable } from 'rxjs';
import { EmpresaService } from './../empresa/empresa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empresa } from '../empresa/empresa';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-nova-empresa',
  templateUrl: './nova-empresa.component.html',
  styleUrls: ['./nova-empresa.component.css']
})
export class NovaEmpresaComponent implements OnInit {

  empresaForm: FormGroup;
  user$: Observable<User>;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private empresaService: EmpresaService,
    private userService: UserService) {

    this.user$ = userService.getUser();
  }

  ngOnInit(): void {

    this.empresaForm = this.formBuilder.group({
      nome: ['', [
        Validators.required
      ]],
      sobrenome: ['', [
        Validators.required
      ]],
      telefoneCelular: ['', [
        Validators.required
      ]],
      telefoneResidencial: [''],
      telefoneComercial: [''],
      CEP: ['23232332323', [
        Validators.required
      ]],
      endereco: ['Rua a', [
        Validators.required
      ]],
      numero: ['23', [
        Validators.required
      ]],
      complemento: [''],
      CPF_CNPJ: ['232332323', [
        Validators.required
      ]],
      dataNascimento: ['1991-02-02', [
        Validators.required
      ]]
    });
  }


  addEmpresa() {

    const novaEmpresa = this.empresaForm.getRawValue() as Empresa;

    this.user$.subscribe((user) => {
      
      novaEmpresa.idUsuario = user.id;

      this.empresaService
        .add(novaEmpresa).subscribe(() => {
           this.router.navigate(['/empregador'])
        }, err => console.log(err))
    })

  }

}
