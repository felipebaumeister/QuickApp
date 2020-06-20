import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoComponent } from './candidato/candidato.component';
import { CandidatoListComponent } from './candidato-list/candidato-list.component';
import { NovoCandidatoComponent } from './novo-candidato/novo-candidato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { CandidatoService } from './candidato/candidato.service';

@NgModule({
  imports: [
    CommonModule,  
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
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
