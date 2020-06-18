import { VagaListResolver } from './vagas/vaga-list/vaga-list.resolver';
import { VagaListComponent } from './vagas/vaga-list/vaga-list.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AppBuildingComponent } from "./errors/app-building/app-building.component";
import { LoginComponent } from './home/login/login.component';


const routes : Routes = [
    { path: '', component : LoginComponent},
    { path: 'vagas/:IdVaga', component: VagaListComponent, 
    resolve : {
        vagas: VagaListResolver
    }},
    { path: '**', component : NotFoundComponent},
   
];

@NgModule({
   imports:  [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule {}