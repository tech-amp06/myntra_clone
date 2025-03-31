import { Component, inject } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { PriceDetailsComponent } from '../price-details/price-details.component';
import { UserDetailsService } from '../services/user-details.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, PriceDetailsComponent, MatProgressBarModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent {
  User = inject(UserDetailsService);
  userDetails: any = this.User.userDetails;

  cartService = inject(CartService);
  inCart = this.cartService.cart();

  constructor (
    private router: Router
  ) {}

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
