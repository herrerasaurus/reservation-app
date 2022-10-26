import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/product.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor() { }

  ngOnInit(): void {
    this.products = products;
  }

}
