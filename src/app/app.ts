import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

interface Item {
  id: number;
  title: string;
  sold: boolean;
  description: string;
  price: number;
}

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [FormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mymarket-clone');

  editingMode = false;

  formItem: Item = {
    id: Date.now(),
    title: '',
    sold: false,
    description: '',
    price: 0,
  };
  items: Item[] = [
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
  ];

  editItem(id: number): void {
    const foundItem = this.items.find((i) => i.id === id);
    if (foundItem) {
      this.formItem = { ...foundItem };
      this.editingMode = true;
    }
  }

  saveItem() {
    if (this.editingMode) {
      const index = this.items.findIndex((i) => i.id === this.formItem.id);
      if (index !== -1) {
        this.items[index] = { ...this.formItem };
      }
    } else {
      this.items.push({
        ...this.formItem,
        id: Date.now(),
      });
    }
    this.resetForm();
  }

  deleteItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  resetForm(): void {
    this.formItem = {
      id: 0,
      title: '',
      sold: false,
      description: '',
      price: 0
    };
    this.editingMode = false;
  }
}
