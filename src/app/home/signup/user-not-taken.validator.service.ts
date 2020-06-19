import { Injectable } from "@angular/core";
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { SignupService } from './signup.service';

@Injectable({ providedIn: 'root' })
export class UserNotTekenValidatorService {

    constructor(private SignupService: SignupService) {

    }

    ckeckUserNameTaken() {
        return (control: AbstractControl) => {
            return control.valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName => this.SignupService.checkUserNameTaken(userName)))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                .pipe(first());
        }
    }
}