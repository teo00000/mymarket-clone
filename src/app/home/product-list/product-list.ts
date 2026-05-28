import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductCard } from './product-card/product-card';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() items: Item[] = [];

  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();
}
