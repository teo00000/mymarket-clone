import { Component, inject } from '@angular/core';
import { Item } from '../models/item.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css',
})
export class ItemForm implements OnInit {
  form = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
  });

  id!: number;

  editingMode!: boolean;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id') ?? 0);
    this.editingMode = this.id > 0;
    if (this.editingMode) {
      const item = this.dataService.getItemById(this.id);
      if (item) {
        this.form.patchValue(item);
      }
    }
  }

  saveItem() {
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.value;

    if (this.editingMode) {
      const item: Item = {
        id: this.id,
        title: formValue.title ?? '',
        price: formValue.price ?? 0,
        description: formValue.description ?? '',
        sold: false,
      };
      this.dataService.updateItem(item);
      this.router.navigate(['/']);
    } else {
      const item: Item = {
        id: Date.now(),
        title: formValue.title ?? '',
        price: formValue.price ?? 0,
        description: formValue.description ?? '',
        sold: false,
      };
      this.dataService.addItem(item);
    }
  }
}
