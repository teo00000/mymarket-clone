import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../models/item.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() item!: Item;

  @Output() delete = new EventEmitter<number>();
  onDelete(id: number) {
    this.delete.emit(id);
  }

  @Output() edit = new EventEmitter<number>();
  onEdit(id: number) {
    this.edit.emit(id);
    console.log(id);
  }
}