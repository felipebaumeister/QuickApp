import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { User } from 'src/app/core/user/user';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user$: Observable<User>;

  loginForm : FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private userService: UserService) {

      this.user$ = userService.getUser();
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
       const userName = this.loginForm.get('userName').value;
       const password = this.loginForm.get('password').value;

       this.authService.authenticate(userName, password)
       .subscribe(data => { 
       
        this.user$.subscribe(user => {
          console.log("user")
          console.log(user)
          if(user && user.statusCadasto && user.statusCadasto === 'completo'){
               if(user.perfilLogado && user.perfilLogado === 'candidato'){
                return this.router.navigate(['','candidato'])
               }else {
                return this.router.navigate(['','empregador'])
               }
          }
          else
          return this.router.navigate(['/home','cadastro-perfil'])
        })
      
        }, 
       err => {

         this.loginForm.reset();
        this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
       })
  }
 
}
