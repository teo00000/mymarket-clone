import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductCard } from './product-card/product-card';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() items: Item[] = [];

  @Output() delete = new EventEmitter<number>();
  onDelete(id: number) {
    this.delete.emit(id);
  }

  @Output() edit = new EventEmitter<number>();
  onEdit(id: number) {
    this.edit.emit(id);
  }

  @Output() openDetails = new EventEmitter<number>();
  onClick(id: number) {
    this.openDetails.emit(id);
  }
}
