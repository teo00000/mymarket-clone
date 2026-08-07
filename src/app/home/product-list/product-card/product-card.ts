import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../models/item.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() item!: Item;

  @Output() view = new EventEmitter<number>();
  viewDetails() {
    this.view.emit(this.item.id);
  }
}