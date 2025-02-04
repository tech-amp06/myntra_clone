import { Component, inject } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { AllProductsComponent } from '../all-products/all-products.component';

@Component({
  selector: 'app-wishlist',
  imports: [AllProductsComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  itemCount: number = 0;
  wishlistService = inject(WishlistService);
}
