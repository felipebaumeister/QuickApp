import { EmpresaService } from './empresa/empresa.service';
import { NovoCandidatoComponent } from './../candidatos/novo-candidato/novo-candidato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './empresa/empresa.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { NovaEmpresaComponent } from './nova-empresa/nova-empresa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,  
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
  ],
  declarations: [
    EmpresaComponent,
     EmpresaListComponent,
     NovaEmpresaComponent],
  exports: [NovaEmpresaComponent],
  providers: [ EmpresaService ]
})
export class EmpresasModule { }
