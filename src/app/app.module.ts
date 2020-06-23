import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { VagasModule } from './vagas/vagas.module';
import { EmpresasModule } from './empresas/empresas.module';
import { CandidatosModule } from './candidatos/candidatos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ErrorsModule,
    VagasModule,
    CoreModule,
    AppRoutingModule,
    EmpresasModule,
    CandidatosModule,
    VagasModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
