import { UserNotTekenValidatorService } from './user-not-taken.validator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lawerCaseValidator } from 'src/app/shared/validators/lawer-case.validatros';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userNotTekenValidatorService : UserNotTekenValidatorService){}

  ngOnInit() {

    const fn = this.userNotTekenValidatorService.ckeckUserNameTaken()

    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ],  
      this.userNotTekenValidatorService.ckeckUserNameTaken()],
      userName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
         lawerCaseValidator
      ]],
      fullName: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(14)
      ]]
    })
  }



}
