import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { Router, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';
import { MatBadgeModule } from '@angular/material/badge';
import { FiltersService } from './services/filters.service';
import { UserDetailsService } from './services/user-details.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, MatCheckboxModule, MatSliderModule, MatBadgeModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  constructor (
    private router : Router
  ) {}

  userDetails = inject(UserDetailsService);
  filters = inject(FiltersService);
  cartService = inject(CartService);

  sexFilter: string = '';
  toBeRedirected = 1;
  search_val: string = '';

  ngOnInit(): void {
    this.router.navigate(['content']);  
    this.toBeRedirected = 0;
  }

  onCartOpen() {
    this.router.navigate(['cart']);
    this.toBeRedirected = 0;
  }

  goToProfile() {
    if (this.userDetails.isLoggedIn) {
      this.router.navigate(['profile']);
    } else {
      this.router.navigate(['login-page']);
    }
    this.toBeRedirected = 0;
  }

  goToHome() {
    this.toBeRedirected = 0;
    this.filters.appliedFilters().sex = [];
    this.filters.appliedFilters().brand = [];
    this.router.navigate(['']);
  }

  goToWishlist() {
    this.router.navigate(['wishlist']);
    this.toBeRedirected = 0;
  }

  toFilter(filter: string) {
    this.filters.appliedFilters().sex = [filter];
    this.router.navigate(['']);
  }
}