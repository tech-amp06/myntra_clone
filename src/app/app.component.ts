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
  
  cartService = inject(CartService);
  search_val: string = '';

  ngOnInit(): void {
    this.router.navigate(['content']);  
  }

  onCartOpen() {
    this.router.navigate(['cart']);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }

  goToHome() {
    this.router.navigate(['']);
  }

  goToWishlist() {
    this.router.navigate(['wishlist']);
  }
}