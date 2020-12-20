import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-shoper',
  templateUrl: './shoper.component.html',
  styleUrls: ['./shoper.component.scss']
})
export class ShoperComponent implements OnInit {
  products = [];
  productsLocal = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProdFromStorage();
  }

  getProdFromStorage() {
    this.productsLocal = JSON.parse(localStorage.getItem('products'));
    this.productsLocal.forEach(el => {
      this.dataService.findProduct(el).subscribe(data => {
        this.products.push({
          product: JSON.parse(data)[0],
          count: el.count
        });
      })
    })
    this.products = [];
  }

  deleteFromShoper(id) {
    this.dataService.prodArray.forEach((el, i) => {
      if (el._id == id) {
        this.dataService.prodArray.splice(i, 1);
        localStorage.clear();
        localStorage.setItem('products', JSON.stringify(this.dataService.prodArray));
        this.getProdFromStorage();
      }
      // this.getProdFromStorage();
    })
    // this.getProdFromStorage();
  }





}


// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));
// console.log(data);;


