import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from './product.service';
import type { Product } from './product.interface';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly productService = inject(ProductService);

  readonly products = this.productService.products;

  ngOnInit(): void {
    this.productService.loadProducts();
  }

  trackById(_index: number, product: Product): number {
    return product.id;
  }
}
