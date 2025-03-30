import { Injectable, signal } from '@angular/core';
import { Product } from '../../assets/products.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart = signal<Product[]>([]);

  currentSize = '';

  totalPrice: number = 0;
  discount: number = 0;
  shippingFee: number = 0;
  platformFee: number = 20;
  donationAmount: number = 0;
  gross: number = 0;

  addToCart(product: Product) {
    const index = this.cart().indexOf(product);

    if (index !== -1) {
      this.cart()[index].quantity += 1;
      this.totalPrice += this.cart()[index].price;

      this.miscCalculation();

      return;
    }
    
    product.quantity = 1;
    product.size = this.currentSize;
    this.cart.set([...this.cart(), product]);

    this.totalPrice += this.cart()[this.cart().length - 1].price;
    this.miscCalculation();
  }

  removeFromCart(id: number) {
    for (let i = 0; i < this.cart().length; i++) {
      if (this.cart()[i].id === id) {
        this.totalPrice -= this.cart()[i].price;
        this.miscCalculation();
        
        this.cart().splice(i, 1);
      }
    }
  }

  miscCalculation() {
    this.discount = 0.16 * this.totalPrice;
    this.shippingFee = 0.1 * this.totalPrice;
    this.gross = this.totalPrice - this.discount + this.shippingFee + this.platformFee + this.donationAmount;
  }

  handleDonation(amt: number) {
    this.donationAmount = amt;

    this.miscCalculation();
  }

  constructor() { }
}
