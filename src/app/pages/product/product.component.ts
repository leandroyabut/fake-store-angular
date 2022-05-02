import { Component, OnInit } from '@angular/core';
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
  loading = false;

  constructor(private route: ActivatedRoute, private fakeStore: FakeStoreService) {
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];

    this.loading = true;

    this.fakeStore.getProduct(productId).subscribe(
      data => {
        this.product = data;
        this.loading = false;
      }
    );

  }

}
