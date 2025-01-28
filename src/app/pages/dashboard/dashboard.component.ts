import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product, CreditCard } from '../../../models/apiModels';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  products: Product[] = [];
  CreditCards: CreditCard[] = [];

  constructor(private productService: ProductsService) {}
  ngOnInit() {
    this.getProducts();
    this.getCreditCards() 
  }

  getProducts() {
    const token = localStorage.getItem('token');
    this.productService.getProduct(token!).subscribe((products) => {
      this.products = products;
      console.log('products :>> ', this.products);
    });
  }
  getCreditCards() {
    const token = localStorage.getItem('token');
    this.productService.getCreditCard(token!).subscribe((cards) => {
      this.CreditCards = cards;
      console.log('this.CreditCards ', this.CreditCards);
    });
  }
}
