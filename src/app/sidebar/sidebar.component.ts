import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FiltersService } from '../services/filters.service';
import { Router } from '@angular/router';
import { indexOf } from 'underscore';

@Component({
  selector: 'app-sidebar',
  imports: [MatCheckboxModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor (
    private router: Router
  ) {}

  filtersService = inject(FiltersService);
  
  @Output() filterPass: any = new EventEmitter();

  brandFilterControl: any = {
    "Roadster": false,
    "DIFFXRXNCE": false,
    "Friskers": false,
    "HERE&NOW": false,
    "CHKOKKO": false,
    "MAST & HARBOUR": false
  }

  sexFilterControl: any = {
    "M": false,
    "F": false,
  }

  filter: any = {
    brand: [],
    sex: []
  }

  handleBrandFilter(brand: string, checked: boolean) {
    this.brandFilterControl[brand] = checked;
    
    if (checked) {
      this.filter.brand.push(brand);
    } else {
      this.filter.brand.splice(this.filter.brand.indexOf(brand), 1);
    }

    this.filterPass.emit(this.filter);
  }

  handleSexFilter(sex: string, checked: boolean) {
    this.sexFilterControl[sex] = checked;
    
    if (checked) {
      this.filter.sex.push(sex);
    } else {
      this.filter.sex.splice(this.filter.sex.indexOf(sex), 1);
    }

    this.filterPass.emit(this.filter);
  }
}
