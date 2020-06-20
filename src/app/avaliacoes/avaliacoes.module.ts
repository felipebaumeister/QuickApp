import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacaoCandidatoComponent } from './avaliacao-candidato/avaliacao-candidato.component';
import { AvaliacaoEmpresaComponent } from './avaliacao-empresa/avaliacao-empresa.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvaliacaoCandidatoComponent, AvaliacaoEmpresaComponent]
})
export class AvaliacoesModule { }
