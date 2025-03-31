import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import creds from '../../assets/userDatabase.json';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-login-page',
  imports: [MatButtonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {
  UserDetails = inject(UserDetailsService);
  username: string = '';
  password: string = '';
  validCredentials: boolean = true;

  constructor (
    private router: Router
  ) {}

  catchCredentials(event: any, type: string) {
    (type == 'u') ? ( this.username = event.target.value ) : ( this.password = event.target.value );
  }
  
  authProcedure() {
    for (var i = 0; i < creds.length; i++) {
      if (creds[i].emailAddress == this.username) {
        if (creds[i].details.password == this.password) {
          this.UserDetails.userDetails = creds[i];
          this.UserDetails.isLoggedIn = true;
          this.router.navigate(['content']);
        }
      }
    }
    this.validCredentials = false;
  }
}
