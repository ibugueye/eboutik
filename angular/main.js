(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2>Votre compte</h2>\r\n\r\n<table *ngIf=\"customerInfo\" class=\"table\">\r\n  <tbody>\r\n    <tr>\r\n      <th>Prénom</th>\r\n      <td>{{ customerInfo.firstname }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Nom</th>\r\n      <td>{{ customerInfo.lastname }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>E-mail</th>\r\n      <td>{{ customerInfo.email }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<div class=\"text-right\">\r\n  <button type=\"button\" (click)=\"logout()\" class=\"btn btn-danger\"><span class=\"oi oi-account-logout\"></span> Déconnexion</button>\r\n</div>"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = /** @class */ (function () {
    function AccountComponent(customerService) {
        this.customerService = customerService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        if (this.customerService.isLoggedIn) {
            console.log('yes');
            this.customerInfo = this.customerService.customerInfo;
            console.log(this.customerInfo);
        }
        else {
            console.log('no');
        }
    };
    AccountComponent.prototype.logout = function () {
        this.customerService.logout();
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../catalog/catalog.component */ "./src/app/catalog/catalog.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _tests_tests_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tests/tests.component */ "./src/app/tests/tests.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../payment/payment.component */ "./src/app/payment/payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CommonModule } from '@angular/common';













// import { CartComponent } from './cart/cart.component';
// Routes
var routes = [
    //  { path: '', redirectTo: '/home', pathMatch: 'full' }, // ressource : /
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'catalog', component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_5__["CatalogComponent"] },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'connect', component: _connect_connect_component__WEBPACK_IMPORTED_MODULE_6__["ConnectComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
    { path: 'catalog', component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_5__["CatalogComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["PaymentComponent"] },
    { path: 'product/:id', component: _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] },
    { path: 'tests', component: _tests_tests_component__WEBPACK_IMPORTED_MODULE_12__["TestsComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] },
];
/**
 * NOTE :
 * Ne pas déclarer les composants ("declarations") dans le module ci-dessous.
 * Les composants de pages sont déjà déclarés dans app.module.ts (notre module principal).
 */
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // CommonModule
                [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)] // La méthode ".forRoot()" rend les routes accessibles pour toute l'application.
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n\r\n  <router-outlet></router-outlet><!-- Point de départ des composants injectés par le Router -->\r\n  \r\n</div>\r\n\r\n<div>\r\n    <app-footer>@2018  </app-footer>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _tests_tests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tests/tests.component */ "./src/app/tests/tests.component.ts");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catalog/catalog.component */ "./src/app/catalog/catalog.component.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _product_thumbnail_product_thumbnail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./product-thumbnail/product-thumbnail.component */ "./src/app/product-thumbnail/product-thumbnail.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4___default.a);



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _tests_tests_component__WEBPACK_IMPORTED_MODULE_10__["TestsComponent"],
                _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__["CatalogComponent"],
                _price_price_component__WEBPACK_IMPORTED_MODULE_12__["PriceComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _connect_connect_component__WEBPACK_IMPORTED_MODULE_18__["ConnectComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_19__["AccountComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_20__["CartComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_21__["PaymentComponent"],
                _product_thumbnail_product_thumbnail_component__WEBPACK_IMPORTED_MODULE_22__["ProductThumbnailComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"]
            ],
            imports: [
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
            ],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
                    useValue: 'fr-FR'
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.customerService.isLoggedIn) {
            console.log('Allow entry:', this.customerService.isLoggedIn);
            return true;
        }
        else {
            console.log('Deny entry:', this.customerService.isLoggedIn);
            this.router.navigate(['/connect']);
            return false; // juste pour retourner une valeur, car l'accès aura déjà été empêché par la navigation.
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartService = /** @class */ (function () {
    function CartService() {
        this.cartItemsArray = []; // tableau d'objets de type CartItem.
        var lsCart = localStorage.getItem('cart');
        if (lsCart) {
            this.cart = JSON.parse(lsCart);
        }
        else {
            this.cart = {
                lines: {},
                total: 0,
                shippingCost: 0,
                nbItems: 0,
            };
            this.updateLocalStorage();
        }
        this.updateCartItemsArray();
        // console.log('CartService - constructor(), this.cart:', this.cart);
    }
    CartService.prototype.updateLocalStorage = function () {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    };
    CartService.prototype.addProduct = function (product) {
        // console.log('CartService addProduct()');
        if (product.id in this.cart.lines) {
            this.cart.lines[product.id].qty++;
            // this.cart.lines[product.id].itemTotal = this.cart.lines[product.id].qty * product.price;
        }
        else {
            this.cart.lines[product.id] = {
                qty: 1,
                product: product,
                itemTotal: product.price,
            };
        }
        this.calculateCart();
    };
    CartService.prototype.addOne = function (productId) {
        if (productId in this.cart.lines) {
            this.cart.lines[productId].qty++;
        }
        this.calculateCart();
    };
    CartService.prototype.removeOne = function (productId) {
        if (productId in this.cart.lines) {
            if (this.cart.lines[productId].qty > 1) {
                this.cart.lines[productId].qty--;
            }
            else {
                this.removeProduct(productId);
            }
        }
        this.calculateCart();
    };
    CartService.prototype.removeProduct = function (productId) {
        if (productId in this.cart.lines) {
            // console.log('Le produit à supprimer a été trouvé', this.cart);
            delete this.cart.lines[productId];
            // console.log(this.cart);
            this.calculateCart();
        }
    };
    CartService.prototype.getProductQty = function (productId) {
        if (productId in this.cart.lines) {
            return this.cart.lines[productId].qty;
        }
        else {
            return 0;
        }
    };
    CartService.prototype.calculateCart = function () {
        this.cart.total = 0;
        this.cart.nbItems = 0;
        for (var prop in this.cart.lines) {
            if (this.cart.lines.hasOwnProperty(prop)) {
                this.cart.lines[prop].itemTotal = this.cart.lines[prop].qty * this.cart.lines[prop].product.price;
                this.cart.total += this.cart.lines[prop].itemTotal;
                this.cart.nbItems += this.cart.lines[prop].qty;
            }
        }
        this.updateCartItemsArray();
        this.updateLocalStorage();
    };
    CartService.prototype.updateCartItemsArray = function () {
        // console.log('updateCartItemsArray() - this.cart:', this.cart);
        this.cartItemsArray = [];
        for (var prop in this.cart.lines) {
            if (this.cart.lines.hasOwnProperty(prop)) {
                this.cartItemsArray.push(this.cart.lines[prop]);
            }
        }
        return this.cartItemsArray;
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"cartService.cartItemsArray.length; then cart; else noCart\"></ng-container>\r\n\r\n<ng-template #cart>\r\n  <h2>Votre panier</h2>\r\n  <table class=\"table table-striped table-hover\">\r\n    <thead>\r\n      <tr class=\"table-active\">\r\n        <th>Article</th>\r\n        <th title=\"Prix unitaire\">\r\n          <span class=\"d-none d-md-block\">Prix unitaire</span>\r\n          <span class=\"d-md-none\">Prix U.</span>\r\n        </th>\r\n        <th title=\"Quantité\">\r\n          <span class=\"d-none d-md-block\">Quantité</span>\r\n          <span class=\"d-md-none\">Qté</span>\r\n        </th>\r\n        <th>Actions</th>\r\n        <th>Total article</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of cartService.cartItemsArray\">\r\n        <td>\r\n\r\n          <a routerLink=\"/product/{{ item.product.id }}\"><img src=\"{{ item.product.image }}\" alt=\"\" class=\"img-fluid img-thumbnail\" style=\"width:100px;\"></a>\r\n          <a routerLink=\"/product/{{ item.product.id }}\" class=\"align-top\">{{ item.product.name }}</a>\r\n        </td>\r\n        <td class=\"text-right\">\r\n          <app-price [price]=\"item.product.price\"></app-price>\r\n        </td>\r\n        <td class=\"text-right\">\r\n          {{ item.qty }}\r\n        </td>\r\n        <td>\r\n          <button type=\"button\" (click)=\"removeOne(item.product.id)\" class=\"btn btn-sm btn-outline-secondary\" placement=\"bottom\" ngbTooltip=\"Diminuer la quantité\"><span class=\"oi oi-minus\"></span></button>&nbsp;\r\n          <button type=\"button\" (click)=\"addOne(item.product.id)\" class=\"btn btn-sm btn-outline-secondary\" placement=\"bottom\" ngbTooltip=\"Augmenter la quantité\"><span class=\"oi oi-plus\"></span></button>&nbsp;\r\n          <button type=\"button\" (click)=\"removeProduct(item.product.id)\" class=\"btn btn-sm btn-outline-secondary\" placement=\"bottom\" ngbTooltip=\"Supprimer l'article\"><span class=\"oi oi-trash\"></span></button>\r\n        </td>\r\n        <td class=\"text-right\">\r\n          <app-price [price]=\"item.itemTotal\"></app-price>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-6 offset-md-6\">\r\n      <table class=\"table\">\r\n        <tbody>\r\n          <tr>\r\n            <th>\r\n              Total TTC\r\n            </th>\r\n            <td class=\"text-right\">\r\n              <app-price [price]=\"cartService.cart.total\"></app-price>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>\r\n              Frais de port\r\n            </th>\r\n            <td class=\"text-right\">\r\n              <app-price [price]=\"cartService.cart.shippingCost\"></app-price>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col text-right\">\r\n      <a routerLink=\"/payment\" class=\"btn btn-danger\">Passer la commande</a>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #noCart>\r\n  <h2>Votre panier est vide...</h2>\r\n  <p><a routerLink=\"/catalog\">Parcourez notre catalogue.</a></p>\r\n</ng-template>\r\n\r\n\r\n<ng-template #modalContent let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Confirmation de suppression</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Voulez-vous vraiment retirer ce produit ?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-dark\" (click)=\"c('Save click')\">Retirer le produit du panier</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, modalService) {
        this.cartService = cartService;
        this.modalService = modalService;
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.removeOne = function (productId) {
        if (this.cartService.getProductQty(productId) > 1) {
            this.cartService.removeOne(productId);
        }
        else {
            this.removeProduct(productId);
        }
    };
    CartComponent.prototype.addOne = function (productId) {
        this.cartService.addOne(productId);
    };
    CartComponent.prototype.removeProduct = function (productId) {
        this.modalRemoveProduct(productId);
    };
    CartComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            // console.log('C', 'by pressing ESC');
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            // console.log('D', 'by clicking on a backdrop');
            return 'by clicking on a backdrop';
        }
        else {
            // console.log('E', reason);
            return "with: " + reason;
        }
    };
    CartComponent.prototype.modalRemoveProduct = function (productId) {
        var _this = this;
        this.modalService.open(this.modalContent, { centered: true })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            _this.cartService.removeProduct(productId);
            // console.log('A', this.closeResult);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            // console.log('B', this.closeResult);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", Object)
    ], CartComponent.prototype, "modalContent", void 0);
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/catalog.service.ts":
/*!************************************!*\
  !*** ./src/app/catalog.service.ts ***!
  \************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogService = /** @class */ (function () {
    function CatalogService(http) {
        this.http = http;
        this.apiBase = 'http://ng-ecommerce-api.virtuoworks.com/api';
    }
    CatalogService.prototype.getProducts = function () {
        return this.http.get(this.apiBase + "/Products");
    };
    CatalogService.prototype.getProductById = function (id) {
        var url = this.apiBase + "/Products/findOne?filter={\"where\":{\"id\":\"" + id + "\"}}";
        return this.http.get(url);
    };
    /*
    Ordre décroissant
    http://ng-ecommerce-api.virtuoworks.com/api/Products?filter={"order":"name DESC"}
  
    {"where":{"id":"5b3a54b9be56c0d8c3495c75"}, "limit":1, "order":"name ASC"}
  
    {"where":{"id":{"neq":"5b3a54b9be56c0d8c3495c76"}}, "limit":3, "order":"name ASC"}
    */
    CatalogService.prototype.getRelatedProducts = function (id, max) {
        if (max === void 0) { max = 3; }
        var url = this.apiBase + "/Products/?filter={\"where\":{\"id\":{\"neq\":\"" + id + "\"}}, \"limit\":" + max + ", \"order\":\"name DESC\"}";
        return this.http.get(url);
    };
    CatalogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CatalogService);
    return CatalogService;
}());



/***/ }),

/***/ "./src/app/catalog/catalog.component.css":
/*!***********************************************!*\
  !*** ./src/app/catalog/catalog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row > div {\r\n  margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/catalog/catalog.component.html":
/*!************************************************!*\
  !*** ./src/app/catalog/catalog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Catalogue</h2>\r\n\r\n<div class=\"row\">\r\n  <div *ngFor=\"let product of products\" class=\"col-sm-6 col-md-4 col-lg-3\">\r\n    <app-product-thumbnail [product]=\"product\"></app-product-thumbnail>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/catalog/catalog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/catalog/catalog.component.ts ***!
  \**********************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog.service */ "./src/app/catalog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(catalogService) {
        this.catalogService = catalogService;
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalogService.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    CatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! ./catalog.component.html */ "./src/app/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.css */ "./src/app/catalog/catalog.component.css")]
        }),
        __metadata("design:paramtypes", [_catalog_service__WEBPACK_IMPORTED_MODULE_1__["CatalogService"]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/connect/connect.component.css":
/*!***********************************************!*\
  !*** ./src/app/connect/connect.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/connect/connect.component.html":
/*!************************************************!*\
  !*** ./src/app/connect/connect.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <app-signup></app-signup>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-login></app-login>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/connect/connect.component.ts":
/*!**********************************************!*\
  !*** ./src/app/connect/connect.component.ts ***!
  \**********************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectComponent = /** @class */ (function () {
    function ConnectComponent() {
    }
    ConnectComponent.prototype.ngOnInit = function () {
    };
    ConnectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connect',
            template: __webpack_require__(/*! ./connect.component.html */ "./src/app/connect/connect.component.html"),
            styles: [__webpack_require__(/*! ./connect.component.css */ "./src/app/connect/connect.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConnectComponent);
    return ConnectComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/customer.service.ts":
/*!*************************************!*\
  !*** ./src/app/customer.service.ts ***!
  \*************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerService = /** @class */ (function () {
    function CustomerService(http, router) {
        this.http = http;
        this.router = router;
        this.apiBase = 'http://ng-ecommerce-api.virtuoworks.com/api';
        this.isLoggedIn = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var storedStatus = localStorage.getItem('loggedIn');
        if (storedStatus && storedStatus === '1') {
            var customerInfo = localStorage.getItem('customerInfo');
            if (customerInfo) {
                this.customerInfo = JSON.parse(customerInfo);
            }
            this.updateAuthStatus(true);
        }
    }
    CustomerService.prototype.createAccount = function (signupData) {
        return this.http.post(this.apiBase + "/Customers", signupData);
    };
    CustomerService.prototype.login = function (loginData) {
        var _this = this;
        var str = this.apiBase + "/Customers?filter={\"where\":{\"email\":\"" + loginData.email + "\",\"password\":\"" + loginData.password + "\"}}";
        return this.http.get(str).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log('this.http.get:', data);
            _this.customerInfo = data[0];
            var status = (data && data.length === 1) ? true : false;
            _this.updateAuthStatus(status);
            return _this.isLoggedIn;
        }));
    };
    CustomerService.prototype.logout = function () {
        this.updateAuthStatus(false);
        this.router.navigate(['/']);
    };
    CustomerService.prototype.updateAuthStatus = function (newStatus) {
        this.isLoggedIn = newStatus;
        if (newStatus) {
            localStorage.setItem('loggedIn', '1');
            localStorage.setItem('customerInfo', JSON.stringify(this.customerInfo));
        }
        else {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('customerInfo');
        }
        this.change.emit(this.isLoggedIn);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomerService.prototype, "change", void 0);
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    padding-top:30px;\r\n    background : #212529;\r\n    margin-top : 300px;\r\n    margin-bottom: 0px;\r\n    color : whitesmoke;\r\n}\r\n\r\n.title{\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--Footer-->\n<footer class=\"page-footer\">\n\n    <!--Footer Links-->\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <!--First column-->\n            <div class=\"col-md-3 offset-md-1\">\n                <h5 class=\"title\">eBoutik in the world </h5>\n                <p> </p>\n            </div>\n            <!--/.First column-->\n\n            <hr class=\"hidden-md-up\">\n\n            <!--Second column-->\n            <div class=\"col-md-2 offset-md-1\">\n                <h5 class=\"title\">Senegal</h5>\n                <ul class=\"list-unstyled\">\n                    <li>\n                        <a>24 rue LeNgor</a>\n                        <p> Dakar </p>\n                    </li>\n                    \n                    \n                </ul>\n            </div>\n            <!--/.Second column-->\n\n            <hr class=\"hidden-md-up\">\n\n            <!--Third column-->\n            <div class=\"col-md-2\">\n                <h5 class=\"title\">USA</h5>\n                <ul class=\"list-unstyled\">\n                    <li>\n                        <a> 24 Mission street</a>\n                        <p> San Francisco</p>\n                    </li>\n                     \n                </ul>\n            </div>\n            <!--/.Third column-->\n\n            <hr class=\"hidden-md-up\">\n\n            <!--Fourth column-->\n            <div class=\"col-md-2\">\n                <h5 class=\"title\">Europe</h5>\n                <ul class=\"list-unstyled\">\n                    <li>\n                        <a> 24 leParis</a>\n                        <p> Paris </p>\n                    </li>\n                   \n                    \n                      \n                </ul>\n            </div>\n            <!--/.Fourth column-->\n\n        </div>\n    </div>\n    <!--/.Footer Links-->\n\n    \n\n    <!--Social buttons-->\n    <div class=\"text-center mb-3\">\n\n        <a class=\"btn-floating btn-small btn-fb waves-light\" mdbWavesEffect>\n            <i class=\"fa fa-facebook\"> </i>\n        </a>\n        <a class=\"btn-floating btn-small btn-tw waves-light\" mdbWavesEffect>\n            <i class=\"fa fa-twitter\"> </i>\n        </a>\n        <a class=\"btn-floating btn-small btn-gplus waves-light\" mdbWavesEffect>\n            <i class=\"fa fa-google-plus\"> </i>\n        </a>\n        <a class=\"btn-floating btn-small btn-li waves-light\" mdbWavesEffect>\n            <i class=\"fa fa-linkedin\"> </i>\n        </a>\n        <a class=\"btn-floating btn-small btn-git waves-light\" mdbWavesEffect>\n            <i class=\"fa fa-github\"> </i>\n        </a>\n        <a class=\"btn-floating btn-small btn-pin waves-light\" mdbWavesEffect>\n            <i class=\"fa fa-pinterest\"> </i>\n        </a>\n        <a class=\"btn-floating btn-small btn-ins waves-light\" mdbWavesEffect>\n            <i class=\"fa fa-instagram\"> </i>\n        </a>\n\n    </div>\n    <!--/.Social buttons-->\n\n    <!--Copyright-->\n    <div class=\"footer-copyright text-center py-3\">\n        <div class=\"container-fluid\">\n            © 2018 Copyright:\n            <a href=\"http://sunuxalat.com\"> eboutik.com</a>\n\n        </div>\n    </div>\n    <!--/.Copyright-->\n\n</footer>\n<!--/.Footer-->\nAPI Reference:"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n<h3>Nouveautés</h3>\r\n\r\n<div class=\"row\">\r\n  <div *ngFor=\"let product of newProducts\" class=\"col-sm-3\">\r\n    <app-product-thumbnail [product]=\"product\"></app-product-thumbnail>\r\n  </div>\r\n</div>\r\n\r\n<h3>Meilleures ventes</h3>\r\n\r\n<div class=\"row\">\r\n  <div *ngFor=\"let product of bestSellingProducts\" class=\"col-sm-3\">\r\n    <app-product-thumbnail [product]=\"product\"></app-product-thumbnail>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog.service */ "./src/app/catalog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(catalogService) {
        this.catalogService = catalogService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalogService.getProducts().subscribe(function (products) {
            _this.products = products;
            var sampleSize = 4;
            _this.newProducts = _this.products.sort(function () { return .5 - Math.random(); }).slice(0, sampleSize);
            _this.bestSellingProducts = _this.products.sort(function () { return .5 - Math.random(); }).slice(0, sampleSize);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_catalog_service__WEBPACK_IMPORTED_MODULE_1__["CatalogService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Déjà client </h2>\r\n\r\n<ngb-alert type=\"danger\" (close)=\"invalidLoginAlert=false\" *ngIf=\"invalidLoginAlert\"><strong>Connexion impossible.</strong><br> Veuillez vérifier votre e-mail ou mot de passe.</ngb-alert>\r\n\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n  <div class=\"form-group\">\r\n    <label for=\"login-email\">E-mail :</label>\r\n    <input type=\"email\" class=\"form-control\" formControlName=\"email\" [class.is-invalid]=\"loginForm.get('email').touched && loginForm.get('email').errors\" id=\"login-email\">\r\n    <div *ngIf=\"loginForm.get('email').touched && loginForm.get('email').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"loginForm.get('email').errors.required\">Veuillez saisir votre adresse e-mail.</div>\r\n      <div *ngIf=\"loginForm.get('email').errors.email\">Veuillez saisir une adresse e-mail valide.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"login-password\">Mot de passe :</label>\r\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\" [class.is-invalid]=\"loginForm.get('password').touched && loginForm.get('password').errors\" id=\"login-password\">\r\n    <div *ngIf=\"loginForm.get('password').touched && loginForm.get('password').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"loginForm.get('password').errors.required\">Veuillez saisir votre mot de passe.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary btn-block\">Connexion</button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, customerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.customerService = customerService;
        this.submitted = false;
        this.invalidLoginAlert = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.invalidLoginAlert = false;
        if (this.loginForm.invalid) {
            console.log('Invalid form');
            return;
        }
        this.customerService.login(this.loginForm.value).subscribe(function (loginResponse) {
            console.log('loginResponse', loginResponse, typeof loginResponse);
            if (loginResponse) {
                console.log('finally logged in');
                _this.router.navigate(['/account']);
            }
            else {
                console.log('finally failed login');
                _this.invalidLoginAlert = true;
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav.navbar {\r\n  margin-bottom: 50px;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <a  class=\"navbar-brand\" routerLink=\"/\"> <img class = \"image\"src=\"../../assets/logo/logo2.png\"></a>\r\n    <button (click)=\"toggleCollapse()\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-nav\" aria-controls=\"main-nav\" [attr.aria-expanded]=\"!isCollapsed\" aria-label=\"Ouvrir / fermer le menu\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"main-nav\" [ngbCollapse]=\"isCollapsed\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\"\r\n            routerLinkActive=\"active\"\r\n            [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a routerLink=\"/catalog\" class=\"nav-link\">Catalogue</a>\r\n        </li>\r\n        <li class=\"nav-item\"\r\n            routerLinkActive=\"active\"\r\n            [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a routerLink=\"/contact\" class=\"nav-link\">Contactez-nous</a>\r\n        </li>\r\n        \r\n      </ul>\r\n\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\"\r\n            routerLinkActive=\"active\"\r\n            [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a routerLink=\"/cart\" class=\"nav-link\"><span class=\"oi oi-cart\"></span> Panier</a>\r\n        </li>\r\n        \r\n        <ng-container *ngIf=\"loggedInUser; then userNav; else anonymousNav\"></ng-container>\r\n\r\n        <!--\r\n          Liens à afficher lorsque le client est connecté.\r\n        -->\r\n        <ng-template #userNav>\r\n          <li class=\"nav-item\"\r\n              routerLinkActive=\"active\"\r\n              [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <a routerLink=\"/account\" class=\"nav-link\">Votre compte</a>\r\n          </li>\r\n        </ng-template>\r\n\r\n        <!--\r\n          Liens à afficher pour un visiteur anonyme.\r\n        -->\r\n        <ng-template #anonymousNav>\r\n          <li class=\"nav-item\"\r\n              routerLinkActive=\"active\"\r\n              [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <a routerLink=\"/connect\" class=\"nav-link\">Identifiez-vous</a>\r\n          </li>\r\n        </ng-template>\r\n      </ul>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, customerService) {
        this.router = router;
        this.customerService = customerService;
        this.appName = 'eboutik';
        this.loggedInUser = false;
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.customerService.isLoggedIn);
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.isCollapsed = true;
            }
        });
        this.customerService.change.subscribe(function (loggedInStatus) {
            _this.loggedInUser = loggedInStatus;
        });
        this.loggedInUser = this.customerService.isLoggedIn;
    };
    NavbarComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Coming soon</h2>\r\n\r\n<p><a routerLink=\"/\">Return to Home</a></p>\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ngb-alert [dismissible]=\"false\">\r\n  <strong>Important !</strong> Les moyens de paiement ne sont pas actifs.\r\n</ngb-alert>\r\n\r\n<h2>Paiement</h2>\r\n\r\n<span class=\"oi oi-credit-card\"></span>"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/price/price.component.css":
/*!*******************************************!*\
  !*** ./src/app/price/price.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/price/price.component.html":
/*!********************************************!*\
  !*** ./src/app/price/price.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ price | currency:'EUR':'symbol':'0.2-2':'fr' }}"

/***/ }),

/***/ "./src/app/price/price.component.ts":
/*!******************************************!*\
  !*** ./src/app/price/price.component.ts ***!
  \******************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceComponent = /** @class */ (function () {
    // la valeur provient d'une propriété liée sur l'élément 'app-price'
    // ex : <app-price [price]="product.price"></app-price>
    // Avec un alias:
    // @Input('price') priceNumber: string; // 'price' serait le nom de propriété (attribut) sur l'élément
    // et 'priceNumber' serait le nom de la propriété de cette classe.
    function PriceComponent() {
    }
    PriceComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PriceComponent.prototype, "price", void 0);
    PriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! ./price.component.html */ "./src/app/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.css */ "./src/app/price/price.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/product-thumbnail/product-thumbnail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/product-thumbnail/product-thumbnail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-thumbnail/product-thumbnail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/product-thumbnail/product-thumbnail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a routerLink=\"/product/{{product.id}}\"><img src=\"/assets/images/products/{{product.image}}\" alt=\"\" class=\"img-fluid img-thumbnail\"></a>\r\n</div>\r\n<p class=\"text-center\">\r\n  <a routerLink=\"/product/{{product.id}}\">{{ product.name }}</a><br>\r\n  <strong><app-price [price]=\"product.price\"></app-price></strong>\r\n</p>"

/***/ }),

/***/ "./src/app/product-thumbnail/product-thumbnail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/product-thumbnail/product-thumbnail.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductThumbnailComponent", function() { return ProductThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductThumbnailComponent = /** @class */ (function () {
    function ProductThumbnailComponent() {
    }
    ProductThumbnailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductThumbnailComponent.prototype, "product", void 0);
    ProductThumbnailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-thumbnail',
            template: __webpack_require__(/*! ./product-thumbnail.component.html */ "./src/app/product-thumbnail/product-thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./product-thumbnail.component.css */ "./src/app/product-thumbnail/product-thumbnail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductThumbnailComponent);
    return ProductThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n  margin-top: 40px;\r\n}\r\n\r\n.tab-pane {\r\n  background-color: #fff;\r\n  padding: 1rem;\r\n}\r\n\r\nngb-tabset {\r\n  margin-top: 40px;\r\n}\r\n\r\n.card {\r\n  background-color: rgba(255, 255, 255, 0.33)\r\n}"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\" *ngIf=\"product\">\r\n  <div class=\"order-3 col-sm-6 order-sm-2 col-lg-4 order-lg-1\">\r\n    <div><img [src]=\"product.image\" alt=\"\" class=\"img-fluid img-thumbnail\"></div>\r\n  </div>\r\n  <div class=\"order-1 col-sm-6 order-sm-1 col-lg-4 order-lg-2\">\r\n    <h2>{{ product.name }}</h2>\r\n    <p>\r\n      <ngb-rating [rate]=\"product.rating\" max=\"5\" readonly=\"readonly\"></ngb-rating>\r\n    </p>\r\n    <p>{{ product.description }}</p>\r\n  </div>\r\n  <div class=\"order-2 col-sm-12 order-sm-3 col-lg-4 order-lg-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body text-center\">\r\n        <p>\r\n          Prix :\r\n          <strong><app-price [price]=\"product.price\"></app-price></strong>\r\n        </p>\r\n\r\n        <ng-container *ngIf=\"product.inStock; then inStockTpl; else outOfStockTpl\"></ng-container>\r\n\r\n        <ng-template #inStockTpl>\r\n          <p class=\"text-success\"><span class=\"oi oi-check\"></span> en stock</p>\r\n        </ng-template>\r\n\r\n        <ng-template #outOfStockTpl>\r\n          <p class=\"text-danger\"><strong>Momentanément indisponible</strong></p>\r\n        </ng-template>\r\n\r\n        <button type=\"button\" class=\"btn btn-danger btn-block\" [attr.disabled]=\"product.inStock ? null : 'disabled'\" (click)=\"addToCart(product)\">Ajouter au panier</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <ngb-tabset class=\"col-12\">\r\n    <ngb-tab title=\"Fiche technique\">\r\n      <ng-template ngbTabContent>\r\n        <div class=\"tab-pane\">\r\n          <p>Référence : <strong>{{ product.id }}</strong></p>\r\n          <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n          master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n          dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n          iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle>Avis clients</ng-template>\r\n      <ng-template ngbTabContent>\r\n        <div class=\"tab-pane\">\r\n        Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n        <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n        craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n        cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n        yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n        shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n        sint qui sapiente accusamus tattooed echo park.</p>\r\n      </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n\r\n<h3>Produits similaires</h3>\r\n\r\n<div class=\"row\">\r\n  <div *ngFor=\"let relatedProduct of relatedProducts\" class=\"col-sm-6 col-md-4 col-lg-3\">\r\n    <div>\r\n      <a routerLink=\"/product/{{relatedProduct.id}}\"><img src=\"/assets/images/products/{{relatedProduct.image}}\" alt=\"\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n    <p class=\"text-center\">\r\n      <a routerLink=\"/product/{{relatedProduct.id}}\">{{ product.name }}</a><br>\r\n      <strong><app-price [price]=\"relatedProduct.price\"></app-price></strong>\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../catalog.service */ "./src/app/catalog.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(cartService, catalogService, route, router) {
        this.cartService = cartService;
        this.catalogService = catalogService;
        this.route = route;
        this.router = router;
    }
    ProductComponent.prototype.ngOnInit = function () {
        // console.log('route.snapshot.params:', this.route.snapshot.params);
        // console.log('route.snapshot.queryParams:', this.route.snapshot.queryParams);
        // console.log('route.snapshot.fragment:', this.route.snapshot.fragment);
        var _this = this;
        /**
         * Avec this.route.snapshot.params on récupère la valeur au chargement
         * et on conserve la valeur initiale durant toute la "vie" du composant.
         * Qu se passe-t-il si on appelle un autre produit à partir de cette page ?
         * -> l'identifiant changera dans la barre d'adresse mais les infos produits
         * ne seront pas mises à jour dans la page...
         */
        // const productId = this.route.snapshot.params['id'];
        // this.catalogService.getProductById(productId)
        // .subscribe((product: Product) => { // IMPORTANT: Utiliser une fonction flèche.
        //   product.image = `/assets/images/products/${product.image}`;
        //   this.product = product;
        // });
        /**
         * Pour refléter les changements suite à un lien interne à cette même page,
         * Il faut réagir au changement d'identifiant dans l'URL.
         * On utilise un observable pour refaire un appel au serveur à chaque changement
         * d'identifiant produit.
         * Puisque ce changement est détecté également la première fois,
         * on peut supprimer la version initiale de ce code et conserver uniquement la nouvelle.
         */
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            // console.log('params change:', params);
            _this.catalogService.getProductById(params.id).subscribe(function (product) {
                product.image = "/assets/images/products/" + product.image;
                _this.product = product;
            });
            _this.catalogService.getRelatedProducts(params.id).subscribe(function (products) {
                // console.log('products; ', products);
                _this.relatedProducts = products;
            });
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe(); // facultatif, Angular se désinscrira automatiqument
        // de l'observable sur la route. Mais ce n'est pas le cas de tous les observables.
    };
    ProductComponent.prototype.addToCart = function (product) {
        // console.log('Adding to cart:', product);
        this.cartService.addProduct(product);
        this.router.navigate(['/cart']);
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Créer un compte</h2>\r\n\r\n<ngb-alert type=\"danger\" (close)=\"invalidFormAlert=false\" *ngIf=\"invalidFormAlert\"><strong>Erreur.</strong><br> L'enregistrement a échoué.</ngb-alert>\r\n\r\n<form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"singup-firstname\" class=\"control-label\">Prénom :</label>\r\n    <input type=\"text\" formControlName=\"firstname\" class=\"form-control\" [class.is-invalid]=\"signupForm.get('firstname').touched && signupForm.get('firstname').errors\" id=\"singup-firstname\">\r\n    <div *ngIf=\"signupForm.get('firstname').touched && signupForm.get('firstname').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"signupForm.get('firstname').errors.required\">Veuillez saisir votre prénom.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"singup-lastname\" class=\"control-label\">Nom de famille :</label>\r\n    <input type=\"text\" formControlName=\"lastname\" class=\"form-control\" [class.is-invalid]=\"signupForm.get('lastname').touched && signupForm.get('lastname').errors\" id=\"singup-lastname\">\r\n    <div *ngIf=\"signupForm.get('lastname').touched && signupForm.get('lastname').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"signupForm.get('lastname').errors.required\">Veuillez saisir votre nom de famille.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"singup-email\" class=\"control-label\">E-mail :</label>\r\n    <input type=\"email\" formControlName=\"email\" class=\"form-control\" [class.is-invalid]=\"signupForm.get('email').touched && signupForm.get('email').errors\" id=\"singup-email\">\r\n    <div *ngIf=\"signupForm.get('email').touched && signupForm.get('email').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"signupForm.get('email').errors.required\">Veuillez saisir votre adresse e-mail.</div>\r\n      <div *ngIf=\"signupForm.get('email').errors.email\">Veuillez saisir une adresse e-mail valide.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"singup-password\" class=\"control-label\">Mot de passe :</label>\r\n    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [class.is-invalid]=\"signupForm.get('password').touched && signupForm.get('password').errors\" id=\"singup-password\">\r\n    <div *ngIf=\"signupForm.get('password').touched && signupForm.get('password').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"signupForm.get('password').errors.required\">Veuillez saisir votre mot de passe.</div>\r\n      <div *ngIf=\"signupForm.get('password').errors.minlength\">Votre mot de passe doit comporter au moins 6 caractères.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary btn-block\">Créer mon compte</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, router, customerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.customerService = customerService;
        this.invalidFormAlert = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
        });
        console.log(this.signupForm);
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.invalidFormAlert = false;
        console.log(this.signupForm);
        if (this.signupForm.valid) {
            this.customerService.createAccount(this.signupForm.value)
                .subscribe(function (data) {
                _this.customerService.login(_this.signupForm.value).subscribe(function (loginResponse) {
                    if (loginResponse) {
                        _this.router.navigate(['/account']);
                    }
                    else {
                        _this.invalidFormAlert = true;
                    }
                });
            });
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/tests/tests.component.css":
/*!*******************************************!*\
  !*** ./src/app/tests/tests.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tests/tests.component.html":
/*!********************************************!*\
  !*** ./src/app/tests/tests.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<h2>Tests</h2>\r\n\r\n<h3>Bootstrap</h3>\r\n<button type=\"button\" class=\"btn btn-primary\">Primary</button>\r\n<button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\r\n<button type=\"button\" class=\"btn btn-success\">Success</button>\r\n<button type=\"button\" class=\"btn btn-danger\">Danger</button>\r\n<button type=\"button\" class=\"btn btn-warning\">Warning</button>\r\n<button type=\"button\" class=\"btn btn-info\">Info</button>\r\n<button type=\"button\" class=\"btn btn-light\">Light</button>\r\n<button type=\"button\" class=\"btn btn-dark\">Dark</button>\r\n<button type=\"button\" class=\"btn btn-link\">Link</button>\r\n\r\n<h3>Dates</h3>\r\n<p>{{ today | date }}</p>\r\n<p>{{ today | date: 'fullDate' }}</p>\r\n\r\n<h3>Prix</h3>\r\n{{ 9.99 | currency:'EUR':'symbol':'0.2-2':'fr' }}\r\n\r\n<h3>Icônes</h3>\r\n\r\n<span class=\"oi oi-bar-chart\"></span>\r\n<span class=\"oi oi-calendar\"></span>\r\n<span class=\"oi oi-person\"></span>\r\n"

/***/ }),

/***/ "./src/app/tests/tests.component.ts":
/*!******************************************!*\
  !*** ./src/app/tests/tests.component.ts ***!
  \******************************************/
/*! exports provided: TestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsComponent", function() { return TestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestsComponent = /** @class */ (function () {
    function TestsComponent() {
        this.today = new Date();
        this.tableau = ['Angular', 'TypeScript', 'JavaScript', 'Node.js'];
        this.objetPanier = {
            '123': {
                nom: 'hjghjl',
                prix: 10,
                id: '123'
            },
            '456': {
                nom: 'jiolupouiouoi',
                prix: 3.9,
                id: '456'
            }
        };
        this.tableauBis = [];
    }
    TestsComponent.prototype.ngOnInit = function () {
        var valeur = {
            aimeJavaScript: true
        };
        // localStorage.setItem('Jaoued', JSON.stringify(valeur))
        var donneeDeLocalStorage = localStorage.getItem('Jaoued');
        console.log(JSON.parse(donneeDeLocalStorage));
        console.log(this.tableau);
        for (var i = 0; this.tableau[i]; i++) {
            console.log('- ', this.tableau[i]);
        }
        console.log('ABCDEFGHIJ'[5]);
        var texte = 'Bonjour à tous';
        var tableau1 = texte.split(' ');
        console.log('tableau1: ', tableau1);
        var reTexte = tableau1.join(' ');
        console.log('reTexte: ', reTexte);
        this.tableau.forEach(function (elelmentEnCours, idx, leTableau) {
            console.log(idx, '* ', elelmentEnCours, leTableau);
        });
        console.log('Objet initial :', this.objetPanier);
        for (var idProduit in this.objetPanier) {
            console.log('Un objet dans le panier :', this.objetPanier[idProduit]);
            this.tableauBis.push(this.objetPanier[idProduit]);
        }
        console.log(this.tableauBis);
        delete this.objetPanier['456'];
        console.log('Après :', this.objetPanier);
    };
    TestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tests',
            template: __webpack_require__(/*! ./tests.component.html */ "./src/app/tests/tests.component.html"),
            styles: [__webpack_require__(/*! ./tests.component.css */ "./src/app/tests/tests.component.css")],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [])
    ], TestsComponent);
    return TestsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/igueye/Bureau/eboutik/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map