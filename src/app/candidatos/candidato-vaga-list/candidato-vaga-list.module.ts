import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoVagaListComponent } from './candidato-vaga-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CandidatoVagaListComponent],
  exports: [CandidatoVagaListComponent]
})
export class CandidatoVagaListModule { }
