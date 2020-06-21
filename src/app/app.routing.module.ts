import { CandidatoVagaListComponent } from './candidatos/candidato-vaga-list/candidato-vaga-list.component';
import { NovaVagaComponent } from './vagas/nova-vaga/nova-vaga.component';
import { CandidatoComponent } from './candidatos/candidato/candidato.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { VagaListResolver } from './vagas/vaga-list/vaga-list.resolver';
import { VagaListComponent } from './vagas/vaga-list/vaga-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { EmpresaComponent } from "./empresas/empresa/empresa.component";


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'empregador',
        component: EmpresaComponent
    },
    {
        path: 'candidato',
        component: CandidatoComponent
    },
    {
        path: 'nova-vaga',
        component: NovaVagaComponent
    },
     {
        path: 'candidatos-vaga/:idVaga',
        component: CandidatoVagaListComponent
     },
    {
        path: 'vagas', component: VagaListComponent,
        resolve: {
            vagas: VagaListResolver
        }
    },
    { path: '**', component: NotFoundComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }