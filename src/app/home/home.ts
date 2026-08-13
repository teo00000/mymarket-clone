import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DataService } from '../services/data';
import { FormsModule } from '@angular/forms';
import { ProductList } from './product-list/product-list';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ProductList, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private dataService = inject(DataService);
  private router = inject(Router);

  searchTerm = signal('')

  onOpenDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

  addItem() {
    this.router.navigate(['/item-form']);
  }

  onSearch(event: Event): void{
    const value = (event.target as HTMLInputElement).value;

    this.searchTerm.set(value);
  }

  filteredProducts = computed(() => {
    const search = this.searchTerm().trim().toLowerCase();
    const items = this.dataService.items();

    if(!search) {
      return items;
    }

    return items.filter(product => 
      product.title.toLowerCase().includes(search)
    );
  });
}