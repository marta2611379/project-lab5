"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.countProdShoper = 0;
        this.prodArray = JSON.parse(localStorage.getItem('products'));
        this.countP = 1;
        // slogin;
        this.sessionObj = JSON.parse(localStorage.getItem('user'));
        console.log(this.sessionObj);
    }
    // session: boolean = false;
    DataService.prototype.getProducts = function () {
        return this.http.get('/getproducts');
    };
    DataService.prototype.removeProduct = function (prod) {
        var obj = { id: prod._id };
        return this.http.post('/removeproduct', obj, { responseType: 'text' });
    };
    DataService.prototype.addProduct = function (prod) {
        return this.http.post('/addproduct', prod, { responseType: 'text' });
    };
    DataService.prototype.findProduct = function (prod) {
        var obj = { id: prod._id };
        return this.http.post('/findproduct', obj, { responseType: 'text' });
    };
    DataService.prototype.updateProduct = function (prod) {
        return this.http.post('/updateproduct', prod, { responseType: 'text' });
    };
    DataService.prototype.getUsers = function () {
        return this.http.get('/getuser');
    };
    DataService.prototype.removeUser = function (user) {
        var obj = { id: user._id };
        return this.http.post('/removeuser', obj, { responseType: 'text' });
    };
    DataService.prototype.addUser = function (user) {
        return this.http.post('/adduser', user, { responseType: 'text' });
    };
    DataService.prototype.findUser = function (user) {
        console.log(user);
        var obj = {
            login: user.login,
            password: user.password
        };
        return this.http.post('/finduser', obj, { responseType: 'text' });
    };
    DataService.prototype.localStorage = function (product) {
        console.log(product);
        this.prodArray = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
        this.prodArray.push({
            count: this.countP,
            _id: product._id
        });
        localStorage.setItem('products', JSON.stringify(this.prodArray));
    };
    DataService.prototype.localStorageUser = function (user) {
        user = JSON.parse(user);
        console.log(user);
        this.sessionObj = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
        this.sessionObj =
            {
                session: true,
                obj: user
            };
        localStorage.setItem('user', JSON.stringify(this.sessionObj));
    };
    ;
    DataService.prototype.logOut = function () {
        this.sessionObj = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
        this.sessionObj =
            {
                session: false,
                obj: {}
            };
        localStorage.setItem('user', JSON.stringify(this.sessionObj));
    };
    ;
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
