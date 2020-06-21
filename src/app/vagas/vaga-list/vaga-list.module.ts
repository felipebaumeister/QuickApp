import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasComponent } from './vagas/vagas.component';
import { VagaModule } from '../vaga/vaga.module';
import { VagaListComponent } from './vaga-list.component';
import { SearchComponent } from './search/componentss/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    VagaModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
  ],
  declarations: [VagasComponent, VagaListComponent, SearchComponent],
  exports: [VagaListComponent]
})
export class VagaListModule { }
