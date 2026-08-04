import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data';
import { Item } from '../models/item.interface';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails{
  private route = inject(ActivatedRoute);
  private dataservice = inject(DataService);

  product = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.dataservice.getItemById(id);
  });
}
