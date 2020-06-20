import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { UserNotTekenValidatorService } from './user-not-taken.validator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lawerCaseValidator } from 'src/app/shared/validators/lawer-case.validatros';
import { NewUser } from './new-user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserNotTekenValidatorService]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userNotTekenValidatorService: UserNotTekenValidatorService,
    private signupService: SignupService,
    private router: Router) { }

  ngOnInit() {

    const fn = this.userNotTekenValidatorService.ckeckUserNameTaken()

    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ],
        this.userNotTekenValidatorService.ckeckUserNameTaken()],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(14)
      ]]
    })
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;

    this.signupService
      .signup(newUser).subscribe(() =>
        this.router.navigate(['home', 'confirmar-email']),
        err => console.log(err))
  }

}
