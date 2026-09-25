import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';
import { Item } from '../../../shared/models/item.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  item = input.required<Item>();

  view = output<number>();

  viewDetails() {
    this.view.emit(this.item().id);
  }
}
