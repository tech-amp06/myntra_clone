import { Component, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FiltersService } from '../services/filters.service';
import { Router } from '@angular/router';

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

  filters = inject(FiltersService);
  
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

  handleBrandFilter(brand: string, checked: boolean) {
    this.brandFilterControl[brand] = checked;

    if (this.brandFilterControl[brand]) {
      this.filters.appliedFilters().brand.push(brand);
      this.router.navigate(['']);
    }

    else {
      this.filters.appliedFilters().brand.splice(this.filters.appliedFilters().brand.indexOf(brand), 1);
      this.router.navigate(['']);
    }
  }

  handleSexFilter(sex: string) {
    this.sexFilterControl[sex] = !this.sexFilterControl[sex];

    if (this.sexFilterControl[sex]) {
      this.filters.appliedFilters().sex.push(sex);
      this.router.navigate(['']);
    }
    else {
      // this.filters.appliedFilters().sex.splice()
    }
  }

  goToLoginPage() {
    this.router.navigate(['login-page']);
  }
}
