import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ContentComponent } from './content/content.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'login-page',
    component: LoginPageComponent
  }
];
