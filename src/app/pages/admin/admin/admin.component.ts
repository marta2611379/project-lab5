import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  products;
  prod;
  prodName = "";
  prodDesc = "";
  prodPrice = 0;
  addBtnActive = false;
  updateProdItem;
  BtnAddUpdate = false;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.dataService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  addProducts() {
    this.prod = {
      id: 0,
      name: this.prodName,
      description: this.prodDesc,
      price: this.prodPrice
    };
    this.dataService.addProduct(this.prod).subscribe((data) => {
      console.log(data);
      this.loadProducts();
    });
    this.clearInput();
  }

  removeProduct(item) {
    console.log('removeProduct:');
    console.log(item);
    this.dataService.removeProduct(item).subscribe((data) => {
      console.log(data);
      this.loadProducts();
    });
  }

  findProduct(prod) {
    console.log('findProduct:');
    console.log(prod);
    this.dataService.findProduct(prod).subscribe(data => {
      console.log(data);
      this.updateProdItem = prod;
      this.prodName = prod.name;
      this.prodDesc = prod.description;
      this.prodPrice = prod.price;
      this.BtnAddUpdate = !this.BtnAddUpdate;
    });
  }

  updateProduct() {
    console.log('updateProd:');
    this.dataService.updateProduct(
      {
        _id: this.updateProdItem,
        name: this.prodName,
        description: this.prodDesc,
        price: this.prodPrice
      }
    ).subscribe(data => {
      this.updateProdItem = '';
      this.BtnAddUpdate=!this.BtnAddUpdate
      this.clearInput();
      this.loadProducts();
    })

  }

  disableBtnAdd() {
    if (this.prodName.length == 0 ||
      this.prodDesc.length == 0 ||
      this.prodPrice == 0) {
      return false;
    } else { return true; }
  }

  clearInput() {
    this.prodName = "";
    this.prodDesc = "";
    this.prodPrice = 0;
  }

}
