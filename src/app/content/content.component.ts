import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from '../all-products/all-products.component';
import { Product } from '../../assets/products.model';
import { RouterOutlet } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import Products from '../../assets/products.json';

@Component({
  selector: 'app-content',
  imports: [FormsModule, AllProductsComponent, RouterOutlet, MatCheckboxModule, MatProgressSpinnerModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {
  products = signal(Products);
}
