"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsComponent = void 0;
var core_1 = require("@angular/core");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(dataService) {
        this.dataService = dataService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.loadProducts();
        this.AddProducts();
    };
    ProductsComponent.prototype.loadProducts = function () {
        var _this = this;
        this.dataService.getProducts().subscribe(function (data) {
            _this.products = data;
            console.log(_this.products);
        });
    };
    ProductsComponent.prototype.AddProducts = function () {
        this.dataService.addProduct(this.prod).subscribe(function (data) {
            console.log(data);
        });
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
