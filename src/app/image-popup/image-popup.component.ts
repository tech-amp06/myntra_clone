import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-popup',
  imports: [],
  templateUrl: './image-popup.component.html',
  styleUrl: './image-popup.component.scss'
})
export class ImagePopupComponent {
  @Input() product: any;
  index: number = 0;
}
