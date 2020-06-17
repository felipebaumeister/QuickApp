import { VagaComponent } from './vaga.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ VagaComponent ],
  exports: [ VagaComponent]
})
export class VagaModule { }
