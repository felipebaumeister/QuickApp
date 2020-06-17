import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasComponent } from './vagas/vagas.component';
import { VagaModule } from '../vaga/vaga.module';
import { VagaListComponent } from './vaga-list.component';

@NgModule({
  imports: [
    CommonModule,
    VagaModule
  ],
  declarations: [VagasComponent, VagaListComponent]
})
export class VagaListModule { }
