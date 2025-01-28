import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/apiModels';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  urlApi = 'https://c33a8341-cad3-4522-8dc9-e4bacfc03a52.mock.pstmn.io';

  constructor(private http: HttpClient) {}

  getProduct(token: string) {
    const url = this.urlApi + '/products/accounts';
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    headers = headers.set('Content-type', 'application/json');
    return this.http.get<Product[]>(url, { headers });
  }

  getCreditCard(token: string) {}
}
