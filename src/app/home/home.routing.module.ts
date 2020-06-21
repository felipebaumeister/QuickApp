import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from "./home.component";
import { AuthGuard } from "../core/auth/auth.guard";
import { ConfirmarEmailComponent } from './confirmar-email/confirmar-email.component';
import { CadastroPerfilComponent } from './cadastro-perfil/cadastro-perfil.component';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: IndexComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },    
            { path: 'confirmar-email', component: ConfirmarEmailComponent },
            { path: 'cadastro-perfil', component: CadastroPerfilComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }