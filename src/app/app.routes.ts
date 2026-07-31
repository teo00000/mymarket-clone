import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home'
import { ItemForm } from './item-form/item-form';
import { ProductDetails } from './product-details/product-details';

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
    component: ItemForm
  },
  {
    path: 'product-details',
    component: ProductDetails
  }
];
