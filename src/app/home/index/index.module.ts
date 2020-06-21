import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { VagaListModule } from 'src/app/vagas/vaga-list/vaga-list.module';

@NgModule({
  imports: [
    CommonModule,
    VagaListModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
