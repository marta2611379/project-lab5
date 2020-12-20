"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var data_service_1 = require("./shared/services/data.service");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var menu_component_1 = require("./pages/menu/menu.component");
var mobile_menu_component_1 = require("./pages/mobile-menu/mobile-menu.component");
var products_component_1 = require("./pages/products/products.component");
var product_component_1 = require("./pages/product/product.component");
var home_component_1 = require("./pages/home/home.component");
var login_component_1 = require("./pages/login/login.component");
var common_1 = require("@angular/common");
var admin_component_1 = require("./pages/admin/admin/admin.component");
var shoper_component_1 = require("./pages/shoper/shoper.component");
// import { AdminProdComponent } from './admin/admin-prod/admin-prod.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                menu_component_1.MenuComponent,
                mobile_menu_component_1.MobileMenuComponent,
                products_component_1.ProductsComponent,
                product_component_1.ProductComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                admin_component_1.AdminComponent,
                shoper_component_1.ShoperComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                common_1.CommonModule,
                // NgModule,
                forms_1.FormsModule
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
