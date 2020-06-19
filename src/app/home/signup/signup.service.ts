import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "https://localhost:44343"

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
        return this.http.get(API + '/Auth/user-exists/'+ userName)
  }
}
