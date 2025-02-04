import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../../assets/products.model';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartItems } from '../../assets/cartItems.model';

@Component({
  selector: 'app-cart-item',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  constructor (
    private router : Router
  ) {}

  cartService = inject(CartService);
  
  @Input() item: number = 0;
  inCart: Product[] = this.cartService.cart();

  itemQuantity = 1;

  redirectToProduct() {
    this.router.navigate(['/product'], { queryParams : { id : this.inCart[this.item].id } });
  }
}