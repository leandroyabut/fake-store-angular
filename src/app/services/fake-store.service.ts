import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.api}/products/categories`);
  }

  getProducts(sort: string = "asc"): Observable<Product[]> {
    const params = new HttpParams().set("sort", sort);
    return this.httpClient.get<Product[]>(`${environment.api}/products`, { params });
  }

  getProductsInCategory(category: string, sort: string = "asc"): Observable<Product[]> {
    const params = new HttpParams().set("sort", sort);
    return this.httpClient.get<Product[]>(`${environment.api}/products/category/${category}`, { params });
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.api}/products/${id}`);
  }
}
