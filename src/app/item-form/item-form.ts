import { Component, inject } from '@angular/core';
import { Item } from '../shared/models/item.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css',
})
export class ItemForm implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    shortDescription: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  id!: number;

  editingMode!: boolean;

  item?: Item;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id') ?? 0);
    this.editingMode = this.id > 0;
    if (this.editingMode) {
      this.item = this.dataService.getItemById(this.id);
      if (this.item) {
        this.form.patchValue(this.item);
      }
    }
  }

  onSubmit() {
    if (this.editingMode) {
      if (!this.item) {
        return;
      }

      const updatedItem: Item = {
        ...this.item,
        title: this.form.value.title ?? '',
        price: this.form.value.price ?? 0,
        shortDescription: this.form.value.shortDescription ?? '',
      };

      this.dataService.updateItem(updatedItem);
    } else {
      const newItem: Item = {
        id: Date.now(),
        title: this.form.value.title ?? '',
        price: this.form.value.price ?? 0,
        shortDescription: this.form.value.shortDescription ?? '',
        availability: true,
        description: '',
      };
      this.dataService.addItem(newItem);
    }

    this.router.navigate(['/']);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
