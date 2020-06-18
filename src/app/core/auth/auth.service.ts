import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://localhost:44343';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string){

    return this.http.post(API + '/Auth/entrar', {userName, password}, this.options)
  }

}
