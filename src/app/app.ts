import { Component, signal,  } from '@angular/core';
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
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('mymarket-clone');

  itemName: string = '';
  itemPrice: number = 0;
  itemDescription: string = '';

  items: Item[] = [
    {
      id: 1,
      title: 'Car',
      sold: false,
      description: 'Red Mercedes CLS',
      price: 10000
    },
    {
      id: 2,
      title: 'Laptop',
      sold: true,
      description: 'White Apple',
      price: 3000
    }
  ];

  addItem(): void{
    const newItem: Item = {
      id: Date.now(),
      title: this.itemName,
      sold: false,
      description: this.itemDescription,
      price: this.itemPrice
    };

    this.items.push(newItem);

    this.itemName = '';
    this.itemDescription = '';
    this.itemPrice = 0;
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}