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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"jumbotron container \" style=\"margin: 15% auto; border-radius: 20px\">\n        <h1 class=\"display-4\">Hello, world!</h1>\n        <p class=\"lead\">This is a simple book reselling website where any student can sold out his books \n            at good price and use that money to buy books for his use on this website again.\n        </p>\n        <hr class=\"my-4\">\n        <p>This WebSite Is Designed By Vijay Garg </p>\n        <p class=\"lead\">\n        </p>\n      </div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/addlisting/addlisting.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addlisting/addlisting.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* BASIC */\ni{\n    margin-right: 8px;\n  }\nhtml {\n      background-color: #56baed;\n    }\nbody {\n      font-family: \"Poppins\", sans-serif;\n      height: 100vh;\n      \n    }\nh1{\n        margin-top: 20px;\n    }\na {\n      color: #92badd;\n      display:inline-block;\n      text-decoration: none;\n      font-weight: 400;\n    }\nh2 {\n      text-align: center;\n      font-size: 16px;\n      font-weight: 600;\n      text-transform: uppercase;\n      display:inline-block;\n      margin: 40px 8px 10px 8px; \n      color: #cccccc;\n    }\n/* STRUCTURE */\n.wrapper {\n      display: flex;\n      align-items: center;\n      flex-direction: column; \n      justify-content: center;\n      margin-top: 5%;\n      width: 100%;\n      min-height: 100%;\n      padding: 20px;\n    }\n#formContent {\n      border-radius: 10px 10px 10px 10px;\n      background: #fff;\n      padding: 10px;\n      width: 90%;\n      max-width: 600px;\n      position: relative;\n      padding: 0px;\n      box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n      text-align: center;\n    }\n#formFooter {\n      background-color: #f6f6f6;\n      border-top: 1px solid #dce8f1;\n      padding: 25px;\n      text-align: center;\n      border-radius: 0 0 10px 10px;\n    }\n/* TABS */\nh2.inactive {\n      color: #cccccc;\n    }\nh2.active {\n      color: #0d0d0d;\n      border-bottom: 2px solid #5fbae9;\n    }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset]  {\n      background-color: #56baed;\n      border: none;\n      color: white;\n      padding: 15px 80px;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n      text-transform: uppercase;\n      font-size: 13px;\n      box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n      border-radius: 5px 5px 5px 5px;\n      margin: 5px 20px 40px 20px;\n      transition: all 0.3s ease-in-out;\n    }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n      background-color: #39ace7;\n    }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n      -webkit-transform: scale(0.95);\n      transform: scale(0.95);\n    }\ninput[type=text] {\n      background-color: #f6f6f6;\n      border: none;\n      color: #0d0d0d;\n      padding: 15px 32px;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n      font-size: 16px;\n      margin: 5px;\n      width: 65%;\n      border: 2px solid #f6f6f6;\n      transition: all 0.5s ease-in-out;\n      border-radius: 5px 5px 5px 5px;\n    }\ninput[type=text]:focus {\n      background-color: #fff;\n      border-bottom: 2px solid #5fbae9;\n    }\ninput[type=text]:placeholder {\n      color: #cccccc;\n    }\ninput[type=email] {\n      background-color: #f6f6f6;\n      border: none;\n      color: #0d0d0d;\n      padding: 15px 32px;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n      font-size: 16px;\n      margin: 5px;\n      width: 65%;\n      border: 2px solid #f6f6f6;\n      transition: all 0.5s ease-in-out;\n      border-radius: 5px 5px 5px 5px;\n    }\ninput[type=email]:focus {\n      background-color: #fff;\n      border-bottom: 2px solid #5fbae9;\n    }\ninput[type=email]:placeholder {\n      color: #cccccc;\n    }\ninput[type=number] {\n      background-color: #f6f6f6;\n      border: none;\n      color: #0d0d0d;\n      padding: 15px 32px;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n      font-size: 16px;\n      margin: 5px;\n      width: 65%;\n      border: 2px solid #f6f6f6;\n      transition: all 0.5s ease-in-out;\n      border-radius: 5px 5px 5px 5px;\n    }\ninput[type=number]:focus {\n      background-color: #fff;\n      border-bottom: 2px solid #5fbae9;\n    }\ninput[type=number]:placeholder {\n      color: #cccccc;\n    }\ninput[type=password] {\n      background-color: #f6f6f6;\n      border: none;\n      color: #0d0d0d;\n      padding: 15px 32px;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n      font-size: 16px;\n      margin: 5px;\n      width: 65%;\n      border: 2px solid #f6f6f6;\n      transition: all 0.5s ease-in-out;\n      border-radius: 5px 5px 5px 5px;\n    }\ninput[type=password]:focus {\n      background-color: #fff;\n      border-bottom: 2px solid #5fbae9;\n    }\ninput[type=password]:placeholder {\n      color: #cccccc;\n    }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n      -webkit-animation-name: fadeInDown;\n      animation-name: fadeInDown;\n      -webkit-animation-duration: 1s;\n      animation-duration: 1s;\n      -webkit-animation-fill-mode: both;\n      animation-fill-mode: both;\n    }\n@-webkit-keyframes fadeInDown {\n      0% {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -100%, 0);\n        transform: translate3d(0, -100%, 0);\n      }\n      100% {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none;\n      }\n    }\n@keyframes fadeInDown {\n      0% {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -100%, 0);\n        transform: translate3d(0, -100%, 0);\n      }\n      100% {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none;\n      }\n    }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fadeIn {\n      opacity:0;\n      -webkit-animation:fadeIn ease-in 1;\n      animation:fadeIn ease-in 1;\n    \n      -webkit-animation-fill-mode:forwards;\n      animation-fill-mode:forwards;\n    \n      -webkit-animation-duration:1s;\n      animation-duration:1s;\n    }\n.fadeIn.first {\n      -webkit-animation-delay: 0.4s;\n      animation-delay: 0.4s;\n    }\n.fadeIn.second {\n      -webkit-animation-delay: 0.6s;\n      animation-delay: 0.6s;\n    }\n.fadeIn.third {\n      -webkit-animation-delay: 0.8s;\n      animation-delay: 0.8s;\n    }\n.fadeIn.fourth {\n      -webkit-animation-delay: 1s;\n      animation-delay: 1s;\n    }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n      display: block;\n      left: 0;\n      bottom: -10px;\n      width: 0;\n      height: 2px;\n      background-color: #56baed;\n      content: \"\";\n      transition: width 0.2s;\n    }\n.underlineHover:hover {\n      color: #0d0d0d;\n    }\n.underlineHover:hover:after{\n      width: 100%;\n    }\n/* OTHERS */\n*:focus {\n        outline: none;\n    }\n#icon {\n      width:60%;\n    }\n#login{\n        margin-bottom: 15px; \n    }\n#password{\n      margin-bottom: 15px; \n  }\n.gradient {\n\n    /* can be treated like a fallback */\n    background-color: #A4D3EE;\n  \n    /* will be \"on top\", if browser supports it */\n  \n    /* these will reset other properties, like background-position, but it does know what you mean */\n    background: #A4D3EE;\n    background: linear-gradient(#A4D3EE, #87CEEB);\n  }"

/***/ }),

