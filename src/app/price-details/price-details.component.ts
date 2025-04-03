import { Component, inject, Renderer2 } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-price-details',
  imports: [DecimalPipe],
  templateUrl: './price-details.component.html',
  styleUrl: './price-details.component.scss'
})
export class PriceDetailsComponent {
  userService = inject(UserDetailsService);
  inCart = this.userService.cart();
  donated = 0;

  constructor (
    private renderer: Renderer2
  ) {}

  styles = {
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'rgb(203, 203, 203)',
      borderRadius: '15px',
      width: '50px',
      height: '30px',
      marginRight: '10px',
      marginBottom: '15px',
      fontWeight: 'bold',
      color: 'black',
      cursor: 'pointer'
  }

  handleDonation(amt: number, id: string) {
    if (this.donated) {
      const temp = document.getElementsByClassName('donate-button');
      this.renderer.setStyle(temp, 'border-color', 'rgb(203, 203, 203)');
      this.renderer.setStyle(temp, 'color', 'rgb(203, 203, 203)');
    }

    this.userService.handleDonation(amt);
    const element = document.getElementById(id);

    this.renderer.setStyle(element, 'border-color', 'rgb(255, 85, 113)');
    this.renderer.setStyle(element, 'color', 'rgb(255, 85, 113)');

    this.donated = 1;
  }
}