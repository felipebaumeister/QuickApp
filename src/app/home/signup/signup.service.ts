import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "https://localhost:44343"

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
        return this.http.get(API + '/Auth/user-exists/'+ userName)
  }

  signup(newUser: NewUser) {
     console.log(newUser);
     newUser.confirmPassword = newUser.password;
     return this.http.post(API + '/Auth/nova-conta', newUser)
  }
}
