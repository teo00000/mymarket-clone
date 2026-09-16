import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductCard } from './product-card/product-card';
import { Item } from '../../shared/models/item.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  // Used in template to display products
  @Input() items: Item[] = [];

  @Output() openDetails = new EventEmitter<number>();
  onClick(id: number) {
    this.openDetails.emit(id);
  }
}
