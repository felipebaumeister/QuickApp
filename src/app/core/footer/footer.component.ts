import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  user$ : Observable<User>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }

}
