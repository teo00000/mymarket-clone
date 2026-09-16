import { Component, inject } from '@angular/core';
import { DataService } from '../shared/services/data.service';

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
