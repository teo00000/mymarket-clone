import { Component, inject } from '@angular/core';
import { DataService } from '../services/data';
import { FormsModule } from '@angular/forms';
import { Item } from '../models/item.interface';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ProductList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  private dataService = inject(DataService);
  editingMode = false;

  formItem: Item = {
    id: Date.now(),
    title: '',
    sold: false,
    description: '',
    price: 0,
  };

  items = this.dataService.items;

  editItem(id: number): void {
    const foundItem = this.items().find((i) => i.id === id);
    if (foundItem) {
      this.formItem = { ...foundItem };
      this.editingMode = true;
    }
  }

  saveItem() {
    this.dataService.saveItem(this.formItem, this.editingMode);
    this.resetForm();
  }

  deleteItem(id: number): void {
    this.dataService.deleteItem(id);
  }

  resetForm(): void {
    this.formItem = {
      id: 0,
      title: '',
      sold: false,
      description: '',
      price: 0,
    };
    this.editingMode = false;
  }
}
