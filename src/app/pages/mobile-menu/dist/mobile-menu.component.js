"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MobileMenuComponent = void 0;
var core_1 = require("@angular/core");
var MobileMenuComponent = /** @class */ (function () {
    function MobileMenuComponent(dataService) {
        this.dataService = dataService;
        this.dropMenu = false;
        this.username = "";
    }
    MobileMenuComponent.prototype.ngOnInit = function () { };
    MobileMenuComponent.prototype.countProd = function () {
        var count = 0;
        if (this.dataService.prodArray == null) {
            return 0;
        }
        else {
            this.dataService.prodArray.forEach(function (el) {
                count += el.count;
            });
            return count;
        }
    };
    MobileMenuComponent.prototype.loginOrUser = function () {
        if ((this.dataService.sessionObj == null) || (this.dataService.sessionObj.session == false)) {
            // console.log(false);
            return false;
        }
        else {
            this.username = this.dataService.sessionObj.obj.login;
            console.log(this.dataService.sessionObj);
            return true;
        }
    };
    MobileMenuComponent.prototype.logOut = function () {
        // localStorage.removeItem("user");
        this.dataService.logOut();
        this.loginOrUser();
    };
    MobileMenuComponent.prototype.dropMenuBtn = function () {
        this.dropMenu = !this.dropMenu;
        return this.dropMenu;
    };
    MobileMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-mobile-menu',
            templateUrl: './mobile-menu.component.html',
            styleUrls: ['./mobile-menu.component.scss']
        })
    ], MobileMenuComponent);
    return MobileMenuComponent;
}());
exports.MobileMenuComponent = MobileMenuComponent;
