"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService) {
        this.dataService = dataService;
        this.email = "";
        this.login = "";
        this.password = "";
        this.name = "";
        this.tel = "";
        this.passwordLog = "";
        this.loginLog = "";
        this.expressionL = true;
        this.expressionR = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.addUser = function () {
        var _this = this;
        this.user = {
            id: 0,
            name: this.name,
            login: this.login,
            password: this.password,
            email: this.email,
            tel: this.tel
        };
        this.dataService.addUser(this.user).subscribe(function (data) {
            console.log(data);
            _this.dataService.localStorageUser(data);
            _this.dataService.sessionObj.session = true;
            console.log(JSON.parse(data));
        });
        this.clearInput();
    };
    LoginComponent.prototype.displayLog = function () {
        this.expressionR = true;
        this.expressionL = true;
    };
    LoginComponent.prototype.displayReg = function () {
        this.expressionL = false;
        this.expressionR = false;
    };
    LoginComponent.prototype.disableBtnAdd = function () {
        if (this.name.length == 0 ||
            this.email.length == 0 ||
            this.tel.length == 0 ||
            this.login.length == 0 ||
            this.password.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    LoginComponent.prototype.disableBtnLog = function () {
        if (this.loginLog.length == 0 ||
            this.passwordLog.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    LoginComponent.prototype.clearInput = function () {
        this.email = "";
        this.login = "";
        this.password = "";
        this.name = "";
        this.tel = "";
        this.passwordLog = "";
        this.loginLog = "";
    };
    LoginComponent.prototype.LoginUser = function () {
        var _this = this;
        this.user = {
            password: this.passwordLog,
            login: this.loginLog
        };
        console.log(this.user);
        this.dataService.findUser(this.user).subscribe(function (data) {
            _this.dataService.localStorageUser(data);
            _this.dataService.sessionObj.session = true;
        });
        this.clearInput();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
