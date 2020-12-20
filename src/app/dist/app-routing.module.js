"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var menu_component_1 = require("./pages/menu/menu.component");
var mobile_menu_component_1 = require("./pages/mobile-menu/mobile-menu.component");
var products_component_1 = require("./pages/products/products.component");
var product_component_1 = require("./pages/product/product.component");
var home_component_1 = require("./pages/home/home.component");
var login_component_1 = require("./pages/login/login.component");
// import { AdminProdComponent } from './admin/admin-prod/admin-prod.component';
var admin_component_1 = require("./pages/admin/admin/admin.component");
var shoper_component_1 = require("./pages/shoper/shoper.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'products', component: products_component_1.ProductsComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'mobile-menu', component: mobile_menu_component_1.MobileMenuComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'shoper', component: shoper_component_1.ShoperComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
