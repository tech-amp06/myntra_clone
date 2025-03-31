import { Component, inject } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-profile',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor (
    private router: Router
  ) {}

  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  User = inject(UserDetailsService);
  userDetails: any = this.User.userDetails;

  logout() {
    this.User.isLoggedIn = false;
    this.User.userDetails = {};
    this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
    this.router.navigate(['login-page']);
  }
}

@Component({
  selector: 'snack-bar-annotated-component-example-snack',
  templateUrl: 'snack-bar-annotated-component-example-snack.html',
  styles: `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}