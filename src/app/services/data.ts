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

  saveItem(formItem: Item, editingMode: boolean) {
    this.itemsSignal.update(currentItems => {
      if (editingMode) {
        return currentItems.map(item => 
          item.id === formItem.id ? { ...formItem } :item
        );
      } else {
        const newItem: Item = {
          ...formItem,
          id: Date.now(),
        };
        return [...currentItems, newItem];
      }
    });
  }

  deleteItem(id: number): void {
    this.itemsSignal.update(items => 
      items.filter(item => item.id !== id)
    );
  }
}