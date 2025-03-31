import { Component, inject, OnInit, Renderer2, signal } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import data from '../../assets/products.json';
import { DecimalPipe } from '@angular/common';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { Product } from '../../assets/products.model';
import { ImagePopupComponent } from '../image-popup/image-popup.component';

@Component({
  selector: 'app-product',
  imports: [RouterModule, DecimalPipe, ImagePopupComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent implements OnInit {
  cartService = inject(CartService);
  wishlistService = inject(WishlistService);
  
  id: number | null = null;
  products: any[] = [];
  product: any = {};

  isInCart = 'ADD TO BAG';
  isWishlisted = 'WISHLIST';
  sizeSelected = '';
  prevElement: any;

  styles = {
    fontWeight: 100,
    color: 'white',
    fontSize: '15px',
  };

  element = document.getElementsByClassName('size-button');

  popup = signal(false);
  imageIndex: number = -1;
  
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params) => {
        this.id = params['id'];
      }
    )
    this.products = data;

    for (let i of this.products) {
      if (i.id == this.id) {
        this.product = i;
      }
    }
  }

  handleCartFunction(product: Product) {
    if (this.isInCart === 'ADD TO BAG') {
      if (this.sizeSelected === '') {
        this.styles = {...this.styles, color: 'rgb(255, 85, 113)'};
      } else {
        this.styles = {...this.styles, color: 'white'};
        this.product.size = this.sizeSelected;
        this.cartService.addToCart(product);
        this.isInCart = 'GO TO BAG ➡';
      }
    } else {
      this.router.navigate(['/cart']);
    }
  }

  handleWishlistFunction(product: Product) {
    if (this.isWishlisted === 'WISHLIST') {
      this.isWishlisted = 'WISHLISTED';

      this.wishlistService.addToWishlist(product);
    }
  }

  handleSizeSelection(id: string, size: string) {
    if (this.sizeSelected) {
      this.renderer.setStyle(this.prevElement, 'border-color', 'grey');
      this.renderer.setStyle(this.prevElement, 'color', 'black');
    }

    this.sizeSelected = size;
    const element = document.getElementById(id);

    this.renderer.setStyle(element, 'border-color', 'rgb(255, 85, 113)');
    this.renderer.setStyle(element, 'color', 'rgb(255, 85, 113)');

    this.prevElement = element;
  }

  showPopup(n: number) {
    this.popup.set(true);
    this.imageIndex = n;
  }

  closePopup() {
    this.popup.set(false);
    this.imageIndex = -1;
  }
}
