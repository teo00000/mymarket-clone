import { Injectable, signal } from '@angular/core';
import { Item } from '../models/item.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private itemsSignal = signal<Item[]>([]);

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
}