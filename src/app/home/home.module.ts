import { VagaListModule } from './../vagas/vaga-list/vaga-list.module';
import { IndexComponent } from './index/index.component';
import { CandidatosModule } from './../candidatos/candidatos.module';

import { SignupService } from './signup/signup.service';
import { RouterModule } from '@angular/router';
import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ConfirmarEmailComponent } from './confirmar-email/confirmar-email.component';
import { CadastroPerfilComponent } from './cadastro-perfil/cadastro-perfil.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { EmpresasModule } from '../empresas/empresas.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    HomeRoutingModule,
    EmpresasModule,
    CandidatosModule,
    VagaListModule
  ],
  declarations: [
    LoginComponent,
     SignupComponent,
      ConfirmarEmailComponent, 
      CadastroPerfilComponent,
      HomeComponent,
      IndexComponent
    ],
    providers : [
      SignupService
    ]
})
export class HomeModule { }
