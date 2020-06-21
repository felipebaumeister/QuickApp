import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { VagaService } from '../vaga/vaga.service';
import { Vaga } from '../vaga/vaga';

@Injectable({ providedIn: 'root'})
export class VagaListResolver implements Resolve<Observable<Vaga[]>>{

    constructor(private vagaService: VagaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Vaga[]> {
      //  const userName = route.params.userName;
        return this.vagaService.listFromFilter();
    }

}