/***/ "./src/app/addlisting/addlisting.component.html":
/*!******************************************************!*\
  !*** ./src/app/addlisting/addlisting.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"wrapper fadeInDown\">\n    <div id=\"formContent\">\n      <h1 class=\"fadeIn fourth\">Add New Item in List Here</h1>\n      <form>\n       <i class=\"fas fa-book-open fa-2x\"></i><input type=\"text\" [(ngModel)]=\"book\" id=\"book\" class=\"fadeIn second\" name=\"book\" placeholder=\"book Name\" >\n       <p></p>\n       <i class=\"fas fa-edit fa-2x\"></i><input type=\"text\" [(ngModel)]=\"author\" id=\"author\" class=\"fadeIn third\" name=\"author\" placeholder=\"Author Name\" required >\n       <p></p>\n       <i class=\"fas fa-file-image fa-2x\"></i><input type=\"text\" id=\"imgurl\" [(ngModel)]=\"imgurl\" class=\"fadeIn second\" name=\"imgurl\" placeholder=\"Image URL Here\" required >\n       <p></p>\n       <i class=\"fas fa-rupee-sign fa-2x\"></i><input type=\"text\" id=\"price\" [(ngModel)]=\"price\" class=\"fadeIn third\" name=\"price\" placeholder=\" Item Price\" required >\n       <p></p>\n       <select [(ngModel)]=\"conditionselect\" name=\"selct\" style=\"width: 400px;\">\n          <option *ngFor=\"let condition of conditions\" [ngValue]=\"condition\">{{condition}}</option>\n        </select>\n        <p></p>\n       <input type=\"submit\" class=\"fadeIn fourth\"  (click)=\"submititem()\" value=\"Submit Item\" >\n      </form>    \n      <div id=\"formFooter\">\n        <a class=\"underlineHover\" routerLink=\"/viewlist\">View My All List Items</a>\n      </div>\n    </div>\n  </div>\n\n\n  \n  <div class=\"modal\" *ngIf=\"display\"  style=\"display: block ; \">\n    <div class=\"modal-dialog modal-dialog-centered\" >\n      <div class=\"modal-content gradient\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" >Information for you</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onclose()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          {{mymessage}}\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"onclose()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/addlisting/addlisting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addlisting/addlisting.component.ts ***!
  \****************************************************/
/*! exports provided: AddlistingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddlistingComponent", function() { return AddlistingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddlistingComponent = /** @class */ (function () {
    function AddlistingComponent(_userservice, router) {
        this._userservice = _userservice;
        this.router = router;
        this.conditions = ['New', 'Almost New', 'Slight Damage', 'Worn', 'Select Book Condition'];
        this.conditionselect = 'Select Book Condition';
        this.book = '';
        this.author = '';
        this.imgurl = '';
        this.mymessage = "";
        this.display = false;
    }
    AddlistingComponent.prototype.ngOnInit = function () {
    };
    AddlistingComponent.prototype.submititem = function () {
        var _this = this;
        var conditionnumber;
        switch (this.conditionselect) {
            case 'New':
                conditionnumber = 4;
                break;
            case 'Almost New':
                conditionnumber = 3;
                break;
            case 'Slight Damage':
                conditionnumber = 2;
                break;
            case 'Worn':
                conditionnumber = 1;
                break;
            default:
                conditionnumber = -1;
        }
        var list = {
            seller: this._userservice.getemail(),
            book: this.book,
            author: this.author,
            img: this.imgurl,
            price: this.price,
            condition: conditionnumber,
            description: 'Good morning from France! I have finally made '
        };
        this._userservice.addnewbookitem(list).subscribe(function (mymsg) {
            console.log(mymsg);
            _this.mymessage = mymsg;
            _this.display = true;
        });
    };
    AddlistingComponent.prototype.onclose = function () {
        this.display = false;
        if (this.mymessage === 'successfully added new list item') {
            console.log("Successfully added item");
            this.router.navigate(['/listing']);
        }
    };
    AddlistingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addlisting',
            template: __webpack_require__(/*! ./addlisting.component.html */ "./src/app/addlisting/addlisting.component.html"),
            styles: [__webpack_require__(/*! ./addlisting.component.css */ "./src/app/addlisting/addlisting.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddlistingComponent);
    return AddlistingComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routingComponent, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponent", function() { return routingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _specific_listing_specific_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./specific-listing/specific-listing.component */ "./src/app/specific-listing/specific-listing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addlisting/addlisting.component */ "./src/app/addlisting/addlisting.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _mymessges_mymessges_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mymessges/mymessges.component */ "./src/app/mymessges/mymessges.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mylist/mylist.component */ "./src/app/mylist/mylist.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: "/login", pathMatch: "full" },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'listing', component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_4__["ListingComponent"] },
    { path: 'addlisting', component: _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_9__["AddlistingComponent"] },
    { path: 'listing/:id', component: _specific_listing_specific_listing_component__WEBPACK_IMPORTED_MODULE_7__["SpecificListingComponent"] },
    { path: 'mywishlist', component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__["WishlistComponent"] },
    { path: 'mymessages', component: _mymessges_mymessges_component__WEBPACK_IMPORTED_MODULE_11__["MymessgesComponent"] },
    { path: 'viewlist', component: _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_13__["MylistComponent"] },
    { path: 'chat/:id', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var routingComponent = [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _listing_listing_component__WEBPACK_IMPORTED_MODULE_4__["ListingComponent"],
    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
    _specific_listing_specific_listing_component__WEBPACK_IMPORTED_MODULE_7__["SpecificListingComponent"], _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_9__["AddlistingComponent"],
    _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__["WishlistComponent"], _mymessges_mymessges_component__WEBPACK_IMPORTED_MODULE_11__["MymessgesComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
    _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_13__["MylistComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"]
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>\n<app-dialogmsg></app-dialogmsg>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _specific_listing_specific_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./specific-listing/specific-listing.component */ "./src/app/specific-listing/specific-listing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addlisting/addlisting.component */ "./src/app/addlisting/addlisting.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _mymessges_mymessges_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mymessges/mymessges.component */ "./src/app/mymessges/mymessges.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mylist/mylist.component */ "./src/app/mylist/mylist.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _dialogmsg_dialogmsg_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialogmsg/dialogmsg.component */ "./src/app/dialogmsg/dialogmsg.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
                _specific_listing_specific_listing_component__WEBPACK_IMPORTED_MODULE_5__["SpecificListingComponent"],
                _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_9__["AddlistingComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__["WishlistComponent"],
                _mymessges_mymessges_component__WEBPACK_IMPORTED_MODULE_11__["MymessgesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_13__["FilterComponent"],
                _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_14__["MylistComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _dialogmsg_dialogmsg_component__WEBPACK_IMPORTED_MODULE_17__["DialogmsgComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chat works!\n</p>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/dialogmsg/dialogmsg.component.css":
/*!***************************************************!*\
  !*** ./src/app/dialogmsg/dialogmsg.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogmsg/dialogmsg.component.html":
/*!****************************************************!*\
  !*** ./src/app/dialogmsg/dialogmsg.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogmsg/dialogmsg.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dialogmsg/dialogmsg.component.ts ***!
  \**************************************************/
/*! exports provided: DialogmsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogmsgComponent", function() { return DialogmsgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogmsgComponent = /** @class */ (function () {
    function DialogmsgComponent(router) {
        this.router = router;
    }
    DialogmsgComponent.prototype.ngOnInit = function () {
    };
    DialogmsgComponent.prototype.onclose = function () {
        this.mymessage = "";
        if (this.ismove === true) {
            this.router.navigate([moveTo]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mymessage'),
        __metadata("design:type", Object)
    ], DialogmsgComponent.prototype, "mymessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('display'),
        __metadata("design:type", Object)
    ], DialogmsgComponent.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('moveto'),
        __metadata("design:type", Object)
    ], DialogmsgComponent.prototype, "moveto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('ismove'),
        __metadata("design:type", Object)
    ], DialogmsgComponent.prototype, "ismove", void 0);
    DialogmsgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialogmsg',
            template: __webpack_require__(/*! ./dialogmsg.component.html */ "./src/app/dialogmsg/dialogmsg.component.html"),
            styles: [__webpack_require__(/*! ./dialogmsg.component.css */ "./src/app/dialogmsg/dialogmsg.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DialogmsgComponent);
    return DialogmsgComponent;
}());



/***/ }),

/***/ "./src/app/filter/filter.component.css":
/*!*********************************************!*\
  !*** ./src/app/filter/filter.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/filter/filter.component.html":
/*!**********************************************!*\
  !*** ./src/app/filter/filter.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  filter works!\n</p>\n"

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
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

var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/filter/filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"py-5 bg-dark\" style=\"margin-top: 100px\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2018</p>\n  </div>\n</footer>\n"

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

/***/ "./src/app/listing/listing.component.css":
/*!***********************************************!*\
  !*** ./src/app/listing/listing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-bottom {\n    color: #fff;\n    margin-top: 5px;\n    width: 95%;\n    height: 95%;\n  }\n  .fadeInDown {\n    -webkit-animation-name: fadeInDown;\n    animation-name: fadeInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n  }\n  @-webkit-keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n  @keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n  /* Simple CSS3 Fade-in Animation */\n  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  .even , .odd {\n    -webkit-animation-name: fadeInDown;\n    animation-name: fadeInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n  }\n  @-webkit-keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n  @keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n  /* Simple CSS3 Fade-in Animation */\n  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  .animate{\n    -webkit-animation: NAME-YOUR-ANIMATION 3s;\n    animation: NAME-YOUR-ANIMATION 3s;\n    opacity: 1;\n}\n  @keyframes NAME-YOUR-ANIMATION {\n    0% {\n        opacity: 0;\n    }\n    12%{\n        opacity: 0.12;\n    }\n    25% {\n        opacity: 0.25;\n    }\n    37%{\n        opacity: 0.37;\n    }\n    50% {\n        opacity: 0.5;\n    }\n    62%{\n        opacity: 0.62;\n    }\n    75% {\n        opacity: 0.75;\n    }\n    87%{\n        opacity: 0.87;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n  @-webkit-keyframes NAME-YOUR-ANIMATION {\n    0% {\n        opacity: 0;\n    }\n    12%{\n        opacity: 0.12;\n    }\n    25%{\n        opacity: 0.25;\n    }\n    37%{\n        opacity: 0.37;\n    }\n    50% {\n        opacity: 0.50;\n    }\n    62%{\n        opacity: 0.62;\n    }\n    75% {\n        opacity: 0.75;\n    }\n    87%{\n        opacity: 0.87;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n  @keyframes NAME-YOUR-ANIMATION {\n    0% {\n        opacity: 0;\n    }\n    12%{\n        opacity: 0.12;\n    }\n    25%{\n        opacity: 0.25;\n    }\n    37%{\n        opacity: 0.37;\n    }\n    50% {\n        opacity: 0.50;\n    }\n    62%{\n        opacity: 0.62;\n    }\n    75% {\n        opacity: 0.75;\n    }\n    87%{\n        opacity: 0.87;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n"

/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar [parentData]='email'></app-navbar>\n<div style=\"width: 80%; margin:0 auto; min-width: 200px; margin-top: 50px\" class=\"animate\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light \" style=\"border-radius:10px \">\n<ul class=\"navbar-nav mr-auto\" >\n<li class=\"nav-item dropdown\" >\n    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Filter\n    </a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n        <div class=\"dropdown-divider\"></div>\n      <button (click)=\"sortbypricelowtohigh()\" class=\"dropdown-item\" ><i class=\"fas fa-rupee-sign\"></i> Price <i class=\"fas fa-angle-double-up\"></i></button>\n      <button (click)=\"sortbypricehightolow()\" class=\"dropdown-item\" ><i class=\"fas fa-rupee-sign\"></i> Price <i class=\"fas fa-angle-double-down\"></i></button>\n      <div class=\"dropdown-divider\"></div>\n      <button (click)=\"sortbyconditiongoodtobad()\" class=\"dropdown-item\" >Condition <i class=\"fas fa-grin-tears\"></i></button>\n      <button (click)=\"sortbyconditionbadtogood()\" class=\"dropdown-item\" >Condition <i class=\"fas fa-sad-tear\"></i></button>\n    </div>\n  </li>\n</ul>\n<form class=\"form-inline my-2 my-lg-0\">\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Enter book/author\" aria-label=\"Search\" [(ngModel)]=\"srch\" name=\"srch\">\n    <button class=\"btn btn-ou tline-success my-2 my-sm-0 btn-info\" type=\"submit\" (click)=\"searchbook()\">Search</button>\n  </form>\n</nav>\n</div>\n<section>\n    <div class=\"container\">\n      \n      <div  class=\"card pos\"  style=\"margin: 20px auto;border-radius: 5px;width: 80%;\" *ngFor=\"let listing of listings;even as e;odd as o;index as i\" [class.odd]=\"o\" \n      [class.even]=\"e\" >\n        <div class=\"row\" >\n          <div class=\"col-md-7\">\n            <div class=\"card-block\" style=\"margin: 10px\">\n              <h1 class=\"card-title\" style=\"margin-top: 15px\">{{listing.book}}</h1>\n              <h3 class=\"card-text\" style=\"margin-top: 15px\">{{listing.author}}</h3>\n              <h5 class=\"card-text\" style=\"margin-top: 15px\">{{listing.description}}</h5>\n              <h2 class=\"card-text\" style=\"margin-top: 15px\"><i class=\"fas fa-rupee-sign\"></i>{{listing.price}} ( {{conditions[i]}} )</h2>\n              <h5 class=\"card-text\" style=\"margin-top: 15px\">{{listing.condition}}</h5>\n              <a (click)=\"onSelect(listing)\" class=\"btn btn-primary\" style=\"margin-top: 10px;margin-left:5px; width: 180px\"><i class=\"fas fa-info \"></i> Get More Details !!!!</a>\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"card-img-bottom\">\n              <img [src]=\"listing.image\" style=\"width: 100%; height: 100%;margin: auto auto\"/>          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </section>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingComponent = /** @class */ (function () {
    function ListingComponent(_userservice, router) {
        this._userservice = _userservice;
        this.router = router;
        this.listings = [
            {
                id: 1,
                seller: 'vijay',
                book: 'christ',
                author: 'munna bhai',
                image: 'https://s3.amazonaws.com/htw/dt-contest-entries/thumbs/73803/united-kingdom-Epic-Fantasy-book-cover-design.png',
                price: 300,
                cond: 4,
                description: 'A book cover creator that saves you time. Adobe Spark is a free book cover maker that lets you craft a vision from your writing. With it, you can find a book cover template that suits your genre and style, and you can customize it until you have a sleek e-book cover thats perfect for your verbal art.'
            },
            {
                id: 111,
                seller: 'vijay',
                book: 'christ',
                author: 'munna bhai',
                image: 'https://s3.amazonaws.com/htw/dt-contest-entries/thumbs/73803/united-kingdom-Epic-Fantasy-book-cover-design.png',
                price: 300,
                cond: 4,
                description: 'A book cover creator that saves you time. Adobe Spark is a free book cover maker that lets you craft a vision from your writing. With it, you can find a book cover template that suits your genre and style, and you can customize it until you have a sleek e-book cover thats perfect for your verbal art.'
            }, {
                id: 11,
                seller: 'vijay',
                book: 'christ',
                author: 'munna bhai',
                image: 'https://s3.amazonaws.com/htw/dt-contest-entries/thumbs/73803/united-kingdom-Epic-Fantasy-book-cover-design.png',
                price: 300,
                cond: 4,
                description: 'A book cover creator that saves you time. Adobe Spark is a free book cover maker that lets you craft a vision from your writing. With it, you can find a book cover template that suits your genre and style, and you can customize it until you have a sleek e-book cover thats perfect for your verbal art.'
            },
            {
                id: 12,
                seller: 'vijay',
                book: 'christ',
                author: 'munna bhai',
                image: 'https://s3.amazonaws.com/htw/dt-contest-entries/thumbs/73803/united-kingdom-Epic-Fantasy-book-cover-design.png',
                price: 300,
                cond: 4,
                description: 'A book cover creator that saves you time. Adobe Spark is a free book cover maker that lets you craft a vision from your writing. With it, you can find a book cover template that suits your genre and style, and you can customize it until you have a sleek e-book cover thats perfect for your verbal art.'
            }
        ];
        this.srch = "";
        this.conditions = [];
    }
    ListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userservice.getalllisting().subscribe(function (alllist) {
            console.log(alllist);
            var stringify = JSON.stringify(alllist);
            _this.listings = JSON.parse(stringify);
            _this.email = _this._userservice.getemail();
            _this.updatecondition();
        });
    };
    ListingComponent.prototype.updatecondition = function () {
        for (var i = 0; i < this.listings.length; i++) {
            switch (this.listings[i].cond) {
                case 1:
                    this.conditions[i] = "Wore";
                    break;
                case 2:
                    this.conditions[i] = "Slight Damage";
                    break;
                case 3:
                    this.conditions[i] = "Almost New";
                    break;
                case 4:
                    this.conditions[i] = "New";
                    break;
                default:
                    this.conditions[i] = "Not Mentioned";
                    break;
            }
        }
    };
    ListingComponent.prototype.onSelect = function (listing) {
        console.log(listing.id);
        this.router.navigate(['/listing', listing.id]);
    };
    ListingComponent.prototype.sortbypricelowtohigh = function () {
        var _this = this;
        console.log("sort func called");
        this._userservice.getsorteddatabypricelowtohigh().subscribe(function (alllist) {
            console.log(alllist);
            var stringify = JSON.stringify(alllist);
            _this.listings = JSON.parse(stringify);
        });
    };
    ListingComponent.prototype.sortbypricehightolow = function () {
        var _this = this;
        this._userservice.getsorteddatabypricehightolow().subscribe(function (alllist) {
            console.log(alllist);
            var stringify = JSON.stringify(alllist);
            _this.listings = JSON.parse(stringify);
        });
    };
    ListingComponent.prototype.sortbyconditiongoodtobad = function () {
        var _this = this;
        this._userservice.getsorteddatabyconditiongoodtobad().subscribe(function (alllist) {
            console.log(alllist);
            var stringify = JSON.stringify(alllist);
            _this.listings = JSON.parse(stringify);
        });
    };
    ListingComponent.prototype.sortbyconditionbadtogood = function () {
        var _this = this;
        this._userservice.getsorteddatabyconditionbadtogood().subscribe(function (alllist) {
            console.log(alllist);
            var stringify = JSON.stringify(alllist);
            _this.listings = JSON.parse(stringify);
        });
    };
    ListingComponent.prototype.searchbook = function () {
        var _this = this;
        console.log(this.srch);
        this._userservice.searchbook(this.srch).subscribe(function (alllist) {
            var stringify = JSON.stringify(alllist);
            _this.listings = JSON.parse(stringify);
        });
    };
    ListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.css */ "./src/app/listing/listing.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* BASIC */\nimg{\n    margin-top: 20px;\n    margin-bottom: 20px;\n    width: 100px;\n    height: 210px;\n    border: 1px solid #d3d3d3;\n    border-radius:50%; \n}\nhtml {\n    background-color: #56baed;\n  }\nbody {\n    font-family: \"Poppins\", sans-serif;\n    height: 100vh;\n  }\nh1{\n      margin-top: 20px;\n  }\na {\n    color: #92badd;\n    display:inline-block;\n    text-decoration: none;\n    font-weight: 400;\n  }\nh2 {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display:inline-block;\n    margin: 40px 8px 10px 8px; \n    color: #cccccc;\n  }\n/* STRUCTURE */\n.wrapper {\n    display: flex;\n    align-items: center;\n    flex-direction: column; \n    justify-content: center;\n    margin-top: 5%;\n    width: 100%;\n    min-height: 100%;\n    padding: 20px;\n  }\n#formContent {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n    text-align: center;\n  }\n#formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n  }\n/* TABS */\nh2.inactive {\n    color: #cccccc;\n  }\nh2.active {\n    color: #0d0d0d;\n    border-bottom: 2px solid #5fbae9;\n  }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset]  {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    transition: all 0.3s ease-in-out;\n  }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n    background-color: #39ace7;\n  }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n  }\ninput[type=text] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\ninput[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\ninput[type=text]:placeholder {\n    color: #cccccc;\n  }\ninput[type=password] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\ninput[type=password]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\ninput[type=password]:placeholder {\n    color: #cccccc;\n  }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n    -webkit-animation-name: fadeInDown;\n    animation-name: fadeInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n  }\n@-webkit-keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n@keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fadeIn {\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n  \n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n  \n    -webkit-animation-duration:1s;\n    animation-duration:1s;\n  }\n.fadeIn.first {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n  }\n.fadeIn.second {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n  }\n.fadeIn.third {\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n  }\n.fadeIn.fourth {\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n  }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    transition: width 0.2s;\n  }\n.underlineHover:hover {\n    color: #0d0d0d;\n  }\n.underlineHover:hover:after{\n    width: 100%;\n  }\n/* OTHERS */\n*:focus {\n      outline: none;\n  }\n#icon {\n    width:60%;\n  }\n#login{\n      margin-bottom: 15px; \n  }\n#password{\n    margin-bottom: 15px; \n}\n.gradient {\n\n  /* can be treated like a fallback */\n  background-color: #A4D3EE;\n\n  /* will be \"on top\", if browser supports it */\n\n  /* these will reset other properties, like background-position, but it does know what you mean */\n  background: #A4D3EE;\n  background: linear-gradient(#A4D3EE, #87CEEB);\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <h1 class=\"fadeIn fourth\">LogIn Here</h1>\n    <div class=\"fadeIn first\">\n      <img src=\"https://i.pinimg.com/736x/e6/82/09/e682092806f42f01f23d82034f2dd671--stuff-to-buy.jpg\" id=\"icon\" alt=\"User Icon\" />\n    </div>\n    <form>\n      <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"login\" [(ngModel)]=\"email\">\n      <input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"login\" placeholder=\"password\"[(ngModel)]=\"password\">\n      <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log In\" (click)=\"verifyaccount()\">\n    </form>    \n    <div id=\"formFooter\">\n      <a class=\"underlineHover\" routerLink=\"/signup\">Don't Have Account? Create One Now!!</a>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"modal\" *ngIf=\"display\"  style=\"display: block ; \">\n    <div class=\"modal-dialog modal-dialog-centered\" >\n      <div class=\"modal-content gradient\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" >Information for you</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onclose()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          {{mymessage}}\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"onclose()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(_userservice, router) {
        this._userservice = _userservice;
        this.router = router;
        this.email = "";
        this.password = "";
        this.mymessage = "";
        this.display = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.verifyaccount = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this._userservice.verifyuser(user).subscribe(function (user) {
            _this.mymessage = user;
            _this.display = true;
        });
    };
    LoginComponent.prototype.onclose = function () {
        this.display = false;
        if (this.mymessage === 'Id Password Match Successfully') {
            this._userservice.setemail(this.email);
            console.log(this._userservice.getemail());
            this.router.navigate(['/listing']);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mylist/mylist.component.css":
/*!*********************************************!*\
  !*** ./src/app/mylist/mylist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-bottom {\n    color: #fff;\n    margin-top: 5px;\n    width: 95%;\n    height: 95%;\n  }\n  .odd{\n    /* for chrome and safari*/\n    -webkit-animation-duration: 1s;\n    -webkit-animation-name: slideout;\n  \n    /*for firefox*/\n    -moz-animation-duration: 1s;\n    -moz-animation-name: slideout;\n  \n      /* for opera*/\n    -o-animation-duration: 1s;\n    -o-animation-name: slideout;\n  \n      /* Standard syntax*/\n    animation-duration: 1s;\n    animation-name: slideout;\n  }\n  @-webkit-keyframes slideout {\n    from {\n        margin-left: -100%;\n        width: 300%;\n    }\n  \n    to {\n        margin-left: 0%;\n        width: 80%;\n    }\n  }\n  @keyframes slideout {\n    from {\n        margin-left: -100%;\n        width: 300%;\n    }\n  \n    to {\n        margin-right: 0%;\n        width: 80%;\n    }\n  }\n  .even{\n    /* for chrome and safari*/\n    -webkit-animation-duration: 1s;\n    -webkit-animation-name: slidein;\n\n    /*for firefox*/\n    -moz-animation-duration: 1s;\n    -moz-animation-name: slidein;\n\n      /* for opera*/\n    -o-animation-duration: 1s;\n    -o-animation-name: slidein;\n\n      /* Standard syntax*/\n    animation-duration: 1s;\n    animation-name: slidein;\n}\n  @-webkit-keyframes slidein {\n    from {\n        margin-left: 100%;\n        width: 300%;\n    }\n\n    to {\n        margin-left: 0%;\n        width: 80%;\n    }\n}\n  @keyframes slidein {\n    from {\n        margin-left: 100%;\n        width: 300%;\n    }\n\n    to {\n        margin-left: 0%;\n        width: 80%;\n    }\n}\n"

/***/ }),

/***/ "./src/app/mylist/mylist.component.html":
/*!**********************************************!*\
  !*** ./src/app/mylist/mylist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar [parentData]='email'></app-navbar>\n<section>\n    <div class=\"container\">\n      \n      <div class=\"card\"  style=\"margin: 20px auto;border-radius: 5px;width: 80%;\" *ngFor=\"let listing of listings;even as e;odd as o\" [class.odd]=\"o\" \n      [class.even]=\"e\" >\n        <div class=\"row\" >\n          <div class=\"col-md-7\">\n            <div class=\"card-block\" style=\"margin: 10px\">\n              <h1 class=\"card-title\" style=\"margin-top: 15px\">{{listing.book}}</h1>\n              <h3 class=\"card-text\" style=\"margin-top: 15px\">{{listing.author}}</h3>\n              <h5 class=\"card-text\" style=\"margin-top: 15px\">{{listing.description}}</h5>\n              <h2 class=\"card-text\" style=\"margin-top: 15px\">{{listing.price}}</h2>\n              <h5 class=\"card-text\" style=\"margin-top: 15px\">{{listing.condition}}</h5>\n              <a (click)=\"onremove(listing)\" class=\"btn btn-danger\" style=\"margin-top: 10px;margin-left:5px; width: 220px\"><i class=\"fas fa-info \"></i> Remove Advertisement !!!!</a>\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"card-img-bottom\">\n              <img [src]=\"listing.image\" style=\"width: 100%; height: 100%;margin: auto auto\"/></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </section>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/mylist/mylist.component.ts":
/*!********************************************!*\
  !*** ./src/app/mylist/mylist.component.ts ***!
  \********************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MylistComponent = /** @class */ (function () {
    function MylistComponent(_userservice, router) {
        this._userservice = _userservice;
        this.router = router;
        this.listings = [];
    }
    MylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userservice.getuserlisting().subscribe(function (alllist) {
            console.log(alllist);
            var stringify = JSON.stringify(alllist);
            _this.listings = JSON.parse(stringify);
        });
    };
    MylistComponent.prototype.onremove = function (listing) {
        var _this = this;
        this._userservice.removeuserlisting(listing.id).subscribe(function (mymsg) {
            console.log(mymsg);
            if (mymsg === 'Successfully removed the advertisement for this book') {
                _this._userservice.getuserlisting().subscribe(function (alllist) {
                    console.log(alllist);
                    var stringify = JSON.stringify(alllist);
                    _this.listings = JSON.parse(stringify);
                });
            }
            else {
                console.log('Error In Deleting the advertisement for this book');
            }
        });
    };
    MylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mylist',
            template: __webpack_require__(/*! ./mylist.component.html */ "./src/app/mylist/mylist.component.html"),
            styles: [__webpack_require__(/*! ./mylist.component.css */ "./src/app/mylist/mylist.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MylistComponent);
    return MylistComponent;
}());



/***/ }),

/***/ "./src/app/mymessges/mymessges.component.css":
/*!***************************************************!*\
  !*** ./src/app/mymessges/mymessges.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-bottom {\n    color: #fff;\n    margin-top: 5px;\n    width: 95%;\n    height: 95%;\n  }\n  .odd{\n    /* for chrome and safari*/\n    -webkit-animation-duration: 1s;\n    -webkit-animation-name: slideout;\n  \n    /*for firefox*/\n    -moz-animation-duration: 1s;\n    -moz-animation-name: slideout;\n  \n      /* for opera*/\n    -o-animation-duration: 1s;\n    -o-animation-name: slideout;\n  \n      /* Standard syntax*/\n    animation-duration: 1s;\n    animation-name: slideout;\n  }\n  @-webkit-keyframes slideout {\n    from {\n        margin-left: -100%;\n        width: 300%;\n    }\n  \n    to {\n        margin-left: 0%;\n        width: 80%;\n    }\n  }\n  @keyframes slideout {\n    from {\n        margin-left: -100%;\n        width: 300%;\n    }\n  \n    to {\n        margin-right: 0%;\n        width: 80%;\n    }\n  }\n  .even{\n    /* for chrome and safari*/\n    -webkit-animation-duration: 1s;\n    -webkit-animation-name: slidein;\n\n    /*for firefox*/\n    -moz-animation-duration: 1s;\n    -moz-animation-name: slidein;\n\n      /* for opera*/\n    -o-animation-duration: 1s;\n    -o-animation-name: slidein;\n\n      /* Standard syntax*/\n    animation-duration: 1s;\n    animation-name: slidein;\n}\n  @-webkit-keyframes slidein {\n    from {\n        margin-left: 100%;\n        width: 300%;\n    }\n\n    to {\n        margin-left: 0%;\n        width: 80%;\n    }\n}\n  @keyframes slidein {\n    from {\n        margin-left: 100%;\n        width: 300%;\n    }\n\n    to {\n        margin-left: 0%;\n        width: 80%;\n    }\n}\n"

/***/ }),

/***/ "./src/app/mymessges/mymessges.component.html":
/*!****************************************************!*\
  !*** ./src/app/mymessges/mymessges.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<section>\n    <div class=\"container\">\n      \n      <div class=\"card\"  style=\"margin: 20px auto;border-radius: 5px;width: 80%;\" *ngFor=\"let listing of listings;even as e;odd as o\" [class.odd]=\"o\" \n      [class.even]=\"e\" >\n        <div class=\"row\" >\n          <div class=\"col-md-7\">\n            <div class=\"card-block\" style=\"margin: 10px\">\n              <h1 class=\"card-title\" style=\"margin-top: 15px\">{{listing.book}}</h1>\n              <h3 class=\"card-text\" style=\"margin-top: 15px\">{{listing.author}}</h3>\n              <h5 class=\"card-text\" style=\"margin-top: 15px\">{{listing.description}}</h5>\n              <h2 class=\"card-text\" style=\"margin-top: 15px\">{{listing.price}}</h2>\n              <h5 class=\"card-text\" style=\"margin-top: 15px\">{{listing.condition}}</h5>\n              <a (click)=\"onSelect(listing)\" class=\"btn btn-primary\" style=\"margin-top: 10px;margin-left:5px; width: 180px\"><i class=\"fas fa-info \"></i>See Messages</a>\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"card-img-bottom\">\n              <img [src]=\"listing.image\" style=\"width: 100%; height: 100%;margin: auto auto\"/></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </section>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/mymessges/mymessges.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mymessges/mymessges.component.ts ***!
  \**************************************************/
/*! exports provided: MymessgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymessgesComponent", function() { return MymessgesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MymessgesComponent = /** @class */ (function () {
    function MymessgesComponent(_userservice, router) {
        this._userservice = _userservice;
        this.router = router;
        this.listings = [
            {
                id: 1,
                seller: 'vijay',
                book: 'christ',
                author: 'munna bhai',
                image: 'https://s3.amazonaws.com/htw/dt-contest-entries/thumbs/73803/united-kingdom-Epic-Fantasy-book-cover-design.png',
                price: 300,
                cond: 4,
                description: 'A book cover creator that saves you time. Adobe Spark is a free book cover maker that lets you craft a vision from your writing. With it, you can find a book cover template that suits your genre and style, and you can customize it until you have a sleek e-book cover thats perfect for your verbal art.'
            },
            {
                id: 111,
                seller: 'vijay',
                book: 'christ',
                author: 'munna bhai',
                image: 'https://s3.amazonaws.com/htw/dt-contest-entries/thumbs/73803/united-kingdom-Epic-Fantasy-book-cover-design.png',
                price: 300,
                cond: 4,
                description: 'A book cover creator that saves you time. Adobe Spark is a free book cover maker that lets you craft a vision from your writing. With it, you can find a book cover template that suits your genre and style, and you can customize it until you have a sleek e-book cover thats perfect for your verbal art.'
            }, {
                id: 11,
                seller: 'vijay',
                book: 'christ',
                author: 'munna bhai',
                image: 'https://s3.amazonaws.com/htw/dt-contest-entries/thumbs/73803/united-kingdom-Epic-Fantasy-book-cover-design.png',
                price: 300,
                cond: 4,
                description: 'A book cover creator that saves you time. Adobe Spark is a free book cover maker that lets you craft a vision from your writing. With it, you can find a book cover template that suits your genre and style, and you can customize it until you have a sleek e-book cover thats perfect for your verbal art.'
            },
            {
                id: 12,
                seller: 'vijay',
                book: 'christ',
                author: 'munna bhai',
                image: 'https://s3.amazonaws.com/htw/dt-contest-entries/thumbs/73803/united-kingdom-Epic-Fantasy-book-cover-design.png',
                price: 300,
                cond: 4,
                description: 'A book cover creator that saves you time. Adobe Spark is a free book cover maker that lets you craft a vision from your writing. With it, you can find a book cover template that suits your genre and style, and you can customize it until you have a sleek e-book cover thats perfect for your verbal art.'
            }
        ];
    }
    MymessgesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userservice.getuserlisting().subscribe(function (alllist) {
            console.log(alllist);
            var stringify = JSON.stringify(alllist);
            _this.listings = JSON.parse(stringify);
        });
    };
    MymessgesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mymessges',
            template: __webpack_require__(/*! ./mymessges.component.html */ "./src/app/mymessges/mymessges.component.html"),
            styles: [__webpack_require__(/*! ./mymessges.component.css */ "./src/app/mymessges/mymessges.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MymessgesComponent);
    return MymessgesComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light \" style=\"background-color: #b6865f\">\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-book-open\"></i>    1/2 Price Books</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n              <a class=\"nav-link select\" routerLink=\"/about\" routerLinkActive=\"active\"><i class=\"fas fa-info\"></i>  about <span class=\"sr-only\">(current)</span></a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link select\" routerLink=\"/listing\" routerLinkActive=\"active\"><i class=\"fas fa-ellipsis-v\"></i>  Listings <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link select\" routerLink=\"/addlisting\" routerLinkActive=\"active\"><i class=\"fas fa-ellipsis-v\"></i>  Add List <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link select\" routerLink=\"/viewlist\" routerLinkActive=\"active\"><i class=\"fas fa-ellipsis-v\"></i>  Manage List <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/mymessages\" routerLinkActive=\"active\"><i class=\"fas fa-comments\"></i>    Messages</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/mywishlist\" routerLinkActive=\"active\"><i class=\"fas fa-heart fa-spin\"></i>    WishList</a>\n          </li>\n          \n         \n          \n      </ul>\n      <span style=\"margin-left: auto\">\n          <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link select\" routerLink=\"/login\" routerLinkActive=\"active\"><i class=\"fas fa-user\"></i> Log Out <span class=\"sr-only\">(current)</span></a>\n                </li>\n            </ul>\n          </span>\n     </div>\n      \n    \n  </nav>\n \n"

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
    function NavbarComponent() {
        this.email = this.parentData;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "parentData", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  padding: 0;\n  margin: 0;\n  font-family: 'Oxygen', sans-serif;\n}\n.error-wall{\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  text-align: center;\n}\n.load-error{\n    background-color: #f3785e;\n  }\n.matinence{\n    background-color: #a473b1;\n  }\nmissing-page{\n    background-color: #00bbc6;\n  }\n.error-container{\n    display: block;\n    width: 100%;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%,-50%);\n    -moz-transform: translate(-50%,-50%);\n  }\nh1{\n      color: #fff;\n      font-size: 80px;\n      margin: 0;\n      max-width: 850px;\n        font-size: 65px;\n    }\nh3{\n      color: #464444;\n      font-size: 34px;\n      margin: 0;\n      max-width: 850px;\n      font-size: 25px;\n    }\nh4{\n      margin: 0;\n      color: #fff;\n      font-size: 40px;\n      max-width: 850px;\n        font-size: 35px;\n    }\np{\n      font-size: 15px;\n    }\nfirst-of-type{\n        color: #464444;\n        font-weight: lighter;\n}\n:nth-of-type(2){\n        color: #464444;\n        font-weight: bold\n      }\n.type-white{\n        color: #fff;\n        max-width: 850px;\n        font-size: 12px;\n        max-width: 390px;\n        font-size: 10px;\n      }"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-wall load-error\">\n  <div class=\"error-container\">\n    <h1>oh no...</h1>\n    <h3>We have had an error</h3>\n    <h4>Error 404</h4>\n    <p>Sorry...please check back (click refresh) in just a moment.</p>\n    <p>Perhaps You Had Visited a Wrong Link <br> Please Try again with the correct link.<br> Or Email at customerservices0419@gmail.com</p>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* BASIC */\ni{\n  margin-right: 8px;\n}\nhtml {\n    background-color: #56baed;\n  }\nbody {\n    font-family: \"Poppins\", sans-serif;\n    height: 100vh;\n    \n  }\nh1{\n      margin-top: 20px;\n  }\na {\n    color: #92badd;\n    display:inline-block;\n    text-decoration: none;\n    font-weight: 400;\n  }\nh2 {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display:inline-block;\n    margin: 40px 8px 10px 8px; \n    color: #cccccc;\n  }\n/* STRUCTURE */\n.wrapper {\n    display: flex;\n    align-items: center;\n    flex-direction: column; \n    justify-content: center;\n    margin-top: 5%;\n    width: 100%;\n    min-height: 100%;\n    padding: 20px;\n  }\n#formContent {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 10px;\n    width: 90%;\n    max-width: 600px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n    text-align: center;\n  }\n#formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n  }\n/* TABS */\nh2.inactive {\n    color: #cccccc;\n  }\nh2.active {\n    color: #0d0d0d;\n    border-bottom: 2px solid #5fbae9;\n  }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset]  {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    transition: all 0.3s ease-in-out;\n  }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n    background-color: #39ace7;\n  }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n  }\ninput[type=text] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 65%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\ninput[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\ninput[type=text]:placeholder {\n    color: #cccccc;\n  }\ninput[type=email] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 65%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\ninput[type=email]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\ninput[type=email]:placeholder {\n    color: #cccccc;\n  }\ninput[type=number] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 65%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\ninput[type=number]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\ninput[type=number]:placeholder {\n    color: #cccccc;\n  }\ninput[type=password] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 65%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\ninput[type=password]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\ninput[type=password]:placeholder {\n    color: #cccccc;\n  }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n    -webkit-animation-name: fadeInDown;\n    animation-name: fadeInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n  }\n@-webkit-keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n@keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fadeIn {\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n  \n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n  \n    -webkit-animation-duration:1s;\n    animation-duration:1s;\n  }\n.fadeIn.first {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n  }\n.fadeIn.second {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n  }\n.fadeIn.third {\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n  }\n.fadeIn.fourth {\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n  }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    transition: width 0.2s;\n  }\n.underlineHover:hover {\n    color: #0d0d0d;\n  }\n.underlineHover:hover:after{\n    width: 100%;\n  }\n/* OTHERS */\n*:focus {\n      outline: none;\n  }\n#icon {\n    width:60%;\n  }\n#login{\n      margin-bottom: 15px; \n  }\n#password{\n    margin-bottom: 15px; \n}\n.gradient {\n\n  /* can be treated like a fallback */\n  background-color: #A4D3EE;\n\n  /* will be \"on top\", if browser supports it */\n\n  /* these will reset other properties, like background-position, but it does know what you mean */\n  background: #A4D3EE;\n  background: linear-gradient(#A4D3EE, #87CEEB);\n\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <h1 class=\"fadeIn fourth\">SignUp Here</h1>\n    <form>\n     <i class=\"fas fa-user fa-2x\"></i><input type=\"text\" [(ngModel)]=\"name\" id=\"name\" class=\"fadeIn second\" name=\"name\" placeholder=\"Name\" >\n     <p></p>\n     <i class=\"fas fa-envelope fa-2x\"></i><input type=\"email\" [(ngModel)]=\"email\" id=\"emailaddress\" class=\"fadeIn third\" name=\"email\" placeholder=\"Email Address\" required >\n     <p></p>\n     <i class=\"fas fa-building fa-2x\"></i><input type=\"text\" id=\"college\" [(ngModel)]=\"college\" class=\"fadeIn second\" name=\"college\" placeholder=\"College\" required >\n     <p></p>\n     <i class=\"fas fa-map-marker-alt fa-2x\"></i><input type=\"text\" id=\"address\" [(ngModel)]=\"address\" class=\"fadeIn third\" name=\"address\" placeholder=\"Address\" required >\n     <p></p>\n     <i class=\"fas fa-phone fa-rotate-180 fa-2x\"></i><input type=\"number\" id=\"phonenumber\" [(ngModel)]=\"phonenumber\" class=\"fadeIn second\" name=\"phonenumber\" placeholder=\"Phone Number\" required >\n     <p></p>\n     <i class=\"fas fa-key fa-2x\"></i><input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" required >\n     <input type=\"submit\" class=\"fadeIn fourth\"  (click)=\"signup()\" value=\"SignUp\" >\n    </form>    \n    <div id=\"formFooter\">\n      <a class=\"underlineHover\" routerLink=\"/login\">Already Have Account? LogIn Here !!!</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" *ngIf=\"display\"  style=\"display: block ; \">\n    <div class=\"modal-dialog modal-dialog-centered\" >\n      <div class=\"modal-content gradient\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" >Information for you</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onclose()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          {{mymessage}}\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"onclose()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
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
    function SignupComponent(_userservice, router) {
        this._userservice = _userservice;
        this.router = router;
        this.name = "";
        this.email = "";
        this.college = "";
        this.address = "";
        this.password = "";
        this.mymessage = "";
        this.display = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        console.log(this.name + "--" + this.email + "--" + this.college + "--" + this.address + "--" + this.password + "--" + this.phonenumber);
        var user = {
            name: this.name,
            email: this.email,
            college: this.college,
            address: this.address,
            phonenumber: this.phonenumber,
            password: this.password
        };
        this._userservice.adduser(user).subscribe(function (mymsg) {
            _this.mymessage = mymsg;
            _this.display = true;
        });
    };
    SignupComponent.prototype.onclose = function () {
        this.display = false;
        if (this.mymessage === 'successfully added new user') {
            this.router.navigate(['/login']);
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/specific-listing/specific-listing.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/specific-listing/specific-listing.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    padding-top: 54px;\n    background-color: aliceblue\n  }\n  \n  @media (min-width: 992px) {\n    body {\n      padding-top: 56px;\n    }\n  }\n  \n  .modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n  \n  /* Modal Content */\n  \n  .modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%;\n}\n  \n  /* The Close Button */\n  \n  .close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n  \n  .close:hover,\n.close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n  \n  .gradient {\n\n    /* can be treated like a fallback */\n    background-color: #A4D3EE;\n  \n    /* will be \"on top\", if browser supports it */\n  \n    /* these will reset other properties, like background-position, but it does know what you mean */\n    background: #A4D3EE;\n    background: linear-gradient(#A4D3EE, #87CEEB);\n}  "

/***/ }),

/***/ "./src/app/specific-listing/specific-listing.component.html":
/*!******************************************************************!*\
  !*** ./src/app/specific-listing/specific-listing.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" style=\"background-color: #E9F4FB; padding: 40px; margin: 20px auto;border-radius:15px \">\n\n    <h1 class=\"my-4\">{{listitem.book}}\n      <small>({{listitem.author}})</small>\n    </h1>\n\n    <div class=\"row\">\n\n      <div class=\"col-md-8\">\n        <img class=\"img-fluid\" [src]=\"listitem.image\" alt=\"\">\n      </div>\n\n      <div class=\"col-md-4\">\n        <h6 class=\"my-3\">{{listitem.description}}</h6>\n        <h4 class=\"my-4\">{{sellerinfo.name}}</h4>\n        <h5><i class=\"fas fa-mobile-alt fa-spin\"></i>   ({{sellerinfo.phonenumber}})</h5>\n        <h2 class=\"my-3\"><i class=\"fas fa-rupee-sign\"></i> {{listitem.price}} ({{condition}})</h2>\n        \n        <button class=\"btn btn-primary btn-sm\" style=\"margin: 5px\" (click)=\"addtowishlist()\" ><i class=\"fas fa-heart fa-spin\" ></i>  Add To WishList</button>\n        <button class=\"btn btn-primary  btn-sm\" style=\"margin: 5px\" (click)=\"chat()\"><i class=\"fas fa-comment \" ></i>  Chat With Seller</button>\n      </div>\n      \n    </div>\n  </div>\n  <div>\n  <div id=\"myModal\" class=\"modal\"  *ngIf=\"show\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n      <span class=\"close\" (click)=\"cancel()\">&times;</span>\n      <h3>Enter Your Message Here</h3>\n      <textarea rows=\"2\" cols=\"20\" [(ngModel)]=\"msgtosend\">\n        </textarea>\n        <div *ngIf=\"displayreport\"  style=\"display: block ; \">\n            <h5>{{submsg}}</h5>\n        </div>\n        <div style=\"margin-top: 10px\">\n\n        <button  class=\"btn btn-danger btn-md close\" (click)=\"cancel()\" style=\"height:50px ;width: 20%;margin-left: 15%;margin-right: 15%; float: left\">Cancel <i class=\"fas fa-ban\"></i></button>\n        <button class=\"btn btn-success close\" (click)=\"sendmsg()\" style=\"height:50px ;width: 20%;margin-left: 15%;margin-right: 15%; float: left\">Send <i class=\"fas fa-step-forward\"></i></button>\n        </div>\n    </div>\n  \n  </div>\n  <div class=\"modal\" *ngIf=\"display\"  style=\"display: block ; \">\n      <div class=\"modal-dialog modal-dialog-centered\" >\n        <div class=\"modal-content gradient\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" >Information for you</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onclose()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            {{mymessage}}\n          </div>\n          \n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"onclose()\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/specific-listing/specific-listing.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/specific-listing/specific-listing.component.ts ***!
  \****************************************************************/
/*! exports provided: SpecificListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificListingComponent", function() { return SpecificListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpecificListingComponent = /** @class */ (function () {
    function SpecificListingComponent(_userservice, route, router) {
        this._userservice = _userservice;
        this.route = route;
        this.router = router;
        this.show = false;
        this.msgtosend = "";
        this.mymessage = "";
        this.display = false;
        this.msgreport = "";
        this.displayreport = false;
        this.submsg = "";
        this.listitem = {
            id: 1,
            seller: 'vijay',
            book: 'christ',
            author: 'munna bhai',
            image: 'https://s3.amazonaws.com/htw/dt-contest-entries/thumbs/73803/united-kingdom-Epic-Fantasy-book-cover-design.png',
            price: 300,
            cond: 4,
            description: 'A book cover creator that saves you time. Adobe Spark is a free book cover maker that lets you craft a vision from your writing. With it, you can find a book cover template that suits your genre and style, and you can customize it until you have a sleek e-book cover thats perfect for your verbal art.'
        };
        this.condition = "";
        this.sellerinfo = {};
    }
    SpecificListingComponent.prototype.ngOnInit = function () {
        // Snapshot will not work if we redirect to the same component
        // let book= this.route.snapshot.paramMap.get('book');
        // console.log(book);
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            console.log(id);
            _this.myid = id;
            _this._userservice.getlistingbyid(id).subscribe(function (alllist) {
                console.log(alllist);
                var stringify = JSON.stringify(alllist);
                var listings = JSON.parse(stringify);
                _this.listitem = listings[0];
                console.log(_this.listitem.seller);
                switch (_this.listitem.cond) {
                    case 1:
                        _this.condition = "Wore";
                        break;
                    case 2:
                        _this.condition = "Slight Damage";
                        break;
                    case 3:
                        _this.condition = "Almost New";
                        break;
                    case 4:
                        _this.condition = "New";
                        break;
                    default:
                        _this.condition = "Not Mentioned";
                        break;
                }
                _this._userservice.getuserbyid(_this.listitem.seller).subscribe(function (alllist) {
                    console.log(alllist);
                    var stringify = JSON.stringify(alllist);
                    var sellers = JSON.parse(stringify);
                    _this.sellerinfo = sellers[0];
                });
            });
        });
    };
    SpecificListingComponent.prototype.addtowishlist = function () {
        var _this = this;
        console.log("method called");
        this._userservice.addtowishlist(this.listitem.id).subscribe(function (mymsg) {
            _this.mymessage = mymsg;
            _this.display = true;
            console.log(mymsg);
        });
    };
    SpecificListingComponent.prototype.onclose = function () {
        this.display = false;
        if (this.mymessage === 'Id Password Match Successfully') {
            console.log(this._userservice.getemail());
            this.router.navigate(['/listing']);
        }
    };
    SpecificListingComponent.prototype.chat = function () {
        console.log("msg");
        this.cancel();
    };
    SpecificListingComponent.prototype.sendmsg = function () {
        var _this = this;
        this.displayreport = true;
        console.log(this.msgtosend);
        this._userservice.sendmsg(this.listitem.id, this.listitem.seller, this.msgtosend).subscribe(function (mymsg) {
            console.log(mymsg);
            _this.submsg = mymsg;
            _this.mymessage = "";
            // this.cancel();
        });
    };
    SpecificListingComponent.prototype.cancel = function () {
        this.displayreport = false;
        this.submsg = "";
        this.show = !this.show;
        this.msgtosend = "";
    };
    SpecificListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-specific-listing',
            template: __webpack_require__(/*! ./specific-listing.component.html */ "./src/app/specific-listing/specific-listing.component.html"),
            styles: [__webpack_require__(/*! ./specific-listing.component.css */ "./src/app/specific-listing/specific-listing.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SpecificListingComponent);
    return SpecificListingComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = "http://localhost:4444";
        this.myemail = "";
    }
    UserService.prototype.setemail = function (email) {
        this.myemail = email;
    };
    UserService.prototype.getemail = function () {
        return this.myemail;
    };
    UserService.prototype.adduser = function (user) {
        var obj = { user: user };
        var myurl = this.url + "/adduser";
        return this.http.post(myurl, obj, httpOptions);
    };
    UserService.prototype.verifyuser = function (user) {
        var myurl = this.url + "/verifyuser?email=" + user.email + "&password=" + user.password;
        return this.http.get(myurl);
    };
    UserService.prototype.addnewbookitem = function (list) {
        var obj = { list: list };
        var myurl = this.url + "/addlisting";
        return this.http.post(myurl, obj, httpOptions);
    };
    UserService.prototype.getalllisting = function () {
        var myurl = this.url + "/getalllisting";
        return this.http.get(myurl);
    };
    UserService.prototype.getsorteddatabypricelowtohigh = function () {
        var myurl = this.url + "/sortbypricelowtohigh";
        return this.http.get(myurl);
    };
    UserService.prototype.getsorteddatabypricehightolow = function () {
        var myurl = this.url + "/sortbypricehightolow";
        return this.http.get(myurl);
    };
    UserService.prototype.getsorteddatabyconditiongoodtobad = function () {
        var myurl = this.url + "/sortbyconditiongoodtobad";
        return this.http.get(myurl);
    };
    UserService.prototype.getsorteddatabyconditionbadtogood = function () {
        var myurl = this.url + "/sortbyconditionbadtogood";
        return this.http.get(myurl);
    };
    UserService.prototype.searchbook = function (search) {
        var myurl = this.url + "/searchbook?search=" + search;
        return this.http.get(myurl);
    };
    UserService.prototype.getuserlisting = function () {
        var myurl = this.url + "/getuserlisting?user=" + this.getemail();
        return this.http.get(myurl);
    };
    UserService.prototype.removeuserlisting = function (id) {
        var myurl = this.url + "/removebook?id=" + id;
        return this.http.get(myurl);
    };
    UserService.prototype.getlistingbyid = function (id) {
        var myurl = this.url + "/getbook?id=" + id;
        return this.http.get(myurl);
    };
    UserService.prototype.addtowishlist = function (bookid) {
        var userid = this.getemail();
        var myvalue = {
            userid: userid,
            bookid: bookid
        };
        var obj = { wish: myvalue };
        var myurl = this.url + "/addtowishlist";
        return this.http.post(myurl, obj, httpOptions);
    };
    UserService.prototype.getmywishlist = function () {
        var userid = this.getemail();
        var myurl = this.url + "/mywishlist?user=" + userid;
        return this.http.get(myurl);
    };
    UserService.prototype.removefromwishlist = function (bookid, userid) {
        var data = {
            bookid: bookid,
            userid: userid
        };
        var obj = { data: data };
        var myurl = this.url + "/removefromwishlist";
        return this.http.post(myurl, obj, httpOptions);
    };
    UserService.prototype.sendmsg = function (id, seller, msg) {
        var data = {
            id: id,
            receiver: seller,
            msg: msg,
            sender: this.getemail()
        };
        var obj = { data: data };
        var myurl = this.url + "/sendmsg";
        return this.http.post(myurl, obj, httpOptions);
    };
    UserService.prototype.getuserbyid = function (seller) {
        var userid = seller;
        var myurl = this.url + "/getuser?user=" + userid;
        return this.http.get(myurl);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar [parentData]='email'></app-navbar>\n<section>\n    <div class=\"container\">\n        <div class=\"card\"  style=\"margin: 20px auto;border-radius: 5px;width: 80%;\" *ngFor=\"let listing of listings;even as e;odd as o\" [class.odd]=\"o\" [class.even]=\"e\" >\n            <div class=\"row\" >\n                <div class=\"col-md-7\">\n                    <div class=\"card-block\" style=\"margin: 10px\">\n                        <h1 class=\"card-title\" style=\"margin-top: 15px\">{{listing.book}}</h1>\n                        <h3 class=\"card-text\" style=\"margin-top: 15px\">{{listing.author}}</h3>\n                        <h5 class=\"card-text\" style=\"margin-top: 15px\">{{listing.description}}</h5>\n                        <h2 class=\"card-text\" style=\"margin-top: 15px\">{{listing.price}}</h2>\n                        <h5 class=\"card-text\" style=\"margin-top: 15px\">{{listing.condition}}</h5>\n                        <a (click)=\"remove(listing)\" class=\"btn btn-primary\" style=\"margin-top: 10px;margin-left:5px; width: 180px\"><i class=\"fas fa-info \"></i> Remove</a>\n                    </div>\n                </div>\n                  <div class=\"col-md-5\">\n                      <div class=\"card-img-bottom\">\n                          <img [src]=\"listing.image\" style=\"width: 100%; height: 100%;margin: auto auto\"/> \n                      </div>\n                  </div>\n            </div>\n        </div>\n    </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(_userservice, router) {
        this._userservice = _userservice;
        this.router = router;
        this.listings = [];
        this.email = '';
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userservice.getmywishlist().subscribe(function (alllist) {
            console.log(alllist);
            var stringify = JSON.stringify(alllist);
            _this.listings = JSON.parse(stringify);
            _this.email = _this._userservice.getemail();
        });
    };
    WishlistComponent.prototype.remove = function (listing) {
        var _this = this;
        console.log("frontend");
        var bookid = listing.id;
        var userid = this._userservice.getemail();
        this._userservice.removefromwishlist(bookid, userid).subscribe(function (mymsg) {
            console.log(mymsg);
            if (mymsg === 'successfully removed from wishlist') {
                _this.router.navigate(['/listing']);
            }
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WishlistComponent);
    return WishlistComponent;
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

module.exports = __webpack_require__(/*! /Users/vijaygarg/Desktop/final project/BookResselerFrontEnd/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map