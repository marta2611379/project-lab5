import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

 products;

 constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadProducts();
    // this.AddProducts();
  }

  loadProducts() {
    this.dataService.getProducts().subscribe((data) => {
       this.products = data;
       console.log(this.products);
    });
  }
}
