import { EmpresaService } from './../../empresas/empresa/empresa.service';
import { CandidatoService } from './../../candidatos/candidato/candidato.service';
import { User } from './user';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName: string;

  private userSubject = new BehaviorSubject<User>(null);
  constructor(private tokenService: TokenService,
    private candidatoService: CandidatoService,
    private empresaService: EmpresaService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
   }

  setToken(token: string){
     this.tokenService.setToken(token);
     this.decodeAndNotify();
  }

  getUser() {
     return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.empresaService.removeData();
    this.candidatoService.removeData();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

   getUserName(){
     return this.userName;
   }
}
