import {Component, OnInit} from '@angular/core';
import {FakeStoreService} from "../../services/fake-store.service";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  loading = false;

  constructor(private fakeStore: FakeStoreService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.fakeStore.getProducts()
      .subscribe(
        data => {
          this.products = data;
          this.loading = false;
        }
      );
  }

}
