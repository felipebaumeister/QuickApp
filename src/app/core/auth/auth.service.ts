import { UserService } from './../user/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

const API = 'https://localhost:44343';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private userService: UserService) { }

  authenticate(userName: string, password: string){

    return this.http.post(API + '/Auth/entrar', {userName, password}, { observe: 'response'})
    .pipe(tap(res => {
      const authToken = res.headers.get('x-access-token');
      const token = res.body['token'];
      console.log(`User ${userName} authenticated with token ${authToken}`)
      console.log(`User ${userName} authenticated with token ${token}`)
      this.userService.setToken(token);
    }))
  }

}
