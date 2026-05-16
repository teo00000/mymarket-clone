import { Component, signal,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

interface Item {
  id: number;
  title: string;
  sold: boolean;
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

  items: Item[] = [
    {
      id: 1,
      title: 'Car',
      sold: false,
    },
    {
      id: 2,
      title: 'Laptop',
      sold: true,
    }
  ];

  addItem(): void{
    const newItem: Item = {
      id: Date.now(),
      title: this.itemName,
      sold: false,
    };

    this.items.push(newItem);

    this.itemName = '';
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}