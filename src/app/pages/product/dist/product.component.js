"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var core_1 = require("@angular/core");
var ProductComponent = /** @class */ (function () {
    // wineService: any;
    // prod:IProduct={
    //   id:1,
    //   name:"Prod2",
    //   price: 1220,
    //   description:"blablabal"
    // }
    function ProductComponent(dataService) {
        this.dataService = dataService;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    ProductComponent.prototype.loadProducts = function () {
        var _this = this;
        this.dataService.getProducts().subscribe(function (data) {
            _this.products = data;
            console.log(_this.products);
        });
    };
    ProductComponent.prototype.localStorage = function (product) {
        var _this = this;
        var index = 0;
        if (this.dataService.prodArray == null) {
            this.dataService.countP = 1;
            this.dataService.localStorage(product);
        }
        else {
            this.dataService.prodArray.forEach(function (el) {
                if ((el._id).toString() == product._id) {
                    el.count++;
                    localStorage.clear();
                    localStorage.setItem('products', JSON.stringify(_this.dataService.prodArray));
                    index--;
                }
                else {
                    index++;
                }
            });
        }
        if (index == this.dataService.prodArray.length) {
            this.dataService.countP = 1;
            this.dataService.localStorage(product);
        }
    };
    ;
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.scss']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
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
