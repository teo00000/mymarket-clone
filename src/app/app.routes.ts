import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home'
import { ItemForm } from './item-form/item-form';
import { ProductDetails } from './product-details/product-details';
import { authGuard } from './guards/auth-guard';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'item-form',
    component: ItemForm
  },
  {
    path: 'item-form/:id',
    component: ItemForm,
  },
  {
    path: 'product-details/:id',
    component: ProductDetails
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  }
];
