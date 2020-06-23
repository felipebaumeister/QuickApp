import { JsonToBrDate } from './../../shared/pipes/json-to-br-date.pipe';
import { VagaComponent } from './vaga.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ VagaComponent, JsonToBrDate ],
  exports: [ VagaComponent]
})
export class VagaModule { }
