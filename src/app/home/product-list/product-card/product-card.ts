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

  @Output() delete = new EventEmitter<number>();
  onDelete() {
    this.delete.emit(this.item.id);
  }

  @Output() edit = new EventEmitter<number>();
  onEdit() {
    this.edit.emit(this.item.id);
  }

  @Output() view = new EventEmitter<number>();
  viewDetails() {
    this.view.emit(this.item.id);
  }
}