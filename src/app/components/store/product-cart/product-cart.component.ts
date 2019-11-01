import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html'
})
export class ProductCartComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
