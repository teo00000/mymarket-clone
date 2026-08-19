import { Component, inject } from '@angular/core';
import { DataService } from '../services/data';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private dataService = inject(DataService);

  public productsCount = this.dataService.items().length;
}
