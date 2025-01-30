import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreditCard, Product } from '../../../models/apiModels';
import { BackgroundComponent } from '../../components/molecules/background/background.component';
import { HeaderComponent } from '../../components/molecules/header/header.component';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, BackgroundComponent, HeaderComponent],
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
