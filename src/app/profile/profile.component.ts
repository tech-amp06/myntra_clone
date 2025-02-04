import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userAddress: string = '416, Jewel Crown, Uppal, Hyderabad - 89';
  userContact: string = '9014714939';
  nameOfUser: string = 'Harshith';
  userEmailId: string = 'pamruth09@gmail.com';
}
