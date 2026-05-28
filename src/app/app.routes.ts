import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home'

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
  }
];
