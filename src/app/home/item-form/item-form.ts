import { Component } from '@angular/core';
import { Item } from '../../models/item.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css',
})
export class ItemForm {
  editingMode = false;

  formItem: Item = {
    id: Date.now(),
    title: '',
    sold: false,
    description: '',
    price: 0,
  };

  saveItem() {

  }
}
