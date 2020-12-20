"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShoperComponent = void 0;
var core_1 = require("@angular/core");
var ShoperComponent = /** @class */ (function () {
    function ShoperComponent(dataService) {
        this.dataService = dataService;
        this.products = [];
        this.productsLocal = [];
    }
    ShoperComponent.prototype.ngOnInit = function () {
        this.getProdFromStorage();
    };
    ShoperComponent.prototype.getProdFromStorage = function () {
        var _this = this;
        this.productsLocal = JSON.parse(localStorage.getItem('products'));
        this.productsLocal.forEach(function (el) {
            _this.dataService.findProduct(el).subscribe(function (data) {
                _this.products.push({
                    product: JSON.parse(data)[0],
                    count: el.count
                });
            });
        });
        this.products = [];
    };
    ShoperComponent.prototype.deleteFromShoper = function (id) {
        var _this = this;
        this.dataService.prodArray.forEach(function (el, i) {
            if (el._id == id) {
                _this.dataService.prodArray.splice(i, 1);
                localStorage.clear();
                localStorage.setItem('products', JSON.stringify(_this.dataService.prodArray));
                _this.getProdFromStorage();
            }
            // this.getProdFromStorage();
        });
        // this.getProdFromStorage();
    };
    ShoperComponent = __decorate([
        core_1.Component({
            selector: 'app-shoper',
            templateUrl: './shoper.component.html',
            styleUrls: ['./shoper.component.scss']
        })
    ], ShoperComponent);
    return ShoperComponent;
}());
exports.ShoperComponent = ShoperComponent;
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));
// console.log(data);;
