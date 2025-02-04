import { Component, inject } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { PriceDetailsComponent } from '../price-details/price-details.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, PriceDetailsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent {
  userAddress = '#416, Gayathri Residency, Shirdi Sai Nagar, Chaitanya Enclave, Manikonda, Hyderabad - 500089';

  cartService = inject(CartService);
  inCart = this.cartService.cart();

  constructor (
    private router: Router
  ) {}

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
