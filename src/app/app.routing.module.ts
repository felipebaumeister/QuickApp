
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { VagaListResolver } from './vagas/vaga-list/vaga-list.resolver';
import { VagaListComponent } from './vagas/vaga-list/vaga-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';


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