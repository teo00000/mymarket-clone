import { Component, computed, EventEmitter, inject, Input, Output } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../services/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private dataservice = inject(DataService);
  private router = inject(Router);

  product = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.dataservice.getItemById(id);
  });

  onDelete() {
    const product = this.product();

    if (!product) return;

    this.dataservice.deleteItem(product.id);

    this.router.navigate(['/']);
  }

  @Output() edit = new EventEmitter<number>();
  onEdit() {
    const product = this.product();

    if (product) {
      this.edit.emit(product.id);
    }
  }
}
