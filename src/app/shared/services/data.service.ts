import { Injectable, signal } from '@angular/core';
import { Item } from '../models/item.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private itemsSignal = signal<Item[]>([
    {
      id: 1,
      title: 'MacBook Air M4',
      availability: true,
      shortDescription: 'Lightweight laptop with Apple M4 chip.',
      price: 1299,
      description:
        'The MacBook Air M4 delivers excellent performance, all-day battery life, and a stunning Liquid Retina display. Perfect for students, developers, and professionals looking for a portable yet powerful laptop.',
    },
    {
      id: 2,
      title: 'iPhone 16 Pro',
      availability: true,
      shortDescription: 'Apple flagship smartphone with advanced cameras.',
      price: 1099,
      description:
        'The iPhone 16 Pro features a powerful processor, professional-grade camera system, vibrant OLED display, and premium titanium design. Built for photography, gaming, and everyday productivity.',
    },
    {
      id: 3,
      title: 'Samsung Galaxy S25',
      availability: false,
      shortDescription: 'Premium Android smartphone.',
      price: 999,
      description:
        'The Galaxy S25 combines a bright AMOLED display, fast performance, and versatile camera setup. A great choice for Android enthusiasts seeking a flagship experience.',
    },
    {
      id: 4,
      title: 'Sony WH-1000XM6',
      availability: true,
      shortDescription: 'Wireless noise-cancelling headphones.',
      price: 449,
      description:
        'Enjoy industry-leading active noise cancellation, exceptional sound quality, and up to 30 hours of battery life. Ideal for travel, work, and immersive music listening.',
    },
    {
      id: 5,
      title: 'iPad Air',
      availability: true,
      shortDescription: 'Versatile tablet for work and creativity.',
      price: 699,
      description:
        'The iPad Air offers a responsive display, Apple Pencil support, and excellent performance for note-taking, digital art, streaming, and multitasking.',
    },
    {
      id: 6,
      title: 'Dell XPS 15',
      availability: false,
      shortDescription: 'High-performance Windows laptop.',
      price: 1899,
      description:
        'The Dell XPS 15 features a premium aluminum chassis, Intel Core processor, vibrant display, and dedicated graphics, making it perfect for software development and content creation.',
    },
    {
      id: 7,
      title: 'Logitech MX Master 3S',
      availability: true,
      shortDescription: 'Ergonomic wireless productivity mouse.',
      price: 99,
      description:
        'Designed for professionals, the MX Master 3S offers precise tracking, customizable buttons, and silent clicks for a comfortable and efficient workflow.',
    },
    {
      id: 8,
      title: 'LG UltraWide Monitor',
      availability: true,
      shortDescription: '34-inch ultrawide QHD display.',
      price: 549,
      description:
        'Increase productivity with a spacious ultrawide screen, vibrant colors, and USB-C connectivity. Excellent for programming, design, and multitasking.',
    },
  ]);

  public items = this.itemsSignal.asReadonly();

  deleteItem(id: number): void {
    this.itemsSignal.update((items) => items.filter((item) => item.id !== id));
  }

  getItemById(id: number) {
    return this.items().find((item) => item.id === id);
  }

  updateItem(updatedItem: Item) {
    this.itemsSignal.update((items) =>
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item)),
    );
  }

  addItem(item: Item) {
    this.itemsSignal.update((items) => [...items, item]);
  }
}
