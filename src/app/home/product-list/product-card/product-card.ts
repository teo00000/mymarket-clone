import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../models/item.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() item!: Item;

  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();
}