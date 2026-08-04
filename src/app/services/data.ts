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
      availability: false,
      shortDescription: 'Red Mercedes CLS',
      price: 10000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 2,
      title: 'Laptop',
      availability: true,
      shortDescription: 'White Apple',
      price: 3000,
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
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
