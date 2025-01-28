import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../../models/apiModels';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  products: Product[] = [];
  constructor(private productService: ProductsService) {}
  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    const token = localStorage.getItem('token');
    this.productService.getProduct(token!).subscribe((products) => {
      this.products = products;
      console.log('products :>> ', this.products);
    })

  }
}
