import {Component, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {ActivatedRoute, Router} from "@angular/router";
import {FakeStoreService} from "../../services/fake-store.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  product?: Product;
  catProducts?: Product[];
  loadingProduct = false;
  loadingCategory = false;

  constructor(private route: ActivatedRoute, private fakeStore: FakeStoreService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const productId = params['id'];

        this.loadingProduct = true;

        this.fakeStore.getProduct(productId).subscribe(
          data => {
            this.product = data;
            this.loadingProduct = false;
            this.loadingCategory = true;

            this.fakeStore.getProductsInCategory(data.category).subscribe(
              data => {
                this.loadingCategory = false;
                this.catProducts = data.filter(product => product.id != productId);
              }
            );
          }
        );
      }
    );
  }

}
