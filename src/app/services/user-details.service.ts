import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {
  isLoggedIn = false;
  userDetails = {};

  constructor() { }
}
