import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductListModel } from '../models/product-list.model';

@Injectable()
export class SingleproductService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id:string): Observable<ProductListModel> {
    return this._httpClient.get<ProductListModel>('https://fakestoreapi.com/products/'+id);
  }
}
