"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminComponent = void 0;
var core_1 = require("@angular/core");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(dataService) {
        this.dataService = dataService;
        this.prodName = "";
        this.prodDesc = "";
        this.prodPrice = 0;
        this.addBtnActive = false;
        this.BtnAddUpdate = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    AdminComponent.prototype.loadProducts = function () {
        var _this = this;
        this.dataService.getProducts().subscribe(function (data) {
            _this.products = data;
            console.log(_this.products);
        });
    };
    AdminComponent.prototype.addProducts = function () {
        var _this = this;
        this.prod = {
            id: 0,
            name: this.prodName,
            description: this.prodDesc,
            price: this.prodPrice
        };
        this.dataService.addProduct(this.prod).subscribe(function (data) {
            console.log(data);
            _this.loadProducts();
        });
        this.clearInput();
    };
    AdminComponent.prototype.removeProduct = function (item) {
        var _this = this;
        console.log('removeProduct:');
        console.log(item);
        this.dataService.removeProduct(item).subscribe(function (data) {
            console.log(data);
            _this.loadProducts();
        });
    };
    AdminComponent.prototype.findProduct = function (prod) {
        var _this = this;
        console.log('findProduct:');
        console.log(prod);
        this.dataService.findProduct(prod).subscribe(function (data) {
            console.log(data);
            _this.updateProdItem = prod;
            _this.prodName = prod.name;
            _this.prodDesc = prod.description;
            _this.prodPrice = prod.price;
            _this.BtnAddUpdate = !_this.BtnAddUpdate;
        });
    };
    AdminComponent.prototype.updateProduct = function () {
        var _this = this;
        console.log('updateProd:');
        this.dataService.updateProduct({
            _id: this.updateProdItem,
            name: this.prodName,
            description: this.prodDesc,
            price: this.prodPrice
        }).subscribe(function (data) {
            _this.updateProdItem = '';
            _this.BtnAddUpdate = !_this.BtnAddUpdate;
            _this.clearInput();
            _this.loadProducts();
        });
    };
    AdminComponent.prototype.disableBtnAdd = function () {
        if (this.prodName.length == 0 ||
            this.prodDesc.length == 0 ||
            this.prodPrice == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminComponent.prototype.clearInput = function () {
        this.prodName = "";
        this.prodDesc = "";
        this.prodPrice = 0;
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
