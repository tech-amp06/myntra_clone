import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { Router, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';
import { MatBadgeModule } from '@angular/material/badge';

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

  sexFilter: string = '';
  toBeRedirected = 1;
  
  cartService = inject(CartService);
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
    this.router.navigate(['profile']);
    this.toBeRedirected = 0;
  }

  goToHome() {
    this.toBeRedirected = 0;
    this.router.navigate(['']);
  }

  goToWishlist() {
    this.router.navigate(['wishlist']);
    this.toBeRedirected = 0;
  }

  toFilter(filter: string) {
    this.sexFilter = filter;
  }
}