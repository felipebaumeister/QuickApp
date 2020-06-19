import { RouterModule } from '@angular/router';
import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ConfirmarEmailComponent } from './confirmar-email/confirmar-email.component';
import { CadastroPerfilComponent } from './cadastro-perfil/cadastro-perfil.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
  ],
  declarations: [LoginComponent, SignupComponent, ConfirmarEmailComponent, CadastroPerfilComponent]
})
export class HomeModule { }
