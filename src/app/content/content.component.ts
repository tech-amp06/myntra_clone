import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from '../all-products/all-products.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router, RouterOutlet } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FiltersService } from '../services/filters.service';
import Products from '../../assets/products.json';

@Component({
  selector: 'app-content',
  imports: [FormsModule, AllProductsComponent, SidebarComponent, RouterOutlet, MatCheckboxModule, MatProgressBarModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent implements OnInit {
  constructor (
    private router: Router
  ) {}

  filters = inject(FiltersService);
  products: any = [];

  brandFilterControl: any = {
    "Roadster": false,
    "DIFFXRXNCE": false,
    "Friskers": false,
    "HERE&NOW": false,
    "CHKOKKO": false,
    "MAST & HARBOUR": false
  }

  handleFilterControl(brand: string) {
    this.brandFilterControl[brand] = !this.brandFilterControl[brand];

    if (this.brandFilterControl[brand]) {
      this.filters.appliedFilters().brand.push(brand);
      console.log(this.brandFilterControl);
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    for (var i = 0; i < Products.length; i++) {
      if (!this.filters.appliedFilters().brand.length && !this.filters.appliedFilters().sex.length) {
        this.products = Products;
      }

      if (
        ((this.filters.appliedFilters().brand.length && this.filters.appliedFilters().brand.includes(Products[i].brand))) 
        && 
        ((this.filters.appliedFilters().brand.length && this.filters.appliedFilters().sex.includes(Products[i].sex)))
      ) {
        this.products.push(Products[i]);
      }

      if (!this.filters.appliedFilters().brand.length && this.filters.appliedFilters().sex.length) {
        if (this.filters.appliedFilters().sex.includes(Products[i].sex)) {
          this.products.push(Products[i]);
          console.log(Products[i]);
        }
      }

      if (this.filters.appliedFilters().brand.length && !this.filters.appliedFilters().sex.length) {
        if (this.filters.appliedFilters().brand.includes(Products[i].brand)) {
          this.products.push(Products[i]);
        }
      }
    }
  
    this.filters.resultData = this.products;
  }
}
