import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-perfil',
  templateUrl: './cadastro-perfil.component.html',
  styleUrls: ['./cadastro-perfil.component.css']
})
export class CadastroPerfilComponent implements OnInit {

  perfis: any = ['candidato', 'empresa'];

  perfil: string = this.perfis[0];

  constructor() { }

  ngOnInit() {
  }

  changePerfil(perfil){
    this.perfil = perfil;
  }

}
