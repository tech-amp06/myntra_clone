import { Injectable, signal } from '@angular/core';
import { Product } from '../../assets/products.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist = signal<Product[]>([]);

  addToWishlist(product: Product) {
    this.wishlist.set([...this.wishlist(), product]);
  }

  constructor() { }
}
