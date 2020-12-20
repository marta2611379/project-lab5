import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  // @Input() product;
  // @Output() eventProduct = new EventEmitter();
  products;
  prod: IProduct;
  // wineService: any;


  // prod:IProduct={
  //   id:1,
  //   name:"Prod2",
  //   price: 1220,
  //   description:"blablabal"
  // }

  constructor(private dataService: DataService) {
  }


  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.dataService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  localStorage(product) {
    let index = 0;
    if (this.dataService.prodArray == null) {
      this.dataService.countP = 1;
      this.dataService.localStorage(product);
    } else {
      this.dataService.prodArray.forEach((el) => {
        if ((el._id).toString() == product._id) {
          el.count++;
          localStorage.clear();
          localStorage.setItem('products', JSON.stringify( this.dataService.prodArray));
          index--;
        } else {
          index++;
        }
      })
    }
      if (index == this.dataService.prodArray.length) {
        this.dataService.countP = 1;
        this.dataService.localStorage(product);
      }
  };


}
  // this.wineService.orders =
  //   {
  //     id: wine.id,
  //     wines: this.wineService.wineArr
  //   }
  //   localStorage.setItem('order', JSON.stringify( this.wineService.orders));
  // }
  // this.dataService.localStorage(product); 
  // this.dataService.countProdShoper=JSON.parse(localStorage.getItem('products')).length;


  // addProducts() {
  //   this.dataService.addProduct(this.prod).subscribe((data) => {
  //   console.log(data);
  //   });
  //   this.loadProducts()
  // }
  // removeProduct(item) {
  //   console.log('removeProduct:');
  //   console.log(item);
  //   this.dataService.removeProduct(item).subscribe((data) => {
  //     console.log(data);
  //     this.sendEvent();
  //   });
  // }
  // sendEvent() {
  //   this.eventProduct.emit();
  // }

