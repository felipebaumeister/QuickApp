import { VagasModule } from './../vagas/vagas.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoComponent } from './candidato/candidato.component';
import { CandidatoListComponent } from './candidato-list/candidato-list.component';
import { NovoCandidatoComponent } from './novo-candidato/novo-candidato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { CandidatoService } from './candidato/candidato.service';
import { VagaListModule } from '../vagas/vaga-list/vaga-list.module';
import { CandidatoVagaListModule } from './candidato-vaga-list/candidato-vaga-list.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,  
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    VagaListModule,
    CandidatoVagaListModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    CandidatoComponent, 
    CandidatoListComponent,
     NovoCandidatoComponent
    ],
  exports: [
    NovoCandidatoComponent,
    CandidatoComponent
  ],
  providers : [
    CandidatoService
  ]
})
export class CandidatosModule { }
