import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-all-products',
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {
  product: any = {};
  @Input() item: number = 0;
  filters = inject(FiltersService)

  ngOnInit(): void {
    this.product = this.filters.resultData[this.item];
  }

  constructor (
    private router: Router
  ) {}

  redirectToProduct() {
    this.router.navigate(['/product'], { queryParams : { id : this.filters.resultData[this.item].id } });
  }
}
