import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../services/data';
import { FormsModule } from '@angular/forms';
import { Item } from '../models/item.interface';
import { ProductList } from './product-list/product-list';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ProductList, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private dataService = inject(DataService);
  private router = inject(Router);

  items!: Item[];

  ngOnInit(): void {
    this.items = this.dataService.items();
  }
  deleteItem(id: number): void {
    this.dataService.deleteItem(id);
  }

  editItem(id: number) {
    this.router.navigate(['/item-form', id]);
  }
}
