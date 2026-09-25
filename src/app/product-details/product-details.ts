import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { Router } from '@angular/router';
import { ConfirmationModal } from '../shared/components/confirmation-modal/confirmation-modal';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink, ConfirmationModal],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private dataservice = inject(DataService);
  private router = inject(Router);

  showDeleteModal = false;

  product = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.dataservice.getItemById(id);
  });

  openDeleteModal() {
    this.showDeleteModal = true;
  }

  deleteProduct() {
    const product = this.product();

    if (!product) return;

    this.dataservice.deleteItem(product.id);

    this.closeModal();

    this.router.navigate(['/']);
  }

  closeModal() {
    this.showDeleteModal = false;
  }
}
