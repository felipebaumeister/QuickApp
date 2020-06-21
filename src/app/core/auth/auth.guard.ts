import { CandidatoService } from './../../candidatos/candidato/candidato.service';
import { EmpresaService } from './../../empresas/empresa/empresa.service';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


    constructor(private userService: UserService,
        private router: Router,
        private empresaService: EmpresaService,
        private candidatoService: CandidatoService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {


        if (this.userService.isLogged()) {
            if (this.empresaService.exists()) {
                this.router.navigate(['', 'empregador']);
                return false;
            } else if (this.candidatoService.exists()) {
                this.router.navigate(['', 'candidato']);
                return false;
            }

        } else {
            return true;
        }

    }
}