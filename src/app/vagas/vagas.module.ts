import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagaListModule } from './vaga-list/vaga-list.module';
import { NovaVagaComponent } from './nova-vaga/nova-vaga.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    VagaListModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    NovaVagaComponent, 
    NovaVagaComponent],
  exports: [NovaVagaComponent]

})
export class VagasModule { }
