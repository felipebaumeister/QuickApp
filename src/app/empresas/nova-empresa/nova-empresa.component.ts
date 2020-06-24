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
      ]]
    });
  }

  brToEnDate(data: string) {
    
    if(!data.includes('/'))
    return data;

    return data.split('/').reverse().join('-');
  }

  addEmpresa() {

    const novaEmpresa = this.empresaForm.getRawValue() as Empresa;

     novaEmpresa.dataNascimento = this.brToEnDate(novaEmpresa.dataNascimento)
     
    this.user$.subscribe((user) => {
      
      novaEmpresa.idUsuario = user.id;

      this.empresaService
        .add(novaEmpresa).subscribe(() => {
             this.empresaService.setData(novaEmpresa);
           this.router.navigate(['/empregador'])
        }, err => console.log(err))
    })

  }

}
