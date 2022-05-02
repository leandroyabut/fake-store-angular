import {Component, OnInit} from '@angular/core';
import {FakeStoreService} from "../../services/fake-store.service";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  categories: string[] = [];
  category: string = "all";
  products: Product[] = [];
  loadingCat = false;
  loading = false;
  desc = false;

  constructor(private fakeStore: FakeStoreService) {
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProductsInCategory(this.category);
  }

  loadCategories() {
    this.loadingCat = true;
    this.fakeStore.getCategories()
      .subscribe(
        categories => {
          this.categories = categories;
          this.loadingCat = false;
        }
      );
  }

  loadProducts() {
    this.loading = true;
    this.fakeStore.getProducts(this.desc ? "desc" : "asc")
      .subscribe(
        data => {
          this.products = data;
          this.loading = false;
        }
      );
  }

  loadProductsInCategory(category: string) {
    if (category === 'all') {
      this.loadProducts();
      return;
    }
    this.loading = true;
    this.fakeStore.getProductsInCategory(category, this.desc ? "desc" : "asc")
      .subscribe(
        products => {
          this.products = products;
          this.loading = false;
        }
      );
  }

}
