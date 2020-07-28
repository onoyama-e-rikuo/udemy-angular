import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/shared/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const productsObservable = this.productService.getProducts();
    productsObservable.subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log("エラーが発生しました");
      },
    )
  }
}
