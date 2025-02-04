import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../assets/products.json';

@Component({
  selector: 'app-all-products',
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {
  product: any = {};
  @Input() item: number = 0;

  ngOnInit(): void {
    this.product = data[this.item];
  }

  constructor (
    private router: Router
  ) {}

  redirectToProduct() {
    this.router.navigate(['/product'], { queryParams : { id : data[this.item].id } });
  }
}
