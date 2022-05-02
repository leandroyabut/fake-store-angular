import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.api}/products`);
  }

  getProductsInCategory(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.api}/products/category/${category}`);
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.api}/products/${id}`);
  }
}
