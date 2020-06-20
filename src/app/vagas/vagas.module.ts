import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagaListModule } from './vaga-list/vaga-list.module';
import { NovaVagaComponent } from './nova-vaga/nova-vaga.component';


@NgModule({
  imports: [
    CommonModule,
    VagaListModule
    
  ],
  declarations: [NovaVagaComponent, 
    NovaVagaComponent],
  exports: [NovaVagaComponent]

})
export class VagasModule { }
