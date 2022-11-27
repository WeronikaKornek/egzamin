import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductListModel } from '../models/product-list.model';

@Injectable()
export class ProductListService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductListModel[]> {
    return this._httpClient.get<ProductListModel[]>('https://fakestoreapi.com/products');
  }
}
