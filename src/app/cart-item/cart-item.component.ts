import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../services/user-details.service';
import { Product } from '../../assets/products.model';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart-item',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  constructor (
    private router : Router
  ) {}

  userService = inject(UserDetailsService)
  
  @Input() item: number = 0;
  inCart: Product[] = this.userService.cart();

  itemQuantity = 1;

  redirectToProduct() {
    this.router.navigate(['/product'], { queryParams : { id : this.inCart[this.item].id } });
  }
}