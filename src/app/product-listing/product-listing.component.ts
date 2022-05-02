import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.sass']
})
export class ProductListingComponent implements OnInit {

  @Input()
  product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
