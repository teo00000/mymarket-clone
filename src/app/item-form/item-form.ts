import { Component, inject } from '@angular/core';
import { Item } from '../shared/models/item.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-itemForm',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css',
})
export class ItemForm implements OnInit {
  private fb = inject(FormBuilder);

  itemForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    price: this.fb.control<number | null>(null, [Validators.required, Validators.min(1)]),
    shortDescription: ['', [Validators.required, Validators.minLength(10)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    image: ['', Validators.required],
  });

  id!: number;

  editingMode!: boolean;

  item?: Item;

  availableImages?: Array<string>;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id') ?? 0);
    this.editingMode = this.id > 0;
    this.availableImages = this.dataService.availableImages;
    if (this.editingMode) {
      this.item = this.dataService.getItemById(this.id);
      if (this.item) {
        this.itemForm.patchValue(this.item);
      }
    }
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;

    if(this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      return;
    }

    if (this.editingMode) {
      if (!this.item) {
        return;
      }

      const updatedItem: Item = {
        ...this.item,
        title: this.itemForm.value.title ?? '',
        price: this.itemForm.value.price ?? 0,
        shortDescription: this.itemForm.value.shortDescription ?? '',
        description: this.itemForm.value.description ?? '',
        image: this.itemForm.value.image ?? '',
      };

      this.dataService.updateItem(updatedItem);
    } else {
      const newItem: Item = {
        id: Date.now(),
        title: this.itemForm.value.title ?? '',
        price: this.itemForm.value.price ?? 0,
        shortDescription: this.itemForm.value.shortDescription ?? '',
        availability: true,
        image: this.itemForm.value.image ?? '',
        description: this.itemForm.value.description ?? '',
      };
      this.dataService.addItem(newItem);
    }

    this.router.navigate(['/']);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  selectImage(image: string) {
    this.itemForm.controls.image.setValue(image);
  }
}
