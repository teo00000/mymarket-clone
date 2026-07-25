import { Injectable, signal } from '@angular/core';
import { Item } from '../models/item.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private itemsSignal = signal<Item[]>([
    {
      id: 1,
      title: 'Car',
      sold: false,
      description: 'Red Mercedes CLS',
      price: 10000,
    },
    {
      id: 2,
      title: 'Laptop',
      sold: true,
      description: 'White Apple',
      price: 3000,
    },
  ]);

  public items = this.itemsSignal.asReadonly();

  deleteItem(id: number): void {
    this.itemsSignal.update((items) => items.filter((item) => item.id !== id));
  }

  getItemById(id: number) {
    return this.items().find((item) => item.id === id);
  }

  updateItem(updatedItem: Item) {
    this.itemsSignal.update((items) =>
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item)),
    );
  }

  addItem(item: Item) {
    this.itemsSignal.update((items) => [...items, item]);
  }
}
