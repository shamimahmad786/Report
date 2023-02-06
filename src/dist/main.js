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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pgi_web_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pgi-web/home/home.component */ "./src/app/pgi-web/home/home.component.ts");
/* harmony import */ var _pgi_web_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pgi-web/about/about.component */ "./src/app/pgi-web/about/about.component.ts");
/* harmony import */ var _pgi_web_national_findings_national_findings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pgi-web/national-findings/national-findings.component */ "./src/app/pgi-web/national-findings/national-findings.component.ts");
/* harmony import */ var _pgi_web_domain_domain_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pgi-web/domain/domain.component */ "./src/app/pgi-web/domain/domain.component.ts");
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/state.component */ "./src/app/state/state.component.ts");
/* harmony import */ var _pgi_web_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pgi-web/indicators/indicators.component */ "./src/app/pgi-web/indicators/indicators.component.ts");
/* harmony import */ var _pgi_web_pgi_web_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pgi-web/pgi-web.component */ "./src/app/pgi-web/pgi-web.component.ts");
/* harmony import */ var _pgi_admin_pgi_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pgi-admin/pgi-admin.component */ "./src/app/pgi-admin/pgi-admin.component.ts");
/* harmony import */ var _pgi_admin_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pgi-admin/login/login.component */ "./src/app/pgi-admin/login/login.component.ts");
/* harmony import */ var _pgi_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pgi-admin/admin-home/admin-home.component */ "./src/app/pgi-admin/admin-home/admin-home.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _pgi_admin_admin_home_manage_records_manage_records_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pgi-admin/admin-home/manage-records/manage-records.component */ "./src/app/pgi-admin/admin-home/manage-records/manage-records.component.ts");















var routes = [
    {
        path: '', component: _pgi_web_pgi_web_component__WEBPACK_IMPORTED_MODULE_9__["PgiWebComponent"], children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: _pgi_web_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'about/:id', component: _pgi_web_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
            { path: 'national-findings', component: _pgi_web_national_findings_national_findings_component__WEBPACK_IMPORTED_MODULE_5__["NationalFindingsComponent"] },
            { path: 'domain/:id', component: _pgi_web_domain_domain_component__WEBPACK_IMPORTED_MODULE_6__["DomainComponent"] },
            { path: 'state/:sId', component: _state_state_component__WEBPACK_IMPORTED_MODULE_7__["StateComponent"] },
            { path: 'indicators', component: _pgi_web_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_8__["IndicatorsComponent"] },
        ]
    },
    { path: 'sandbox', component: _pgi_admin_pgi_admin_component__WEBPACK_IMPORTED_MODULE_10__["PgiAdminComponent"], children: [
            { path: '', component: _pgi_admin_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
            { path: 'home', component: _pgi_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_12__["AdminHomeComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]], children: [
                    { path: '', component: _pgi_admin_admin_home_manage_records_manage_records_component__WEBPACK_IMPORTED_MODULE_14__["ManageRecordsComponent"] }
                ] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(spinner) {
        this.spinner = spinner;
        this.title = 'PGI';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.spinner.show();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this.spinner.hide();
        // }, 2000);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pgi_web_pgi_web_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pgi-web/pgi-web.component */ "./src/app/pgi-web/pgi-web.component.ts");
/* harmony import */ var _pgi_admin_pgi_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pgi-admin/pgi-admin.component */ "./src/app/pgi-admin/pgi-admin.component.ts");
/* harmony import */ var _pgi_web_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pgi-web/header/header.component */ "./src/app/pgi-web/header/header.component.ts");
/* harmony import */ var _pgi_web_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pgi-web/footer/footer.component */ "./src/app/pgi-web/footer/footer.component.ts");
/* harmony import */ var _pgi_web_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pgi-web/home/home.component */ "./src/app/pgi-web/home/home.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _pgi_web_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pgi-web/about/about.component */ "./src/app/pgi-web/about/about.component.ts");
/* harmony import */ var _pgi_web_about_conclusions_conclusions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pgi-web/about/conclusions/conclusions.component */ "./src/app/pgi-web/about/conclusions/conclusions.component.ts");
/* harmony import */ var _pgi_web_about_catalysing_catalysing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pgi-web/about/catalysing/catalysing.component */ "./src/app/pgi-web/about/catalysing/catalysing.component.ts");
/* harmony import */ var _pgi_web_about_methodology_methodology_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pgi-web/about/methodology/methodology.component */ "./src/app/pgi-web/about/methodology/methodology.component.ts");
/* harmony import */ var _pgi_web_national_findings_national_findings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pgi-web/national-findings/national-findings.component */ "./src/app/pgi-web/national-findings/national-findings.component.ts");
/* harmony import */ var _pgi_web_domain_domain_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pgi-web/domain/domain.component */ "./src/app/pgi-web/domain/domain.component.ts");
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./state/state.component */ "./src/app/state/state.component.ts");
/* harmony import */ var _pipes_safe_svg_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/safe-svg.pipe */ "./src/app/pipes/safe-svg.pipe.ts");
/* harmony import */ var _pgi_web_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pgi-web/indicators/indicators.component */ "./src/app/pgi-web/indicators/indicators.component.ts");
/* harmony import */ var _directives_loadbanner_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/loadbanner.directive */ "./src/app/directives/loadbanner.directive.ts");
/* harmony import */ var _pgi_admin_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pgi-admin/login/login.component */ "./src/app/pgi-admin/login/login.component.ts");
/* harmony import */ var _pgi_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pgi-admin/admin-home/admin-home.component */ "./src/app/pgi-admin/admin-home/admin-home.component.ts");
/* harmony import */ var _pgi_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pgi-admin/navigation/navigation.component */ "./src/app/pgi-admin/navigation/navigation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_httpReqInterceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./interceptors/httpReqInterceptor */ "./src/app/interceptors/httpReqInterceptor.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pgi_admin_admin_home_manage_records_manage_records_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pgi-admin/admin-home/manage-records/manage-records.component */ "./src/app/pgi-admin/admin-home/manage-records/manage-records.component.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pgi_web_pgi_web_component__WEBPACK_IMPORTED_MODULE_7__["PgiWebComponent"],
                _pgi_web_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _pgi_web_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _pgi_web_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _pgi_web_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _pgi_web_about_conclusions_conclusions_component__WEBPACK_IMPORTED_MODULE_15__["ConclusionsComponent"],
                _pgi_web_about_catalysing_catalysing_component__WEBPACK_IMPORTED_MODULE_16__["CatalysingComponent"],
                _pgi_web_about_methodology_methodology_component__WEBPACK_IMPORTED_MODULE_17__["MethodologyComponent"],
                _pgi_web_national_findings_national_findings_component__WEBPACK_IMPORTED_MODULE_18__["NationalFindingsComponent"],
                _pgi_web_domain_domain_component__WEBPACK_IMPORTED_MODULE_19__["DomainComponent"],
                _state_state_component__WEBPACK_IMPORTED_MODULE_20__["StateComponent"],
                _pipes_safe_svg_pipe__WEBPACK_IMPORTED_MODULE_21__["SafeSvgPipe"],
                _pgi_web_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_22__["IndicatorsComponent"],
                _pgi_admin_pgi_admin_component__WEBPACK_IMPORTED_MODULE_8__["PgiAdminComponent"],
                _directives_loadbanner_directive__WEBPACK_IMPORTED_MODULE_23__["LoadbannerDirective"],
                _pgi_admin_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _pgi_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_25__["AdminHomeComponent"],
                _pgi_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_26__["NavigationComponent"],
                _pgi_admin_admin_home_manage_records_manage_records_component__WEBPACK_IMPORTED_MODULE_30__["ManageRecordsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HTTP_INTERCEPTORS"], useClass: _interceptors_httpReqInterceptor__WEBPACK_IMPORTED_MODULE_28__["HttpReqInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/loadbanner.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/loadbanner.directive.ts ***!
  \****************************************************/
/*! exports provided: LoadbannerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadbannerDirective", function() { return LoadbannerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadbannerDirective = /** @class */ (function () {
    function LoadbannerDirective(el) {
        this.el = el;
    }
    LoadbannerDirective.prototype.ngOnInit = function () {
        var img = this.el.nativeElement.getAttribute('data-src');
        this.el.nativeElement.setAttribute('src', img);
    };
    LoadbannerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appLoadBanner]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], LoadbannerDirective);
    return LoadbannerDirective;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (user) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/interceptors/httpReqInterceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/httpReqInterceptor.ts ***!
  \****************************************************/
/*! exports provided: HttpReqInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpReqInterceptor", function() { return HttpReqInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_signature_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/signature-util.service */ "./src/app/services/signature-util.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);





var HttpReqInterceptor = /** @class */ (function () {
    function HttpReqInterceptor(signatureUtil) {
        this.signatureUtil = signatureUtil;
    }
    HttpReqInterceptor.prototype.intercept = function (request, next) {
        console.log('Request Interceptor');
        var timeStamp = new Date().getTime() + '';
        var plainCreds = '';
        // add authorization header with jwt token if available
        // let currentUser = this.authenticationService.getLoggedIn();
        if (request.url.includes('/users/')) {
            plainCreds = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user_service_user + timeStamp + "-" + crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user_service_pass, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].encr_pass);
        }
        else if (request.url.includes('/locations/')) {
            plainCreds = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].loc_service_user + timeStamp + "-" + crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].loc_service_pass, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].encr_pass);
        }
        else if (request.url.includes('/pgiApp/')) {
            plainCreds = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pgi_service_user + timeStamp + "-" + crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pgi_service_pass, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].encr_pass);
        }
        request = request.clone({
            setHeaders: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + btoa(plainCreds),
                timestamp: timeStamp,
                signature: this.signatureUtil.getSignature(request.body.url, request.body.param, request.body.recordId, request.body.clientIPAddress, timeStamp, request.body)
            }
        });
        console.log(request);
        return next.handle(request);
    };
    HttpReqInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signature_util_service__WEBPACK_IMPORTED_MODULE_2__["SignatureUtilService"]])
    ], HttpReqInterceptor);
    return HttpReqInterceptor;
}());



/***/ }),

/***/ "./src/app/pgi-admin/admin-home/admin-home.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pgi-admin/admin-home/admin-home.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  position: fixed;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 3;\r\n  height: 74px;\r\n  background-color: #fff;\r\n  padding: 5px 0;\r\n  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.28);\r\n}\r\n\r\nmain {\r\n    position: relative;\r\n    z-index: 2;\r\n    padding-top: 74px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBnaS1hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsK0NBQStDO0FBQ2pEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7RUFDbkIiLCJmaWxlIjoicGdpLWFkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMztcclxuICBoZWlnaHQ6IDc0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcGFkZGluZy10b3A6IDc0cHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pgi-admin/admin-home/admin-home.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pgi-admin/admin-home/admin-home.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <mat-toolbar>\n    <mat-toolbar-row>\n      <img src=\"assets/images/mhrd-logo.png\" alt=\"MHRD\" class=\"img-fluid\">\n      <img src=\"assets/images/pgi-logo.png\" alt=\"PGI\" class=\"img-fluid ml-auto h-75\">\n    </mat-toolbar-row>\n  </mat-toolbar>\n</header>\n\n<main class=\"h-100 w-100 d-flex position-fixed\">\n  <mat-sidenav-container class=\"w-100\">\n    <mat-sidenav mode=\"side\" opened class=\"bg-gradient overflow-auto\">\n      <div class=\"text-center user-details\">\n        <figure class=\"m-0\">\n          <div class=\"icon mx-auto\"><mat-icon>person_outline</mat-icon></div>\n          <figcaption>Welcome {{user.firstName | titlecase}} {{user.lastName | titlecase}}</figcaption>\n        </figure>\n      </div>\n      <app-navigation></app-navigation>\n    </mat-sidenav>\n    <mat-sidenav-content class=\"p-4\">\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</main>\n"

/***/ }),

/***/ "./src/app/pgi-admin/admin-home/admin-home.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pgi-admin/admin-home/admin-home.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent() {
        this.user = {};
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    };
    AdminHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/pgi-admin/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/pgi-admin/admin-home/admin-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/pgi-admin/admin-home/manage-records/manage-records.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pgi-admin/admin-home/manage-records/manage-records.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktYWRtaW4vYWRtaW4taG9tZS9tYW5hZ2UtcmVjb3Jkcy9tYW5hZ2UtcmVjb3Jkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pgi-admin/admin-home/manage-records/manage-records.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pgi-admin/admin-home/manage-records/manage-records.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\">\n  <h1>PGI Records</h1>\n</div>\n<form #searchInd=\"ngForm\" (ngSubmit)=\"searchInd.valid && getStateData()\">\n  <div class=\"filter-area\">\n    <h6 class=\"filters-heading\">Please fill the below search parameters</h6>\n    <div class=\"d-flex\">\n      <ul class=\"list-unstyled filter-list m-0\">\n        <li class=\"pl-0\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Year</mat-label>\n            <mat-select [(ngModel)]=\"indData.year\" required name=\"year\" #year=\"ngModel\">\n              <mat-option *ngFor=\"let year of years\" [value]=\"year.value\">\n                {{year.key}} </mat-option>\n            </mat-select>\n            <mat-error>Please select year</mat-error>\n          </mat-form-field>\n        </li>\n        <li class=\"pl-0\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Category</mat-label>\n            <mat-select [(ngModel)]=\"indData.cat\" required name=\"category\" #category=\"ngModel\"\n              (ngModelChange)=\"getDomains()\">\n              <mat-option *ngFor=\"let cat of catList\" [value]=\"cat.value\">\n                {{cat.key}} </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </li>\n        <li class=\"pl-0\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Domain</mat-label>\n            <mat-select [(ngModel)]=\"indData.domain\" required name=\"domain\" #domain=\"ngModel\"\n              (ngModelChange)=\"getIndicators()\">\n              <mat-option *ngFor=\"let dom of domains; let index = index\" [value]=\"index + 1\">\n                {{dom.value}} </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </li>\n        <li class=\"pl-0\">\n          <mat-form-field appearance=\"outline\" style=\"width: 400px\">\n            <mat-label>Indicator</mat-label>\n            <mat-select [(ngModel)]=\"indData.indicator\" required name=\"indicator\" #indicator=\"ngModel\">\n              <mat-option *ngFor=\"let ind of indicators\" [value]=\"ind.indId\">\n                {{ind.serial + ' ' + ind.name}} </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </li>\n      </ul>\n      <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btn-gradient ml-auto mt-2\"\n        [disabled]=\"!searchInd.valid\">\n        <mat-icon>search</mat-icon>\n        Search\n      </button>\n    </div>\n  </div>\n</form>\n<div *ngIf=\"scores.length > 0\">\n  <div class=\"table-wrap\">\n    <form #recordForm=\"ngForm\" (ngSubmit)=\"recordForm.valid && manageIndData()\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\" width=\"80\" class=\"text-center\">S.No.</th>\n            <th scope=\"col\">State</th>\n            <th scope=\"col\" width=\"150\">Score</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let state of states; let index = index;\">\n            <td scope=\"row\" class=\"text-center\">{{index + 1}}</td>\n            <td>{{state.stateName}}</td>\n            <td><input type=\"text\" class=\"form-control\" name=\"{{index+1}}\" [(ngModel)]=\"state.score\"></td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"text-right\">\n        <button mat-raised-button color=\"primary\" class=\"btn-gradient\"\n          [disabled]=\"!recordForm.valid\">Cancel</button>\n        <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btn-gradient\"\n          [disabled]=\"!recordForm.valid\">Save</button>\n      </div>\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pgi-admin/admin-home/manage-records/manage-records.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pgi-admin/admin-home/manage-records/manage-records.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ManageRecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRecordsComponent", function() { return ManageRecordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/data */ "./src/utils/data.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");




var ManageRecordsComponent = /** @class */ (function () {
    function ManageRecordsComponent(pgiService) {
        this.pgiService = pgiService;
        this.years = [
            { key: '2016-17', value: '2016' },
            { key: '2017-18', value: '2017' },
            { key: '2018-19', value: '2018' },
            { key: '2019-20', value: '2019' }
        ];
        this.catList = [
            { key: 'Outcomes', value: 'O' },
            { key: 'Governance & Management', value: 'G' }
        ];
        this.indData = {};
        this.userDto = {};
        this.indicators = [];
        this.indicatorScore = {};
        this.scores = [];
        this.locationDto = {};
        this.states = [];
    }
    ManageRecordsComponent.prototype.ngOnInit = function () { };
    ManageRecordsComponent.prototype.getDomains = function () {
        console.log(this.indData.cat);
        if (this.indData.cat === 'O') {
            this.domains = _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"].splice(0, 4);
            console.log(this.domains);
        }
        else {
            this.domains = _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"].splice(4, 1);
            console.log(this.domains);
        }
    };
    ManageRecordsComponent.prototype.getIndicators = function () {
        var _this = this;
        this.userDto.recordId = this.indData.domain;
        this.pgiService.getIndicators(this.userDto).subscribe(function (res) {
            console.log(res);
            _this.indicators = res.indicators;
        }, function (error) { });
    };
    ManageRecordsComponent.prototype.getStateData = function () {
        var _this = this;
        this.userDto = {};
        this.indicatorScore.indId = this.indData.indicator;
        this.indicatorScore.year = this.indData.year;
        this.userDto.score = this.indicatorScore;
        this.pgiService.getStateData(this.userDto).subscribe(function (res) {
            console.log(res);
            if (res.scores) {
                _this.scores = res.scores;
            }
            _this.getStateList();
        }, function (error) { });
    };
    ManageRecordsComponent.prototype.getStateList = function () {
        var _this = this;
        this.pgiService.getStateList(this.locationDto).subscribe(function (res) {
            _this.states = res.states;
            _this.generateIndData();
        });
    };
    ManageRecordsComponent.prototype.generateIndData = function () {
        if (this.scores.length > 0) {
            for (var i = 0; i < this.states.length; i++) {
                var isScore = false;
                this.states[i].indId = this.indData.indicator;
                this.states[i].year = this.indData.year;
                this.states[i].createdBy = "ADMIN";
                this.states[i].modifiedBy = "ADMIN";
                for (var j = 0; j < this.scores.length; j++) {
                    if (this.states[i].stateId == this.scores[j].stateId) {
                        isScore = true;
                        this.states[i].score = this.scores[j].score;
                    }
                }
                if (!isScore) {
                    this.states[i].score = 0;
                }
            }
        }
        else {
            for (var i = 0; i < this.states.length; i++) {
                this.states[i].indId = this.indData.indicator;
                this.states[i].year = this.indData.year;
                this.states[i].createdBy = "ADMIN";
                this.states[i].modifiedBy = "ADMIN";
                this.states[i].score = 0;
            }
        }
    };
    ManageRecordsComponent.prototype.manageIndData = function () {
        console.log(this.states);
        this.userDto = {};
        this.userDto.scores = this.states;
        this.pgiService.manageIndData(this.userDto).subscribe(function (res) {
            console.log(res);
        });
    };
    ManageRecordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-records',
            template: __webpack_require__(/*! ./manage-records.component.html */ "./src/app/pgi-admin/admin-home/manage-records/manage-records.component.html"),
            styles: [__webpack_require__(/*! ./manage-records.component.css */ "./src/app/pgi-admin/admin-home/manage-records/manage-records.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], ManageRecordsComponent);
    return ManageRecordsComponent;
}());



/***/ }),

/***/ "./src/app/pgi-admin/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pgi-admin/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktYWRtaW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pgi-admin/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/pgi-admin/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid position-absolute h-100 bg-gradient d-flex overflow-hidden\">\n  <mat-card class=\"login-box m-auto\" [ngClass]=\"{'flipInY animated': card === 'login'}\">\n    <h3 class=\"text-center mb-4 mt-3\">Login</h3>\n    <mat-card-content>\n      <form #lf=\"ngForm\" (ngSubmit)=\"lf.valid && login()\">\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Username</mat-label>\n            <input matInput placeholder=\"Username\" [(ngModel)]=\"loginModel.userId\" name=\"username\" required>\n            <mat-icon matSuffix>person_outline</mat-icon>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Password</mat-label>\n            <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"loginModel.password\" name=\"password\"\n              required>\n            <mat-icon matSuffix>lock_outline</mat-icon>\n          </mat-form-field>\n          <mat-error class=\"text-center\" *ngIf=\"invalidUser\">Username or Password is not valid.</mat-error>\n        </div>\n        <button type=\"submit\" mat-raised-button color=\"primary\" class=\"w-100 btn-gradient\" [disabled]=\"!lf.valid\">\n          <span *ngIf=\"!showOverlay\">Login</span>\n          <span *ngIf=\"showOverlay\"><span class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            Loading...</span>\n        </button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n<div class=\"modal-backdrop fade\" *ngIf=\"showOverlay\"></div>"

/***/ }),

/***/ "./src/app/pgi-admin/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pgi-admin/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth-service.service */ "./src/app/services/auth-service.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.card = 'login';
        this.invalidUser = false;
        this.invalidId = false;
        this.invalidOtp = false;
        this.showOverlay = false;
        this.loginModel = {};
        this.userDto = {};
        this.userPojo = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.showOverlay = true;
        this.userDto = {};
        this.userDto.source = 'enc';
        this.loginModel.userId = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(this.loginModel.userId, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].encr_pass).toString();
        this.loginModel.password = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(this.loginModel.password, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].encr_pass).toString();
        this.loginModel.registrationType = 'U';
        this.loginModel.param = 'Web';
        this.userDto.userPojo = this.loginModel;
        this.auth.login(this.userDto).subscribe(function (res) {
            console.log(res);
            if (res.statusCode === _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].success_code) {
                sessionStorage.setItem('currentUser', JSON.stringify(res.userPojo));
                _this.router.navigate(['sandbox/home']);
                _this.loginModel = {};
                _this.showOverlay = false;
            }
            else {
                _this.loginModel = {};
                _this.invalidUser = true;
                _this.showOverlay = false;
            }
        }, function (error) { _this.showOverlay = false; });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pgi-admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pgi-admin/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pgi-admin/navigation/navigation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pgi-admin/navigation/navigation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktYWRtaW4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pgi-admin/navigation/navigation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pgi-admin/navigation/navigation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-unstyled menu-list\" id=\"menu\">\n  <li><a [routerLink]=\"['']\" [routerLinkActive]=\"['active']\"><mat-icon>assignment</mat-icon> PGI Records</a></li>\n  <li><a href=\"javascript:void(0);\" (click)=\"onLogout()\"><mat-icon>power_settings_new</mat-icon> Logout</a></li>\n</ul>\n\n\n\n"

/***/ }),

/***/ "./src/app/pgi-admin/navigation/navigation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pgi-admin/navigation/navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.toggle = [];
        this.userPojo = {};
        this.userDto = {};
    }
    NavigationComponent.prototype.ngOnInit = function () {
        // this.userParamName = JSON.parse(sessionStorage.getItem('currentUser')).paramName;
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
    };
    NavigationComponent.prototype.onLogout = function () {
        sessionStorage.clear();
        this.router.navigate(['sandbox/login']);
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/pgi-admin/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/pgi-admin/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/pgi-admin/pgi-admin.component.css":
/*!***************************************************!*\
  !*** ./src/app/pgi-admin/pgi-admin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktYWRtaW4vcGdpLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pgi-admin/pgi-admin.component.html":
/*!****************************************************!*\
  !*** ./src/app/pgi-admin/pgi-admin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pgi-admin/pgi-admin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pgi-admin/pgi-admin.component.ts ***!
  \**************************************************/
/*! exports provided: PgiAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgiAdminComponent", function() { return PgiAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgiAdminComponent = /** @class */ (function () {
    function PgiAdminComponent() {
    }
    PgiAdminComponent.prototype.ngOnInit = function () {
    };
    PgiAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pgi-admin',
            template: __webpack_require__(/*! ./pgi-admin.component.html */ "./src/app/pgi-admin/pgi-admin.component.html"),
            styles: [__webpack_require__(/*! ./pgi-admin.component.css */ "./src/app/pgi-admin/pgi-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgiAdminComponent);
    return PgiAdminComponent;
}());



/***/ }),

/***/ "./src/app/pgi-web/about/about.component.css":
/*!***************************************************!*\
  !*** ./src/app/pgi-web/about/about.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktd2ViL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pgi-web/about/about.component.html":
/*!****************************************************!*\
  !*** ./src/app/pgi-web/about/about.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"banner\" data-aos=\"fade-in\">\n  <img data-src=\"assets/images/about-banner.jpg\" src=\"assets/images/blur.png\" alt=\"banner\" class=\"img-fluid w-100\" appLoadBanner>\n  <div class=\"container banner-caption\">\n    <div class=\"row h-100\">\n      <div class=\"col-md-10 d-flex align-items-center\">\n        <div>\n          <h2>\n            {{pageId == 'catalysing' ? 'Catalysing Transformation': (pageId == 'methodology' ? 'PGI Methodology': 'PGI Conclusion')}}\n          </h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"container\" id=\"main_content\">\n  <app-catalysing *ngIf=\"pageId == 'catalysing'\"></app-catalysing>\n  <app-conclusions *ngIf=\"pageId == 'conclusions'\"></app-conclusions>\n  <app-methodology *ngIf=\"pageId == 'methodology'\"></app-methodology>\n</div>\n"

/***/ }),

/***/ "./src/app/pgi-web/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pgi-web/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.pageId = param["id"];
        });
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pgi-web/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pgi-web/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pgi-web/about/catalysing/catalysing.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pgi-web/about/catalysing/catalysing.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktd2ViL2Fib3V0L2NhdGFseXNpbmcvY2F0YWx5c2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pgi-web/about/catalysing/catalysing.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pgi-web/about/catalysing/catalysing.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-section\">\n  <div class=\"row d-flex align-items-end\">\n    <div class=\"col-md-6\">\n      <h3>Understanding the<br /> Indian Education System</h3>\n      <p>The Indian Education System is one of the largest in the world with more than 1.5 million\n        schools, 8.5 million teachers and 250 million children from varied socio-economic backgrounds.\n        The system strives to maintain standards and uniformity across the country while giving ample\n        scope for the country’s diverse culture and heritage to grow and flourish.</p>\n    </div>\n    <div class=\"col-md-6\">\n      <ul class=\"list-unstyled d-flex h-100 align-items-end edu-data\">\n        <li>\n          <div class=\"data\">\n            <div class=\"data-img data-img-schools\"></div>\n            <div class=\"data-title\">Schools</div>\n            <div class=\"data-num\">1.5 MN</div>\n          </div>\n        </li>\n        <li>\n          <div class=\"data\">\n            <div class=\"data-img data-img-teachers\"></div>\n            <div class=\"data-title\">Teachers</div>\n            <div class=\"data-num\">8.5 MN</div>\n          </div>\n        </li>\n        <li>\n          <div class=\"data\">\n            <div class=\"data-img data-img-students\"></div>\n            <div class=\"data-title\">Students</div>\n            <div class=\"data-num\">250 Mn</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n<section class=\"about-section\">\n  <div class=\"what-pgi\">\n    <img src=\"assets/images/about-pgi-bg.jpg\" alt=\"About PGI\" class=\"img-fluid\">\n    <div class=\"what-pgi-caption\">\n      <h2 class=\"text-uppercase\">What is performance grading index?</h2>\n      <p>The Performance Grading Index is a tool to provide insights on the status of school education in\n        States and UTs including key levers that drive their performance and critical areas for\n        improvement.</p>\n      <p>Grading will allow all States and UTs to occupy the highest level i.e Grade I, at the same time which is\n        a sign of fully developed nation.</p>\n    </div>\n  </div>\n</section>\n<section class=\"about-section\">\n  <div class=\"row d-flex align-items-center\">\n    <div class=\"col-md-5\">\n      <img src=\"assets/images/pgi-circle-art.png\" alt=\"PGI\" class=\"img-fluid\">\n    </div>\n    <div class=\"col-md-6 offset-md-1\">\n      <p>The schemes initiated by the Department of School Education and Literacy (DoSEL) along with the\n        implementation of the Right of Children to Free and Compulsory Education Act, have resulted in\n        significant improvement in accessibility. As a logical next step, the focus has now shifted from\n        access to quality of education. </p>\n\n      <div class=\"jumbotron text-uppercase\">\n        <p class=\"m-0\">DoSEL, therefore, has designed the Performance Grading Index (PGI) to catalyse\n          transformational change in the field of school education.</p>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"about-section why-pgi text-justify\">\n  <h3>Why it is required?</h3>\n  <p>The exercise, which is the first of its kind at such a scale, envisages that the Index will propel the States\n    and Union Territories (UTs) towards undertaking multi-pronged interventions that will bring about the\n    much-desired optimal education outcomes. The purpose of the PGI therefore is to help the States and UTs to\n    pinpoint the gaps and accordingly prioritize areas for intervention to ensure that the school education\n    system is robust at every level. At the same time it will also act as a good source of information for\n    best practices followed by Statesand UTs which can be shared.</p>\n  <div class=\"d-flex align-items-center justify-content-around my-5\">\n    <div class=\"why-pgi-box\">\n      <div class=\"why-pgi-icon\"></div>\n      <div class=\"why-pgi-point\">Pinpoint<br /> the gaps </div>\n    </div>\n    <div class=\"why-pgi-arrow\"></div>\n    <div class=\"why-pgi-box\">\n      <div class=\"why-pgi-icon\"></div>\n      <div class=\"why-pgi-point\">Prioritize areas for intervention</div>\n    </div>\n    <div class=\"why-pgi-arrow\"></div>\n    <div class=\"why-pgi-box\">\n      <div class=\"why-pgi-icon\"></div>\n      <div class=\"why-pgi-point\">Ensure a Robust Education System</div>\n    </div>\n  </div>\n  <p class=\"m-0\">The evaluation will grade the States and UTs, as opposed to ranking. Grading, by allowing\n    several States and UTs to be considered at the same level, eliminates the phenomenon of one improving\n    only at the cost of others, thereby casting a stigma of underperformance on the latter, though, in\n    effect they may have maintained status quo or even done better than earlier.\n  </p>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pgi-web/about/catalysing/catalysing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pgi-web/about/catalysing/catalysing.component.ts ***!
  \******************************************************************/
/*! exports provided: CatalysingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalysingComponent", function() { return CatalysingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CatalysingComponent = /** @class */ (function () {
    function CatalysingComponent() {
    }
    CatalysingComponent.prototype.ngOnInit = function () {
    };
    CatalysingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalysing',
            template: __webpack_require__(/*! ./catalysing.component.html */ "./src/app/pgi-web/about/catalysing/catalysing.component.html"),
            styles: [__webpack_require__(/*! ./catalysing.component.css */ "./src/app/pgi-web/about/catalysing/catalysing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CatalysingComponent);
    return CatalysingComponent;
}());



/***/ }),

/***/ "./src/app/pgi-web/about/conclusions/conclusions.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pgi-web/about/conclusions/conclusions.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktd2ViL2Fib3V0L2NvbmNsdXNpb25zL2NvbmNsdXNpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pgi-web/about/conclusions/conclusions.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pgi-web/about/conclusions/conclusions.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-section\">\n  <h3>Performance of STATEs and UTs 2017-18 executive summary</h3>\n  <p>The grades of the States and UTs, based on PGI 1, give the synopsis of number and names of States and UTs in\n    a particular Grade. The names of the States UTs are in alphabetical order. While a detailed analysis of the\n    performance - State/UT wise and Indicator wise - is in process, the broad conclusions are as under.</p>\n\n  <div class=\"row d-flex align-items-center\">\n    <div class=\"col-md-7\">\n      <div class=\"media\">\n\n        <div class=\"media-body\">\n          <h3 class=\"mt-0\"><span class=\"badge\">1</span>Inter state differential</h3>\n          <p>On a maximum possible of 1000 points, the range between the States and UTs with the highest\n            and\n            the lowest score is almost 300 which is 30% of the maximum points. <strong>Thus there exists\n              a\n              considerable difference between the States and UTs as far as their performance in the\n              arena\n              School Education is concerned as assessed by the PGI.</strong></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <div class=\"methodology d-flex align-items-center justify-content-center h-100\">\n        <div class=\"methodology-circle md\">\n          <div class=\"methodology-circle-content\">\n            <div class=\"methodology-circle-num\">30%</div>\n            <div class=\"methodology-circle-title\">Lowest Score <br /> /1000</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-5 d-flex align-items-center\">\n    <div class=\"col-md-5\">\n      <img src=\"assets/images/best-achievers.png\" alt=\"Best achievers\" class=\"img-fluid\">\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"media mt-5\">\n        <div class=\"media-body\">\n          <h3 class=\"mt-0\"><span class=\"badge\">2</span>Best achievers vis-a-vis the ultimate goal </h3>\n          <p>The States and UTs which are in Grade | as per the evaluation this year, still have\n            considerable ground to cover to reach the maximum aggregate of 1000 points.\n            Thus, Chandigarh, Kerala and Gujarat, which are the first grade are ranked 34th, 22nd and\n            5th in terms of their size. Similarly, the States which are under evaluation this year, still have\n            considerable in Grade VI, are ranked 23rd (Meghalaya), 26th (Nagaland) and 15th (Arunachal\n            Pradesh) respectively. As mentioned earlier, one of the main purposes of PGI is to make the\n            States and UTs aware of\n            the areas where there is scope for improvement and strive to reach the maximum possible\n            score and be in the highest grade. All States and UTs, wherever they are placed, should\n            strive to move up to the higher Grades in the subsequent years and as a country, the aim is\n            that all the States and UTs should be in the highest Grade.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row d-flex align-items-center mt-5\">\n    <div class=\"col-md-7\">\n      <div class=\"media mt-5\">\n        <div class=\"media-body\">\n          <h3 class=\"mt-0\"><span class=\"badge\">3</span>Size vis-a-vis performance</h3>\n          <p>The Performance of a State/UT is often perceived to be linked to the size (geographical area)\n            of the State/UT as it has a bearing on several logistic, administrative and other issues.\n            However, <strong>size does not appear to be a determining factor in the performance of\n              States and\n              UTs in the field of school education as assessed by the PGI.</strong></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <img src=\"assets/images/state-size.png\" alt=\"states\" class=\"img-fluid d-block mx-auto\">\n    </div>\n  </div>\n  <div class=\"row mt-5 d-flex align-items-center\">\n    <div class=\"col-md-5\">\n      <img src=\"assets/images/population.png\" alt=\"population\" class=\"img-fluid\">\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"media mt-5\">\n        <div class=\"media-body\">\n          <h3 class=\"mt-0\"><span class=\"badge\">4</span>Population vis-a-vis performance</h3>\n          <p> Population may be construed to be a hindrance to development as it tends to increase the\n            financial burden of interventions by the Government. In terms of population size, the Grade\n            | States and UTs are 32nd (Chandigarh), 13th (Kerala) and 9th (Gujarat). The population\n            ranking of three States viz. Meghalaya, Nagaland and Arunachal Pradesh which are in Grade\n            VI, are 23rd, 25th and 27th respectively. Hence, the effect of population on the performance\n            of States and UTs is inconclusive.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row d-flex align-items-center mt-5 pb-5\">\n    <div class=\"col-md-7\">\n      <div class=\"media mt-5\">\n        <div class=\"media-body\">\n          <h3 class=\"mt-0\"><span class=\"badge\">5</span>Correlation between the current performance of\n            States and UTs and\n            reaching the highest levels</h3>\n          <p>A summary of Domain wise performance of all the States and UTs is placed at Annexure II. An\n            analysis of the Domain wise performance (Figures 3 to 7) shows that while the best\n            performing States and UTs have done very well or fairly well across all Domains all of them\n            still have some way to go before they reach the highest levels. Thus while Chandigarh,\n            Kerala and Gujarat may be in Grade | vis-a-vis the other 33 States and UTs, they have\n            scored between 801-850 points out of a possible maximum of 1000. These States and UTs\n            therefore still need to improve their performance so that they can ultimately reach Level |\n            in the shortest time. Depending on how well they comply with the indicators, the other\n            States and UTs can also improve their performance and reach level | without too much delay.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <img src=\"assets/images/highest-level-map.png\" alt=\"map\" class=\"img-fluid d-block mx-auto\">\n    </div>\n  </div>\n\n  <div class=\"bubble mt-5\">\n    The geographical area of a State /UT does not seem to be determining factor in performance and both the\n    larger and smaller States and UTs are seen to be performing equally well.\n    The effect of population on the performance of States and UTs is inconclusive. Thus larger States are said\n    to be performing as well as smaller States.\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pgi-web/about/conclusions/conclusions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pgi-web/about/conclusions/conclusions.component.ts ***!
  \********************************************************************/
/*! exports provided: ConclusionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConclusionsComponent", function() { return ConclusionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConclusionsComponent = /** @class */ (function () {
    function ConclusionsComponent() {
    }
    ConclusionsComponent.prototype.ngOnInit = function () {
    };
    ConclusionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conclusions',
            template: __webpack_require__(/*! ./conclusions.component.html */ "./src/app/pgi-web/about/conclusions/conclusions.component.html"),
            styles: [__webpack_require__(/*! ./conclusions.component.css */ "./src/app/pgi-web/about/conclusions/conclusions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConclusionsComponent);
    return ConclusionsComponent;
}());



/***/ }),

/***/ "./src/app/pgi-web/about/methodology/methodology.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pgi-web/about/methodology/methodology.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktd2ViL2Fib3V0L21ldGhvZG9sb2d5L21ldGhvZG9sb2d5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pgi-web/about/methodology/methodology.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pgi-web/about/methodology/methodology.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-section\">\n  <h3>Understanding the methodology</h3>\n  <p>The architecture of the PGI emanates from the rationale that ensuring an efficient, inclusive and equitable\n    school education system is contingent upon the constant monitoring of an interconnected matrix of inputs,\n    outputs and outcomes, and the development of a quick response system for course correction.</p>\n  <p>The information on the indicators are drawn from data available with the DoSEL from the <strong>Unified\n      District\n      Information System for Education (UDISE), National Achievement Survey (NAS)</strong> of NCERT,\n    <strong>Mid Day Meal website,\n      Public Financial Management System (PFMS)</strong> and the information uploaded by the States and UTs on\n    the <strong>Shagun\n      Portal of DoESL</strong>.</p>\n  <p>Most of these parameters are being monitored for the first time such as availability of electronic systems to\n    capture attendance of students & teachers, occupancy of the officers at district & State levels, online\n    recruitment & transfer of teachers, recruitment of head teachers/principals through a merit based selection\n    system and amount spent on school education by States and UTs as a share of their total budget. </p>\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <p>Accordingly, the PGI is structured in two categories, namely, Outcomes, and Governance & Management\n        and comprises 70 indicators in aggregate with a total weightage of 1000. The detailed list of\n        indicators under each domain, the respective weights, the data source and the benchmark levels are\n        detailed in <a href=\"javascript:void(0);\" ui-sref=\"national-findings\">National Findings</a></p>\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"methodology d-flex align-items-center justify-content-center h-100\">\n        <div class=\"methodology-circle\">\n          <div class=\"methodology-circle-content\">\n            <div class=\"methodology-circle-num\">02 Categories</div>\n            <div class=\"methodology-circle-title\">Outcomes and Governance & Management</div>\n          </div>\n        </div>\n        <div class=\"methodology-circle\">\n          <div class=\"methodology-circle-content\">\n            <div class=\"methodology-circle-num\">70</div>\n            <div class=\"methodology-circle-title\">Indicators</div>\n          </div>\n        </div>\n        <div class=\"methodology-circle\">\n          <div class=\"methodology-circle-content\">\n            <div class=\"methodology-circle-num\">1000</div>\n            <div class=\"methodology-circle-title\">Total Weightage</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"about-section pb-0\">\n  <div class=\"what-pgi mb-5\">\n    <img src=\"assets/images/grading-bg.jpg\" alt=\"Grading\" class=\"img-fluid\">\n    <div class=\"what-pgi-caption grading\">\n      <h2 class=\"text-uppercase\">Grading, in an ideal situation,\n        allows all the States and UTs to be construed as star performers\n        and be at Grade 1 which is the ultimate goal\n        that PGI hopes to achieve.</h2>\n\n    </div>\n  </div>\n  <p>lt goes without saying that effective governance and management will go a long way in improving the school\n    education system and PGI has been conceptualised as a tool to encourage States and UTs to ensure that the\n    outcomes included in the Index are delivered.</p>\n  <p>The total weightage under the PGI is 1000 points with each of the 70 indicators assigned a weightage of\n    either 10 or 20 points. The States and UTs have been assessed on the basis of their performance against the\n    benchmark for each indicator. This benchmark/ optimum level for each indicator has been carefully identified\n    and the DoSEL has ensured that these are reasonable and attainable. They may bechanged at a later stage\n    depending upon the need.</p>\n  <div class=\"row d-flex align-items-center\">\n    <div class=\"col-md-7\">\n      <div class=\"jumbotron text-uppercase\">\n        <p class=\"m-0\">Weightages against each indicator have been divided into 10 groups - 0,1-10,11-20 and\n          soon up to 91-100. Thus, a State which has achieved 91% of the benchmark of an Indicator, will\n          get maximum points (10 or 20 whichever is applicable for the particular indicator). However, in\n          case of a few Indicators, a lower value would score a higher weightage e.g. equity indicators,\n          time taken for release of funds and single teacher schools. For Equity Indicators, a difference\n          of 'O’ (zero) between different categories has been considered as the best performance and the\n          absolute value of the difference has been considered for grading</p>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <img src=\"assets/images/artwork.png\" alt=\"artwork\" class=\"img-fluid d-block mx-auto\">\n    </div>\n  </div>\n  <p class=\"mt-5\">The grades are based on the scores obtained by the States and UTs on their performance on all\n    the 70 indicators during 2017-18 (except the data sourced from UDISE which is for the year 2016-17).</p>\n  <p>Thus, the grading categories are relative and can change depending upon the best performers in a given year.\n    At the same time, all 36 States and UTs can occupy the highest grade simultaneously.</p>\n\n  <div class=\"bubble\">\n    PGI has been calculated by taking the weighted average of scores secured under 70 indicators.\n    The overall performance of a State or UT is therefore an aggregated measure ranging from 0 to 1000 with\n    10 levels or grades. Based on the secured overall Index scores, the States and UTs have been assigned\n    Grades within this.\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pgi-web/about/methodology/methodology.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pgi-web/about/methodology/methodology.component.ts ***!
  \********************************************************************/
/*! exports provided: MethodologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodologyComponent", function() { return MethodologyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MethodologyComponent = /** @class */ (function () {
    function MethodologyComponent() {
    }
    MethodologyComponent.prototype.ngOnInit = function () {
    };
    MethodologyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-methodology',
            template: __webpack_require__(/*! ./methodology.component.html */ "./src/app/pgi-web/about/methodology/methodology.component.html"),
            styles: [__webpack_require__(/*! ./methodology.component.css */ "./src/app/pgi-web/about/methodology/methodology.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MethodologyComponent);
    return MethodologyComponent;
}());



/***/ }),

/***/ "./src/app/pgi-web/domain/domain.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pgi-web/domain/domain.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktd2ViL2RvbWFpbi9kb21haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pgi-web/domain/domain.component.html":
/*!******************************************************!*\
  !*** ./src/app/pgi-web/domain/domain.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"banner\">\n  <img data-src=\"assets/images/domain-banner/{{domainDetails.banner}}\" src=\"assets/images/blur.png\" alt=\"{{domainDetails.value}}\" class=\"img-fluid w-100\" appLoadBanner>\n  <div class=\"container banner-caption\">\n    <div class=\"row h-100\">\n      <div class=\"col-md-10 d-flex align-items-center\">\n        <div>\n          <h2>{{domainDetails.value}}</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"about-section\" id=\"main_content\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-6\">\n        <h3>Understand the Domain</h3>\n        <p class=\"m-0\">{{domainDetails.text}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <figure>\n          <img src=\"assets/images/domain-infographic/{{domainDetails.banner}}\" alt=\"domain-art\"\n            class=\"img-fluid d-block\">\n        </figure>\n      </div>\n    </div>\n    <div class=\"row performance d-flex\">\n      <div class=\"col-md-4\">\n        <div class=\"performance-block\">\n          <figure><img src=\"assets/images/first-place.svg\" alt=\"Top State\" class=\"img-fluid\"></figure>\n          <div class=\"performance-title first\">Top State/UT in <div>{{domainDetails.value}}</div>\n          </div>\n          <div class=\"performance-score\">{{topStates[0].key}}</div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"performance-block\">\n          <figure><img src=\"assets/images/high.svg\" alt=\"Highest Score\" class=\"img-fluid\">\n          </figure>\n          <div class=\"performance-title\">Highest Score</div>\n          <div class=\"performance-score\">{{topStates[0].score}}/{{topStates[0].max}}</div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"performance-block\">\n          <figure><img src=\"assets/images/low.svg\" alt=\"Lowest Score\" class=\"img-fluid\">\n          </figure>\n          <div class=\"performance-title\">Lowest Score</div>\n          <div class=\"performance-score\">\n            {{topStates[topStates.length-1].score}}/{{topStates[topStates.length-1].max}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"state-carousel gray\">\n  <div class=\"container\">\n    <h2 class=\"heading\">State(s) Performance in <span>{{domainDetails.value}}</span></h2>\n    <div class=\"card-carousel card-view domain-slider\">\n      <owl-carousel-o [options]=\"smSlider\">\n        <ng-container *ngFor=\"let slide of topStates\" class=\"my-card\">\n          <ng-template carouselSlide>\n            <a [routerLink]=\"['/state', slide.value]\">\n              <img src=\"assets/images/state-carousel/{{slide.banner}}\" alt=\"{{slide.key}}\" class=\"state-img\">\n              <div class=\"card-caption d-flex align-items-center justify-content-center front\">\n                <div>\n                  <div\n                    class=\"state-map mx-auto small mr-3 grade-{{slide.grade==1?'one':(slide.grade==2?'two':(slide.grade==3?'three' : (slide.grade==4?'four':(slide.grade==5?'five': 'six'))))}}\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\" [innerHtml]=\"slide.path | safeSvg\"></svg>\n                  </div>\n                  <div class=\"card-name\">{{slide.key}}</div>\n                </div>\n              </div>\n              <div class=\"card-caption d-flex align-items-center justify-content-center hover\">\n                <div class=\"card-data\">\n                  <figure><img src=\"assets/images/{{domainDetails.id}}.svg\" alt=\"\"></figure>\n                  <div class=\"card-name mb-4\">{{slide.key}}</div>\n                  <h5 class=\"m-0\">Domain Score</h5>\n                  <h2>{{slide.score}}/{{slide.max}}</h2>\n                </div>\n                <div\n                  class=\"card-footer  grade-{{slide.grade==1?'one':(slide.grade==2?'two':(slide.grade==3?'three' : (slide.grade==4?'four':(slide.grade==5?'five': 'six'))))}}\">\n                  Grade\n                  {{slide.grade==1?'I':(slide.grade==2?'II':(slide.grade==3?'III' : (slide.grade==4?'IV':'V')))}}\n                </div>\n              </div>\n            </a>\n          </ng-template>\n        </ng-container>\n      </owl-carousel-o>\n    </div>\n  </div>\n</section>\n<section class=\"topper-states\">\n  <div class=\"container\">\n    <h2 class=\"heading mb-1\">Top <span>Performers</span> in <span>{{domainDetails.value}}</span></h2>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6\" *ngFor=\"let achiver of topPerformerStates\">\n        <div class=\"media state-block align-items-center\">\n          <div\n            class=\"state-map small mr-4 grade-{{achiver.grade==1?'one':(achiver.grade==2?'two':(achiver.grade==3?'three' : (achiver.grade==4?'four':(achiver.grade==5?'five': 'six'))))}}\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\" [innerHtml]=\"achiver.path | safeSvg\"></svg>\n          </div>\n          <div class=\"media-body\">\n            <h5 class=\"mt-0 text-uppercase state-name\">{{achiver.key}}</h5>\n            <h6 class=\"text-uppercase grade\">Grade\n              {{achiver.grade==1?'I':(achiver.grade==2?'II':(achiver.grade==3?'III' : (achiver.grade==4?'IV':'V')))}}\n            </h6>\n            <a [routerLink]=\"['/state', achiver.value]\" class=\"button purplle sm\">more</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pgi-web/domain/domain.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pgi-web/domain/domain.component.ts ***!
  \****************************************************/
/*! exports provided: DomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainComponent", function() { return DomainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/data */ "./src/utils/data.ts");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");





var DomainComponent = /** @class */ (function () {
    function DomainComponent(route, getData) {
        this.route = route;
        this.getData = getData;
        this.domains = src_utils_data__WEBPACK_IMPORTED_MODULE_3__["domains"];
        this.topDomainAchiver = [];
        this.topStates = [];
        this.topPerformerStates = [];
        this.smSlider = {
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            autoplay: false,
            smartSpeed: 1000,
            dots: false,
            navText: ['', ''],
            responsiveRefreshRate: 100,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: true
        };
    }
    DomainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.pageId = param["id"];
            _this.domainDetails = _this.domains.find(function (d) {
                return (d.key === 'Domain_' + _this.pageId);
            });
            _this.topStates = _this.getData.getAllDetails(_this.pageId, false);
            _this.topPerformerStates = _this.topStates.slice(1, 4);
        });
    };
    DomainComponent.prototype.ngAfterViewInit = function () {
        var card = document.querySelectorAll('.card-view .owl-item');
        for (var i = 0; i < card.length; i++) {
            card[i].addEventListener('mouseover', function () {
                var current = document.getElementsByClassName('up');
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(' up', '');
                }
                this.className += ' up';
            });
        }
    };
    DomainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-domain',
            template: __webpack_require__(/*! ./domain.component.html */ "./src/app/pgi-web/domain/domain.component.html"),
            styles: [__webpack_require__(/*! ./domain.component.css */ "./src/app/pgi-web/domain/domain.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], DomainComponent);
    return DomainComponent;
}());



/***/ }),

/***/ "./src/app/pgi-web/footer/footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pgi-web/footer/footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktd2ViL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pgi-web/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/pgi-web/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer-links\">\n      <div class=\"container text-center\">\n          <h5>Links</h5>\n          <ul class=\"list-unstyled m-0\">\n              <li><a [routerLink]=\"['/about', 'catalysing']\">About PGI</a></li>\n              <li><a [routerLink]=\"['/national-findings']\">National Finding</a></li>\n              <li><a [routerLink]=\"['/indicators']\">Indicators</a></li>\n              <li><a href=\"javascript:void(0);\">Help</a></li>\n              <li><a href=\"javascript:void(0);\">Contact</a></li>\n              <li><a [routerLink]=\"['/sandbox']\" target=\"_blank\">Login</a></li>\n          </ul>\n      </div>\n  </div>\n  <div class=\"footer-links\">\n      <div class=\"container text-center\">\n          <h5>Domains</h5>\n          <ul class=\"list-unstyled m-0\">\n              <li><a [routerLink]=\"['/domain', '1']\">Learning Outcomes & Quality</a></li>\n              <li><a [routerLink]=\"['/domain', '2']\">Access</a></li>\n              <li><a [routerLink]=\"['/domain', '3']\">Infrastructure & Facilities</a></li>\n              <li><a [routerLink]=\"['/domain', '4']\">Equity</a></li>\n              <li><a [routerLink]=\"['/domain', '5']\">Governance Processes</a></li>\n          </ul>\n      </div>\n  </div>\n  <div class=\"copyright text-center\">Copyright 2019 Department of School Education & Literacy MHRD</div>\n</footer>"

/***/ }),

/***/ "./src/app/pgi-web/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pgi-web/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pgi-web/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/pgi-web/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pgi-web/header/header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pgi-web/header/header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktd2ViL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pgi-web/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/pgi-web/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-head\">\n    <div class=\"container d-flex\">\n      <ul class=\"list-inline\">\n        <li class=\"list-inline-item\" id=\"date\">07 Dec, 2018</li>\n        <li class=\"list-inline-item\">|</li>\n        <li class=\"list-inline-item\" id=\"time\">10:29 AM IST</li>\n      </ul>\n      <ul class=\"list-inline ml-auto top-nav\">\n        <li class=\"list-inline-item\"><a href=\"#navigation\">Skip to Navigation</a></li>\n        <li class=\"list-inline-item\">|</li>\n        <li class=\"list-inline-item\"><a href=\"#main_content\">Skip to Main Content</a></li>\n        <li class=\"list-inline-item\">|</li>\n        <li class=\"list-inline-item\"><a href=\"javascript:void(0);\">Screen Reader Access</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"container logo-area d-flex align-items-center\">\n    <a href=\"javascript:void(0);\">\n      <picture>\n        <source media=\"(min-width: 1199px)\" srcset=\"assets/images/mhrd-logo.png\">\n        <img src=\"assets/images/mhrd-logo-small.png\" alt=\"MHRD\">\n      </picture>\n    </a>\n    <div class=\"ml-auto pgi-logo\">\n      <img src=\"assets/images/pgi-logo.png\" alt=\"PGI\" class=\"img-fluid\">\n    </div>\n  </div>\n  <div class=\"container-fluid navigation\" id=\"navigation\">\n    <div class=\"container\">\n      <nav class=\"navbar navbar-expand-lg navbar-dark p-0\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n            </li>\n            <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n                aria-haspopup=\"true\" aria-expanded=\"false\">About PGI</a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                <ul class=\"list-unstyled about-dropdown\">\n                  <li>\n                    <a [routerLink]=\"['/about', 'catalysing']\">\n                      <img src=\"assets/images/nav-icons/catalysing.svg\" alt=\"catalysing\" class=\"img-fluid\">\n                      <h6>Catalysing Transformation</h6>\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/about', 'conclusions']\">\n                      <img src=\"assets/images/nav-icons/conclusions.svg\" alt=\"pgi-conclusion\" class=\"img-fluid\">\n                      <h6>PGI Conclusions</h6>\n\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/about', 'methodology']\">\n                      <img src=\"assets/images/nav-icons/methodlogy.svg\" alt=\"methodology\" class=\"img-fluid\">\n                      <h6>Methodology</h6>\n\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <img src=\"assets/images/nav-icons/contact.svg\" alt=\"contact-us\" class=\"img-fluid\">\n                      <h6>Contact Us</h6>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\">\n              <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0);\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n                aria-haspopup=\"true\" aria-expanded=\"false\">\n                States Index\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                <ul class=\"list-unstyled states-index-dropdown\">\n                  <li>\n                    <div class=\"wrap\">\n                      <h6>States Index</h6>\n                      <img src=\"assets/images/nav-icons/map_mega_sales_menu.png\" alt=\"States Index\" class=\"img-fluid\">\n                    </div>\n                  </li>\n                  <li>\n                    <h6>States</h6>\n                    <ul class=\"list-unstyled states-list\">\n                      <li *ngFor=\"let state of states\">\n                          <a [routerLink]=\"['/state', state.value]\">{{state.key}}</a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li>\n                    <h6>Union Territories</h6>\n                    <ul class=\"list-unstyled territories-list\">\n                      <li *ngFor=\"let territorie of territories\"><a [routerLink]=\"['/state', territorie.value]\">{{territorie.key}}</a></li>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n              <a class=\"nav-link\" [routerLink]=\"['/national-findings']\">National\n                Findings</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n              <a class=\"nav-link\" [routerLink]=\"['/indicators']\">Indicators</a>\n            </li>\n            <li class=\"nav-item\" >\n              <a class=\"nav-link\" href=\"assets/PGI_2017-18_0.pdf\" target=\"_blank\">Report</a>\n            </li>\n          </ul>\n          <div class=\"ml-auto current-year\">\n            <div class=\"custom-select-dropdown year-dropdown\">\n              <select name=\"\" id=\"\" class=\"form-control\">\n                <option value=\"\">2017-18</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/pgi-web/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pgi-web/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/data */ "./src/utils/data.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.states = [];
        this.territories = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.states = _utils_data__WEBPACK_IMPORTED_MODULE_2__["statesData"];
        this.territories = _utils_data__WEBPACK_IMPORTED_MODULE_2__["territoriesData"];
        var d = new Date();
        function formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        document.getElementById('date').innerHTML = (d.getDate() < 10 ? '0' + d.getDate() : d.getDate()) +
            ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
        document.getElementById('time').innerHTML = formatAMPM(d) + ' IST';
        this.interval = setInterval(function () {
            document.getElementById('time').innerHTML = formatAMPM(new Date()) + ' IST';
        }, 1000);
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pgi-web/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/pgi-web/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pgi-web/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/pgi-web/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktd2ViL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pgi-web/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/pgi-web/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"banner\">\n  <owl-carousel-o [options]=\"homeBanner\">\n    <ng-container *ngFor=\"let slide of slidesStore\">\n      <ng-template carouselSlide [id]=\"slide.id\">\n        <img data-src=\"{{slide.src}}\" src=\"assets/images/home-banner/banner-blur.png\" [alt]=\"slide.alt\" appLoadBanner>\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h2>{{slide.alt}}</h2>\n          <div class=\"bdr\"></div>\n          <a href=\"javascript:void(0);\">Know More...</a>\n        </div>\n      </ng-template>\n    </ng-container>\n  </owl-carousel-o>\n</section>\n<section class=\"about\" id=\"main_content\">\n  <div class=\"container\">\n    <h2 class=\"heading\">About<br /> <span>Performance Grading Index</span> (PGI) </h2>\n    <p class=\"text-center\"> The Performance Grading Index (PGI) is a tool to provide insights on the status of\n      school\n      education in States and UTs including key levers that drive their performance and critical\n      areas for improvement.\n      <a href=\"javascript:void(0);\">more...</a></p>\n  </div>\n</section>\n<section class=\"domains-area\">\n  <div class=\"container\">\n    <ul class=\"list-unstyled domains-list\">\n      <li>\n        <a [routerLink]=\"['/domain', '1']\">\n          <div class=\"domain-icon\"><img src=\"assets/images/lo.svg\" alt=\"learning_outcomes_&_quality\" class=\"img-fluid\">\n          </div>\n          <div class=\"domain-name\">Learning<br /> Outcomes & Quality</div>\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/domain', '2']\">\n          <div class=\"domain-icon\"><img src=\"assets/images/ac.svg\" alt=\"access\" class=\"img-fluid\">\n          </div>\n          <div class=\"domain-name\">Access</div>\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/domain', '3']\">\n          <div class=\"domain-icon\"><img src=\"assets/images/in.svg\" alt=\"infrastructure_&_facilities\" class=\"img-fluid\">\n          </div>\n          <div class=\"domain-name\">Infrastructure & Facilities</div>\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/domain', '4']\">\n          <div class=\"domain-icon\"><img src=\"assets/images/eq.svg\" alt=\"equity\" class=\"img-fluid\">\n          </div>\n          <div class=\"domain-name\">Equity</div>\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/domain', '5']\">\n          <div class=\"domain-icon\"><img src=\"assets/images/gp.svg\" alt=\"governance_processes\" class=\"img-fluid\"></div>\n          <div class=\"domain-name\">Governance Processes</div>\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n<section id=\"grades\" class=\"pt-0\">\n  <div class=\"filter-menu\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10 d-flex data-filters\">\n          <div class=\"map-filters\">\n            <div class=\"dropdown\">\n              <select name=\"masterCat\" class=\"dropdown-select\" [(ngModel)]=\"masterCat\" (change)=\"showSubMenu();\">\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"D\">Domains</option>\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"G\">Grades</option>\n              </select>\n            </div>\n          </div>\n\n          <div *ngIf=\"masterCat == 'D'\" class=\"domain-filters\">\n            <div class=\"dropdown\">\n              <select name=\"category\" class=\"dropdown-select\" [(ngModel)]=\"domainCat\" (change)=\"getCatWiseDomains()\">\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"O\">Outcomes\n                </option>\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"G\">Governance &\n                  Management</option>\n              </select>\n            </div>\n            <div *ngIf=\"domainCat == 'O'\" class=\"dropdown cat-1\">\n              <select name=\"outDomain\" class=\"dropdown-select\" [(ngModel)]=\"outDomain\" (change)=\"getIndData(outDomain)\">\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"1\">Learning\n                  Outcomes &\n                  Quality</option>\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"2\">Access\n                </option>\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"3\">\n                  Infrastructure &\n                  Facilities</option>\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"4\">Equity\n                </option>\n              </select>\n            </div>\n            <div *ngIf=\"domainCat == 'G'\" class=\"dropdown cat-2\">\n              <select name=\"govDomain\" class=\"dropdown-select\" [(ngModel)]=\"govDomain\" (change)=\"getIndData(govDomain)\">\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"5\">Governance\n                  Processes\n                </option>\n              </select>\n            </div>\n          </div>\n          <div *ngIf=\"masterCat == 'G'\" class=\"grade-filters \">\n            <div class=\"dropdown\">\n              <select name=\"gradeType\" class=\"dropdown-select\" [(ngModel)]=\"gradeType\"\n                (change)=\"showGradeWise(gradeType)\">\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"0\">All\n                </option>\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"1\">Grade I\n                </option>\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"2\">Grade II\n                </option>\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"3\">Grade\n                  III</option>\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"4\">Grade IV\n                </option>\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"5\">Grade V\n                </option>\n                <option class=\"dropdown-item\" href=\"javascript:void(0);\" value=\"6\">Grade VI\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2 d-flex align-items-center justify-content-center\">\n          <div class=\"view-filters ml-auto\">\n            <a class=\"map\" href=\"javascript:void(0)\" (click)=\"showTabWise('M');showMapOnTime()\"\n              [ngClass]=\"{active : view === 'M'}\"></a>\n            <a class=\"grid\" href=\"javascript:void(0)\" (click)=\"showTabWise('T')\"\n              [ngClass]=\"{active : view === 'T'}\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <h2 class=\"heading\" id=\"map_heading\" *ngIf=\"(dName && masterCat === 'D') \"><span id=\"domainInd\">{{dName[0].value}}</span></h2>\n    <div class=\"row map-area\">\n      <div class=\"col-lg-7\">\n        <div class=\"map-view\" [ngClass]=\"{'d-none' : (showType === 'gradeTable' || showType === 'domTable')}\">\n          <div id=\"map\"></div>\n        </div>\n        <div class=\"domain-chart\" [ngClass]=\"{'d-none' : (showType != 'domTable')}\">\n          <div id=\"chartDomain\" class=\"bar-chart\" style=\"width: 100%; height: 500px\"></div>\n        </div>\n      </div>\n      <div class=\"col-lg-5 d-flex justify-content-end align-items-end\">\n        <div class=\"col-right\">\n          <div [ngClass]=\"{'d-none' : (showType === 'gradeMap' || showType === 'gradeTable')}\" class=\"indicators\">\n            <h2 class=\"m-0\">Indicators</h2>\n            <div class=\"indicators-wrapper\">\n              <div class=\"indicators-list\" id=\"ind_list\" data-simplebar>\n                <div *ngFor=\"let ind of indData\">\n                  <div class=\"indicators-list-item\" [ngClass]=\"{noData : ind.Indicator == 'Total'}\">\n                    <div class=\"title\" *ngIf=\"ind.Weight == '' && ind.Indicator != 'Total'\">\n                      {{ind.Serial}} {{ind.Indicator}}</div>\n                    <a href=\"javascript:void(0);\" [ngClass]=\"{active : activeMenu === ind.Serial, 'inactive-link' : (showType == 'domTable')}\"\n                      *ngIf=\"ind.Weight != '' && ind.Indicator != 'Total'\"\n                      (click)=\"showIndicatorWise(ind)\">{{ind.Serial}}\n                      {{ind.Indicator}}</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"grade-chart mb-5\" [ngClass]=\"{'d-none' : (showType != 'gradeMap')}\">\n            <div id=\"chartContainer\" class=\"bar-chart\" style=\"width: 100%; height: 450px;\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-area overflow-auto mt-5\" [ngClass]=\"{'d-none' : (showType != 'gradeTable')}\">\n      <table class=\"table table-bordered grade-table\">\n        <thead>\n          <tr>\n            <th scope=\"col\" class=\"text-uppercase\" width=\"100\">Grade (Weights)</th>\n            <th scope=\"col\" colspan=\"10\" class=\"text-center\">STATEs &amp; UTs</th>\n            <th scope=\"col\" width=\"100\">NUMBER OF STATEs &amp; UTs</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\">Level I</th>\n            <td colspan=\"10\" class=\"text-center\">NIL</td>\n            <td></td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Level II</th>\n            <td colspan=\"10\" class=\"text-center\">NIL</td>\n            <td></td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Level III</th>\n            <td colspan=\"10\" class=\"text-center\">NIL</td>\n            <td></td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Grade I</th>\n            <td class=\"grade-one\">Chandigarh</td>\n            <td class=\"grade-one\">Gujarat</td>\n            <td class=\"grade-one\">Kerala</td>\n            <td class=\"grade-one\"></td>\n            <td class=\"grade-one\"></td>\n            <td class=\"grade-one\"></td>\n            <td class=\"grade-one\"></td>\n            <td class=\"grade-one\"></td>\n            <td class=\"grade-one\"></td>\n            <td class=\"grade-one\"></td>\n            <td class=\"grade-one text-center\">3</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Grade II</th>\n            <td class=\"grade-two\">D&amp;H Haveli</td>\n            <td class=\"grade-two\">Haryana</td>\n            <td class=\"grade-two\">Punjab</td>\n            <td class=\"grade-two\">Rajasthan</td>\n            <td class=\"grade-two\">Tamil Nadu</td>\n            <td class=\"grade-two\"></td>\n            <td class=\"grade-two\"></td>\n            <td class=\"grade-two\"></td>\n            <td class=\"grade-two\"></td>\n            <td class=\"grade-two\"></td>\n            <td class=\"grade-two text-center\">5</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Grade III</th>\n            <td class=\"grade-three\">Andhra Pradesh</td>\n            <td class=\"grade-three\">Assam</td>\n            <td class=\"grade-three\">Chhattisgarh</td>\n            <td class=\"grade-three\">Delhi</td>\n            <td class=\"grade-three\">Goa</td>\n            <td class=\"grade-three\">Himachal Pradesh</td>\n            <td class=\"grade-three\">Karnataka</td>\n            <td class=\"grade-three\">Madhya Pradesh</td>\n            <td class=\"grade-three\">Odisha</td>\n            <td class=\"grade-three\">Uttrakhand</td>\n            <td class=\"grade-three text-center\">10</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Grade IV</th>\n            <td class=\"grade-four\">Daman &amp; Diu</td>\n            <td class=\"grade-four\">Maharashtra</td>\n            <td class=\"grade-four\">Mizorm</td>\n            <td class=\"grade-four\">Puducherry</td>\n            <td class=\"grade-four\">Sikkim</td>\n            <td class=\"grade-four\">Telangana</td>\n            <td class=\"grade-four\"></td>\n            <td class=\"grade-four\"></td>\n            <td class=\"grade-four\"></td>\n            <td class=\"grade-four\"></td>\n            <td class=\"grade-four text-center\">6</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Grade V</th>\n            <td class=\"grade-five\">A&amp;N Island</td>\n            <td class=\"grade-five\">Bihar</td>\n            <td class=\"grade-five\">J&amp;K</td>\n            <td class=\"grade-five\">Jharkhand</td>\n            <td class=\"grade-five\">Lakshadweep</td>\n            <td class=\"grade-five\">Manipur</td>\n            <td class=\"grade-five\">Tripura</td>\n            <td class=\"grade-five\">Uttar Pradesh</td>\n            <td class=\"grade-five\">West Bengal</td>\n            <td class=\"grade-five\"></td>\n            <td class=\"grade-five text-center\">9</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Grade VI</th>\n            <td class=\"grade-six\">Arunachal Pradesh</td>\n            <td class=\"grade-six\">Meghalaya</td>\n            <td class=\"grade-six\">Nagaland</td>\n            <td class=\"grade-six\"></td>\n            <td class=\"grade-six\"></td>\n            <td class=\"grade-six\"></td>\n            <td class=\"grade-six\"></td>\n            <td class=\"grade-six\"></td>\n            <td class=\"grade-six\"></td>\n            <td class=\"grade-six\"></td>\n            <td class=\"grade-six text-center\">3</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Level VII</th>\n            <td colspan=\"10\" class=\"text-center\">NIL</td>\n            <td></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</section>\n<section class=\"achievers gray\">\n  <div class=\"container\">\n    <h2 class=\"heading\">Top 5 <span>Achievers</span> in PGI 2017-18 </h2>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6\" *ngFor=\"let achiver of topAchiversDetails\">\n        <div class=\"media state-block align-items-center\">\n          <div\n            class=\"state-map small mr-4 grade-{{achiver.grade==1?'one':(achiver.grade==2?'two':(achiver.grade==3?'three' : (achiver.grade==4?'four':(achiver.grade==5?'five': 'six'))))}}\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\" [innerHtml]=\"achiver.path | safeSvg\"></svg>\n          </div>\n          <div class=\"media-body\">\n            <h5 class=\"mt-0 text-uppercase state-name\">{{achiver.key}}</h5>\n            <h6 class=\"text-uppercase grade\">Grade\n              {{achiver.grade==1?'I':(achiver.grade==2?'II':(achiver.grade==3?'III' : (achiver.grade==4?'IV':'V')))}}\n            </h6>\n            <a [routerLink]=\"['/state', achiver.value]\" class=\"button purplle sm\">more</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"achievers\">\n  <div class=\"container\">\n    <h2 class=\"heading\">Top <span>Domain-wise Achievers</span> in PGI 2017-18 </h2>\n    <div class=\"domain-achievers\">\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-4\">\n          <ul class=\"list-unstyled domain\">\n            <li><a href=\"javascript:void(0);\" class=\"active\" (click)=\"getDomainData('1')\">Learning<br />Outcomes\n                & Quality</a>\n            </li>\n            <li><a href=\"javascript:void(0);\" (click)=\"getDomainData('2')\">Access</a>\n            </li>\n            <li><a href=\"javascript:void(0);\" (click)=\"getDomainData('3')\">Infrastructure<br />& Facilities</a></li>\n            <li><a href=\"javascript:void(0);\" (click)=\"getDomainData('4')\">Equity</a>\n            </li>\n            <li><a href=\"javascript:void(0);\" (click)=\"getDomainData('5')\">Governance\n                Processes</a></li>\n          </ul>\n        </div>\n        <div class=\"col-lg-8 offset-lg-1 col-md-8\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\" *ngFor=\"let t of topStates\">\n              <div class=\"media state-block align-items-center\">\n                <div\n                  class=\"state-map small mr-3 grade-{{t.grade==1?'one':(t.grade==2?'two':(t.grade==3?'three' : (t.grade==4?'four':(t.grade==5?'five': 'six'))))}}\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\" [innerHtml]=\"t.path | safeSvg\"></svg>\n                </div>\n                <div class=\"media-body\">\n                  <h5 class=\"mt-0 text-uppercase state-name\">{{t.key}}</h5>\n                  <h6 class=\"text-uppercase grade\">Score {{t.score}}/{{t.max}}</h6>\n                  <a [routerLink]=\"['/state', t.value]\" class=\"button purplle sm\">more</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/pgi-web/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/pgi-web/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/data */ "./src/utils/data.ts");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _assets_js_canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/js/canvas.js */ "./src/assets/js/canvas.js");
/* harmony import */ var _assets_js_canvas_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_canvas_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/js/mapData.js */ "./src/assets/js/mapData.js");
/* harmony import */ var _assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_5__);






var HomeComponent = /** @class */ (function () {
    function HomeComponent(getData) {
        this.getData = getData;
        this.slidesStore = [
            { id: 'slide_1', src: 'assets/images/home-banner/banner-1.jpg', alt: 'Learning Outcomes & Quality' },
            { id: 'slide_2', src: 'assets/images/home-banner/banner-2.jpg', alt: 'Access' },
            { id: 'slide_3', src: 'assets/images/home-banner/banner-3.jpg', alt: 'Infrastructure & Facilities' },
            { id: 'slide_4', src: 'assets/images/home-banner/banner-4.jpg', alt: 'Equity' },
            { id: 'slide_5', src: 'assets/images/home-banner/banner-5.jpg', alt: 'Governance Processes' }
        ];
        this.states = [];
        this.territories = [];
        this.domains = [];
        this.homeBanner = {
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            dots: true,
            navText: ['', ''],
            responsiveRefreshRate: 100,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
            nav: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.mapRefresh();
        this.masterCat = 'G';
        this.gradeType = 0;
        this.states = _utils_data__WEBPACK_IMPORTED_MODULE_2__["statesData"];
        this.territories = _utils_data__WEBPACK_IMPORTED_MODULE_2__["territoriesData"];
        this.domains = _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"];
        this.domainData = myExtObject.getDomainData();
        this.topAchivres = _utils_data__WEBPACK_IMPORTED_MODULE_2__["gradeData"].Grade1.concat(_utils_data__WEBPACK_IMPORTED_MODULE_2__["gradeData"].Grade2).slice(0, 5);
        this.topAchiversDetails = this.states.filter(function (val) {
            val.grade = myExtObject.findGrade(val.key);
            return _this.topAchivres.includes(val.key);
        });
        this.territories.filter(function (val) {
            val.grade = myExtObject.findGrade(val.key);
            if (_this.topAchivres.includes(val.key)) {
                _this.topAchiversDetails.push(val);
            }
        });
        this.getDomainData(1);
        this.showTabWise('M');
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.mapRefresh();
        this.showGradeWise(0);
        this.getGridWiseChart();
    };
    HomeComponent.prototype.getGridWiseChart = function () {
        setTimeout(function () {
            myExtObject.gridWiseChart();
        });
    };
    HomeComponent.prototype.showSubMenu = function () {
        if (this.masterCat === 'G') {
            this.gradeType = 0;
            this.getGridWiseChart();
        }
        else {
            this.domainCat = 'O';
            this.outDomain = 1;
            this.getIndData(1);
        }
        this.showMapOnTime();
        this.showTabWise('M');
    };
    HomeComponent.prototype.showTabWise = function (type) {
        var _this = this;
        this.view = type;
        if (this.masterCat === 'G') {
            if (this.view === 'M') {
                this.gradeType = 0;
                this.showType = "gradeMap";
            }
            else {
                this.showType = "gradeTable";
            }
        }
        else {
            if (this.view === 'M') {
                this.showType = "domMap";
            }
            else {
                setTimeout(function () {
                    _this.getIndData(1);
                });
                this.domainCat = 'O';
                this.outDomain = 1;
                this.showType = "domTable";
            }
        }
        console.log(this.showType);
    };
    HomeComponent.prototype.getCatWiseDomains = function () {
        if (this.domainCat == 'O') {
            this.outDomain = 1;
            this.getIndData(1);
        }
        else {
            this.govDomain = 5;
            this.getIndData(5);
        }
    };
    HomeComponent.prototype.getDomainData = function (d) {
        this.topStates = this.getData.getAllDetails(d, true);
    };
    HomeComponent.prototype.getIndData = function (domain) {
        this.activeMenu = '';
        this.indData = (domain == 1 ? _utils_data__WEBPACK_IMPORTED_MODULE_2__["Domain1"] : (domain == 2 ? _utils_data__WEBPACK_IMPORTED_MODULE_2__["Domain2"] : (domain == 3 ? _utils_data__WEBPACK_IMPORTED_MODULE_2__["Domain3"] : (domain == 4 ? _utils_data__WEBPACK_IMPORTED_MODULE_2__["Domain4"] : _utils_data__WEBPACK_IMPORTED_MODULE_2__["Domain5"]))));
        myExtObject.showDomainWise(domain);
        var domainChart = [];
        var domainChartData = {};
        var dataPoints = [];
        for (var j = 0; j < this.states.length; j++) {
            dataPoints.push({
                label: this.states[j].key,
                y: parseInt(this.domainData['Domain_' + domain][this.states[j].key])
            });
        }
        for (var j = 0; j < this.territories.length; j++) {
            dataPoints.push({
                label: this.territories[j].key,
                y: parseInt(this.domainData['Domain_' + domain][this.territories[j].key])
            });
        }
        domainChartData.dataPoints = dataPoints;
        domainChart.push(domainChartData);
        domainChartData = {};
        dataPoints = [];
        for (var j = 0; j < this.states.length; j++) {
            dataPoints.push({
                label: this.states[j].key,
                y: this.domainData['Domain_' + domain]['max'] - this.domainData['Domain_' + domain][this.states[j].key]
            });
        }
        for (var i = 0; i < this.territories.length; i++) {
            dataPoints.push({
                label: this.territories[i].key,
                y: this.domainData['Domain_' + domain]['max'] - this.domainData['Domain_' + domain][this.territories[i].key]
            });
        }
        domainChartData.dataPoints = dataPoints;
        domainChart.push(domainChartData);
        // console.log(domainChart);
        for (var i = 0; i < domainChart.length; i++) {
            domainChart[i].type = "stackedBar100";
            this.dName = this.domains.filter(function (val) {
                return (val.key == ("Domain_" + domain));
            });
            domainChart[i].name = this.dName[0].value;
            if (i == 1) {
                domainChart[i].name = 'Distance from max score.';
            }
            domainChart[i].showInLegend = true;
        }
        if (domain == 1) {
            _assets_js_canvas_js__WEBPACK_IMPORTED_MODULE_4__["addColorSet"]('chartClr', ['#fac090', '#e46c0b']);
        }
        else if (domain == 2) {
            _assets_js_canvas_js__WEBPACK_IMPORTED_MODULE_4__["addColorSet"]('chartClr', ['#e5b7b7', '#8165a2']);
        }
        else if (domain == 3) {
            _assets_js_canvas_js__WEBPACK_IMPORTED_MODULE_4__["addColorSet"]('chartClr', ['#4298af', '#db843d']);
        }
        else if (domain == 4) {
            _assets_js_canvas_js__WEBPACK_IMPORTED_MODULE_4__["addColorSet"]('chartClr', ['#c5bd98', '#31859d']);
        }
        else {
            _assets_js_canvas_js__WEBPACK_IMPORTED_MODULE_4__["addColorSet"]('chartClr', ['#da9695', '#595959']);
        }
        var chart1 = new _assets_js_canvas_js__WEBPACK_IMPORTED_MODULE_4__["Chart"]('chartDomain', {
            animationEnabled: true,
            // theme: 'light1',
            colorSet: 'chartClr',
            title: {
                text: '',
            },
            axisY: {
                interval: 10,
                suffix: '%',
                labelFontSize: 12,
                gridColor: '#efefef',
            },
            axisX: {
                labelFontSize: 10,
                labelAutoFit: true,
                interval: 1,
                gridColor: '#efefef',
                tickColor: '#efefef'
            },
            legend: {
                fontSize: 16,
                fontWeight: 400,
                fontFamily: 'Source Sans Pro, sans-serif',
            },
            toolTip: {
                shared: true
            },
            data: domainChart
        });
        chart1.render();
        myExtObject.hideWatermark();
    };
    HomeComponent.prototype.showIndicatorWise = function (ind) {
        this.activeMenu = ind.Serial;
        myExtObject.showIndicatorWise(ind);
    };
    HomeComponent.prototype.showGradeWise = function (grade) {
        myExtObject.showGradeWise(grade);
    };
    HomeComponent.prototype.showMapOnTime = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.masterCat === 'G') {
                myExtObject.showGradeWise(0);
            }
            else {
                myExtObject.showDomainWise(1);
            }
        });
    };
    HomeComponent.prototype.mapRefresh = function () {
        myExtObject.refresh();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pgi-web/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pgi-web/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pgi-web/indicators/indicators.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pgi-web/indicators/indicators.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktd2ViL2luZGljYXRvcnMvaW5kaWNhdG9ycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pgi-web/indicators/indicators.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pgi-web/indicators/indicators.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"banner\" data-aos=\"fade-in\">\n  <img data-src=\"assets/images/indicators-banner.jpg\" src=\"assets/images/blur.png\" alt=\"indicators\" class=\"img-fluid w-100\" appLoadBanner>\n  <div class=\"container banner-caption\">\n    <div class=\"row h-100\">\n      <div class=\"col-md-10 d-flex align-items-center\">\n        <div>\n          <h2>Indicators</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"main_content\">\n  <div class=\"container\">\n    <div class=\"row indicators-total-score\">\n      <div class=\"col-md-4\">\n        <h5>Total category 1 weight: 640</h5>\n      </div>\n      <div class=\"col-md-4\">\n        <h5>Total category 2 weight: 360</h5>\n      </div>\n      <div class=\"col-md-4\">\n        <h5>Total weight: 1000</h5>\n      </div>\n    </div>\n    <div class=\"accordion\" data-accordion=\"first\">\n      <div class=\"card\">\n        <div class=\"card-header domain-one\">\n          <button class=\"btn btn-link\" type=\"button\">\n            <span class=\"row d-flex align-items-center\">\n              <span class=\"col-lg-9\">\n                <small class=\"w-100 d-block \">Category - Outcomes</small>\n                <span class=\"w-100 d-block title\">Learning Outcomes & Quality</span>\n              </span>\n              <span class=\"col-lg-3\">\n                <span class=\"total-weight-block\">Total Weight: 180</span>\n              </span>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel\">\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled\" data-simplebar>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.1.1 % of Elementary schools which have displayed class-wise learning\n                  Outcomes </h6>\n                <p>100% of Govt. and aided elementory Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.1.2 Average Language score in Class 3 - Govt and aided schools</h6>\n                <p>The latest round of NAS for classes 3, 5 and 8 tested the LOs of the\n                  students. The report cards give the percentage of students assessed who\n                  answered correctly. The benchmark will be 75% of all students who\n                  answered correctly i.e. States and UTs obtaining this score get full\n                  weightage points.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.1.3 Average Mathematics score in Class 3 - Govt and aided schools</h6>\n                <p>The latest round of NAS for classes 3, 5 and 8 tested the LOs of the\n                  students. The report cards give the percentage of students assessed who\n                  answered correctly. The benchmark will be 75% of all students who\n                  answered correctly i.e. States and UTs obtaining this score get full\n                  weightage points.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.1.4 Average Language score in Class 5 - Govt and aided schools</h6>\n                <p>The latest round of NAS for classes 3, 5 and 8 tested the LOs of the\n                  students. The report cards give the percentage of students assessed who\n                  answered correctly. The benchmark will be 75% of all students who\n                  answered correctly i.e. States and UTs obtaining this score get full\n                  weightage points.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.1.5 Average Mathematics score in Class 5 - Govt and aided schools</h6>\n                <p>The latest round of NAS for classes 3, 5 and 8 tested the LOs of the\n                  students. The report cards give the percentage of students assessed who\n                  answered correctly. The benchmark will be 75% of all students who\n                  answered correctly i.e. States and UTs obtaining this score get full\n                  weightage points.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.1.6 Average Language score in Class 8 - Govt and aided schools</h6>\n                <p>The latest round of NAS for classes 3, 5 and 8 tested the LOs of the\n                  students. The report cards give the percentage of students assessed who\n                  answered correctly. The benchmark will be 75% of all students who\n                  answered correctly i.e. States and UTs obtaining this score get full\n                  weightage points.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.1.7 Average Mathematics score in Class 8 - Govt and aided schools</h6>\n                <p>The latest round of NAS for classes 3, 5 and 8 tested the LOs of the\n                  students. The report cards give the percentage of students assessed who\n                  answered correctly. The benchmark will be 75% of all students who\n                  answered correctly i.e. States and UTs obtaining this score get full\n                  weightage points.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.1.8 Average Science score in Class 8 - Govt and aided schools</h6>\n                <p>The latest round of NAS for classes 3, 5 and 8 tested the LOs of the\n                  students. The report cards give the percentage of students assessed who\n                  answered correctly. The benchmark will be 75% of all students who\n                  answered correctly i.e. States and UTs obtaining this score get full\n                  weightage points.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.1.9 Average Social Science score in Class 8 - Govt and aided schools\n                </h6>\n                <p>The latest round of NAS for classes 3, 5 and 8 tested the LOs of the\n                  students. The report cards give the percentage of students assessed who\n                  answered correctly. The benchmark will be 75% of all students who\n                  answered correctly i.e. States and UTs obtaining this score get full\n                  weightage points.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"accordion\" data-accordion=\"second\">\n      <div class=\"card\">\n        <div class=\"card-header domain-two\">\n          <button class=\"btn btn-link\" type=\"button\">\n            <span class=\"row d-flex align-items-center\">\n              <span class=\"col-lg-9\">\n                <small class=\"w-100 d-block \">Category - Outcomes</small>\n                <span class=\"w-100 d-block title\">Access</span>\n              </span>\n              <span class=\"col-lg-3\">\n                <span class=\"total-weight-block\">Total Weight: 80</span>\n              </span>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel\">\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled\" data-simplebar>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.2.1 Adjusted Net Enrolment Ratio (NER) at elementary level as per\n                  entry age\n                  of the Statue/UT</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.2.2 Adjusted Net Enrolment Ratio (NER) at secondary level as per entry\n                  age\n                  of the Statue/UT</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.2.3 Retention rate at primary level</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.2.4 Retention rate at elementary level</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.2.5 Retention rate at secondary level</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.2.6 Transition rate from primary to upper-primary level</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.2.7 Transition rate from upper-primary to secondary level</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.2.8 Percentage of identified Out-of-school-children mainstreamed in\n                  last\n                  completed academic year (2017-18) (Class 1 to 8)</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"accordion\" data-accordion=\"third\">\n      <div class=\"card\">\n        <div class=\"card-header domain-three\">\n          <button class=\"btn btn-link\" type=\"button\">\n            <span class=\"row d-flex align-items-center\">\n              <span class=\"col-lg-9\">\n                <small class=\"w-100 d-block \">Category - Outcomes</small>\n                <span class=\"w-100 d-block title\">Infrastructure & Facilities</span>\n              </span>\n              <span class=\"col-lg-3\">\n                <span class=\"total-weight-block\">Total Weight: 150</span>\n              </span>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel\">\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled\" data-simplebar>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.3.1 Percentage of schools having CAL in Upper Primary Level</h6>\n                <p>100% Govt. upper primary schools. </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>Percentage of secondary schools having lab facility<br />\n                  1.3.2 a. Integrated Science Lab<br />\n                  1.3.3 b. Computer Lab</h6>\n                <p>100% Govt. secondary schools. </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.3.4 % of schools having Book Banks/ Reading Rooms/ Libraries</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.3.5 % of schools covered by vocational education subject<br />\n                  a. Classes 9 & 10<br />\n                  b. Classes 11 to 12</h6>\n                <p>25% of composite Govt. secondary and higher secondary schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.3.6 % of primary schools provided graded supplementary material</h6>\n                <p>100% of Govt. primary schools. </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.3.7 % of elementary school's children taking mid-day meal against\n                  target\n                  approved in PAB - Govt and aided schools</h6>\n                <p>100% of MDM PAB target 2017-18</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: MDM Portal</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.3.8 % of days midday meal served against total working days - Govt and\n                  aided\n                  elementary schools</h6>\n                <p>100% of 200 datys at primary level and 220 days at upper primary level,\n                  as per RTE Act. </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: MDM Portal</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.3.9 Percentage of schools having functional drinking water facility -\n                  All\n                  Schools</h6>\n                <p>100% of All Schools. </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.3.10 Percentage of Elementary Level students getting Uniform within\n                  three\n                  months of start of academic year 2016-17 - Govt. Schools</h6>\n                <p>100% of all students in Govt. elementary schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.3.11 Percentage of Elementary Level students getting Free Textbook\n                  within one\n                  month of start of academic year 2016-17</h6>\n                <p>100% of all students in Govt. & Govt. aided elementary schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"accordion\" data-accordion=\"fourth\">\n      <div class=\"card\">\n        <div class=\"card-header domain-four\">\n          <button class=\"btn btn-link\" type=\"button\">\n            <span class=\"row d-flex align-items-center\">\n              <span class=\"col-lg-9\">\n                <small class=\"w-100 d-block \">Category - Outcomes</small>\n                <span class=\"w-100 d-block title\">Equity</span>\n              </span>\n              <span class=\"col-lg-3\">\n                <span class=\"total-weight-block\">Total Weight: 230</span>\n              </span>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel\">\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled\" data-simplebar>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.1 Difference in student performance in Language between Scheduled\n                  Castes\n                  (SC) and General Category in Govt. and Aided elementary schools: Class\n                  3, 5 & 8</h6>\n                <p>Since there should be zero difference between SC/ST students and General\n                  Category students, maximum weightage points will be given to a score of\n                  0 under these indicators. (0 value to be given 100 marks). Absolute\n                  value of the difference will be taken. Lower the difference better is\n                  the grade. Average performance of the three classes (3, 5 & 8) will be\n                  taken.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.2 Difference in student performance in Mathematics between Scheduled\n                  Castes (SC) and General Category in Govt. and Aided elementary schools:\n                  Class 3, 5 & 8</h6>\n                <p>Since there should be zero difference between SC/ST students and General\n                  Category students, maximum weightage points will be given to a score of\n                  0 under these indicators. (0 value to be given 100 marks). Absolute\n                  value of the difference will be taken. Lower the difference better is\n                  the grade. Average performance of the three classes (3, 5 & 8) will be\n                  taken.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.3 Difference in student performance in Language between Scheduled\n                  Tribes\n                  (ST) and General Category in Govt. and Aided elementary schools: Class\n                  3, 5 & 8</h6>\n                <p>Since there should be zero difference between SC/ST students and General\n                  Category students, maximum weightage points will be given to a score of\n                  0 under these indicators. (0 value to be given 100 marks). Absolute\n                  value of the difference will be taken. Lower the difference better is\n                  the grade. Average performance of the three classes (3, 5 & 8) will be\n                  taken.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.4 Difference in student performance in Mathematics between Scheduled\n                  Tribes (ST) and General Category in Govt. and Aided elementary schools:\n                  Class 3, 5 & 8</h6>\n                <p>Since there should be zero difference between SC/ST students and General\n                  Category students, maximum weightage points will be given to a score of\n                  0 under these indicators. (0 value to be given 100 marks). Absolute\n                  value of the difference will be taken. Lower the difference better is\n                  the grade. Average performance of the three classes (3, 5 & 8) will be\n                  taken.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.5 Difference in student performance in Language between Urban and\n                  Rural\n                  areas in Govt. and Aided elementary schools: Class 3, 5 & 8</h6>\n                <p>Difference in % of urban students answering correctly and % or rural\n                  students answering correctly can be measured here (Rural - Urban) and\n                  the target may be set as greater than or equal to 0.\n                  Since there should be zero difference between rural and urban students,\n                  maximum weightage points will be given to a score of 0 under these\n                  indicators. Absolute value of the difference will be taken.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.6 Difference in student performance in Mathematics between Urban and\n                  Rural\n                  areas in Govt. and Aided elementary schools: Class 3, 5 & 8</h6>\n                <p>Difference in % of urban students answering correctly and % or rural\n                  students answering correctly can be measured here (Rural - Urban) and\n                  the target may be set as greater than or equal to 0.\n                  Since there should be zero difference between rural and urban students,\n                  maximum weightage points will be given to a score of 0 under these\n                  indicators. Absolute value of the difference will be taken.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.7 Difference in student performance in Language between Boys and\n                  Girls in\n                  Govt. and Aided elementary schools: Class 3, 5 & 8</h6>\n                <p>Difference in % of boys answering correctly and % of girls answering\n                  correctly can be measured here (girls - boys) and the target may be set\n                  as greater than or equal to 0.\n                  Since there should be zero difference between boys and girls, maximum\n                  weightage points will be given to a score of 0 under these indicators.\n                  Absolute value of the difference will be taken.\n                </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.8 Difference in student performance in Mathematics between Boys and\n                  Girls\n                  in Govt. and Aided elementary schools: Class 3, 5 & 8</h6>\n                <p>Difference in % of boys answering correctly and % of girls answering\n                  correctly can be measured here (girls - boys) and the target may be set\n                  as greater than or equal to 0.\n                  Since there should be zero difference between boys and girls, maximum\n                  weightage points will be given to a score of 0 under these indicators.\n                  Absolute value of the difference will be taken.\n                </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: NAS</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.9 a. Difference between SC's and General Category's Transition Rate\n                  from\n                  Upper Primary to Secondary level<br />\n                  b. Difference between SC's and General\n                  Category's Transition Rate from Upper Primary econdary level</h6>\n                <p>0 in All Schools (There should be zero difference)</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.10 Difference between Boys and Girls Transition Rate from Upper\n                  Primary to\n                  Secondary level</h6>\n                <p>0 in All Schools (There should be zero difference)</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.11 Difference between Minorities and General Category's Transition\n                  Rate\n                  from Upper Primary to Secondary level</h6>\n                <p>0 in All Schools (There should be zero difference)</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.12 Gross enrolment ration of CWSN ( age group 6-18 years )</h6>\n                <p>100% of CWSN children in that age group in all schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.13 % of entitled CWSN receiving Aids and Appliances for Govt and\n                  Aided\n                  schools</h6>\n                <p>100% of target in PAB SSA and PAB RMSA 2017-18. </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.14 Percentage of schools having ramp for CWSN to access schools\n                  buildings\n                </h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.15 Percentage of schools having functional CWSN friendly toilets.\n                </h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>1.4.16 Percentage of schools having functional toilet<br />\n                  a. Boys toilet<br />\n                  b. Girls toilet</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"accordion\" data-accordion=\"fourth\">\n      <div class=\"card\">\n        <div class=\"card-header domain-five\">\n          <button class=\"btn btn-link\" type=\"button\">\n            <span class=\"row d-flex align-items-center\">\n              <span class=\"col-lg-9\">\n                <small class=\"w-100 d-block \">Category - Governance & Management</small>\n                <span class=\"w-100 d-block title\">Governance Processes</span>\n              </span>\n              <span class=\"col-lg-3\">\n                <span class=\"total-weight-block\">Total Weight: 360</span>\n              </span>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel\">\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled\" data-simplebar>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.1 % of Children whose Unique ID is seeded in SDMIS</h6>\n                <p>100% of all students in all schools aged 6 to 18 years.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.2 % of Teachers whose Unique ID is seeded in any electronic database\n                  of\n                  the State Government/UT Administration</h6>\n                <p>100% of all teachers in all schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.3 % of average daily attendance of students captured digitally\n                  (States and\n                  UTs may set digital mechanism similar to AMS of MDM)</h6>\n                <p>75% of all students in all Govt. and Govt. aided schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.4 % of average daily attendance of recorded in an electronic\n                  attendance\n                  system</h6>\n                <p>80% of all teachers in all govt. and govt. aided schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.5 % of Schools at Elementary level Covered Under Twinning/\n                  Partnership\n                </h6>\n                <p>50% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.6 % of Schools at Elementary level displaying photo of elementary\n                  teachers\n                  for Govt and aided schools - Govt. and aided schools</h6>\n                <p>100% of all elementary Govt. and aided schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.7 % of single teacher primary schools</h6>\n                <p>There should be no single teacher school at primary level, therefore\n                  bench mark to be set as zero (0).</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.8 % of primary schools having PTR as per RTE norm</h6>\n                <p>100% of all Schools at primary level.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.9 % of primary and upper primary schools meeting head teacher norms\n                  as per\n                  RTE</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.10 % of secondary schools having principals/ head masters in\n                  position</h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.11 a. % Upper Primary schools meeting norms of subject - teacher as\n                  per RTE\n                </h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.11 b. % Secondary Schools who have teacher for all core subjects\n                </h6>\n                <p>100% of All Schools </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.12 % of academic positions filled in state and district academic\n                  institutions (SCERT/ SIE & DIETs) at the beginning of the given academic\n                  year 2018-19</h6>\n                <p>100% of all academic posts sanctioned by the State Government/ UT Admin.\n                </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.13 Average occupancy (in months) of District Education Officer (or\n                  equivalent) in last 03 year for all Districts</h6>\n                <p>100% of all such posts sanctioned by the State Government/ UT Admin.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.14 Average occupancy (in months) of Principal Secretary/ Secretary\n                  (Education), SPD (SSA) & SPD(RMSA) for last 03 years</h6>\n                <p>100% of all such posts sanctioned by the State Government/ UT Admin.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.15 Details of visits to the elementary schools during the previous\n                  academic\n                  year:<br />\n                  a. % of schools visited at leat 3 times for academic inspections<br />\n                  b. % of schools visited at least 3 times by CRC\n                  Co-ordinator<br />\n                  c. % of schools visited at least 3 times by Block level\n                  officer (BRC/ BEO)</h6>\n                <p>100% of all Govt. and aided schools. weightage points will be given as\n                  per average performance of a, b and c.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.16 a. Average number of days taken by State Govt./ UT Administration\n                  to\n                  release total Central share of funds to societies (during the financial\n                  year 2017-18)<br />\n                </h6>\n                <p>Within 15 days of receipt of central share of funds by the State/ UT.\n                </p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>\n                  b. Average number of days taken by State Govt./ UT\n                  Administration to release total State share due to societies (during the\n                  financial year 2017-18) (not applicable to UTs without legislature)</h6>\n                <p>Within 30 days of receipt of central share of funds by the State. In case\n                  of UTs without legislature, entire 20 weightage points will be assigned\n                  of part (a).</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.17 % of teachers evaluated (during the year 2017-18)</h6>\n                <p>100% of teachers in Govt. and aided schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.18 % of govt. head-teachers/ principals who have completed Schools\n                  Leadership (SL) training in the financial year 2017-18 (Measured against\n                  sanctioned by Central government)</h6>\n                <p>100% of the target in PAB of SSA and PAB of RMSA 2017-18.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.19 % of schools that have completed self-evaluation and made schools\n                  improvement plans during the financial year 2017-18</h6>\n                <p>100% of all Govt. and aided schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.20 % of teachers provided with sanctioned number of days training\n                  during\n                  the financial year 2017-18 - Govt. and aided</h6>\n                <p>100% of the target in PAB of SSA and PAB of RMSA 2017-18.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.21 Number of new teachers recruited through a transparent online\n                  recruitment system as a % of total number of new teachers recruited\n                  during 2017-18</h6>\n                <p>100% of all newly recruited teachers in Govt. schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.22 Number of teachers transferred through a transparent online\n                  system as a\n                  % of total number of teachers transferred during 2017-18</h6>\n                <p>100% of all eligible teachers in Govt. schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.23 Number of head-teachers/ principals recruited through a\n                  merit-based\n                  selection system as a % of total number of head-teachers/ principals\n                  recruited during 2017-18</h6>\n                <p>50% of all head-teachers/ principals recruited in Govt. schools.</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.24 % State/ UT budget share spent on school education to total\n                  State/ UT\n                  budget of 2017-18</h6>\n                <p>At least 20%</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 20</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.25 Funds (including value of goods and services in kind arranged\n                  through\n                  PPP, SSR etc. as a percentage of State/ UT budget on education during\n                  2017-18</h6>\n                <p>At least 1%</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: Shagun</div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-9\">\n                <h6>2.1.26 Percentage of each of the following registered under PFMS:<br />\n                  a. Schools<br />\n                  b.SCERT/ SIE c) DIETs</h6>\n                <p>Weightage points will be average of all there (100).</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <div class=\"detials weight\">Weight: 10</div>\n                <div class=\"detials source\">Data Source: UDISE</div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pgi-web/indicators/indicators.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pgi-web/indicators/indicators.component.ts ***!
  \************************************************************/
/*! exports provided: IndicatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsComponent", function() { return IndicatorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndicatorsComponent = /** @class */ (function () {
    function IndicatorsComponent() {
    }
    IndicatorsComponent.prototype.ngOnInit = function () {
        var accordion = document.getElementsByClassName('accordion');
        for (var i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', function () {
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            });
        }
    };
    IndicatorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indicators',
            template: __webpack_require__(/*! ./indicators.component.html */ "./src/app/pgi-web/indicators/indicators.component.html"),
            styles: [__webpack_require__(/*! ./indicators.component.css */ "./src/app/pgi-web/indicators/indicators.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndicatorsComponent);
    return IndicatorsComponent;
}());



/***/ }),

/***/ "./src/app/pgi-web/national-findings/national-findings.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pgi-web/national-findings/national-findings.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktd2ViL25hdGlvbmFsLWZpbmRpbmdzL25hdGlvbmFsLWZpbmRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pgi-web/national-findings/national-findings.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pgi-web/national-findings/national-findings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"banner\">\n  <img data-src=\"assets/images/national-finding-banner.jpg\" src=\"assets/images/blur.png\" alt=\"national-findings\" class=\"img-fluid w-100\" appLoadBanner>\n  <div class=\"container banner-caption\">\n    <div class=\"row h-100\">\n      <div class=\"col-md-10 d-flex align-items-center\">\n        <h2>National Findings</h2>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"main_content\">\n  <div class=\"container\">\n    <h2 class=\"heading\">National Findings <span>Domain Wise</span></h2>\n    <div class=\"row\">\n      <div class=\"col-lg-4\" *ngFor=\"let domain of domains; let index = index\">\n        <a href=\"javascript:void(0);\" [routerLink]=\"['/domain', index + 1]\">\n          <div\n            class=\"finding-box domain-{{domain.key=='Domain_1'?'one': (domain.key=='Domain_2'?'two':(domain.key=='Domain_3'?'three':(domain.key=='Domain_4'?'four':'five')))}}\">\n            <h3>{{domain.value}}</h3>\n            <div class=\"finding-box-score mt-3 mb-5\">\n              <span class=\"title\">Average Score</span>\n              <span class=\"score\">{{domain.avg}}</span>\n            </div>\n            <div class=\"d-flex\">\n              <div class=\"finding-box-score mr-5\">\n                <span class=\"arrow arrow-highest\"></span>\n                <span class=\"title\">Highest Score</span>\n                <span class=\"score\">{{domain.highest}}</span>\n              </div>\n              <div class=\"finding-box-score\">\n                <span class=\"arrow arrow-lowest\"></span>\n                <span class=\"title\">Lowest Score</span>\n                <span class=\"score\">{{domain.lowest}}</span>\n              </div>\n            </div>\n            <div class=\"finding-box-score finding-box-index text-left\">\n              <span class=\"title\">Share in Index</span>\n              <span class=\"score\">{{domain.max}}</span>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"state_carousel\" class=\"gray\">\n  <div class=\"container\">\n    <h2 class=\"heading\">State<code>s</code>/UT<code>s</code> Performance In <span>All Domains</span></h2>\n    <div class=\"text-right carousel-view\">\n      <a href=\"javascript:void(0);\" (click)=\"showSlider = 'big'\" class=\"carousel-view-block\" [ngClass]=\"{active: showSlider == 'big'}\"></a>\n      <a href=\"javascript:void(0);\" (click)=\"showSlider = 'small'\" class=\"carousel-view-card\" [ngClass]=\"{active: showSlider == 'small'}\"></a>\n    </div>\n    <div class=\"card-carousel block-view\" *ngIf=\"showSlider == 'big'\">\n      <owl-carousel-o [options]=\"bigSlider\" (changed)=\"getData($event)\">\n        <ng-container *ngFor=\"let slide of states\">\n          <ng-template carouselSlide>\n            <img src=\"assets/images/state-carousel/big/{{slide.banner}}\" alt=\"{{slide.key}}\" class=\"state-img\">\n            <div class=\"card-caption state-progress d-flex align-items-center justify-content-center\">\n              <div class=\"card-content\">\n                <h2 class=\"heading\">{{slide.key}}</h2>\n                <div class=\"grade-box\">\n                  <div\n                    class=\"grade-score grade-{{slide.grade==1?'one':(slide.grade==2?'two':(slide.grade==3?'three' : (slide.grade==4?'four':(slide.grade==5?'five': 'six'))))}}\">\n                    Grade\n                    {{slide.grade==1?'I':(slide.grade==2?'II':(slide.grade==3?'III' : (slide.grade==4?'IV':'V')))}}\n                  </div>\n                </div>\n                <div class=\"d-flex align-items-center mt-4\">\n                  <div class=\"progress-box progress-box-inverse sm\" *ngFor=\"let dom of slide.domain\">\n                    <svg width=\"200\" height=\"200\" viewBox=\"0 0 200 200\" stroke=\"blue\" class=\"radial-progress\">\n                      <defs>\n                        <linearGradient id=\"gradient\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n                          <stop offset=\"0%\" stop-color=\"#600e63\" />\n                          <stop offset=\"100%\" stop-color=\"#be55c2\" />\n                        </linearGradient>\n                      </defs>\n                      <circle class=\"progress-bg light\" cx=\"100\" cy=\"100\" r=\"85\" fill=\"none\" stroke=\"#e6e6e6\"\n                        stroke-width=\"12\" />\n                      <circle class=\"progress-meter\" cx=\"100\" cy=\"100\" r=\"85\" fill=\"none\" stroke=\"url(#gradient)\"\n                        stroke-width=\"12\" stroke-dasharray=\"534.070\" stroke-dashoffset=\"534.070\" />\n                    </svg>\n                    <div class=\"total-progress\">\n                      <img src=\"{{dom.icon}}\" alt=\"{{dom.name}}\">\n                      <div class=\"get-score\">\n                        <span class=\"performance\">{{dom.score}}</span></div>\n                      <div class=\"total-score\">Out of <span class=\"total\">{{dom.max}}</span>\n                      </div>\n                    </div>\n                    <div class=\"domain-name\">{{dom.name}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-template>\n        </ng-container>\n      </owl-carousel-o>\n    </div>\n    <div class=\"card-carousel card-view\" *ngIf=\"showSlider == 'small'\">\n      <owl-carousel-o [options]=\"smSlider\">\n        <ng-container *ngFor=\"let slide of states\" class=\"my-card\">\n          <ng-template carouselSlide>\n              <img src=\"assets/images/state-carousel/{{slide.banner}}\" alt=\"{{slide.key}}\" class=\"state-img\">\n            <div\n              class=\"card-caption grade-{{slide.grade==1?'one':(slide.grade==2?'two':(slide.grade==3?'three' : (slide.grade==4?'four':(slide.grade==5?'five': 'six'))))}}\">\n              <ul class=\"list-unstyled state-domain text-left\">\n                <li *ngFor=\"let d of slide.domain\">\n                  <div class=\"state-domain-score\">{{d.score}}/{{d.max}}</div>\n                  <div class=\"state-domain-name\">{{d.name}}</div>\n                </li>\n              </ul>\n              <div class=\"state-name-domain-wise\">\n                {{slide.key}}\n              </div>\n              <div\n                class=\"card-footer grade-{{slide.grade==1?'one':(slide.grade==2?'two':(slide.grade==3?'three' : (slide.grade==4?'four':(slide.grade==5?'five': 'six'))))}}\">\n                Grade\n                {{slide.grade==1?'I':(slide.grade==2?'II':(slide.grade==3?'III' : (slide.grade==4?'IV':'V')))}}\n              </div>\n            </div>\n          </ng-template>\n        </ng-container>\n      </owl-carousel-o>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pgi-web/national-findings/national-findings.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pgi-web/national-findings/national-findings.component.ts ***!
  \**************************************************************************/
/*! exports provided: NationalFindingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalFindingsComponent", function() { return NationalFindingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/data */ "./src/utils/data.ts");
/* harmony import */ var _assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/mapData.js */ "./src/assets/js/mapData.js");
/* harmony import */ var _assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_3__);





var NationalFindingsComponent = /** @class */ (function () {
    function NationalFindingsComponent() {
        this.showSlider = 'big';
        this.bigSlider = {
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            autoplay: false,
            smartSpeed: 1000,
            dots: false,
            navText: ['', ''],
            responsiveRefreshRate: 100,
            responsive: {
                0: {
                    items: 1
                }
            },
            nav: true
        };
        this.smSlider = {
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            autoplay: false,
            smartSpeed: 1000,
            dots: false,
            navText: ['', ''],
            responsiveRefreshRate: 100,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: true
        };
    }
    NationalFindingsComponent.prototype.getData = function (data) {
        var _this = this;
        this.activeSlides = data;
        var items = document.querySelectorAll('.owl-item .progress-meter');
        items.forEach(function (i) {
            i.removeAttribute('style');
        });
        setTimeout(function () {
            _this.loaderAnimation();
        });
    };
    NationalFindingsComponent.prototype.loaderAnimation = function () {
        var progresslItem = document.querySelectorAll('.owl-item.active .progress-box');
        progresslItem.forEach(function (item) {
            var performance = item.querySelector('.performance');
            var total = item.querySelector('.total');
            var t = total.textContent;
            var p = performance.textContent;
            var percentage;
            function getPercentage(a, b) {
                percentage = (a / b) * 100;
            }
            getPercentage(p, t);
            function increaseClouser(p) {
                var thisP = p;
                var intervalId = null;
                function clearThisInterval() {
                    // console.log(p);
                    clearInterval(intervalId);
                }
                return function increase(t) {
                    var i = 0;
                    intervalId = setInterval(function () {
                        performance.textContent = i++;
                        if (i > thisP) {
                            clearThisInterval();
                        }
                        ;
                    }, t);
                };
            }
            var increase = increaseClouser(p);
            var progressVal = item.querySelector('.progress-meter');
            var r = 85;
            var c = 2 * Math.PI * r;
            progressVal.style.transition = 'all 2s ease-in-out';
            function progress(value) {
                var progress = value / 100;
                var dashoffset = c * (1 - progress);
                progressVal.style.strokeDashoffset = dashoffset;
            }
            progressVal.style.strokeDasharray = c;
            var calc = Math.round(2000 / p) - 2;
            increase(calc);
            progress(percentage);
        });
    };
    NationalFindingsComponent.prototype.ngOnInit = function () {
        this.domains = _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"];
        this.domainData = myExtObject.getDomainData();
        for (var i = 0; i < this.domains.length; i++) {
            this.arr = Object.values(this.domainData[this.domains[i].key]);
            if (this.arr.indexOf(this.domains[i].max + '') !== -1) {
                this.arr.splice(this.arr.indexOf(this.domains[i].max + ''), 1);
            }
            this.arrAvg = this.arr.reduce(function (a, b) {
                return parseInt(a) + parseInt(b);
            });
            var avg = this.arrAvg / 36;
            this.domains[i].avg = parseInt(avg + '');
            this.domains[i].lowest = Math.min.apply(Math, this.arr);
            this.domains[i].highest = Math.max.apply(Math, this.arr);
        }
        this.states = _utils_data__WEBPACK_IMPORTED_MODULE_2__["statesData"];
        this.territories = _utils_data__WEBPACK_IMPORTED_MODULE_2__["territoriesData"];
        this.states = JSON.parse(JSON.stringify(this.states));
        for (var i = 0; i < this.states.length; i++) {
            this.states[i].grade = myExtObject.findGrade(this.states[i].key);
            this.states[i].domain = [];
            for (var j = 0; j < _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"].length; j++) {
                this.dom = {};
                this.dom.name = _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"][j].value;
                this.dom.max = _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"][j].max;
                this.dom.icon = _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"][j].img;
                this.dom.score = this.domainData[_utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"][j].key][this.states[i].key];
                this.states[i].domain.push(this.dom);
            }
        }
        for (var i = 0; i < this.territories.length; i++) {
            this.territories[i].grade = myExtObject.findGrade(this.territories[i].key);
            this.territories[i].domain = [];
            for (var j = 0; j < _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"].length; j++) {
                this.dom = {};
                this.dom.name = _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"][j].value;
                this.dom.max = _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"][j].max;
                this.dom.icon = _utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"][j].img;
                this.dom.score = this.domainData[_utils_data__WEBPACK_IMPORTED_MODULE_2__["domains"][j].key][this.states[i].key];
                this.territories[i].domain.push(this.dom);
            }
            this.states.push(this.territories[i]);
        }
    };
    NationalFindingsComponent.prototype.ngAfterViewInit = function () {
    };
    NationalFindingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-national-findings',
            template: __webpack_require__(/*! ./national-findings.component.html */ "./src/app/pgi-web/national-findings/national-findings.component.html"),
            styles: [__webpack_require__(/*! ./national-findings.component.css */ "./src/app/pgi-web/national-findings/national-findings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NationalFindingsComponent);
    return NationalFindingsComponent;
}());



/***/ }),

/***/ "./src/app/pgi-web/pgi-web.component.css":
/*!***********************************************!*\
  !*** ./src/app/pgi-web/pgi-web.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ2ktd2ViL3BnaS13ZWIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pgi-web/pgi-web.component.html":
/*!************************************************!*\
  !*** ./src/app/pgi-web/pgi-web.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n    <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>\n<ngx-spinner\n  bdColor=\"#ffffff\"\n  size=\"medium\"\n  color=\"#740f78\"\n  type=\"square-jelly-box\">\n <p style=\"font-size: 20px; color: black\">Loading...</p>\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/pgi-web/pgi-web.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pgi-web/pgi-web.component.ts ***!
  \**********************************************/
/*! exports provided: PgiWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgiWebComponent", function() { return PgiWebComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgiWebComponent = /** @class */ (function () {
    function PgiWebComponent() {
    }
    PgiWebComponent.prototype.ngOnInit = function () {
    };
    PgiWebComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pgi-web',
            template: __webpack_require__(/*! ./pgi-web.component.html */ "./src/app/pgi-web/pgi-web.component.html"),
            styles: [__webpack_require__(/*! ./pgi-web.component.css */ "./src/app/pgi-web/pgi-web.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgiWebComponent);
    return PgiWebComponent;
}());



/***/ }),

/***/ "./src/app/pipes/safe-svg.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/safe-svg.pipe.ts ***!
  \****************************************/
/*! exports provided: SafeSvgPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeSvgPipe", function() { return SafeSvgPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeSvgPipe = /** @class */ (function () {
    function SafeSvgPipe(sanitizer, sanitized) {
        this.sanitizer = sanitizer;
        this.sanitized = sanitized;
    }
    SafeSvgPipe.prototype.transform = function (html) {
        return this.sanitized.bypassSecurityTrustHtml(html);
    };
    SafeSvgPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeSvg'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Sanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeSvgPipe);
    return SafeSvgPipe;
}());



/***/ }),

/***/ "./src/app/services/auth-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (loginModel) {
        loginModel.url = 'users/authenticate/AdminUser';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user_service_url + '/users/authenticate/AdminUser', loginModel);
    };
    AuthService.prototype.forgotPass = function (forgotPassModel) {
        forgotPassModel.url = 'users/forgotPassword/AdminUser';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user_service_url + '/users/forgotPassword/AdminUser', forgotPassModel);
    };
    AuthService.prototype.otp = function (otpModel) {
        otpModel.url = 'users/validate/AdminUser';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user_service_url + '/users/validate/AdminUser', otpModel);
    };
    AuthService.prototype.changePassword = function (userDto) {
        userDto.url = 'users/manage/AdminUser';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user_service_url + '/users/manage/AdminUser', userDto);
    };
    AuthService.prototype.resetPassword = function (userDto) {
        userDto.url = 'users/resetPassword/AdminUser';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user_service_url + '/users/resetPassword/AdminUser', userDto);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data */ "./src/utils/data.ts");
/* harmony import */ var _assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/mapData.js */ "./src/assets/js/mapData.js");
/* harmony import */ var _assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_3__);




var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getAllDetails = function (c, d) {
        var domainData = myExtObject.getDomainData();
        var states = _utils_data__WEBPACK_IMPORTED_MODULE_2__["statesData"];
        var territories = _utils_data__WEBPACK_IMPORTED_MODULE_2__["territoriesData"];
        var b = [];
        var a = [];
        a = Object.entries(domainData['Domain_' + c]);
        a = a.map(function (x) {
            return {
                key: x[0],
                value: x[1]
            };
        });
        var l = a.length;
        b = states.filter(function (val) {
            for (var i = 0; i < l; i++) {
                if (val.key.includes(a[i].key)) {
                    val.grade = myExtObject.findGrade(val.key);
                    val.score = a[i].value;
                    val.max = a[0].value;
                    return val;
                }
            }
        });
        territories.filter(function (val) {
            for (var i = 0; i < l; i++) {
                if (val.key.includes(a[i].key)) {
                    val.grade = myExtObject.findGrade(val.key);
                    val.score = a[i].value;
                    val.max = a[0].value;
                    b.push(val);
                }
            }
        });
        if (d) {
            console.log(d);
            return b.sort(function (x, y) { return y.score - x.score; }).slice(0, 4);
        }
        return b.sort(function (x, y) { return y.score - x.score; });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/signature-util.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/signature-util.service.ts ***!
  \****************************************************/
/*! exports provided: SignatureUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureUtilService", function() { return SignatureUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);




var SignatureUtilService = /** @class */ (function () {
    function SignatureUtilService() {
        this.data = {};
    }
    // generateAuthHeader(userName, pass) {
    //   var timeStamp = new Date().getTime();
    //   var plainCreds = userName + timeStamp + "-" + CryptoJS.AES.encrypt(pass, environment.encr_pass);
    //   var headers = new Headers({
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Basic ' + btoa(plainCreds),
    //     'timestamp': timeStamp,
    //   });
    //   return headers;
    // }
    SignatureUtilService.prototype.getSignature = function (inUrl, inParam, inRecordId, inIP, timeStamp, inData) {
        var secret = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].sign_key;
        if (undefined === inParam) {
            inParam = 'null';
        }
        var detail = inParam + timeStamp;
        var data;
        detail = detail + this.getHashCode(detail);
        if (undefined != inRecordId && null != inRecordId && inRecordId > 0) {
            detail = detail + inRecordId;
        }
        if (undefined != inIP && null != inIP && "" != inIP) {
            detail = detail + inIP;
        }
        if ("" != inUrl)
            this.strArr = [];
        {
            this.strArr = inUrl.split("/");
            if (this.strArr[2] === 'AdminUser') {
                detail += this.getSignatureDetails(inData);
            }
            data = this.strArr[0] + timeStamp + this.strArr[1] + this.strArr[2] + detail;
        }
        var hash = crypto_js__WEBPACK_IMPORTED_MODULE_3__["HmacSHA256"](data, secret);
        var hashInBase64 = crypto_js__WEBPACK_IMPORTED_MODULE_3__["enc"].Base64.stringify(hash);
        return hashInBase64;
    };
    SignatureUtilService.prototype.getHashCode = function (data) {
        var hash = 0;
        var char;
        if (data.length == 0)
            return 0;
        for (var i = 0; i < data.length; i++) {
            char = data.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    };
    SignatureUtilService.prototype.getSignatureDetails = function (inData) {
        var signatureDetail = "";
        if (undefined != inData.userId && null != inData.userId) {
            signatureDetail += inData.userId;
        }
        if (undefined != inData.password && null != inData.password) {
            signatureDetail += inData.password;
        }
        if (undefined != inData.oldPassword && null != inData.oldPassword) {
            signatureDetail += inData.oldPassword;
        }
        if (undefined != inData.newPassword && null != inData.newPassword) {
            signatureDetail += inData.newPassword;
        }
        if (undefined != inData.searchKey && null != inData.searchKey) {
            signatureDetail += inData.searchKey;
        }
        if (undefined != inData.userPojo && null != inData.userPojo) {
            if (undefined != inData.userPojo.userId && null != inData.userPojo.userId) {
                signatureDetail += inData.userPojo.userId;
            }
            if (undefined != inData.userPojo.password && null != inData.userPojo.password) {
                signatureDetail += inData.userPojo.password;
            }
            if (undefined != inData.userPojo.emailId && null != inData.userPojo.emailId) {
                signatureDetail += inData.userPojo.emailId;
            }
            if (undefined != inData.userPojo.mobileNo && null != inData.userPojo.mobileNo) {
                signatureDetail += inData.userPojo.mobileNo;
            }
            if (undefined === inData.userPojo.recordId) {
                signatureDetail += "null";
            }
            else {
                signatureDetail += inData.userPojo.recordId;
            }
            if (undefined != inData.userPojo.pwdSessionKey && null != inData.userPojo.pwdSessionKey) {
                signatureDetail += inData.userPojo.pwdSessionKey;
            }
        }
        return signatureDetail;
    };
    SignatureUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignatureUtilService);
    return SignatureUtilService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.loggedIn = false;
    }
    UsersService.prototype.setLoggedIn = function () {
        this.loggedIn = true;
    };
    UsersService.prototype.getLoggedIn = function () {
        return this.loggedIn;
    };
    UsersService.prototype.setLoggedOut = function () {
        this.loggedIn = false;
    };
    UsersService.prototype.getUsers = function (userDto) {
        userDto.url = 'users/list/AdminUser';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user_service_url + '/users/list/AdminUser', userDto);
    };
    UsersService.prototype.getIndicators = function (userDto) {
        userDto.url = 'pgiApp/list/IndicatorMaster';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pgi_service_url + '/pgiApp/list/IndicatorMaster', userDto);
    };
    UsersService.prototype.getStateData = function (userDto) {
        userDto.url = 'pgiApp/list/IndicatorScore';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pgi_service_url + '/pgiApp/list/IndicatorScore', userDto);
    };
    UsersService.prototype.getStateList = function (locationDto) {
        locationDto.url = 'locations/list/NpState';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].location_service_url + '/locations/list/NpState', locationDto);
    };
    UsersService.prototype.manageIndData = function (userDto) {
        userDto.url = 'pgiApp/manage/IndicatorScore';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pgi_service_url + '/pgiApp/manage/IndicatorScore', userDto);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/state/state.component.css":
/*!*******************************************!*\
  !*** ./src/app/state/state.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0ZS9zdGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/state/state.component.html":
/*!********************************************!*\
  !*** ./src/app/state/state.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"banner\">\n  <img data-src=\"assets/images/states-banner/{{stateDetail.banner}}\" src=\"assets/images/blur.png\" alt=\"{{stateDetail.key}}\" class=\"img-fluid w-100\" appLoadBanner>\n  <div class=\"container banner-caption\">\n    <div class=\"row h-100\">\n      <div class=\"col-md-8 d-flex align-items-center\">\n        <div>\n          <h2>{{stateDetail.key}}</h2>\n          <div\n            class=\"grade-score grade-{{grade==1?'one':(grade==2?'two':(grade==3?'three' : (grade==4?'four':'five')))}}\">\n            Grade\n            {{grade==1?'I':(grade==2?'II':(grade==3?'III' : (grade==4?'IV':'V')))}}</div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"state-map grade-one\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\" [innerHtml]=\"stateDetail.path | safeSvg\"></svg>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"about-state\" id=\"main_content\">\n  <div class=\"container\">\n    <h2 class=\"heading mt-5\"><span>Performance</span> Matrix</h2>\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-1 state-progress text-center\">\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-6\" *ngFor=\"let x of domains; let index = index\">\n            <a href=\"javascript:void(0);\" class=\"d-inline-block\" [routerLink]=\"['/domain', index + 1]\">\n              <div class=\"progress-box\">\n                <svg width=\"200\" height=\"200\" viewBox=\"0 0 200 200\" stroke=\"blue\" class=\"radial-progress\">\n                  <circle class=\"progress-bg\" cx=\"100\" cy=\"100\" r=\"85\" fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"8\" />\n                  <circle class=\"progress-meter domain-one\" cx=\"100\" cy=\"100\" r=\"85\" fill=\"none\" stroke=\"#f77a52\"\n                    stroke-width=\"8\" stroke-dasharray=\"534.070\" stroke-dashoffset=\"534.070\" />\n                </svg>\n                <div class=\"total-progress\">\n                  <img src=\"{{x.img}}\" alt=\"{{x.value}}\">\n                  <div class=\"get-score\">\n                    <span class=\"performance domain-one\">{{x.score}}</span></div>\n                  <div class=\"total-score\">Out of <span class=\"total\">{{x.max}}</span></div>\n                </div>\n              </div>\n              <div class=\"domain-name domain-one\">{{x.value}}</div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"indicators\" class=\"gray\">\n  <div class=\"container\">\n    <h2 class=\"heading\"><span>Indicators</span> Wise Score </h2>\n    <div class=\"accordion\" data-accordion=\"first\">\n      <div class=\"card\">\n        <div class=\"card-header domain-one\">\n          <button class=\"btn btn-link\" type=\"button\">\n            <span class=\"row d-flex align-items-center\">\n              <span class=\"col-lg-9\">\n                <small class=\"w-100 d-block \">Category - Outcomes</small>\n                <span class=\"w-100 d-block title\">Learning Outcomes & Quality</span>\n              </span>\n              <span class=\"col-lg-3\">\n                <span class=\"total-weight-block\">Total Score:\n                  {{domain1[domain1.length-1][stateDetail.key]}}/180</span>\n              </span>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel\">\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled\" data-simplebar>\n          <li *ngFor=\"let d1 of domain1 | slice : 0 : domain1.length-1\">\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-10\">\n                <h6>{{d1['Serial']}} {{d1['Indicator']}} </h6>\n                <div class=\"detials source\" *ngIf=\"!(d1[stateDetail.key]=='' || d1['Weight']=='')\">Data Source:\n                  {{d1['Data Source']}}</div>\n              </div>\n              <div class=\"col-lg-2\">\n                <div class=\"detials score\" *ngIf=\"!(d1[stateDetail.key]=='' || d1['Weight']=='')\">\n                  <span>{{d1[stateDetail.key]}}/{{d1['Weight']}}</span></div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"accordion\" data-accordion=\"second\">\n      <div class=\"card\">\n        <div class=\"card-header domain-two\">\n          <button class=\"btn btn-link collapsed\" type=\"button\">\n            <span class=\"row d-flex align-items-center\">\n              <span class=\"col-lg-9\">\n                <small class=\"w-100 d-block \">Category - Outcomes</small>\n                <span class=\"w-100 d-block title\">Access</span>\n              </span>\n              <span class=\"col-lg-3\">\n                <span class=\"total-weight-block\">Total Score:\n                  {{domain2[domain2.length-1][stateDetail.key]}}/80</span>\n              </span>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel\">\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled\" data-simplebar>\n          <li *ngFor=\"let d2 of domain2 | slice : 0 : domain1.length-1\">\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-10\">\n                <h6>{{d2['Serial']}} {{d2['Indicator']}} </h6>\n                <div class=\"detials source\" *ngIf=\"!(d2[stateDetail.key]=='' || d2['Weight']=='')\">Data Source:\n                  {{d2['Data Source']}}</div>\n              </div>\n              <div class=\"col-lg-2\">\n                <div class=\"detials score\" *ngIf=\"!(d2[stateDetail.key]=='' || d2['Weight']=='')\">\n                  <span>{{d2[stateDetail.key]}}/{{d2['Weight']}}</span></div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"accordion\" data-accordion=\"third\">\n      <div class=\"card\">\n        <div class=\"card-header domain-three\">\n          <button class=\"btn btn-link\" type=\"button\">\n            <span class=\"row d-flex align-items-center\">\n              <span class=\"col-lg-9\">\n                <small class=\"w-100 d-block \">Category - Outcomes</small>\n                <span class=\"w-100 d-block title\">Infrastructure & Facilities</span>\n              </span>\n              <span class=\"col-lg-3\">\n                <span class=\"total-weight-block\">Total Score:\n                  {{domain3[domain3.length-1][stateDetail.key]}}/150</span>\n              </span>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel\">\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled\" data-simplebar>\n          <li *ngFor=\"let d3 of domain3 | slice : 0 : domain1.length-1\">\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-10\">\n                <h6>{{d3['Serial']}} {{d3['Indicator']}} </h6>\n                <div class=\"detials source\" *ngIf=\"!(d3[stateDetail.key]=='' || d3['Weight']=='')\">Data Source:\n                  {{d3['Data Source']}}</div>\n              </div>\n              <div class=\"col-lg-2\">\n                <div class=\"detials score\" *ngIf=\"!(d3[stateDetail.key]=='' || d3['Weight']=='')\">\n                  <span>{{d3[stateDetail.key]}}/{{d3['Weight']}}</span></div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"accordion\" data-accordion=\"fourth\">\n      <div class=\"card\">\n        <div class=\"card-header domain-four\">\n          <button class=\"btn btn-link collapsed\" type=\"button\">\n            <span class=\"row d-flex align-items-center\">\n              <span class=\"col-lg-9\">\n                <small class=\"w-100 d-block \">Category - Outcomes</small>\n                <span class=\"w-100 d-block title\">Equity</span>\n              </span>\n              <span class=\"col-lg-3\">\n                <span class=\"total-weight-block\">Total Score:\n                  {{domain4[domain4.length-1][stateDetail.key]}}/230</span>\n              </span>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel\">\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled\" data-simplebar>\n          <li *ngFor=\"let d4 of domain4 | slice : 0 : domain1.length-1\">\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-10\">\n                <h6>{{d4['Serial']}} {{d4['Indicator']}} </h6>\n                <div class=\"detials source\" *ngIf=\"!(d4[stateDetail.key]=='' || d4['Weight']=='')\">Data Source:\n                  {{d4['Data Source']}}</div>\n              </div>\n              <div class=\"col-lg-2\">\n                <div class=\"detials score\" *ngIf=\"!(d4[stateDetail.key]=='' || d4['Weight']=='')\">\n                  <span>{{d4[stateDetail.key]}}/{{d4['Weight']}}</span></div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"accordion\" data-accordion=\"fifth\">\n      <div class=\"card\">\n        <div class=\"card-header domain-four\">\n          <button class=\"btn btn-link collapsed\" type=\"button\">\n            <span class=\"row d-flex align-items-center\">\n              <span class=\"col-lg-9\">\n                <small class=\"w-100 d-block \">Category - Governance & Management</small>\n                <span class=\"w-100 d-block title\">Governance Processes</span>\n              </span>\n              <span class=\"col-lg-3\">\n                <span class=\"total-weight-block\">Total Score:\n                  {{domain5[domain5.length-1][stateDetail.key]}}/360</span>\n              </span>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel\">\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled\" data-simplebar>\n          <li *ngFor=\"let d5 of domain5 | slice : 0 : domain1.length-1\">\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col-lg-10\">\n                <h6>{{d5['Serial']}} {{d5['Indicator']}} </h6>\n                <div class=\"detials source\" *ngIf=\"!(d5[stateDetail.key]=='' || d5['Weight']=='')\">Data Source:\n                  {{d5['Data Source']}}</div>\n              </div>\n              <div class=\"col-lg-2\">\n                <div class=\"detials score\" *ngIf=\"!(d5[stateDetail.key]=='' || d5['Weight']=='')\">\n                  <span>{{d5[stateDetail.key]}}/{{d5['Weight']}}</span></div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"similar-performance\">\n  <div class=\"container\">\n    <h2 class=\"heading\">States under same <span>Grade</span></h2>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6\" *ngFor=\"let sim of simStateDetails\">\n        <div class=\"media state-block align-items-center\">\n          <div\n            class=\"state-map small mr-3 grade-{{grade==1?'one':(grade==2?'two':(grade==3?'three' : (grade==4?'four':(grade==5?'five': 'six'))))}}\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\" [innerHtml]=\"sim.path | safeSvg\"></svg>\n          </div>\n          <div class=\"media-body\">\n            <h5 class=\"mt-0 text-uppercase state-name\">{{sim.key}}</h5>\n            <h6 class=\"text-uppercase grade\">Grade\n              {{sim.grade==1?'I':(sim.grade==2?'II':(sim.grade==3?'III' : (sim.grade==4?'IV':'V')))}}\n            </h6>\n            <a [routerLink]=\"['/state', sim.value]\" class=\"button purplle sm\">more</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/state/state.component.ts":
/*!******************************************!*\
  !*** ./src/app/state/state.component.ts ***!
  \******************************************/
/*! exports provided: StateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/data */ "./src/utils/data.ts");
/* harmony import */ var _assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/js/mapData.js */ "./src/assets/js/mapData.js");
/* harmony import */ var _assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mapData_js__WEBPACK_IMPORTED_MODULE_4__);





var StateComponent = /** @class */ (function () {
    function StateComponent(route, sanitizer) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.impDomain = [];
    }
    StateComponent.prototype.loaderAnimation = function () {
        var progresslItem = document.querySelectorAll('.progress-box');
        progresslItem.forEach(function (item) {
            var performance = item.querySelector('.performance');
            var total = item.querySelector('.total');
            var t = total.textContent;
            var p = performance.textContent;
            var percentage;
            function getPercentage(a, b) {
                percentage = (a / b) * 100;
            }
            getPercentage(p, t);
            function increaseClouser(p) {
                var thisP = p;
                var intervalId = null;
                function clearThisInterval() {
                    clearInterval(intervalId);
                }
                return function increase(t) {
                    var i = 0;
                    intervalId = setInterval(function () {
                        performance.textContent = i++;
                        if (i > thisP) {
                            clearThisInterval();
                        }
                        ;
                    }, t);
                };
            }
            var increase = increaseClouser(p);
            var progressVal = item.querySelector('.progress-meter');
            var r = 85;
            var c = 2 * Math.PI * r;
            progressVal.style.transition = 'all 2s ease-in-out';
            function progress(value) {
                var progress = value / 100;
                var dashoffset = c * (1 - progress);
                progressVal.style.strokeDashoffset = dashoffset;
            }
            progressVal.style.strokeDasharray = c;
            var calc = Math.round(2000 / p) - 2;
            increase(calc);
            progress(percentage);
        });
    };
    StateComponent.prototype.refreshLoader = function () {
        var items = document.querySelectorAll('.progress-meter');
        items.forEach(function (i) {
            i.removeAttribute('style');
        });
    };
    StateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.states = _utils_data__WEBPACK_IMPORTED_MODULE_3__["statesData"];
        this.territories = _utils_data__WEBPACK_IMPORTED_MODULE_3__["territoriesData"];
        this.domains = _utils_data__WEBPACK_IMPORTED_MODULE_3__["domains"];
        this.gradeData = _utils_data__WEBPACK_IMPORTED_MODULE_3__["gradeData"];
        this.domain1 = _utils_data__WEBPACK_IMPORTED_MODULE_3__["Domain1"];
        this.domain2 = _utils_data__WEBPACK_IMPORTED_MODULE_3__["Domain2"];
        this.domain3 = _utils_data__WEBPACK_IMPORTED_MODULE_3__["Domain3"];
        this.domain4 = _utils_data__WEBPACK_IMPORTED_MODULE_3__["Domain4"];
        this.domain5 = _utils_data__WEBPACK_IMPORTED_MODULE_3__["Domain5"];
        this.route.params.subscribe(function (param) {
            _this.pageId = param["sId"];
            _this.stateDetail = _this.states.find(function (elem) {
                return elem.value === _this.pageId;
            });
            if (!_this.stateDetail) {
                _this.stateDetail = _this.territories.find(function (elem) {
                    return elem.value === _this.pageId;
                });
            }
            _this.grade = myExtObject.findGrade(_this.stateDetail.key);
            _this.domainData = myExtObject.getDomainData();
            for (var i = 0; i < _this.domains.length; i++) {
                _this.domains[i].score = _this.domainData[_this.domains[i].key][_this.stateDetail.key];
                var arr = Object.values(_this.domainData[_this.domains[i].key]);
                var arrAvg = arr.reduce(function (a, b) {
                    return parseInt(a + '') + parseInt(b + '');
                });
                var avg = _this.arrAvg / 36;
                if (_this.domains[i].score < parseInt(avg + '')) {
                    _this.impDomain.push(_this.domains[i]);
                }
            }
            _this.simStates = _this.gradeData['Grade' + _this.grade].filter(function (value) {
                return (value !== _this.stateDetail.key);
            });
            _this.simStateDetails = _this.states.filter(function (val) {
                val.grade = myExtObject.findGrade(val.key);
                return _this.simStates.includes(val.key);
            });
            _this.territories.filter(function (val) {
                val.grade = myExtObject.findGrade(val.key);
                if (_this.simStates.includes(val.key)) {
                    _this.simStateDetails.push(val);
                }
            });
            _this.simStateDetails = _this.simStateDetails.slice(0, 3);
            _this.refreshLoader();
            setTimeout(function () {
                _this.loaderAnimation();
            }, 300);
        });
    };
    StateComponent.prototype.ngAfterViewInit = function () {
        var accordion = document.getElementsByClassName('accordion');
        for (var i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', function () {
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            });
        }
    };
    StateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-state',
            template: __webpack_require__(/*! ./state.component.html */ "./src/app/state/state.component.html"),
            styles: [__webpack_require__(/*! ./state.component.css */ "./src/app/state/state.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Sanitizer"]])
    ], StateComponent);
    return StateComponent;
}());



/***/ }),

/***/ "./src/assets/js/canvas.js":
/*!*********************************!*\
  !*** ./src/assets/js/canvas.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 CanvasJS HTML5 & JavaScript Charts - v2.3.1 GA - https://canvasjs.com/ 
 Copyright 2018 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     https://canvasjs.com/license/

*/
/*eslint-disable*/
/*jshint ignore:start*/
(function(){function qa(k,p){k.prototype=eb(p.prototype);k.prototype.constructor=k;k.base=p.prototype}function eb(k){function p(){}p.prototype=k;return new p}function Ya(k,p,D){"millisecond"===D?k.setMilliseconds(k.getMilliseconds()+1*p):"second"===D?k.setSeconds(k.getSeconds()+1*p):"minute"===D?k.setMinutes(k.getMinutes()+1*p):"hour"===D?k.setHours(k.getHours()+1*p):"day"===D?k.setDate(k.getDate()+1*p):"week"===D?k.setDate(k.getDate()+7*p):"month"===D?k.setMonth(k.getMonth()+1*p):"year"===D&&k.setFullYear(k.getFullYear()+
1*p);return k}function $(k,p){var D=!1;0>k&&(D=!0,k*=-1);k=""+k;for(p=p?p:1;k.length<p;)k="0"+k;return D?"-"+k:k}function Ia(k){if(!k)return k;k=k.replace(/^\s\s*/,"");for(var p=/\s/,D=k.length;p.test(k.charAt(--D)););return k.slice(0,D+1)}function Ea(k){k.roundRect=function(k,D,r,u,H,F,z,v){z&&(this.fillStyle=z);v&&(this.strokeStyle=v);"undefined"===typeof H&&(H=5);this.lineWidth=F;this.beginPath();this.moveTo(k+H,D);this.lineTo(k+r-H,D);this.quadraticCurveTo(k+r,D,k+r,D+H);this.lineTo(k+r,D+u-H);
this.quadraticCurveTo(k+r,D+u,k+r-H,D+u);this.lineTo(k+H,D+u);this.quadraticCurveTo(k,D+u,k,D+u-H);this.lineTo(k,D+H);this.quadraticCurveTo(k,D,k+H,D);this.closePath();z&&this.fill();v&&0<F&&this.stroke()}}function Sa(k,p){return k-p}function Ta(k,p,D){if(k&&p&&D){D=D+"."+p;var r="image/"+p;k=k.toDataURL(r);var u=!1,H=document.createElement("a");H.download=D;H.href=k;if("undefined"!==typeof Blob&&new Blob){for(var F=k.replace(/^data:[a-z\/]*;base64,/,""),F=atob(F),z=new ArrayBuffer(F.length),z=new Uint8Array(z),
v=0;v<F.length;v++)z[v]=F.charCodeAt(v);p=new Blob([z.buffer],{type:"image/"+p});try{window.navigator.msSaveBlob(p,D),u=!0}catch(L){H.dataset.downloadurl=[r,H.download,H.href].join(":"),H.href=window.URL.createObjectURL(p)}}if(!u)try{event=document.createEvent("MouseEvents"),event.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),H.dispatchEvent?H.dispatchEvent(event):H.fireEvent&&H.fireEvent("onclick")}catch(E){p=window.open(),p.document.write("<img src='"+k+"'></img><div>Please right click on the image and save it to your device</div>"),
p.document.close()}}}function N(k){var p=((k&16711680)>>16).toString(16),D=((k&65280)>>8).toString(16);k=((k&255)>>0).toString(16);p=2>p.length?"0"+p:p;D=2>D.length?"0"+D:D;k=2>k.length?"0"+k:k;return"#"+p+D+k}function fb(k,p){var D=this.length>>>0,r=Number(p)||0,r=0>r?Math.ceil(r):Math.floor(r);for(0>r&&(r+=D);r<D;r++)if(r in this&&this[r]===k)return r;return-1}function u(k){return null===k||"undefined"===typeof k}function Fa(k){k.indexOf||(k.indexOf=fb);return k}function gb(k){if(U.fSDec)k[ja("`eeDwdouMhrudods")](ja("e`u`@ohl`uhnoHuds`uhnoDoe"),
function(){U._fTWm&&U._fTWm(k)})}function Za(k,p,D){D=D||"normal";var r=k+"_"+p+"_"+D,u=$a[r];if(isNaN(u)){try{k="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+k+"; font-size:"+p+"px; font-weight:"+D+";";if(!xa){var H=document.body;xa=document.createElement("span");xa.innerHTML="";var F=document.createTextNode("Mpgyi");xa.appendChild(F);H.appendChild(xa)}xa.style.display="";xa.setAttribute("style",k);u=Math.round(xa.offsetHeight);
xa.style.display="none"}catch(z){u=Math.ceil(1.1*p)}u=Math.max(u,p);$a[r]=u}return u}function R(k,p){var D=[];if(D={solid:[],shortDash:[3,1],shortDot:[1,1],shortDashDot:[3,1,1,1],shortDashDotDot:[3,1,1,1,1,1],dot:[1,2],dash:[4,2],dashDot:[4,2,1,2],longDash:[8,2],longDashDot:[8,2,1,2],longDashDotDot:[8,2,1,2,1,2]}[k||"solid"])for(var r=0;r<D.length;r++)D[r]*=p;else D=[];return D}function O(k,p,D,r,u){r=r||[];u=u||!1;r.push([k,p,D,u]);return k.addEventListener?(k.addEventListener(p,D,u),D):k.attachEvent?
(r=function(p){p=p||window.event;p.preventDefault=p.preventDefault||function(){p.returnValue=!1};p.stopPropagation=p.stopPropagation||function(){p.cancelBubble=!0};D.call(k,p)},k.attachEvent("on"+p,r),r):!1}function ab(k,p,D){k*=W;p*=W;k=D.getImageData(k,p,2,2).data;p=!0;for(D=0;4>D;D++)if(k[D]!==k[D+4]|k[D]!==k[D+8]|k[D]!==k[D+12]){p=!1;break}return p?k[0]<<16|k[1]<<8|k[2]:0}function na(k,p,D){return k in p?p[k]:D[k]}function Oa(k,p,D){if(r&&bb){var u=k.getContext("2d");Pa=u.webkitBackingStorePixelRatio||
u.mozBackingStorePixelRatio||u.msBackingStorePixelRatio||u.oBackingStorePixelRatio||u.backingStorePixelRatio||1;W=Ua/Pa;k.width=p*W;k.height=D*W;Ua!==Pa&&(k.style.width=p+"px",k.style.height=D+"px",u.scale(W,W))}else k.width=p,k.height=D}function hb(k){if(!ib){var p=!1,D=!1;"undefined"===typeof ra.Chart.creditHref?(k.creditHref=ja("iuuqr;..b`ow`rkr/bnl."),k.creditText=ja("B`ow`rKR/bnl")):(p=k.updateOption("creditText"),D=k.updateOption("creditHref"));if(k.creditHref&&k.creditText){k._creditLink||
(k._creditLink=document.createElement("a"),k._creditLink.setAttribute("class","canvasjs-chart-credit"),k._creditLink.setAttribute("title","JavaScript Charts"),k._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:2px;top:"+(k.height-14)+"px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),k._creditLink.setAttribute("tabIndex",-1),k._creditLink.setAttribute("target","_blank"));if(0===k.renderCount||
p||D)k._creditLink.setAttribute("href",k.creditHref),k._creditLink.innerHTML=k.creditText;k._creditLink&&k.creditHref&&k.creditText?(k._creditLink.parentElement||k._canvasJSContainer.appendChild(k._creditLink),k._creditLink.style.top=k.height-14+"px"):k._creditLink.parentElement&&k._canvasJSContainer.removeChild(k._creditLink)}}}function ta(k,p){Ja&&(this.canvasCount|=0,window.console.log(++this.canvasCount));var D=document.createElement("canvas");D.setAttribute("class","canvasjs-chart-canvas");Oa(D,
k,p);r||"undefined"===typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(D);return D}function sa(k,p,D){for(var r in D)p.style[r]=D[r]}function ua(k,p,D){p.getAttribute("state")||(p.style.backgroundColor=k.toolbar.backgroundColor,p.style.color=k.toolbar.fontColor,p.style.border="none",sa(k,p,{WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"}));p.getAttribute("state")!==D&&(p.setAttribute("state",D),p.setAttribute("type","button"),sa(k,p,{padding:"5px 12px",
cursor:"pointer","float":"left",width:"40px",height:"25px",outline:"0px",verticalAlign:"baseline",lineHeight:"0"}),p.setAttribute("title",k._cultureInfo[D+"Text"]),p.innerHTML="<img style='height:95%; pointer-events: none;' src='"+jb[D].image+"' alt='"+k._cultureInfo[D+"Text"]+"' />")}function Qa(){for(var k=null,p=0;p<arguments.length;p++)k=arguments[p],k.style&&(k.style.display="inline")}function va(){for(var k=null,p=0;p<arguments.length;p++)(k=arguments[p])&&k.style&&(k.style.display="none")}
function V(k,p,D,r,v){this._defaultsKey=k;this._themeOptionsKey=p;this._index=r;this.parent=v;this._eventListeners=[];k={};this.theme&&u(p)&&u(r)?k=u(ya[this.theme])?ya.light1:ya[this.theme]:this.parent&&(this.parent.themeOptions&&this.parent.themeOptions[p])&&(null===r?k=this.parent.themeOptions[p]:0<this.parent.themeOptions[p].length&&(r=Math.min(this.parent.themeOptions[p].length-1,r),k=this.parent.themeOptions[p][r]));this.themeOptions=k;this.options=D?D:{_isPlaceholder:!0};this.setOptions(this.options,
k)}function Ga(k,p,r,u,v){"undefined"===typeof v&&(v=0);this._padding=v;this._x1=k;this._y1=p;this._x2=r;this._y2=u;this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding}function ka(k,p){ka.base.constructor.call(this,"TextBlock",null,p,null,null);this.ctx=k;this._isDirty=!0;this._wrappedText=null;this._initialize()}function Va(k,p){Va.base.constructor.call(this,"Toolbar","toolbar",p,null,k);this.chart=k;this.canvas=k.canvas;this.ctx=this.chart.ctx;this.optionsName=
"toolbar"}function Aa(k,p){Aa.base.constructor.call(this,"Title","title",p,null,k);this.chart=k;this.canvas=k.canvas;this.ctx=this.chart.ctx;this.optionsName="title";if(u(this.options.margin)&&k.options.subtitles)for(var r=k.options.subtitles,za=0;za<r.length;za++)if((u(r[za].horizontalAlign)&&"center"===this.horizontalAlign||r[za].horizontalAlign===this.horizontalAlign)&&(u(r[za].verticalAlign)&&"top"===this.verticalAlign||r[za].verticalAlign===this.verticalAlign)&&!r[za].dockInsidePlotArea===!this.dockInsidePlotArea){this.margin=
0;break}"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function Ka(k,p,r){Ka.base.constructor.call(this,"Subtitle","subtitles",p,r,k);this.chart=k;this.canvas=k.canvas;this.ctx=this.chart.ctx;this.optionsName="subtitles";this.isOptionsInArray=!0;"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;
this.bounds={x1:null,y1:null,x2:null,y2:null}}function Wa(){this.pool=[]}function La(k){var p;k&&Ma[k]&&(p=Ma[k]);La.base.constructor.call(this,"CultureInfo",null,p,null,null)}var Ja=!1,U={},r=!!document.createElement("canvas").getContext,ra={Chart:{width:500,height:400,zoomEnabled:!1,zoomType:"x",backgroundColor:"white",theme:"light1",animationEnabled:!1,animationDuration:1200,dataPointWidth:null,dataPointMinWidth:null,dataPointMaxWidth:null,colorSet:"colorSet1",culture:"en",creditHref:"",creditText:"CanvasJS",
interactivityEnabled:!0,exportEnabled:!1,exportFileName:"Chart",rangeChanging:null,rangeChanged:null,publicProperties:{title:"readWrite",subtitles:"readWrite",toolbar:"readWrite",toolTip:"readWrite",legend:"readWrite",axisX:"readWrite",axisY:"readWrite",axisX2:"readWrite",axisY2:"readWrite",data:"readWrite",options:"readWrite",bounds:"readOnly",container:"readOnly"}},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",
fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:r?"transparent":null,margin:5,wrap:!0,maxWidth:null,dockInsidePlotArea:!1,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Subtitle:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:14,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:2,wrap:!0,maxWidth:null,
dockInsidePlotArea:!1,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Toolbar:{backgroundColor:"white",backgroundColorOnHover:"#2196f3",borderColor:"#2196f3",borderThickness:1,fontColor:"black",fontColorOnHover:"white",publicProperties:{options:"readWrite",chart:"readOnly"}},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",cursor:null,itemmouseover:null,itemmouseout:null,
itemmousemove:null,itemclick:null,dockInsidePlotArea:!1,reversed:!1,backgroundColor:r?"transparent":null,borderColor:r?"transparent":null,borderThickness:0,cornerRadius:0,maxWidth:null,maxHeight:null,markerMargin:null,itemMaxWidth:null,itemWidth:null,itemWrap:!0,itemTextFormatter:null,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},ToolTip:{enabled:!0,shared:!1,animationEnabled:!0,content:null,contentFormatter:null,reversed:!1,backgroundColor:r?"rgba(255,255,255,.9)":"rgb(255,255,255)",
borderColor:null,borderThickness:2,cornerRadius:5,fontSize:14,fontColor:"black",fontFamily:"Calibri, Arial, Georgia, serif;",fontWeight:"normal",fontStyle:"italic",publicProperties:{options:"readWrite",chart:"readOnly"}},Axis:{minimum:null,maximum:null,viewportMinimum:null,viewportMaximum:null,interval:null,intervalType:null,reversed:!1,logarithmic:!1,logarithmBase:10,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",titleWrap:!0,
titleMaxWidth:null,titleBackgroundColor:r?"transparent":null,titleBorderColor:r?"transparent":null,titleBorderThickness:0,titleCornerRadius:0,labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!0,labelWrap:!0,labelMaxWidth:null,labelFormatter:null,labelBackgroundColor:r?"transparent":null,labelBorderColor:r?"transparent":null,labelBorderThickness:0,labelCornerRadius:0,labelPlacement:"outside",prefix:"",suffix:"",
includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,lineDashType:"solid",gridColor:"A0A0A0",gridThickness:0,gridDashType:"solid",interlacedColor:r?"transparent":null,valueFormatString:null,margin:2,publicProperties:{options:"readWrite",stripLines:"readWrite",scaleBreaks:"readWrite",crosshair:"readWrite",bounds:"readOnly",chart:"readOnly"}},StripLine:{value:null,startValue:null,endValue:null,color:"orange",opacity:null,thickness:2,lineDashType:"solid",label:"",
labelPlacement:"inside",labelAlign:"far",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:null,labelBorderColor:r?"transparent":null,labelBorderThickness:0,labelCornerRadius:0,labelFontFamily:"arial",labelFontColor:"orange",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,showOnTop:!1,publicProperties:{options:"readWrite",axis:"readOnly",bounds:"readOnly",chart:"readOnly"}},ScaleBreaks:{autoCalculate:!1,collapsibleThreshold:"25%",maxNumberOfAutoBreaks:2,spacing:8,
type:"straight",color:"#FFFFFF",fillOpacity:0.9,lineThickness:2,lineColor:"#E16E6E",lineDashType:"solid",publicProperties:{options:"readWrite",customBreaks:"readWrite",axis:"readOnly",autoBreaks:"readOnly",bounds:"readOnly",chart:"readOnly"}},Break:{startValue:null,endValue:null,spacing:8,type:"straight",color:"#FFFFFF",fillOpacity:0.9,lineThickness:2,lineColor:"#E16E6E",lineDashType:"solid",publicProperties:{options:"readWrite",scaleBreaks:"readOnly",bounds:"readOnly",chart:"readOnly"}},Crosshair:{enabled:!1,
snapToDataPoint:!1,color:"grey",opacity:null,thickness:2,lineDashType:"solid",label:"",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:r?"grey":null,labelBorderColor:r?"grey":null,labelBorderThickness:0,labelCornerRadius:0,labelFontFamily:r?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:12,labelFontColor:"#fff",labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,valueFormatString:null,publicProperties:{options:"readWrite",axis:"readOnly",bounds:"readOnly",
chart:"readOnly"}},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,highlightEnabled:!0,cursor:"default",indexLabel:"",indexLabelPlacement:"auto",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:"gray",indexLabelLineThickness:1,indexLabelLineDashType:"solid",indexLabelMaxWidth:null,indexLabelWrap:!0,indexLabelFormatter:null,
lineThickness:2,lineDashType:"solid",connectNullData:!1,nullDataLineDashType:"dash",color:null,lineColor:null,risingColor:"white",fallingColor:"red",fillOpacity:null,startAngle:0,radius:null,innerRadius:null,neckHeight:null,neckWidth:null,reversed:!1,valueRepresents:null,linkedDataSeriesIndex:null,whiskerThickness:2,whiskerDashType:"solid",whiskerColor:null,whiskerLength:null,stemThickness:2,stemColor:null,stemDashType:"solid",upperBoxColor:"white",lowerBoxColor:"white",type:"column",xValueType:"number",
axisXType:"primary",axisYType:"primary",axisXIndex:0,axisYIndex:0,xValueFormatString:null,yValueFormatString:null,zValueFormatString:null,percentFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,legendMarkerBorderColor:r?"transparent":null,legendMarkerBorderThickness:0,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:r?"transparent":null,markerBorderThickness:0,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null,
visible:!0,publicProperties:{options:"readWrite",axisX:"readWrite",axisY:"readWrite",chart:"readOnly"}},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",
menuText:"More Options",saveJPGText:"Save as JPEG",savePNGText:"Save as PNG",printText:"Print",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},Ma={en:{}},v=r?"Trebuchet MS, Helvetica, sans-serif":"Arial",Ha=r?"Impact, Charcoal, sans-serif":"Arial",
Ba={colorSet1:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),colorSet2:"#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},I,fa,Q,ha,ga;fa="#333333";Q="#000000";I="#666666";ga=ha="#000000";var X=20,E=14,Xa={colorSet:"colorSet1",
backgroundColor:"#FFFFFF",title:{fontFamily:Ha,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:Ha,fontSize:E,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],data:[{indexLabelFontFamily:v,indexLabelFontSize:E,indexLabelFontColor:fa,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:v,titleFontSize:X,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",
lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisX2:[{titleFontFamily:v,
titleFontSize:X,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,
lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY:[{titleFontFamily:v,titleFontSize:X,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",
thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,
gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],legend:{fontFamily:v,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",
horizontalAlign:"center"},toolTip:{fontFamily:v,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1}};Q=fa="#F5F5F5";I="#FFFFFF";ha="#40BAF1";ga="#F5F5F5";var X=20,E=14,cb={colorSet:"colorSet2",title:{fontFamily:v,fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},subtitles:[{fontFamily:v,fontSize:E,fontColor:"#3A3A3A",fontWeight:"normal",verticalAlign:"top",margin:5}],data:[{indexLabelFontFamily:v,indexLabelFontSize:E,indexLabelFontColor:"#666666",indexLabelFontWeight:"normal",
indexLabelLineThickness:1}],axisX:[{titleFontFamily:v,titleFontSize:X,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:1,lineColor:"#BBBBBB",tickThickness:1,tickColor:"#BBBBBB",gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,
labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisX2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:1,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",
stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY:[{titleFontFamily:v,titleFontSize:X,titleFontColor:"#666666",titleFontWeight:"normal",
labelFontFamily:v,labelFontSize:E,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:0,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},
scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:0,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,
color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],legend:{fontFamily:v,fontSize:14,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:v,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1}};
Q=fa="#F5F5F5";I="#FFFFFF";ha="#40BAF1";ga="#F5F5F5";X=20;E=14;Ha={colorSet:"colorSet12",backgroundColor:"#2A2A2A",title:{fontFamily:Ha,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:Ha,fontSize:E,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],toolbar:{backgroundColor:"#666666",backgroundColorOnHover:"#FF7372",borderColor:"#FF7372",borderThickness:1,fontColor:"#F5F5F5",fontColorOnHover:"#F5F5F5"},data:[{indexLabelFontFamily:v,indexLabelFontSize:E,
indexLabelFontColor:Q,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,
labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisX2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,
labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,
labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",
lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",
labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],legend:{fontFamily:v,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:v,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1,fontColor:Q,backgroundColor:"rgba(0, 0, 0, .7)"}};I="#FFFFFF";Q=fa="#FAFAFA";ha="#40BAF1";ga="#F5F5F5";
var X=20,E=14,ya={light1:Xa,light2:cb,dark1:Ha,dark2:{colorSet:"colorSet2",backgroundColor:"#32373A",title:{fontFamily:v,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:v,fontSize:E,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],toolbar:{backgroundColor:"#666666",backgroundColorOnHover:"#FF7372",borderColor:"#FF7372",borderThickness:1,fontColor:"#F5F5F5",fontColorOnHover:"#F5F5F5"},data:[{indexLabelFontFamily:v,indexLabelFontSize:E,
indexLabelFontColor:Q,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,
labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisX2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,
labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,
labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:0,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",
lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:0,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",
labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],legend:{fontFamily:v,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:v,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1,fontColor:Q,backgroundColor:"rgba(0, 0, 0, .7)"}},theme1:Xa,theme2:cb,theme3:Xa},S={numberDuration:1,
yearDuration:314496E5,monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,minuteDuration:6E4,secondDuration:1E3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")};(function(){U.fSDec=function(k){for(var p="",r=0;r<k.length;r++)p+=String.fromCharCode(Math.ceil(k.length/57/5)^k.charCodeAt(r));return p};U.obj={trVs:"Ush`m!Wdsrhno",fntStr:"qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",txtBl:"udyuC`rdmhod",
fnt:"gnou",fSy:"ghmmRuxmd",fTx:"ghmmUdyu",grClr:"fsdx",cntx:"buy",tp:"unq"};delete ra[U.fSDec("Bi`su")][U.fSDec("bsdehuIsdg")];U.pro={sCH:ra[U.fSDec("Bi`su")][U.fSDec("bsdehuIsdg")]};U._fTWm=function(k){if("undefined"===typeof U.pro.sCH&&!db)try{var p=k[U.fSDec(U.obj.cntx)];p[U.fSDec(U.obj.txtBl)]=U.fSDec(U.obj.tp);p[U.fSDec(U.obj.fnt)]=0+U.fSDec(U.obj.fntStr);p[U.fSDec(U.obj.fSy)]=U.fSDec(U.obj.grClr);p[U.fSDec(U.obj.fTx)](U.fSDec(U.obj.trVs),2,k.height-11-2)}catch(r){}}})();var $a={},xa=null,kb=
function(){this.ctx.clearRect(0,0,this.width,this.height);this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))},lb=function(k,p,r){p=Math.min(this.width,this.height);return Math.max("theme4"===this.theme?0:300<=p?12:10,Math.round(p*(k/400)))},Ca=function(){var k=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,p="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),r="Sun Mon Tue Wed Thu Fri Sat".split(" "),
u="January February March April May June July August September October November December".split(" "),v="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),H=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,F=/[^-+\dA-Z]/g;return function(z,E,L){var R=L?L.days:p,I=L?L.months:u,N=L?L.shortDays:r,O=L?L.shortMonths:v;L="";var S=!1;z=z&&z.getTime?z:z?new Date(z):new Date;if(isNaN(z))throw SyntaxError("invalid date");
"UTC:"===E.slice(0,4)&&(E=E.slice(4),S=!0);L=S?"getUTC":"get";var U=z[L+"Date"](),V=z[L+"Day"](),M=z[L+"Month"](),Q=z[L+"FullYear"](),a=z[L+"Hours"](),d=z[L+"Minutes"](),b=z[L+"Seconds"](),c=z[L+"Milliseconds"](),e=S?0:z.getTimezoneOffset();return L=E.replace(k,function(g){switch(g){case "D":return U;case "DD":return $(U,2);case "DDD":return N[V];case "DDDD":return R[V];case "M":return M+1;case "MM":return $(M+1,2);case "MMM":return O[M];case "MMMM":return I[M];case "Y":return parseInt(String(Q).slice(-2));
case "YY":return $(String(Q).slice(-2),2);case "YYY":return $(String(Q).slice(-3),3);case "YYYY":return $(Q,4);case "h":return a%12||12;case "hh":return $(a%12||12,2);case "H":return a;case "HH":return $(a,2);case "m":return d;case "mm":return $(d,2);case "s":return b;case "ss":return $(b,2);case "f":return String(c).slice(0,1);case "ff":return $(String(c).slice(0,2),2);case "fff":return $(String(c).slice(0,3),3);case "t":return 12>a?"a":"p";case "tt":return 12>a?"am":"pm";case "T":return 12>a?"A":
"P";case "TT":return 12>a?"AM":"PM";case "K":return S?"UTC":(String(z).match(H)||[""]).pop().replace(F,"");case "z":return(0<e?"-":"+")+Math.floor(Math.abs(e)/60);case "zz":return(0<e?"-":"+")+$(Math.floor(Math.abs(e)/60),2);case "zzz":return(0<e?"-":"+")+$(Math.floor(Math.abs(e)/60),2)+$(Math.abs(e)%60,2);default:return g.slice(1,g.length-1)}})}}(),ba=function(k,p,r){if(null===k)return"";if(!isFinite(k))return k;k=Number(k);var u=0>k?!0:!1;u&&(k*=-1);var v=r?r.decimalSeparator:".",H=r?r.digitGroupSeparator:
",",F="";p=String(p);var F=1,z=r="",E=-1,L=[],R=[],I=0,N=0,S=0,O=!1,U=0,z=p.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);p=null;for(var Q=0;z&&Q<z.length;Q++)if(p=z[Q],"."===p&&0>E)E=Q;else{if("%"===p)F*=100;else if("\u2030"===p){F*=1E3;continue}else if(","===p[0]&&"."===p[p.length-1]){F/=Math.pow(1E3,p.length-1);E=Q+p.length-1;continue}else"E"!==p[0]&&"e"!==p[0]||"0"!==p[p.length-1]||(O=!0);0>E?(L.push(p),"#"===p||"0"===p?I++:","===p&&S++):(R.push(p),"#"!==p&&"0"!==p||N++)}O&&(p=Math.floor(k),
z=-Math.floor(Math.log(k)/Math.LN10+1),U=0===k?0:0===p?-(I+z):String(p).length-I,F/=Math.pow(10,U));0>E&&(E=Q);F=(k*F).toFixed(N);p=F.split(".");F=(p[0]+"").split("");k=(p[1]+"").split("");F&&"0"===F[0]&&F.shift();for(O=z=Q=N=E=0;0<L.length;)if(p=L.pop(),"#"===p||"0"===p)if(E++,E===I){var M=F,F=[];if("0"===p)for(p=I-N-(M?M.length:0);0<p;)M.unshift("0"),p--;for(;0<M.length;)r=M.pop()+r,O++,0===O%z&&(Q===S&&0<M.length)&&(r=H+r)}else 0<F.length?(r=F.pop()+r,N++,O++):"0"===p&&(r="0"+r,N++,O++),0===O%
z&&(Q===S&&0<F.length)&&(r=H+r);else"E"!==p[0]&&"e"!==p[0]||"0"!==p[p.length-1]||!/[eE][+-]*[0]+/.test(p)?","===p?(Q++,z=O,O=0,0<F.length&&(r=H+r)):r=1<p.length&&('"'===p[0]&&'"'===p[p.length-1]||"'"===p[0]&&"'"===p[p.length-1])?p.slice(1,p.length-1)+r:p+r:(p=0>U?p.replace("+","").replace("-",""):p.replace("-",""),r+=p.replace(/[0]+/,function(k){return $(U,k.length)}));H="";for(L=!1;0<R.length;)p=R.shift(),"#"===p||"0"===p?0<k.length&&0!==Number(k.join(""))?(H+=k.shift(),L=!0):"0"===p&&(H+="0",L=
!0):1<p.length&&('"'===p[0]&&'"'===p[p.length-1]||"'"===p[0]&&"'"===p[p.length-1])?H+=p.slice(1,p.length-1):"E"!==p[0]&&"e"!==p[0]||"0"!==p[p.length-1]||!/[eE][+-]*[0]+/.test(p)?H+=p:(p=0>U?p.replace("+","").replace("-",""):p.replace("-",""),H+=p.replace(/[0]+/,function(k){return $(U,k.length)}));r+=(L?v:"")+H;return u?"-"+r:r},Ra=function(k){var p=0,r=0;k=k||window.event;k.offsetX||0===k.offsetX?(p=k.offsetX,r=k.offsetY):k.layerX||0==k.layerX?(p=k.layerX,r=k.layerY):(p=k.pageX-k.target.offsetLeft,
r=k.pageY-k.target.offsetTop);return{x:p,y:r}},bb=!0,Ua=window.devicePixelRatio||1,Pa=1,W=bb?Ua/Pa:1,ea=function(k,p,r,u,v,H,F,z,E,L,R,N,O){"undefined"===typeof O&&(O=1);F=F||0;z=z||"black";var I=15<u-p&&15<v-r?8:0.35*Math.min(u-p,v-r);k.beginPath();k.moveTo(p,r);k.save();k.fillStyle=H;k.globalAlpha=O;k.fillRect(p,r,u-p,v-r);k.globalAlpha=1;0<F&&(O=0===F%2?0:0.5,k.beginPath(),k.lineWidth=F,k.strokeStyle=z,k.moveTo(p,r),k.rect(p-O,r-O,u-p+2*O,v-r+2*O),k.stroke());k.restore();!0===E&&(k.save(),k.beginPath(),
k.moveTo(p,r),k.lineTo(p+I,r+I),k.lineTo(u-I,r+I),k.lineTo(u,r),k.closePath(),F=k.createLinearGradient((u+p)/2,r+I,(u+p)/2,r),F.addColorStop(0,H),F.addColorStop(1,"rgba(255, 255, 255, .4)"),k.fillStyle=F,k.fill(),k.restore());!0===L&&(k.save(),k.beginPath(),k.moveTo(p,v),k.lineTo(p+I,v-I),k.lineTo(u-I,v-I),k.lineTo(u,v),k.closePath(),F=k.createLinearGradient((u+p)/2,v-I,(u+p)/2,v),F.addColorStop(0,H),F.addColorStop(1,"rgba(255, 255, 255, .4)"),k.fillStyle=F,k.fill(),k.restore());!0===R&&(k.save(),
k.beginPath(),k.moveTo(p,r),k.lineTo(p+I,r+I),k.lineTo(p+I,v-I),k.lineTo(p,v),k.closePath(),F=k.createLinearGradient(p+I,(v+r)/2,p,(v+r)/2),F.addColorStop(0,H),F.addColorStop(1,"rgba(255, 255, 255, 0.1)"),k.fillStyle=F,k.fill(),k.restore());!0===N&&(k.save(),k.beginPath(),k.moveTo(u,r),k.lineTo(u-I,r+I),k.lineTo(u-I,v-I),k.lineTo(u,v),F=k.createLinearGradient(u-I,(v+r)/2,u,(v+r)/2),F.addColorStop(0,H),F.addColorStop(1,"rgba(255, 255, 255, 0.1)"),k.fillStyle=F,F.addColorStop(0,H),F.addColorStop(1,
"rgba(255, 255, 255, 0.1)"),k.fillStyle=F,k.fill(),k.closePath(),k.restore())},ja=function(k){for(var p="",r=0;r<k.length;r++)p+=String.fromCharCode(Math.ceil(k.length/57/5)^k.charCodeAt(r));return p},db=window&&window[ja("mnb`uhno")]&&window[ja("mnb`uhno")].href&&window[ja("mnb`uhno")].href.indexOf&&(-1!==window[ja("mnb`uhno")].href.indexOf(ja("b`ow`rkr/bnl"))||-1!==window[ja("mnb`uhno")].href.indexOf(ja("gdonqhy/bnl"))||-1!==window[ja("mnb`uhno")].href.indexOf(ja("gheemd"))),ib=db&&-1===window[ja("mnb`uhno")].href.indexOf(ja("gheemd")),
jb={reset:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="},
pan:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"},
zoom:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="},
menu:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"},
handle:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAAZiS0dEANAAzwDP4Z7KegAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB9sHGw0cMqdt1UwAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAaElEQVQoz+3SsRFAQBCF4Z9WJM8KCDVwownl6YXsTmCUsyKGkZzcl7zkz3YLkypgAnreFmDEpHkIwVOMfpdi9CEEN2nGpFdwD03yEqDtOgCaun7sqSTDH32I1pQA2Pb9sZecAxc5r3IAb21d6878xsAAAAAASUVORK5CYII="}};V.prototype.setOptions=function(k,p){if(ra[this._defaultsKey]){var r=ra[this._defaultsKey],u;for(u in r)"publicProperties"!==
u&&r.hasOwnProperty(u)&&(this[u]=k&&u in k?k[u]:p&&u in p?p[u]:r[u])}else Ja&&window.console&&console.log("defaults not set")};V.prototype.get=function(k){var p=ra[this._defaultsKey];if("options"===k)return this.options&&this.options._isPlaceholder?null:this.options;if(p.hasOwnProperty(k)||p.publicProperties&&p.publicProperties.hasOwnProperty(k))return this[k];window.console&&window.console.log('Property "'+k+"\" doesn't exist. Please check for typo.")};V.prototype.set=function(k,p,r){r="undefined"===
typeof r?!0:r;var u=ra[this._defaultsKey];if("options"===k)this.createUserOptions(p);else if(u.hasOwnProperty(k)||u.publicProperties&&u.publicProperties.hasOwnProperty(k)&&"readWrite"===u.publicProperties[k])this.options._isPlaceholder&&this.createUserOptions(),this.options[k]=p;else{window.console&&(u.publicProperties&&u.publicProperties.hasOwnProperty(k)&&"readOnly"===u.publicProperties[k]?window.console.log('Property "'+k+'" is read-only.'):window.console.log('Property "'+k+"\" doesn't exist. Please check for typo."));
return}r&&(this.stockChart||this.chart||this).render()};V.prototype.addTo=function(k,p,r,u){u="undefined"===typeof u?!0:u;var v=ra[this._defaultsKey];v.hasOwnProperty(k)||v.publicProperties&&v.publicProperties.hasOwnProperty(k)&&"readWrite"===v.publicProperties[k]?(this.options._isPlaceholder&&this.createUserOptions(),"undefined"===typeof this.options[k]&&(this.options[k]=[]),k=this.options[k],r="undefined"===typeof r||null===r?k.length:r,k.splice(r,0,p),u&&(this.chart||this).render()):window.console&&
(v.publicProperties&&v.publicProperties.hasOwnProperty(k)&&"readOnly"===v.publicProperties[k]?window.console.log('Property "'+k+'" is read-only.'):window.console.log('Property "'+k+"\" doesn't exist. Please check for typo."))};V.prototype.createUserOptions=function(k){if("undefined"!==typeof k||this.options._isPlaceholder)if(this.parent.options._isPlaceholder&&this.parent.createUserOptions(),this.isOptionsInArray){this.parent.options[this.optionsName]||(this.parent.options[this.optionsName]=[]);var p=
this.parent.options[this.optionsName],r=p.length;this.options._isPlaceholder||(Fa(p),r=p.indexOf(this.options));this.options="undefined"===typeof k?{}:k;p[r]=this.options}else this.options="undefined"===typeof k?{}:k,k=this.parent.options,this.optionsName?p=this.optionsName:(p=this._defaultsKey)&&0!==p.length?(r=p.charAt(0).toLowerCase(),1<p.length&&(r=r.concat(p.slice(1))),p=r):p=void 0,k[p]=this.options};V.prototype.remove=function(k){k="undefined"===typeof k?!0:k;if(this.isOptionsInArray){var p=
this.parent.options[this.optionsName];Fa(p);var r=p.indexOf(this.options);0<=r&&p.splice(r,1)}else delete this.parent.options[this.optionsName];k&&(this.chart||this).render()};V.prototype.updateOption=function(k){!ra[this._defaultsKey]&&(Ja&&window.console)&&console.log("defaults not set");var p=ra[this._defaultsKey],r={},v=this[k],E=this._themeOptionsKey,H=this._index;this.theme&&u(E)&&u(H)?r=u(ya[this.theme])?ya.light1:ya[this.theme]:this.parent&&(this.parent.themeOptions&&this.parent.themeOptions[E])&&
(null===H?r=this.parent.themeOptions[E]:0<this.parent.themeOptions[E].length&&(r=Math.min(this.parent.themeOptions[E].length-1,H),r=this.parent.themeOptions[E][r]));this.themeOptions=r;k in p&&(v=k in this.options?this.options[k]:r&&k in r?r[k]:p[k]);if(v===this[k])return!1;this[k]=v;return!0};V.prototype.trackChanges=function(k){if(!this.sessionVariables)throw"Session Variable Store not set";this.sessionVariables[k]=this.options[k]};V.prototype.isBeingTracked=function(k){this.options._oldOptions||
(this.options._oldOptions={});return this.options._oldOptions[k]?!0:!1};V.prototype.hasOptionChanged=function(k){if(!this.sessionVariables)throw"Session Variable Store not set";return this.sessionVariables[k]!==this.options[k]};V.prototype.addEventListener=function(k,p,r){k&&p&&(this._eventListeners[k]=this._eventListeners[k]||[],this._eventListeners[k].push({context:r||this,eventHandler:p}))};V.prototype.removeEventListener=function(k,p){if(k&&p&&this._eventListeners[k])for(var r=this._eventListeners[k],
u=0;u<r.length;u++)if(r[u].eventHandler===p){r[u].splice(u,1);break}};V.prototype.removeAllEventListeners=function(){this._eventListeners=[]};V.prototype.dispatchEvent=function(k,p,r){if(k&&this._eventListeners[k]){p=p||{};for(var u=this._eventListeners[k],v=0;v<u.length;v++)u[v].eventHandler.call(u[v].context,p)}"function"===typeof this[k]&&this[k].call(r||this.chart,p)};Ga.prototype.registerSpace=function(k,p){"top"===k?this._topOccupied+=p.height:"bottom"===k?this._bottomOccupied+=p.height:"left"===
k?this._leftOccupied+=p.width:"right"===k&&(this._rightOccupied+=p.width)};Ga.prototype.unRegisterSpace=function(k,p){"top"===k?this._topOccupied-=p.height:"bottom"===k?this._bottomOccupied-=p.height:"left"===k?this._leftOccupied-=p.width:"right"===k&&(this._rightOccupied-=p.width)};Ga.prototype.getFreeSpace=function(){return{x1:this._x1+this._leftOccupied,y1:this._y1+this._topOccupied,x2:this._x2-this._rightOccupied,y2:this._y2-this._bottomOccupied,width:this._x2-this._x1-this._rightOccupied-this._leftOccupied,
height:this._y2-this._y1-this._bottomOccupied-this._topOccupied}};Ga.prototype.reset=function(){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding};qa(ka,V);ka.prototype._initialize=function(){u(this.padding)||"object"!==typeof this.padding?this.topPadding=this.rightPadding=this.bottomPadding=this.leftPadding=Number(this.padding)|0:(this.topPadding=u(this.padding.top)?0:Number(this.padding.top)|0,this.rightPadding=u(this.padding.right)?0:Number(this.padding.right)|
0,this.bottomPadding=u(this.padding.bottom)?0:Number(this.padding.bottom)|0,this.leftPadding=u(this.padding.left)?0:Number(this.padding.left)|0)};ka.prototype.render=function(k){if(0!==this.fontSize){k&&this.ctx.save();var p=this.ctx.font;this.ctx.textBaseline=this.textBaseline;var r=0;this._isDirty&&this.measureText(this.ctx);this.ctx.translate(this.x,this.y+r);"middle"===this.textBaseline&&(r=-this._lineHeight/2);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/180*this.angle);var u=
0,v=this.topPadding,H=null;this.ctx.roundRect||Ea(this.ctx);(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(0,r,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);this.ctx.fillStyle=this.fontColor;for(r=0;r<this._wrappedText.lines.length;r++)H=this._wrappedText.lines[r],"right"===this.horizontalAlign?u=(this.width-(this.leftPadding+this.rightPadding))/2-H.width/2+this.leftPadding:"left"===this.horizontalAlign?u=
this.leftPadding:"center"===this.horizontalAlign&&(u=(this.width-(this.leftPadding+this.rightPadding))/2-H.width/2+this.leftPadding),this.ctx.fillText(H.text,u,v),v+=H.height;this.ctx.font=p;k&&this.ctx.restore()}};ka.prototype.setText=function(k){this.text=k;this._isDirty=!0;this._wrappedText=null};ka.prototype.measureText=function(){this._lineHeight=Za(this.fontFamily,this.fontSize,this.fontWeight);if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";this._wrapText(this.ctx);
this._isDirty=!1;return{width:this.width,height:this.height}};ka.prototype._getLineWithWidth=function(k,p,r){k=String(k);if(!k)return{text:"",width:0};var u=r=0,v=k.length-1,H=Infinity;for(this.ctx.font=this._getFontString();u<=v;){var H=Math.floor((u+v)/2),F=k.substr(0,H+1);r=this.ctx.measureText(F).width;if(r<p)u=H+1;else if(r>p)v=H-1;else break}r>p&&1<F.length&&(F=F.substr(0,F.length-1),r=this.ctx.measureText(F).width);p=!0;if(F.length===k.length||" "===k[F.length])p=!1;p&&(k=F.split(" "),1<k.length&&
k.pop(),F=k.join(" "),r=this.ctx.measureText(F).width);return{text:F,width:r}};ka.prototype._wrapText=function(){var k=new String(Ia(String(this.text))),p=[],r=this.ctx.font,u=0,v=0;this.ctx.font=this._getFontString();if(0===this.frontSize)v=u=0;else for(;0<k.length;){var H=this.maxHeight-(this.topPadding+this.bottomPadding),F=this._getLineWithWidth(k,this.maxWidth-(this.leftPadding+this.rightPadding),!1);F.height=this._lineHeight;p.push(F);var z=v,v=Math.max(v,F.width),u=u+F.height,k=Ia(k.slice(F.text.length,
k.length));H&&u>H&&(F=p.pop(),u-=F.height,v=z)}this._wrappedText={lines:p,width:v,height:u};this.width=v+(this.leftPadding+this.rightPadding);this.height=u+(this.topPadding+this.bottomPadding);this.ctx.font=r};ka.prototype._getFontString=function(){var k;k=""+(this.fontStyle?this.fontStyle+" ":"");k+=this.fontWeight?this.fontWeight+" ":"";k+=this.fontSize?this.fontSize+"px ":"";var p=this.fontFamily?this.fontFamily+"":"";!r&&p&&(p=p.split(",")[0],"'"!==p[0]&&'"'!==p[0]&&(p="'"+p+"'"));return k+=p};
qa(Va,V);qa(Aa,V);Aa.prototype.setLayout=function(){if(this.text){var k=this.dockInsidePlotArea?this.chart.plotArea:this.chart,p=k.layoutManager.getFreeSpace(),r=p.x1,v=p.y1,E=0,H=0,F=this.chart._menuButton&&this.chart.exportEnabled&&"top"===this.verticalAlign?22:0,z,I;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(null===this.maxWidth&&(this.maxWidth=p.width-4-F*("center"===this.horizontalAlign?2:1)),H=0.5*p.height-this.margin-2,E=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||
"right"===this.horizontalAlign?(null===this.maxWidth&&(this.maxWidth=p.height-4),H=0.5*p.width-this.margin-2):"center"===this.horizontalAlign&&(null===this.maxWidth&&(this.maxWidth=p.width-4),H=0.5*p.height-4));var L;u(this.padding)||"number"!==typeof this.padding?u(this.padding)||"object"!==typeof this.padding||(L=this.padding.top?this.padding.top:this.padding.bottom?this.padding.bottom:0,L+=this.padding.bottom?this.padding.bottom:this.padding.top?this.padding.top:0,L*=1.25):L=2.5*this.padding;this.wrap||
(H=Math.min(H,Math.max(1.5*this.fontSize,this.fontSize+L)));H=new ka(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:this.maxWidth,maxHeight:H,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:"top"});
L=H.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(v=p.y1+2,I="top"):"bottom"===this.verticalAlign&&(v=p.y2-2-L.height,I="bottom"),"left"===this.horizontalAlign?r=p.x1+2:"center"===this.horizontalAlign?r=p.x1+p.width/2-L.width/2:"right"===this.horizontalAlign&&(r=p.x2-2-L.width-F),z=this.horizontalAlign,this.width=L.width,this.height=L.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(r=p.x1+2,v=p.y2-2-(this.maxWidth/2-L.width/
2),E=-90,I="left",this.width=L.height,this.height=L.width):"right"===this.horizontalAlign?(r=p.x2-2,v=p.y1+2+(this.maxWidth/2-L.width/2),E=90,I="right",this.width=L.height,this.height=L.width):"center"===this.horizontalAlign&&(v=k.y1+(k.height/2-L.height/2),r=k.x1+(k.width/2-L.width/2),I="center",this.width=L.width,this.height=L.height),z="center");H.x=r;H.y=v;H.angle=E;H.horizontalAlign=z;this._textBlock=H;k.layoutManager.registerSpace(I,{width:this.width+("left"===I||"right"===I?this.margin+2:0),
height:this.height+("top"===I||"bottom"===I?this.margin+2:0)});this.bounds={x1:r,y1:v,x2:r+this.width,y2:v+this.height};this.ctx.textBaseline="top"}};Aa.prototype.render=function(){this._textBlock&&this._textBlock.render(!0)};qa(Ka,V);Ka.prototype.setLayout=Aa.prototype.setLayout;Ka.prototype.render=Aa.prototype.render;Wa.prototype.get=function(k,p){var r=null;0<this.pool.length?(r=this.pool.pop(),Oa(r,k,p)):r=ta(k,p);return r};Wa.prototype.release=function(k){this.pool.push(k)};qa(La,V);var Na={addTheme:function(k,
p){ya[k]=p},addColorSet:function(k,p){Ba[k]=p},addCultureInfo:function(k,p){Ma[k]=p},formatNumber:function(k,p,r){r=r||"en";if(Ma[r])return ba(k,p||"#,##0.##",new La(r));throw"Unknown Culture Name";},formatDate:function(k,p,r){r=r||"en";if(Ma[r])return Ca(k,p||"DD MMM YYYY",new La(r));throw"Unknown Culture Name";}}; true&&"undefined"!==typeof module.exports?module.exports=Na: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Na}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;Na.Chart=function(){function k(a,
d){return a.x-d.x}function p(a,d){d=d||{};this.theme=u(d.theme)||u(ya[d.theme])?"light1":d.theme;p.base.constructor.call(this,"Chart",null,d,null,null);var b=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType="";this._lastTouchData=null;this.isAnimating=!1;this.renderCount=0;this.disableToolTip=this.animatedRender=!1;this.canvasPool=new Wa;this.allDOMEventHandlers=[];this.panEnabled=!1;this._defaultCursor=
"default";this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0};this._dataInRenderedOrder=[];if(this.container="string"===typeof this._containerId?document.getElementById(this._containerId):this._containerId){this.container.innerHTML="";var c=0,e=0,c=this.options.width?this.width:0<this.container.clientWidth?this.container.clientWidth:this.width,e=this.options.height?this.height:0<this.container.clientHeight?this.container.clientHeight:this.height;this.width=c;this.height=e;this.x1=
this.y1=0;this.x2=this.width;this.y2=this.height;this._selectedColorSet="undefined"!==typeof Ba[this.colorSet]?Ba[this.colorSet]:Ba.colorSet1;this._canvasJSContainer=document.createElement("div");this._canvasJSContainer.setAttribute("class","canvasjs-chart-container");this._canvasJSContainer.style.position="relative";this._canvasJSContainer.style.textAlign="left";this._canvasJSContainer.style.cursor="auto";r||(this._canvasJSContainer.style.height="0px");this.container.appendChild(this._canvasJSContainer);
this.canvas=ta(c,e);this._preRenderCanvas=ta(c,e);this.canvas.style.position="absolute";this.canvas.style.WebkitUserSelect="none";this.canvas.style.MozUserSelect="none";this.canvas.style.msUserSelect="none";this.canvas.style.userSelect="none";this.canvas.getContext&&(this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",Ea(this.ctx),this._preRenderCtx=this._preRenderCanvas.getContext("2d"),this._preRenderCtx.textBaseline="top",Ea(this._preRenderCtx),
r?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=ta(c,e),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),this.plotArea.ctx=this.plotArea.canvas.getContext("2d")),this.overlaidCanvas=ta(c,e),this.overlaidCanvas.style.position="absolute",this.overlaidCanvas.style.webkitTapHighlightColor="transparent",this.overlaidCanvas.style.WebkitUserSelect="none",this.overlaidCanvas.style.MozUserSelect=
"none",this.overlaidCanvas.style.msUserSelect="none",this.overlaidCanvas.style.userSelect="none",this.overlaidCanvas.getContext&&(this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",Ea(this.overlaidCanvasCtx)),this._eventManager=new ha(this),this.windowResizeHandler=O(window,"resize",function(){b._updateSize()&&b.render()},this.allDOMEventHandlers),this._toolBar=document.createElement("div"),
this._toolBar.setAttribute("class","canvasjs-chart-toolbar"),this._toolBar.style.cssText="position: absolute; right: 1px; top: 1px;",this._canvasJSContainer.appendChild(this._toolBar),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},O(this.overlaidCanvas,"click",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),O(this.overlaidCanvas,"mousemove",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),O(this.overlaidCanvas,"mouseup",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),
O(this.overlaidCanvas,"mousedown",function(a){b._mouseEventHandler(a);va(b._dropdownMenu)},this.allDOMEventHandlers),O(this.overlaidCanvas,"mouseout",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),O(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),O(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),
O(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerUp":"touchend",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),O(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),this.toolTip=new $(this,this.options.toolTip),this.data=null,this.axisX=[],this.axisX2=[],this.axisY=[],this.axisY2=[],this.sessionVariables={axisX:[],axisX2:[],axisY:[],axisY2:[]})}else window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+
this._containerId+'" was not found')}function v(a,d){for(var b=[],c,e=0;e<a.length;e++)if(0==e)b.push(a[0]);else{var g,m,l;l=e-1;g=0===l?0:l-1;m=l===a.length-1?l:l+1;c=Math.abs((a[m].x-a[g].x)/(0===a[m].x-a[l].x?0.01:a[m].x-a[l].x))*(d-1)/2+1;var w=(a[m].x-a[g].x)/c;c=(a[m].y-a[g].y)/c;b[b.length]=a[l].x>a[g].x&&0<w||a[l].x<a[g].x&&0>w?{x:a[l].x+w/3,y:a[l].y+c/3}:{x:a[l].x,y:a[l].y+c/9};l=e;g=0===l?0:l-1;m=l===a.length-1?l:l+1;c=Math.abs((a[m].x-a[g].x)/(0===a[l].x-a[g].x?0.01:a[l].x-a[g].x))*(d-
1)/2+1;w=(a[m].x-a[g].x)/c;c=(a[m].y-a[g].y)/c;b[b.length]=a[l].x>a[g].x&&0<w||a[l].x<a[g].x&&0>w?{x:a[l].x-w/3,y:a[l].y-c/3}:{x:a[l].x,y:a[l].y-c/9};b[b.length]=a[e]}return b}function E(a,d,b,c,e,g,m,l,w,h){var s=0;h?(m.color=g,l.color=g):h=1;s=w?Math.abs(e-b):Math.abs(c-d);s=0<m.trimLength?Math.abs(s*m.trimLength/100):Math.abs(s-m.length);w?(b+=s/2,e-=s/2):(d+=s/2,c-=s/2);var s=1===Math.round(m.thickness)%2?0.5:0,q=1===Math.round(l.thickness)%2?0.5:0;a.save();a.globalAlpha=h;a.strokeStyle=l.color||
g;a.lineWidth=l.thickness||2;a.setLineDash&&a.setLineDash(R(l.dashType,l.thickness));a.beginPath();w&&0<l.thickness?(a.moveTo(c-m.thickness/2,Math.round((b+e)/2)-q),a.lineTo(d+m.thickness/2,Math.round((b+e)/2)-q)):0<l.thickness&&(a.moveTo(Math.round((d+c)/2)-q,b+m.thickness/2),a.lineTo(Math.round((d+c)/2)-q,e-m.thickness/2));a.stroke();a.strokeStyle=m.color||g;a.lineWidth=m.thickness||2;a.setLineDash&&a.setLineDash(R(m.dashType,m.thickness));a.beginPath();w&&0<m.thickness?(a.moveTo(c-s,b),a.lineTo(c-
s,e),a.moveTo(d+s,b),a.lineTo(d+s,e)):0<m.thickness&&(a.moveTo(d,b+s),a.lineTo(c,b+s),a.moveTo(d,e-s),a.lineTo(c,e-s));a.stroke();a.restore()}function I(a,d,b,c,e){if(null===a||"undefined"===typeof a)return"undefined"===typeof b?d:b;a=parseFloat(a.toString())*(0<=a.toString().indexOf("%")?d/100:1);"undefined"!==typeof c&&(a=Math.min(c,a),"undefined"!==typeof e&&(a=Math.max(e,a)));return!isNaN(a)&&a<=d&&0<=a?a:"undefined"===typeof b?d:b}function H(a,d){H.base.constructor.call(this,"Legend","legend",
d,null,a);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.ghostCtx=this.chart._eventManager.ghostCtx;this.items=[];this.optionsName="legend";this.height=this.width=0;this.orientation=null;this.dataSeries=[];this.bounds={x1:null,y1:null,x2:null,y2:null};"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.lineHeight=Za(this.fontFamily,this.fontSize,this.fontWeight);this.horizontalSpacing=this.fontSize}function F(a,d,b,c){F.base.constructor.call(this,
"DataSeries","data",d,b,a);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;this.index=b;this.noDataPointsInPlotArea=0;this.id=c;this.chart._eventManager.objectMap[c]={id:c,objectType:"dataSeries",dataSeriesIndex:b};a=d.dataPoints?d.dataPoints.length:0;this.dataPointEOs=[];for(d=0;d<a;d++)this.dataPointEOs[d]={};this.dataPointIds=[];this.plotUnit=[];this.axisY=this.axisX=null;this.optionsName="data";this.isOptionsInArray=!0;null===this.fillOpacity&&(this.type.match(/area/i)?this.fillOpacity=
0.7:this.fillOpacity=1);this.axisPlacement=this.getDefaultAxisPlacement();"undefined"===typeof this.options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function z(a,d,b,c,e,g){z.base.constructor.call(this,"Axis",d,b,c,a);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=this.maxWidth=0;this.labels=[];this.dataSeries=[];this._stripLineLabels=this._ticks=this._labels=null;this.dataInfo={min:Infinity,max:-Infinity,
viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};this.isOptionsInArray=!0;"axisX"===e?("left"===g||"bottom"===g?(this.optionsName="axisX",u(this.chart.sessionVariables.axisX[c])&&(this.chart.sessionVariables.axisX[c]={}),this.sessionVariables=this.chart.sessionVariables.axisX[c]):(this.optionsName="axisX2",u(this.chart.sessionVariables.axisX2[c])&&(this.chart.sessionVariables.axisX2[c]={}),this.sessionVariables=this.chart.sessionVariables.axisX2[c]),this.options.interval||(this.intervalType=
null)):"left"===g||"bottom"===g?(this.optionsName="axisY",u(this.chart.sessionVariables.axisY[c])&&(this.chart.sessionVariables.axisY[c]={}),this.sessionVariables=this.chart.sessionVariables.axisY[c]):(this.optionsName="axisY2",u(this.chart.sessionVariables.axisY2[c])&&(this.chart.sessionVariables.axisY2[c]={}),this.sessionVariables=this.chart.sessionVariables.axisY2[c]);"undefined"===typeof this.options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===
typeof this.options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize));this.type=e;"axisX"!==e||b&&"undefined"!==typeof b.gridThickness||(this.gridThickness=0);this._position=g;this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null};this.labelAngle=(this.labelAngle%360+360)%360;90<this.labelAngle&&270>this.labelAngle?this.labelAngle-=180:270<=this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360);this.options.scaleBreaks&&(this.scaleBreaks=new Q(this.chart,
this.options.scaleBreaks,++this.chart._eventManager.lastObjectId,this));this.stripLines=[];if(this.options.stripLines&&0<this.options.stripLines.length)for(a=0;a<this.options.stripLines.length;a++)this.stripLines.push(new X(this.chart,this.options.stripLines[a],a,++this.chart._eventManager.lastObjectId,this));this.options.crosshair&&(this.crosshair=new fa(this.chart,this.options.crosshair,this));this._titleTextBlock=null;this.hasOptionChanged("viewportMinimum")&&null===this.viewportMinimum&&(this.options.viewportMinimum=
void 0,this.sessionVariables.viewportMinimum=null);this.hasOptionChanged("viewportMinimum")||isNaN(this.sessionVariables.newViewportMinimum)||null===this.sessionVariables.newViewportMinimum?this.sessionVariables.newViewportMinimum=null:this.viewportMinimum=this.sessionVariables.newViewportMinimum;this.hasOptionChanged("viewportMaximum")&&null===this.viewportMaximum&&(this.options.viewportMaximum=void 0,this.sessionVariables.viewportMaximum=null);this.hasOptionChanged("viewportMaximum")||isNaN(this.sessionVariables.newViewportMaximum)||
null===this.sessionVariables.newViewportMaximum?this.sessionVariables.newViewportMaximum=null:this.viewportMaximum=this.sessionVariables.newViewportMaximum;null!==this.minimum&&null!==this.viewportMinimum&&(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));null!==this.maximum&&null!==this.viewportMaximum&&(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.trackChanges("viewportMinimum");this.trackChanges("viewportMaximum")}function Q(a,d,b,c){Q.base.constructor.call(this,
"ScaleBreaks","scaleBreaks",d,null,c);this.id=b;this.chart=a;this.ctx=this.chart.ctx;this.axis=c;this.optionsName="scaleBreaks";this.isOptionsInArray=!1;this._appliedBreaks=[];this.customBreaks=[];this.autoBreaks=[];"string"===typeof this.spacing?(this.spacing=parseFloat(this.spacing),this.spacing=isNaN(this.spacing)?8:(10<this.spacing?10:this.spacing)+"%"):"number"!==typeof this.spacing&&(this.spacing=8);this.autoCalculate&&(this.maxNumberOfAutoBreaks=Math.min(this.maxNumberOfAutoBreaks,5));if(this.options.customBreaks&&
0<this.options.customBreaks.length){for(a=0;a<this.options.customBreaks.length;a++)this.customBreaks.push(new L(this.chart,"customBreaks",this.options.customBreaks[a],a,++this.chart._eventManager.lastObjectId,this)),"number"===typeof this.customBreaks[a].startValue&&("number"===typeof this.customBreaks[a].endValue&&this.customBreaks[a].endValue!==this.customBreaks[a].startValue)&&this._appliedBreaks.push(this.customBreaks[a]);this._appliedBreaks.sort(function(a,c){return a.startValue-c.startValue});
for(a=0;a<this._appliedBreaks.length-1;a++)this._appliedBreaks[a].endValue>=this._appliedBreaks[a+1].startValue&&(this._appliedBreaks[a].endValue=Math.max(this._appliedBreaks[a].endValue,this._appliedBreaks[a+1].endValue),window.console&&window.console.log("CanvasJS Error: Breaks "+a+" and "+(a+1)+" are overlapping."),this._appliedBreaks.splice(a,2),a--)}}function L(a,d,b,c,e,g){L.base.constructor.call(this,"Break",d,b,c,g);this.id=e;this.chart=a;this.ctx=this.chart.ctx;this.scaleBreaks=g;this.optionsName=
d;this.isOptionsInArray=!0;this.type=b.type?this.type:g.type;this.fillOpacity=u(b.fillOpacity)?g.fillOpacity:this.fillOpacity;this.lineThickness=u(b.lineThickness)?g.lineThickness:this.lineThickness;this.color=b.color?this.color:g.color;this.lineColor=b.lineColor?this.lineColor:g.lineColor;this.lineDashType=b.lineDashType?this.lineDashType:g.lineDashType;!u(this.startValue)&&this.startValue.getTime&&(this.startValue=this.startValue.getTime());!u(this.endValue)&&this.endValue.getTime&&(this.endValue=
this.endValue.getTime());"number"===typeof this.startValue&&("number"===typeof this.endValue&&this.endValue<this.startValue)&&(a=this.startValue,this.startValue=this.endValue,this.endValue=a);this.spacing="undefined"===typeof b.spacing?g.spacing:b.spacing;"string"===typeof this.options.spacing?(this.spacing=parseFloat(this.spacing),this.spacing=isNaN(this.spacing)?0:(10<this.spacing?10:this.spacing)+"%"):"number"!==typeof this.options.spacing&&(this.spacing=g.spacing);this.size=g.parent.logarithmic?
1:0}function X(a,d,b,c,e){X.base.constructor.call(this,"StripLine","stripLines",d,b,e);this.id=c;this.chart=a;this.ctx=this.chart.ctx;this.label=this.label;this.axis=e;this.optionsName="stripLines";this.isOptionsInArray=!0;this._thicknessType="pixel";null!==this.startValue&&null!==this.endValue&&(this.value=e.logarithmic?Math.sqrt((this.startValue.getTime?this.startValue.getTime():this.startValue)*(this.endValue.getTime?this.endValue.getTime():this.endValue)):((this.startValue.getTime?this.startValue.getTime():
this.startValue)+(this.endValue.getTime?this.endValue.getTime():this.endValue))/2,this._thicknessType=null)}function fa(a,d,b){fa.base.constructor.call(this,"Crosshair","crosshair",d,null,b);this.chart=a;this.ctx=this.chart.ctx;this.axis=b;this.optionsName="crosshair";this._thicknessType="pixel"}function $(a,d){$.base.constructor.call(this,"ToolTip","toolTip",d,null,a);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._prevY=this._prevX=
NaN;this.containerTransitionDuration=0.1;this.mozContainerTransition=this.getContainerTransition(this.containerTransitionDuration);this.optionsName="toolTip";this._initialize()}function ha(a){this.chart=a;this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.ghostCanvas=ta(this.chart.width,this.chart.height);this.ghostCtx=this.ghostCanvas.getContext("2d");this.mouseoveredObjectMaps=[]}function ga(a){this.chart=a;this.ctx=this.chart.plotArea.ctx;
this.animations=[];this.animationRequestId=null}qa(p,V);p.prototype.destroy=function(){var a=this.allDOMEventHandlers;this._animator&&this._animator.cancelAllAnimations();this._panTimerId&&clearTimeout(this._panTimerId);for(var d=0;d<a.length;d++){var b=a[d][0],c=a[d][1],e=a[d][2],g=a[d][3],g=g||!1;b.removeEventListener?b.removeEventListener(c,e,g):b.detachEvent&&b.detachEvent("on"+c,e)}this.allDOMEventHandlers=[];for(this.removeAllEventListeners();this._canvasJSContainer&&this._canvasJSContainer.hasChildNodes();)this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
for(;this.container&&this.container.hasChildNodes();)this.container.removeChild(this.container.lastChild);for(;this._dropdownMenu&&this._dropdownMenu.hasChildNodes();)this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);this.overlaidCanvas=this.canvas=this.container=this._canvasJSContainer=null;this._toolBar=this._dropdownMenu=this._menuButton=this._resetButton=this._zoomButton=this._breaksCanvas=this._preRenderCanvas=this.toolTip.container=null};p.prototype._updateOptions=function(){var a=
this;this.updateOption("width");this.updateOption("height");this.updateOption("dataPointWidth");this.updateOption("dataPointMinWidth");this.updateOption("dataPointMaxWidth");this.updateOption("interactivityEnabled");this.updateOption("theme");this.updateOption("colorSet")&&(this._selectedColorSet="undefined"!==typeof Ba[this.colorSet]?Ba[this.colorSet]:Ba.colorSet1);this.updateOption("backgroundColor");this.backgroundColor||(this.backgroundColor="rgba(0,0,0,0)");this.updateOption("culture");this._cultureInfo=
new La(this.options.culture);this.updateOption("animationEnabled");this.animationEnabled=this.animationEnabled&&r;this.updateOption("animationDuration");this.updateOption("rangeChanging");this.updateOption("rangeChanged");this.updateOption("exportEnabled");this.updateOption("exportFileName");this.updateOption("zoomType");if(this.options.zoomEnabled){if(!this._zoomButton){var d=!1;va(this._zoomButton=document.createElement("button"));ua(this,this._zoomButton,"pan");this._toolBar.appendChild(this._zoomButton);
this._zoomButton.style.borderRight=this.toolbar.borderThickness+"px solid "+this.toolbar.borderColor;O(this._zoomButton,"touchstart",function(a){d=!0},this.allDOMEventHandlers);O(this._zoomButton,"click",function(){a.zoomEnabled?(a.zoomEnabled=!1,a.panEnabled=!0,ua(a,a._zoomButton,"zoom")):(a.zoomEnabled=!0,a.panEnabled=!1,ua(a,a._zoomButton,"pan"));a.render()},this.allDOMEventHandlers);O(this._zoomButton,"mouseover",function(){d?d=!1:(sa(a,a._zoomButton,{backgroundColor:a.toolbar.backgroundColorOnHover,
color:a.toolbar.fontColorOnHover,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._zoomButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))},this.allDOMEventHandlers);O(this._zoomButton,"mouseout",function(){d||(sa(a,a._zoomButton,{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._zoomButton.childNodes[0],{WebkitFilter:"invert(0%)",
filter:"invert(0%)"}))},this.allDOMEventHandlers)}this._resetButton||(d=!1,va(this._resetButton=document.createElement("button")),ua(this,this._resetButton,"reset"),this._resetButton.style.borderRight=(this.exportEnabled?this.toolbar.borderThickness:0)+"px solid "+this.toolbar.borderColor,this._toolBar.appendChild(this._resetButton),O(this._resetButton,"touchstart",function(a){d=!0},this.allDOMEventHandlers),O(this._resetButton,"click",function(){a.toolTip.hide();a.zoomEnabled||a.panEnabled?(a.zoomEnabled=
!0,a.panEnabled=!1,ua(a,a._zoomButton,"pan"),a._defaultCursor="default",a.overlaidCanvas.style.cursor=a._defaultCursor):(a.zoomEnabled=!1,a.panEnabled=!1);if(a.sessionVariables.axisX)for(var c=0;c<a.sessionVariables.axisX.length;c++)a.sessionVariables.axisX[c].newViewportMinimum=null,a.sessionVariables.axisX[c].newViewportMaximum=null;if(a.sessionVariables.axisX2)for(c=0;c<a.sessionVariables.axisX2.length;c++)a.sessionVariables.axisX2[c].newViewportMinimum=null,a.sessionVariables.axisX2[c].newViewportMaximum=
null;if(a.sessionVariables.axisY)for(c=0;c<a.sessionVariables.axisY.length;c++)a.sessionVariables.axisY[c].newViewportMinimum=null,a.sessionVariables.axisY[c].newViewportMaximum=null;if(a.sessionVariables.axisY2)for(c=0;c<a.sessionVariables.axisY2.length;c++)a.sessionVariables.axisY2[c].newViewportMinimum=null,a.sessionVariables.axisY2[c].newViewportMaximum=null;a.resetOverlayedCanvas();va(a._zoomButton,a._resetButton);a._dispatchRangeEvent("rangeChanging","reset");a.render();a._dispatchRangeEvent("rangeChanged",
"reset");a.syncCharts&&a.syncCharts(null,null)},this.allDOMEventHandlers),O(this._resetButton,"mouseover",function(){d||(sa(a,a._resetButton,{backgroundColor:a.toolbar.backgroundColorOnHover,color:a.toolbar.hoverFfontColorOnHoverontColor,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._resetButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))},this.allDOMEventHandlers),O(this._resetButton,"mouseout",function(){d||(sa(a,a._resetButton,
{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._resetButton.childNodes[0],{WebkitFilter:"invert(0%)",filter:"invert(0%)"}))},this.allDOMEventHandlers),this.overlaidCanvas.style.cursor=a._defaultCursor);this.zoomEnabled||this.panEnabled||(this._zoomButton?(a._zoomButton.getAttribute("state")===a._cultureInfo.zoomText?(this.panEnabled=!0,this.zoomEnabled=!1):(this.zoomEnabled=!0,this.panEnabled=
!1),Qa(a._zoomButton,a._resetButton)):(this.zoomEnabled=!0,this.panEnabled=!1))}else this.panEnabled=this.zoomEnabled=!1;this._menuButton?this.exportEnabled?Qa(this._menuButton):va(this._menuButton):this.exportEnabled&&r&&(d=!1,this._menuButton=document.createElement("button"),ua(this,this._menuButton,"menu"),this._toolBar.appendChild(this._menuButton),O(this._menuButton,"touchstart",function(a){d=!0},this.allDOMEventHandlers),O(this._menuButton,"click",function(){"none"!==a._dropdownMenu.style.display||
a._dropDownCloseTime&&500>=(new Date).getTime()-a._dropDownCloseTime.getTime()||(a._dropdownMenu.style.display="block",a._menuButton.blur(),a._dropdownMenu.focus())},this.allDOMEventHandlers,!0),O(this._menuButton,"mouseover",function(){d||(sa(a,a._menuButton,{backgroundColor:a.toolbar.backgroundColorOnHover,color:a.toolbar.fontColorOnHover}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._menuButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))},this.allDOMEventHandlers,!0),
O(this._menuButton,"mouseout",function(){d||(sa(a,a._menuButton,{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._menuButton.childNodes[0],{WebkitFilter:"invert(0%)",filter:"invert(0%)"}))},this.allDOMEventHandlers,!0));if(!this._dropdownMenu&&this.exportEnabled&&r){d=!1;this._dropdownMenu=document.createElement("div");this._dropdownMenu.setAttribute("tabindex",-1);var b=-1!==this.theme.indexOf("dark")?"black":"#888888";this._dropdownMenu.style.cssText=
"position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:"+this.toolbar.backgroundColor+";box-shadow: 2px 2px 10px "+b;a._dropdownMenu.style.display="none";this._toolBar.appendChild(this._dropdownMenu);O(this._dropdownMenu,"blur",function(){va(a._dropdownMenu);
a._dropDownCloseTime=new Date},this.allDOMEventHandlers,!0);b=document.createElement("div");b.style.cssText="padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.printText;b.style.backgroundColor=this.toolbar.backgroundColor;b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);O(b,"touchstart",function(a){d=!0},this.allDOMEventHandlers);O(b,"mouseover",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,this.style.color=a.toolbar.fontColorOnHover)},this.allDOMEventHandlers,
!0);O(b,"mouseout",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColor,this.style.color=a.toolbar.fontColor)},this.allDOMEventHandlers,!0);O(b,"click",function(){a.print();va(a._dropdownMenu)},this.allDOMEventHandlers,!0);b=document.createElement("div");b.style.cssText="padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.saveJPGText;b.style.backgroundColor=this.toolbar.backgroundColor;b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);O(b,"touchstart",function(a){d=
!0},this.allDOMEventHandlers);O(b,"mouseover",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,this.style.color=a.toolbar.fontColorOnHover)},this.allDOMEventHandlers,!0);O(b,"mouseout",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColor,this.style.color=a.toolbar.fontColor)},this.allDOMEventHandlers,!0);O(b,"click",function(){Ta(a.canvas,"jpeg",a.exportFileName);va(a._dropdownMenu)},this.allDOMEventHandlers,!0);b=document.createElement("div");b.style.cssText=
"padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.savePNGText;b.style.backgroundColor=this.toolbar.backgroundColor;b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);O(b,"touchstart",function(a){d=!0},this.allDOMEventHandlers);O(b,"mouseover",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,this.style.color=a.toolbar.fontColorOnHover)},this.allDOMEventHandlers,!0);O(b,"mouseout",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColor,
this.style.color=a.toolbar.fontColor)},this.allDOMEventHandlers,!0);O(b,"click",function(){Ta(a.canvas,"png",a.exportFileName);va(a._dropdownMenu)},this.allDOMEventHandlers,!0)}"none"!==this._toolBar.style.display&&this._zoomButton&&(this.panEnabled?ua(a,a._zoomButton,"zoom"):ua(a,a._zoomButton,"pan"),a._resetButton.getAttribute("state")!==a._cultureInfo.resetText&&ua(a,a._resetButton,"reset"));this.options.toolTip&&this.toolTip.options!==this.options.toolTip&&(this.toolTip.options=this.options.toolTip);
for(var c in this.toolTip.options)this.toolTip.options.hasOwnProperty(c)&&this.toolTip.updateOption(c)};p.prototype._updateSize=function(){var a;a=[this.canvas,this._preRenderCanvas,this.overlaidCanvas,this._eventManager.ghostCanvas];var d=0,b=0;this.options.width?d=this.width:this.width=d=0<this.container.clientWidth?this.container.clientWidth:this.width;this.options.height?b=this.height:this.height=b=0<this.container.clientHeight?this.container.clientHeight:this.height;if(this.canvas.width!==d*
W||this.canvas.height!==b*W){for(var c=0;c<a.length;c++)Oa(a[c],d,b);a=!0}else a=!1;return a};p.prototype._initialize=function(){this.isNavigator=u(this.parent)||u(this.parent._defaultsKey)||"Navigator"!==this.parent._defaultsKey?!1:!0;this.toolbar=new Va(this,this.options.toolbar);this._animator?this._animator.cancelAllAnimations():this._animator=new ga(this);this.removeAllEventListeners();this.disableToolTip=!1;this._axes=[];this.funnelPyramidClickHandler=this.pieDoughnutClickHandler=null;this._updateOptions();
this.animatedRender=r&&this.animationEnabled&&0===this.renderCount;this._updateSize();this.clearCanvas();this.ctx.beginPath();this.axisX=[];this.axisX2=[];this.axisY=[];this.axisY2=[];this._indexLabels=[];this._dataInRenderedOrder=[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,plotTypes:[]};this.layoutManager=new Ga(0,0,this.width,this.height,this.isNavigator?0:2);this.plotArea.layoutManager&&this.plotArea.layoutManager.reset();this.data=[];var a=
0,d=null;if(this.options.data){for(var b=0;b<this.options.data.length;b++)if(a++,!this.options.data[b].type||0<=p._supportedChartTypes.indexOf(this.options.data[b].type)){var c=new F(this,this.options.data[b],a-1,++this._eventManager.lastObjectId);"error"===c.type&&(c.linkedDataSeriesIndex=u(this.options.data[b].linkedDataSeriesIndex)?b-1:this.options.data[b].linkedDataSeriesIndex,0>c.linkedDataSeriesIndex||c.linkedDataSeriesIndex>=this.options.data.length||"number"!==typeof c.linkedDataSeriesIndex||
"error"===this.options.data[c.linkedDataSeriesIndex].type)&&(c.linkedDataSeriesIndex=null);null===c.name&&(c.name="DataSeries "+a);null===c.color?1<this.options.data.length?(c._colorSet=[this._selectedColorSet[c.index%this._selectedColorSet.length]],c.color=this._selectedColorSet[c.index%this._selectedColorSet.length]):c._colorSet="line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type||
"rangeArea"===c.type||"rangeSplineArea"===c.type||"candlestick"===c.type||"ohlc"===c.type||"waterfall"===c.type||"boxAndWhisker"===c.type?[this._selectedColorSet[0]]:this._selectedColorSet:c._colorSet=[c.color];null===c.markerSize&&(("line"===c.type||"stepLine"===c.type||"spline"===c.type||0<=c.type.toLowerCase().indexOf("area"))&&c.dataPoints&&c.dataPoints.length<this.width/16||"scatter"===c.type)&&(c.markerSize=8);"bubble"!==c.type&&"scatter"!==c.type||!c.dataPoints||(c.dataPoints.some?c.dataPoints.some(function(a){return a.x})&&
c.dataPoints.sort(k):c.dataPoints.sort(k));this.data.push(c);var e=c.axisPlacement,d=d||e,g;"normal"===e?"xySwapped"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="normal"):"xySwapped"===e?"normal"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?
g='You cannot combine "'+c.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"===e?"normal"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"):null===e&&"none"===this.plotInfo.axisPlacement&&(g='You cannot combine "'+c.type+'" with pie chart');
if(g&&window.console){window.console.log(g);return}}for(b=0;b<this.data.length;b++){if("none"==d&&"error"===this.data[b].type&&window.console){window.console.log('You cannot combine "'+c.type+'" with error chart');return}"error"===this.data[b].type&&(this.data[b].axisPlacement=this.plotInfo.axisPlacement=d||"normal",this.data[b]._linkedSeries=null===this.data[b].linkedDataSeriesIndex?null:this.data[this.data[b].linkedDataSeriesIndex])}}this._objectsInitialized=!0;this._plotAreaElements=[]};p._supportedChartTypes=
Fa("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));p.prototype.setLayout=function(){for(var a=this._plotAreaElements,d=0;d<this.data.length;d++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement){if(!this.data[d].axisYType||
"primary"===this.data[d].axisYType)if(this.options.axisY&&0<this.options.axisY.length){if(!this.axisY.length)for(var b=0;b<this.options.axisY.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY[b]=new z(this,"axisY",this.options.axisY[b],b,"axisY","left")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY[b]=new z(this,"axisY",this.options.axisY[b],b,"axisY","bottom"));this.data[d].axisY=this.axisY[0<=this.data[d].axisYIndex&&this.data[d].axisYIndex<this.axisY.length?
this.data[d].axisYIndex:0];this.axisY[0<=this.data[d].axisYIndex&&this.data[d].axisYIndex<this.axisY.length?this.data[d].axisYIndex:0].dataSeries.push(this.data[d])}else this.axisY.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY[0]=new z(this,"axisY",this.options.axisY,0,"axisY","left")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY[0]=new z(this,"axisY",this.options.axisY,0,"axisY","bottom"))),this.data[d].axisY=this.axisY[0],this.axisY[0].dataSeries.push(this.data[d]);
if("secondary"===this.data[d].axisYType)if(this.options.axisY2&&0<this.options.axisY2.length){if(!this.axisY2.length)for(b=0;b<this.options.axisY2.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY2[b]=new z(this,"axisY2",this.options.axisY2[b],b,"axisY","right")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2[b]=new z(this,"axisY2",this.options.axisY2[b],b,"axisY","top"));this.data[d].axisY=this.axisY2[0<=this.data[d].axisYIndex&&this.data[d].axisYIndex<
this.axisY2.length?this.data[d].axisYIndex:0];this.axisY2[0<=this.data[d].axisYIndex&&this.data[d].axisYIndex<this.axisY2.length?this.data[d].axisYIndex:0].dataSeries.push(this.data[d])}else this.axisY2.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY2[0]=new z(this,"axisY2",this.options.axisY2,0,"axisY","right")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2[0]=new z(this,"axisY2",this.options.axisY2,0,"axisY","top"))),this.data[d].axisY=this.axisY2[0],
this.axisY2[0].dataSeries.push(this.data[d]);if(!this.data[d].axisXType||"primary"===this.data[d].axisXType)if(this.options.axisX&&0<this.options.axisX.length){if(!this.axisX.length)for(b=0;b<this.options.axisX.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX[b]=new z(this,"axisX",this.options.axisX[b],b,"axisX","bottom")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX[b]=new z(this,"axisX",this.options.axisX[b],b,"axisX","left"));this.data[d].axisX=
this.axisX[0<=this.data[d].axisXIndex&&this.data[d].axisXIndex<this.axisX.length?this.data[d].axisXIndex:0];this.axisX[0<=this.data[d].axisXIndex&&this.data[d].axisXIndex<this.axisX.length?this.data[d].axisXIndex:0].dataSeries.push(this.data[d])}else this.axisX.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX[0]=new z(this,"axisX",this.options.axisX,0,"axisX","bottom")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX[0]=new z(this,"axisX",this.options.axisX,
0,"axisX","left"))),this.data[d].axisX=this.axisX[0],this.axisX[0].dataSeries.push(this.data[d]);if("secondary"===this.data[d].axisXType)if(this.options.axisX2&&0<this.options.axisX2.length){if(!this.axisX2.length)for(b=0;b<this.options.axisX2.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX2[b]=new z(this,"axisX2",this.options.axisX2[b],b,"axisX","top")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX2[b]=new z(this,"axisX2",this.options.axisX2[b],
b,"axisX","right"));this.data[d].axisX=this.axisX2[0<=this.data[d].axisXIndex&&this.data[d].axisXIndex<this.axisX2.length?this.data[d].axisXIndex:0];this.axisX2[0<=this.data[d].axisXIndex&&this.data[d].axisXIndex<this.axisX2.length?this.data[d].axisXIndex:0].dataSeries.push(this.data[d])}else this.axisX2.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX2[0]=new z(this,"axisX2",this.options.axisX2,0,"axisX","top")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX2[0]=
new z(this,"axisX2",this.options.axisX2,0,"axisX","right"))),this.data[d].axisX=this.axisX2[0],this.axisX2[0].dataSeries.push(this.data[d])}if(this.axisY){for(b=1;b<this.axisY.length;b++)"undefined"===typeof this.axisY[b].options.gridThickness&&(this.axisY[b].gridThickness=0);for(b=0;b<this.axisY.length-1;b++)"undefined"===typeof this.axisY[b].options.margin&&(this.axisY[b].margin=10)}if(this.axisY2){for(b=1;b<this.axisY2.length;b++)"undefined"===typeof this.axisY2[b].options.gridThickness&&(this.axisY2[b].gridThickness=
0);for(b=0;b<this.axisY2.length-1;b++)"undefined"===typeof this.axisY2[b].options.margin&&(this.axisY2[b].margin=10)}this.axisY&&0<this.axisY.length&&(this.axisY2&&0<this.axisY2.length)&&(0<this.axisY[0].gridThickness&&"undefined"===typeof this.axisY2[0].options.gridThickness?this.axisY2[0].gridThickness=0:0<this.axisY2[0].gridThickness&&"undefined"===typeof this.axisY[0].options.gridThickness&&(this.axisY[0].gridThickness=0));if(this.axisX)for(b=0;b<this.axisX.length;b++)"undefined"===typeof this.axisX[b].options.gridThickness&&
(this.axisX[b].gridThickness=0);if(this.axisX2)for(b=0;b<this.axisX2.length;b++)"undefined"===typeof this.axisX2[b].options.gridThickness&&(this.axisX2[b].gridThickness=0);this.axisX&&0<this.axisX.length&&(this.axisX2&&0<this.axisX2.length)&&(0<this.axisX[0].gridThickness&&"undefined"===typeof this.axisX2[0].options.gridThickness?this.axisX2[0].gridThickness=0:0<this.axisX2[0].gridThickness&&"undefined"===typeof this.axisX[0].options.gridThickness&&(this.axisX[0].gridThickness=0));b=!1;if(0<this._axes.length&&
(this.zoomEnabled||this.panEnabled))for(d=0;d<this._axes.length;d++)if(null!==this._axes[d].viewportMinimum||null!==this._axes[d].viewportMaximum){b=!0;break}b?(Qa(this._zoomButton,this._resetButton),this._toolBar.style.border=this.toolbar.borderThickness+"px solid "+this.toolbar.borderColor,this._zoomButton.style.borderRight=this.toolbar.borderThickness+"px solid "+this.toolbar.borderColor,this._resetButton.style.borderRight=(this.exportEnabled?this.toolbar.borderThickness:0)+"px solid "+this.toolbar.borderColor):
(va(this._zoomButton,this._resetButton),this._toolBar.style.border=this.toolbar.borderThickness+"px solid transparent",this.options.zoomEnabled&&(this.zoomEnabled=!0,this.panEnabled=!1));gb(this);this._processData();this.options.title&&(this.title=new Aa(this,this.options.title),this.title.dockInsidePlotArea?a.push(this.title):this.title.setLayout());this.subtitles=[];if(this.options.subtitles)for(d=0;d<this.options.subtitles.length;d++)b=new Ka(this,this.options.subtitles[d],d),this.subtitles.push(b),
b.dockInsidePlotArea?a.push(b):b.setLayout();this.legend=new H(this,this.options.legend);for(d=0;d<this.data.length;d++)(this.data[d].showInLegend||"pie"===this.data[d].type||"doughnut"===this.data[d].type||"funnel"===this.data[d].type||"pyramid"===this.data[d].type)&&this.legend.dataSeries.push(this.data[d]);this.legend.dockInsidePlotArea?a.push(this.legend):this.legend.setLayout();for(d=0;d<this._axes.length;d++)if(this._axes[d].scaleBreaks&&this._axes[d].scaleBreaks._appliedBreaks.length){r?(this._breaksCanvas=
ta(this.width,this.height,!0),this._breaksCanvasCtx=this._breaksCanvas.getContext("2d")):(this._breaksCanvas=this.canvas,this._breaksCanvasCtx=this.ctx);break}this._preRenderCanvas=u(this._preRenderCanvas)?ta(this.width,this.height):this._preRenderCanvas;this._preRenderCtx=this._preRenderCanvas.getContext("2d");"normal"!==this.plotInfo.axisPlacement&&"xySwapped"!==this.plotInfo.axisPlacement||z.setLayout(this.axisX,this.axisX2,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace())};
p.prototype.renderElements=function(){var a=this._plotAreaElements;this.title&&!this.title.dockInsidePlotArea&&this.title.render();for(var d=0;d<this.subtitles.length;d++)this.subtitles[d].dockInsidePlotArea||this.subtitles[d].render();this.legend.dockInsidePlotArea||this.legend.render();if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)z.render(this.axisX,this.axisX2,this.axisY,this.axisY2,this.plotInfo.axisPlacement);else if("none"===this.plotInfo.axisPlacement)this.preparePlotArea();
else return;for(d=0;d<a.length;d++)a[d].setLayout(),a[d].render();var b=[];if(this.animatedRender){var c=ta(this.width,this.height);c.getContext("2d").drawImage(this.canvas,0,0,this.width,this.height)}hb(this);var a=this.ctx.miterLimit,e;this.ctx.miterLimit=3;r&&this._breaksCanvas&&(this._preRenderCtx.drawImage(this.canvas,0,0,this.width,this.height),this._preRenderCtx.drawImage(this._breaksCanvas,0,0,this.width,this.height),this._breaksCanvasCtx.globalCompositeOperation="source-atop",this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),this._preRenderCtx.clearRect(0,0,this.width,this.height));for(d=0;d<this.plotInfo.plotTypes.length;d++)for(var g=this.plotInfo.plotTypes[d],m=0;m<g.plotUnits.length;m++){var l=g.plotUnits[m],w=null;l.targetCanvas=null;this.animatedRender&&(l.targetCanvas=ta(this.width,this.height),l.targetCanvasCtx=l.targetCanvas.getContext("2d"),e=l.targetCanvasCtx.miterLimit,l.targetCanvasCtx.miterLimit=3);"line"===l.type?w=this.renderLine(l):"stepLine"===l.type?w=this.renderStepLine(l):
"spline"===l.type?w=this.renderSpline(l):"column"===l.type?w=this.renderColumn(l):"bar"===l.type?w=this.renderBar(l):"area"===l.type?w=this.renderArea(l):"stepArea"===l.type?w=this.renderStepArea(l):"splineArea"===l.type?w=this.renderSplineArea(l):"stackedColumn"===l.type?w=this.renderStackedColumn(l):"stackedColumn100"===l.type?w=this.renderStackedColumn100(l):"stackedBar"===l.type?w=this.renderStackedBar(l):"stackedBar100"===l.type?w=this.renderStackedBar100(l):"stackedArea"===l.type?w=this.renderStackedArea(l):
"stackedArea100"===l.type?w=this.renderStackedArea100(l):"bubble"===l.type?w=w=this.renderBubble(l):"scatter"===l.type?w=this.renderScatter(l):"pie"===l.type?this.renderPie(l):"doughnut"===l.type?this.renderPie(l):"funnel"===l.type?w=this.renderFunnel(l):"pyramid"===l.type?w=this.renderFunnel(l):"candlestick"===l.type?w=this.renderCandlestick(l):"ohlc"===l.type?w=this.renderCandlestick(l):"rangeColumn"===l.type?w=this.renderRangeColumn(l):"error"===l.type?w=this.renderError(l):"rangeBar"===l.type?
w=this.renderRangeBar(l):"rangeArea"===l.type?w=this.renderRangeArea(l):"rangeSplineArea"===l.type?w=this.renderRangeSplineArea(l):"waterfall"===l.type?w=this.renderWaterfall(l):"boxAndWhisker"===l.type&&(w=this.renderBoxAndWhisker(l));for(var h=0;h<l.dataSeriesIndexes.length;h++)this._dataInRenderedOrder.push(this.data[l.dataSeriesIndexes[h]]);this.animatedRender&&(l.targetCanvasCtx.miterLimit=e,w&&b.push(w))}this.ctx.miterLimit=a;this.animatedRender&&this._breaksCanvasCtx&&b.push({source:this._breaksCanvasCtx,
dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0,startTimePercent:0.7});this.animatedRender&&0<this._indexLabels.length&&(e=ta(this.width,this.height).getContext("2d"),b.push(this.renderIndexLabels(e)));var s=this;if(0<b.length)s.disableToolTip=!0,s._animator.animate(200,s.animationDuration,function(a){s.ctx.clearRect(0,0,s.width,s.height);s.ctx.drawImage(c,0,0,Math.floor(s.width*W),Math.floor(s.height*W),0,0,s.width,s.height);for(var e=
0;e<b.length;e++)w=b[e],1>a&&"undefined"!==typeof w.startTimePercent?a>=w.startTimePercent&&w.animationCallback(w.easingFunction(a-w.startTimePercent,0,1,1-w.startTimePercent),w):w.animationCallback(w.easingFunction(a,0,1,1),w);s.dispatchEvent("dataAnimationIterationEnd",{chart:s})},function(){b=[];for(var a=0;a<s.plotInfo.plotTypes.length;a++)for(var e=s.plotInfo.plotTypes[a],d=0;d<e.plotUnits.length;d++)e.plotUnits[d].targetCanvas=null;c=null;s.disableToolTip=!1});else{if(s._breaksCanvas)if(r)s.plotArea.ctx.drawImage(s._breaksCanvas,
0,0,this.width,this.height);else for(h=0;h<s._axes.length;h++)s._axes[h].createMask();0<s._indexLabels.length&&s.renderIndexLabels();s.dispatchEvent("dataAnimationIterationEnd",{chart:s})}this.attachPlotAreaEventHandlers();this.zoomEnabled||(this.panEnabled||!this._zoomButton||"none"===this._zoomButton.style.display)||va(this._zoomButton,this._resetButton);this.toolTip._updateToolTip();this.renderCount++;Ja&&(s=this,setTimeout(function(){var a=document.getElementById("ghostCanvasCopy");a&&(Oa(a,s.width,
s.height),a.getContext("2d").drawImage(s._eventManager.ghostCanvas,0,0))},2E3));this._breaksCanvas&&(delete this._breaksCanvas,delete this._breaksCanvasCtx);for(h=0;h<this._axes.length;h++)this._axes[h].maskCanvas&&(delete this._axes[h].maskCanvas,delete this._axes[h].maskCtx)};p.prototype.render=function(a){a&&(this.options=a);this._initialize();this.setLayout();this.renderElements()};p.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,
mouseup:this._plotAreaMouseUp,mousemove:this._plotAreaMouseMove,cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})};p.prototype.categoriseDataSeries=function(){for(var a="",d=0;d<this.data.length;d++)if(a=this.data[d],a.dataPoints&&(0!==a.dataPoints.length&&a.visible)&&0<=p._supportedChartTypes.indexOf(a.type)){for(var b=null,c=!1,e=null,g=!1,m=0;m<this.plotInfo.plotTypes.length;m++)if(this.plotInfo.plotTypes[m].type===a.type){c=!0;b=this.plotInfo.plotTypes[m];break}c||(b={type:a.type,
totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(b));for(m=0;m<b.plotUnits.length;m++)if(b.plotUnits[m].axisYType===a.axisYType&&b.plotUnits[m].axisXType===a.axisXType&&b.plotUnits[m].axisYIndex===a.axisYIndex&&b.plotUnits[m].axisXIndex===a.axisXIndex){g=!0;e=b.plotUnits[m];break}g||(e={type:a.type,previousDataSeriesCount:0,index:b.plotUnits.length,plotType:b,axisXType:a.axisXType,axisYType:a.axisYType,axisYIndex:a.axisYIndex,axisXIndex:a.axisXIndex,axisY:"primary"===a.axisYType?this.axisY[0<=
a.axisYIndex&&a.axisYIndex<this.axisY.length?a.axisYIndex:0]:this.axisY2[0<=a.axisYIndex&&a.axisYIndex<this.axisY2.length?a.axisYIndex:0],axisX:"primary"===a.axisXType?this.axisX[0<=a.axisXIndex&&a.axisXIndex<this.axisX.length?a.axisXIndex:0]:this.axisX2[0<=a.axisXIndex&&a.axisXIndex<this.axisX2.length?a.axisXIndex:0],dataSeriesIndexes:[],yTotals:[]},b.plotUnits.push(e));b.totalDataSeries++;e.dataSeriesIndexes.push(d);a.plotUnit=e}for(d=0;d<this.plotInfo.plotTypes.length;d++)for(b=this.plotInfo.plotTypes[d],
m=a=0;m<b.plotUnits.length;m++)b.plotUnits[m].previousDataSeriesCount=a,a+=b.plotUnits[m].dataSeriesIndexes.length};p.prototype.assignIdToDataPoints=function(){for(var a=0;a<this.data.length;a++){var d=this.data[a];if(d.dataPoints)for(var b=d.dataPoints.length,c=0;c<b;c++)d.dataPointIds[c]=++this._eventManager.lastObjectId}};p.prototype._processData=function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=0;a<this.plotInfo.plotTypes.length;a++)for(var d=this.plotInfo.plotTypes[a],
b=0;b<d.plotUnits.length;b++){var c=d.plotUnits[b];"line"===c.type||"stepLine"===c.type||"spline"===c.type||"column"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"bar"===c.type||"bubble"===c.type||"scatter"===c.type?this._processMultiseriesPlotUnit(c):"stackedColumn"===c.type||"stackedBar"===c.type||"stackedArea"===c.type?this._processStackedPlotUnit(c):"stackedColumn100"===c.type||"stackedBar100"===c.type||"stackedArea100"===c.type?this._processStacked100PlotUnit(c):"candlestick"===
c.type||"ohlc"===c.type||"rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type||"error"===c.type||"boxAndWhisker"===c.type?this._processMultiYPlotUnit(c):"waterfall"===c.type&&this._processSpecificPlotUnit(c)}this.calculateAutoBreaks()};p.prototype._processMultiseriesPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,m=0;m<a.dataSeriesIndexes.length;m++){var l=this.data[a.dataSeriesIndexes[m]],
w=0,h=!1,s=!1,q;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var n=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,f=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?
this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(l.dataPoints[w].x&&l.dataPoints[w].x.getTime||"dateTime"===l.xValueType)g=!0;for(w=0;w<l.dataPoints.length;w++){"undefined"===typeof l.dataPoints[w].x&&(l.dataPoints[w].x=w+(a.axisX.logarithmic?1:0));l.dataPoints[w].x.getTime?(g=!0,c=l.dataPoints[w].x.getTime()):c=l.dataPoints[w].x;e=l.dataPoints[w].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);e<d.min&&"number"===typeof e&&(d.min=e);
e>d.max&&"number"===typeof e&&(d.max=e);if(0<w){if(a.axisX.logarithmic){var B=c/l.dataPoints[w-1].x;1>B&&(B=1/B);b.minDiff>B&&1!==B&&(b.minDiff=B)}else B=c-l.dataPoints[w-1].x,0>B&&(B*=-1),b.minDiff>B&&0!==B&&(b.minDiff=B);null!==e&&null!==l.dataPoints[w-1].y&&(a.axisY.logarithmic?(B=e/l.dataPoints[w-1].y,1>B&&(B=1/B),d.minDiff>B&&1!==B&&(d.minDiff=B)):(B=e-l.dataPoints[w-1].y,0>B&&(B*=-1),d.minDiff>B&&0!==B&&(d.minDiff=B)))}if(c<n&&!h)null!==e&&(q=c);else{if(!h&&(h=!0,0<w)){w-=2;continue}if(c>f&&
!s)s=!0;else if(c>f&&s)continue;l.dataPoints[w].label&&(a.axisX.labels[c]=l.dataPoints[w].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===e?b.viewPortMin===c&&q<c&&(b.viewPortMin=q):(e<d.viewPortMin&&"number"===typeof e&&(d.viewPortMin=e),e>d.viewPortMax&&"number"===typeof e&&(d.viewPortMax=e))}}l.axisX.valueType=l.xValueType=g?"dateTime":"number"}};p.prototype._processStackedPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var d=
a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,m=[],l=[],w=Infinity,h=-Infinity,s=0;s<a.dataSeriesIndexes.length;s++){var q=this.data[a.dataSeriesIndexes[s]],n=0,f=!1,B=!1,k;if("normal"===q.axisPlacement||"xySwapped"===q.axisPlacement)var p=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:-Infinity,
t=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(q.dataPoints[n].x&&q.dataPoints[n].x.getTime||"dateTime"===q.xValueType)g=!0;for(n=0;n<q.dataPoints.length;n++){"undefined"===typeof q.dataPoints[n].x&&(q.dataPoints[n].x=n+(a.axisX.logarithmic?1:0));q.dataPoints[n].x.getTime?(g=!0,c=q.dataPoints[n].x.getTime()):
c=q.dataPoints[n].x;e=u(q.dataPoints[n].y)?0:q.dataPoints[n].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);if(0<n){if(a.axisX.logarithmic){var r=c/q.dataPoints[n-1].x;1>r&&(r=1/r);b.minDiff>r&&1!==r&&(b.minDiff=r)}else r=c-q.dataPoints[n-1].x,0>r&&(r*=-1),b.minDiff>r&&0!==r&&(b.minDiff=r);null!==e&&null!==q.dataPoints[n-1].y&&(a.axisY.logarithmic?0<e&&(r=e/q.dataPoints[n-1].y,1>r&&(r=1/r),d.minDiff>r&&1!==r&&(d.minDiff=r)):(r=e-q.dataPoints[n-1].y,0>r&&(r*=-1),d.minDiff>r&&0!==r&&(d.minDiff=r)))}if(c<p&&
!f)null!==q.dataPoints[n].y&&(k=c);else{if(!f&&(f=!0,0<n)){n-=2;continue}if(c>t&&!B)B=!0;else if(c>t&&B)continue;q.dataPoints[n].label&&(a.axisX.labels[c]=q.dataPoints[n].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===q.dataPoints[n].y?b.viewPortMin===c&&k<c&&(b.viewPortMin=k):(a.yTotals[c]=(a.yTotals[c]?a.yTotals[c]:0)+e,0<=e?m[c]?m[c]+=e:(m[c]=e,w=Math.min(e,w)):l[c]?l[c]+=e:(l[c]=e,h=Math.max(e,h)))}}a.axisY.scaleBreaks&&(a.axisY.scaleBreaks.autoCalculate&&
1<=a.axisY.scaleBreaks.maxNumberOfAutoBreaks)&&(d.dataPointYPositiveSums?(d.dataPointYPositiveSums.push.apply(d.dataPointYPositiveSums,m),d.dataPointYNegativeSums.push.apply(d.dataPointYPositiveSums,l)):(d.dataPointYPositiveSums=m,d.dataPointYNegativeSums=l));q.axisX.valueType=q.xValueType=g?"dateTime":"number"}for(n in m)m.hasOwnProperty(n)&&!isNaN(n)&&(a=m[n],a<d.min&&(d.min=Math.min(a,w)),a>d.max&&(d.max=a),n<b.viewPortMin||n>b.viewPortMax||(a<d.viewPortMin&&(d.viewPortMin=Math.min(a,w)),a>d.viewPortMax&&
(d.viewPortMax=a)));for(n in l)l.hasOwnProperty(n)&&!isNaN(n)&&(a=l[n],a<d.min&&(d.min=a),a>d.max&&(d.max=Math.max(a,h)),n<b.viewPortMin||n>b.viewPortMax||(a<d.viewPortMin&&(d.viewPortMin=a),a>d.viewPortMax&&(d.viewPortMax=Math.max(a,h))))}};p.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,m=!1,l=!1,w=[],h=0;h<a.dataSeriesIndexes.length;h++){var s=this.data[a.dataSeriesIndexes[h]],q=0,
n=!1,f=!1,B;if("normal"===s.axisPlacement||"xySwapped"===s.axisPlacement)var k=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:-Infinity,r=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:
this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(s.dataPoints[q].x&&s.dataPoints[q].x.getTime||"dateTime"===s.xValueType)g=!0;for(q=0;q<s.dataPoints.length;q++){"undefined"===typeof s.dataPoints[q].x&&(s.dataPoints[q].x=q+(a.axisX.logarithmic?1:0));s.dataPoints[q].x.getTime?(g=!0,c=s.dataPoints[q].x.getTime()):c=s.dataPoints[q].x;e=u(s.dataPoints[q].y)?null:s.dataPoints[q].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);if(0<q){if(a.axisX.logarithmic){var t=c/s.dataPoints[q-
1].x;1>t&&(t=1/t);b.minDiff>t&&1!==t&&(b.minDiff=t)}else t=c-s.dataPoints[q-1].x,0>t&&(t*=-1),b.minDiff>t&&0!==t&&(b.minDiff=t);u(e)||null===s.dataPoints[q-1].y||(a.axisY.logarithmic?0<e&&(t=e/s.dataPoints[q-1].y,1>t&&(t=1/t),d.minDiff>t&&1!==t&&(d.minDiff=t)):(t=e-s.dataPoints[q-1].y,0>t&&(t*=-1),d.minDiff>t&&0!==t&&(d.minDiff=t)))}if(c<k&&!n)null!==e&&(B=c);else{if(!n&&(n=!0,0<q)){q-=2;continue}if(c>r&&!f)f=!0;else if(c>r&&f)continue;s.dataPoints[q].label&&(a.axisX.labels[c]=s.dataPoints[q].label);
c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===e?b.viewPortMin===c&&B<c&&(b.viewPortMin=B):(a.yTotals[c]=(a.yTotals[c]?a.yTotals[c]:0)+e,0<=e?m=!0:0>e&&(l=!0),w[c]=w[c]?w[c]+Math.abs(e):Math.abs(e))}}s.axisX.valueType=s.xValueType=g?"dateTime":"number"}a.axisY.logarithmic?(d.max=u(d.viewPortMax)?99*Math.pow(a.axisY.logarithmBase,-0.05):Math.max(d.viewPortMax,99*Math.pow(a.axisY.logarithmBase,-0.05)),d.min=u(d.viewPortMin)?1:Math.min(d.viewPortMin,1)):m&&!l?(d.max=u(d.viewPortMax)?
99:Math.max(d.viewPortMax,99),d.min=u(d.viewPortMin)?1:Math.min(d.viewPortMin,1)):m&&l?(d.max=u(d.viewPortMax)?99:Math.max(d.viewPortMax,99),d.min=u(d.viewPortMin)?-99:Math.min(d.viewPortMin,-99)):!m&&l&&(d.max=u(d.viewPortMax)?-1:Math.max(d.viewPortMax,-1),d.min=u(d.viewPortMin)?-99:Math.min(d.viewPortMin,-99));d.viewPortMin=d.min;d.viewPortMax=d.max;a.dataPointYSums=w}};p.prototype._processMultiYPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var d=a.axisY.dataInfo,
b=a.axisX.dataInfo,c,e,g,m,l=!1,w=0;w<a.dataSeriesIndexes.length;w++){var h=this.data[a.dataSeriesIndexes[w]],s=0,q=!1,n=!1,f,B,k;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var r=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,t=a.axisX.sessionVariables.newViewportMaximum?
a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(h.dataPoints[s].x&&h.dataPoints[s].x.getTime||"dateTime"===h.xValueType)l=!0;for(s=0;s<h.dataPoints.length;s++){"undefined"===typeof h.dataPoints[s].x&&(h.dataPoints[s].x=s+(a.axisX.logarithmic?1:0));h.dataPoints[s].x.getTime?(l=!0,c=h.dataPoints[s].x.getTime()):c=h.dataPoints[s].x;
if((e=h.dataPoints[s].y)&&e.length){g=Math.min.apply(null,e);m=Math.max.apply(null,e);B=!0;for(var p=0;p<e.length;p++)null===e.k&&(B=!1);B&&(q||(k=f),f=c)}c<b.min&&(b.min=c);c>b.max&&(b.max=c);g<d.min&&(d.min=g);m>d.max&&(d.max=m);0<s&&(a.axisX.logarithmic?(B=c/h.dataPoints[s-1].x,1>B&&(B=1/B),b.minDiff>B&&1!==B&&(b.minDiff=B)):(B=c-h.dataPoints[s-1].x,0>B&&(B*=-1),b.minDiff>B&&0!==B&&(b.minDiff=B)),e&&(null!==e[0]&&h.dataPoints[s-1].y&&null!==h.dataPoints[s-1].y[0])&&(a.axisY.logarithmic?(B=e[0]/
h.dataPoints[s-1].y[0],1>B&&(B=1/B),d.minDiff>B&&1!==B&&(d.minDiff=B)):(B=e[0]-h.dataPoints[s-1].y[0],0>B&&(B*=-1),d.minDiff>B&&0!==B&&(d.minDiff=B))));if(!(c<r)||q){if(!q&&(q=!0,0<s)){s-=2;f=k;continue}if(c>t&&!n)n=!0;else if(c>t&&n)continue;h.dataPoints[s].label&&(a.axisX.labels[c]=h.dataPoints[s].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);if(b.viewPortMin===c&&e)for(p=0;p<e.length;p++)if(null===e[p]&&f<c){b.viewPortMin=f;break}null===e?b.viewPortMin===c&&f<c&&
(b.viewPortMin=f):(g<d.viewPortMin&&(d.viewPortMin=g),m>d.viewPortMax&&(d.viewPortMax=m))}}h.axisX.valueType=h.xValueType=l?"dateTime":"number"}};p.prototype._processSpecificPlotUnit=function(a){if("waterfall"===a.type&&a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,m=0;m<a.dataSeriesIndexes.length;m++){var l=this.data[a.dataSeriesIndexes[m]],w=0,h=!1,s=!1,q=c=0;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var n=a.axisX.sessionVariables.newViewportMinimum?
a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,f=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;
if(l.dataPoints[w].x&&l.dataPoints[w].x.getTime||"dateTime"===l.xValueType)g=!0;for(w=0;w<l.dataPoints.length;w++)"undefined"!==typeof l.dataPoints[w].isCumulativeSum&&!0===l.dataPoints[w].isCumulativeSum?(l.dataPointEOs[w].cumulativeSumYStartValue=0,l.dataPointEOs[w].cumulativeSum=0===w?0:l.dataPointEOs[w-1].cumulativeSum,l.dataPoints[w].y=0===w?0:l.dataPointEOs[w-1].cumulativeSum):"undefined"!==typeof l.dataPoints[w].isIntermediateSum&&!0===l.dataPoints[w].isIntermediateSum?(l.dataPointEOs[w].cumulativeSumYStartValue=
q,l.dataPointEOs[w].cumulativeSum=0===w?0:l.dataPointEOs[w-1].cumulativeSum,l.dataPoints[w].y=0===w?0:c,q=0===w?0:l.dataPointEOs[w-1].cumulativeSum,c=0):(e="number"!==typeof l.dataPoints[w].y?0:l.dataPoints[w].y,l.dataPointEOs[w].cumulativeSumYStartValue=0===w?0:l.dataPointEOs[w-1].cumulativeSum,l.dataPointEOs[w].cumulativeSum=0===w?e:l.dataPointEOs[w-1].cumulativeSum+e,c+=e);for(w=0;w<l.dataPoints.length;w++)if("undefined"===typeof l.dataPoints[w].x&&(l.dataPoints[w].x=w+(a.axisX.logarithmic?1:0)),
l.dataPoints[w].x.getTime?(g=!0,c=l.dataPoints[w].x.getTime()):c=l.dataPoints[w].x,e=l.dataPoints[w].y,c<b.min&&(b.min=c),c>b.max&&(b.max=c),l.dataPointEOs[w].cumulativeSum<d.min&&(d.min=l.dataPointEOs[w].cumulativeSum),l.dataPointEOs[w].cumulativeSum>d.max&&(d.max=l.dataPointEOs[w].cumulativeSum),0<w&&(a.axisX.logarithmic?(q=c/l.dataPoints[w-1].x,1>q&&(q=1/q),b.minDiff>q&&1!==q&&(b.minDiff=q)):(q=c-l.dataPoints[w-1].x,0>q&&(q*=-1),b.minDiff>q&&0!==q&&(b.minDiff=q)),null!==e&&null!==l.dataPoints[w-
1].y&&(a.axisY.logarithmic?(e=l.dataPointEOs[w].cumulativeSum/l.dataPointEOs[w-1].cumulativeSum,1>e&&(e=1/e),d.minDiff>e&&1!==e&&(d.minDiff=e)):(e=l.dataPointEOs[w].cumulativeSum-l.dataPointEOs[w-1].cumulativeSum,0>e&&(e*=-1),d.minDiff>e&&0!==e&&(d.minDiff=e)))),!(c<n)||h){if(!h&&(h=!0,0<w)){w-=2;continue}if(c>f&&!s)s=!0;else if(c>f&&s)continue;l.dataPoints[w].label&&(a.axisX.labels[c]=l.dataPoints[w].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);0<w&&(l.dataPointEOs[w-
1].cumulativeSum<d.viewPortMin&&(d.viewPortMin=l.dataPointEOs[w-1].cumulativeSum),l.dataPointEOs[w-1].cumulativeSum>d.viewPortMax&&(d.viewPortMax=l.dataPointEOs[w-1].cumulativeSum));l.dataPointEOs[w].cumulativeSum<d.viewPortMin&&(d.viewPortMin=l.dataPointEOs[w].cumulativeSum);l.dataPointEOs[w].cumulativeSum>d.viewPortMax&&(d.viewPortMax=l.dataPointEOs[w].cumulativeSum)}l.axisX.valueType=l.xValueType=g?"dateTime":"number"}};p.prototype.calculateAutoBreaks=function(){function a(a,c,b,e){if(e)return b=
Math.pow(Math.min(b*a/c,c/a),0.2),1>=b&&(b=Math.pow(1>a?1/a:Math.min(c/a,a),0.25)),{startValue:a*b,endValue:c/b};b=0.2*Math.min(b-c+a,c-a);0>=b&&(b=0.25*Math.min(c-a,Math.abs(a)));return{startValue:a+b,endValue:c-b}}function d(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){var c=a.axisX.scaleBreaks&&a.axisX.scaleBreaks.autoCalculate&&1<=a.axisX.scaleBreaks.maxNumberOfAutoBreaks,b=a.axisY.scaleBreaks&&a.axisY.scaleBreaks.autoCalculate&&1<=a.axisY.scaleBreaks.maxNumberOfAutoBreaks;if(c||
b)for(var d=a.axisY.dataInfo,f=a.axisX.dataInfo,g,h=f.min,l=f.max,m=d.min,n=d.max,f=f._dataRanges,d=d._dataRanges,q,w=0,s=0;s<a.dataSeriesIndexes.length;s++){var k=e.data[a.dataSeriesIndexes[s]];if(!(4>k.dataPoints.length))for(w=0;w<k.dataPoints.length;w++)if(c&&(q=(l+1-h)*Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold)||10,10)/100,g=k.dataPoints[w].x.getTime?k.dataPoints[w].x.getTime():k.dataPoints[w].x,q=Math.floor((g-h)/q),g<f[q].min&&(f[q].min=g),g>f[q].max&&(f[q].max=g)),b){var r=
(n+1-m)*Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold)||10,10)/100;if((g="waterfall"===a.type?k.dataPointEOs[w].cumulativeSum:k.dataPoints[w].y)&&g.length)for(var p=0;p<g.length;p++)q=Math.floor((g[p]-m)/r),g[p]<d[q].min&&(d[q].min=g[p]),g[p]>d[q].max&&(d[q].max=g[p]);else u(g)||(q=Math.floor((g-m)/r),g<d[q].min&&(d[q].min=g),g>d[q].max&&(d[q].max=g))}}}}function b(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)&&a.axisX.scaleBreaks&&a.axisX.scaleBreaks.autoCalculate&&1<=
a.axisX.scaleBreaks.maxNumberOfAutoBreaks)for(var c=a.axisX.dataInfo,b=c.min,d=c.max,f=c._dataRanges,g,h=0,l=0;l<a.dataSeriesIndexes.length;l++){var m=e.data[a.dataSeriesIndexes[l]];if(!(4>m.dataPoints.length))for(h=0;h<m.dataPoints.length;h++)g=(d+1-b)*Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold)||10,10)/100,c=m.dataPoints[h].x.getTime?m.dataPoints[h].x.getTime():m.dataPoints[h].x,g=Math.floor((c-b)/g),c<f[g].min&&(f[g].min=c),c>f[g].max&&(f[g].max=c)}}for(var c,e=this,g=!1,m=0;m<
this._axes.length;m++)if(this._axes[m].scaleBreaks&&this._axes[m].scaleBreaks.autoCalculate&&1<=this._axes[m].scaleBreaks.maxNumberOfAutoBreaks){g=!0;this._axes[m].dataInfo._dataRanges=[];for(var l=0;l<100/Math.max(parseFloat(this._axes[m].scaleBreaks.collapsibleThreshold)||10,10);l++)this._axes[m].dataInfo._dataRanges.push({min:Infinity,max:-Infinity})}if(g){for(m=0;m<this.plotInfo.plotTypes.length;m++)for(g=this.plotInfo.plotTypes[m],l=0;l<g.plotUnits.length;l++)c=g.plotUnits[l],"line"===c.type||
"stepLine"===c.type||"spline"===c.type||"column"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"bar"===c.type||"bubble"===c.type||"scatter"===c.type||"candlestick"===c.type||"ohlc"===c.type||"rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type||"waterfall"===c.type||"error"===c.type||"boxAndWhisker"===c.type?d(c):0<=c.type.indexOf("stacked")&&b(c);for(m=0;m<this._axes.length;m++)if(this._axes[m].dataInfo._dataRanges){var w=this._axes[m].dataInfo.min;
c=(this._axes[m].dataInfo.max+1-w)*Math.max(parseFloat(this._axes[m].scaleBreaks.collapsibleThreshold)||10,10)/100;var h=this._axes[m].dataInfo._dataRanges,s,q,g=[];if(this._axes[m].dataInfo.dataPointYPositiveSums){var n=this._axes[m].dataInfo.dataPointYPositiveSums;s=h;for(l in n)if(n.hasOwnProperty(l)&&!isNaN(l)&&(q=n[l],!u(q))){var f=Math.floor((q-w)/c);q<s[f].min&&(s[f].min=q);q>s[f].max&&(s[f].max=q)}delete this._axes[m].dataInfo.dataPointYPositiveSums}if(this._axes[m].dataInfo.dataPointYNegativeSums){n=
this._axes[m].dataInfo.dataPointYNegativeSums;s=h;for(l in n)n.hasOwnProperty(l)&&!isNaN(l)&&(q=-1*n[l],u(q)||(f=Math.floor((q-w)/c),q<s[f].min&&(s[f].min=q),q>s[f].max&&(s[f].max=q)));delete this._axes[m].dataInfo.dataPointYNegativeSums}for(l=0;l<h.length-1;l++)if(s=h[l].max,isFinite(s))for(;l<h.length-1;)if(w=h[l+1].min,isFinite(w)){q=w-s;q>c&&g.push({diff:q,start:s,end:w});break}else l++;if(this._axes[m].scaleBreaks.customBreaks)for(l=0;l<this._axes[m].scaleBreaks.customBreaks.length;l++)for(c=
0;c<g.length;c++)if(this._axes[m].scaleBreaks.customBreaks[l].startValue<=g[c].start&&g[c].start<=this._axes[m].scaleBreaks.customBreaks[l].endValue||this._axes[m].scaleBreaks.customBreaks[l].startValue<=g[c].start&&g[c].start<=this._axes[m].scaleBreaks.customBreaks[l].endValue||g[c].start<=this._axes[m].scaleBreaks.customBreaks[l].startValue&&this._axes[m].scaleBreaks.customBreaks[l].startValue<=g[c].end||g[c].start<=this._axes[m].scaleBreaks.customBreaks[l].endValue&&this._axes[m].scaleBreaks.customBreaks[l].endValue<=
g[c].end)g.splice(c,1),c--;g.sort(function(a,c){return c.diff-a.diff});for(l=0;l<Math.min(g.length,this._axes[m].scaleBreaks.maxNumberOfAutoBreaks);l++)c=a(g[l].start,g[l].end,this._axes[m].logarithmic?this._axes[m].dataInfo.max/this._axes[m].dataInfo.min:this._axes[m].dataInfo.max-this._axes[m].dataInfo.min,this._axes[m].logarithmic),this._axes[m].scaleBreaks.autoBreaks.push(new L(this,"autoBreaks",c,l,++this._eventManager.lastObjectId,this._axes[m].scaleBreaks)),this._axes[m].scaleBreaks._appliedBreaks.push(this._axes[m].scaleBreaks.autoBreaks[this._axes[m].scaleBreaks.autoBreaks.length-
1]);this._axes[m].scaleBreaks._appliedBreaks.sort(function(a,c){return a.startValue-c.startValue})}}};p.prototype.getDataPointAtXY=function(a,d,b){b=b||!1;for(var c=[],e=this._dataInRenderedOrder.length-1;0<=e;e--){var g=null;(g=this._dataInRenderedOrder[e].getDataPointAtXY(a,d,b))&&c.push(g)}a=null;d=!1;for(b=0;b<c.length;b++)if("line"===c[b].dataSeries.type||"stepLine"===c[b].dataSeries.type||"area"===c[b].dataSeries.type||"stepArea"===c[b].dataSeries.type)if(e=na("markerSize",c[b].dataPoint,c[b].dataSeries)||
8,c[b].distance<=e/2){d=!0;break}for(b=0;b<c.length;b++)d&&"line"!==c[b].dataSeries.type&&"stepLine"!==c[b].dataSeries.type&&"area"!==c[b].dataSeries.type&&"stepArea"!==c[b].dataSeries.type||(a?c[b].distance<=a.distance&&(a=c[b]):a=c[b]);return a};p.prototype.getObjectAtXY=function(a,d,b){var c=null;if(b=this.getDataPointAtXY(a,d,b||!1))c=b.dataSeries.dataPointIds[b.dataPointIndex];else if(r)c=ab(a,d,this._eventManager.ghostCtx);else for(b=0;b<this.legend.items.length;b++){var e=this.legend.items[b];
a>=e.x1&&(a<=e.x2&&d>=e.y1&&d<=e.y2)&&(c=e.id)}return c};p.prototype.getAutoFontSize=lb;p.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)};p.prototype.clearCanvas=kb;p.prototype.attachEvent=function(a){this._events.push(a)};p.prototype._touchEventHandler=function(a){if(a.changedTouches&&this.interactivityEnabled){var d=[],b=a.changedTouches,c=b?b[0]:a,e=null;switch(a.type){case "touchstart":case "MSPointerDown":d=["mousemove","mousedown"];this._lastTouchData=
Ra(c);this._lastTouchData.time=new Date;break;case "touchmove":case "MSPointerMove":d=["mousemove"];break;case "touchend":case "MSPointerUp":var g=this._lastTouchData&&this._lastTouchData.time?new Date-this._lastTouchData.time:0,d="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType||300>g?["mouseup","click"]:["mouseup"];break;default:return}if(!(b&&1<b.length)){e=Ra(c);e.time=new Date;try{var m=e.y-this._lastTouchData.y,g=e.time-this._lastTouchData.time;if(1<Math.abs(m)&&
this._lastTouchData.scroll||5<Math.abs(m)&&250>g)this._lastTouchData.scroll=!0}catch(l){}this._lastTouchEventType=a.type;if(this._lastTouchData.scroll&&this.zoomEnabled)this.isDrag&&this.resetOverlayedCanvas(),this.isDrag=!1;else for(b=0;b<d.length;b++)if(e=d[b],m=document.createEvent("MouseEvent"),m.initMouseEvent(e,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),c.target.dispatchEvent(m),!u(this._lastTouchData.scroll)&&!this._lastTouchData.scroll||!this._lastTouchData.scroll&&
250<g||"click"===e)a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()}}};p.prototype._dispatchRangeEvent=function(a,d){var b={chart:this};b.type=a;b.trigger=d;var c=[];this.axisX&&0<this.axisX.length&&c.push("axisX");this.axisX2&&0<this.axisX2.length&&c.push("axisX2");this.axisY&&0<this.axisY.length&&c.push("axisY");this.axisY2&&0<this.axisY2.length&&c.push("axisY2");for(var e=0;e<c.length;e++)if(u(b[c[e]])&&(b[c[e]]=[]),"axisY"===c[e])for(var g=0;g<this.axisY.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,
viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisY2"===c[e])for(g=0;g<this.axisY2.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisX"===c[e])for(g=0;g<this.axisX.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisX2"===c[e])for(g=
0;g<this.axisX2.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});this.dispatchEvent(a,b,this)};p.prototype._mouseEventHandler=function(a){"undefined"===typeof a.target&&a.srcElement&&(a.target=a.srcElement);var d=Ra(a),b=a.type,c,e;a.which?e=3==a.which:a.button&&(e=2==a.button);p.capturedEventParam&&(c=p.capturedEventParam,"mouseup"===b&&(p.capturedEventParam=null,c.chart.overlaidCanvas.releaseCapture?
c.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",c.chart._mouseEventHandler,!1)),c.hasOwnProperty(b)&&("mouseup"!==b||c.chart.overlaidCanvas.releaseCapture?a.target!==c.chart.overlaidCanvas&&r||c[b].call(c.context,d.x,d.y):a.target!==c.chart.overlaidCanvas&&(c.chart.isDrag=!1)));if(this.interactivityEnabled)if(this._ignoreNextEvent)this._ignoreNextEvent=!1;else if(a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault(),Ja&&
window.console&&(window.console.log(b+" --\x3e x: "+d.x+"; y:"+d.y),e&&window.console.log(a.which),"mouseup"===b&&window.console.log("mouseup")),!e){if(!p.capturedEventParam&&this._events){for(var g=0;g<this._events.length;g++)if(this._events[g].hasOwnProperty(b))if(c=this._events[g],e=c.bounds,d.x>=e.x1&&d.x<=e.x2&&d.y>=e.y1&&d.y<=e.y2){c[b].call(c.context,d.x,d.y);"mousedown"===b&&!0===c.capture?(p.capturedEventParam=c,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.documentElement.addEventListener("mouseup",
this._mouseEventHandler,!1)):"mouseup"===b&&(c.chart.overlaidCanvas.releaseCapture?c.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",this._mouseEventHandler,!1));break}else c=null;a.target.style.cursor=c&&c.cursor?c.cursor:this._defaultCursor}b=this.plotArea;if(d.x<b.x1||d.x>b.x2||d.y<b.y1||d.y>b.y2)this.toolTip&&this.toolTip.enabled?this.toolTip.hide():this.resetOverlayedCanvas();this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(a)}};
p.prototype._plotAreaMouseDown=function(a,d){this.isDrag=!0;this.dragStartPoint={x:a,y:d}};p.prototype._plotAreaMouseUp=function(a,d){if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var b=d-this.dragStartPoint.y,c=a-this.dragStartPoint.x,e=0<=this.zoomType.indexOf("x"),g=0<=this.zoomType.indexOf("y"),m=!1;this.resetOverlayedCanvas();if("xySwapped"===this.plotInfo.axisPlacement)var l=g,g=e,e=l;if(this.panEnabled||this.zoomEnabled){if(this.panEnabled)for(e=
g=0;e<this._axes.length;e++)b=this._axes[e],b.logarithmic?b.viewportMinimum<b.minimum?(g=b.minimum/b.viewportMinimum,b.sessionVariables.newViewportMinimum=b.viewportMinimum*g,b.sessionVariables.newViewportMaximum=b.viewportMaximum*g,m=!0):b.viewportMaximum>b.maximum&&(g=b.viewportMaximum/b.maximum,b.sessionVariables.newViewportMinimum=b.viewportMinimum/g,b.sessionVariables.newViewportMaximum=b.viewportMaximum/g,m=!0):b.viewportMinimum<b.minimum?(g=b.minimum-b.viewportMinimum,b.sessionVariables.newViewportMinimum=
b.viewportMinimum+g,b.sessionVariables.newViewportMaximum=b.viewportMaximum+g,m=!0):b.viewportMaximum>b.maximum&&(g=b.viewportMaximum-b.maximum,b.sessionVariables.newViewportMinimum=b.viewportMinimum-g,b.sessionVariables.newViewportMaximum=b.viewportMaximum-g,m=!0);else if((!e||2<Math.abs(c))&&(!g||2<Math.abs(b))&&this.zoomEnabled){if(!this.dragStartPoint)return;b=e?this.dragStartPoint.x:this.plotArea.x1;c=g?this.dragStartPoint.y:this.plotArea.y1;e=e?a:this.plotArea.x2;g=g?d:this.plotArea.y2;2<Math.abs(b-
e)&&2<Math.abs(c-g)&&this._zoomPanToSelectedRegion(b,c,e,g)&&(m=!0)}m&&(this._ignoreNextEvent=!0,this._dispatchRangeEvent("rangeChanging","zoom"),this.render(),this._dispatchRangeEvent("rangeChanged","zoom"),m&&(this.zoomEnabled&&"none"===this._zoomButton.style.display)&&(Qa(this._zoomButton,this._resetButton),ua(this,this._zoomButton,"pan"),ua(this,this._resetButton,"reset")))}}this.isDrag=!1;if("none"!==this.plotInfo.axisPlacement){this.resetOverlayedCanvas();if(this.axisX&&0<this.axisX.length)for(m=
0;m<this.axisX.length;m++)this.axisX[m].crosshair&&this.axisX[m].crosshair.enabled&&this.axisX[m].renderCrosshair(a,d);if(this.axisX2&&0<this.axisX2.length)for(m=0;m<this.axisX2.length;m++)this.axisX2[m].crosshair&&this.axisX2[m].crosshair.enabled&&this.axisX2[m].renderCrosshair(a,d);if(this.axisY&&0<this.axisY.length)for(m=0;m<this.axisY.length;m++)this.axisY[m].crosshair&&this.axisY[m].crosshair.enabled&&this.axisY[m].renderCrosshair(a,d);if(this.axisY2&&0<this.axisY2.length)for(m=0;m<this.axisY2.length;m++)this.axisY2[m].crosshair&&
this.axisY2[m].crosshair.enabled&&this.axisY2[m].renderCrosshair(a,d)}};p.prototype._plotAreaMouseMove=function(a,d){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var b=0,c=0,e=b=null,e=0<=this.zoomType.indexOf("x"),g=0<=this.zoomType.indexOf("y"),m=this;"xySwapped"===this.plotInfo.axisPlacement&&(b=g,g=e,e=b);b=this.dragStartPoint.x-a;c=this.dragStartPoint.y-d;2<Math.abs(b)&&8>Math.abs(b)&&(this.panEnabled||this.zoomEnabled)?this.toolTip.hide():this.panEnabled||this.zoomEnabled||this.toolTip.mouseMoveHandler(a,
d);if((!e||2<Math.abs(b)||!g||2<Math.abs(c))&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled)e={x1:e?this.plotArea.x1+b:this.plotArea.x1,y1:g?this.plotArea.y1+c:this.plotArea.y1,x2:e?this.plotArea.x2+b:this.plotArea.x2,y2:g?this.plotArea.y2+c:this.plotArea.y2},clearTimeout(m._panTimerId),m._panTimerId=setTimeout(function(c,b,e,f){return function(){m._zoomPanToSelectedRegion(c,b,e,f,!0)&&(m._dispatchRangeEvent("rangeChanging","pan"),m.render(),m._dispatchRangeEvent("rangeChanged","pan"),m.dragStartPoint.x=
a,m.dragStartPoint.y=d)}}(e.x1,e.y1,e.x2,e.y2),0);else if(this.zoomEnabled){this.resetOverlayedCanvas();b=this.overlaidCanvasCtx.globalAlpha;this.overlaidCanvasCtx.fillStyle="#A89896";var c=e?this.dragStartPoint.x:this.plotArea.x1,l=g?this.dragStartPoint.y:this.plotArea.y1,w=e?a-this.dragStartPoint.x:this.plotArea.x2-this.plotArea.x1,h=g?d-this.dragStartPoint.y:this.plotArea.y2-this.plotArea.y1;this.validateRegion(c,l,e?a:this.plotArea.x2-this.plotArea.x1,g?d:this.plotArea.y2-this.plotArea.y1,"xy"!==
this.zoomType).isValid&&(this.resetOverlayedCanvas(),this.overlaidCanvasCtx.fillStyle="#99B2B5");this.overlaidCanvasCtx.globalAlpha=0.7;this.overlaidCanvasCtx.fillRect(c,l,w,h);this.overlaidCanvasCtx.globalAlpha=b}}else if(this.toolTip.mouseMoveHandler(a,d),"none"!==this.plotInfo.axisPlacement){if(this.axisX&&0<this.axisX.length)for(e=0;e<this.axisX.length;e++)this.axisX[e].crosshair&&this.axisX[e].crosshair.enabled&&this.axisX[e].renderCrosshair(a,d);if(this.axisX2&&0<this.axisX2.length)for(e=0;e<
this.axisX2.length;e++)this.axisX2[e].crosshair&&this.axisX2[e].crosshair.enabled&&this.axisX2[e].renderCrosshair(a,d);if(this.axisY&&0<this.axisY.length)for(e=0;e<this.axisY.length;e++)this.axisY[e].crosshair&&this.axisY[e].crosshair.enabled&&this.axisY[e].renderCrosshair(a,d);if(this.axisY2&&0<this.axisY2.length)for(e=0;e<this.axisY2.length;e++)this.axisY2[e].crosshair&&this.axisY2[e].crosshair.enabled&&this.axisY2[e].renderCrosshair(a,d)}};p.prototype._zoomPanToSelectedRegion=function(a,d,b,c,
e){a=this.validateRegion(a,d,b,c,e);d=a.axesWithValidRange;b=a.axesRanges;if(a.isValid)for(c=0;c<d.length;c++)e=b[c],d[c].setViewPortRange(e.val1,e.val2),this.syncCharts&&this.syncCharts(e.val1,e.val2);return a.isValid};p.prototype.validateRegion=function(a,d,b,c,e){e=e||!1;for(var g=0<=this.zoomType.indexOf("x"),m=0<=this.zoomType.indexOf("y"),l=!1,w=[],h=[],s=[],q=0;q<this._axes.length;q++)("axisX"===this._axes[q].type&&g||"axisY"===this._axes[q].type&&m)&&h.push(this._axes[q]);for(m=0;m<h.length;m++){var q=
h[m],g=!1,n=q.convertPixelToValue({x:a,y:d}),f=q.convertPixelToValue({x:b,y:c});if(n>f)var B=f,f=n,n=B;if(q.scaleBreaks)for(B=0;!g&&B<q.scaleBreaks._appliedBreaks.length;B++)g=q.scaleBreaks._appliedBreaks[B].startValue<=n&&q.scaleBreaks._appliedBreaks[B].endValue>=f;if(isFinite(q.dataInfo.minDiff))if(B=q.getApparentDifference(n,f,null,!0),!(g||!(this.panEnabled&&q.scaleBreaks&&q.scaleBreaks._appliedBreaks.length)&&(q.logarithmic&&B<Math.pow(q.dataInfo.minDiff,3)||!q.logarithmic&&B<3*Math.abs(q.dataInfo.minDiff))||
n<q.minimum||f>q.maximum))w.push(q),s.push({val1:n,val2:f}),l=!0;else if(!e){l=!1;break}}return{isValid:l,axesWithValidRange:w,axesRanges:s}};p.prototype.preparePlotArea=function(){var a=this.plotArea;!r&&(0<a.x1||0<a.y1)&&a.ctx.translate(a.x1,a.y1);if((this.axisX[0]||this.axisX2[0])&&(this.axisY[0]||this.axisY2[0])){var d=this.axisX[0]?this.axisX[0].lineCoordinates:this.axisX2[0].lineCoordinates;if(this.axisY&&0<this.axisY.length&&this.axisY[0]){var b=this.axisY[0];a.x1=d.x1<d.x2?d.x1:b.lineCoordinates.x1;
a.y1=d.y1<b.lineCoordinates.y1?d.y1:b.lineCoordinates.y1;a.x2=d.x2>b.lineCoordinates.x2?d.x2:b.lineCoordinates.x2;a.y2=d.y2>d.y1?d.y2:b.lineCoordinates.y2;a.width=a.x2-a.x1;a.height=a.y2-a.y1}this.axisY2&&0<this.axisY2.length&&this.axisY2[0]&&(b=this.axisY2[0],a.x1=d.x1<d.x2?d.x1:b.lineCoordinates.x1,a.y1=d.y1<b.lineCoordinates.y1?d.y1:b.lineCoordinates.y1,a.x2=d.x2>b.lineCoordinates.x2?d.x2:b.lineCoordinates.x2,a.y2=d.y2>d.y1?d.y2:b.lineCoordinates.y2,a.width=a.x2-a.x1,a.height=a.y2-a.y1)}else d=
this.layoutManager.getFreeSpace(),a.x1=d.x1,a.x2=d.x2,a.y1=d.y1,a.y2=d.y2,a.width=d.width,a.height=d.height;r||(a.canvas.width=a.width,a.canvas.height=a.height,a.canvas.style.left=a.x1+"px",a.canvas.style.top=a.y1+"px",(0<a.x1||0<a.y1)&&a.ctx.translate(-a.x1,-a.y1));a.layoutManager=new Ga(a.x1,a.y1,a.x2,a.y2,2)};p.prototype.renderIndexLabels=function(a){var d=a||this.plotArea.ctx,b=this.plotArea,c=0,e=0,g=0,m=0,l=c=m=e=g=0,w=0;for(a=0;a<this._indexLabels.length;a++){var h=this._indexLabels[a],s=h.chartType.toLowerCase(),
q,n,l=na("indexLabelFontColor",h.dataPoint,h.dataSeries),w=na("indexLabelFontSize",h.dataPoint,h.dataSeries);q=na("indexLabelFontFamily",h.dataPoint,h.dataSeries);n=na("indexLabelFontStyle",h.dataPoint,h.dataSeries);var m=na("indexLabelFontWeight",h.dataPoint,h.dataSeries),f=na("indexLabelBackgroundColor",h.dataPoint,h.dataSeries),e=na("indexLabelMaxWidth",h.dataPoint,h.dataSeries),g=na("indexLabelWrap",h.dataPoint,h.dataSeries),B=na("indexLabelLineDashType",h.dataPoint,h.dataSeries),k=na("indexLabelLineColor",
h.dataPoint,h.dataSeries),p=u(h.dataPoint.indexLabelLineThickness)?u(h.dataSeries.options.indexLabelLineThickness)?0:h.dataSeries.options.indexLabelLineThickness:h.dataPoint.indexLabelLineThickness,c=0<p?Math.min(10,("normal"===this.plotInfo.axisPlacement?this.plotArea.height:this.plotArea.width)<<0):0,t={percent:null,total:null},C=null;if(0<=h.dataSeries.type.indexOf("stacked")||"pie"===h.dataSeries.type||"doughnut"===h.dataSeries.type)t=this.getPercentAndTotal(h.dataSeries,h.dataPoint);if(h.dataSeries.indexLabelFormatter||
h.dataPoint.indexLabelFormatter)C={chart:this,dataSeries:h.dataSeries,dataPoint:h.dataPoint,index:h.indexKeyword,total:t.total,percent:t.percent};var x=h.dataPoint.indexLabelFormatter?h.dataPoint.indexLabelFormatter(C):h.dataPoint.indexLabel?this.replaceKeywordsWithValue(h.dataPoint.indexLabel,h.dataPoint,h.dataSeries,null,h.indexKeyword):h.dataSeries.indexLabelFormatter?h.dataSeries.indexLabelFormatter(C):h.dataSeries.indexLabel?this.replaceKeywordsWithValue(h.dataSeries.indexLabel,h.dataPoint,h.dataSeries,
null,h.indexKeyword):null;if(null!==x&&""!==x){var t=na("indexLabelPlacement",h.dataPoint,h.dataSeries),C=na("indexLabelOrientation",h.dataPoint,h.dataSeries),ma=h.direction,y=h.dataSeries.axisX,A=h.dataSeries.axisY,v=!1,f=new ka(d,{x:0,y:0,maxWidth:e?e:0.5*this.width,maxHeight:g?5*w:1.5*w,angle:"horizontal"===C?0:-90,text:x,padding:0,backgroundColor:f,horizontalAlign:"left",fontSize:w,fontFamily:q,fontWeight:m,fontColor:l,fontStyle:n,textBaseline:"top"});f.measureText();h.dataSeries.indexLabelMaxWidth=
f.maxWidth;if("stackedarea100"===s){if(h.point.x<b.x1||h.point.x>b.x2||h.point.y<b.y1-1||h.point.y>b.y2+1)continue}else if("rangearea"===s||"rangesplinearea"===s){if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>y.viewportMaximum||Math.max.apply(null,h.dataPoint.y)<A.viewportMinimum||Math.min.apply(null,h.dataPoint.y)>A.viewportMaximum)continue}else if(0<=s.indexOf("line")||0<=s.indexOf("area")||0<=s.indexOf("bubble")||0<=s.indexOf("scatter")){if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>y.viewportMaximum||
h.dataPoint.y<A.viewportMinimum||h.dataPoint.y>A.viewportMaximum)continue}else if(0<=s.indexOf("column")||"waterfall"===s||"error"===s&&!h.axisSwapped){if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>y.viewportMaximum||h.bounds.y1>b.y2||h.bounds.y2<b.y1)continue}else if(0<=s.indexOf("bar")||"error"===s){if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>y.viewportMaximum||h.bounds.x1>b.x2||h.bounds.x2<b.x1)continue}else if("candlestick"===s||"ohlc"===s){if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>
y.viewportMaximum||Math.max.apply(null,h.dataPoint.y)<A.viewportMinimum||Math.min.apply(null,h.dataPoint.y)>A.viewportMaximum)continue}else if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>y.viewportMaximum)continue;e=m=2;"horizontal"===C?(l=f.width,w=f.height):(w=f.width,l=f.height);if("normal"===this.plotInfo.axisPlacement){if(0<=s.indexOf("line")||0<=s.indexOf("area"))t="auto",m=4;else if(0<=s.indexOf("stacked"))"auto"===t&&(t="inside");else if("bubble"===s||"scatter"===s)t="inside";q=h.point.x-
l/2;"inside"!==t?(e=b.y1,g=b.y2,0<ma?(n=h.point.y-w-m-c,n<e&&(n="auto"===t?Math.max(h.point.y,e)+m+c:e+m+c,v=n+w>h.point.y)):(n=h.point.y+m+c,n>g-w-m-c&&(n="auto"===t?Math.min(h.point.y,g)-w-m-c:g-w-m-c,v=n<h.point.y))):(e=Math.max(h.bounds.y1,b.y1),g=Math.min(h.bounds.y2,b.y2),c=0<=s.indexOf("range")||"error"===s?0<ma?Math.max(h.bounds.y1,b.y1)+w/2+m:Math.min(h.bounds.y2,b.y2)-w/2-m:(Math.max(h.bounds.y1,b.y1)+Math.min(h.bounds.y2,b.y2))/2,0<ma?(n=Math.max(h.point.y,c)-w/2,n<e&&("bubble"===s||"scatter"===
s)&&(n=Math.max(h.point.y-w-m,b.y1+m))):(n=Math.min(h.point.y,c)-w/2,n>g-w-m&&("bubble"===s||"scatter"===s)&&(n=Math.min(h.point.y+m,b.y2-w-m))),n=Math.min(n,g-w))}else 0<=s.indexOf("line")||0<=s.indexOf("area")||0<=s.indexOf("scatter")?(t="auto",e=4):0<=s.indexOf("stacked")?"auto"===t&&(t="inside"):"bubble"===s&&(t="inside"),n=h.point.y-w/2,"inside"!==t?(m=b.x1,g=b.x2,0>ma?(q=h.point.x-l-e-c,q<m&&(q="auto"===t?Math.max(h.point.x,m)+e+c:m+e+c,v=q+l>h.point.x)):(q=h.point.x+e+c,q>g-l-e-c&&(q="auto"===
t?Math.min(h.point.x,g)-l-e-c:g-l-e-c,v=q<h.point.x))):(m=Math.max(h.bounds.x1,b.x1),Math.min(h.bounds.x2,b.x2),c=0<=s.indexOf("range")||"error"===s?0>ma?Math.max(h.bounds.x1,b.x1)+l/2+e:Math.min(h.bounds.x2,b.x2)-l/2-e:(Math.max(h.bounds.x1,b.x1)+Math.min(h.bounds.x2,b.x2))/2,q=0>ma?Math.max(h.point.x,c)-l/2:Math.min(h.point.x,c)-l/2,q=Math.max(q,m));"vertical"===C&&(n+=w);f.x=q;f.y=n;f.render(!0);p&&("inside"!==t&&(0>s.indexOf("bar")&&("error"!==s||!h.axisSwapped)&&h.point.x>b.x1&&h.point.x<b.x2||
!v)&&(0>s.indexOf("column")&&("error"!==s||h.axisSwapped)&&h.point.y>b.y1&&h.point.y<b.y2||!v))&&(d.lineWidth=p,d.strokeStyle=k?k:"gray",d.setLineDash&&d.setLineDash(R(B,p)),d.beginPath(),d.moveTo(h.point.x,h.point.y),0<=s.indexOf("bar")||"error"===s&&h.axisSwapped?d.lineTo(q+(0<h.direction?0:l),n+("horizontal"===C?w:-w)/2):0<=s.indexOf("column")||"error"===s&&!h.axisSwapped?d.lineTo(q+l/2,n+((0<h.direction?w:-w)+("horizontal"===C?w:-w))/2):d.lineTo(q+l/2,n+((n<h.point.y?w:-w)+("horizontal"===C?w:
-w))/2),d.stroke())}}d={source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0,startTimePercent:0.7};for(a=0;a<this._indexLabels.length;a++)h=this._indexLabels[a],f=na("indexLabelBackgroundColor",h.dataPoint,h.dataSeries),h.dataSeries.indexLabelBackgroundColor=u(f)?r?"transparent":null:f;return d};p.prototype.renderLine=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=
this._eventManager.ghostCtx;b.save();var e=this.plotArea;b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();for(var g=[],m,l=0;l<a.dataSeriesIndexes.length;l++){var w=a.dataSeriesIndexes[l],h=this.data[w];b.lineWidth=h.lineThickness;var s=h.dataPoints,q="solid";if(b.setLineDash){var n=R(h.nullDataLineDashType,h.lineThickness),q=h.lineDashType,f=R(q,h.lineThickness);b.setLineDash(f)}var B=h.id;this._eventManager.objectMap[B]={objectType:"dataSeries",dataSeriesIndex:w};B=N(B);c.strokeStyle=B;
c.lineWidth=0<h.lineThickness?Math.max(h.lineThickness,4):0;var B=h._colorSet,k=B=h.lineColor=h.options.lineColor?h.options.lineColor:B[0];b.strokeStyle=B;var p=!0,t=0,C,x;b.beginPath();if(0<s.length){for(var u=!1,t=0;t<s.length;t++)if(C=s[t].x.getTime?s[t].x.getTime():s[t].x,!(C<a.axisX.dataInfo.viewPortMin||C>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!u)))if("number"!==typeof s[t].y)0<t&&!(h.connectNullData||u||p)&&(b.stroke(),r&&c.stroke()),u=!0;else{C=a.axisX.convertValueToPixel(C);x=
a.axisY.convertValueToPixel(s[t].y);var y=h.dataPointIds[t];this._eventManager.objectMap[y]={id:y,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:t,x1:C,y1:x};p||u?(!p&&h.connectNullData?(b.setLineDash&&(h.options.nullDataLineDashType||q===h.lineDashType&&h.lineDashType!==h.nullDataLineDashType)&&(b.stroke(),b.beginPath(),b.moveTo(m.x,m.y),q=h.nullDataLineDashType,b.setLineDash(n)),b.lineTo(C,x),r&&c.lineTo(C,x)):(b.beginPath(),b.moveTo(C,x),r&&(c.beginPath(),c.moveTo(C,x))),u=p=!1):(b.lineTo(C,
x),r&&c.lineTo(C,x),0==t%500&&(b.stroke(),b.beginPath(),b.moveTo(C,x),r&&(c.stroke(),c.beginPath(),c.moveTo(C,x))));m={x:C,y:x};t<s.length-1&&(k!==(s[t].lineColor||B)||q!==(s[t].lineDashType||h.lineDashType))&&(b.stroke(),b.beginPath(),b.moveTo(C,x),k=s[t].lineColor||B,b.strokeStyle=k,b.setLineDash&&(s[t].lineDashType?(q=s[t].lineDashType,b.setLineDash(R(q,h.lineThickness))):(q=h.lineDashType,b.setLineDash(f))));if(0<s[t].markerSize||0<h.markerSize){var A=h.getMarkerProperties(t,C,x,b);g.push(A);
y=N(y);r&&g.push({x:C,y:x,ctx:c,type:A.type,size:A.size,color:y,borderColor:y,borderThickness:A.borderThickness})}(s[t].indexLabel||h.indexLabel||s[t].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"line",dataPoint:s[t],dataSeries:h,point:{x:C,y:x},direction:0>s[t].y===a.axisY.reversed?1:-1,color:B})}b.stroke();r&&c.stroke()}}ia.drawMarkers(g);r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&
b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),c.beginPath());b.restore();b.beginPath();return{source:d,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderStepLine=function(a){var d=a.targetCanvasCtx||
this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx;b.save();var e=this.plotArea;b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();for(var g=[],m,l=0;l<a.dataSeriesIndexes.length;l++){var w=a.dataSeriesIndexes[l],h=this.data[w];b.lineWidth=h.lineThickness;var s=h.dataPoints,q="solid";if(b.setLineDash){var n=R(h.nullDataLineDashType,h.lineThickness),q=h.lineDashType,f=R(q,h.lineThickness);b.setLineDash(f)}var B=h.id;this._eventManager.objectMap[B]=
{objectType:"dataSeries",dataSeriesIndex:w};B=N(B);c.strokeStyle=B;c.lineWidth=0<h.lineThickness?Math.max(h.lineThickness,4):0;var B=h._colorSet,k=B=h.lineColor=h.options.lineColor?h.options.lineColor:B[0];b.strokeStyle=B;var p=!0,t=0,C,x;b.beginPath();if(0<s.length){for(var u=!1,t=0;t<s.length;t++)if(C=s[t].getTime?s[t].x.getTime():s[t].x,!(C<a.axisX.dataInfo.viewPortMin||C>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!u)))if("number"!==typeof s[t].y)0<t&&!(h.connectNullData||u||p)&&(b.stroke(),
r&&c.stroke()),u=!0;else{var y=x;C=a.axisX.convertValueToPixel(C);x=a.axisY.convertValueToPixel(s[t].y);var A=h.dataPointIds[t];this._eventManager.objectMap[A]={id:A,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:t,x1:C,y1:x};p||u?(!p&&h.connectNullData?(b.setLineDash&&(h.options.nullDataLineDashType||q===h.lineDashType&&h.lineDashType!==h.nullDataLineDashType)&&(b.stroke(),b.beginPath(),b.moveTo(m.x,m.y),q=h.nullDataLineDashType,b.setLineDash(n)),b.lineTo(C,y),b.lineTo(C,x),r&&(c.lineTo(C,
y),c.lineTo(C,x))):(b.beginPath(),b.moveTo(C,x),r&&(c.beginPath(),c.moveTo(C,x))),u=p=!1):(b.lineTo(C,y),r&&c.lineTo(C,y),b.lineTo(C,x),r&&c.lineTo(C,x),0==t%500&&(b.stroke(),b.beginPath(),b.moveTo(C,x),r&&(c.stroke(),c.beginPath(),c.moveTo(C,x))));m={x:C,y:x};t<s.length-1&&(k!==(s[t].lineColor||B)||q!==(s[t].lineDashType||h.lineDashType))&&(b.stroke(),b.beginPath(),b.moveTo(C,x),k=s[t].lineColor||B,b.strokeStyle=k,b.setLineDash&&(s[t].lineDashType?(q=s[t].lineDashType,b.setLineDash(R(q,h.lineThickness))):
(q=h.lineDashType,b.setLineDash(f))));if(0<s[t].markerSize||0<h.markerSize)y=h.getMarkerProperties(t,C,x,b),g.push(y),A=N(A),r&&g.push({x:C,y:x,ctx:c,type:y.type,size:y.size,color:A,borderColor:A,borderThickness:y.borderThickness});(s[t].indexLabel||h.indexLabel||s[t].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepLine",dataPoint:s[t],dataSeries:h,point:{x:C,y:x},direction:0>s[t].y===a.axisY.reversed?1:-1,color:B})}b.stroke();r&&c.stroke()}}ia.drawMarkers(g);r&&
(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),c.beginPath());b.restore();b.beginPath();return{source:d,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,
easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderSpline=function(a){function d(a){a=v(a,2);if(0<a.length){c.beginPath();r&&e.beginPath();c.moveTo(a[0].x,a[0].y);a[0].newStrokeStyle&&(c.strokeStyle=a[0].newStrokeStyle);a[0].newLineDashArray&&c.setLineDash(a[0].newLineDashArray);r&&e.moveTo(a[0].x,a[0].y);for(var b=0;b<a.length-3;b+=3)if(c.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y),r&&e.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y),
0<b&&0===b%3E3||a[b+3].newStrokeStyle||a[b+3].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(a[b+3].x,a[b+3].y),a[b+3].newStrokeStyle&&(c.strokeStyle=a[b+3].newStrokeStyle),a[b+3].newLineDashArray&&c.setLineDash(a[b+3].newLineDashArray),r&&(e.stroke(),e.beginPath(),e.moveTo(a[b+3].x,a[b+3].y));c.stroke();r&&e.stroke()}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx;c.save();var g=this.plotArea;c.beginPath();
c.rect(g.x1,g.y1,g.width,g.height);c.clip();for(var m=[],l=0;l<a.dataSeriesIndexes.length;l++){var w=a.dataSeriesIndexes[l],h=this.data[w];c.lineWidth=h.lineThickness;var s=h.dataPoints,q="solid";if(c.setLineDash){var n=R(h.nullDataLineDashType,h.lineThickness),q=h.lineDashType,f=R(q,h.lineThickness);c.setLineDash(f)}var B=h.id;this._eventManager.objectMap[B]={objectType:"dataSeries",dataSeriesIndex:w};B=N(B);e.strokeStyle=B;e.lineWidth=0<h.lineThickness?Math.max(h.lineThickness,4):0;var B=h._colorSet,
k=B=h.lineColor=h.options.lineColor?h.options.lineColor:B[0];c.strokeStyle=B;var p=0,t,u,x=[];c.beginPath();if(0<s.length)for(u=!1,p=0;p<s.length;p++)if(t=s[p].getTime?s[p].x.getTime():s[p].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!u)))if("number"!==typeof s[p].y)0<p&&!u&&(h.connectNullData?c.setLineDash&&(0<x.length&&(h.options.nullDataLineDashType||!s[p-1].lineDashType))&&(x[x.length-1].newLineDashArray=n,q=h.nullDataLineDashType):(d(x),x=[])),u=!0;
else{t=a.axisX.convertValueToPixel(t);u=a.axisY.convertValueToPixel(s[p].y);var ma=h.dataPointIds[p];this._eventManager.objectMap[ma]={id:ma,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:p,x1:t,y1:u};x[x.length]={x:t,y:u};p<s.length-1&&(k!==(s[p].lineColor||B)||q!==(s[p].lineDashType||h.lineDashType))&&(k=s[p].lineColor||B,x[x.length-1].newStrokeStyle=k,c.setLineDash&&(s[p].lineDashType?(q=s[p].lineDashType,x[x.length-1].newLineDashArray=R(q,h.lineThickness)):(q=h.lineDashType,x[x.length-
1].newLineDashArray=f)));if(0<s[p].markerSize||0<h.markerSize){var y=h.getMarkerProperties(p,t,u,c);m.push(y);ma=N(ma);r&&m.push({x:t,y:u,ctx:e,type:y.type,size:y.size,color:ma,borderColor:ma,borderThickness:y.borderThickness})}(s[p].indexLabel||h.indexLabel||s[p].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"spline",dataPoint:s[p],dataSeries:h,point:{x:t,y:u},direction:0>s[p].y===a.axisY.reversed?1:-1,color:B});u=!1}d(x)}ia.drawMarkers(m);r&&(b.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(g.x1,g.y1,g.width,g.height),e.beginPath());c.restore();c.beginPath();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,
animationBase:0}}};p.prototype.renderColumn=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=0,m,l,w,h=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,s=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.width,
0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<0,q=a.axisX.dataInfo.minDiff;isFinite(q)||(q=0.3*Math.abs(a.axisX.range));q=this.dataPointWidth=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(q)/Math.log(a.axisX.range):Math.abs(q)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>s&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,s));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&s<g)&&(s=Math.max(this.options.dataPointWidth?
this.dataPointWidth:-Infinity,g));q<g&&(q=g);q>s&&(q=s);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(s=0;s<a.dataSeriesIndexes.length;s++){var n=a.dataSeriesIndexes[s],f=this.data[n],B=f.dataPoints;if(0<B.length)for(var p=5<q&&f.bevelEnabled?!0:!1,g=0;g<B.length;g++)if(B[g].getTime?w=B[g].x.getTime():
w=B[g].x,!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax)&&"number"===typeof B[g].y){m=a.axisX.convertValueToPixel(w);l=a.axisY.convertValueToPixel(B[g].y);m=a.axisX.reversed?m+a.plotType.totalDataSeries*q/2-(a.previousDataSeriesCount+s)*q<<0:m-a.plotType.totalDataSeries*q/2+(a.previousDataSeriesCount+s)*q<<0;var k=a.axisX.reversed?m-q<<0:m+q<<0,t;0<=B[g].y?t=h:(t=l,l=h);l>t&&(c=l,l=t,t=c);c=B[g].color?B[g].color:f._colorSet[g%f._colorSet.length];ea(b,m,l,k,t,c,0,null,p&&0<=B[g].y,
0>B[g].y&&p,!1,!1,f.fillOpacity);c=f.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:m,y1:l,x2:k,y2:t};c=N(c);r&&ea(this._eventManager.ghostCtx,m,l,k,t,c,0,null,!1,!1,!1,!1);(B[g].indexLabel||f.indexLabel||B[g].indexLabelFormatter||f.indexLabelFormatter)&&this._indexLabels.push({chartType:"column",dataPoint:B[g],dataSeries:f,point:{x:m+(k-m)/2,y:0>B[g].y===a.axisY.reversed?l:t},direction:0>B[g].y===a.axisY.reversed?1:-1,bounds:{x1:m,
y1:Math.min(l,t),x2:k,y2:Math.max(l,t)},color:c})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();
return{source:d,dest:this.plotArea.ctx,animationCallback:M.yScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:h<a.axisY.bounds.y1?a.axisY.bounds.y1:h>a.axisY.bounds.y2?a.axisY.bounds.y2:h}}};p.prototype.renderStackedColumn=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],m=[],l=[],w=[],h=0,s,q,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.options.dataPointMinWidth?
this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;s=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.width<<0;var f=a.axisX.dataInfo.minDiff;isFinite(f)||(f=0.3*Math.abs(a.axisX.range));f=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(f)/Math.log(a.axisX.range):Math.abs(f)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>s&&(h=Math.min(this.options.dataPointWidth?
this.dataPointWidth:Infinity,s));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&s<h)&&(s=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,h));f<h&&(f=h);f>s&&(f=s);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var B=0;B<a.dataSeriesIndexes.length;B++){var k=a.dataSeriesIndexes[B],
p=this.data[k],t=p.dataPoints;if(0<t.length){var u=5<f&&p.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(h=0;h<t.length;h++)if(c=t[h].x.getTime?t[h].x.getTime():t[h].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof t[h].y){s=a.axisX.convertValueToPixel(c);var x=s-a.plotType.plotUnits.length*f/2+a.index*f<<0,v=x+f<<0,y;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<t[h].y)l[c]=t[h].y+(l[c]?l[c]:0),0<l[c]&&(q=a.axisY.convertValueToPixel(l[c]),
y="undefined"!==typeof g[c]?g[c]:n,g[c]=q);else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=t[h].y)w[c]=t[h].y+(w[c]?w[c]:0),y=a.axisY.convertValueToPixel(w[c]),q="undefined"!==typeof m[c]?m[c]:n,m[c]=y;else if(q=a.axisY.convertValueToPixel(t[h].y),0<=t[h].y){var A="undefined"!==typeof g[c]?g[c]:0;q-=A;y=n-A;g[c]=A+(y-q)}else A=m[c]?m[c]:0,y=q+A,q=n+A,m[c]=A+(y-q);c=t[h].color?t[h].color:p._colorSet[h%p._colorSet.length];ea(b,x,q,v,y,c,0,null,u&&0<=t[h].y,0>t[h].y&&u,!1,
!1,p.fillOpacity);c=p.dataPointIds[h];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:h,x1:x,y1:q,x2:v,y2:y};c=N(c);r&&ea(this._eventManager.ghostCtx,x,q,v,y,c,0,null,!1,!1,!1,!1);(t[h].indexLabel||p.indexLabel||t[h].indexLabelFormatter||p.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:t[h],dataSeries:p,point:{x:s,y:0<=t[h].y?q:y},direction:0>t[h].y===a.axisY.reversed?1:-1,bounds:{x1:x,y1:Math.min(q,y),x2:v,y2:Math.max(q,
y)},color:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,
animationCallback:M.yScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:n<a.axisY.bounds.y1?a.axisY.bounds.y1:n>a.axisY.bounds.y2?a.axisY.bounds.y2:n}}};p.prototype.renderStackedColumn100=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],m=[],l=[],w=[],h=0,s,q,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.options.dataPointMinWidth?this.dataPointMinWidth:
this.options.dataPointWidth?this.dataPointWidth:1;s=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.width<<0;var f=a.axisX.dataInfo.minDiff;isFinite(f)||(f=0.3*Math.abs(a.axisX.range));f=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(f)/Math.log(a.axisX.range):Math.abs(f)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>s&&(h=Math.min(this.options.dataPointWidth?
this.dataPointWidth:Infinity,s));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&s<h)&&(s=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,h));f<h&&(f=h);f>s&&(f=s);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var B=0;B<a.dataSeriesIndexes.length;B++){var p=a.dataSeriesIndexes[B],
k=this.data[p],t=k.dataPoints;if(0<t.length)for(var u=5<f&&k.bevelEnabled?!0:!1,h=0;h<t.length;h++)if(c=t[h].x.getTime?t[h].x.getTime():t[h].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof t[h].y){s=a.axisX.convertValueToPixel(c);q=0!==a.dataPointYSums[c]?100*(t[h].y/a.dataPointYSums[c]):0;var x=s-a.plotType.plotUnits.length*f/2+a.index*f<<0,v=x+f<<0,y;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<t[h].y){l[c]=q+
("undefined"!==typeof l[c]?l[c]:0);if(0>=l[c])continue;q=a.axisY.convertValueToPixel(l[c]);y=g[c]?g[c]:n;g[c]=q}else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=t[h].y)w[c]=q+("undefined"!==typeof w[c]?w[c]:0),y=a.axisY.convertValueToPixel(w[c]),q=m[c]?m[c]:n,m[c]=y;else if(q=a.axisY.convertValueToPixel(q),0<=t[h].y){var A="undefined"!==typeof g[c]?g[c]:0;q-=A;y=n-A;a.dataSeriesIndexes.length-1===B&&1>=Math.abs(e.y1-q)&&(q=e.y1);g[c]=A+(y-q)}else A="undefined"!==typeof m[c]?
m[c]:0,y=q+A,q=n+A,a.dataSeriesIndexes.length-1===B&&1>=Math.abs(e.y2-y)&&(y=e.y2),m[c]=A+(y-q);c=t[h].color?t[h].color:k._colorSet[h%k._colorSet.length];ea(b,x,q,v,y,c,0,null,u&&0<=t[h].y,0>t[h].y&&u,!1,!1,k.fillOpacity);c=k.dataPointIds[h];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:h,x1:x,y1:q,x2:v,y2:y};c=N(c);r&&ea(this._eventManager.ghostCtx,x,q,v,y,c,0,null,!1,!1,!1,!1);(t[h].indexLabel||k.indexLabel||t[h].indexLabelFormatter||k.indexLabelFormatter)&&
this._indexLabels.push({chartType:"stackedColumn100",dataPoint:t[h],dataSeries:k,point:{x:s,y:0<=t[h].y?q:y},direction:0>t[h].y===a.axisY.reversed?1:-1,bounds:{x1:x,y1:Math.min(q,y),x2:v,y2:Math.max(q,y)},color:c})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&
this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.yScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:n<a.axisY.bounds.y1?a.axisY.bounds.y1:n>a.axisY.bounds.y2?a.axisY.bounds.y2:n}}};p.prototype.renderBar=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=
null,e=this.plotArea,g=0,m,l,w,h=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,s=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0,q=a.axisX.dataInfo.minDiff;isFinite(q)||(q=0.3*Math.abs(a.axisX.range));q=this.options.dataPointWidth?
this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(q)/Math.log(a.axisX.range):Math.abs(q)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>s&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,s));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&s<g)&&(s=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,g));q<g&&(q=g);q>s&&(q=s);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);
b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(s=0;s<a.dataSeriesIndexes.length;s++){var n=a.dataSeriesIndexes[s],f=this.data[n],B=f.dataPoints;if(0<B.length){var k=5<q&&f.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<B.length;g++)if(B[g].getTime?w=B[g].x.getTime():w=B[g].x,!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax)&&"number"===typeof B[g].y){l=a.axisX.convertValueToPixel(w);
m=a.axisY.convertValueToPixel(B[g].y);l=a.axisX.reversed?l+a.plotType.totalDataSeries*q/2-(a.previousDataSeriesCount+s)*q<<0:l-a.plotType.totalDataSeries*q/2+(a.previousDataSeriesCount+s)*q<<0;var p=a.axisX.reversed?l-q<<0:l+q<<0,t;0<=B[g].y?t=h:(t=m,m=h);c=B[g].color?B[g].color:f._colorSet[g%f._colorSet.length];ea(b,t,l,m,p,c,0,null,k,!1,!1,!1,f.fillOpacity);c=f.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:t,y1:l,x2:m,y2:p};c=
N(c);r&&ea(this._eventManager.ghostCtx,t,l,m,p,c,0,null,!1,!1,!1,!1);(B[g].indexLabel||f.indexLabel||B[g].indexLabelFormatter||f.indexLabelFormatter)&&this._indexLabels.push({chartType:"bar",dataPoint:B[g],dataSeries:f,point:{x:0<=B[g].y?m:t,y:l+(p-l)/2},direction:0>B[g].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(t,m),y1:l,x2:Math.max(t,m),y2:p},color:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,
0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.xScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:h<a.axisY.bounds.x1?a.axisY.bounds.x1:h>a.axisY.bounds.x2?a.axisY.bounds.x2:
h}}};p.prototype.renderStackedBar=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],m=[],l=[],w=[],h=0,s,q,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;q=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.height<<
0;var f=a.axisX.dataInfo.minDiff;isFinite(f)||(f=0.3*Math.abs(a.axisX.range));f=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(f)/Math.log(a.axisX.range):Math.abs(f)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>q&&(h=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,q));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&q<h)&&(q=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,h));f<
h&&(f=h);f>q&&(f=q);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var B=0;B<a.dataSeriesIndexes.length;B++){var p=a.dataSeriesIndexes[B],k=this.data[p],t=k.dataPoints;if(0<t.length){var u=5<f&&k.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(h=0;h<t.length;h++)if(c=t[h].x.getTime?t[h].x.getTime():
t[h].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof t[h].y){q=a.axisX.convertValueToPixel(c);var x=q-a.plotType.plotUnits.length*f/2+a.index*f<<0,v=x+f<<0,y;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<t[h].y)l[c]=t[h].y+(l[c]?l[c]:0),0<l[c]&&(y=g[c]?g[c]:n,g[c]=s=a.axisY.convertValueToPixel(l[c]));else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=t[h].y)w[c]=t[h].y+(w[c]?w[c]:0),s=m[c]?
m[c]:n,m[c]=y=a.axisY.convertValueToPixel(w[c]);else if(s=a.axisY.convertValueToPixel(t[h].y),0<=t[h].y){var A=g[c]?g[c]:0;y=n+A;s+=A;g[c]=A+(s-y)}else A=m[c]?m[c]:0,y=s-A,s=n-A,m[c]=A+(s-y);c=t[h].color?t[h].color:k._colorSet[h%k._colorSet.length];ea(b,y,x,s,v,c,0,null,u,!1,!1,!1,k.fillOpacity);c=k.dataPointIds[h];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:h,x1:y,y1:x,x2:s,y2:v};c=N(c);r&&ea(this._eventManager.ghostCtx,y,x,s,v,c,0,null,!1,!1,!1,
!1);(t[h].indexLabel||k.indexLabel||t[h].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar",dataPoint:t[h],dataSeries:k,point:{x:0<=t[h].y?s:y,y:q},direction:0>t[h].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(y,s),y1:x,x2:Math.max(y,s),y2:v},color:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&
b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.xScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:n<a.axisY.bounds.x1?a.axisY.bounds.x1:n>a.axisY.bounds.x2?a.axisY.bounds.x2:n}}};p.prototype.renderStackedBar100=function(a){var d=
a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],m=[],l=[],w=[],h=0,s,q,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;q=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.height<<0;var f=a.axisX.dataInfo.minDiff;isFinite(f)||
(f=0.3*Math.abs(a.axisX.range));f=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(f)/Math.log(a.axisX.range):Math.abs(f)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>q&&(h=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,q));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&q<h)&&(q=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,h));f<h&&(f=h);f>q&&(f=q);b.save();r&&this._eventManager.ghostCtx.save();
b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var B=0;B<a.dataSeriesIndexes.length;B++){var k=a.dataSeriesIndexes[B],p=this.data[k],t=p.dataPoints;if(0<t.length){var u=5<f&&p.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(h=0;h<t.length;h++)if(c=t[h].x.getTime?t[h].x.getTime():t[h].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&
"number"===typeof t[h].y){q=a.axisX.convertValueToPixel(c);var x;x=0!==a.dataPointYSums[c]?100*(t[h].y/a.dataPointYSums[c]):0;var v=q-a.plotType.plotUnits.length*f/2+a.index*f<<0,y=v+f<<0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<t[h].y){l[c]=x+(l[c]?l[c]:0);if(0>=l[c])continue;x=g[c]?g[c]:n;g[c]=s=a.axisY.convertValueToPixel(l[c])}else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=t[h].y)w[c]=x+(w[c]?w[c]:0),s=m[c]?m[c]:
n,m[c]=x=a.axisY.convertValueToPixel(w[c]);else if(s=a.axisY.convertValueToPixel(x),0<=t[h].y){var A=g[c]?g[c]:0;x=n+A;s+=A;a.dataSeriesIndexes.length-1===B&&1>=Math.abs(e.x2-s)&&(s=e.x2);g[c]=A+(s-x)}else A=m[c]?m[c]:0,x=s-A,s=n-A,a.dataSeriesIndexes.length-1===B&&1>=Math.abs(e.x1-x)&&(x=e.x1),m[c]=A+(s-x);c=t[h].color?t[h].color:p._colorSet[h%p._colorSet.length];ea(b,x,v,s,y,c,0,null,u,!1,!1,!1,p.fillOpacity);c=p.dataPointIds[h];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:k,
dataPointIndex:h,x1:x,y1:v,x2:s,y2:y};c=N(c);r&&ea(this._eventManager.ghostCtx,x,v,s,y,c,0,null,!1,!1,!1,!1);(t[h].indexLabel||p.indexLabel||t[h].indexLabelFormatter||p.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar100",dataPoint:t[h],dataSeries:p,point:{x:0<=t[h].y?s:x,y:q},direction:0>t[h].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(x,s),y1:v,x2:Math.max(x,s),y2:y},color:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",
a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.xScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:n<a.axisY.bounds.x1?a.axisY.bounds.x1:
n>a.axisY.bounds.x2?a.axisY.bounds.x2:n}}};p.prototype.renderArea=function(a){var d,b;function c(){A&&(0<B.lineThickness&&g.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?y=v:0>a.axisY.viewportMaximum?y=w.y1:0<a.axisY.viewportMinimum&&(y=l.y2),g.lineTo(t,y),g.lineTo(A.x,y),g.closePath(),g.globalAlpha=B.fillOpacity,g.fill(),g.globalAlpha=1,r&&(m.lineTo(t,y),m.lineTo(A.x,y),m.closePath(),m.fill()),g.beginPath(),g.moveTo(t,u),m.beginPath(),m.moveTo(t,u),A={x:t,y:u})}
var e=a.targetCanvasCtx||this.plotArea.ctx,g=r?this._preRenderCtx:e;if(!(0>=a.dataSeriesIndexes.length)){var m=this._eventManager.ghostCtx,l=a.axisX.lineCoordinates,w=a.axisY.lineCoordinates,h=[],s=this.plotArea,q;g.save();r&&m.save();g.beginPath();g.rect(s.x1,s.y1,s.width,s.height);g.clip();r&&(m.beginPath(),m.rect(s.x1,s.y1,s.width,s.height),m.clip());for(var n=0;n<a.dataSeriesIndexes.length;n++){var f=a.dataSeriesIndexes[n],B=this.data[f],p=B.dataPoints,h=B.id;this._eventManager.objectMap[h]={objectType:"dataSeries",
dataSeriesIndex:f};h=N(h);m.fillStyle=h;h=[];d=!0;var k=0,t,u,x,v=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),y,A=null;if(0<p.length){var z=B._colorSet[k%B._colorSet.length],aa=B.lineColor=B.options.lineColor||z,T=aa;g.fillStyle=z;g.strokeStyle=aa;g.lineWidth=B.lineThickness;b="solid";if(g.setLineDash){var Y=R(B.nullDataLineDashType,B.lineThickness);b=B.lineDashType;var ca=R(b,B.lineThickness);g.setLineDash(ca)}for(var da=!0;k<p.length;k++)if(x=p[k].x.getTime?p[k].x.getTime():
p[k].x,!(x<a.axisX.dataInfo.viewPortMin||x>a.axisX.dataInfo.viewPortMax&&(!B.connectNullData||!da)))if("number"!==typeof p[k].y)B.connectNullData||(da||d)||c(),da=!0;else{t=a.axisX.convertValueToPixel(x);u=a.axisY.convertValueToPixel(p[k].y);d||da?(!d&&B.connectNullData?(g.setLineDash&&(B.options.nullDataLineDashType||b===B.lineDashType&&B.lineDashType!==B.nullDataLineDashType)&&(d=t,b=u,t=q.x,u=q.y,c(),g.moveTo(q.x,q.y),t=d,u=b,A=q,b=B.nullDataLineDashType,g.setLineDash(Y)),g.lineTo(t,u),r&&m.lineTo(t,
u)):(g.beginPath(),g.moveTo(t,u),r&&(m.beginPath(),m.moveTo(t,u)),A={x:t,y:u}),da=d=!1):(g.lineTo(t,u),r&&m.lineTo(t,u),0==k%250&&c());q={x:t,y:u};k<p.length-1&&(T!==(p[k].lineColor||aa)||b!==(p[k].lineDashType||B.lineDashType))&&(c(),T=p[k].lineColor||aa,g.strokeStyle=T,g.setLineDash&&(p[k].lineDashType?(b=p[k].lineDashType,g.setLineDash(R(b,B.lineThickness))):(b=B.lineDashType,g.setLineDash(ca))));var Z=B.dataPointIds[k];this._eventManager.objectMap[Z]={id:Z,objectType:"dataPoint",dataSeriesIndex:f,
dataPointIndex:k,x1:t,y1:u};0!==p[k].markerSize&&(0<p[k].markerSize||0<B.markerSize)&&(x=B.getMarkerProperties(k,t,u,g),h.push(x),Z=N(Z),r&&h.push({x:t,y:u,ctx:m,type:x.type,size:x.size,color:Z,borderColor:Z,borderThickness:x.borderThickness}));(p[k].indexLabel||B.indexLabel||p[k].indexLabelFormatter||B.indexLabelFormatter)&&this._indexLabels.push({chartType:"area",dataPoint:p[k],dataSeries:B,point:{x:t,y:u},direction:0>p[k].y===a.axisY.reversed?1:-1,color:z})}c();ia.drawMarkers(h)}}r&&(e.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),g.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&g.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&g.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),g.clearRect(s.x1,s.y1,s.width,s.height),this._eventManager.ghostCtx.restore());g.restore();return{source:e,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,
animationBase:0}}};p.prototype.renderSplineArea=function(a){function d(){var b=v(x,2);if(0<b.length){if(0<q.lineThickness){c.beginPath();c.moveTo(b[0].x,b[0].y);b[0].newStrokeStyle&&(c.strokeStyle=b[0].newStrokeStyle);b[0].newLineDashArray&&c.setLineDash(b[0].newLineDashArray);for(var d=0;d<b.length-3;d+=3)if(c.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),r&&e.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),b[d+3].newStrokeStyle||b[d+3].newLineDashArray)c.stroke(),
c.beginPath(),c.moveTo(b[d+3].x,b[d+3].y),b[d+3].newStrokeStyle&&(c.strokeStyle=b[d+3].newStrokeStyle),b[d+3].newLineDashArray&&c.setLineDash(b[d+3].newLineDashArray);c.stroke()}c.beginPath();c.moveTo(b[0].x,b[0].y);r&&(e.beginPath(),e.moveTo(b[0].x,b[0].y));for(d=0;d<b.length-3;d+=3)c.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),r&&e.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y);a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?
t=p:0>a.axisY.viewportMaximum?t=m.y1:0<a.axisY.viewportMinimum&&(t=g.y2);u={x:b[0].x,y:b[0].y};c.lineTo(b[b.length-1].x,t);c.lineTo(u.x,t);c.closePath();c.globalAlpha=q.fillOpacity;c.fill();c.globalAlpha=1;r&&(e.lineTo(b[b.length-1].x,t),e.lineTo(u.x,t),e.closePath(),e.fill())}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=a.axisX.lineCoordinates,m=a.axisY.lineCoordinates,l=[],w=this.plotArea;c.save();r&&
e.save();c.beginPath();c.rect(w.x1,w.y1,w.width,w.height);c.clip();r&&(e.beginPath(),e.rect(w.x1,w.y1,w.width,w.height),e.clip());for(var h=0;h<a.dataSeriesIndexes.length;h++){var s=a.dataSeriesIndexes[h],q=this.data[s],n=q.dataPoints,l=q.id;this._eventManager.objectMap[l]={objectType:"dataSeries",dataSeriesIndex:s};l=N(l);e.fillStyle=l;var l=[],f=0,B,k,p=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),t,u=null,x=[];if(0<n.length){var ma=q._colorSet[f%q._colorSet.length],
y=q.lineColor=q.options.lineColor||ma,A=y;c.fillStyle=ma;c.strokeStyle=y;c.lineWidth=q.lineThickness;var z="solid";if(c.setLineDash){var aa=R(q.nullDataLineDashType,q.lineThickness),z=q.lineDashType,T=R(z,q.lineThickness);c.setLineDash(T)}for(k=!1;f<n.length;f++)if(B=n[f].x.getTime?n[f].x.getTime():n[f].x,!(B<a.axisX.dataInfo.viewPortMin||B>a.axisX.dataInfo.viewPortMax&&(!q.connectNullData||!k)))if("number"!==typeof n[f].y)0<f&&!k&&(q.connectNullData?c.setLineDash&&(0<x.length&&(q.options.nullDataLineDashType||
!n[f-1].lineDashType))&&(x[x.length-1].newLineDashArray=aa,z=q.nullDataLineDashType):(d(),x=[])),k=!0;else{B=a.axisX.convertValueToPixel(B);k=a.axisY.convertValueToPixel(n[f].y);var Y=q.dataPointIds[f];this._eventManager.objectMap[Y]={id:Y,objectType:"dataPoint",dataSeriesIndex:s,dataPointIndex:f,x1:B,y1:k};x[x.length]={x:B,y:k};f<n.length-1&&(A!==(n[f].lineColor||y)||z!==(n[f].lineDashType||q.lineDashType))&&(A=n[f].lineColor||y,x[x.length-1].newStrokeStyle=A,c.setLineDash&&(n[f].lineDashType?(z=
n[f].lineDashType,x[x.length-1].newLineDashArray=R(z,q.lineThickness)):(z=q.lineDashType,x[x.length-1].newLineDashArray=T)));if(0!==n[f].markerSize&&(0<n[f].markerSize||0<q.markerSize)){var ca=q.getMarkerProperties(f,B,k,c);l.push(ca);Y=N(Y);r&&l.push({x:B,y:k,ctx:e,type:ca.type,size:ca.size,color:Y,borderColor:Y,borderThickness:ca.borderThickness})}(n[f].indexLabel||q.indexLabel||n[f].indexLabelFormatter||q.indexLabelFormatter)&&this._indexLabels.push({chartType:"splineArea",dataPoint:n[f],dataSeries:q,
point:{x:B,y:k},direction:0>n[f].y===a.axisY.reversed?1:-1,color:ma});k=!1}d();ia.drawMarkers(l)}}r&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(w.x1,w.y1,w.width,w.height),
this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderStepArea=function(a){var d,b;function c(){A&&(0<B.lineThickness&&g.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?y=v:0>a.axisY.viewportMaximum?y=w.y1:0<a.axisY.viewportMinimum&&(y=l.y2),g.lineTo(t,y),g.lineTo(A.x,y),g.closePath(),g.globalAlpha=B.fillOpacity,g.fill(),g.globalAlpha=
1,r&&(m.lineTo(t,y),m.lineTo(A.x,y),m.closePath(),m.fill()),g.beginPath(),g.moveTo(t,u),m.beginPath(),m.moveTo(t,u),A={x:t,y:u})}var e=a.targetCanvasCtx||this.plotArea.ctx,g=r?this._preRenderCtx:e;if(!(0>=a.dataSeriesIndexes.length)){var m=this._eventManager.ghostCtx,l=a.axisX.lineCoordinates,w=a.axisY.lineCoordinates,h=[],s=this.plotArea,q;g.save();r&&m.save();g.beginPath();g.rect(s.x1,s.y1,s.width,s.height);g.clip();r&&(m.beginPath(),m.rect(s.x1,s.y1,s.width,s.height),m.clip());for(var n=0;n<a.dataSeriesIndexes.length;n++){var f=
a.dataSeriesIndexes[n],B=this.data[f],k=B.dataPoints,h=B.id;this._eventManager.objectMap[h]={objectType:"dataSeries",dataSeriesIndex:f};h=N(h);m.fillStyle=h;h=[];d=!0;var p=0,t,u,x,v=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),y,A=null;b=!1;if(0<k.length){var z=B._colorSet[p%B._colorSet.length],aa=B.lineColor=B.options.lineColor||z,T=aa;g.fillStyle=z;g.strokeStyle=aa;g.lineWidth=B.lineThickness;var Y="solid";if(g.setLineDash){var ca=R(B.nullDataLineDashType,B.lineThickness),
Y=B.lineDashType,da=R(Y,B.lineThickness);g.setLineDash(da)}for(;p<k.length;p++)if(x=k[p].x.getTime?k[p].x.getTime():k[p].x,!(x<a.axisX.dataInfo.viewPortMin||x>a.axisX.dataInfo.viewPortMax&&(!B.connectNullData||!b))){var Z=u;"number"!==typeof k[p].y?(B.connectNullData||(b||d)||c(),b=!0):(t=a.axisX.convertValueToPixel(x),u=a.axisY.convertValueToPixel(k[p].y),d||b?(!d&&B.connectNullData?(g.setLineDash&&(B.options.nullDataLineDashType||Y===B.lineDashType&&B.lineDashType!==B.nullDataLineDashType)&&(d=
t,b=u,t=q.x,u=q.y,c(),g.moveTo(q.x,q.y),t=d,u=b,A=q,Y=B.nullDataLineDashType,g.setLineDash(ca)),g.lineTo(t,Z),g.lineTo(t,u),r&&(m.lineTo(t,Z),m.lineTo(t,u))):(g.beginPath(),g.moveTo(t,u),r&&(m.beginPath(),m.moveTo(t,u)),A={x:t,y:u}),b=d=!1):(g.lineTo(t,Z),r&&m.lineTo(t,Z),g.lineTo(t,u),r&&m.lineTo(t,u),0==p%250&&c()),q={x:t,y:u},p<k.length-1&&(T!==(k[p].lineColor||aa)||Y!==(k[p].lineDashType||B.lineDashType))&&(c(),T=k[p].lineColor||aa,g.strokeStyle=T,g.setLineDash&&(k[p].lineDashType?(Y=k[p].lineDashType,
g.setLineDash(R(Y,B.lineThickness))):(Y=B.lineDashType,g.setLineDash(da)))),x=B.dataPointIds[p],this._eventManager.objectMap[x]={id:x,objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:p,x1:t,y1:u},0!==k[p].markerSize&&(0<k[p].markerSize||0<B.markerSize)&&(Z=B.getMarkerProperties(p,t,u,g),h.push(Z),x=N(x),r&&h.push({x:t,y:u,ctx:m,type:Z.type,size:Z.size,color:x,borderColor:x,borderThickness:Z.borderThickness})),(k[p].indexLabel||B.indexLabel||k[p].indexLabelFormatter||B.indexLabelFormatter)&&
this._indexLabels.push({chartType:"stepArea",dataPoint:k[p],dataSeries:B,point:{x:t,y:u},direction:0>k[p].y===a.axisY.reversed?1:-1,color:z}))}c();ia.drawMarkers(h)}}r&&(e.drawImage(this._preRenderCanvas,0,0,this.width,this.height),g.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&g.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&g.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),g.clearRect(s.x1,s.y1,s.width,s.height),this._eventManager.ghostCtx.restore());g.restore();return{source:e,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderStackedArea=function(a){function d(){if(!(1>h.length)){for(0<A.lineThickness&&c.stroke();0<h.length;){var a=h.pop();c.lineTo(a.x,a.y);r&&u.lineTo(a.x,a.y)}c.closePath();c.globalAlpha=A.fillOpacity;c.fill();c.globalAlpha=1;c.beginPath();r&&(u.closePath(),
u.fill(),u.beginPath());h=[]}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=null,m=[],l=this.plotArea,w=[],h=[],s=[],q=[],n=0,f,k,p=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),u=this._eventManager.ghostCtx,t,C,x;r&&u.beginPath();c.save();r&&u.save();c.beginPath();c.rect(l.x1,l.y1,l.width,l.height);c.clip();r&&(u.beginPath(),u.rect(l.x1,l.y1,l.width,l.height),u.clip());for(var e=[],v=0;v<a.dataSeriesIndexes.length;v++){var y=
a.dataSeriesIndexes[v],A=this.data[y],z=A.dataPoints;A.dataPointIndexes=[];for(n=0;n<z.length;n++)y=z[n].x.getTime?z[n].x.getTime():z[n].x,A.dataPointIndexes[y]=n,e[y]||(s.push(y),e[y]=!0);s.sort(Sa)}for(v=0;v<a.dataSeriesIndexes.length;v++){y=a.dataSeriesIndexes[v];A=this.data[y];z=A.dataPoints;C=!0;h=[];n=A.id;this._eventManager.objectMap[n]={objectType:"dataSeries",dataSeriesIndex:y};n=N(n);u.fillStyle=n;if(0<s.length){var e=A._colorSet[0],aa=A.lineColor=A.options.lineColor||e,T=aa;c.fillStyle=
e;c.strokeStyle=aa;c.lineWidth=A.lineThickness;x="solid";if(c.setLineDash){var Y=R(A.nullDataLineDashType,A.lineThickness);x=A.lineDashType;var ca=R(x,A.lineThickness);c.setLineDash(ca)}for(var da=!0,n=0;n<s.length;n++){var g=s[n],Z=null,Z=0<=A.dataPointIndexes[g]?z[A.dataPointIndexes[g]]:{x:g,y:null};if(!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax&&(!A.connectNullData||!da)))if("number"!==typeof Z.y)A.connectNullData||(da||C)||d(),da=!0;else{f=a.axisX.convertValueToPixel(g);var oa=
w[g]?w[g]:0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length){q[g]=Z.y+(q[g]?q[g]:0);if(0>=q[g]&&a.axisY.logarithmic)continue;k=a.axisY.convertValueToPixel(q[g])}else k=a.axisY.convertValueToPixel(Z.y),k-=oa;h.push({x:f,y:p-oa});w[g]=p-k;C||da?(!C&&A.connectNullData?(c.setLineDash&&(A.options.nullDataLineDashType||x===A.lineDashType&&A.lineDashType!==A.nullDataLineDashType)&&(C=h.pop(),x=h[h.length-1],d(),c.moveTo(t.x,t.y),h.push(x),h.push(C),x=A.nullDataLineDashType,
c.setLineDash(Y)),c.lineTo(f,k),r&&u.lineTo(f,k)):(c.beginPath(),c.moveTo(f,k),r&&(u.beginPath(),u.moveTo(f,k))),da=C=!1):(c.lineTo(f,k),r&&u.lineTo(f,k),0==n%250&&(d(),c.moveTo(f,k),r&&u.moveTo(f,k),h.push({x:f,y:p-oa})));t={x:f,y:k};n<z.length-1&&(T!==(z[n].lineColor||aa)||x!==(z[n].lineDashType||A.lineDashType))&&(d(),c.beginPath(),c.moveTo(f,k),h.push({x:f,y:p-oa}),T=z[n].lineColor||aa,c.strokeStyle=T,c.setLineDash&&(z[n].lineDashType?(x=z[n].lineDashType,c.setLineDash(R(x,A.lineThickness))):
(x=A.lineDashType,c.setLineDash(ca))));if(0<=A.dataPointIndexes[g]){var la=A.dataPointIds[A.dataPointIndexes[g]];this._eventManager.objectMap[la]={id:la,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:A.dataPointIndexes[g],x1:f,y1:k}}0<=A.dataPointIndexes[g]&&0!==Z.markerSize&&(0<Z.markerSize||0<A.markerSize)&&(oa=A.getMarkerProperties(A.dataPointIndexes[g],f,k,c),m.push(oa),g=N(la),r&&m.push({x:f,y:k,ctx:u,type:oa.type,size:oa.size,color:g,borderColor:g,borderThickness:oa.borderThickness}));
(Z.indexLabel||A.indexLabel||Z.indexLabelFormatter||A.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:Z,dataSeries:A,point:{x:f,y:k},direction:0>z[n].y===a.axisY.reversed?1:-1,color:e})}}d();c.moveTo(f,k);r&&u.moveTo(f,k)}delete A.dataPointIndexes}ia.drawMarkers(m);r&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&
c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(l.x1,l.y1,l.width,l.height),u.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderStackedArea100=function(a){function d(){for(0<A.lineThickness&&c.stroke();0<h.length;){var a=h.pop();c.lineTo(a.x,a.y);r&&x.lineTo(a.x,
a.y)}c.closePath();c.globalAlpha=A.fillOpacity;c.fill();c.globalAlpha=1;c.beginPath();r&&(x.closePath(),x.fill(),x.beginPath());h=[]}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=null,m=this.plotArea,l=[],w=[],h=[],s=[],q=[],n=0,f,k,p,u,t,C=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),x=this._eventManager.ghostCtx;c.save();r&&x.save();c.beginPath();c.rect(m.x1,m.y1,m.width,m.height);c.clip();r&&(x.beginPath(),
x.rect(m.x1,m.y1,m.width,m.height),x.clip());for(var e=[],v=0;v<a.dataSeriesIndexes.length;v++){var y=a.dataSeriesIndexes[v],A=this.data[y],z=A.dataPoints;A.dataPointIndexes=[];for(n=0;n<z.length;n++)y=z[n].x.getTime?z[n].x.getTime():z[n].x,A.dataPointIndexes[y]=n,e[y]||(s.push(y),e[y]=!0);s.sort(Sa)}for(v=0;v<a.dataSeriesIndexes.length;v++){y=a.dataSeriesIndexes[v];A=this.data[y];z=A.dataPoints;u=!0;e=A.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:y};e=N(e);x.fillStyle=
e;h=[];if(0<s.length){var e=A._colorSet[n%A._colorSet.length],aa=A.lineColor=A.options.lineColor||e,T=aa;c.fillStyle=e;c.strokeStyle=aa;c.lineWidth=A.lineThickness;t="solid";if(c.setLineDash){var Y=R(A.nullDataLineDashType,A.lineThickness);t=A.lineDashType;var ca=R(t,A.lineThickness);c.setLineDash(ca)}for(var da=!0,n=0;n<s.length;n++){var g=s[n],Z=null,Z=0<=A.dataPointIndexes[g]?z[A.dataPointIndexes[g]]:{x:g,y:null};if(!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax&&(!A.connectNullData||
!da)))if("number"!==typeof Z.y)A.connectNullData||(da||u)||d(),da=!0;else{var oa;oa=0!==a.dataPointYSums[g]?100*(Z.y/a.dataPointYSums[g]):0;f=a.axisX.convertValueToPixel(g);var la=w[g]?w[g]:0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length){q[g]=oa+(q[g]?q[g]:0);if(0>=q[g]&&a.axisY.logarithmic)continue;k=a.axisY.convertValueToPixel(q[g])}else k=a.axisY.convertValueToPixel(oa),k-=la;h.push({x:f,y:C-la});w[g]=C-k;u||da?(!u&&A.connectNullData?(c.setLineDash&&
(A.options.nullDataLineDashType||t===A.lineDashType&&A.lineDashType!==A.nullDataLineDashType)&&(u=h.pop(),t=h[h.length-1],d(),c.moveTo(p.x,p.y),h.push(t),h.push(u),t=A.nullDataLineDashType,c.setLineDash(Y)),c.lineTo(f,k),r&&x.lineTo(f,k)):(c.beginPath(),c.moveTo(f,k),r&&(x.beginPath(),x.moveTo(f,k))),da=u=!1):(c.lineTo(f,k),r&&x.lineTo(f,k),0==n%250&&(d(),c.moveTo(f,k),r&&x.moveTo(f,k),h.push({x:f,y:C-la})));p={x:f,y:k};n<z.length-1&&(T!==(z[n].lineColor||aa)||t!==(z[n].lineDashType||A.lineDashType))&&
(d(),c.beginPath(),c.moveTo(f,k),h.push({x:f,y:C-la}),T=z[n].lineColor||aa,c.strokeStyle=T,c.setLineDash&&(z[n].lineDashType?(t=z[n].lineDashType,c.setLineDash(R(t,A.lineThickness))):(t=A.lineDashType,c.setLineDash(ca))));if(0<=A.dataPointIndexes[g]){var G=A.dataPointIds[A.dataPointIndexes[g]];this._eventManager.objectMap[G]={id:G,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:A.dataPointIndexes[g],x1:f,y1:k}}0<=A.dataPointIndexes[g]&&0!==Z.markerSize&&(0<Z.markerSize||0<A.markerSize)&&(la=
A.getMarkerProperties(n,f,k,c),l.push(la),g=N(G),r&&l.push({x:f,y:k,ctx:x,type:la.type,size:la.size,color:g,borderColor:g,borderThickness:la.borderThickness}));(Z.indexLabel||A.indexLabel||Z.indexLabelFormatter||A.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:Z,dataSeries:A,point:{x:f,y:k},direction:0>z[n].y===a.axisY.reversed?1:-1,color:e})}}d();c.moveTo(f,k);r&&x.moveTo(f,k)}delete A.dataPointIndexes}ia.drawMarkers(l);r&&(b.drawImage(this._preRenderCanvas,0,
0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(m.x1,m.y1,m.width,m.height),x.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};
p.prototype.renderBubble=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=this.plotArea,e=0,g,m;b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(c.x1,c.y1,c.width,c.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(var l=-Infinity,w=Infinity,h=0;h<a.dataSeriesIndexes.length;h++)for(var s=a.dataSeriesIndexes[h],
q=this.data[s],n=q.dataPoints,f=0,e=0;e<n.length;e++)g=n[e].getTime?g=n[e].x.getTime():g=n[e].x,g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax||"undefined"===typeof n[e].z||(f=n[e].z,f>l&&(l=f),f<w&&(w=f));for(var k=25*Math.PI,p=Math.max(Math.pow(0.25*Math.min(c.height,c.width)/2,2)*Math.PI,k),h=0;h<a.dataSeriesIndexes.length;h++)if(s=a.dataSeriesIndexes[h],q=this.data[s],n=q.dataPoints,0<n.length)for(b.strokeStyle="#4572A7 ",e=0;e<n.length;e++)if(g=n[e].getTime?g=n[e].x.getTime():
g=n[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[e].y){g=a.axisX.convertValueToPixel(g);m=a.axisY.convertValueToPixel(n[e].y);var f=n[e].z,u=2*Math.max(Math.sqrt((l===w?p/2:k+(p-k)/(l-w)*(f-w))/Math.PI)<<0,1),f=q.getMarkerProperties(e,b);f.size=u;b.globalAlpha=q.fillOpacity;ia.drawMarker(g,m,b,f.type,f.size,f.color,f.borderColor,f.borderThickness);b.globalAlpha=1;var t=q.dataPointIds[e];this._eventManager.objectMap[t]={id:t,objectType:"dataPoint",dataSeriesIndex:s,
dataPointIndex:e,x1:g,y1:m,size:u};u=N(t);r&&ia.drawMarker(g,m,this._eventManager.ghostCtx,f.type,f.size,u,u,f.borderThickness);(n[e].indexLabel||q.indexLabel||n[e].indexLabelFormatter||q.indexLabelFormatter)&&this._indexLabels.push({chartType:"bubble",dataPoint:n[e],dataSeries:q,point:{x:g,y:m},direction:1,bounds:{x1:g-f.size/2,y1:m-f.size/2,x2:g+f.size/2,y2:m+f.size/2},color:null})}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&
b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderScatter=function(a){var d=
a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=this.plotArea,e=0,g,m;b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(c.x1,c.y1,c.width,c.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var w=a.dataSeriesIndexes[l],h=this.data[w],s=h.dataPoints;if(0<s.length){b.strokeStyle=
"#4572A7 ";Math.pow(0.3*Math.min(c.height,c.width)/2,2);for(var q=0,n=0,e=0;e<s.length;e++)if(g=s[e].getTime?g=s[e].x.getTime():g=s[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&"number"===typeof s[e].y){g=a.axisX.convertValueToPixel(g);m=a.axisY.convertValueToPixel(s[e].y);var f=h.getMarkerProperties(e,g,m,b);b.globalAlpha=h.fillOpacity;ia.drawMarker(f.x,f.y,f.ctx,f.type,f.size,f.color,f.borderColor,f.borderThickness);b.globalAlpha=1;Math.sqrt((q-g)*(q-g)+(n-m)*(n-m))<Math.min(f.size,
5)&&s.length>Math.min(this.plotArea.width,this.plotArea.height)||(q=h.dataPointIds[e],this._eventManager.objectMap[q]={id:q,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:e,x1:g,y1:m},q=N(q),r&&ia.drawMarker(f.x,f.y,this._eventManager.ghostCtx,f.type,f.size,q,q,f.borderThickness),(s[e].indexLabel||h.indexLabel||s[e].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"scatter",dataPoint:s[e],dataSeries:h,point:{x:g,y:m},direction:1,bounds:{x1:g-f.size/2,y1:m-f.size/
2,x2:g+f.size/2,y2:m+f.size/2},color:null}),q=g,n=m)}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.restore());
b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderCandlestick=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d,c=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=null,m=this.plotArea,l=0,w,h,s,q,n,f,e=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,g=this.options.dataPointMaxWidth?
this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.015*this.width,k=a.axisX.dataInfo.minDiff;isFinite(k)||(k=0.3*Math.abs(a.axisX.range));k=this.options.dataPointWidth?this.dataPointWidth:0.7*m.width*(a.axisX.logarithmic?Math.log(k)/Math.log(a.axisX.range):Math.abs(k)/Math.abs(a.axisX.range))<<0;this.dataPointMaxWidth&&e>g&&(e=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,g));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&g<e)&&(g=Math.max(this.options.dataPointWidth?
this.dataPointWidth:-Infinity,e));k<e&&(k=e);k>g&&(k=g);b.save();r&&c.save();b.beginPath();b.rect(m.x1,m.y1,m.width,m.height);b.clip();r&&(c.beginPath(),c.rect(m.x1,m.y1,m.width,m.height),c.clip());for(var p=0;p<a.dataSeriesIndexes.length;p++){var v=a.dataSeriesIndexes[p],t=this.data[v],C=t.dataPoints;if(0<C.length)for(var x=5<k&&t.bevelEnabled?!0:!1,l=0;l<C.length;l++)if(C[l].getTime?f=C[l].x.getTime():f=C[l].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&!u(C[l].y)&&C[l].y.length&&
"number"===typeof C[l].y[0]&&"number"===typeof C[l].y[1]&&"number"===typeof C[l].y[2]&&"number"===typeof C[l].y[3]){w=a.axisX.convertValueToPixel(f);h=a.axisY.convertValueToPixel(C[l].y[0]);s=a.axisY.convertValueToPixel(C[l].y[1]);q=a.axisY.convertValueToPixel(C[l].y[2]);n=a.axisY.convertValueToPixel(C[l].y[3]);var z=w-k/2<<0,y=z+k<<0,g=t.options.fallingColor?t.fallingColor:t._colorSet[0],e=C[l].color?C[l].color:t._colorSet[0],A=Math.round(Math.max(1,0.15*k)),D=0===A%2?0:0.5,aa=t.dataPointIds[l];
this._eventManager.objectMap[aa]={id:aa,objectType:"dataPoint",dataSeriesIndex:v,dataPointIndex:l,x1:z,y1:h,x2:y,y2:s,x3:w,y3:q,x4:w,y4:n,borderThickness:A,color:e};b.strokeStyle=e;b.beginPath();b.lineWidth=A;c.lineWidth=Math.max(A,4);"candlestick"===t.type?(b.moveTo(w-D,s),b.lineTo(w-D,Math.min(h,n)),b.stroke(),b.moveTo(w-D,Math.max(h,n)),b.lineTo(w-D,q),b.stroke(),ea(b,z,Math.min(h,n),y,Math.max(h,n),C[l].y[0]<=C[l].y[3]?t.risingColor:g,A,e,x,x,!1,!1,t.fillOpacity),r&&(e=N(aa),c.strokeStyle=e,c.moveTo(w-
D,s),c.lineTo(w-D,Math.min(h,n)),c.stroke(),c.moveTo(w-D,Math.max(h,n)),c.lineTo(w-D,q),c.stroke(),ea(c,z,Math.min(h,n),y,Math.max(h,n),e,0,null,!1,!1,!1,!1))):"ohlc"===t.type&&(b.moveTo(w-D,s),b.lineTo(w-D,q),b.stroke(),b.beginPath(),b.moveTo(w,h),b.lineTo(z,h),b.stroke(),b.beginPath(),b.moveTo(w,n),b.lineTo(y,n),b.stroke(),r&&(e=N(aa),c.strokeStyle=e,c.moveTo(w-D,s),c.lineTo(w-D,q),c.stroke(),c.beginPath(),c.moveTo(w,h),c.lineTo(z,h),c.stroke(),c.beginPath(),c.moveTo(w,n),c.lineTo(y,n),c.stroke()));
(C[l].indexLabel||t.indexLabel||C[l].indexLabelFormatter||t.indexLabelFormatter)&&this._indexLabels.push({chartType:t.type,dataPoint:C[l],dataSeries:t,point:{x:z+(y-z)/2,y:a.axisY.reversed?q:s},direction:1,bounds:{x1:z,y1:Math.min(s,q),x2:y,y2:Math.max(s,q)},color:e})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,
0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(m.x1,m.y1,m.width,m.height),c.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderBoxAndWhisker=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d,c=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var e=
null,g=this.plotArea,m=0,l,w,h,s,q,n,f,e=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,m=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.015*this.width,k=a.axisX.dataInfo.minDiff;isFinite(k)||(k=0.3*Math.abs(a.axisX.range));k=this.options.dataPointWidth?this.dataPointWidth:0.7*g.width*(a.axisX.logarithmic?Math.log(k)/Math.log(a.axisX.range):Math.abs(k)/Math.abs(a.axisX.range))<<0;this.dataPointMaxWidth&&
e>m&&(e=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,m));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&m<e)&&(m=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,e));k<e&&(k=e);k>m&&(k=m);b.save();r&&c.save();b.beginPath();b.rect(g.x1,g.y1,g.width,g.height);b.clip();r&&(c.beginPath(),c.rect(g.x1,g.y1,g.width,g.height),c.clip());for(var p=!1,p=!!a.axisY.reversed,v=0;v<a.dataSeriesIndexes.length;v++){var t=a.dataSeriesIndexes[v],C=this.data[t],x=C.dataPoints;
if(0<x.length)for(var z=5<k&&C.bevelEnabled?!0:!1,m=0;m<x.length;m++)if(x[m].getTime?f=x[m].x.getTime():f=x[m].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&!u(x[m].y)&&x[m].y.length&&"number"===typeof x[m].y[0]&&"number"===typeof x[m].y[1]&&"number"===typeof x[m].y[2]&&"number"===typeof x[m].y[3]&&"number"===typeof x[m].y[4]&&5===x[m].y.length){l=a.axisX.convertValueToPixel(f);w=a.axisY.convertValueToPixel(x[m].y[0]);h=a.axisY.convertValueToPixel(x[m].y[1]);s=a.axisY.convertValueToPixel(x[m].y[2]);
q=a.axisY.convertValueToPixel(x[m].y[3]);n=a.axisY.convertValueToPixel(x[m].y[4]);var y=l-k/2<<0,A=l+k/2<<0,e=x[m].color?x[m].color:C._colorSet[0],D=Math.round(Math.max(1,0.15*k)),aa=0===D%2?0:0.5,T=x[m].whiskerColor?x[m].whiskerColor:x[m].color?C.whiskerColor?C.whiskerColor:x[m].color:C.whiskerColor?C.whiskerColor:e,Y="number"===typeof x[m].whiskerThickness?x[m].whiskerThickness:"number"===typeof C.options.whiskerThickness?C.whiskerThickness:D,ca=x[m].whiskerDashType?x[m].whiskerDashType:C.whiskerDashType,
da=u(x[m].whiskerLength)?u(C.options.whiskerLength)?k:C.whiskerLength:x[m].whiskerLength,da="number"===typeof da?0>=da?0:da>=k?k:da:"string"===typeof da?parseInt(da)*k/100>k?k:parseInt(da)*k/100:k,Z=1===Math.round(Y)%2?0.5:0,oa=x[m].stemColor?x[m].stemColor:x[m].color?C.stemColor?C.stemColor:x[m].color:C.stemColor?C.stemColor:e,la="number"===typeof x[m].stemThickness?x[m].stemThickness:"number"===typeof C.options.stemThickness?C.stemThickness:D,G=1===Math.round(la)%2?0.5:0,F=x[m].stemDashType?x[m].stemDashType:
C.stemDashType,E=x[m].lineColor?x[m].lineColor:x[m].color?C.lineColor?C.lineColor:x[m].color:C.lineColor?C.lineColor:e,H="number"===typeof x[m].lineThickness?x[m].lineThickness:"number"===typeof C.options.lineThickness?C.lineThickness:D,I=x[m].lineDashType?x[m].lineDashType:C.lineDashType,K=1===Math.round(H)%2?0.5:0,L=C.upperBoxColor,O=C.lowerBoxColor,Q=u(C.options.fillOpacity)?1:C.fillOpacity,P=C.dataPointIds[m];this._eventManager.objectMap[P]={id:P,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:m,
x1:y,y1:w,x2:A,y2:h,x3:l,y3:s,x4:l,y4:q,y5:n,borderThickness:D,color:e,stemThickness:la,stemColor:oa,whiskerThickness:Y,whiskerLength:da,whiskerColor:T,lineThickness:H,lineColor:E};b.save();0<la&&(b.beginPath(),b.strokeStyle=oa,b.lineWidth=la,b.setLineDash&&b.setLineDash(R(F,la)),b.moveTo(l-G,h),b.lineTo(l-G,w),b.stroke(),b.moveTo(l-G,q),b.lineTo(l-G,s),b.stroke());b.restore();c.lineWidth=Math.max(D,4);b.beginPath();ea(b,y,Math.min(n,h),A,Math.max(h,n),O,0,e,p?z:!1,p?!1:z,!1,!1,Q);b.beginPath();ea(b,
y,Math.min(s,n),A,Math.max(n,s),L,0,e,p?!1:z,p?z:!1,!1,!1,Q);b.beginPath();b.lineWidth=D;b.strokeStyle=e;b.rect(y-aa,Math.min(h,s)-aa,A-y+2*aa,Math.max(h,s)-Math.min(h,s)+2*aa);b.stroke();b.save();0<H&&(b.beginPath(),b.globalAlpha=1,b.setLineDash&&b.setLineDash(R(I,H)),b.strokeStyle=E,b.lineWidth=H,b.moveTo(y,n-K),b.lineTo(A,n-K),b.stroke());b.restore();b.save();0<Y&&(b.beginPath(),b.setLineDash&&b.setLineDash(R(ca,Y)),b.strokeStyle=T,b.lineWidth=Y,b.moveTo(l-da/2<<0,q-Z),b.lineTo(l+da/2<<0,q-Z),
b.stroke(),b.moveTo(l-da/2<<0,w+Z),b.lineTo(l+da/2<<0,w+Z),b.stroke());b.restore();r&&(e=N(P),c.strokeStyle=e,c.lineWidth=la,0<la&&(c.moveTo(l-aa-G,h),c.lineTo(l-aa-G,Math.max(w,q)),c.stroke(),c.moveTo(l-aa-G,Math.min(w,q)),c.lineTo(l-aa-G,s),c.stroke()),ea(c,y,Math.max(h,s),A,Math.min(h,s),e,0,null,!1,!1,!1,!1),0<Y&&(c.beginPath(),c.lineWidth=Y,c.moveTo(l+da/2,q-Z),c.lineTo(l-da/2,q-Z),c.stroke(),c.moveTo(l+da/2,w+Z),c.lineTo(l-da/2,w+Z),c.stroke()));(x[m].indexLabel||C.indexLabel||x[m].indexLabelFormatter||
C.indexLabelFormatter)&&this._indexLabels.push({chartType:C.type,dataPoint:x[m],dataSeries:C,point:{x:y+(A-y)/2,y:a.axisY.reversed?w:q},direction:1,bounds:{x1:y,y1:Math.min(w,q),x2:A,y2:Math.max(w,q)},color:e})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),b.clearRect(g.x1,g.y1,g.width,g.height),c.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderRangeColumn=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=0,m,l,w,g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:
1;m=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.03*this.width;var h=a.axisX.dataInfo.minDiff;isFinite(h)||(h=0.3*Math.abs(a.axisX.range));h=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(h)/Math.log(a.axisX.range):Math.abs(h)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>m&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,m));!this.dataPointMaxWidth&&
(this.dataPointMinWidth&&m<g)&&(m=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,g));h<g&&(h=g);h>m&&(h=m);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var s=0;s<a.dataSeriesIndexes.length;s++){var q=a.dataSeriesIndexes[s],n=this.data[q],f=n.dataPoints;if(0<f.length)for(var k=
5<h&&n.bevelEnabled?!0:!1,g=0;g<f.length;g++)if(f[g].getTime?w=f[g].x.getTime():w=f[g].x,!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax)&&!u(f[g].y)&&f[g].y.length&&"number"===typeof f[g].y[0]&&"number"===typeof f[g].y[1]){c=a.axisX.convertValueToPixel(w);m=a.axisY.convertValueToPixel(f[g].y[0]);l=a.axisY.convertValueToPixel(f[g].y[1]);var p=a.axisX.reversed?c+a.plotType.totalDataSeries*h/2-(a.previousDataSeriesCount+s)*h<<0:c-a.plotType.totalDataSeries*h/2+(a.previousDataSeriesCount+
s)*h<<0,v=a.axisX.reversed?p-h<<0:p+h<<0,c=f[g].color?f[g].color:n._colorSet[g%n._colorSet.length];if(m>l){var t=m;m=l;l=t}t=n.dataPointIds[g];this._eventManager.objectMap[t]={id:t,objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:g,x1:p,y1:m,x2:v,y2:l};ea(b,p,m,v,l,c,0,c,k,k,!1,!1,n.fillOpacity);c=N(t);r&&ea(this._eventManager.ghostCtx,p,m,v,l,c,0,null,!1,!1,!1,!1);if(f[g].indexLabel||n.indexLabel||f[g].indexLabelFormatter||n.indexLabelFormatter)this._indexLabels.push({chartType:"rangeColumn",
dataPoint:f[g],dataSeries:n,indexKeyword:0,point:{x:p+(v-p)/2,y:f[g].y[1]>=f[g].y[0]?l:m},direction:f[g].y[1]>=f[g].y[0]?-1:1,bounds:{x1:p,y1:Math.min(m,l),x2:v,y2:Math.max(m,l)},color:c}),this._indexLabels.push({chartType:"rangeColumn",dataPoint:f[g],dataSeries:n,indexKeyword:1,point:{x:p+(v-p)/2,y:f[g].y[1]>=f[g].y[0]?m:l},direction:f[g].y[1]>=f[g].y[0]?1:-1,bounds:{x1:p,y1:Math.min(m,l),x2:v,y2:Math.max(m,l)},color:c})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation=
"source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderError=
function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d,c=a.axisY._position?"left"===a.axisY._position||"right"===a.axisY._position?!1:!0:!1;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=!1,m=this.plotArea,l=0,w,h,s,q,n,f,k,p=a.axisX.dataInfo.minDiff;isFinite(p)||(p=0.3*Math.abs(a.axisX.range));b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(m.x1,m.y1,m.width,m.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(m.x1,
m.y1,m.width,m.height),this._eventManager.ghostCtx.clip());for(var v=0,t=0;t<this.data.length;t++)!this.data[t].type.match(/(bar|column)/ig)||!this.data[t].visible||this.data[t].type.match(/(stacked)/ig)&&v||v++;for(var C=0;C<a.dataSeriesIndexes.length;C++){var x=a.dataSeriesIndexes[C],z=this.data[x],y=z.dataPoints,A=u(z._linkedSeries)?!1:z._linkedSeries.type.match(/(bar|column)/ig)&&z._linkedSeries.visible?!0:!1,D=0;if(A)for(e=z._linkedSeries.id,t=0;t<e;t++)!this.data[t].type.match(/(bar|column)/ig)||
!this.data[t].visible||this.data[t].type.match(/(stacked)/ig)&&D||(this.data[t].type.match(/(range)/ig)&&(g=!0),D++);e=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;l=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:c?Math.min(0.15*this.height,0.9*(this.plotArea.height/(A?v:1)))<<0:0.3*this.width;g&&(l=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:
c?Math.min(0.15*this.height,0.9*(this.plotArea.height/(A?v:1)))<<0:0.03*this.width);t=this.options.dataPointWidth?this.dataPointWidth:0.9*((c?m.height:m.width)*(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):Math.abs(p)/Math.abs(a.axisX.range))/(A?v:1))<<0;this.dataPointMaxWidth&&e>l&&(e=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,l));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&l<e)&&(l=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,e));t<e&&
(t=e);t>l&&(t=l);if(0<y.length)for(var aa=z._colorSet,l=0;l<y.length;l++){var e=z.lineColor=z.options.color?z.options.color:aa[0],T={color:y[l].whiskerColor?y[l].whiskerColor:y[l].color?z.whiskerColor?z.whiskerColor:y[l].color:z.whiskerColor?z.whiskerColor:e,thickness:u(y[l].whiskerThickness)?z.whiskerThickness:y[l].whiskerThickness,dashType:y[l].whiskerDashType?y[l].whiskerDashType:z.whiskerDashType,length:u(y[l].whiskerLength)?u(z.options.whiskerLength)?t:z.options.whiskerLength:y[l].whiskerLength,
trimLength:u(y[l].whiskerLength)?u(z.options.whiskerLength)?50:0:0};T.length="number"===typeof T.length?0>=T.length?0:T.length>=t?t:T.length:"string"===typeof T.length?parseInt(T.length)*t/100>t?t:parseInt(T.length)*t/100>t:t;T.thickness="number"===typeof T.thickness?0>T.thickness?0:Math.round(T.thickness):2;var Y={color:y[l].stemColor?y[l].stemColor:y[l].color?z.stemColor?z.stemColor:y[l].color:z.stemColor?z.stemColor:e,thickness:y[l].stemThickness?y[l].stemThickness:z.stemThickness,dashType:y[l].stemDashType?
y[l].stemDashType:z.stemDashType};Y.thickness="number"===typeof Y.thickness?0>Y.thickness?0:Math.round(Y.thickness):2;y[l].getTime?k=y[l].x.getTime():k=y[l].x;if(!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&!u(y[l].y)&&y[l].y.length&&"number"===typeof y[l].y[0]&&"number"===typeof y[l].y[1]){var ca=a.axisX.convertValueToPixel(k);c?h=ca:w=ca;ca=a.axisY.convertValueToPixel(y[l].y[0]);c?s=ca:n=ca;ca=a.axisY.convertValueToPixel(y[l].y[1]);c?q=ca:f=ca;c?(n=a.axisX.reversed?h+(A?v:
1)*t/2-(A?D-1:0)*t<<0:h-(A?v:1)*t/2+(A?D-1:0)*t<<0,f=a.axisX.reversed?n-t<<0:n+t<<0):(s=a.axisX.reversed?w+(A?v:1)*t/2-(A?D-1:0)*t<<0:w-(A?v:1)*t/2+(A?D-1:0)*t<<0,q=a.axisX.reversed?s-t<<0:s+t<<0);!c&&n>f&&(ca=n,n=f,f=ca);c&&s>q&&(ca=s,s=q,q=ca);ca=z.dataPointIds[l];this._eventManager.objectMap[ca]={id:ca,objectType:"dataPoint",dataSeriesIndex:x,dataPointIndex:l,x1:Math.min(s,q),y1:Math.min(n,f),x2:Math.max(q,s),y2:Math.max(f,n),isXYSwapped:c,stemProperties:Y,whiskerProperties:T};E(b,Math.min(s,q),
Math.min(n,f),Math.max(q,s),Math.max(f,n),e,T,Y,c);r&&E(this._eventManager.ghostCtx,s,n,q,f,e,T,Y,c);if(y[l].indexLabel||z.indexLabel||y[l].indexLabelFormatter||z.indexLabelFormatter)this._indexLabels.push({chartType:"error",dataPoint:y[l],dataSeries:z,indexKeyword:0,point:{x:c?y[l].y[1]>=y[l].y[0]?s:q:s+(q-s)/2,y:c?n+(f-n)/2:y[l].y[1]>=y[l].y[0]?f:n},direction:y[l].y[1]>=y[l].y[0]?-1:1,bounds:{x1:c?Math.min(s,q):s,y1:c?n:Math.min(n,f),x2:c?Math.max(s,q):q,y2:c?f:Math.max(n,f)},color:e,axisSwapped:c}),
this._indexLabels.push({chartType:"error",dataPoint:y[l],dataSeries:z,indexKeyword:1,point:{x:c?y[l].y[1]>=y[l].y[0]?q:s:s+(q-s)/2,y:c?n+(f-n)/2:y[l].y[1]>=y[l].y[0]?n:f},direction:y[l].y[1]>=y[l].y[0]?1:-1,bounds:{x1:c?Math.min(s,q):s,y1:c?n:Math.min(n,f),x2:c?Math.max(s,q):q,y2:c?f:Math.max(n,f)},color:e,axisSwapped:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),
a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(m.x1,m.y1,m.width,m.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderRangeBar=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:
d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=0,m,l,w,h,g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;m=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0;var s=a.axisX.dataInfo.minDiff;isFinite(s)||(s=0.3*Math.abs(a.axisX.range));s=this.options.dataPointWidth?this.dataPointWidth:0.9*
(e.height*(a.axisX.logarithmic?Math.log(s)/Math.log(a.axisX.range):Math.abs(s)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>m&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,m));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&m<g)&&(m=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,g));s<g&&(s=g);s>m&&(s=m);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),
this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var q=0;q<a.dataSeriesIndexes.length;q++){var n=a.dataSeriesIndexes[q],f=this.data[n],k=f.dataPoints;if(0<k.length){var p=5<s&&f.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<k.length;g++)if(k[g].getTime?h=k[g].x.getTime():h=k[g].x,!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&!u(k[g].y)&&k[g].y.length&&"number"===typeof k[g].y[0]&&"number"===typeof k[g].y[1]){m=a.axisY.convertValueToPixel(k[g].y[0]);
l=a.axisY.convertValueToPixel(k[g].y[1]);w=a.axisX.convertValueToPixel(h);w=a.axisX.reversed?w+a.plotType.totalDataSeries*s/2-(a.previousDataSeriesCount+q)*s<<0:w-a.plotType.totalDataSeries*s/2+(a.previousDataSeriesCount+q)*s<<0;var v=a.axisX.reversed?w-s<<0:w+s<<0;m>l&&(c=m,m=l,l=c);c=k[g].color?k[g].color:f._colorSet[g%f._colorSet.length];ea(b,m,w,l,v,c,0,null,p,!1,!1,!1,f.fillOpacity);c=f.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,
x1:m,y1:w,x2:l,y2:v};c=N(c);r&&ea(this._eventManager.ghostCtx,m,w,l,v,c,0,null,!1,!1,!1,!1);if(k[g].indexLabel||f.indexLabel||k[g].indexLabelFormatter||f.indexLabelFormatter)this._indexLabels.push({chartType:"rangeBar",dataPoint:k[g],dataSeries:f,indexKeyword:0,point:{x:k[g].y[1]>=k[g].y[0]?m:l,y:w+(v-w)/2},direction:k[g].y[1]>=k[g].y[0]?-1:1,bounds:{x1:Math.min(m,l),y1:w,x2:Math.max(m,l),y2:v},color:c}),this._indexLabels.push({chartType:"rangeBar",dataPoint:k[g],dataSeries:f,indexKeyword:1,point:{x:k[g].y[1]>=
k[g].y[0]?l:m,y:w+(v-w)/2},direction:k[g].y[1]>=k[g].y[0]?1:-1,bounds:{x1:Math.min(m,l),y1:w,x2:Math.max(m,l),y2:v},color:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,
e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderRangeArea=function(a){function d(){if(C){var a=null;0<s.lineThickness&&c.stroke();for(var b=w.length-1;0<=b;b--)a=w[b],c.lineTo(a.x,a.y),e.lineTo(a.x,a.y);c.closePath();c.globalAlpha=s.fillOpacity;c.fill();c.globalAlpha=1;e.fill();if(0<s.lineThickness){c.beginPath();c.moveTo(a.x,
a.y);for(b=0;b<w.length;b++)a=w[b],c.lineTo(a.x,a.y);c.stroke()}c.beginPath();c.moveTo(k,p);e.beginPath();e.moveTo(k,p);C={x:k,y:p};w=[];w.push({x:k,y:u})}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=[],m=this.plotArea;c.save();r&&e.save();c.beginPath();c.rect(m.x1,m.y1,m.width,m.height);c.clip();r&&(e.beginPath(),e.rect(m.x1,m.y1,m.width,m.height),e.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var w=
[],h=a.dataSeriesIndexes[l],s=this.data[h],q=s.dataPoints,g=s.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:h};g=N(g);e.fillStyle=g;var g=[],n=!0,f=0,k,p,u,t,C=null;if(0<q.length){var x=s._colorSet[f%s._colorSet.length],v=s.lineColor=s.options.lineColor||x,y=v;c.fillStyle=x;c.strokeStyle=v;c.lineWidth=s.lineThickness;var A="solid";if(c.setLineDash){var z=R(s.nullDataLineDashType,s.lineThickness),A=s.lineDashType,D=R(A,s.lineThickness);c.setLineDash(D)}for(var T=!0;f<
q.length;f++)if(t=q[f].x.getTime?q[f].x.getTime():q[f].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax&&(!s.connectNullData||!T)))if(null!==q[f].y&&q[f].y.length&&"number"===typeof q[f].y[0]&&"number"===typeof q[f].y[1]){k=a.axisX.convertValueToPixel(t);p=a.axisY.convertValueToPixel(q[f].y[0]);u=a.axisY.convertValueToPixel(q[f].y[1]);n||T?(s.connectNullData&&!n?(c.setLineDash&&(s.options.nullDataLineDashType||A===s.lineDashType&&s.lineDashType!==s.nullDataLineDashType)&&(w[w.length-
1].newLineDashArray=D,A=s.nullDataLineDashType,c.setLineDash(z)),c.lineTo(k,p),r&&e.lineTo(k,p),w.push({x:k,y:u})):(c.beginPath(),c.moveTo(k,p),C={x:k,y:p},w=[],w.push({x:k,y:u}),r&&(e.beginPath(),e.moveTo(k,p))),T=n=!1):(c.lineTo(k,p),w.push({x:k,y:u}),r&&e.lineTo(k,p),0==f%250&&d());t=s.dataPointIds[f];this._eventManager.objectMap[t]={id:t,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:f,x1:k,y1:p,y2:u};f<q.length-1&&(y!==(q[f].lineColor||v)||A!==(q[f].lineDashType||s.lineDashType))&&(d(),
y=q[f].lineColor||v,w[w.length-1].newStrokeStyle=y,c.strokeStyle=y,c.setLineDash&&(q[f].lineDashType?(A=q[f].lineDashType,w[w.length-1].newLineDashArray=R(A,s.lineThickness),c.setLineDash(w[w.length-1].newLineDashArray)):(A=s.lineDashType,w[w.length-1].newLineDashArray=D,c.setLineDash(D))));if(0!==q[f].markerSize&&(0<q[f].markerSize||0<s.markerSize)){var Y=s.getMarkerProperties(f,k,u,c);g.push(Y);var ca=N(t);r&&g.push({x:k,y:u,ctx:e,type:Y.type,size:Y.size,color:ca,borderColor:ca,borderThickness:Y.borderThickness});
Y=s.getMarkerProperties(f,k,p,c);g.push(Y);ca=N(t);r&&g.push({x:k,y:p,ctx:e,type:Y.type,size:Y.size,color:ca,borderColor:ca,borderThickness:Y.borderThickness})}if(q[f].indexLabel||s.indexLabel||q[f].indexLabelFormatter||s.indexLabelFormatter)this._indexLabels.push({chartType:"rangeArea",dataPoint:q[f],dataSeries:s,indexKeyword:0,point:{x:k,y:p},direction:q[f].y[0]>q[f].y[1]===a.axisY.reversed?-1:1,color:x}),this._indexLabels.push({chartType:"rangeArea",dataPoint:q[f],dataSeries:s,indexKeyword:1,point:{x:k,
y:u},direction:q[f].y[0]>q[f].y[1]===a.axisY.reversed?1:-1,color:x})}else T||n||d(),T=!0;d();ia.drawMarkers(g)}}r&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(m.x1,m.y1,
m.width,m.height),this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderRangeSplineArea=function(a){function d(a,b){var d=v(u,2);if(0<d.length){if(0<h.lineThickness){c.strokeStyle=b;c.setLineDash&&c.setLineDash(a);c.beginPath();c.moveTo(d[0].x,d[0].y);for(var f=0;f<d.length-3;f+=3){if(d[f].newStrokeStyle||d[f].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(d[f].x,
d[f].y),d[f].newStrokeStyle&&(c.strokeStyle=d[f].newStrokeStyle),d[f].newLineDashArray&&c.setLineDash(d[f].newLineDashArray);c.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y)}c.stroke()}c.beginPath();c.moveTo(d[0].x,d[0].y);r&&(e.beginPath(),e.moveTo(d[0].x,d[0].y));for(f=0;f<d.length-3;f+=3)c.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y),r&&e.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y);d=v(z,2);c.lineTo(z[z.length-1].x,z[z.length-
1].y);for(f=d.length-1;2<f;f-=3)c.bezierCurveTo(d[f-1].x,d[f-1].y,d[f-2].x,d[f-2].y,d[f-3].x,d[f-3].y),r&&e.bezierCurveTo(d[f-1].x,d[f-1].y,d[f-2].x,d[f-2].y,d[f-3].x,d[f-3].y);c.closePath();c.globalAlpha=h.fillOpacity;c.fill();r&&(e.closePath(),e.fill());c.globalAlpha=1;if(0<h.lineThickness){c.strokeStyle=b;c.setLineDash&&c.setLineDash(a);c.beginPath();c.moveTo(d[0].x,d[0].y);for(var g=f=0;f<d.length-3;f+=3,g++){if(u[g].newStrokeStyle||u[g].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(d[f].x,
d[f].y),u[g].newStrokeStyle&&(c.strokeStyle=u[g].newStrokeStyle),u[g].newLineDashArray&&c.setLineDash(u[g].newLineDashArray);c.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y)}c.stroke()}c.beginPath()}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=[],m=this.plotArea;c.save();r&&e.save();c.beginPath();c.rect(m.x1,m.y1,m.width,m.height);c.clip();r&&(e.beginPath(),e.rect(m.x1,m.y1,m.width,
m.height),e.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var w=a.dataSeriesIndexes[l],h=this.data[w],k=h.dataPoints,g=h.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:w};g=N(g);e.fillStyle=g;var g=[],q=0,n,f,p,u=[],z=[];if(0<k.length){var t=h._colorSet[q%h._colorSet.length],C=h.lineColor=h.options.lineColor||t,x=C;c.fillStyle=t;c.lineWidth=h.lineThickness;var F="solid",y;if(c.setLineDash){var A=R(h.nullDataLineDashType,h.lineThickness),F=h.lineDashType;y=R(F,
h.lineThickness)}for(f=!1;q<k.length;q++)if(n=k[q].x.getTime?k[q].x.getTime():k[q].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!f)))if(null!==k[q].y&&k[q].y.length&&"number"===typeof k[q].y[0]&&"number"===typeof k[q].y[1]){n=a.axisX.convertValueToPixel(n);f=a.axisY.convertValueToPixel(k[q].y[0]);p=a.axisY.convertValueToPixel(k[q].y[1]);var E=h.dataPointIds[q];this._eventManager.objectMap[E]={id:E,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:q,
x1:n,y1:f,y2:p};u[u.length]={x:n,y:f};z[z.length]={x:n,y:p};q<k.length-1&&(x!==(k[q].lineColor||C)||F!==(k[q].lineDashType||h.lineDashType))&&(x=k[q].lineColor||C,u[u.length-1].newStrokeStyle=x,c.setLineDash&&(k[q].lineDashType?(F=k[q].lineDashType,u[u.length-1].newLineDashArray=R(F,h.lineThickness)):(F=h.lineDashType,u[u.length-1].newLineDashArray=y)));if(0!==k[q].markerSize&&(0<k[q].markerSize||0<h.markerSize)){var aa=h.getMarkerProperties(q,n,f,c);g.push(aa);var T=N(E);r&&g.push({x:n,y:f,ctx:e,
type:aa.type,size:aa.size,color:T,borderColor:T,borderThickness:aa.borderThickness});aa=h.getMarkerProperties(q,n,p,c);g.push(aa);T=N(E);r&&g.push({x:n,y:p,ctx:e,type:aa.type,size:aa.size,color:T,borderColor:T,borderThickness:aa.borderThickness})}if(k[q].indexLabel||h.indexLabel||k[q].indexLabelFormatter||h.indexLabelFormatter)this._indexLabels.push({chartType:"rangeSplineArea",dataPoint:k[q],dataSeries:h,indexKeyword:0,point:{x:n,y:f},direction:k[q].y[0]<=k[q].y[1]?-1:1,color:t}),this._indexLabels.push({chartType:"rangeSplineArea",
dataPoint:k[q],dataSeries:h,indexKeyword:1,point:{x:n,y:p},direction:k[q].y[0]<=k[q].y[1]?1:-1,color:t});f=!1}else 0<q&&!f&&(h.connectNullData?c.setLineDash&&(0<u.length&&(h.options.nullDataLineDashType||!k[q-1].lineDashType))&&(u[u.length-1].newLineDashArray=A,F=h.nullDataLineDashType):(d(y,C),u=[],z=[])),f=!0;d(y,C);ia.drawMarkers(g)}}r&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,
this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(m.x1,m.y1,m.width,m.height),this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderWaterfall=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,
b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx,e=null,g=this.plotArea,m=0,l,k,h,s,q=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),m=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;k=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.width,0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<0;var n=
a.axisX.dataInfo.minDiff;isFinite(n)||(n=0.3*Math.abs(a.axisX.range));n=this.options.dataPointWidth?this.dataPointWidth:0.6*(g.width*(a.axisX.logarithmic?Math.log(n)/Math.log(a.axisX.range):Math.abs(n)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&m>k&&(m=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,k));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&k<m)&&(k=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,m));n<m&&(n=m);
n>k&&(n=k);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(g.x1,g.y1,g.width,g.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(g.x1,g.y1,g.width,g.height),this._eventManager.ghostCtx.clip());for(var f=0;f<a.dataSeriesIndexes.length;f++){var p=a.dataSeriesIndexes[f],u=this.data[p],v=u.dataPoints,e=u._colorSet[0];u.risingColor=u.options.risingColor?u.options.risingColor:e;u.fallingColor=u.options.fallingColor?u.options.fallingColor:"#e40a0a";
var t="number"===typeof u.options.lineThickness?Math.round(u.lineThickness):1,C=1===Math.round(t)%2?-0.5:0;if(0<v.length)for(var x=5<n&&u.bevelEnabled?!0:!1,z=!1,y=null,A=null,m=0;m<v.length;m++)if(v[m].getTime?s=v[m].x.getTime():s=v[m].x,"number"!==typeof v[m].y){if(0<m&&!z&&u.connectNullData)var D=u.options.nullDataLineDashType||!v[m-1].lineDashType?u.nullDataLineDashType:v[m-1].lineDashType;z=!0}else{l=a.axisX.convertValueToPixel(s);k=0===u.dataPointEOs[m].cumulativeSum?q:a.axisY.convertValueToPixel(u.dataPointEOs[m].cumulativeSum);
h=0===u.dataPointEOs[m].cumulativeSumYStartValue?q:a.axisY.convertValueToPixel(u.dataPointEOs[m].cumulativeSumYStartValue);l=a.axisX.reversed?l+a.plotType.totalDataSeries*n/2-(a.previousDataSeriesCount+f)*n<<0:l-a.plotType.totalDataSeries*n/2+(a.previousDataSeriesCount+f)*n<<0;var F=a.axisX.reversed?l-n<<0:l+n<<0;k>h&&(e=k,k=h,h=e);a.axisY.reversed&&(e=k,k=h,h=e);e=u.dataPointIds[m];this._eventManager.objectMap[e]={id:e,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:m,x1:l,y1:k,x2:F,y2:h};
var T=v[m].color?v[m].color:0<v[m].y?u.risingColor:u.fallingColor;ea(b,l,k,F,h,T,0,T,x,x,!1,!1,u.fillOpacity);e=N(e);r&&ea(this._eventManager.ghostCtx,l,k,F,h,e,0,null,!1,!1,!1,!1);var Y,T=l;Y="undefined"!==typeof v[m].isIntermediateSum&&!0===v[m].isIntermediateSum||"undefined"!==typeof v[m].isCumulativeSum&&!0===v[m].isCumulativeSum?0<v[m].y?k:h:0<v[m].y?h:k;0<m&&y&&(!z||u.connectNullData)&&(z&&b.setLineDash&&b.setLineDash(R(D,t)),b.beginPath(),b.moveTo(y,A-C),b.lineTo(T,Y-C),0<t&&b.stroke(),r&&
(c.beginPath(),c.moveTo(y,A-C),c.lineTo(T,Y-C),0<t&&c.stroke()));z=!1;y=F;A=0<v[m].y?k:h;T=v[m].lineDashType?v[m].lineDashType:u.options.lineDashType?u.options.lineDashType:"shortDash";b.strokeStyle=v[m].lineColor?v[m].lineColor:u.options.lineColor?u.options.lineColor:"#9e9e9e";b.lineWidth=t;b.setLineDash&&(T=R(T,t),b.setLineDash(T));(v[m].indexLabel||u.indexLabel||v[m].indexLabelFormatter||u.indexLabelFormatter)&&this._indexLabels.push({chartType:"waterfall",dataPoint:v[m],dataSeries:u,point:{x:l+
(F-l)/2,y:0<=v[m].y?k:h},direction:0>v[m].y===a.axisY.reversed?1:-1,bounds:{x1:l,y1:Math.min(k,h),x2:F,y2:Math.max(k,h)},color:e})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),
b.clearRect(g.x1,g.y1,g.width,g.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};var ja=function(a,d,b,c,e,g,m,l,k){if(!(0>b)){"undefined"===typeof l&&(l=1);if(!r){var h=Number((m%(2*Math.PI)).toFixed(8));Number((g%(2*Math.PI)).toFixed(8))===h&&(m-=1E-4)}a.save();a.globalAlpha=l;"pie"===e?(a.beginPath(),a.moveTo(d.x,d.y),a.arc(d.x,d.y,b,g,m,!1),a.fillStyle=c,a.strokeStyle=
"white",a.lineWidth=2,a.closePath(),a.fill()):"doughnut"===e&&(a.beginPath(),a.arc(d.x,d.y,b,g,m,!1),0<=k&&a.arc(d.x,d.y,k*b,m,g,!0),a.closePath(),a.fillStyle=c,a.strokeStyle="white",a.lineWidth=2,a.fill());a.globalAlpha=1;a.restore()}};p.prototype.renderPie=function(a){function d(){if(h&&s){for(var a=0,b=0,c=0,e=0,d=0;d<s.length;d++){var g=s[d],l=h.dataPointIds[d];f[d].id=l;f[d].objectType="dataPoint";f[d].dataPointIndex=d;f[d].dataSeriesIndex=0;var m=f[d],q={percent:null,total:null},p=null,q=k.getPercentAndTotal(h,
g);if(h.indexLabelFormatter||g.indexLabelFormatter)p={chart:k.options,dataSeries:h,dataPoint:g,total:q.total,percent:q.percent};q=g.indexLabelFormatter?g.indexLabelFormatter(p):g.indexLabel?k.replaceKeywordsWithValue(g.indexLabel,g,h,d):h.indexLabelFormatter?h.indexLabelFormatter(p):h.indexLabel?k.replaceKeywordsWithValue(h.indexLabel,g,h,d):g.label?g.label:"";k._eventManager.objectMap[l]=m;m.center={x:x.x,y:x.y};m.y=g.y;m.radius=A;m.percentInnerRadius=F;m.indexLabelText=q;m.indexLabelPlacement=h.indexLabelPlacement;
m.indexLabelLineColor=g.indexLabelLineColor?g.indexLabelLineColor:h.options.indexLabelLineColor?h.options.indexLabelLineColor:g.color?g.color:h._colorSet[d%h._colorSet.length];m.indexLabelLineThickness=u(g.indexLabelLineThickness)?h.indexLabelLineThickness:g.indexLabelLineThickness;m.indexLabelLineDashType=g.indexLabelLineDashType?g.indexLabelLineDashType:h.indexLabelLineDashType;m.indexLabelFontColor=g.indexLabelFontColor?g.indexLabelFontColor:h.indexLabelFontColor;m.indexLabelFontStyle=g.indexLabelFontStyle?
g.indexLabelFontStyle:h.indexLabelFontStyle;m.indexLabelFontWeight=g.indexLabelFontWeight?g.indexLabelFontWeight:h.indexLabelFontWeight;m.indexLabelFontSize=u(g.indexLabelFontSize)?h.indexLabelFontSize:g.indexLabelFontSize;m.indexLabelFontFamily=g.indexLabelFontFamily?g.indexLabelFontFamily:h.indexLabelFontFamily;m.indexLabelBackgroundColor=g.indexLabelBackgroundColor?g.indexLabelBackgroundColor:h.options.indexLabelBackgroundColor?h.options.indexLabelBackgroundColor:h.indexLabelBackgroundColor;m.indexLabelMaxWidth=
g.indexLabelMaxWidth?g.indexLabelMaxWidth:h.indexLabelMaxWidth?h.indexLabelMaxWidth:0.33*n.width;m.indexLabelWrap="undefined"!==typeof g.indexLabelWrap?g.indexLabelWrap:h.indexLabelWrap;m.startAngle=0===d?h.startAngle?h.startAngle/180*Math.PI:0:f[d-1].endAngle;m.startAngle=(m.startAngle+2*Math.PI)%(2*Math.PI);m.endAngle=m.startAngle+2*Math.PI/z*Math.abs(g.y);g=(m.endAngle+m.startAngle)/2;g=(g+2*Math.PI)%(2*Math.PI);m.midAngle=g;if(m.midAngle>Math.PI/2-t&&m.midAngle<Math.PI/2+t){if(0===a||f[c].midAngle>
m.midAngle)c=d;a++}else if(m.midAngle>3*Math.PI/2-t&&m.midAngle<3*Math.PI/2+t){if(0===b||f[e].midAngle>m.midAngle)e=d;b++}m.hemisphere=g>Math.PI/2&&g<=3*Math.PI/2?"left":"right";m.indexLabelTextBlock=new ka(k.plotArea.ctx,{fontSize:m.indexLabelFontSize,fontFamily:m.indexLabelFontFamily,fontColor:m.indexLabelFontColor,fontStyle:m.indexLabelFontStyle,fontWeight:m.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:m.indexLabelBackgroundColor,maxWidth:m.indexLabelMaxWidth,maxHeight:m.indexLabelWrap?
5*m.indexLabelFontSize:1.5*m.indexLabelFontSize,text:m.indexLabelText,padding:0,textBaseline:"top"});m.indexLabelTextBlock.measureText()}l=g=0;q=!1;for(d=0;d<s.length;d++)m=f[(c+d)%s.length],1<a&&(m.midAngle>Math.PI/2-t&&m.midAngle<Math.PI/2+t)&&(g<=a/2&&!q?(m.hemisphere="right",g++):(m.hemisphere="left",q=!0));q=!1;for(d=0;d<s.length;d++)m=f[(e+d)%s.length],1<b&&(m.midAngle>3*Math.PI/2-t&&m.midAngle<3*Math.PI/2+t)&&(l<=b/2&&!q?(m.hemisphere="left",l++):(m.hemisphere="right",q=!0))}}function b(a){var b=
k.plotArea.ctx;b.clearRect(n.x1,n.y1,n.width,n.height);b.fillStyle=k.backgroundColor;b.fillRect(n.x1,n.y1,n.width,n.height);for(b=0;b<s.length;b++){var c=f[b].startAngle,e=f[b].endAngle;if(e>c){var d=0.07*A*Math.cos(f[b].midAngle),g=0.07*A*Math.sin(f[b].midAngle),m=!1;if(s[b].exploded){if(1E-9<Math.abs(f[b].center.x-(x.x+d))||1E-9<Math.abs(f[b].center.y-(x.y+g)))f[b].center.x=x.x+d*a,f[b].center.y=x.y+g*a,m=!0}else if(0<Math.abs(f[b].center.x-x.x)||0<Math.abs(f[b].center.y-x.y))f[b].center.x=x.x+
d*(1-a),f[b].center.y=x.y+g*(1-a),m=!0;m&&(d={},d.dataSeries=h,d.dataPoint=h.dataPoints[b],d.index=b,k.toolTip.highlightObjects([d]));ja(k.plotArea.ctx,f[b].center,f[b].radius,s[b].color?s[b].color:h._colorSet[b%h._colorSet.length],h.type,c,e,h.fillOpacity,f[b].percentInnerRadius)}}a=k.plotArea.ctx;a.save();a.fillStyle="black";a.strokeStyle="grey";a.textBaseline="middle";a.lineJoin="round";for(b=b=0;b<s.length;b++)c=f[b],c.indexLabelText&&(c.indexLabelTextBlock.y-=c.indexLabelTextBlock.height/2,e=
0,e="left"===c.hemisphere?"inside"!==h.indexLabelPlacement?-(c.indexLabelTextBlock.width+q):-c.indexLabelTextBlock.width/2:"inside"!==h.indexLabelPlacement?q:-c.indexLabelTextBlock.width/2,c.indexLabelTextBlock.x+=e,c.indexLabelTextBlock.render(!0),c.indexLabelTextBlock.x-=e,c.indexLabelTextBlock.y+=c.indexLabelTextBlock.height/2,"inside"!==c.indexLabelPlacement&&0<c.indexLabelLineThickness&&(e=c.center.x+A*Math.cos(c.midAngle),d=c.center.y+A*Math.sin(c.midAngle),a.strokeStyle=c.indexLabelLineColor,
a.lineWidth=c.indexLabelLineThickness,a.setLineDash&&a.setLineDash(R(c.indexLabelLineDashType,c.indexLabelLineThickness)),a.beginPath(),a.moveTo(e,d),a.lineTo(c.indexLabelTextBlock.x,c.indexLabelTextBlock.y),a.lineTo(c.indexLabelTextBlock.x+("left"===c.hemisphere?-q:q),c.indexLabelTextBlock.y),a.stroke()),a.lineJoin="miter");a.save()}function c(a,b){var c=0,c=a.indexLabelTextBlock.y-a.indexLabelTextBlock.height/2,e=a.indexLabelTextBlock.y+a.indexLabelTextBlock.height/2,d=b.indexLabelTextBlock.y-b.indexLabelTextBlock.height/
2,f=b.indexLabelTextBlock.y+b.indexLabelTextBlock.height/2;return c=b.indexLabelTextBlock.y>a.indexLabelTextBlock.y?d-e:c-f}function e(a){for(var b=null,e=1;e<s.length;e++)if(b=(a+e+f.length)%f.length,f[b].hemisphere!==f[a].hemisphere){b=null;break}else if(f[b].indexLabelText&&b!==a&&(0>c(f[b],f[a])||("right"===f[a].hemisphere?f[b].indexLabelTextBlock.y>=f[a].indexLabelTextBlock.y:f[b].indexLabelTextBlock.y<=f[a].indexLabelTextBlock.y)))break;else b=null;return b}function g(a,b,d){d=(d||0)+1;if(1E3<
d)return 0;b=b||0;var m=0,h=x.y-1*r,l=x.y+1*r;if(0<=a&&a<s.length){var n=f[a];if(0>b&&n.indexLabelTextBlock.y<h||0<b&&n.indexLabelTextBlock.y>l)return 0;var k=0,q=0,q=k=k=0;0>b?n.indexLabelTextBlock.y-n.indexLabelTextBlock.height/2>h&&n.indexLabelTextBlock.y-n.indexLabelTextBlock.height/2+b<h&&(b=-(h-(n.indexLabelTextBlock.y-n.indexLabelTextBlock.height/2+b))):n.indexLabelTextBlock.y+n.indexLabelTextBlock.height/2<h&&n.indexLabelTextBlock.y+n.indexLabelTextBlock.height/2+b>l&&(b=n.indexLabelTextBlock.y+
n.indexLabelTextBlock.height/2+b-l);b=n.indexLabelTextBlock.y+b;h=0;h="right"===n.hemisphere?x.x+Math.sqrt(Math.pow(r,2)-Math.pow(b-x.y,2)):x.x-Math.sqrt(Math.pow(r,2)-Math.pow(b-x.y,2));q=x.x+A*Math.cos(n.midAngle);k=x.y+A*Math.sin(n.midAngle);k=Math.sqrt(Math.pow(h-q,2)+Math.pow(b-k,2));q=Math.acos(A/r);k=Math.acos((r*r+A*A-k*k)/(2*A*r));b=k<q?b-n.indexLabelTextBlock.y:0;h=null;for(l=1;l<s.length;l++)if(h=(a-l+f.length)%f.length,f[h].hemisphere!==f[a].hemisphere){h=null;break}else if(f[h].indexLabelText&&
f[h].hemisphere===f[a].hemisphere&&h!==a&&(0>c(f[h],f[a])||("right"===f[a].hemisphere?f[h].indexLabelTextBlock.y<=f[a].indexLabelTextBlock.y:f[h].indexLabelTextBlock.y>=f[a].indexLabelTextBlock.y)))break;else h=null;q=h;k=e(a);l=h=0;0>b?(l="right"===n.hemisphere?q:k,m=b,null!==l&&(q=-b,b=n.indexLabelTextBlock.y-n.indexLabelTextBlock.height/2-(f[l].indexLabelTextBlock.y+f[l].indexLabelTextBlock.height/2),b-q<p&&(h=-q,l=g(l,h,d+1),+l.toFixed(C)>+h.toFixed(C)&&(m=b>p?-(b-p):-(q-(l-h)))))):0<b&&(l="right"===
n.hemisphere?k:q,m=b,null!==l&&(q=b,b=f[l].indexLabelTextBlock.y-f[l].indexLabelTextBlock.height/2-(n.indexLabelTextBlock.y+n.indexLabelTextBlock.height/2),b-q<p&&(h=q,l=g(l,h,d+1),+l.toFixed(C)<+h.toFixed(C)&&(m=b>p?b-p:q-(h-l)))));m&&(d=n.indexLabelTextBlock.y+m,b=0,b="right"===n.hemisphere?x.x+Math.sqrt(Math.pow(r,2)-Math.pow(d-x.y,2)):x.x-Math.sqrt(Math.pow(r,2)-Math.pow(d-x.y,2)),n.midAngle>Math.PI/2-t&&n.midAngle<Math.PI/2+t?(h=(a-1+f.length)%f.length,h=f[h],a=f[(a+1+f.length)%f.length],"left"===
n.hemisphere&&"right"===h.hemisphere&&b>h.indexLabelTextBlock.x?b=h.indexLabelTextBlock.x-15:"right"===n.hemisphere&&("left"===a.hemisphere&&b<a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x+15)):n.midAngle>3*Math.PI/2-t&&n.midAngle<3*Math.PI/2+t&&(h=(a-1+f.length)%f.length,h=f[h],a=f[(a+1+f.length)%f.length],"right"===n.hemisphere&&"left"===h.hemisphere&&b<h.indexLabelTextBlock.x?b=h.indexLabelTextBlock.x+15:"left"===n.hemisphere&&("right"===a.hemisphere&&b>a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x-
15)),n.indexLabelTextBlock.y=d,n.indexLabelTextBlock.x=b,n.indexLabelAngle=Math.atan2(n.indexLabelTextBlock.y-x.y,n.indexLabelTextBlock.x-x.x))}return m}function m(){var a=k.plotArea.ctx;a.fillStyle="grey";a.strokeStyle="grey";a.font="16px Arial";a.textBaseline="middle";for(var b=a=0,d=0,m=!0,b=0;10>b&&(1>b||0<d);b++){if(h.radius||!h.radius&&"undefined"!==typeof h.innerRadius&&null!==h.innerRadius&&A-d<=D)m=!1;m&&(A-=d);d=0;if("inside"!==h.indexLabelPlacement){r=A*v;for(a=0;a<s.length;a++){var l=
f[a];l.indexLabelTextBlock.x=x.x+r*Math.cos(l.midAngle);l.indexLabelTextBlock.y=x.y+r*Math.sin(l.midAngle);l.indexLabelAngle=l.midAngle;l.radius=A;l.percentInnerRadius=F}for(var t,u,a=0;a<s.length;a++){var l=f[a],y=e(a);if(null!==y){t=f[a];u=f[y];var z=0,z=c(t,u)-p;if(0>z){for(var E=u=0,H=0;H<s.length;H++)H!==a&&f[H].hemisphere===l.hemisphere&&(f[H].indexLabelTextBlock.y<l.indexLabelTextBlock.y?u++:E++);u=z/(u+E||1)*E;var E=-1*(z-u),I=H=0;"right"===l.hemisphere?(H=g(a,u),E=-1*(z-H),I=g(y,E),+I.toFixed(C)<
+E.toFixed(C)&&+H.toFixed(C)<=+u.toFixed(C)&&g(a,-(E-I))):(H=g(y,u),E=-1*(z-H),I=g(a,E),+I.toFixed(C)<+E.toFixed(C)&&+H.toFixed(C)<=+u.toFixed(C)&&g(y,-(E-I)))}}}}else for(a=0;a<s.length;a++)l=f[a],r="pie"===h.type?0.7*A:0.8*A,y=x.x+r*Math.cos(l.midAngle),u=x.y+r*Math.sin(l.midAngle),l.indexLabelTextBlock.x=y,l.indexLabelTextBlock.y=u;for(a=0;a<s.length;a++)if(l=f[a],y=l.indexLabelTextBlock.measureText(),0!==y.height&&0!==y.width)y=y=0,"right"===l.hemisphere?(y=n.x2-(l.indexLabelTextBlock.x+l.indexLabelTextBlock.width+
q),y*=-1):y=n.x1-(l.indexLabelTextBlock.x-l.indexLabelTextBlock.width-q),0<y&&(!m&&l.indexLabelText&&(u="right"===l.hemisphere?n.x2-l.indexLabelTextBlock.x:l.indexLabelTextBlock.x-n.x1,0.3*l.indexLabelTextBlock.maxWidth>u?l.indexLabelText="":l.indexLabelTextBlock.maxWidth=0.85*u,0.3*l.indexLabelTextBlock.maxWidth<u&&(l.indexLabelTextBlock.x-="right"===l.hemisphere?2:-2)),Math.abs(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-x.y)<A||Math.abs(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/
2-x.y)<A)&&(y/=Math.abs(Math.cos(l.indexLabelAngle)),9<y&&(y*=0.3),y>d&&(d=y)),y=y=0,0<l.indexLabelAngle&&l.indexLabelAngle<Math.PI?(y=n.y2-(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2+5),y*=-1):y=n.y1-(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-5),0<y&&(!m&&l.indexLabelText&&(u=0<l.indexLabelAngle&&l.indexLabelAngle<Math.PI?-1:1,0===g(a,y*u)&&g(a,2*u)),Math.abs(l.indexLabelTextBlock.x-x.x)<A&&(y/=Math.abs(Math.sin(l.indexLabelAngle)),9<y&&(y*=0.3),y>d&&(d=y)));var K=function(a,
b,c){for(var e=[],d=0;e.push(f[b]),b!==c;b=(b+1+s.length)%s.length);e.sort(function(a,b){return a.y-b.y});for(b=0;b<e.length;b++)if(c=e[b],d<0.7*a)d+=c.indexLabelTextBlock.height,c.indexLabelTextBlock.text="",c.indexLabelText="",c.indexLabelTextBlock.measureText();else break};(function(){for(var a=-1,b=-1,d=0,g=!1,l=0;l<s.length;l++)if(g=!1,t=f[l],t.indexLabelText){var m=e(l);if(null!==m){var h=f[m];z=0;z=c(t,h);var n;if(n=0>z){n=t.indexLabelTextBlock.x;var k=t.indexLabelTextBlock.y-t.indexLabelTextBlock.height/
2,w=t.indexLabelTextBlock.y+t.indexLabelTextBlock.height/2,p=h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2,u=h.indexLabelTextBlock.x+h.indexLabelTextBlock.width,r=h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2;n=t.indexLabelTextBlock.x+t.indexLabelTextBlock.width<h.indexLabelTextBlock.x-q||n>u+q||k>r+q||w<p-q?!1:!0}n?(0>a&&(a=l),m!==a&&(b=m,d+=-z),0===l%Math.max(s.length/10,3)&&(g=!0)):g=!0;g&&(0<d&&0<=a&&0<=b)&&(K(d,a,b),b=a=-1,d=0)}}0<d&&K(d,a,b)})()}}function l(){k.plotArea.layoutManager.reset();
k.title&&(k.title.dockInsidePlotArea||"center"===k.title.horizontalAlign&&"center"===k.title.verticalAlign)&&k.title.render();if(k.subtitles)for(var a=0;a<k.subtitles.length;a++){var b=k.subtitles[a];(b.dockInsidePlotArea||"center"===b.horizontalAlign&&"center"===b.verticalAlign)&&b.render()}k.legend&&(k.legend.dockInsidePlotArea||"center"===k.legend.horizontalAlign&&"center"===k.legend.verticalAlign)&&(k.legend.setLayout(),k.legend.render())}var k=this;if(!(0>=a.dataSeriesIndexes.length)){var h=
this.data[a.dataSeriesIndexes[0]],s=h.dataPoints,q=10,n=this.plotArea,f=h.dataPointEOs,p=2,r,v=1.3,t=20/180*Math.PI,C=6,x={x:(n.x2+n.x1)/2,y:(n.y2+n.y1)/2},z=0;a=!1;for(var y=0;y<s.length;y++)z+=Math.abs(s[y].y),!a&&("undefined"!==typeof s[y].indexLabel&&null!==s[y].indexLabel&&0<s[y].indexLabel.toString().length)&&(a=!0),!a&&("undefined"!==typeof s[y].label&&null!==s[y].label&&0<s[y].label.toString().length)&&(a=!0);if(0!==z){a=a||"undefined"!==typeof h.indexLabel&&null!==h.indexLabel&&0<h.indexLabel.toString().length;
var A="inside"!==h.indexLabelPlacement&&a?0.75*Math.min(n.width,n.height)/2:0.92*Math.min(n.width,n.height)/2;h.radius&&(A=I(h.radius,A));var D="undefined"!==typeof h.innerRadius&&null!==h.innerRadius?I(h.innerRadius,A):0.7*A;h.radius=A;"doughnut"===h.type&&(h.innerRadius=D);var F=Math.min(D/A,(A-1)/A);this.pieDoughnutClickHandler=function(a){k.isAnimating||!u(a.dataSeries.explodeOnClick)&&!a.dataSeries.explodeOnClick||(a=a.dataPoint,a.exploded=a.exploded?!1:!0,1<this.dataPoints.length&&k._animator.animate(0,
500,function(a){b(a);l()}))};d();m();m();m();m();this.disableToolTip=!0;this._animator.animate(0,this.animatedRender?this.animationDuration:0,function(a){var b=k.plotArea.ctx;b.clearRect(n.x1,n.y1,n.width,n.height);b.fillStyle=k.backgroundColor;b.fillRect(n.x1,n.y1,n.width,n.height);a=f[0].startAngle+2*Math.PI*a;for(b=0;b<s.length;b++){var c=0===b?f[b].startAngle:e,e=c+(f[b].endAngle-f[b].startAngle),d=!1;e>a&&(e=a,d=!0);var g=s[b].color?s[b].color:h._colorSet[b%h._colorSet.length];e>c&&ja(k.plotArea.ctx,
f[b].center,f[b].radius,g,h.type,c,e,h.fillOpacity,f[b].percentInnerRadius);if(d)break}l()},function(){k.disableToolTip=!1;k._animator.animate(0,k.animatedRender?500:0,function(a){b(a);l()})})}}};var ra=function(a,d,b,c){"undefined"===typeof b&&(b=1);0>=Math.round(d.y4-d.y1)||(a.save(),a.globalAlpha=b,a.beginPath(),a.moveTo(Math.round(d.x1),Math.round(d.y1)),a.lineTo(Math.round(d.x2),Math.round(d.y2)),a.lineTo(Math.round(d.x3),Math.round(d.y3)),a.lineTo(Math.round(d.x4),Math.round(d.y4)),"undefined"!==
d.x5&&(a.lineTo(Math.round(d.x5),Math.round(d.y5)),a.lineTo(Math.round(d.x6),Math.round(d.y6))),a.closePath(),a.fillStyle=c?c:d.color,a.fill(),a.globalAplha=1,a.restore())};p.prototype.renderFunnel=function(a){function d(){for(var a=0,b=[],c=0;c<C.length;c++){if("undefined"===typeof C[c].y)return-1;C[c].y="number"===typeof C[c].y?C[c].y:0;a+=Math.abs(C[c].y)}if(0===a)return-1;for(c=b[0]=0;c<C.length;c++)b.push(Math.abs(C[c].y)*F/a);return b}function b(){var a=$,b=V,c=K,e=ea,d,f;d=O;f=Z-N;e=Math.abs((f-
d)*(b-a+(e-c))/2);c=ea-K;d=f-d;f=c*(f-Z);f=Math.abs(f);f=e+f;for(var e=[],g=0,l=0;l<C.length;l++){if("undefined"===typeof C[l].y)return-1;C[l].y="number"===typeof C[l].y?C[l].y:0;g+=Math.abs(C[l].y)}if(0===g)return-1;for(var m=e[0]=0,h=0,n,k,b=b-a,m=!1,l=0;l<C.length;l++)a=Math.abs(C[l].y)*f/g,m?n=0==Number(c.toFixed(3))?0:a/c:(k=ba*ba*b*b-4*Math.abs(ba)*a,0>k?(k=c,m=(b+k)*(d-h)/2,a-=m,n=d-h,h+=d-h,n+=0==k?0:a/k,h+=a/k,m=!0):(n=(Math.abs(ba)*b-Math.sqrt(k))/2,k=b-2*n/Math.abs(ba),h+=n,h>d&&(h-=n,
k=c,m=(b+k)*(d-h)/2,a-=m,n=d-h,h+=d-h,n+=a/k,h+=a/k,m=!0),b=k)),e.push(n);return e}function c(){if(t&&C){for(var a,b,c,e,d,g,l,h,m,n,k,q,s,w,p=[],B=[],x={percent:null,total:null},v=null,y=0;y<C.length;y++)w=P[y],w="undefined"!==typeof w.x5?(w.y2+w.y4)/2:(w.y2+w.y3)/2,w=f(w).x2+1,p[y]=L-w-S;w=0.5*S;for(var y=0,A=C.length-1;y<C.length||0<=A;y++,A--){b=t.reversed?C[A]:C[y];a=b.color?b.color:t.reversed?t._colorSet[(C.length-1-y)%t._colorSet.length]:t._colorSet[y%t._colorSet.length];c=b.indexLabelPlacement||
t.indexLabelPlacement||"outside";e=b.indexLabelBackgroundColor||t.indexLabelBackgroundColor||(r?"transparent":null);d=b.indexLabelFontColor||t.indexLabelFontColor||"#979797";g=u(b.indexLabelFontSize)?t.indexLabelFontSize:b.indexLabelFontSize;l=b.indexLabelFontStyle||t.indexLabelFontStyle||"normal";h=b.indexLabelFontFamily||t.indexLabelFontFamily||"arial";m=b.indexLabelFontWeight||t.indexLabelFontWeight||"normal";a=b.indexLabelLineColor||t.options.indexLabelLineColor||a;n="number"===typeof b.indexLabelLineThickness?
b.indexLabelLineThickness:"number"===typeof t.indexLabelLineThickness?t.indexLabelLineThickness:2;k=b.indexLabelLineDashType||t.indexLabelLineDashType||"solid";q="undefined"!==typeof b.indexLabelWrap?b.indexLabelWrap:"undefined"!==typeof t.indexLabelWrap?t.indexLabelWrap:!0;s=t.dataPointIds[y];z._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataPointIndex:y,dataSeriesIndex:0,funnelSection:P[t.reversed?C.length-1-y:y]};"inside"===t.indexLabelPlacement&&(p[y]=y!==fa?t.reversed?P[y].x2-P[y].x1:
P[y].x3-P[y].x4:P[y].x3-P[y].x6,20>p[y]&&(p[y]=y!==fa?t.reversed?P[y].x3-P[y].x4:P[y].x2-P[y].x1:P[y].x2-P[y].x1,p[y]/=2));s=b.indexLabelMaxWidth?b.indexLabelMaxWidth:t.options.indexLabelMaxWidth?t.indexLabelMaxWidth:p[y];if(s>p[y]||0>s)s=p[y];B[y]="inside"===t.indexLabelPlacement?P[y].height:!1;x=z.getPercentAndTotal(t,b);if(t.indexLabelFormatter||b.indexLabelFormatter)v={chart:z.options,dataSeries:t,dataPoint:b,total:x.total,percent:x.percent};b=b.indexLabelFormatter?b.indexLabelFormatter(v):b.indexLabel?
z.replaceKeywordsWithValue(b.indexLabel,b,t,y):t.indexLabelFormatter?t.indexLabelFormatter(v):t.indexLabel?z.replaceKeywordsWithValue(t.indexLabel,b,t,y):b.label?b.label:"";0>=n&&(n=0);1E3>s&&1E3-s<w&&(s+=1E3-s);Q.roundRect||Ea(Q);c=new ka(Q,{fontSize:g,fontFamily:h,fontColor:d,fontStyle:l,fontWeight:m,horizontalAlign:c,backgroundColor:e,maxWidth:s,maxHeight:!1===B[y]?q?4.28571429*g:1.5*g:B[y],text:b,padding:ga});c.measureText();J.push({textBlock:c,id:t.reversed?A:y,isDirty:!1,lineColor:a,lineThickness:n,
lineDashType:k,height:c.height<c.maxHeight?c.height:c.maxHeight,width:c.width<c.maxWidth?c.width:c.maxWidth})}}}function e(){var a,b,c,e,d,f=[];d=!1;c=0;for(var g,l=L-V-S/2,l=t.options.indexLabelMaxWidth?t.indexLabelMaxWidth>l?l:t.indexLabelMaxWidth:l,h=J.length-1;0<=h;h--){g=C[J[h].id];c=J[h];e=c.textBlock;b=(a=n(h)<P.length?J[n(h)]:null)?a.textBlock:null;c=c.height;a&&e.y+c+ga>b.y&&(d=!0);c=g.indexLabelMaxWidth||l;if(c>l||0>c)c=l;f.push(c)}if(d)for(h=J.length-1;0<=h;h--)a=P[h],J[h].textBlock.maxWidth=
f[f.length-(h+1)],J[h].textBlock.measureText(),J[h].textBlock.x=L-l,c=J[h].textBlock.height<J[h].textBlock.maxHeight?J[h].textBlock.height:J[h].textBlock.maxHeight,d=J[h].textBlock.width<J[h].textBlock.maxWidth?J[h].textBlock.width:J[h].textBlock.maxWidth,J[h].height=c,J[h].width=d,c="undefined"!==typeof a.x5?(a.y2+a.y4)/2:(a.y2+a.y3)/2,J[h].textBlock.y=c-J[h].height/2,t.reversed?(J[h].textBlock.y+J[h].height>pa+D&&(J[h].textBlock.y=pa+D-J[h].height),J[h].textBlock.y<wa-D&&(J[h].textBlock.y=wa-D)):
(J[h].textBlock.y<pa-D&&(J[h].textBlock.y=pa-D),J[h].textBlock.y+J[h].height>wa+D&&(J[h].textBlock.y=wa+D-J[h].height))}function g(){var a,b,c,e;if("inside"!==t.indexLabelPlacement)for(var d=0;d<P.length;d++)0==J[d].textBlock.text.length?J[d].isDirty=!0:(a=P[d],c="undefined"!==typeof a.x5?(a.y2+a.y4)/2:(a.y2+a.y3)/2,b=t.reversed?"undefined"!==typeof a.x5?c>Da?f(c).x2+1:(a.x2+a.x3)/2+1:(a.x2+a.x3)/2+1:"undefined"!==typeof a.x5?c<Da?f(c).x2+1:(a.x4+a.x3)/2+1:(a.x2+a.x3)/2+1,J[d].textBlock.x=b+S,J[d].textBlock.y=
c-J[d].height/2,t.reversed?(J[d].textBlock.y+J[d].height>pa+D&&(J[d].textBlock.y=pa+D-J[d].height),J[d].textBlock.y<wa-D&&(J[d].textBlock.y=wa-D)):(J[d].textBlock.y<pa-D&&(J[d].textBlock.y=pa-D),J[d].textBlock.y+J[d].height>wa+D&&(J[d].textBlock.y=wa+D-J[d].height)));else for(d=0;d<P.length;d++)0==J[d].textBlock.text.length?J[d].isDirty=!0:(a=P[d],b=a.height,c=J[d].height,e=J[d].width,b>=c?(b=d!=fa?(a.x4+a.x3)/2-e/2:(a.x5+a.x4)/2-e/2,c=d!=fa?(a.y1+a.y3)/2-c/2:(a.y1+a.y4)/2-c/2,J[d].textBlock.x=b,
J[d].textBlock.y=c):J[d].isDirty=!0)}function m(){function a(b,c){var d;if(0>b||b>=J.length)return 0;var e,f=J[b].textBlock;if(0>c){c*=-1;e=q(b);d=l(e,b);if(d>=c)return f.y-=c,c;if(0==b)return 0<d&&(f.y-=d),d;d+=a(e,-(c-d));0<d&&(f.y-=d);return d}e=n(b);d=l(b,e);if(d>=c)return f.y+=c,c;if(b==P.length-1)return 0<d&&(f.y+=d),d;d+=a(e,c-d);0<d&&(f.y+=d);return d}function b(){var a,d,e,f,g=0,h;f=(Z-O+2*D)/k;h=k;for(var l,m=1;m<h;m++){e=m*f;for(var s=J.length-1;0<=s;s--)!J[s].isDirty&&(J[s].textBlock.y<
e&&J[s].textBlock.y+J[s].height>e)&&(l=n(s),!(l>=J.length-1)&&J[s].textBlock.y+J[s].height+ga>J[l].textBlock.y&&(J[s].textBlock.y=J[s].textBlock.y+J[s].height-e>e-J[s].textBlock.y?e+1:e-J[s].height-1))}for(l=P.length-1;0<l;l--)if(!J[l].isDirty){e=q(l);if(0>e&&(e=0,J[e].isDirty))break;if(J[l].textBlock.y<J[e].textBlock.y+J[e].height){d=d||l;f=l;for(h=0;J[f].textBlock.y<J[e].textBlock.y+J[e].height+ga;){a=a||J[f].textBlock.y+J[f].height;h+=J[f].height;h+=ga;f=e;if(0>=f){f=0;h+=J[f].height;break}e=q(f);
if(0>e){f=0;h+=J[f].height;break}}if(f!=l){g=J[f].textBlock.y;a-=g;a=h-a;g=c(a,d,f);break}}}return g}function c(a,b,d){var e=[],f=0,g=0;for(a=Math.abs(a);d<=b;d++)e.push(P[d]);e.sort(function(a,b){return a.height-b.height});for(d=0;d<e.length;d++)if(b=e[d],f<a)g++,f+=J[b.id].height+ga,J[b.id].textBlock.text="",J[b.id].indexLabelText="",J[b.id].isDirty=!0,J[b.id].textBlock.measureText();else break;return g}for(var d,e,f,g,h,m,k=1,s=0;s<2*k;s++){for(var w=J.length-1;0<=w&&!(0<=q(w)&&q(w),f=J[w],g=f.textBlock,
m=(h=n(w)<P.length?J[n(w)]:null)?h.textBlock:null,d=+f.height.toFixed(6),e=+g.y.toFixed(6),!f.isDirty&&(h&&e+d+ga>+m.y.toFixed(6))&&(d=g.y+d+ga-m.y,e=a(w,-d),e<d&&(0<e&&(d-=e),e=a(n(w),d),e!=d)));w--);b()}}function l(a,b){return(b<P.length?J[b].textBlock.y:t.reversed?pa+D:wa+D)-(0>a?t.reversed?wa-D:pa-D:J[a].textBlock.y+J[a].height+ga)}function k(a,b,c){var d,e,f,l=[],m=D,n=[];-1!==b&&(0<=W.indexOf(b)?(e=W.indexOf(b),W.splice(e,1)):(W.push(b),W=W.sort(function(a,b){return a-b})));if(0===W.length)l=
ia;else{e=D*(1!=W.length||0!=W[0]&&W[0]!=P.length-1?2:1)/h();for(var q=0;q<P.length;q++){if(1==W.length&&0==W[0]){if(0===q){l.push(ia[q]);d=m;continue}}else 0===q&&(d=-1*m);l.push(ia[q]+d);if(0<=W.indexOf(q)||q<P.length&&0<=W.indexOf(q+1))d+=e}}f=function(){for(var a=[],b=0;b<P.length;b++)a.push(l[b]-P[b].y1);return a}();var w={startTime:(new Date).getTime(),duration:c||500,easingFunction:function(a,b,c,d){return M.easing.easeOutQuart(a,b,c,d)},changeSection:function(a){for(var b,c,d=0;d<P.length;d++)b=
f[d],c=P[d],b*=a,"undefined"===typeof n[d]&&(n[d]=0),0>n&&(n*=-1),c.y1+=b-n[d],c.y2+=b-n[d],c.y3+=b-n[d],c.y4+=b-n[d],c.y5&&(c.y5+=b-n[d],c.y6+=b-n[d]),n[d]=b}};a._animator.animate(0,c,function(c){var d=a.plotArea.ctx||a.ctx;ja=!0;d.clearRect(x.x1,x.y1,x.x2-x.x1,x.y2-x.y1);d.fillStyle=a.backgroundColor;d.fillRect(x.x1,x.y1,x.width,x.height);w.changeSection(c,b);var e={};e.dataSeries=t;e.dataPoint=t.reversed?t.dataPoints[C.length-1-b]:t.dataPoints[b];e.index=t.reversed?C.length-1-b:b;a.toolTip.highlightObjects([e]);
for(e=0;e<P.length;e++)ra(d,P[e],t.fillOpacity);v(d);H&&("inside"!==t.indexLabelPlacement?s(d):g(),p(d));1<=c&&(ja=!1)},null,M.easing.easeOutQuart)}function h(){for(var a=0,b=0;b<P.length-1;b++)(0<=W.indexOf(b)||0<=W.indexOf(b+1))&&a++;return a}function s(a){for(var b,c,d,e,g=0;g<P.length;g++)e=1===J[g].lineThickness%2?0.5:0,c=((P[g].y2+P[g].y4)/2<<0)+e,b=f(c).x2-1,d=J[g].textBlock.x,e=(J[g].textBlock.y+J[g].height/2<<0)+e,J[g].isDirty||0==J[g].lineThickness||(a.strokeStyle=J[g].lineColor,a.lineWidth=
J[g].lineThickness,a.setLineDash&&a.setLineDash(R(J[g].lineDashType,J[g].lineThickness)),a.beginPath(),a.moveTo(b,c),a.lineTo(d,e),a.stroke())}function q(a){for(a-=1;-1<=a&&-1!=a&&J[a].isDirty;a--);return a}function n(a){for(a+=1;a<=P.length&&a!=P.length&&J[a].isDirty;a++);return a}function f(a){for(var b,c=0;c<C.length;c++)if(P[c].y1<a&&P[c].y4>a){b=P[c];break}return b?(a=b.y6?a>b.y6?b.x3+(b.x4-b.x3)/(b.y4-b.y3)*(a-b.y3):b.x2+(b.x3-b.x2)/(b.y3-b.y2)*(a-b.y2):b.x2+(b.x3-b.x2)/(b.y3-b.y2)*(a-b.y2),
{x1:a,x2:a}):-1}function p(a){for(var b=0;b<P.length;b++)J[b].isDirty||(a&&(J[b].textBlock.ctx=a),J[b].textBlock.render(!0))}function v(a){z.plotArea.layoutManager.reset();a.roundRect||Ea(a);z.title&&(z.title.dockInsidePlotArea||"center"===z.title.horizontalAlign&&"center"===z.title.verticalAlign)&&(z.title.ctx=a,z.title.render());if(z.subtitles)for(var b=0;b<z.subtitles.length;b++){var c=z.subtitles[b];if(c.dockInsidePlotArea||"center"===c.horizontalAlign&&"center"===c.verticalAlign)z.subtitles.ctx=
a,c.render()}z.legend&&(z.legend.dockInsidePlotArea||"center"===z.legend.horizontalAlign&&"center"===z.legend.verticalAlign)&&(z.legend.ctx=a,z.legend.setLayout(),z.legend.render());U.fNg&&U.fNg(z)}var z=this;if(!(0>=a.dataSeriesIndexes.length)){for(var t=this.data[a.dataSeriesIndexes[0]],C=t.dataPoints,x=this.plotArea,D=0.025*x.width,y=0.01*x.width,A=0,F=x.height-2*D,E=Math.min(x.width-2*y,2.8*x.height),H=!1,I=0;I<C.length;I++)if(!H&&("undefined"!==typeof C[I].indexLabel&&null!==C[I].indexLabel&&
0<C[I].indexLabel.toString().length)&&(H=!0),!H&&("undefined"!==typeof C[I].label&&null!==C[I].label&&0<C[I].label.toString().length)&&(H=!0),!H&&"function"===typeof t.indexLabelFormatter||"function"===typeof C[I].indexLabelFormatter)H=!0;H=H||"undefined"!==typeof t.indexLabel&&null!==t.indexLabel&&0<t.indexLabel.toString().length;"inside"!==t.indexLabelPlacement&&H||(y=(x.width-0.75*E)/2);var I=x.x1+y,L=x.x2-y,O=x.y1+D,Z=x.y2-D,Q=a.targetCanvasCtx||this.plotArea.ctx||this.ctx;if(0!=t.length&&(t.dataPoints&&
t.visible)&&0!==C.length){var N,G;a=75*E/100;var S=30*(L-a)/100;"funnel"===t.type?(N=u(t.options.neckHeight)?0.35*F:t.neckHeight,G=u(t.options.neckWidth)?0.25*a:t.neckWidth,"string"===typeof N&&N.match(/%$/)?(N=parseInt(N),N=N*F/100):N=parseInt(N),"string"===typeof G&&G.match(/%$/)?(G=parseInt(G),G=G*a/100):G=parseInt(G),N>F?N=F:0>=N&&(N=0),G>a?G=a-0.5:0>=G&&(G=0)):"pyramid"===t.type&&(G=N=0,t.reversed=t.reversed?!1:!0);var y=I+a/2,$=I,V=I+a,pa=t.reversed?Z:O,K=y-G/2,ea=y+G/2,Da=t.reversed?O+N:Z-
N,wa=t.reversed?O:Z;a=[];var y=[],P=[],E=[],X=O,fa,ba=(Da-pa)/(K-$),ha=-ba,I="area"===(t.valueRepresents?t.valueRepresents:"height")?b():d();if(-1!==I){if(t.reversed)for(E.push(X),G=I.length-1;0<G;G--)X+=I[G],E.push(X);else for(G=0;G<I.length;G++)X+=I[G],E.push(X);if(t.reversed)for(G=0;G<I.length;G++)E[G]<Da?(a.push(K),y.push(ea),fa=G):(a.push((E[G]-pa+ba*$)/ba),y.push((E[G]-pa+ha*V)/ha));else for(G=0;G<I.length;G++)E[G]<Da?(a.push((E[G]-pa+ba*$)/ba),y.push((E[G]-pa+ha*V)/ha),fa=G):(a.push(K),y.push(ea));
for(G=0;G<I.length-1;G++)X=t.reversed?C[C.length-1-G].color?C[C.length-1-G].color:t._colorSet[(C.length-1-G)%t._colorSet.length]:C[G].color?C[G].color:t._colorSet[G%t._colorSet.length],G===fa?P.push({x1:a[G],y1:E[G],x2:y[G],y2:E[G],x3:ea,y3:Da,x4:y[G+1],y4:E[G+1],x5:a[G+1],y5:E[G+1],x6:K,y6:Da,id:G,height:E[G+1]-E[G],color:X}):P.push({x1:a[G],y1:E[G],x2:y[G],y2:E[G],x3:y[G+1],y3:E[G+1],x4:a[G+1],y4:E[G+1],id:G,height:E[G+1]-E[G],color:X});var ga=2,J=[],ja=!1,W=[],ia=[],I=!1;a=a=0;Fa(W);for(G=0;G<
C.length;G++)C[G].exploded&&(I=!0,t.reversed?W.push(C.length-1-G):W.push(G));Q.clearRect(x.x1,x.y1,x.width,x.height);Q.fillStyle=z.backgroundColor;Q.fillRect(x.x1,x.y1,x.width,x.height);if(H&&t.visible&&(c(),g(),e(),"inside"!==t.indexLabelPlacement)){m();for(G=0;G<C.length;G++)J[G].isDirty||(a=J[G].textBlock.x+J[G].width,a=(L-a)/2,0==G&&(A=a),A>a&&(A=a));for(G=0;G<P.length;G++)P[G].x1+=A,P[G].x2+=A,P[G].x3+=A,P[G].x4+=A,P[G].x5&&(P[G].x5+=A,P[G].x6+=A),J[G].textBlock.x+=A}for(G=0;G<P.length;G++)A=
P[G],ra(Q,A,t.fillOpacity),ia.push(A.y1);v(Q);H&&t.visible&&("inside"===t.indexLabelPlacement||z.animationEnabled||s(Q),z.animationEnabled||p());if(!H)for(G=0;G<C.length;G++)A=t.dataPointIds[G],a={id:A,objectType:"dataPoint",dataPointIndex:G,dataSeriesIndex:0,funnelSection:P[t.reversed?C.length-1-G:G]},z._eventManager.objectMap[A]=a;!z.animationEnabled&&I?k(z,-1,0):z.animationEnabled&&!z.animatedRender&&k(z,-1,0);this.funnelPyramidClickHandler=function(a){var b=-1;if(!ja&&!z.isAnimating&&(u(a.dataSeries.explodeOnClick)||
a.dataSeries.explodeOnClick)&&(b=t.reversed?C.length-1-a.dataPointIndex:a.dataPointIndex,0<=b)){a=b;if("funnel"===t.type||"pyramid"===t.type)t.reversed?C[C.length-1-a].exploded=C[C.length-1-a].exploded?!1:!0:C[a].exploded=C[a].exploded?!1:!0;k(z,b,500)}};return{source:Q,dest:this.plotArea.ctx,animationCallback:function(a,b){M.fadeInAnimation(a,b);1<=a&&(k(z,-1,500),v(z.plotArea.ctx||z.ctx))},easingFunction:M.easing.easeInQuad,animationBase:0}}}}};p.prototype.requestAnimFrame=function(){return window.requestAnimationFrame||
window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();p.prototype.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;p.prototype.set=function(a,d,b){b="undefined"===typeof b?!0:b;"options"===a?(this.options=d,
b&&this.render()):p.base.set.call(this,a,d,b)};p.prototype.exportChart=function(a){a="undefined"===typeof a?{}:a;var d=a.format?a.format:"png",b=a.fileName?a.fileName:this.exportFileName;if(a.toDataURL)return this.canvas.toDataURL("image/"+d);Ta(this.canvas,d,b)};p.prototype.print=function(){var a=this.exportChart({toDataURL:!0}),d=document.createElement("iframe");d.setAttribute("class","canvasjs-chart-print-frame");d.setAttribute("style","position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
d.style.height=this.height+"px";this._canvasJSContainer.appendChild(d);var b=this,c=d.contentWindow||d.contentDocument.document||d.contentDocument;c.document.open();c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="'+a+'"/><body/></html>');c.document.close();setTimeout(function(){c.focus();c.print();setTimeout(function(){b._canvasJSContainer.removeChild(d)},1E3)},500)};p.prototype.getPercentAndTotal=function(a,d){var b=null,c=null,
e=null;if(0<=a.type.indexOf("stacked"))c=0,b=d.x.getTime?d.x.getTime():d.x,b in a.plotUnit.yTotals&&(c=a.plotUnit.yTotals[b],e=isNaN(d.y)?0:100*(d.y/c));else if("pie"===a.type||"doughnut"===a.type||"funnel"===a.type||"pyramid"===a.type){for(b=c=0;b<a.dataPoints.length;b++)isNaN(a.dataPoints[b].y)||(c+=a.dataPoints[b].y);e=isNaN(d.y)?0:100*(d.y/c)}return{percent:e,total:c}};p.prototype.replaceKeywordsWithValue=function(a,d,b,c,e){var g=this;e="undefined"===typeof e?0:e;if((0<=b.type.indexOf("stacked")||
"pie"===b.type||"doughnut"===b.type||"funnel"===b.type||"pyramid"===b.type)&&(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))){var m="#percent",l="#total",k=this.getPercentAndTotal(b,d),l=isNaN(k.total)?l:k.total,m=isNaN(k.percent)?m:k.percent;do{k="";if(b.percentFormatString)k=b.percentFormatString;else{var k="#,##0.",h=Math.max(Math.ceil(Math.log(1/Math.abs(m))/Math.LN10),2);if(isNaN(h)||!isFinite(h))h=2;for(var s=0;s<h;s++)k+="#";b.percentFormatString=k}a=a.replace("#percent",ba(m,k,g._cultureInfo));
a=a.replace("#total",ba(l,b.yValueFormatString?b.yValueFormatString:"#,##0.########",g._cultureInfo))}while(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))}return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g,function(a){if('"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=Ia(a.slice(1,a.length-1));a=a.replace("#index",e);var h=null;try{var f=a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);f&&0<f.length&&(h=Ia(f[2]),a=Ia(f[1]))}catch(l){}f=null;if("color"===a)return"waterfall"===
b.type?d.color?d.color:0<d.y?b.risingColor:b.fallingColor:"error"===b.type?b.color?b.color:b._colorSet[h%b._colorSet.length]:d.color?d.color:b.color?b.color:b._colorSet[c%b._colorSet.length];if(d.hasOwnProperty(a))f=d;else if(b.hasOwnProperty(a))f=b;else return"";f=f[a];null!==h&&(f=f[h]);if("x"===a)if("dateTime"===b.axisX.valueType||"dateTime"===b.xValueType||d.x&&d.x.getTime){if(g.plotInfo.plotTypes[0].plotUnits[0].axisX&&!g.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic)return Ca(f,d.xValueFormatString?
d.xValueFormatString:b.xValueFormatString?b.xValueFormatString:b.xValueFormatString=g.axisX&&g.axisX.autoValueFormatString?g.axisX.autoValueFormatString:"DD MMM YY",g._cultureInfo)}else return ba(f,d.xValueFormatString?d.xValueFormatString:b.xValueFormatString?b.xValueFormatString:b.xValueFormatString="#,##0.########",g._cultureInfo);else return"y"===a?ba(f,d.yValueFormatString?d.yValueFormatString:b.yValueFormatString?b.yValueFormatString:b.yValueFormatString="#,##0.########",g._cultureInfo):"z"===
a?ba(f,d.zValueFormatString?d.zValueFormatString:b.zValueFormatString?b.zValueFormatString:b.zValueFormatString="#,##0.########",g._cultureInfo):f})};qa(H,V);H.prototype.setLayout=function(){var a=this.dockInsidePlotArea?this.chart.plotArea:this.chart,d=a.layoutManager.getFreeSpace(),b=null,c=0,e=0,g=0,m=0,l=this.markerMargin=this.chart.options.legend&&!u(this.chart.options.legend.markerMargin)?this.chart.options.legend.markerMargin:0.3*this.fontSize;this.height=0;var k=[],h=[];"top"===this.verticalAlign||
"bottom"===this.verticalAlign?(this.orientation="horizontal",b=this.verticalAlign,g=this.maxWidth=null!==this.maxWidth?this.maxWidth:d.width,m=this.maxHeight=null!==this.maxHeight?this.maxHeight:0.5*d.height):"center"===this.verticalAlign&&(this.orientation="vertical",b=this.horizontalAlign,g=this.maxWidth=null!==this.maxWidth?this.maxWidth:0.5*d.width,m=this.maxHeight=null!==this.maxHeight?this.maxHeight:d.height);this.errorMarkerColor=[];for(var s=0;s<this.dataSeries.length;s++){var q=this.dataSeries[s];
if(q.dataPoints&&q.dataPoints.length)if("pie"!==q.type&&"doughnut"!==q.type&&"funnel"!==q.type&&"pyramid"!==q.type){var n=q.legendMarkerType=q.legendMarkerType?q.legendMarkerType:"line"!==q.type&&"stepLine"!==q.type&&"spline"!==q.type&&"scatter"!==q.type&&"bubble"!==q.type||!q.markerType?"error"===q.type&&q._linkedSeries?q._linkedSeries.legendMarkerType?q._linkedSeries.legendMarkerType:F.getDefaultLegendMarker(q._linkedSeries.type):F.getDefaultLegendMarker(q.type):q.markerType,f=q.legendText?q.legendText:
this.itemTextFormatter?this.itemTextFormatter({chart:this.chart,legend:this.options,dataSeries:q,dataPoint:null}):q.name,p=q.legendMarkerColor=q.legendMarkerColor?q.legendMarkerColor:q.markerColor?q.markerColor:"error"===q.type?u(q.whiskerColor)?q._colorSet[0]:q.whiskerColor:q._colorSet[0],r=q.markerSize||"line"!==q.type&&"stepLine"!==q.type&&"spline"!==q.type?0.75*this.lineHeight:0,v=q.legendMarkerBorderColor?q.legendMarkerBorderColor:q.markerBorderColor,t=q.legendMarkerBorderThickness?q.legendMarkerBorderThickness:
q.markerBorderThickness?Math.max(1,Math.round(0.2*r)):0;"error"===q.type&&this.errorMarkerColor.push(p);f=this.chart.replaceKeywordsWithValue(f,q.dataPoints[0],q,s);n={markerType:n,markerColor:p,text:f,textBlock:null,chartType:q.type,markerSize:r,lineColor:q._colorSet[0],dataSeriesIndex:q.index,dataPointIndex:null,markerBorderColor:v,markerBorderThickness:t};k.push(n)}else for(var z=0;z<q.dataPoints.length;z++){var x=q.dataPoints[z],n=x.legendMarkerType?x.legendMarkerType:q.legendMarkerType?q.legendMarkerType:
F.getDefaultLegendMarker(q.type),f=x.legendText?x.legendText:q.legendText?q.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart,legend:this.options,dataSeries:q,dataPoint:x}):x.name?x.name:"DataPoint: "+(z+1),p=x.legendMarkerColor?x.legendMarkerColor:q.legendMarkerColor?q.legendMarkerColor:x.color?x.color:q.color?q.color:q._colorSet[z%q._colorSet.length],r=0.75*this.lineHeight,v=x.legendMarkerBorderColor?x.legendMarkerBorderColor:q.legendMarkerBorderColor?q.legendMarkerBorderColor:
x.markerBorderColor?x.markerBorderColor:q.markerBorderColor,t=x.legendMarkerBorderThickness?x.legendMarkerBorderThickness:q.legendMarkerBorderThickness?q.legendMarkerBorderThickness:x.markerBorderThickness||q.markerBorderThickness?Math.max(1,Math.round(0.2*r)):0,f=this.chart.replaceKeywordsWithValue(f,x,q,z),n={markerType:n,markerColor:p,text:f,textBlock:null,chartType:q.type,markerSize:r,dataSeriesIndex:s,dataPointIndex:z,markerBorderColor:v,markerBorderThickness:t};(x.showInLegend||q.showInLegend&&
!1!==x.showInLegend)&&k.push(n)}}!0===this.reversed&&k.reverse();if(0<k.length){q=null;p=f=x=z=0;x=null!==this.itemWidth?null!==this.itemMaxWidth?Math.min(this.itemWidth,this.itemMaxWidth,g):this.itemMaxWidth=Math.min(this.itemWidth,g):null!==this.itemMaxWidth?Math.min(this.itemMaxWidth,g):this.itemMaxWidth=g;r=0===r?0.75*this.lineHeight:r;x-=r+l;for(s=0;s<k.length;s++){n=k[s];v=x;if("line"===n.chartType||"spline"===n.chartType||"stepLine"===n.chartType)v-=2*0.1*this.lineHeight;if(!(0>=m||"undefined"===
typeof m||0>=v||"undefined"===typeof v)){if("horizontal"===this.orientation){n.textBlock=new ka(this.ctx,{x:0,y:0,maxWidth:v,maxHeight:this.itemWrap?m:this.lineHeight,angle:0,text:n.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"});n.textBlock.measureText();null!==this.itemWidth&&(n.textBlock.width=this.itemWidth-(r+l+("line"===n.chartType||"spline"===n.chartType||"stepLine"===
n.chartType?2*0.1*this.lineHeight:0)));if(!q||q.width+Math.round(n.textBlock.width+r+l+(0===q.width?0:this.horizontalSpacing)+("line"===n.chartType||"spline"===n.chartType||"stepLine"===n.chartType?2*0.1*this.lineHeight:0))>g)q={items:[],width:0},h.push(q),this.height+=f,f=0;f=Math.max(f,n.textBlock.height)}else n.textBlock=new ka(this.ctx,{x:0,y:0,maxWidth:x,maxHeight:!0===this.itemWrap?m:1.5*this.fontSize,angle:0,text:n.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,
fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"}),n.textBlock.measureText(),null!==this.itemWidth&&(n.textBlock.width=this.itemWidth-(r+l+("line"===n.chartType||"spline"===n.chartType||"stepLine"===n.chartType?2*0.1*this.lineHeight:0))),this.height<m-this.lineHeight?(q={items:[],width:0},h.push(q)):(q=h[z],z=(z+1)%h.length),this.height+=n.textBlock.height;n.textBlock.x=q.width;n.textBlock.y=0;q.width+=Math.round(n.textBlock.width+r+l+(0===q.width?
0:this.horizontalSpacing)+("line"===n.chartType||"spline"===n.chartType||"stepLine"===n.chartType?2*0.1*this.lineHeight:0));q.items.push(n);this.width=Math.max(q.width,this.width);p=n.textBlock.width+(r+l+("line"===n.chartType||"spline"===n.chartType||"stepLine"===n.chartType?2*0.1*this.lineHeight:0))}}this.itemWidth=p;this.height=!1===this.itemWrap?h.length*this.lineHeight:this.height+f;this.height=Math.min(m,this.height);this.width=Math.min(g,this.width)}"top"===this.verticalAlign?(e="left"===this.horizontalAlign?
d.x1:"right"===this.horizontalAlign?d.x2-this.width:d.x1+d.width/2-this.width/2,c=d.y1):"center"===this.verticalAlign?(e="left"===this.horizontalAlign?d.x1:"right"===this.horizontalAlign?d.x2-this.width:d.x1+d.width/2-this.width/2,c=d.y1+d.height/2-this.height/2):"bottom"===this.verticalAlign&&(e="left"===this.horizontalAlign?d.x1:"right"===this.horizontalAlign?d.x2-this.width:d.x1+d.width/2-this.width/2,c=d.y2-this.height);this.items=k;for(s=0;s<this.items.length;s++)n=k[s],n.id=++this.chart._eventManager.lastObjectId,
this.chart._eventManager.objectMap[n.id]={id:n.id,objectType:"legendItem",legendItemIndex:s,dataSeriesIndex:n.dataSeriesIndex,dataPointIndex:n.dataPointIndex};this.markerSize=r;this.rows=h;0<k.length&&a.layoutManager.registerSpace(b,{width:this.width+2+2,height:this.height+5+5});this.bounds={x1:e,y1:c,x2:e+this.width,y2:c+this.height}};H.prototype.render=function(){var a=this.bounds.x1,d=this.bounds.y1,b=this.markerMargin,c=this.maxWidth,e=this.maxHeight,g=this.markerSize,m=this.rows;(0<this.borderThickness&&
this.borderColor||this.backgroundColor)&&this.ctx.roundRect(a,d,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);for(var l=0,k=0;k<m.length;k++){for(var h=m[k],s=0,q=0;q<h.items.length;q++){var n=h.items[q],f=n.textBlock.x+a+(0===q?0.2*g:this.horizontalSpacing),p=d+l,u=f;this.chart.data[n.dataSeriesIndex].visible||(this.ctx.globalAlpha=0.5);this.ctx.save();this.ctx.beginPath();this.ctx.rect(a,d,c,Math.max(e-e%this.lineHeight,0));this.ctx.clip();
if("line"===n.chartType||"stepLine"===n.chartType||"spline"===n.chartType)this.ctx.strokeStyle=n.lineColor,this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),this.ctx.moveTo(f-0.1*this.lineHeight,p+this.lineHeight/2),this.ctx.lineTo(f+0.85*this.lineHeight,p+this.lineHeight/2),this.ctx.stroke(),u-=0.1*this.lineHeight;if("error"===n.chartType){this.ctx.strokeStyle=this.errorMarkerColor[0];this.ctx.lineWidth=g/8;this.ctx.beginPath();var r=f-0.08*this.lineHeight+0.1*this.lineHeight,
t=p+0.15*this.lineHeight,v=0.7*this.lineHeight,x=v+0.02*this.lineHeight;this.ctx.moveTo(r,t);this.ctx.lineTo(r+v,t);this.ctx.stroke();this.ctx.beginPath();this.ctx.moveTo(r+v/2,t);this.ctx.lineTo(r+v/2,t+x);this.ctx.stroke();this.ctx.beginPath();this.ctx.moveTo(r,t+x);this.ctx.lineTo(r+v,t+x);this.ctx.stroke();this.errorMarkerColor.shift()}ia.drawMarker(f+g/2,p+this.lineHeight/2,this.ctx,n.markerType,"error"===n.chartType||"line"===n.chartType||"spline"===n.chartType?n.markerSize/2:n.markerSize,n.markerColor,
n.markerBorderColor,n.markerBorderThickness);n.textBlock.x=f+b+g;if("line"===n.chartType||"stepLine"===n.chartType||"spline"===n.chartType)n.textBlock.x+=0.1*this.lineHeight;n.textBlock.y=Math.round(p+this.lineHeight/2);n.textBlock.render(!0);this.ctx.restore();s=0<q?Math.max(s,n.textBlock.height):n.textBlock.height;this.chart.data[n.dataSeriesIndex].visible||(this.ctx.globalAlpha=1);f=N(n.id);this.ghostCtx.fillStyle=f;this.ghostCtx.beginPath();this.ghostCtx.fillRect(u,n.textBlock.y-this.lineHeight/
2,n.textBlock.x+n.textBlock.width-u,n.textBlock.height);n.x1=this.chart._eventManager.objectMap[n.id].x1=u;n.y1=this.chart._eventManager.objectMap[n.id].y1=n.textBlock.y-this.lineHeight/2;n.x2=this.chart._eventManager.objectMap[n.id].x2=n.textBlock.x+n.textBlock.width;n.y2=this.chart._eventManager.objectMap[n.id].y2=n.textBlock.y+n.textBlock.height-this.lineHeight/2}l+=s}};qa(F,V);F.prototype.getDefaultAxisPlacement=function(){var a=this.type;if("column"===a||"line"===a||"stepLine"===a||"spline"===
a||"area"===a||"stepArea"===a||"splineArea"===a||"stackedColumn"===a||"stackedLine"===a||"bubble"===a||"scatter"===a||"stackedArea"===a||"stackedColumn100"===a||"stackedLine100"===a||"stackedArea100"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeArea"===a||"rangeSplineArea"===a||"boxAndWhisker"===a||"waterfall"===a)return"normal";if("bar"===a||"stackedBar"===a||"stackedBar100"===a||"rangeBar"===a)return"xySwapped";if("pie"===a||"doughnut"===a||"funnel"===a||"pyramid"===a)return"none";
"error"!==a&&window.console.log("Unknown Chart Type: "+a);return null};F.getDefaultLegendMarker=function(a){if("column"===a||"stackedColumn"===a||"stackedLine"===a||"bar"===a||"stackedBar"===a||"stackedBar100"===a||"bubble"===a||"scatter"===a||"stackedColumn100"===a||"stackedLine100"===a||"stepArea"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeBar"===a||"rangeArea"===a||"rangeSplineArea"===a||"boxAndWhisker"===a||"waterfall"===a)return"square";if("line"===a||"stepLine"===a||"spline"===
a||"pie"===a||"doughnut"===a)return"circle";if("area"===a||"splineArea"===a||"stackedArea"===a||"stackedArea100"===a||"funnel"===a||"pyramid"===a)return"triangle";if("error"===a)return"none";window.console.log("Unknown Chart Type: "+a);return null};F.prototype.getDataPointAtX=function(a,d){if(!this.dataPoints||0===this.dataPoints.length)return null;var b={dataPoint:null,distance:Infinity,index:NaN},c=null,e=0,g=0,m=1,l=Infinity,k=0,h=0,s=0;"none"!==this.chart.plotInfo.axisPlacement&&(this.axisX.logarithmic?
(s=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),s=1<s?Math.min(Math.max((this.dataPoints.length-1)/s*Math.log(a/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0):(s=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,s=0<s?Math.min(Math.max((this.dataPoints.length-1)/s*(a-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0));for(;;){g=0<m?s+e:s-e;if(0<=g&&g<this.dataPoints.length){var c=this.dataPoints[g],q=this.axisX.logarithmic?c.x>a?c.x/a:a/c.x:
Math.abs(c.x-a);q<b.distance&&(b.dataPoint=c,b.distance=q,b.index=g);c=q;c<=l?l=c:0<m?k++:h++;if(1E3<k&&1E3<h)break}else if(0>s-e&&s+e>=this.dataPoints.length)break;-1===m?(e++,m=1):m=-1}return d||b.dataPoint.x!==a?d&&null!==b.dataPoint?b:null:b};F.prototype.getDataPointAtXY=function(a,d,b){if(!this.dataPoints||0===this.dataPoints.length||a<this.chart.plotArea.x1||a>this.chart.plotArea.x2||d<this.chart.plotArea.y1||d>this.chart.plotArea.y2)return null;b=b||!1;var c=[],e=0,g=0,m=1,l=!1,k=Infinity,
h=0,s=0,q=0;if("none"!==this.chart.plotInfo.axisPlacement)if(q=(this.chart.axisX[0]?this.chart.axisX[0]:this.chart.axisX2[0]).getXValueAt({x:a,y:d}),this.axisX.logarithmic)var n=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),q=1<n?Math.min(Math.max((this.dataPoints.length-1)/n*Math.log(q/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0;else n=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,q=0<n?Math.min(Math.max((this.dataPoints.length-1)/n*(q-this.dataPoints[0].x)>>
0,0),this.dataPoints.length):0;for(;;){g=0<m?q+e:q-e;if(0<=g&&g<this.dataPoints.length){var n=this.chart._eventManager.objectMap[this.dataPointIds[g]],f=this.dataPoints[g],p=null;if(n){switch(this.type){case "column":case "stackedColumn":case "stackedColumn100":case "bar":case "stackedBar":case "stackedBar100":case "rangeColumn":case "rangeBar":case "waterfall":case "error":a>=n.x1&&(a<=n.x2&&d>=n.y1&&d<=n.y2)&&(c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-
a),Math.abs(n.x2-a),Math.abs(n.y1-d),Math.abs(n.y2-d))}),l=!0);break;case "line":case "stepLine":case "spline":case "area":case "stepArea":case "stackedArea":case "stackedArea100":case "splineArea":case "scatter":var u=na("markerSize",f,this)||4,r=b?20:u,p=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-d,2));p<=r&&c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:p});n=Math.abs(n.x1-a);n<=k?k=n:0<m?h++:s++;p<=u/2&&(l=!0);break;case "rangeArea":case "rangeSplineArea":u=na("markerSize",f,this)||
4;r=b?20:u;p=Math.min(Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-d,2)),Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y2-d,2)));p<=r&&c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:p});n=Math.abs(n.x1-a);n<=k?k=n:0<m?h++:s++;p<=u/2&&(l=!0);break;case "bubble":u=n.size;p=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-d,2));p<=u/2&&(c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:p}),l=!0);break;case "pie":case "doughnut":u=n.center;r="doughnut"===this.type?n.percentInnerRadius*n.radius:
0;p=Math.sqrt(Math.pow(u.x-a,2)+Math.pow(u.y-d,2));p<n.radius&&p>r&&(p=Math.atan2(d-u.y,a-u.x),0>p&&(p+=2*Math.PI),p=Number(((180*(p/Math.PI)%360+360)%360).toFixed(12)),u=Number(((180*(n.startAngle/Math.PI)%360+360)%360).toFixed(12)),r=Number(((180*(n.endAngle/Math.PI)%360+360)%360).toFixed(12)),0===r&&1<n.endAngle&&(r=360),u>=r&&0!==f.y&&(r+=360,p<u&&(p+=360)),p>u&&p<r&&(c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:0}),l=!0));break;case "funnel":case "pyramid":p=n.funnelSection;
d>p.y1&&d<p.y4&&(p.y6?d>p.y6?(g=p.x6+(p.x5-p.x6)/(p.y5-p.y6)*(d-p.y6),p=p.x3+(p.x4-p.x3)/(p.y4-p.y3)*(d-p.y3)):(g=p.x1+(p.x6-p.x1)/(p.y6-p.y1)*(d-p.y1),p=p.x2+(p.x3-p.x2)/(p.y3-p.y2)*(d-p.y2)):(g=p.x1+(p.x4-p.x1)/(p.y4-p.y1)*(d-p.y1),p=p.x2+(p.x3-p.x2)/(p.y3-p.y2)*(d-p.y2)),a>g&&a<p&&(c.push({dataPoint:f,dataPointIndex:n.dataPointIndex,dataSeries:this,distance:0}),l=!0));break;case "boxAndWhisker":if(a>=n.x1-n.borderThickness/2&&a<=n.x2+n.borderThickness/2&&d>=n.y4-n.borderThickness/2&&d<=n.y1+n.borderThickness/
2||Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&d>=n.y1&&d<=n.y4)c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y2-d),Math.abs(n.y3-d))}),l=!0;break;case "candlestick":if(a>=n.x1-n.borderThickness/2&&a<=n.x2+n.borderThickness/2&&d>=n.y2-n.borderThickness/2&&d<=n.y3+n.borderThickness/2||Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&d>=n.y1&&d<=n.y4)c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),
Math.abs(n.x2-a),Math.abs(n.y2-d),Math.abs(n.y3-d))}),l=!0;break;case "ohlc":if(Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&d>=n.y2&&d<=n.y3||a>=n.x1&&a<=(n.x2+n.x1)/2&&d>=n.y1-n.borderThickness/2&&d<=n.y1+n.borderThickness/2||a>=(n.x1+n.x2)/2&&a<=n.x2&&d>=n.y4-n.borderThickness/2&&d<=n.y4+n.borderThickness/2)c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y2-d),Math.abs(n.y3-d))}),l=!0}if(l||1E3<h&&1E3<s)break}}else if(0>q-e&&q+e>=
this.dataPoints.length)break;-1===m?(e++,m=1):m=-1}a=null;for(d=0;d<c.length;d++)a?c[d].distance<=a.distance&&(a=c[d]):a=c[d];return a};F.prototype.getMarkerProperties=function(a,d,b,c){var e=this.dataPoints;return{x:d,y:b,ctx:c,type:e[a].markerType?e[a].markerType:this.markerType,size:e[a].markerSize?e[a].markerSize:this.markerSize,color:e[a].markerColor?e[a].markerColor:this.markerColor?this.markerColor:e[a].color?e[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length],borderColor:e[a].markerBorderColor?
e[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:e[a].markerBorderThickness?e[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:null}};qa(z,V);z.prototype.createExtraLabelsForLog=function(a){a=(a||0)+1;if(!(5<a)){var d=this.logLabelValues[0]||this.intervalStartPosition;if(Math.log(this.range)/Math.log(d/this.viewportMinimum)<this.noTicks-1){for(var b=z.getNiceNumber((d-this.viewportMinimum)/Math.min(Math.max(2,this.noTicks-this.logLabelValues.length),
3),!0),c=Math.ceil(this.viewportMinimum/b)*b;c<d;c+=b)c<this.viewportMinimum||this.logLabelValues.push(c);this.logLabelValues.sort(Sa);this.createExtraLabelsForLog(a)}}};z.prototype.createLabels=function(){var a,d,b=0,c=0,e,g=0,m=0,c=0,c=this.interval,l=0,k,h=0.6*this.chart.height,p;a=!1;var q=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],n=q.length?u(this.scaleBreaks.firstBreakIndex)?0:this.scaleBreaks.firstBreakIndex:0;if("axisX"!==this.type||"dateTime"!==this.valueType||this.logarithmic){e=
this.viewportMaximum;if(this.labels){a=Math.ceil(c);for(var c=Math.ceil(this.intervalStartPosition),f=!1,b=c;b<this.viewportMaximum;b+=a)if(this.labels[b])f=!0;else{f=!1;break}f&&(this.interval=a,this.intervalStartPosition=c)}if(this.logarithmic&&!this.equidistantInterval)for(this.logLabelValues||(this.logLabelValues=[],this.createExtraLabelsForLog()),c=0,f=n;c<this.logLabelValues.length;c++)if(b=this.logLabelValues[c],b<this.viewportMinimum)c++;else{for(;f<q.length&&b>q[f].endValue;f++);a=f<q.length&&
b>=q[f].startValue&&b<=q[f].endValue;p=b;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:p,label:this.labels[p]?this.labels[p]:null}):"axisX"===this.type&&this.labels[p]?this.labels[p]:ba(p,this.valueFormatString,this.chart._cultureInfo),a=new ka(this.ctx,{x:0,y:0,maxWidth:g,maxHeight:m,angle:this.labelAngle,text:this.prefix+a+this.suffix,backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,
horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:p,textBlock:a,effectiveHeight:null}))}f=n;for(b=this.intervalStartPosition;b<=e;b=parseFloat(1E-12>this.interval?this.logarithmic&&this.equidistantInterval?b*Math.pow(this.logarithmBase,this.interval):b+this.interval:(this.logarithmic&&this.equidistantInterval?
b*Math.pow(this.logarithmBase,this.interval):b+this.interval).toFixed(12))){for(;f<q.length&&b>q[f].endValue;f++);a=f<q.length&&b>=q[f].startValue&&b<=q[f].endValue;p=b;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:p,label:this.labels[p]?this.labels[p]:null}):"axisX"===this.type&&this.labels[p]?this.labels[p]:ba(p,this.valueFormatString,this.chart._cultureInfo),a=new ka(this.ctx,{x:0,y:0,maxWidth:g,maxHeight:m,angle:this.labelAngle,text:this.prefix+a+this.suffix,
horizontalAlign:"left",backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:p,textBlock:a,effectiveHeight:null}))}}else for(this.intervalStartPosition=this.getLabelStartPoint(new Date(this.viewportMinimum),
this.intervalType,this.interval),e=Ya(new Date(this.viewportMaximum),this.interval,this.intervalType),f=n,b=this.intervalStartPosition;b<e;Ya(b,c,this.intervalType)){for(a=b.getTime();f<q.length&&a>q[f].endValue;f++);p=a;a=f<q.length&&a>=q[f].startValue&&a<=q[f].endValue;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:new Date(p),label:this.labels[p]?this.labels[p]:null}):"axisX"===this.type&&this.labels[p]?this.labels[p]:Ca(p,this.valueFormatString,this.chart._cultureInfo),
a=new ka(this.ctx,{x:0,y:0,maxWidth:g,backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,maxHeight:m,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:p,textBlock:a,effectiveHeight:null,
breaksLabelType:void 0}))}if("bottom"===this._position||"top"===this._position)l=this.logarithmic&&!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.width*Math.log(Math.min(this._labels[this._labels.length-1].position/this._labels[this._labels.length-2].position,this._labels[1].position/this._labels[0].position))/Math.log(this.range):this.lineCoordinates.width/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/Math.log(this.logarithmBase):Math.abs(this.range))*S[this.intervalType+
"Duration"]*this.interval,g="undefined"===typeof this.options.labelMaxWidth?0.5*this.chart.width>>0:this.options.labelMaxWidth,this.chart.panEnabled||(m="undefined"===typeof this.options.labelWrap||this.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize);else if("left"===this._position||"right"===this._position)l=this.logarithmic&&!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.height*Math.log(Math.min(this._labels[this._labels.length-1].position/this._labels[this._labels.length-
2].position,this._labels[1].position/this._labels[0].position))/Math.log(this.range):this.lineCoordinates.height/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/Math.log(this.logarithmBase):Math.abs(this.range))*S[this.intervalType+"Duration"]*this.interval,this.chart.panEnabled||(g="undefined"===typeof this.options.labelMaxWidth?0.3*this.chart.width>>0:this.options.labelMaxWidth),m="undefined"===typeof this.options.labelWrap||this.labelWrap?0.3*this.chart.height>>0:1.5*this.labelFontSize;
for(c=0;c<this._labels.length;c++){a=this._labels[c].textBlock;a.maxWidth=g;a.maxHeight=m;var B=a.measureText();k=B.height}e=[];n=q=0;if(this.labelAutoFit||this.options.labelAutoFit)if(u(this.labelAngle)||(this.labelAngle=(this.labelAngle%360+360)%360,90<this.labelAngle&&270>this.labelAngle?this.labelAngle-=180:270<=this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360)),"bottom"===this._position||"top"===this._position)if(g=0.9*l>>0,n=0,!this.chart.panEnabled&&1<=this._labels.length){this.sessionVariables.labelFontSize=
this.labelFontSize;this.sessionVariables.labelMaxWidth=g;this.sessionVariables.labelMaxHeight=m;this.sessionVariables.labelAngle=this.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;for(var v,f=a.text.split(" "),c=0;c<f.length;c++)p=f[c],this.ctx.font=a.fontStyle+" "+a.fontWeight+" "+a.fontSize+"px "+a.fontFamily,p=this.ctx.measureText(p),p.width>n&&(v=b,n=p.width)}b=0;for(b=this.intervalStartPosition<
this.viewportMinimum?1:0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;B=a.measureText();for(f=b+1;f<this._labels.length;f++)if(!this._labels[f].breaksLabelType){d=this._labels[f].textBlock;d=d.measureText();break}e.push(a.height);this.sessionVariables.labelMaxHeight=Math.max.apply(Math,e);Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.sin(Math.PI/180*Math.abs(this.labelAngle));c=g*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(m-a.fontSize/2)*
Math.cos(Math.PI/180*Math.abs(this.labelAngle));if(u(this.options.labelAngle)&&isNaN(this.options.labelAngle)&&0!==this.options.labelAngle)if(this.sessionVariables.labelMaxHeight=0===this.labelAngle?m:Math.min((c-g*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)),c),p=(h-(k+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(-25)))/Math.sin(Math.PI/180*Math.abs(-25)),!u(this.options.labelWrap))this.labelWrap?u(this.options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=
Math.min(Math.max(g,n),p),this.sessionVariables.labelWrap=this.labelWrap,B.width+d.width>>0>2*g&&(this.sessionVariables.labelAngle=-25)):(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>g?-25:this.sessionVariables.labelAngle):u(this.options.labelMaxWidth)?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelMaxWidth=
g,B.width+d.width>>0>2*g&&(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=p)):(this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>g?-25:this.sessionVariables.labelAngle,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelWrap=this.labelWrap);else{if(u(this.options.labelWrap))if(!u(this.options.labelMaxWidth))this.options.labelMaxWidth<g?(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,
this.sessionVariables.labelMaxHeight=c):(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=m);else if(!u(d))if(c=B.width+d.width>>0,f=this.labelFontSize,n<g)c-2*g>q&&(q=c-2*g,c>=2*g&&c<2.2*g?(this.sessionVariables.labelMaxWidth=g,u(this.options.labelFontSize)&&12<f&&(f=Math.floor(12/13*f),a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?f:this.options.labelFontSize,this.sessionVariables.labelAngle=
this.labelAngle):c>=2.2*g&&c<2.8*g?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=p,this.sessionVariables.labelFontSize=f):c>=2.8*g&&c<3.2*g?(this.sessionVariables.labelMaxWidth=Math.max(g,n),this.sessionVariables.labelWrap=!0,u(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?f:this.options.labelFontSize,this.sessionVariables.labelAngle=
this.labelAngle):c>=3.2*g&&c<3.6*g?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=p,this.sessionVariables.labelFontSize=this.labelFontSize):c>3.6*g&&c<5*g?(u(this.options.labelFontSize)&&12<f&&(f=Math.floor(12/13*f),a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?f:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=p):
c>5*g&&(this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelFontSize=f,this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelAngle=this.labelAngle));else if(v===b&&(0===v&&n+this._labels[v+1].textBlock.measureText().width-2*g>q||v===this._labels.length-1&&n+this._labels[v-1].textBlock.measureText().width-2*g>q||0<v&&v<this._labels.length-1&&n+this._labels[v+1].textBlock.measureText().width-2*g>q&&n+this._labels[v-1].textBlock.measureText().width-
2*g>q))q=0===v?n+this._labels[v+1].textBlock.measureText().width-2*g:n+this._labels[v-1].textBlock.measureText().width-2*g,this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?f:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=p;else if(0===q)for(this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?f:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,c=0;c<this._labels.length;c++)a=
this._labels[c].textBlock,a.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,n),p),B=a.measureText(),c<this._labels.length-1&&(f=c+1,d=this._labels[f].textBlock,d.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,n),p),d=d.measureText(),B.width+d.width>>0>2*g&&(this.sessionVariables.labelAngle=-25))}else(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxHeight=0===this.labelAngle?m:Math.min((c-g*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/
Math.sin(Math.PI/180*Math.abs(this.labelAngle)),c),p=0!=this.labelAngle?(h-(k+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)):g,this.sessionVariables.labelMaxHeight=m=this.labelWrap?(h-p*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)):1.5*this.labelFontSize,u(this.options.labelWrap))?u(this.options.labelWrap)&&(this.labelWrap&&!u(this.options.labelMaxWidth)?(this.sessionVariables.labelWrap=
this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:p,this.sessionVariables.labelMaxHeight=m):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxWidth=p,this.sessionVariables.labelMaxHeight=c<0.9*l?0.9*l:c,this.sessionVariables.labelWrap=this.labelWrap)):(this.options.labelWrap?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:p):
(u(this.options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:p,this.sessionVariables.labelWrap=this.labelWrap),this.sessionVariables.labelMaxHeight=m)}for(c=0;c<this._labels.length;c++)a=this._labels[c].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=
this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=u(this.options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this.options.labelMaxWidth,a.fontSize=this.labelFontSize=u(this.options.labelFontSize)?this.sessionVariables.labelFontSize:this.options.labelFontSize,a.angle=this.labelAngle=u(this.options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=u(this.options.labelWrap)?
this.sessionVariables.labelWrap:this.options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();else if("left"===this._position||"right"===this._position)if(g=u(this.options.labelMaxWidth)?0.3*this.chart.width>>0:this.options.labelMaxWidth,m="undefined"===typeof this.options.labelWrap||this.labelWrap?0.3*this.chart.height>>0:1.5*this.labelFontSize,!this.chart.panEnabled&&1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=
g;this.sessionVariables.labelMaxHeight=m;this.sessionVariables.labelAngle=u(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;B=a.measureText();for(f=b+1;f<this._labels.length;f++)if(!this._labels[f].breaksLabelType){d=this._labels[f].textBlock;d=d.measureText();break}e.push(a.height);this.sessionVariables.labelMaxHeight=Math.max.apply(Math,
e);c=g*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(m-a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.sin(Math.PI/180*Math.abs(this.labelAngle));u(this.options.labelAngle)&&isNaN(this.options.labelAngle)&&0!==this.options.labelAngle?u(this.options.labelWrap)?u(this.options.labelWrap)&&(u(this.options.labelMaxWidth)?u(d)||(l=B.height+d.height>>0,l-2*m>n&&(n=l-2*m,l>=2*m&&l<2.4*m?(u(this.options.labelFontSize)&&12<this.labelFontSize&&
(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize):l>=2.4*m&&l<2.8*m?(this.sessionVariables.labelMaxHeight=c,this.sessionVariables.labelFontSize=this.labelFontSize,this.sessionVariables.labelWrap=!0):l>=2.8*m&&l<3.2*m?(this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelWrap=!0,u(this.options.labelFontSize)&&12<
this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelAngle=u(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):l>=3.2*m&&l<3.6*m?(this.sessionVariables.labelMaxHeight=c,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelFontSize=this.labelFontSize):l>3.6*m&&l<10*m?(u(this.options.labelFontSize)&&
12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelAngle=u(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):l>10*m&&l<50*m&&(u(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),
a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelAngle=u(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle))):(this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth)):(this.sessionVariables.labelMaxWidth=
this.labelWrap?this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth:this.labelMaxWidth?this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth:g,this.sessionVariables.labelMaxHeight=m):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxWidth=0===this.labelAngle?g:Math.min((c-m*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)),m),u(this.options.labelWrap))?
u(this.options.labelWrap)&&(this.labelWrap&&!u(this.options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth>this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=c):(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:g,this.sessionVariables.labelMaxHeight=0===this.labelAngle?m:c,u(this.options.labelMaxWidth)&&
(this.sessionVariables.labelAngle=this.labelAngle))):this.options.labelWrap?(this.sessionVariables.labelMaxHeight=0===this.labelAngle?m:c,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=g):(this.sessionVariables.labelMaxHeight=m,u(this.options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap)}for(c=0;c<this._labels.length;c++)a=
this._labels[c].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.labelFontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=u(this.options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this.options.labelMaxWidth,
a.fontSize=this.labelFontSize=u(this.options.labelFontSize)?this.sessionVariables.labelFontSize:this.options.labelFontSize,a.angle=this.labelAngle=u(this.options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=u(this.options.labelWrap)?this.sessionVariables.labelWrap:this.options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();for(b=0;b<this.stripLines.length;b++){var g=this.stripLines[b],z;if("outside"===g.labelPlacement){m=this.sessionVariables.labelMaxWidth;
if("bottom"===this._position||"top"===this._position)z=u(g.options.labelWrap)?this.sessionVariables.labelMaxHeight:g.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize;if("left"===this._position||"right"===this._position)z=u(g.options.labelWrap)?this.sessionVariables.labelMaxHeight:g.labelWrap?0.8*this.chart.width>>0:1.5*this.labelFontSize;u(g.labelBackgroundColor)&&(g.labelBackgroundColor="#EEEEEE")}else m="bottom"===this._position||"top"===this._position?0.9*this.chart.width>>0:0.9*this.chart.height>>
0,z=u(g.options.labelWrap)||g.labelWrap?"bottom"===this._position||"top"===this._position?0.8*this.chart.width>>0:0.8*this.chart.height>>0:1.5*this.labelFontSize,u(g.labelBackgroundColor)&&(u(g.startValue)&&0!==g.startValue?g.labelBackgroundColor=r?"transparent":null:g.labelBackgroundColor="#EEEEEE");a=new ka(this.ctx,{x:0,y:0,backgroundColor:g.labelBackgroundColor,borderColor:g.labelBorderColor,borderThickness:g.labelBorderThickness,cornerRadius:g.labelCornerRadius,maxWidth:g.options.labelMaxWidth?
g.options.labelMaxWidth:m,maxHeight:z,angle:this.labelAngle,text:g.labelFormatter?g.labelFormatter({chart:this.chart,axis:this,stripLine:g}):g.label,horizontalAlign:"left",fontSize:"outside"===g.labelPlacement?g.options.labelFontSize?g.labelFontSize:this.labelFontSize:g.labelFontSize,fontFamily:"outside"===g.labelPlacement?g.options.labelFontFamily?g.labelFontFamily:this.labelFontFamily:g.labelFontFamily,fontWeight:"outside"===g.labelPlacement?g.options.labelFontWeight?g.labelFontWeight:this.labelFontWeight:
g.labelFontWeight,fontColor:g.labelFontColor||g.color,fontStyle:"outside"===g.labelPlacement?g.options.labelFontStyle?g.labelFontStyle:this.fontWeight:g.labelFontStyle,textBaseline:"middle"});this._stripLineLabels.push({position:g.value,textBlock:a,effectiveHeight:null,stripLine:g})}};z.prototype.createLabelsAndCalculateWidth=function(){var a=0,d=0;this._labels=[];this._stripLineLabels=[];var b=this.chart.isNavigator?0:5;if("left"===this._position||"right"===this._position){this.createLabels();for(d=
0;d<this._labels.length;d++){var c=this._labels[d].textBlock,e=c.measureText(),g=0,g=0===this.labelAngle?e.width:e.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(e.height-c.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle));a<g&&(a=g);this._labels[d].effectiveWidth=g}for(d=0;d<this._stripLineLabels.length;d++)"outside"===this._stripLineLabels[d].stripLine.labelPlacement&&(this._stripLineLabels[d].stripLine.value>=this.viewportMinimum&&this._stripLineLabels[d].stripLine.value<=this.viewportMaximum)&&
(c=this._stripLineLabels[d].textBlock,e=c.measureText(),g=0===this.labelAngle?e.width:e.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(e.height-c.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle)),a<g&&(a=g),this._stripLineLabels[d].effectiveWidth=g)}d=this.title?this._titleTextBlock.measureText().height+2:0;return c="inside"===this.labelPlacement?c=d+b:d+a+this.tickLength+b};z.prototype.createLabelsAndCalculateHeight=function(){var a=0;this._labels=[];this._stripLineLabels=[];var d,
b=0,c=this.chart.isNavigator?0:5;this.createLabels();if("bottom"===this._position||"top"===this._position){for(b=0;b<this._labels.length;b++){d=this._labels[b].textBlock;var e=d.measureText(),g=0,g=0===this.labelAngle?e.height:e.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(e.height-d.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<g&&(a=g);this._labels[b].effectiveHeight=g}for(b=0;b<this._stripLineLabels.length;b++)"outside"===this._stripLineLabels[b].stripLine.labelPlacement&&
(this._stripLineLabels[b].stripLine.value>=this.viewportMinimum&&this._stripLineLabels[b].stripLine.value<=this.viewportMaximum)&&(d=this._stripLineLabels[b].textBlock,e=d.measureText(),g=0===this.labelAngle?e.height:e.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(e.height-d.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),a<g&&(a=g),this._stripLineLabels[b].effectiveHeight=g)}d=this.title?this._titleTextBlock.measureText().height+2:0;return b="inside"===this.labelPlacement?b=
d+c:d+a+this.tickLength+c};z.setLayout=function(a,d,b,c,e,g){var m,l,k,h,p=a[0]?a[0].chart:d[0].chart,q=p.isNavigator?0:10,n=p._axes;if(a&&0<a.length)for(var f=0;f<a.length;f++)a[f]&&a[f].calculateAxisParameters();if(d&&0<d.length)for(f=0;f<d.length;f++)d[f].calculateAxisParameters();if(b&&0<b.length)for(f=0;f<b.length;f++)b[f].calculateAxisParameters();if(c&&0<c.length)for(f=0;f<c.length;f++)c[f].calculateAxisParameters();for(f=0;f<n.length;f++)if(n[f]&&n[f].scaleBreaks&&n[f].scaleBreaks._appliedBreaks.length)for(var r=
n[f].scaleBreaks._appliedBreaks,v=0;v<r.length&&!(r[v].startValue>n[f].viewportMaximum);v++)r[v].endValue<n[f].viewportMinimum||(u(n[f].scaleBreaks.firstBreakIndex)&&(n[f].scaleBreaks.firstBreakIndex=v),r[v].startValue>=n[f].viewPortMinimum&&(n[f].scaleBreaks.lastBreakIndex=v));for(var z=v=0,t=0,C=0,x=0,D=0,y=0,A,E,F=l=0,H,I,L,r=H=I=L=!1,f=0;f<n.length;f++)n[f]&&n[f].title&&(n[f]._titleTextBlock=new ka(n[f].ctx,{text:n[f].title,horizontalAlign:"center",fontSize:n[f].titleFontSize,fontFamily:n[f].titleFontFamily,
fontWeight:n[f].titleFontWeight,fontColor:n[f].titleFontColor,fontStyle:n[f].titleFontStyle,borderColor:n[f].titleBorderColor,borderThickness:n[f].titleBorderThickness,backgroundColor:n[f].titleBackgroundColor,cornerRadius:n[f].titleCornerRadius,textBaseline:"top"}));for(f=0;f<n.length;f++)if(n[f].title)switch(n[f]._position){case "left":n[f]._titleTextBlock.maxWidth=n[f].titleMaxWidth||g.height;n[f]._titleTextBlock.maxHeight=n[f].titleWrap?0.8*g.width:1.5*n[f].titleFontSize;n[f]._titleTextBlock.angle=
-90;break;case "right":n[f]._titleTextBlock.maxWidth=n[f].titleMaxWidth||g.height;n[f]._titleTextBlock.maxHeight=n[f].titleWrap?0.8*g.width:1.5*n[f].titleFontSize;n[f]._titleTextBlock.angle=90;break;default:n[f]._titleTextBlock.maxWidth=n[f].titleMaxWidth||g.width,n[f]._titleTextBlock.maxHeight=n[f].titleWrap?0.8*g.height:1.5*n[f].titleFontSize,n[f]._titleTextBlock.angle=0}if("normal"===e){for(var C=[],x=[],D=[],y=[],M=[],N=[],O=[],Q=[];4>v;){var G=0,R=0,S=0,U=0,W=e=0,K=0,$=0,V=0,X=0,P=0,ba=0;if(b&&
0<b.length)for(D=[],f=P=0;f<b.length;f++)D.push(Math.ceil(b[f]?b[f].createLabelsAndCalculateWidth():0)),P+=D[f],K+=b[f]&&!p.isNavigator?b[f].margin:0;else D.push(Math.ceil(b[0]?b[0].createLabelsAndCalculateWidth():0));O.push(D);if(c&&0<c.length)for(y=[],f=ba=0;f<c.length;f++)y.push(Math.ceil(c[f]?c[f].createLabelsAndCalculateWidth():0)),ba+=y[f],$+=c[f]?c[f].margin:0;else y.push(Math.ceil(c[0]?c[0].createLabelsAndCalculateWidth():0));Q.push(y);m=Math.round(g.x1+P+K);k=Math.round(g.x2-ba-$>p.width-
q?p.width-q:g.x2-ba-$);if(a&&0<a.length)for(C=[],f=V=0;f<a.length;f++)a[f]&&(a[f].lineCoordinates={}),a[f].lineCoordinates.width=Math.abs(k-m),a[f].title&&(a[f]._titleTextBlock.maxWidth=0<a[f].titleMaxWidth&&a[f].titleMaxWidth<a[f].lineCoordinates.width?a[f].titleMaxWidth:a[f].lineCoordinates.width),C.push(Math.ceil(a[f]?a[f].createLabelsAndCalculateHeight():0)),V+=C[f],e+=a[f]&&!p.isNavigator?a[f].margin:0;else C.push(Math.ceil(a[0]?a[0].createLabelsAndCalculateHeight():0));M.push(C);if(d&&0<d.length)for(x=
[],f=X=0;f<d.length;f++)d[f]&&(d[f].lineCoordinates={}),d[f].lineCoordinates.width=Math.abs(k-m),d[f].title&&(d[f]._titleTextBlock.maxWidth=0<d[f].titleMaxWidth&&d[f].titleMaxWidth<d[f].lineCoordinates.width?d[f].titleMaxWidth:d[f].lineCoordinates.width),x.push(Math.ceil(d[f]?d[f].createLabelsAndCalculateHeight():0)),X+=x[f],W+=d[f]&&!p.isNavigator?d[f].margin:0;else x.push(Math.ceil(d[0]?d[0].createLabelsAndCalculateHeight():0));N.push(x);if(a&&0<a.length)for(f=0;f<a.length;f++)a[f]&&(a[f].lineCoordinates.x1=
m,k=Math.round(g.x2-ba-$>p.width-q?p.width-q:g.x2-ba-$),a[f]._labels&&1<a[f]._labels.length&&(l=h=0,h=a[f]._labels[1],l="dateTime"===a[f].valueType?a[f]._labels[a[f]._labels.length-2]:a[f]._labels[a[f]._labels.length-1],z=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),t=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/
180*Math.abs(l.textBlock.angle))),!a[f]||(!a[f].labelAutoFit||u(A)||u(E)||p.isNavigator)||(l=0,0<a[f].labelAngle?E+t>k&&(l+=0<a[f].labelAngle?E+t-k-ba:0):0>a[f].labelAngle?A-z<m&&A-z<a[f].viewportMinimum&&(F=m-(K+a[f].tickLength+D+A-z+a[f].labelFontSize/2)):0===a[f].labelAngle&&(E+t>k&&(l=E+t/2-k-ba),A-z<m&&A-z<a[f].viewportMinimum&&(F=m-K-a[f].tickLength-D-A+z/2)),a[f].viewportMaximum===a[f].maximum&&a[f].viewportMinimum===a[f].minimum&&0<a[f].labelAngle&&0<l?k-=l:a[f].viewportMaximum===a[f].maximum&&
a[f].viewportMinimum===a[f].minimum&&0>a[f].labelAngle&&0<F?m+=F:a[f].viewportMaximum===a[f].maximum&&a[f].viewportMinimum===a[f].minimum&&0===a[f].labelAngle&&(0<F&&(m+=F),0<l&&(k-=l))),p.panEnabled?V=p.sessionVariables.axisX.height:p.sessionVariables.axisX.height=V,l=Math.round(g.y2-V-e+G),h=Math.round(g.y2),a[f].lineCoordinates.x2=k,a[f].lineCoordinates.width=k-m,a[f].lineCoordinates.y1=l,a[f].lineCoordinates.y2=l,a[f].bounds={x1:m,y1:l,x2:k,y2:h-(V+e-C[f]-G),width:k-m,height:h-l}),G+=C[f]+a[f].margin;
if(d&&0<d.length)for(f=0;f<d.length;f++)d[f].lineCoordinates.x1=Math.round(g.x1+P+K),d[f].lineCoordinates.x2=Math.round(g.x2-ba-$>p.width-q?p.width-q:g.x2-ba-$),d[f].lineCoordinates.width=Math.abs(k-m),d[f]._labels&&1<d[f]._labels.length&&(h=d[f]._labels[1],l="dateTime"===d[f].valueType?d[f]._labels[d[f]._labels.length-2]:d[f]._labels[d[f]._labels.length-1],z=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),
t=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle))),p.panEnabled?X=p.sessionVariables.axisX2.height:p.sessionVariables.axisX2.height=X,l=Math.round(g.y1),h=Math.round(g.y2+d[f].margin),d[f].lineCoordinates.y1=l+X+W-R,d[f].lineCoordinates.y2=l,d[f].bounds={x1:m,y1:l+(X+W-x[f]-R),x2:k,y2:h,width:k-m,height:h-l},R+=x[f]+d[f].margin;if(b&&0<b.length)for(f=0;f<b.length;f++)K=p.isNavigator?0:
10,b[f]&&(m=Math.round(a[0]?a[0].lineCoordinates.x1:d[0].lineCoordinates.x1),K=b[f]._labels&&0<b[f]._labels.length?b[f]._labels[b[f]._labels.length-1].textBlock.height/2:q,l=Math.round(g.y1+X+W<Math.max(K,q)?Math.max(K,q):g.y1+X+W),k=Math.round(a[0]?a[0].lineCoordinates.x1:d[0].lineCoordinates.x1),K=0<a.length?0:b[f]._labels&&0<b[f]._labels.length?b[f]._labels[0].textBlock.height/2:q,h=Math.round(g.y2-V-e-K),b[f].lineCoordinates={x1:k-S,y1:l,x2:k-S,y2:h,height:Math.abs(h-l)},b[f].bounds={x1:m-(D[f]+
S),y1:l,x2:k,y2:h,width:k-m,height:h-l},b[f].title&&(b[f]._titleTextBlock.maxWidth=0<b[f].titleMaxWidth&&b[f].titleMaxWidth<b[f].lineCoordinates.height?b[f].titleMaxWidth:b[f].lineCoordinates.height),S+=D[f]+b[f].margin);if(c&&0<c.length)for(f=0;f<c.length;f++)c[f]&&(m=Math.round(a[0]?a[0].lineCoordinates.x2:d[0].lineCoordinates.x2),k=Math.round(m),K=c[f]._labels&&0<c[f]._labels.length?c[f]._labels[c[f]._labels.length-1].textBlock.height/2:0,l=Math.round(g.y1+X+W<Math.max(K,q)?Math.max(K,q):g.y1+
X+W),K=0<a.length?0:c[f]._labels&&0<c[f]._labels.length?c[f]._labels[0].textBlock.height/2:0,h=Math.round(g.y2-(V+e+K)),c[f].lineCoordinates={x1:m+U,y1:l,x2:m+U,y2:h,height:Math.abs(h-l)},c[f].bounds={x1:m,y1:l,x2:k+(y[f]+U),y2:h,width:k-m,height:h-l},c[f].title&&(c[f]._titleTextBlock.maxWidth=0<c[f].titleMaxWidth&&c[f].titleMaxWidth<c[f].lineCoordinates.height?c[f].titleMaxWidth:c[f].lineCoordinates.height),U+=y[f]+c[f].margin);if(a&&0<a.length)for(f=0;f<a.length;f++)a[f]&&(a[f].calculateValueToPixelConversionParameters(),
a[f].calculateBreaksSizeInValues(),a[f]._labels&&1<a[f]._labels.length&&(A=(a[f].logarithmic?Math.log(a[f]._labels[1].position/a[f].viewportMinimum)/a[f].conversionParameters.lnLogarithmBase:a[f]._labels[1].position-a[f].viewportMinimum)*Math.abs(a[f].conversionParameters.pixelPerUnit)+a[f].lineCoordinates.x1,m=a[f]._labels[a[f]._labels.length-("dateTime"===a[f].valueType?2:1)].position,m=a[f].getApparentDifference(a[f].viewportMinimum,m),E=a[f].logarithmic?(1<m?Math.log(m)/a[f].conversionParameters.lnLogarithmBase*
Math.abs(a[f].conversionParameters.pixelPerUnit):0)+a[f].lineCoordinates.x1:(0<m?m*Math.abs(a[f].conversionParameters.pixelPerUnit):0)+a[f].lineCoordinates.x1));if(d&&0<d.length)for(f=0;f<d.length;f++)d[f].calculateValueToPixelConversionParameters(),d[f].calculateBreaksSizeInValues(),d[f]._labels&&1<d[f]._labels.length&&(A=(d[f].logarithmic?Math.log(d[f]._labels[1].position/d[f].viewportMinimum)/d[f].conversionParameters.lnLogarithmBase:d[f]._labels[1].position-d[f].viewportMinimum)*Math.abs(d[f].conversionParameters.pixelPerUnit)+
d[f].lineCoordinates.x1,m=d[f]._labels[d[f]._labels.length-("dateTime"===d[f].valueType?2:1)].position,m=d[f].getApparentDifference(d[f].viewportMinimum,m),E=d[f].logarithmic?(1<m?Math.log(m)/d[f].conversionParameters.lnLogarithmBase*Math.abs(d[f].conversionParameters.pixelPerUnit):0)+d[f].lineCoordinates.x1:(0<m?m*Math.abs(d[f].conversionParameters.pixelPerUnit):0)+d[f].lineCoordinates.x1);for(f=0;f<n.length;f++)"axisY"===n[f].type&&(n[f].calculateValueToPixelConversionParameters(),n[f].calculateBreaksSizeInValues());
if(0<v){if(a&&0<a.length)for(f=0;f<a.length;f++)r=M[v-1][f]===M[v][f]?!0:!1;else r=!0;if(d&&0<d.length)for(f=0;f<d.length;f++)H=N[v-1][f]===N[v][f]?!0:!1;else H=!0;if(b&&0<b.length)for(f=0;f<b.length;f++)I=O[v-1][f]===O[v][f]?!0:!1;else I=!0;if(c&&0<c.length)for(f=0;f<c.length;f++)L=Q[v-1][f]===Q[v][f]?!0:!1;else L=!0}if(r&&H&&I&&L)break;v++}if(a&&0<a.length)for(f=0;f<a.length;f++)a[f].calculateStripLinesThicknessInValues(),a[f].calculateBreaksInPixels();if(d&&0<d.length)for(f=0;f<d.length;f++)d[f].calculateStripLinesThicknessInValues(),
d[f].calculateBreaksInPixels();if(b&&0<b.length)for(f=0;f<b.length;f++)b[f].calculateStripLinesThicknessInValues(),b[f].calculateBreaksInPixels();if(c&&0<c.length)for(f=0;f<c.length;f++)c[f].calculateStripLinesThicknessInValues(),c[f].calculateBreaksInPixels()}else{q=[];A=[];F=[];z=[];E=[];t=[];M=[];for(N=[];4>v;){V=U=R=S=$=K=W=e=Q=O=G=X=0;if(a&&0<a.length)for(F=[],f=U=0;f<a.length;f++)F.push(Math.ceil(a[f]?a[f].createLabelsAndCalculateWidth():0)),U+=F[f],e+=a[f]&&!p.isNavigator?a[f].margin:0;else F.push(Math.ceil(a[0]?
a[0].createLabelsAndCalculateWidth():0));M.push(F);if(d&&0<d.length)for(z=[],f=V=0;f<d.length;f++)z.push(Math.ceil(d[f]?d[f].createLabelsAndCalculateWidth():0)),V+=z[f],W+=d[f]?d[f].margin:0;else z.push(Math.ceil(d[0]?d[0].createLabelsAndCalculateWidth():0));N.push(z);if(b&&0<b.length)for(f=0;f<b.length;f++)b[f].lineCoordinates={},m=Math.round(g.x1+U+e),k=Math.round(g.x2-V-W>p.width-10?p.width-10:g.x2-V-W),b[f].labelAutoFit&&!u(C)&&(0<!a.length&&(m=0>b[f].labelAngle?Math.max(m,C):0===b[f].labelAngle?
Math.max(m,C/2):m),0<!d.length&&(k=0<b[f].labelAngle?k-x/2:0===b[f].labelAngle?k-x/2:k)),b[f].lineCoordinates.x1=m,b[f].lineCoordinates.x2=k,b[f].lineCoordinates.width=Math.abs(k-m),b[f].title&&(b[f]._titleTextBlock.maxWidth=0<b[f].titleMaxWidth&&b[f].titleMaxWidth<b[f].lineCoordinates.width?b[f].titleMaxWidth:b[f].lineCoordinates.width);if(c&&0<c.length)for(f=0;f<c.length;f++)c[f].lineCoordinates={},m=Math.round(g.x1+U+e),k=Math.round(g.x2-V-W>c[f].chart.width-10?c[f].chart.width-10:g.x2-V-W),c[f]&&
c[f].labelAutoFit&&!u(D)&&(0<!a.length&&(m=0<c[f].labelAngle?Math.max(m,D):0===c[f].labelAngle?Math.max(m,D/2):m),0<!d.length&&(k-=y/2)),c[f].lineCoordinates.x1=m,c[f].lineCoordinates.x2=k,c[f].lineCoordinates.width=Math.abs(k-m),c[f].title&&(c[f]._titleTextBlock.maxWidth=0<c[f].titleMaxWidth&&c[f].titleMaxWidth<c[f].lineCoordinates.width?c[f].titleMaxWidth:c[f].lineCoordinates.width);if(b&&0<b.length)for(q=[],f=S=0;f<b.length;f++)q.push(Math.ceil(b[f]?b[f].createLabelsAndCalculateHeight():0)),S+=
q[f]+b[f].margin,K+=b[f].margin;else q.push(Math.ceil(b[0]?b[0].createLabelsAndCalculateHeight():0));E.push(q);if(c&&0<c.length)for(A=[],f=R=0;f<c.length;f++)A.push(Math.ceil(c[f]?c[f].createLabelsAndCalculateHeight():0)),R+=A[f],$+=c[f].margin;else A.push(Math.ceil(c[0]?c[0].createLabelsAndCalculateHeight():0));t.push(A);if(b&&0<b.length)for(f=0;f<b.length;f++)0<b[f]._labels.length&&(h=b[f]._labels[0],l=b[f]._labels[b[f]._labels.length-1],C=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+
(h.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),x=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle)));if(c&&0<c.length)for(f=0;f<c.length;f++)c[f]&&0<c[f]._labels.length&&(h=c[f]._labels[0],l=c[f]._labels[c[f]._labels.length-1],D=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/
180*Math.abs(h.textBlock.angle)),y=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle)));if(p.panEnabled)for(f=0;f<b.length;f++)q[f]=p.sessionVariables.axisY.height;else for(f=0;f<b.length;f++)p.sessionVariables.axisY.height=q[f];if(b&&0<b.length)for(f=b.length-1;0<=f;f--)l=Math.round(g.y2),h=Math.round(g.y2>b[f].chart.height-10?b[f].chart.height-10:g.y2),b[f].lineCoordinates.y1=l-(q[f]+b[f].margin+
X),b[f].lineCoordinates.y2=l-(q[f]+b[f].margin+X),b[f].bounds={x1:m,y1:l-(q[f]+X+b[f].margin),x2:k,y2:h-(X+b[f].margin),width:k-m,height:q[f]},b[f].title&&(b[f]._titleTextBlock.maxWidth=0<b[f].titleMaxWidth&&b[f].titleMaxWidth<b[f].lineCoordinates.width?b[f].titleMaxWidth:b[f].lineCoordinates.width),X+=q[f]+b[f].margin;if(c&&0<c.length)for(f=c.length-1;0<=f;f--)c[f]&&(l=Math.round(g.y1),h=Math.round(g.y1+(A[f]+c[f].margin+G)),c[f].lineCoordinates.y1=h,c[f].lineCoordinates.y2=h,c[f].bounds={x1:m,y1:l+
(c[f].margin+G),x2:k,y2:h,width:k-m,height:R},c[f].title&&(c[f]._titleTextBlock.maxWidth=0<c[f].titleMaxWidth&&c[f].titleMaxWidth<c[f].lineCoordinates.width?c[f].titleMaxWidth:c[f].lineCoordinates.width),G+=A[f]+c[f].margin);if(a&&0<a.length)for(f=0;f<a.length;f++){K=a[f]._labels&&0<a[f]._labels.length?a[f]._labels[0].textBlock.fontSize/2:0;m=Math.round(g.x1+e);l=c&&0<c.length?Math.round(c[0]?c[0].lineCoordinates.y2:g.y1<Math.max(K,10)?Math.max(K,10):g.y1):g.y1<Math.max(K,10)?Math.max(K,10):g.y1;
k=Math.round(g.x1+U+e);h=b&&0<b.length?Math.round(b[0]?b[0].lineCoordinates.y1:g.y2-S>p.height-Math.max(K,10)?p.height-Math.max(K,10):g.y2-S):g.y2>p.height-Math.max(K,10)?p.height-Math.max(K,10):g.y2;if(b&&0<b.length)for(K=0;K<b.length;K++)b[K]&&b[K].labelAutoFit&&(k=0>b[K].labelAngle?Math.max(k,C):0===b[K].labelAngle?Math.max(k,C/2):k,m=0>b[K].labelAngle||0===b[K].labelAngle?k-U:m);if(c&&0<c.length)for(K=0;K<c.length;K++)c[K]&&c[K].labelAutoFit&&(k=c[K].lineCoordinates.x1,m=k-U);a[f].lineCoordinates=
{x1:k-O,y1:l,x2:k-O,y2:h,height:Math.abs(h-l)};a[f].bounds={x1:k-(F[f]+O),y1:l,x2:k,y2:h,width:k-m,height:h-l};a[f].title&&(a[f]._titleTextBlock.maxWidth=0<a[f].titleMaxWidth&&a[f].titleMaxWidth<a[f].lineCoordinates.height?a[f].titleMaxWidth:a[f].lineCoordinates.height);a[f].calculateValueToPixelConversionParameters();a[f].calculateBreaksSizeInValues();O+=F[f]+a[f].margin}if(d&&0<d.length)for(f=0;f<d.length;f++){K=d[f]._labels&&0<d[f]._labels.length?d[f]._labels[0].textBlock.fontSize/2:0;m=Math.round(g.x1-
e);l=c&&0<c.length?Math.round(c[0]?c[0].lineCoordinates.y2:g.y1<Math.max(K,10)?Math.max(K,10):g.y1):g.y1<Math.max(K,10)?Math.max(K,10):g.y1;k=Math.round(g.x2-V-W);h=b&&0<b.length?Math.round(b[0]?b[0].lineCoordinates.y1:g.y2-S>p.height-Math.max(K,10)?p.height-Math.max(K,10):g.y2-S):g.y2>p.height-Math.max(K,10)?p.height-Math.max(K,10):g.y2;if(b&&0<b.length)for(K=0;K<b.length;K++)b[K]&&b[K].labelAutoFit&&(k=0>b[K].labelAngle?Math.max(k,C):0===b[K].labelAngle?Math.max(k,C/2):k,m=0>b[K].labelAngle||0===
b[K].labelAngle?k-V:m);if(c&&0<c.length)for(K=0;K<c.length;K++)c[K]&&c[K].labelAutoFit&&(k=c[K].lineCoordinates.x2,m=k-V);d[f].lineCoordinates={x1:k+Q,y1:l,x2:k+Q,y2:h,height:Math.abs(h-l)};d[f].bounds={x1:m,y1:l,x2:k+z[f]+Q,y2:h,width:k-m,height:h-l};d[f].title&&(d[f]._titleTextBlock.maxWidth=0<d[f].titleMaxWidth&&d[f].titleMaxWidth<d[f].lineCoordinates.height?d[f].titleMaxWidth:d[f].lineCoordinates.height);d[f].calculateValueToPixelConversionParameters();d[f].calculateBreaksSizeInValues();Q+=z[f]+
d[f].margin}for(f=0;f<n.length;f++)"axisY"===n[f].type&&(n[f].calculateValueToPixelConversionParameters(),n[f].calculateBreaksSizeInValues());if(0<v){if(a&&0<a.length)for(f=0;f<a.length;f++)r=M[v-1][f]===M[v][f]?!0:!1;else r=!0;if(d&&0<d.length)for(f=0;f<d.length;f++)H=N[v-1][f]===N[v][f]?!0:!1;else H=!0;if(b&&0<b.length)for(f=0;f<b.length;f++)I=E[v-1][f]===E[v][f]?!0:!1;else I=!0;if(c&&0<c.length)for(f=0;f<c.length;f++)L=t[v-1][f]===t[v][f]?!0:!1;else L=!0}if(r&&H&&I&&L)break;v++}if(b&&0<b.length)for(f=
0;f<b.length;f++)b[f].calculateStripLinesThicknessInValues(),b[f].calculateBreaksInPixels();if(c&&0<c.length)for(f=0;f<c.length;f++)c[f].calculateStripLinesThicknessInValues(),c[f].calculateBreaksInPixels();if(a&&0<a.length)for(f=0;f<a.length;f++)a[f].calculateStripLinesThicknessInValues(),a[f].calculateBreaksInPixels();if(d&&0<d.length)for(f=0;f<d.length;f++)d[f].calculateStripLinesThicknessInValues(),d[f].calculateBreaksInPixels()}};z.render=function(a,d,b,c,e){var g=a[0]?a[0].chart:d[0].chart;
e=g.ctx;var m=g._axes;g.alignVerticalAxes&&g.alignVerticalAxes();e.save();e.beginPath();a[0]&&e.rect(5,a[0].bounds.y1,a[0].chart.width-10,a[0].bounds.height);d[0]&&e.rect(5,d[d.length-1].bounds.y1,d[0].chart.width-10,d[0].bounds.height);e.clip();if(a&&0<a.length)for(var l=0;l<a.length;l++)a[l].renderLabelsTicksAndTitle();if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderLabelsTicksAndTitle();e.restore();if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderLabelsTicksAndTitle();if(c&&0<c.length)for(l=
0;l<c.length;l++)c[l].renderLabelsTicksAndTitle();g.preparePlotArea();g=g.plotArea;e.save();e.beginPath();e.rect(g.x1,g.y1,Math.abs(g.x2-g.x1),Math.abs(g.y2-g.y1));e.clip();if(a&&0<a.length)for(l=0;l<m.length;l++)m[l].renderStripLinesOfThicknessType("value");if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderStripLinesOfThicknessType("value");if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderStripLinesOfThicknessType("value");if(c&&0<c.length)for(l=0;l<c.length;l++)c[l].renderStripLinesOfThicknessType("value");
if(a&&0<a.length)for(l=0;l<a.length;l++)a[l].renderInterlacedColors();if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderInterlacedColors();if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderInterlacedColors();if(c&&0<c.length)for(l=0;l<c.length;l++)c[l].renderInterlacedColors();e.restore();if(a&&0<a.length)for(l=0;l<a.length;l++)a[l].renderGrid(),r&&(a[l].createMask(),a[l].renderBreaksBackground());if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderGrid(),r&&(d[l].createMask(),d[l].renderBreaksBackground());
if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderGrid(),r&&(b[l].createMask(),b[l].renderBreaksBackground());if(c&&0<c.length)for(l=0;l<c.length;l++)c[l].renderGrid(),r&&(c[l].createMask(),c[l].renderBreaksBackground());if(a&&0<a.length)for(l=0;l<a.length;l++)a[l].renderAxisLine();if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderAxisLine();if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderAxisLine();if(c&&0<c.length)for(l=0;l<c.length;l++)c[l].renderAxisLine();if(a&&0<a.length)for(l=0;l<a.length;l++)a[l].renderStripLinesOfThicknessType("pixel");
if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderStripLinesOfThicknessType("pixel");if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderStripLinesOfThicknessType("pixel");if(c&&0<c.length)for(l=0;l<c.length;l++)c[l].renderStripLinesOfThicknessType("pixel")};z.prototype.calculateStripLinesThicknessInValues=function(){for(var a=0;a<this.stripLines.length;a++)if(null!==this.stripLines[a].startValue&&null!==this.stripLines[a].endValue){var d=Math.min(this.stripLines[a].startValue,this.stripLines[a].endValue),
b=Math.max(this.stripLines[a].startValue,this.stripLines[a].endValue),d=this.getApparentDifference(d,b);this.stripLines[a].value=this.logarithmic?this.stripLines[a].value*Math.sqrt(Math.log(this.stripLines[a].endValue/this.stripLines[a].startValue)/Math.log(d)):this.stripLines[a].value+(Math.abs(this.stripLines[a].endValue-this.stripLines[a].startValue)-d)/2;this.stripLines[a].thickness=d;this.stripLines[a]._thicknessType="value"}};z.prototype.calculateBreaksSizeInValues=function(){for(var a="left"===
this._position||"right"===this._position?this.lineCoordinates.height||this.chart.height:this.lineCoordinates.width||this.chart.width,d=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],b=this.conversionParameters.pixelPerUnit||a/(this.logarithmic?this.conversionParameters.maximum/this.conversionParameters.minimum:this.conversionParameters.maximum-this.conversionParameters.minimum),c=this.scaleBreaks&&!u(this.scaleBreaks.options.spacing),e,g=0;g<d.length;g++)e=c||!u(d[g].options.spacing),d[g].spacing=
I(d[g].spacing,a,8,e?0.1*a:8,e?0:3)<<0,d[g].size=0>d[g].spacing?0:Math.abs(d[g].spacing/b),this.logarithmic&&(d[g].size=Math.pow(this.logarithmBase,d[g].size))};z.prototype.calculateBreaksInPixels=function(){if(!(this.scaleBreaks&&0>=this.scaleBreaks._appliedBreaks.length)){var a=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[];a.length&&(this.scaleBreaks.firstBreakIndex=this.scaleBreaks.lastBreakIndex=null);for(var d=0;d<a.length&&!(a[d].startValue>this.conversionParameters.maximum);d++)a[d].endValue<
this.conversionParameters.minimum||(u(this.scaleBreaks.firstBreakIndex)&&(this.scaleBreaks.firstBreakIndex=d),a[d].startValue>=this.conversionParameters.minimum&&(a[d].startPixel=this.convertValueToPixel(a[d].startValue),this.scaleBreaks.lastBreakIndex=d),a[d].endValue<=this.conversionParameters.maximum&&(a[d].endPixel=this.convertValueToPixel(a[d].endValue)))}};z.prototype.renderLabelsTicksAndTitle=function(){var a=this,d=!1,b=0,c=0,e=1,g=0;0!==this.labelAngle&&360!==this.labelAngle&&(e=1.2);if("undefined"===
typeof this.options.interval){if("bottom"===this._position||"top"===this._position)if(this.logarithmic&&!this.equidistantInterval&&this.labelAutoFit){for(var b=[],e=0!==this.labelAngle&&360!==this.labelAngle?1:1.2,m,l=this.viewportMaximum,k=this.lineCoordinates.width/Math.log(this.range),h=this._labels.length-1;0<=h;h--){q=this._labels[h];if(q.position<this.viewportMinimum)break;q.position>this.viewportMaximum||!(h===this._labels.length-1||m<Math.log(l/q.position)*k/e)||(b.push(q),l=q.position,m=
q.textBlock.width*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+q.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=b}else{for(h=0;h<this._labels.length;h++)q=this._labels[h],q.position<this.viewportMinimum||(m=q.textBlock.width*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+q.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),b+=m);b>this.lineCoordinates.width*e&&this.labelAutoFit&&(d=!0)}if("left"===this._position||"right"===this._position)if(this.logarithmic&&
!this.equidistantInterval&&this.labelAutoFit){for(var b=[],p,l=this.viewportMaximum,k=this.lineCoordinates.height/Math.log(this.range),h=this._labels.length-1;0<=h;h--){q=this._labels[h];if(q.position<this.viewportMinimum)break;q.position>this.viewportMaximum||!(h===this._labels.length-1||p<Math.log(l/q.position)*k)||(b.push(q),l=q.position,p=q.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+q.textBlock.width*Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=b}else{for(h=
0;h<this._labels.length;h++)q=this._labels[h],q.position<this.viewportMinimum||(p=q.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+q.textBlock.width*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),c+=p);c>this.lineCoordinates.height*e&&this.labelAutoFit&&(d=!0)}}this.logarithmic&&(!this.equidistantInterval&&this.labelAutoFit)&&this._labels.sort(function(a,b){return a.position-b.position});var h=0,q,n;if("bottom"===this._position){for(h=0;h<this._labels.length;h++)q=this._labels[h],
q.position<this.viewportMinimum||(q.position>this.viewportMaximum||d&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(q.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,n.y<<0),this.ctx.lineTo(c,n.y+this.tickLength<<0),this.ctx.stroke()),0===q.textBlock.angle?(n.x-=q.textBlock.width/2,n.y="inside"===this.labelPlacement?
n.y-(this.tickLength+q.textBlock.fontSize/2):n.y+this.tickLength+q.textBlock.fontSize/2):(n.x="inside"===this.labelPlacement?0>this.labelAngle?n.x:n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):n.x-(0>this.labelAngle?q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),n.y="inside"===this.labelPlacement?0>this.labelAngle?n.y-this.tickLength-5:n.y-this.tickLength-Math.abs(q.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+5):n.y+this.tickLength+Math.abs(0>this.labelAngle?q.textBlock.width*
Math.sin(Math.PI/180*this.labelAngle)-5:5)),q.textBlock.x=n.x,q.textBlock.y=n.y);"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(h=0;h<a._labels.length;h++)if(q=a._labels[h],!(q.position<a.viewportMinimum||q.position>a.viewportMaximum||d&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(q.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0;a.ctx.save();
a.ctx.beginPath();a.ctx.moveTo(b,n.y<<0);a.ctx.lineTo(b,n.y-a.tickLength<<0);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.bounds.y2-this._titleTextBlock.height-3,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("top"===this._position){for(h=0;h<this._labels.length;h++)q=this._labels[h],
q.position<this.viewportMinimum||(q.position>this.viewportMaximum||d&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(q.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,n.y<<0),this.ctx.lineTo(c,n.y-this.tickLength<<0),this.ctx.stroke()),0===q.textBlock.angle?(n.x-=q.textBlock.width/2,n.y="inside"===this.labelPlacement?
n.y+this.labelFontSize/2+this.tickLength+5:n.y-(this.tickLength+q.textBlock.height-q.textBlock.fontSize/2)):(n.x="inside"===this.labelPlacement?0<this.labelAngle?n.x:n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):n.x+(q.textBlock.height-this.tickLength-this.labelFontSize)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),n.y="inside"===this.labelPlacement?0<this.labelAngle?n.y+this.tickLength+5:n.y-q.textBlock.width*Math.sin(Math.PI/
180*this.labelAngle)+this.tickLength+5:n.y-(this.tickLength+((q.textBlock.height-q.textBlock.fontSize/2)*Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?q.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)))),q.textBlock.x=n.x,q.textBlock.y=n.y);"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(h=0;h<a._labels.length;h++)if(q=a._labels[h],!(q.position<a.viewportMinimum||q.position>a.viewportMaximum||d&&0!==g++%2&&a.labelAutoFit)&&
(n=a.getPixelCoordinatesOnAxis(q.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(b,n.y<<0);a.ctx.lineTo(b,n.y+a.tickLength<<0);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.bounds.y1+1,this.titleMaxWidth=
this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("left"===this._position){for(h=0;h<this._labels.length;h++)q=this._labels[h],q.position<this.viewportMinimum||(q.position>this.viewportMaximum||d&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(q.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.y<<0)+0.5:n.y<<0,this.ctx.beginPath(),this.ctx.moveTo(n.x<<
0,c),this.ctx.lineTo(n.x-this.tickLength<<0,c),this.ctx.stroke()),0===this.labelAngle?(q.textBlock.y=n.y,q.textBlock.x="inside"===this.labelPlacement?n.x+this.tickLength+5:n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5):(q.textBlock.y="inside"===this.labelPlacement?n.y:n.y-q.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),q.textBlock.x="inside"===this.labelPlacement?n.x+this.tickLength+5:0<this.labelAngle?n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-
this.tickLength-5:n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(q.textBlock.height-q.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength));"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(h=0;h<a._labels.length;h++)if(q=a._labels[h],!(q.position<a.viewportMinimum||q.position>a.viewportMaximum||d&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(q.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;
a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.y<<0)+0.5:n.y<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(n.x<<0,b);a.ctx.lineTo(n.x+a.tickLength<<0,b);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.bounds.x1+1,this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("right"===
this._position){for(h=0;h<this._labels.length;h++)q=this._labels[h],q.position<this.viewportMinimum||(q.position>this.viewportMaximum||d&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(q.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.y<<0)+0.5:n.y<<0,this.ctx.beginPath(),this.ctx.moveTo(n.x<<0,c),this.ctx.lineTo(n.x+this.tickLength<<0,c),this.ctx.stroke()),0===this.labelAngle?
(q.textBlock.y=n.y,q.textBlock.x="inside"===this.labelPlacement?n.x-q.textBlock.width-this.tickLength-5:n.x+this.tickLength+5):(q.textBlock.y="inside"===this.labelPlacement?n.y-q.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0>this.labelAngle?n.y:n.y-(q.textBlock.height-q.textBlock.fontSize/2-5)*Math.cos(Math.PI/180*this.labelAngle),q.textBlock.x="inside"===this.labelPlacement?n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:0<this.labelAngle?n.x+(q.textBlock.height-
q.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:n.x+this.tickLength+5));"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(h=0;h<a._labels.length;h++)if(q=a._labels[h],!(q.position<a.viewportMinimum||q.position>a.viewportMaximum||d&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(q.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.y<<
0)+0.5:n.y<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(n.x<<0,b);a.ctx.lineTo(n.x-a.tickLength<<0,b);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.bounds.x2-1,this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}g=0;if("inside"===this.labelPlacement)this.chart.addEventListener("dataAnimationIterationEnd",
function(){for(h=0;h<a._labels.length;h++)q=a._labels[h],q.position<a.viewportMinimum||(q.position>a.viewportMaximum||d&&0!==g++%2&&a.labelAutoFit)||(a.ctx.save(),a.ctx.beginPath(),q.textBlock.render(!0),a.ctx.restore())},this);else for(h=0;h<this._labels.length;h++)q=this._labels[h],q.position<this.viewportMinimum||(q.position>this.viewportMaximum||d&&0!==g++%2&&this.labelAutoFit)||q.textBlock.render(!0)};z.prototype.renderInterlacedColors=function(){var a=this.chart.plotArea.ctx,d,b,c=this.chart.plotArea,
e=0;d=!0;if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e++)d?(d=this.getPixelCoordinatesOnAxis(this._labels[e].position),b=e+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(Math.min(b.x,d.x),c.y1,Math.abs(b.x-d.x),Math.abs(c.y1-c.y2)),d=!1):d=!0;else if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(a.fillStyle=
this.interlacedColor,e=0;e<this._labels.length;e++)d?(b=this.getPixelCoordinatesOnAxis(this._labels[e].position),d=e+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(c.x1,Math.min(b.y,d.y),Math.abs(c.x1-c.x2),Math.abs(d.y-b.y)),d=!1):d=!0;a.beginPath()};z.prototype.renderStripLinesOfThicknessType=function(a){if(this.stripLines&&0<this.stripLines.length&&a){for(var d=this,b,c=0,e=0,g=!1,m=!1,l=[],k=[],
m=!1,c=0;c<this.stripLines.length;c++){var h=this.stripLines[c];h._thicknessType===a&&("pixel"===a&&(h.value<this.viewportMinimum||h.value>this.viewportMaximum||u(h.value)||isNaN(this.range))||l.push(h))}for(c=0;c<this._stripLineLabels.length;c++)if(h=this.stripLines[c],b=this._stripLineLabels[c],!(b.position<this.viewportMinimum||b.position>this.viewportMaximum||isNaN(this.range))){a=this.getPixelCoordinatesOnAxis(b.position);if("outside"===b.stripLine.labelPlacement)if(h&&(this.ctx.strokeStyle=
h.color,"pixel"===h._thicknessType&&(this.ctx.lineWidth=h.thickness)),"bottom"===this._position){var p=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0;this.ctx.beginPath();this.ctx.moveTo(p,a.y<<0);this.ctx.lineTo(p,a.y+this.tickLength<<0);this.ctx.stroke();0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y+=this.tickLength+b.textBlock.fontSize/2):(a.x-=0>this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,a.y+=this.tickLength+Math.abs(0>this.labelAngle?b.textBlock.width*Math.sin(Math.PI/
180*this.labelAngle)-5:5))}else"top"===this._position?(p=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,this.ctx.beginPath(),this.ctx.moveTo(p,a.y<<0),this.ctx.lineTo(p,a.y-this.tickLength<<0),this.ctx.stroke(),0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y-=this.tickLength+b.textBlock.height):(a.x+=(b.textBlock.height-this.tickLength-this.labelFontSize/2)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),a.y-=this.tickLength+(b.textBlock.height*
Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)))):"left"===this._position?(p=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,p),this.ctx.lineTo(a.x-this.tickLength<<0,p),this.ctx.stroke(),0===this.labelAngle?a.x=a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:(a.y-=b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x-b.textBlock.width*
Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength)):"right"===this._position&&(p=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,p),this.ctx.lineTo(a.x+this.tickLength<<0,p),this.ctx.stroke(),0===this.labelAngle?a.x=a.x+this.tickLength+5:(a.y=0>this.labelAngle?a.y:a.y-(b.textBlock.height-b.textBlock.fontSize/
2-5)*Math.cos(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:a.x+this.tickLength+5));else b.textBlock.angle=-90,"bottom"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?u(h.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/
2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,u(h.startValue)?a.x+=b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y1+b.textBlock.width+3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-b.textBlock.width-3:"center"===
b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y1+3):"top"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?u(h.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,u(h.startValue)?a.x+=
b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+b.textBlock.width+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y2-3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y2-
b.textBlock.width-3):"left"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-b.textBlock.height>this.chart.plotArea.y1?u(h.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:u(h.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/
2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x2-b.textBlock.width-3):"right"===this._position&&(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-+b.textBlock.height>this.chart.plotArea.y1?
u(h.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2-3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:u(h.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x2-b.textBlock.width-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x1+
3);b.textBlock.x=a.x;b.textBlock.y=a.y;k.push(b)}if(!m){m=!1;this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();for(c=0;c<l.length;c++)h=l[c],h.showOnTop?g||(g=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();
for(e=0;e<l.length;e++)h=l[e],h.showOnTop&&h.render();this.ctx.restore()},h)):h.render();for(c=0;c<k.length;c++)b=k[c],b.stripLine.showOnTop?m||(m=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(e=0;e<k.length;e++)b=k[e],"inside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&(d.ctx.save(),d.ctx.beginPath(),d.ctx.rect(d.chart.plotArea.x1,d.chart.plotArea.y1,d.chart.plotArea.width,d.chart.plotArea.height),d.ctx.clip(),b.textBlock.render(!0),d.ctx.restore())},b.textBlock)):
"inside"===b.stripLine.labelPlacement&&b.textBlock.render(!0);this.ctx.restore();m=!0}if(m)for(m=!1,c=0;c<k.length;c++)b=k[c],b.stripLine.showOnTop?m||(m=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(e=0;e<k.length;e++)b=k[e],"outside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&b.textBlock.render(!0)},b.textBlock)):"outside"===b.stripLine.labelPlacement&&b.textBlock.render(!0)}};z.prototype.renderBreaksBackground=function(){this.chart._breaksCanvas&&(this.scaleBreaks&&
0<this.scaleBreaks._appliedBreaks.length&&this.maskCanvas)&&(this.chart._breaksCanvasCtx.save(),this.chart._breaksCanvasCtx.beginPath(),this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height),this.chart._breaksCanvasCtx.clip(),this.chart._breaksCanvasCtx.drawImage(this.maskCanvas,0,0,this.chart.width,this.chart.height),this.chart._breaksCanvasCtx.restore())};z.prototype.createMask=function(){if(this.scaleBreaks&&0<this.scaleBreaks._appliedBreaks.length){var a=
this.scaleBreaks._appliedBreaks;r?(this.maskCanvas=ta(this.chart.width,this.chart.height),this.maskCtx=this.maskCanvas.getContext("2d")):(this.maskCanvas=this.chart.plotArea.canvas,this.maskCtx=this.chart.plotArea.ctx);this.maskCtx.save();this.maskCtx.beginPath();this.maskCtx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.maskCtx.clip();for(var d=0;d<a.length;d++)a[d].endValue<this.viewportMinimum||(a[d].startValue>this.viewportMaximum||
isNaN(this.range))||a[d].render(this.maskCtx);this.maskCtx.restore()}};z.prototype.renderCrosshair=function(a,d){this.crosshair.render(a,d)};z.prototype.renderGrid=function(){if(this.gridThickness&&0<this.gridThickness){var a=this.chart.ctx;a.save();var d,b=this.chart.plotArea;a.lineWidth=this.gridThickness;a.strokeStyle=this.gridColor;a.setLineDash&&a.setLineDash(R(this.gridDashType,this.gridThickness));if("bottom"===this._position||"top"===this._position)for(c=0;c<this._labels.length;c++)this._labels[c].position<
this.viewportMinimum||(this._labels[c].position>this.viewportMaximum||this._labels[c].breaksLabelType)||(a.beginPath(),d=this.getPixelCoordinatesOnAxis(this._labels[c].position),d=1===a.lineWidth%2?(d.x<<0)+0.5:d.x<<0,a.moveTo(d,b.y1<<0),a.lineTo(d,b.y2<<0),a.stroke());else if("left"===this._position||"right"===this._position)for(var c=0;c<this._labels.length;c++)this._labels[c].position<this.viewportMinimum||(this._labels[c].position>this.viewportMaximum||this._labels[c].breaksLabelType)||(a.beginPath(),
d=this.getPixelCoordinatesOnAxis(this._labels[c].position),d=1===a.lineWidth%2?(d.y<<0)+0.5:d.y<<0,a.moveTo(b.x1<<0,d),a.lineTo(b.x2<<0,d),a.stroke());a.restore()}};z.prototype.renderAxisLine=function(){var a=this.chart.ctx,d=r?this.chart._preRenderCtx:a,b=Math.ceil(this.tickThickness/(this.reversed?-2:2)),c=Math.ceil(this.tickThickness/(this.reversed?2:-2)),e,g;d.save();if("bottom"===this._position||"top"===this._position){if(this.lineThickness){this.reversed?(e=this.lineCoordinates.x2,g=this.lineCoordinates.x1):
(e=this.lineCoordinates.x1,g=this.lineCoordinates.x2);d.lineWidth=this.lineThickness;d.strokeStyle=this.lineColor?this.lineColor:"black";d.setLineDash&&d.setLineDash(R(this.lineDashType,this.lineThickness));var m=1===this.lineThickness%2?(this.lineCoordinates.y1<<0)+0.5:this.lineCoordinates.y1<<0;d.beginPath();if(this.scaleBreaks&&!u(this.scaleBreaks.firstBreakIndex))if(u(this.scaleBreaks.lastBreakIndex))e=this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel+c;else for(var l=
this.scaleBreaks.firstBreakIndex;l<=this.scaleBreaks.lastBreakIndex;l++)d.moveTo(e,m),d.lineTo(this.scaleBreaks._appliedBreaks[l].startPixel+b,m),e=this.scaleBreaks._appliedBreaks[l].endPixel+c;e&&(d.moveTo(e,m),d.lineTo(g,m));d.stroke()}}else if(("left"===this._position||"right"===this._position)&&this.lineThickness){this.reversed?(e=this.lineCoordinates.y1,g=this.lineCoordinates.y2):(e=this.lineCoordinates.y2,g=this.lineCoordinates.y1);d.lineWidth=this.lineThickness;d.strokeStyle=this.lineColor;
d.setLineDash&&d.setLineDash(R(this.lineDashType,this.lineThickness));m=1===this.lineThickness%2?(this.lineCoordinates.x1<<0)+0.5:this.lineCoordinates.x1<<0;d.beginPath();if(this.scaleBreaks&&!u(this.scaleBreaks.firstBreakIndex))if(u(this.scaleBreaks.lastBreakIndex))e=this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel+b;else for(l=this.scaleBreaks.firstBreakIndex;l<=this.scaleBreaks.lastBreakIndex;l++)d.moveTo(m,e),d.lineTo(m,this.scaleBreaks._appliedBreaks[l].startPixel+c),
e=this.scaleBreaks._appliedBreaks[l].endPixel+b;e&&(d.moveTo(m,e),d.lineTo(m,g));d.stroke()}r&&(a.drawImage(this.chart._preRenderCanvas,0,0,this.chart.width,this.chart.height),this.chart._breaksCanvasCtx&&this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas,0,0,this.chart.width,this.chart.height),d.clearRect(0,0,this.chart.width,this.chart.height));d.restore()};z.prototype.getPixelCoordinatesOnAxis=function(a){var d={};if("bottom"===this._position||"top"===this._position)d.x=this.convertValueToPixel(a),
d.y=this.lineCoordinates.y1;if("left"===this._position||"right"===this._position)d.y=this.convertValueToPixel(a),d.x=this.lineCoordinates.x2;return d};z.prototype.convertPixelToValue=function(a){if("undefined"===typeof a)return null;var d=0,b=0,c,d=!0,e=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],b="number"===typeof a?a:"left"===this._position||"right"===this._position?a.y:a.x;if(this.logarithmic){a=c=Math.pow(this.logarithmBase,(b-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit);
if(b<=this.conversionParameters.reference===("left"===this._position||"right"===this._position)!==this.reversed)for(b=0;b<e.length;b++){if(!(e[b].endValue<this.conversionParameters.minimum))if(d)if(e[b].startValue<this.conversionParameters.minimum){if(1<e[b].size&&this.conversionParameters.minimum*Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size))<e[b].endValue){a=Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size));break}else a*=e[b].endValue/this.conversionParameters.minimum/
Math.pow(e[b].size,Math.log(e[b].endValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue)),c/=Math.pow(e[b].size,Math.log(e[b].endValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue));d=!1}else if(c>e[b].startValue/this.conversionParameters.minimum){c/=e[b].startValue/this.conversionParameters.minimum;if(c<e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1===e[b].size?1:Math.log(c)/Math.log(e[b].size))/c;break}else a*=e[b].endValue/e[b].startValue/
e[b].size;c/=e[b].size;d=!1}else break;else if(c>e[b].startValue/e[b-1].endValue){c/=e[b].startValue/e[b-1].endValue;if(c<e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1===e[b].size?1:Math.log(c)/Math.log(e[b].size))/c;break}else a*=e[b].endValue/e[b].startValue/e[b].size;c/=e[b].size}else break}else for(b=e.length-1;0<=b;b--)if(!(e[b].startValue>this.conversionParameters.minimum))if(d)if(e[b].endValue>this.conversionParameters.minimum){if(1<e[b].size&&this.conversionParameters.minimum*Math.pow(e[b].endValue/
e[b].startValue,Math.log(c)/Math.log(e[b].size))>e[b].startValue){a=Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size));break}else a*=e[b].startValue/this.conversionParameters.minimum*Math.pow(e[b].size,Math.log(e[b].startValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue))*c,c*=Math.pow(e[b].size,Math.log(this.conversionParameters.minimum/e[b].startValue)/Math.log(e[b].endValue/e[b].startValue));d=!1}else if(c<e[b].endValue/this.conversionParameters.minimum){c/=
e[b].endValue/this.conversionParameters.minimum;if(c>1/e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1>=e[b].size?1:Math.log(c)/Math.log(e[b].size))*c;break}else a/=e[b].endValue/e[b].startValue/e[b].size;c*=e[b].size;d=!1}else break;else if(c<e[b].endValue/e[b+1].startValue){c/=e[b].endValue/e[b+1].startValue;if(c>1/e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1>=e[b].size?1:Math.log(c)/Math.log(e[b].size))*c;break}else a/=e[b].endValue/e[b].startValue/e[b].size;c*=e[b].size}else break;
d=a*this.viewportMinimum}else{a=c=(b-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit;if(b<=this.conversionParameters.reference===("left"===this._position||"right"===this._position)!==this.reversed)for(b=0;b<e.length;b++){if(!(e[b].endValue<this.conversionParameters.minimum))if(d)if(e[b].startValue<this.conversionParameters.minimum){if(e[b].size&&this.conversionParameters.minimum+c*(e[b].endValue-e[b].startValue)/e[b].size<e[b].endValue){a=0>=e[b].size?0:c*(e[b].endValue-
e[b].startValue)/e[b].size;break}else a+=e[b].endValue-this.conversionParameters.minimum-e[b].size*(e[b].endValue-this.conversionParameters.minimum)/(e[b].endValue-e[b].startValue),c-=e[b].size*(e[b].endValue-this.conversionParameters.minimum)/(e[b].endValue-e[b].startValue);d=!1}else if(c>e[b].startValue-this.conversionParameters.minimum){c-=e[b].startValue-this.conversionParameters.minimum;if(c<e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)-c;break}else a+=e[b].endValue-
e[b].startValue-e[b].size;c-=e[b].size;d=!1}else break;else if(c>e[b].startValue-e[b-1].endValue){c-=e[b].startValue-e[b-1].endValue;if(c<e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)-c;break}else a+=e[b].endValue-e[b].startValue-e[b].size;c-=e[b].size}else break}else for(b=e.length-1;0<=b;b--)if(!(e[b].startValue>this.conversionParameters.minimum))if(d)if(e[b].endValue>this.conversionParameters.minimum)if(e[b].size&&this.conversionParameters.minimum+c*(e[b].endValue-
e[b].startValue)/e[b].size>e[b].startValue){a=0>=e[b].size?0:c*(e[b].endValue-e[b].startValue)/e[b].size;break}else a+=e[b].startValue-this.conversionParameters.minimum+e[b].size*(this.conversionParameters.minimum-e[b].startValue)/(e[b].endValue-e[b].startValue),c+=e[b].size*(this.conversionParameters.minimum-e[b].startValue)/(e[b].endValue-e[b].startValue),d=!1;else if(c<e[b].endValue-this.conversionParameters.minimum){c-=e[b].endValue-this.conversionParameters.minimum;if(c>-1*e[b].size){a+=(e[b].endValue-
e[b].startValue)*(0===e[b].size?1:c/e[b].size)+c;break}else a-=e[b].endValue-e[b].startValue-e[b].size;c+=e[b].size;d=!1}else break;else if(c<e[b].endValue-e[b+1].startValue){c-=e[b].endValue-e[b+1].startValue;if(c>-1*e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)+c;break}else a-=e[b].endValue-e[b].startValue-e[b].size;c+=e[b].size}else break;d=this.conversionParameters.minimum+a}return d};z.prototype.convertValueToPixel=function(a){a=this.getApparentDifference(this.conversionParameters.minimum,
a,a);return this.logarithmic?this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*Math.log(a/this.conversionParameters.minimum)/this.conversionParameters.lnLogarithmBase+0.5<<0:"axisX"===this.type?this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*(a-this.conversionParameters.minimum)+0.5<<0:this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*(a-this.conversionParameters.minimum)+0.5};z.prototype.getApparentDifference=function(a,
d,b,c){var e=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[];if(this.logarithmic){b=u(b)?d/a:b;for(var g=0;g<e.length&&!(d<e[g].startValue);g++)a>e[g].endValue||(a<=e[g].startValue&&d>=e[g].endValue?b=b/e[g].endValue*e[g].startValue*e[g].size:a>=e[g].startValue&&d>=e[g].endValue?b=b/e[g].endValue*a*Math.pow(e[g].size,Math.log(e[g].endValue/a)/Math.log(e[g].endValue/e[g].startValue)):a<=e[g].startValue&&d<=e[g].endValue?b=b/d*e[g].startValue*Math.pow(e[g].size,Math.log(d/e[g].startValue)/Math.log(e[g].endValue/
e[g].startValue)):!c&&(a>e[g].startValue&&d<e[g].endValue)&&(b=a*Math.pow(e[g].size,Math.log(d/a)/Math.log(e[g].endValue/e[g].startValue))))}else for(b=u(b)?Math.abs(d-a):b,g=0;g<e.length&&!(d<e[g].startValue);g++)a>e[g].endValue||(a<=e[g].startValue&&d>=e[g].endValue?b=b-e[g].endValue+e[g].startValue+e[g].size:a>e[g].startValue&&d>=e[g].endValue?b=b-e[g].endValue+a+e[g].size*(e[g].endValue-a)/(e[g].endValue-e[g].startValue):a<=e[g].startValue&&d<e[g].endValue?b=b-d+e[g].startValue+e[g].size*(d-e[g].startValue)/
(e[g].endValue-e[g].startValue):!c&&(a>e[g].startValue&&d<e[g].endValue)&&(b=a+e[g].size*(d-a)/(e[g].endValue-e[g].startValue)));return b};z.prototype.setViewPortRange=function(a,d){this.sessionVariables.newViewportMinimum=this.viewportMinimum=Math.min(a,d);this.sessionVariables.newViewportMaximum=this.viewportMaximum=Math.max(a,d)};z.prototype.getXValueAt=function(a){if(!a)return null;var d=null;"left"===this._position?d=this.convertPixelToValue(a.y):"bottom"===this._position&&(d=this.convertPixelToValue(a.x));
return d};z.prototype.calculateValueToPixelConversionParameters=function(a){a=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[];var d={pixelPerUnit:null,minimum:null,reference:null},b=this.lineCoordinates.width,c=this.lineCoordinates.height,b="bottom"===this._position||"top"===this._position?b:c,c=Math.abs(this.range);if(this.logarithmic)for(var e=0;e<a.length&&!(this.viewportMaximum<a[e].startValue);e++)this.viewportMinimum>a[e].endValue||(this.viewportMinimum>=a[e].startValue&&this.viewportMaximum<=
a[e].endValue?b=0:this.viewportMinimum<=a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c/a[e].endValue*a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100):b-Math.min(a[e].spacing,0.1*b)):this.viewportMinimum>a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c/a[e].endValue*this.viewportMinimum,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*Math.log(a[e].endValue/this.viewportMinimum)/Math.log(a[e].endValue/a[e].startValue)):
b-Math.min(a[e].spacing,0.1*b)*Math.log(a[e].endValue/this.viewportMinimum)/Math.log(a[e].endValue/a[e].startValue)):this.viewportMinimum<=a[e].startValue&&this.viewportMaximum<a[e].endValue&&(c=c/this.viewportMaximum*a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*Math.log(this.viewportMaximum/a[e].startValue)/Math.log(a[e].endValue/a[e].startValue)):b-Math.min(a[e].spacing,0.1*b)*Math.log(this.viewportMaximum/a[e].startValue)/Math.log(a[e].endValue/a[e].startValue)));
else for(e=0;e<a.length&&!(this.viewportMaximum<a[e].startValue);e++)this.viewportMinimum>a[e].endValue||(this.viewportMinimum>=a[e].startValue&&this.viewportMaximum<=a[e].endValue?b=0:this.viewportMinimum<=a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c-a[e].endValue+a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100):b-Math.min(a[e].spacing,0.1*b)):this.viewportMinimum>a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c-a[e].endValue+this.viewportMinimum,
b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*(a[e].endValue-this.viewportMinimum)/(a[e].endValue-a[e].startValue)):b-Math.min(a[e].spacing,0.1*b)*(a[e].endValue-this.viewportMinimum)/(a[e].endValue-a[e].startValue)):this.viewportMinimum<=a[e].startValue&&this.viewportMaximum<a[e].endValue&&(c=c-this.viewportMaximum+a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*(this.viewportMaximum-a[e].startValue)/(a[e].endValue-a[e].startValue)):
b-Math.min(a[e].spacing,0.1*b)*(this.viewportMaximum-a[e].startValue)/(a[e].endValue-a[e].startValue)));d.minimum=this.viewportMinimum;d.maximum=this.viewportMaximum;d.range=c;if("bottom"===this._position||"top"===this._position)this.logarithmic?(d.lnLogarithmBase=Math.log(this.logarithmBase),d.pixelPerUnit=(this.reversed?-1:1)*b*d.lnLogarithmBase/Math.log(Math.abs(c))):d.pixelPerUnit=(this.reversed?-1:1)*b/Math.abs(c),d.reference=this.reversed?this.lineCoordinates.x2:this.lineCoordinates.x1;if("left"===
this._position||"right"===this._position)this.logarithmic?(d.lnLogarithmBase=Math.log(this.logarithmBase),d.pixelPerUnit=(this.reversed?1:-1)*b*d.lnLogarithmBase/Math.log(Math.abs(c))):d.pixelPerUnit=(this.reversed?1:-1)*b/Math.abs(c),d.reference=this.reversed?this.lineCoordinates.y1:this.lineCoordinates.y2;this.conversionParameters=d};z.prototype.calculateAxisParameters=function(){if(this.logarithmic)this.calculateLogarithmicAxisParameters();else{var a=this.chart.layoutManager.getFreeSpace(),d=!1,
b=!1;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?"xySwapped"===this.chart.plotInfo.axisPlacement?62:70:"xySwapped"===this.chart.plotInfo.axisPlacement?50:40,c=4;"axisX"===this.type&&(c=600>this.maxWidth?8:6);var a=Math.max(c,Math.floor(this.maxWidth/a)),e,g,m,c=0;!u(this.options.viewportMinimum)&&(!u(this.options.viewportMaximum)&&this.options.viewportMinimum>=this.options.viewportMaximum)&&
(this.viewportMinimum=this.viewportMaximum=null);if(u(this.options.viewportMinimum)&&!u(this.sessionVariables.newViewportMinimum)&&!isNaN(this.sessionVariables.newViewportMinimum))this.viewportMinimum=this.sessionVariables.newViewportMinimum;else if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(u(this.options.viewportMaximum)&&!u(this.sessionVariables.newViewportMaximum)&&!isNaN(this.sessionVariables.newViewportMaximum))this.viewportMaximum=this.sessionVariables.newViewportMaximum;
else if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;if(this.scaleBreaks)for(c=0;c<this.scaleBreaks._appliedBreaks.length;c++)if((!u(this.sessionVariables.newViewportMinimum)&&this.sessionVariables.newViewportMinimum>=this.scaleBreaks._appliedBreaks[c].startValue||!u(this.options.minimum)&&this.options.minimum>=this.scaleBreaks._appliedBreaks[c].startValue||!u(this.options.viewportMinimum)&&this.viewportMinimum>=this.scaleBreaks._appliedBreaks[c].startValue)&&
(!u(this.sessionVariables.newViewportMaximum)&&this.sessionVariables.newViewportMaximum<=this.scaleBreaks._appliedBreaks[c].endValue||!u(this.options.maximum)&&this.options.maximum<=this.scaleBreaks._appliedBreaks[c].endValue||!u(this.options.viewportMaximum)&&this.viewportMaximum<=this.scaleBreaks._appliedBreaks[c].endValue)){this.scaleBreaks._appliedBreaks.splice(c,1);break}if("axisX"===this.type){if(this.dataSeries&&0<this.dataSeries.length)for(e=0;e<this.dataSeries.length;e++)"dateTime"===this.dataSeries[e].xValueType&&
(b=!0);e=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin;g=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax;0===g-e&&(c="undefined"===typeof this.options.interval?0.4:this.options.interval,g+=c,e-=c);Infinity!==this.dataInfo.minDiff?m=this.dataInfo.minDiff:1<g-e?m=0.5*Math.abs(g-e):(m=1,b&&(d=!0))}else"axisY"===this.type&&(e=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,g=null!==this.viewportMaximum?this.viewportMaximum:
this.dataInfo.viewPortMax,isFinite(e)||isFinite(g)?isFinite(e)?isFinite(g)||(g=e):e=g:(g="undefined"===typeof this.options.interval?-Infinity:this.options.interval,e="undefined"!==typeof this.options.interval||isFinite(this.dataInfo.minDiff)?0:Infinity),0===e&&0===g?(g+=9,e=0):0===g-e?(c=Math.min(Math.abs(0.01*Math.abs(g)),5),g+=c,e-=c):e>g?(c=Math.min(0.01*Math.abs(this.getApparentDifference(g,e,null,!0)),5),0<=g?e=g-c:g=isFinite(e)?e+c:0):(c=Math.min(0.01*Math.abs(this.getApparentDifference(e,g,
null,!0)),0.05),0!==g&&(g+=c),0!==e&&(e-=c)),m=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1,this.includeZero&&(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&0<e&&(e=0),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&0>g&&(g=0));c=this.getApparentDifference(isNaN(this.viewportMinimum)||null===this.viewportMinimum?e:this.viewportMinimum,isNaN(this.viewportMaximum)||null===this.viewportMaximum?g:this.viewportMaximum,null,
!0);if("axisX"===this.type&&b){this.intervalType||(c/1<=a?(this.interval=1,this.intervalType="millisecond"):c/2<=a?(this.interval=2,this.intervalType="millisecond"):c/5<=a?(this.interval=5,this.intervalType="millisecond"):c/10<=a?(this.interval=10,this.intervalType="millisecond"):c/20<=a?(this.interval=20,this.intervalType="millisecond"):c/50<=a?(this.interval=50,this.intervalType="millisecond"):c/100<=a?(this.interval=100,this.intervalType="millisecond"):c/200<=a?(this.interval=200,this.intervalType=
"millisecond"):c/250<=a?(this.interval=250,this.intervalType="millisecond"):c/300<=a?(this.interval=300,this.intervalType="millisecond"):c/400<=a?(this.interval=400,this.intervalType="millisecond"):c/500<=a?(this.interval=500,this.intervalType="millisecond"):c/(1*S.secondDuration)<=a?(this.interval=1,this.intervalType="second"):c/(2*S.secondDuration)<=a?(this.interval=2,this.intervalType="second"):c/(5*S.secondDuration)<=a?(this.interval=5,this.intervalType="second"):c/(10*S.secondDuration)<=a?(this.interval=
10,this.intervalType="second"):c/(15*S.secondDuration)<=a?(this.interval=15,this.intervalType="second"):c/(20*S.secondDuration)<=a?(this.interval=20,this.intervalType="second"):c/(30*S.secondDuration)<=a?(this.interval=30,this.intervalType="second"):c/(1*S.minuteDuration)<=a?(this.interval=1,this.intervalType="minute"):c/(2*S.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):c/(5*S.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):c/(10*S.minuteDuration)<=a?(this.interval=
10,this.intervalType="minute"):c/(15*S.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):c/(20*S.minuteDuration)<=a?(this.interval=20,this.intervalType="minute"):c/(30*S.minuteDuration)<=a?(this.interval=30,this.intervalType="minute"):c/(1*S.hourDuration)<=a?(this.interval=1,this.intervalType="hour"):c/(2*S.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):c/(3*S.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):c/(6*S.hourDuration)<=a?(this.interval=6,this.intervalType=
"hour"):c/(1*S.dayDuration)<=a?(this.interval=1,this.intervalType="day"):c/(2*S.dayDuration)<=a?(this.interval=2,this.intervalType="day"):c/(4*S.dayDuration)<=a?(this.interval=4,this.intervalType="day"):c/(1*S.weekDuration)<=a?(this.interval=1,this.intervalType="week"):c/(2*S.weekDuration)<=a?(this.interval=2,this.intervalType="week"):c/(3*S.weekDuration)<=a?(this.interval=3,this.intervalType="week"):c/(1*S.monthDuration)<=a?(this.interval=1,this.intervalType="month"):c/(2*S.monthDuration)<=a?(this.interval=
2,this.intervalType="month"):c/(3*S.monthDuration)<=a?(this.interval=3,this.intervalType="month"):c/(6*S.monthDuration)<=a?(this.interval=6,this.intervalType="month"):(this.interval=c/(1*S.yearDuration)<=a?1:c/(2*S.yearDuration)<=a?2:c/(4*S.yearDuration)<=a?4:Math.floor(z.getNiceNumber(c/(a-1),!0)/S.yearDuration),this.intervalType="year"));if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=e-m/2;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=
g+m/2;d?this.autoValueFormatString="MMM DD YYYY HH:mm":"year"===this.intervalType?this.autoValueFormatString="YYYY":"month"===this.intervalType?this.autoValueFormatString="MMM YYYY":"week"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"day"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"hour"===this.intervalType?this.autoValueFormatString="hh:mm TT":"minute"===this.intervalType?this.autoValueFormatString="hh:mm TT":"second"===this.intervalType?this.autoValueFormatString=
"hh:mm:ss TT":"millisecond"===this.intervalType&&(this.autoValueFormatString="fff'ms'");this.valueFormatString||(this.valueFormatString=this.autoValueFormatString)}else{this.intervalType="number";c=z.getNiceNumber(c,!1);this.interval=this.options&&0<this.options.interval?this.options.interval:z.getNiceNumber(c/(a-1),!0);if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?e-m/2:Math.floor(e/this.interval)*this.interval;if(null===this.viewportMaximum||
isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?g+m/2:Math.ceil(g/this.interval)*this.interval;0===this.viewportMaximum&&0===this.viewportMinimum&&(0===this.options.viewportMinimum?this.viewportMaximum+=10:0===this.options.viewportMaximum&&(this.viewportMinimum-=10),this.options&&"undefined"===typeof this.options.interval&&(this.interval=z.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)))}if(null===this.minimum||null===this.maximum)if("axisX"===this.type?(e=
null!==this.minimum?this.minimum:this.dataInfo.min,g=null!==this.maximum?this.maximum:this.dataInfo.max,0===g-e&&(c="undefined"===typeof this.options.interval?0.4:this.options.interval,g+=c,e-=c),m=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1):"axisY"===this.type&&(e=null!==this.minimum?this.minimum:this.dataInfo.min,g=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(e)||isFinite(g)?0===e&&0===g?(g+=9,e=0):0===g-e?(c=Math.min(Math.abs(0.01*Math.abs(g)),
5),g+=c,e-=c):e>g?(c=Math.min(0.01*Math.abs(this.getApparentDifference(g,e,null,!0)),5),0<=g?e=g-c:g=isFinite(e)?e+c:0):(c=Math.min(0.01*Math.abs(this.getApparentDifference(e,g,null,!0)),0.05),0!==g&&(g+=c),0!==e&&(e-=c)):(g="undefined"===typeof this.options.interval?-Infinity:this.options.interval,e="undefined"!==typeof this.options.interval||isFinite(this.dataInfo.minDiff)?0:Infinity),m=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1,this.includeZero&&(null===this.minimum||
isNaN(this.minimum))&&0<e&&(e=0),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&0>g&&(g=0)),Math.abs(this.getApparentDifference(e,g,null,!0)),"axisX"===this.type&&b){this.valueType="dateTime";if(null===this.minimum||isNaN(this.minimum))this.minimum=e-m/2;if(null===this.maximum||isNaN(this.maximum))this.maximum=g+m/2}else this.intervalType=this.valueType="number",null===this.minimum&&(this.minimum="axisX"===this.type?e-m/2:Math.floor(e/this.interval)*this.interval,this.minimum=Math.min(this.minimum,
null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?Infinity:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum="axisX"===this.type?g+m/2:Math.ceil(g/this.interval)*this.interval,this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?-Infinity:this.sessionVariables.viewportMaximum)),0===this.maximum&&0===this.minimum&&(0===this.options.minimum?this.maximum+=10:0===
this.options.maximum&&(this.minimum-=10));u(this.sessionVariables.newViewportMinimum)&&(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));u(this.sessionVariables.newViewportMaximum)&&(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.range=this.viewportMaximum-this.viewportMinimum;this.intervalStartPosition="axisX"===this.type&&b?this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval):Math.floor((this.viewportMinimum+0.2*this.interval)/
this.interval)*this.interval;this.valueFormatString||(this.valueFormatString=z.generateValueFormatString(this.range,2))}};z.prototype.calculateLogarithmicAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace(),d=Math.log(this.logarithmBase),b;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?500>this.maxWidth?7:Math.max(7,Math.floor(this.maxWidth/100)):Math.max(Math.floor(this.maxWidth/
50),3),c,e,g,m;m=1;if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;if(this.scaleBreaks)for(m=0;m<this.scaleBreaks._appliedBreaks.length;m++)if((!u(this.sessionVariables.newViewportMinimum)&&this.sessionVariables.newViewportMinimum>=this.scaleBreaks._appliedBreaks[m].startValue||!u(this.options.minimum)&&this.options.minimum>=this.scaleBreaks._appliedBreaks[m].startValue||
!u(this.options.viewportMinimum)&&this.viewportMinimum>=this.scaleBreaks._appliedBreaks[m].startValue)&&(!u(this.sessionVariables.newViewportMaximum)&&this.sessionVariables.newViewportMaximum<=this.scaleBreaks._appliedBreaks[m].endValue||!u(this.options.maximum)&&this.options.maximum<=this.scaleBreaks._appliedBreaks[m].endValue||!u(this.options.viewportMaximum)&&this.viewportMaximum<=this.scaleBreaks._appliedBreaks[m].endValue)){this.scaleBreaks._appliedBreaks.splice(m,1);break}"axisX"===this.type?
(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,1===e/c&&(m=Math.pow(this.logarithmBase,"undefined"===typeof this.options.interval?0.4:this.options.interval),e*=m,c/=m),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,
e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,0>=c&&!isFinite(e)?(e="undefined"===typeof this.options.interval?0:this.options.interval,c=1):0>=c?c=e:isFinite(e)||(e=c),1===c&&1===e?(e*=this.logarithmBase-1/this.logarithmBase,c=1):1===e/c?(m=Math.min(e*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),e*=m,c/=m):c>e?(m=Math.min(c/e*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),1<=e?c=e/m:e=c*m):(m=Math.min(e/c*Math.pow(this.logarithmBase,
0.01),Math.pow(this.logarithmBase,0.04)),1!==e&&(e*=m),1!==c&&(c/=m)),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&1<c&&(c=1),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&1>e&&(e=1));m=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?e:this.viewportMaximum)/(isNaN(this.viewportMinimum)||null===
this.viewportMinimum?c:this.viewportMinimum);var l=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?e:this.viewportMaximum)-(isNaN(this.viewportMinimum)||null===this.viewportMinimum?c:this.viewportMinimum);this.intervalType="number";m=Math.pow(this.logarithmBase,z.getNiceNumber(Math.abs(Math.log(m)/d),!1));this.options&&0<this.options.interval?this.interval=this.options.interval:(this.interval=z.getNiceExponent(Math.log(m)/d/(a-1),!0),b=z.getNiceNumber(l/(a-1),!0));if(null===this.viewportMinimum||
isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?c/Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(c)/d/this.interval));if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?e*Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(e)/d/this.interval));1===this.viewportMaximum&&1===this.viewportMinimum&&(1===this.options.viewportMinimum?this.viewportMaximum*=this.logarithmBase-1/this.logarithmBase:
1===this.options.viewportMaximum&&(this.viewportMinimum/=this.logarithmBase-1/this.logarithmBase),this.options&&"undefined"===typeof this.options.interval&&(this.interval=z.getNiceExponent(Math.ceil(Math.log(m)/d)/(a-1)),b=z.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)));if(null===this.minimum||null===this.maximum)"axisX"===this.type?(c=null!==this.minimum?this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,1===e/c&&(m=Math.pow(this.logarithmBase,
"undefined"===typeof this.options.interval?0.4:this.options.interval),e*=m,c/=m),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(c=null!==this.minimum?this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(c)||isFinite(e)?1===c&&1===e?(e*=this.logarithmBase,c/=this.logarithmBase):1===e/c?(m=Math.pow(this.logarithmBase,this.interval),e*=m,c/=m):c>e?(m=
Math.min(0.01*(c/e),5),1<=e?c=e/m:e=c*m):(m=Math.min(e/c*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,0.04)),1!==e&&(e*=m),1!==c&&(c/=m)):(e="undefined"===typeof this.options.interval?0:this.options.interval,c=1),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===this.minimum||isNaN(this.minimum))&&1<c&&(c=1),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&
1>e&&(e=1)),this.intervalType="number",null===this.minimum&&(this.minimum="axisX"===this.type?c/Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(c)/d/this.interval)),this.minimum=Math.min(this.minimum,null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?"undefined"===typeof this.sessionVariables.newViewportMinimum?Infinity:this.sessionVariables.newViewportMinimum:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum=
"axisX"===this.type?e*Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(e)/d/this.interval)),this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?"undefined"===typeof this.sessionVariables.newViewportMaximum?0:this.sessionVariables.newViewportMaximum:this.sessionVariables.viewportMaximum)),1===this.maximum&&1===this.minimum&&(1===this.options.minimum?this.maximum*=this.logarithmBase-1/this.logarithmBase:
1===this.options.maximum&&(this.minimum/=this.logarithmBase-1/this.logarithmBase));this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum);this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum);this.viewportMinimum>this.viewportMaximum&&(!this.options.viewportMinimum&&!this.options.minimum||this.options.viewportMaximum||this.options.maximum?this.options.viewportMinimum||this.options.minimum||!this.options.viewportMaximum&&!this.options.maximum||(this.viewportMinimum=this.minimum=
(this.options.viewportMaximum||this.options.maximum)/Math.pow(this.logarithmBase,2*Math.ceil(this.interval))):this.viewportMaximum=this.maximum=this.options.viewportMinimum||this.options.minimum);c=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(d*this.interval)+0.2)*this.interval);this.range=this.viewportMaximum/this.viewportMinimum;this.noTicks=a;if(!this.options.interval&&this.range<Math.pow(this.logarithmBase,8>this.viewportMaximum||3>a?2:3)){for(d=Math.floor(this.viewportMinimum/
b+0.5)*b;d<this.viewportMinimum;)d+=b;this.equidistantInterval=!1;this.intervalStartPosition=d;this.interval=b}else this.options.interval||(b=Math.ceil(this.interval),this.range>this.interval&&(this.interval=b,c=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(d*this.interval)+0.2)*this.interval))),this.equidistantInterval=!0,this.intervalStartPosition=c;if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",1>this.viewportMinimum)){d=Math.floor(Math.abs(Math.log(this.viewportMinimum)/
Math.LN10))+2;if(isNaN(d)||!isFinite(d))d=2;if(2<d)for(m=0;m<d-2;m++)this.valueFormatString+="#"}};z.generateValueFormatString=function(a,d){var b="#,##0.",c=d;1>a&&(c+=Math.floor(Math.abs(Math.log(a)/Math.LN10)),isNaN(c)||!isFinite(c))&&(c=d);for(var e=0;e<c;e++)b+="#";return b};z.getNiceExponent=function(a,d){var b=Math.floor(Math.log(a)/Math.LN10),c=a/Math.pow(10,b),c=0>b?1>=c?1:5>=c?5:10:Math.max(Math.floor(c),1);return-20>b?Number(c*Math.pow(10,b)):Number((c*Math.pow(10,b)).toFixed(20))};z.getNiceNumber=
function(a,d){var b=Math.floor(Math.log(a)/Math.LN10),c=a/Math.pow(10,b),c=d?1.5>c?1:3>c?2:7>c?5:10:1>=c?1:2>=c?2:5>=c?5:10;return-20>b?Number(c*Math.pow(10,b)):Number((c*Math.pow(10,b)).toFixed(20))};z.prototype.getLabelStartPoint=function(){var a=S[this.intervalType+"Duration"]*this.interval,a=new Date(Math.floor(this.viewportMinimum/a)*a);if("millisecond"!==this.intervalType)if("second"===this.intervalType)0<a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===
this.intervalType){if(0<a.getSeconds()||0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===this.intervalType){if(0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===
this.intervalType){if(0<a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setMonth(a.getMonth()+1),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else"year"===this.intervalType&&(0<a.getMonth()||1<
a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())&&(a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0));return a};qa(Q,V);qa(L,V);L.prototype.createUserOptions=function(a){if("undefined"!==typeof a||this.options._isPlaceholder){var d=0;this.parent.options._isPlaceholder&&this.parent.createUserOptions();this.options._isPlaceholder||(Fa(this.parent[this.optionsName]),d=this.parent.options[this.optionsName].indexOf(this.options));
this.options="undefined"===typeof a?{}:a;this.parent.options[this.optionsName][d]=this.options}};L.prototype.render=function(a){if(0!==this.spacing||0!==this.options.lineThickness&&("undefined"!==typeof this.options.lineThickness||0!==this.parent.lineThickness)){var d=this.ctx,b=this.ctx.globalAlpha;this.ctx=a||this.ctx;this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();var c=this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
e=this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);this.ctx.strokeStyle=this.lineColor;this.ctx.fillStyle=this.color;this.ctx.beginPath();this.ctx.globalAlpha=1;N(this.id);var g,m,l,k,h,p;a=Math.max(this.spacing,3);var q=Math.max(0,this.lineThickness);this.ctx.lineWidth=q;this.ctx.setLineDash&&this.ctx.setLineDash(R(this.lineDashType,q));if("bottom"===this.scaleBreaks.parent._position||"top"===this.scaleBreaks.parent._position)if(c=1===q%2?(c.x<<0)+0.5:c.x<<0,m=1===q%2?(e.x<<0)+0.5:
e.x<<0,"top"===this.scaleBreaks.parent._position?(e=this.chart.plotArea.y1,l=this.chart.plotArea.y2+q/2+0.5<<0):(e=this.chart.plotArea.y2,l=this.chart.plotArea.y1-q/2+0.5<<0,a*=-1),this.bounds={x1:c-q/2,y1:e,x2:m+q/2,y2:l},this.ctx.moveTo(c,e),"straight"===this.type||"top"===this.scaleBreaks.parent._position&&0>=a||"bottom"===this.scaleBreaks.parent._position&&0<=a)this.ctx.lineTo(c,l),this.ctx.lineTo(m,l),this.ctx.lineTo(m,e);else if("wavy"===this.type){k=c;h=e;g=0.5;p=(l-h)/a/3;for(var n=0;n<p;n++)this.ctx.bezierCurveTo(k+
g*a,h+a,k+g*a,h+2*a,k,h+3*a),h+=3*a,g*=-1;this.ctx.bezierCurveTo(k+g*a,h+a,k+g*a,h+2*a,k,h+3*a);k=m;g*=-1;this.ctx.lineTo(k,h);for(n=0;n<p;n++)this.ctx.bezierCurveTo(k+g*a,h-a,k+g*a,h-2*a,k,h-3*a),h-=3*a,g*=-1}else{if("zigzag"===this.type){g=-1;h=e+a;k=c+a;p=(l-h)/a/2;for(n=0;n<p;n++)this.ctx.lineTo(k,h),k+=2*g*a,h+=2*a,g*=-1;this.ctx.lineTo(k,h);k+=m-c;for(n=0;n<p+1;n++)this.ctx.lineTo(k,h),k+=2*g*a,h-=2*a,g*=-1;this.ctx.lineTo(k+g*a,h+a)}}else if("left"===this.scaleBreaks.parent._position||"right"===
this.scaleBreaks.parent._position)if(e=1===q%2?(e.y<<0)+0.5:e.y<<0,l=1===q%2?(c.y<<0)+0.5:c.y<<0,"left"===this.scaleBreaks.parent._position?(c=this.chart.plotArea.x1,m=this.chart.plotArea.x2+q/2+0.5<<0):(c=this.chart.plotArea.x2,m=this.chart.plotArea.x1-q/2+0.5<<0,a*=-1),this.bounds={x1:c,y1:e-q/2,x2:m,y2:l+q/2},this.ctx.moveTo(c,e),"straight"===this.type||"left"===this.scaleBreaks.parent._position&&0>=a||"right"===this.scaleBreaks.parent._position&&0<=a)this.ctx.lineTo(m,e),this.ctx.lineTo(m,l),
this.ctx.lineTo(c,l);else if("wavy"===this.type){k=c;h=e;g=0.5;p=(m-k)/a/3;for(n=0;n<p;n++)this.ctx.bezierCurveTo(k+a,h+g*a,k+2*a,h+g*a,k+3*a,h),k+=3*a,g*=-1;this.ctx.bezierCurveTo(k+a,h+g*a,k+2*a,h+g*a,k+3*a,h);h=l;g*=-1;this.ctx.lineTo(k,h);for(n=0;n<p;n++)this.ctx.bezierCurveTo(k-a,h+g*a,k-2*a,h+g*a,k-3*a,h),k-=3*a,g*=-1}else if("zigzag"===this.type){g=1;h=e-a;k=c+a;p=(m-k)/a/2;for(n=0;n<p;n++)this.ctx.lineTo(k,h),h+=2*g*a,k+=2*a,g*=-1;this.ctx.lineTo(k,h);h+=l-e;for(n=0;n<p+1;n++)this.ctx.lineTo(k,
h),h+=2*g*a,k-=2*a,g*=-1;this.ctx.lineTo(k+a,h+g*a)}0<q&&this.ctx.stroke();this.ctx.closePath();this.ctx.globalAlpha=this.fillOpacity;this.ctx.globalCompositeOperation="destination-over";this.ctx.fill();this.ctx.restore();this.ctx.globalAlpha=b;this.ctx=d}};qa(X,V);X.prototype.createUserOptions=function(a){if("undefined"!==typeof a||this.options._isPlaceholder){var d=0;this.parent.options._isPlaceholder&&this.parent.createUserOptions();this.options._isPlaceholder||(Fa(this.parent.stripLines),d=this.parent.options.stripLines.indexOf(this.options));
this.options="undefined"===typeof a?{}:a;this.parent.options.stripLines[d]=this.options}};X.prototype.render=function(){this.ctx.save();var a=this.parent.getPixelCoordinatesOnAxis(this.value),d=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*this.thickness);if(0<d){var b=null===this.opacity?1:this.opacity;this.ctx.strokeStyle=this.color;this.ctx.beginPath();var c=this.ctx.globalAlpha;this.ctx.globalAlpha=b;N(this.id);var e,g,m,l;this.ctx.lineWidth=
d;this.ctx.setLineDash&&this.ctx.setLineDash(R(this.lineDashType,d));if("bottom"===this.parent._position||"top"===this.parent._position)e=g=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,m=this.chart.plotArea.y1,l=this.chart.plotArea.y2,this.bounds={x1:e-d/2,y1:m,x2:g+d/2,y2:l};else if("left"===this.parent._position||"right"===this.parent._position)m=l=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,e=this.chart.plotArea.x1,g=this.chart.plotArea.x2,this.bounds={x1:e,y1:m-d/2,x2:g,y2:l+d/2};this.ctx.moveTo(e,
m);this.ctx.lineTo(g,l);this.ctx.stroke();this.ctx.globalAlpha=c}this.ctx.restore()};qa(fa,V);fa.prototype.render=function(a,d){var b,c,e,g,m=null,l=m=null,k="";if(!this.valueFormatString)if("dateTime"===this.parent.valueType)this.valueFormatString=this.parent.valueFormatString;else{var h=0,h="xySwapped"===this.chart.plotInfo.axisPlacement?50<this.parent.range?0:500<this.chart.width&&25>this.parent.range?2:Math.floor(Math.abs(Math.log(this.parent.range)/Math.LN10))+(5>this.parent.range?2:10>this.parent.range?
1:0):50<this.parent.range?0:Math.floor(Math.abs(Math.log(this.parent.range)/Math.LN10))+(5>this.parent.range?2:10>this.parent.range?1:0);this.valueFormatString=z.generateValueFormatString(this.parent.range,h)}var l=null===this.opacity?1:this.opacity,h=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*this.thickness),p=this.chart.overlaidCanvasCtx,q=p.globalAlpha;p.globalAlpha=l;p.beginPath();p.strokeStyle=this.color;p.lineWidth=h;p.save();this.labelFontSize=
u(this.options.labelFontSize)?this.parent.labelFontSize:this.labelFontSize;if("left"===this.parent._position||"right"===this.parent._position)this.labelMaxWidth=u(this.options.labelMaxWidth)?this.parent.bounds.x2-this.parent.bounds.x1:this.labelMaxWidth,this.labelMaxHeight=u(this.options.labelWrap)||this.labelWrap?3*this.chart.height:2*this.labelFontSize;else if("top"===this.parent._position||"bottom"===this.parent._position)this.labelMaxWidth=u(this.options.labelMaxWidth)?3*this.chart.width:this.labelMaxWidth,
this.labelMaxHeight=u(this.options.labelWrap)||this.labelWrap?this.parent.bounds.height:2*this.labelFontSize;0<h&&p.setLineDash&&p.setLineDash(R(this.lineDashType,h));l=new ka(p,{x:0,y:0,padding:{top:2,right:3,bottom:2,left:4},backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,maxWidth:this.labelMaxWidth,maxHeight:this.labelMaxHeight,angle:this.labelAngle,text:k,horizontalAlign:"left",fontSize:this.labelFontSize,
fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"});if(this.snapToDataPoint){var n=0,m=[];if("xySwapped"===this.chart.plotInfo.axisPlacement){var f=null;if("bottom"===this.parent._position||"top"===this.parent._position)n=this.parent.dataSeries[0].axisX.convertPixelToValue({y:d});else if("left"===this.parent._position||"right"===this.parent._position)n=this.parent.convertPixelToValue({y:d});for(var r=0;r<
this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(f.dataSeries=this.parent.dataSeries[r],null!==f.dataPoint.y&&m.push(f));f=null;if(0===m.length)return;m.sort(function(a,b){return a.distance-b.distance});f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y));r=0;if("rangeBar"===m[0].dataSeries.type||"error"===m[0].dataSeries.type)for(var f=Math.abs(a-this.parent.convertValueToPixel(m[r].dataPoint.y[0])),v=0,n=0;n<m.length;n++)if(m[n].dataPoint.y&&
m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y)),v<f&&(f=v,r=n);else if("stackedBar"===m[0].dataSeries.type)for(var f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y)),D=v=0,n=r=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),
v<f&&(f=v,r=n);else D+=m[n].dataPoint.y,v=Math.abs(a-this.parent.convertValueToPixel(D)),v<f&&(f=v,r=n);else if("stackedBar100"===m[0].dataSeries.type)for(var f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y)),t=D=v=0,n=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else D+=m[n].dataPoint.y,t=m[n].dataPoint.x.getTime?m[n].dataPoint.x.getTime():m[n].dataPoint.x,
t=100*(D/m[n].dataSeries.plotUnit.dataPointYSums[t]),v=Math.abs(a-this.parent.convertValueToPixel(t)),v<f&&(f=v,r=n);else for(f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y)),n=r=v=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y)),v<f&&(f=v,r=n);k=m[r];if("bottom"===this.parent._position||
"top"===this.parent._position){b=0;if("rangeBar"===this.parent.dataSeries[r].type||"error"===this.parent.dataSeries[r].type){f=Math.abs(a-this.parent.convertValueToPixel(k.dataPoint.y[0]));for(n=v=0;n<k.dataPoint.y.length;n++)v=Math.abs(a-this.parent.convertValueToPixel(k.dataPoint.y[n])),v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.y[b])<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.y[b])<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,
axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y[b]}):u(this.options.label)?ba(k.dataPoint.y[b],this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedBar"===this.parent.dataSeries[r].type){f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y));D=v=0;for(n=r;0<=n;n--)D+=m[n].dataPoint.y,v=Math.abs(a-this.parent.convertValueToPixel(D)),v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(D)<<0)+0.5:this.parent.convertValueToPixel(D)<<0;
l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y}):u(this.options.label)?ba(k.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedBar100"===this.parent.dataSeries[r].type){f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y));t=D=v=0;for(n=r;0<=n;n--)D+=m[n].dataPoint.y,t=m[n].dataPoint.x.getTime?m[n].dataPoint.x.getTime():m[n].dataPoint.x,t=100*(D/m[n].dataSeries.plotUnit.dataPointYSums[t]),
v=Math.abs(a-this.parent.convertValueToPixel(t)),v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(t)<<0)+0.5:this.parent.convertValueToPixel(t)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:t}):u(this.options.label)?ba(t,this.valueFormatString,this.chart._cultureInfo):this.label}else m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.y)<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.y)<<
0,l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y}):u(this.options.label)?ba(k.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label;b=c=m;e=this.chart.plotArea.y1;g=this.chart.plotArea.y2;this.bounds={x1:b-h/2,y1:e,x2:c+h/2,y2:g};l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2?l.x=this.chart.bounds.x2-l.width:l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1);l.y=this.parent.lineCoordinates.y2+
l.fontSize/2+2}else if("left"===this.parent._position||"right"===this.parent._position){e=g=m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.x)<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.x)<<0;b=this.chart.plotArea.x1;c=this.chart.plotArea.x2;this.bounds={x1:b,y1:e-h/2,x2:c,y2:g+h/2};t=!1;if(this.parent.labels)for(m=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=m)if(this.parent.labels[n])t=!0;else{t=!1;break}if(t){if("axisX"===this.parent.type)for(n=
this.parent.convertPixelToValue({y:d}),f=null,r=0;r<this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.x}):u(this.options.label)?f.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.x}):
u(this.options.label)?Ca(k.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.x}):u(this.options.label)?ba(k.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label);l.y=g+l.fontSize/2-l.measureText().height/2+2;l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-
l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}}else if("bottom"===this.parent._position||"top"===this.parent._position){n=this.parent.convertPixelToValue({x:a});for(r=0;r<this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(f.dataSeries=this.parent.dataSeries[r],
null!==f.dataPoint.y&&m.push(f));if(0===m.length)return;m.sort(function(a,b){return a.distance-b.distance});k=m[0];b=c=m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.x)<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.x)<<0;e=this.chart.plotArea.y1;g=this.chart.plotArea.y2;this.bounds={x1:b-h/2,y1:e,x2:c+h/2,y2:g};t=!1;if(this.parent.labels)for(m=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=m)if(this.parent.labels[n])t=!0;else{t=!1;break}if(t){if("axisX"===
this.parent.type)for(n=this.parent.convertPixelToValue({x:a}),f=null,r=0;r<this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.x}):u(this.options.label)?f.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,
value:k.dataPoint.x}):u(this.options.label)?Ca(k.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.x}):u(this.options.label)?ba(k.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label);l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2&&(l.x=this.chart.bounds.x2-l.width);l.x<this.chart.bounds.x1&&
(l.x=this.chart.bounds.x1);"bottom"===this.parent._position?l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2:"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-l.height+l.fontSize/2+2)}else if("left"===this.parent._position||"right"===this.parent._position){!u(this.parent.dataSeries)&&0<this.parent.dataSeries.length&&(n=this.parent.dataSeries[0].axisX.convertPixelToValue({x:a}));for(r=0;r<this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&
(f.dataSeries=this.parent.dataSeries[r],null!==f.dataPoint.y&&m.push(f));if(0===m.length)return;m.sort(function(a,b){return a.distance-b.distance});r=0;if("rangeColumn"===m[0].dataSeries.type||"rangeArea"===m[0].dataSeries.type||"error"===m[0].dataSeries.type||"rangeSplineArea"===m[0].dataSeries.type||"candlestick"===m[0].dataSeries.type||"ohlc"===m[0].dataSeries.type||"boxAndWhisker"===m[0].dataSeries.type)for(f=Math.abs(d-this.parent.convertValueToPixel(m[0].dataPoint.y[0])),n=v=0;n<m.length;n++)if(m[n].dataPoint.y&&
m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y)),v<f&&(f=v,r=n);else if("stackedColumn"===m[0].dataSeries.type||"stackedArea"===m[0].dataSeries.type)for(f=Math.abs(d-this.parent.convertValueToPixel(m[0].dataPoint.y)),n=D=v=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),
v<f&&(f=v,r=n);else D+=m[n].dataPoint.y,v=Math.abs(d-this.parent.convertValueToPixel(D)),v<f&&(f=v,r=n);else if("stackedColumn100"===m[0].dataSeries.type||"stackedArea100"===m[0].dataSeries.type)for(f=Math.abs(d-this.parent.convertValueToPixel(m[0].dataPoint.y)),n=t=D=v=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else D+=m[n].dataPoint.y,t=m[n].dataPoint.x.getTime?
m[n].dataPoint.x.getTime():m[n].dataPoint.x,t=100*(D/m[n].dataSeries.plotUnit.dataPointYSums[t]),v=Math.abs(d-this.parent.convertValueToPixel(t)),v<f&&(f=v,r=n);else for(f=Math.abs(d-this.parent.convertValueToPixel(m[0].dataPoint.y)),n=v=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y)),v<f&&(f=v,r=
n);k=m[r];b=0;if("rangeColumn"===this.parent.dataSeries[r].type||"rangeArea"===this.parent.dataSeries[r].type||"error"===this.parent.dataSeries[r].type||"rangeSplineArea"===this.parent.dataSeries[r].type||"candlestick"===this.parent.dataSeries[r].type||"ohlc"===this.parent.dataSeries[r].type||"boxAndWhisker"===this.parent.dataSeries[r].type){f=Math.abs(d-this.parent.convertValueToPixel(k.dataPoint.y[0]));for(n=v=0;n<k.dataPoint.y.length;n++)v=Math.abs(d-this.parent.convertValueToPixel(k.dataPoint.y[n])),
v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.y[b])<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.y[b])<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y[b]}):u(this.options.label)?ba(k.dataPoint.y[b],this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedColumn"===this.parent.dataSeries[r].type||"stackedArea"===this.parent.dataSeries[r].type){f=Math.abs(d-
this.parent.convertValueToPixel(m[0].dataPoint.y));D=v=0;for(n=r;0<=n;n--)D+=m[n].dataPoint.y,v=Math.abs(d-this.parent.convertValueToPixel(D)),v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(D)<<0)+0.5:this.parent.convertValueToPixel(D)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y}):u(this.options.label)?ba(k.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedColumn100"===
this.parent.dataSeries[r].type||"stackedArea100"===this.parent.dataSeries[r].type){f=Math.abs(d-this.parent.convertValueToPixel(m[0].dataPoint.y));D=v=0;for(n=r;0<=n;n--)D+=m[n].dataPoint.y,t=m[n].dataPoint.x.getTime?m[n].dataPoint.x.getTime():m[n].dataPoint.x,t=100*(D/m[n].dataSeries.plotUnit.dataPointYSums[t]),v=Math.abs(d-this.parent.convertValueToPixel(t)),v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(t)<<0)+0.5:this.parent.convertValueToPixel(t)<<0;l.text=this.labelFormatter?
this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:t}):u(this.options.label)?ba(t,this.valueFormatString,this.chart._cultureInfo):this.label}else"waterfall"===this.parent.dataSeries[r].type?(m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataSeries.dataPointEOs[k.index].cumulativeSum)<<0)+0.5:this.parent.convertValueToPixel(k.dataSeries.dataPointEOs[k.index].cumulativeSum)<<0,l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,
crosshair:this.options,value:k.dataSeries.dataPointEOs[k.index].cumulativeSum}):u(this.options.label)?ba(k.dataSeries.dataPointEOs[k.index].cumulativeSum,this.valueFormatString,this.chart._cultureInfo):this.label):(m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.y)<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.y)<<0,l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y}):u(this.options.label)?ba(k.dataPoint.y,
this.valueFormatString,this.chart._cultureInfo):this.label);e=g=m;b=this.chart.plotArea.x1;c=this.chart.plotArea.x2;this.bounds={x1:b,y1:e-h/2,x2:c,y2:g+h/2};l.y=g+l.fontSize/2-l.measureText().height/2+2;l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===
this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}m=null;("bottom"===this.parent._position||"top"===this.parent._position)&&(b>=this.parent.convertValueToPixel(this.parent.viewportMinimum)&&c<=this.parent.convertValueToPixel(this.parent.viewportMaximum))&&(0<h&&(p.moveTo(b,e),p.lineTo(c,g),p.stroke()),p.restore(),!u(l.text)&&("number"===typeof l.text.valueOf()||0<l.text.length)&&l.render(!0));("left"===this.parent._position||"right"===this.parent._position)&&(g>=this.parent.convertValueToPixel(this.parent.viewportMaximum)&&
e<=this.parent.convertValueToPixel(this.parent.viewportMinimum))&&(0<h&&(p.moveTo(b,e),p.lineTo(c,g),p.stroke()),p.restore(),!u(l.text)&&("number"===typeof l.text.valueOf()||0<l.text.length)&&l.render(!0))}else{if("bottom"===this.parent._position||"top"===this.parent._position)b=c=m=1===p.lineWidth%2?(a<<0)+0.5:a<<0,e=this.chart.plotArea.y1,g=this.chart.plotArea.y2,this.bounds={x1:b-h/2,y1:e,x2:c+h/2,y2:g};else if("left"===this.parent._position||"right"===this.parent._position)e=g=m=1===p.lineWidth%
2?(d<<0)+0.5:d<<0,b=this.chart.plotArea.x1,c=this.chart.plotArea.x2,this.bounds={x1:b,y1:e-h/2,x2:c,y2:g+h/2};if("xySwapped"===this.chart.plotInfo.axisPlacement)if("left"===this.parent._position||"right"===this.parent._position){t=!1;if(this.parent.labels)for(m=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=m)if(this.parent.labels[n])t=!0;else{t=!1;break}if(t){if("axisX"===this.parent.type)for(n=this.parent.convertPixelToValue({y:d}),f=null,r=0;r<this.parent.dataSeries.length;r++)(f=
this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):u(this.options.label)?f.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(d)}):u(this.options.label)?Ca(this.parent.convertPixelToValue(d),
this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(d)}):u(this.options.label)?ba(this.parent.convertPixelToValue(d),this.valueFormatString,this.chart._cultureInfo):this.label);l.y=d+l.fontSize/2-l.measureText().height/2+2;l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-
l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?l.x=this.parent.lineCoordinates.x1-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}else{if("bottom"===this.parent._position||"top"===this.parent._position)l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):u(this.options.label)?
ba(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):this.label,l.x=b-l.measureText().width/2,l.x+l.width>this.chart.bounds.x2&&(l.x=this.chart.bounds.x2-l.width),l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1),"bottom"===this.parent._position&&(l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2),"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-l.height+l.fontSize/2+2)}else if("bottom"===this.parent._position||"top"===this.parent._position){t=
!1;k="";if(this.parent.labels)for(m=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=m)if(this.parent.labels[n])t=!0;else{t=!1;break}if(t){if("axisX"===this.parent.type)for(n=this.parent.convertPixelToValue({x:a}),f=null,r=0;r<this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):
u(this.options.label)?f.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):u(this.options.label)?Ca(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,
value:0<this.parent.dataSeries.length?this.parent.convertPixelToValue(a):""}):u(this.options.label)?ba(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):this.label);l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2&&(l.x=this.chart.bounds.x2-l.width);l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1);"bottom"===this.parent._position?l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2:"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-l.height+
l.fontSize/2+2)}else if("left"===this.parent._position||"right"===this.parent._position)l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(d)}):u(this.options.label)?ba(this.parent.convertPixelToValue(d),this.valueFormatString,this.chart._cultureInfo):this.label,l.y=d+l.fontSize/2-l.measureText().height/2+2,l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-
l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2),"left"===this.parent._position?l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2);0<h&&(p.moveTo(b,e),p.lineTo(c,g),p.stroke());p.restore();!u(l.text)&&("number"===typeof l.text.valueOf()||0<l.text.length)&&l.render(!0)}p.globalAlpha=q};qa($,V);$.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");
this.container.setAttribute("class","canvasjs-chart-tooltip");this.container.style.position="absolute";this.container.style.height="auto";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";this.container.style.zIndex="1000";this.container.style.pointerEvents="none";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';a+="line-height: auto;";a+="margin: 0px 0px 0px 0px;";a+="padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";
a+="font-weight: normal;";a+="font-style: "+(r?"italic;":"normal;");a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";a+="text-align: left;";a+="border: 2px solid gray;";a+=r?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 5px;";a+="-moz-user-select:none;";a+="-khtml-user-select: none;";a+="-webkit-user-select: none;";a+="-ms-user-select: none;";a+="user-select: none;";
r||(a+="filter: alpha(opacity = 90);",a+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");a+='} "> Sample Tooltip</div>';this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=this.contentDiv.style.borderRadius;this.chart._canvasJSContainer.appendChild(this.container)}};$.prototype.mouseMoveHandler=function(a,d){this._lastUpdated&&4>(new Date).getTime()-this._lastUpdated||(this._lastUpdated=(new Date).getTime(),
this.chart.resetOverlayedCanvas(),this._updateToolTip(a,d))};$.prototype._updateToolTip=function(a,d,b){b="undefined"===typeof b?!0:b;this.container||this._initialize();this.enabled||this.hide();if(!this.chart.disableToolTip){if("undefined"===typeof a||"undefined"===typeof d){if(isNaN(this._prevX)||isNaN(this._prevY))return;a=this._prevX;d=this._prevY}else this._prevX=a,this._prevY=d;var c=null,e=null,g=[],k=0;if(this.shared&&this.enabled&&"none"!==this.chart.plotInfo.axisPlacement){if("xySwapped"===
this.chart.plotInfo.axisPlacement){var l=[];if(this.chart.axisX)for(var p=0;p<this.chart.axisX.length;p++){for(var k=this.chart.axisX[p].convertPixelToValue({y:d}),h=null,c=0;c<this.chart.axisX[p].dataSeries.length;c++)(h=this.chart.axisX[p].dataSeries[c].getDataPointAtX(k,b))&&0<=h.index&&(h.dataSeries=this.chart.axisX[p].dataSeries[c],null!==h.dataPoint.y&&l.push(h));h=null}if(this.chart.axisX2)for(p=0;p<this.chart.axisX2.length;p++){k=this.chart.axisX2[p].convertPixelToValue({y:d});h=null;for(c=
0;c<this.chart.axisX2[p].dataSeries.length;c++)(h=this.chart.axisX2[p].dataSeries[c].getDataPointAtX(k,b))&&0<=h.index&&(h.dataSeries=this.chart.axisX2[p].dataSeries[c],null!==h.dataPoint.y&&l.push(h));h=null}}else{l=[];if(this.chart.axisX)for(p=0;p<this.chart.axisX.length;p++)for(k=this.chart.axisX[p].convertPixelToValue({x:a}),h=null,c=0;c<this.chart.axisX[p].dataSeries.length;c++)(h=this.chart.axisX[p].dataSeries[c].getDataPointAtX(k,b))&&0<=h.index&&(h.dataSeries=this.chart.axisX[p].dataSeries[c],
null!==h.dataPoint.y&&l.push(h));if(this.chart.axisX2)for(p=0;p<this.chart.axisX2.length;p++)for(k=this.chart.axisX2[p].convertPixelToValue({x:a}),h=null,c=0;c<this.chart.axisX2[p].dataSeries.length;c++)(h=this.chart.axisX2[p].dataSeries[c].getDataPointAtX(k,b))&&0<=h.index&&(h.dataSeries=this.chart.axisX2[p].dataSeries[c],null!==h.dataPoint.y&&l.push(h))}if(0===l.length)return;l.sort(function(a,b){return a.distance-b.distance});b=l[0];for(c=0;c<l.length;c++)l[c].dataPoint.x.valueOf()===b.dataPoint.x.valueOf()&&
g.push(l[c]);l=null}else{if(h=this.chart.getDataPointAtXY(a,d,b))this.currentDataPointIndex=h.dataPointIndex,this.currentSeriesIndex=h.dataSeries.index;else if(r)if(h=ab(a,d,this.chart._eventManager.ghostCtx),0<h&&"undefined"!==typeof this.chart._eventManager.objectMap[h]){h=this.chart._eventManager.objectMap[h];if("legendItem"===h.objectType)return;this.currentSeriesIndex=h.dataSeriesIndex;this.currentDataPointIndex=0<=h.dataPointIndex?h.dataPointIndex:-1}else this.currentDataPointIndex=-1;else this.currentDataPointIndex=
-1;if(0<=this.currentSeriesIndex){e=this.chart.data[this.currentSeriesIndex];h={};if(0<=this.currentDataPointIndex)c=e.dataPoints[this.currentDataPointIndex],h.dataSeries=e,h.dataPoint=c,h.index=this.currentDataPointIndex,h.distance=Math.abs(c.x-k),"waterfall"===e.type&&(h.cumulativeSumYStartValue=e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue,h.cumulativeSum=e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);else{if(!this.enabled||"line"!==e.type&&"stepLine"!==e.type&&
"spline"!==e.type&&"area"!==e.type&&"stepArea"!==e.type&&"splineArea"!==e.type&&"stackedArea"!==e.type&&"stackedArea100"!==e.type&&"rangeArea"!==e.type&&"rangeSplineArea"!==e.type&&"candlestick"!==e.type&&"ohlc"!==e.type&&"boxAndWhisker"!==e.type)return;k=e.axisX.convertPixelToValue({x:a});h=e.getDataPointAtX(k,b);h.dataSeries=e;this.currentDataPointIndex=h.index;c=h.dataPoint}if(!u(h.dataPoint.y))if(h.dataSeries.axisY)if(0<h.dataPoint.y.length){for(c=b=0;c<h.dataPoint.y.length;c++)h.dataPoint.y[c]<
h.dataSeries.axisY.viewportMinimum?b--:h.dataPoint.y[c]>h.dataSeries.axisY.viewportMaximum&&b++;b<h.dataPoint.y.length&&b>-h.dataPoint.y.length&&g.push(h)}else"column"===e.type||"bar"===e.type?0>h.dataPoint.y?0>h.dataSeries.axisY.viewportMinimum&&h.dataSeries.axisY.viewportMaximum>=h.dataPoint.y&&g.push(h):h.dataSeries.axisY.viewportMinimum<=h.dataPoint.y&&0<=h.dataSeries.axisY.viewportMaximum&&g.push(h):"bubble"===e.type?(b=this.chart._eventManager.objectMap[e.dataPointIds[h.index]].size/2,h.dataPoint.y>=
h.dataSeries.axisY.viewportMinimum-b&&h.dataPoint.y<=h.dataSeries.axisY.viewportMaximum+b&&g.push(h)):"waterfall"===e.type?(b=0,h.cumulativeSumYStartValue<h.dataSeries.axisY.viewportMinimum?b--:h.cumulativeSumYStartValue>h.dataSeries.axisY.viewportMaximum&&b++,h.cumulativeSum<h.dataSeries.axisY.viewportMinimum?b--:h.cumulativeSum>h.dataSeries.axisY.viewportMaximum&&b++,2>b&&-2<b&&g.push(h)):(0<=h.dataSeries.type.indexOf("100")||"stackedColumn"===e.type||"stackedBar"===e.type||h.dataPoint.y>=h.dataSeries.axisY.viewportMinimum&&
h.dataPoint.y<=h.dataSeries.axisY.viewportMaximum)&&g.push(h);else g.push(h)}}if(0<g.length&&(this.highlightObjects(g),this.enabled))if(b="",b=this.getToolTipInnerHTML({entries:g}),null!==b){this.contentDiv.innerHTML=b;b=!1;"none"===this.container.style.display&&(b=!0,this.container.style.display="block");try{this.contentDiv.style.background=this.backgroundColor?this.backgroundColor:r?"rgba(255,255,255,.9)":"rgb(255,255,255)",this.borderColor="waterfall"===g[0].dataSeries.type?this.contentDiv.style.borderRightColor=
this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataPoint.color?g[0].dataPoint.color:0<g[0].dataPoint.y?g[0].dataSeries.risingColor:g[0].dataSeries.fallingColor:"error"===g[0].dataSeries.type?this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataSeries.color?g[0].dataSeries.color:g[0].dataSeries._colorSet[e.index%
g[0].dataSeries._colorSet.length]:this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataPoint.color?g[0].dataPoint.color:g[0].dataSeries.color?g[0].dataSeries.color:g[0].dataSeries._colorSet[g[0].index%g[0].dataSeries._colorSet.length],this.contentDiv.style.borderWidth=this.borderThickness||0===this.borderThickness?this.borderThickness+"px":"2px",this.contentDiv.style.borderRadius=this.cornerRadius||
0===this.cornerRadius?this.cornerRadius+"px":"5px",this.container.style.borderRadius=this.contentDiv.style.borderRadius,this.contentDiv.style.fontSize=this.fontSize||0===this.fontSize?this.fontSize+"px":"14px",this.contentDiv.style.color=this.fontColor?this.fontColor:"#000000",this.contentDiv.style.fontFamily=this.fontFamily?this.fontFamily:"Calibri, Arial, Georgia, serif;",this.contentDiv.style.fontWeight=this.fontWeight?this.fontWeight:"normal",this.contentDiv.style.fontStyle=this.fontStyle?this.fontStyle:
r?"italic":"normal"}catch(s){}"pie"===g[0].dataSeries.type||"doughnut"===g[0].dataSeries.type||"funnel"===g[0].dataSeries.type||"pyramid"===g[0].dataSeries.type||"bar"===g[0].dataSeries.type||"rangeBar"===g[0].dataSeries.type||"stackedBar"===g[0].dataSeries.type||"stackedBar100"===g[0].dataSeries.type?a=a-10-this.container.clientWidth:(a=g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x)-this.container.clientWidth<<0,a-=10);0>a&&(a+=this.container.clientWidth+20);a+this.container.clientWidth>
Math.max(this.chart.container.clientWidth,this.chart.width)&&(a=Math.max(0,Math.max(this.chart.container.clientWidth,this.chart.width)-this.container.clientWidth));d=1!==g.length||this.shared||"line"!==g[0].dataSeries.type&&"stepLine"!==g[0].dataSeries.type&&"spline"!==g[0].dataSeries.type&&"area"!==g[0].dataSeries.type&&"stepArea"!==g[0].dataSeries.type&&"splineArea"!==g[0].dataSeries.type?"bar"===g[0].dataSeries.type||"rangeBar"===g[0].dataSeries.type||"stackedBar"===g[0].dataSeries.type||"stackedBar100"===
g[0].dataSeries.type?g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x):d:g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);d=-d+10;0<d+this.container.clientHeight+5&&(d-=d+this.container.clientHeight+5-0);this.fixMozTransitionDelay(a,d);!this.animationEnabled||b?this.disableAnimation():(this.enableAnimation(),this.container.style.MozTransition=this.mozContainerTransition);this.container.style.left=a+"px";this.container.style.bottom=d+"px"}else this.hide(!1)}};$.prototype.highlightObjects=
function(a){var d=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();d.clearRect(0,0,this.chart.width,this.chart.height);d.save();var b=this.chart.plotArea,c=0;d.beginPath();d.rect(b.x1,b.y1,b.x2-b.x1,b.y2-b.y1);d.clip();for(b=0;b<a.length;b++){var e=a[b];if((e=this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]])&&e.objectType&&"dataPoint"===e.objectType){var c=this.chart.data[e.dataSeriesIndex],g=c.dataPoints[e.dataPointIndex],k=e.dataPointIndex;!1===g.highlightEnabled||
!0!==c.highlightEnabled&&!0!==g.highlightEnabled||("line"===c.type||"stepLine"===c.type||"spline"===c.type||"scatter"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type?(g=c.getMarkerProperties(k,e.x1,e.y1,this.chart.overlaidCanvasCtx),g.size=Math.max(1.5*g.size<<0,10),g.borderColor=g.borderColor||"#FFFFFF",g.borderThickness=g.borderThickness||Math.ceil(0.1*g.size),ia.drawMarkers([g]),
"undefined"!==typeof e.y2&&(g=c.getMarkerProperties(k,e.x1,e.y2,this.chart.overlaidCanvasCtx),g.size=Math.max(1.5*g.size<<0,10),g.borderColor=g.borderColor||"#FFFFFF",g.borderThickness=g.borderThickness||Math.ceil(0.1*g.size),ia.drawMarkers([g]))):"bubble"===c.type?(g=c.getMarkerProperties(k,e.x1,e.y1,this.chart.overlaidCanvasCtx),g.size=e.size,g.color="white",g.borderColor="white",d.globalAlpha=0.3,ia.drawMarkers([g]),d.globalAlpha=1):"column"===c.type||"stackedColumn"===c.type||"stackedColumn100"===
c.type||"bar"===c.type||"rangeBar"===c.type||"stackedBar"===c.type||"stackedBar100"===c.type||"rangeColumn"===c.type||"waterfall"===c.type?ea(d,e.x1,e.y1,e.x2,e.y2,"white",0,null,!1,!1,!1,!1,0.3):"pie"===c.type||"doughnut"===c.type?ja(d,e.center,e.radius,"white",c.type,e.startAngle,e.endAngle,0.3,e.percentInnerRadius):"funnel"===c.type||"pyramid"===c.type?ra(d,e.funnelSection,0.3,"white"):"candlestick"===c.type?(d.globalAlpha=1,d.strokeStyle=e.color,d.lineWidth=2*e.borderThickness,c=0===d.lineWidth%
2?0:0.5,d.beginPath(),d.moveTo(e.x3-c,Math.min(e.y2,e.y3)),d.lineTo(e.x3-c,Math.min(e.y1,e.y4)),d.stroke(),d.beginPath(),d.moveTo(e.x3-c,Math.max(e.y1,e.y4)),d.lineTo(e.x3-c,Math.max(e.y2,e.y3)),d.stroke(),ea(d,e.x1,Math.min(e.y1,e.y4),e.x2,Math.max(e.y1,e.y4),"transparent",2*e.borderThickness,e.color,!1,!1,!1,!1),d.globalAlpha=1):"ohlc"===c.type?(d.globalAlpha=1,d.strokeStyle=e.color,d.lineWidth=2*e.borderThickness,c=0===d.lineWidth%2?0:0.5,d.beginPath(),d.moveTo(e.x3-c,e.y2),d.lineTo(e.x3-c,e.y3),
d.stroke(),d.beginPath(),d.moveTo(e.x3,e.y1),d.lineTo(e.x1,e.y1),d.stroke(),d.beginPath(),d.moveTo(e.x3,e.y4),d.lineTo(e.x2,e.y4),d.stroke(),d.globalAlpha=1):"boxAndWhisker"===c.type?(d.save(),d.globalAlpha=1,d.strokeStyle=e.stemColor,d.lineWidth=2*e.stemThickness,0<e.stemThickness&&(d.beginPath(),d.moveTo(e.x3,e.y2+e.borderThickness/2),d.lineTo(e.x3,e.y1+e.whiskerThickness/2),d.stroke(),d.beginPath(),d.moveTo(e.x3,e.y4-e.whiskerThickness/2),d.lineTo(e.x3,e.y3-e.borderThickness/2),d.stroke()),d.beginPath(),
ea(d,e.x1-e.borderThickness/2,Math.max(e.y2+e.borderThickness/2,e.y3+e.borderThickness/2),e.x2+e.borderThickness/2,Math.min(e.y2-e.borderThickness/2,e.y3-e.borderThickness/2),"transparent",e.borderThickness,e.color,!1,!1,!1,!1),d.globalAlpha=1,d.strokeStyle=e.whiskerColor,d.lineWidth=2*e.whiskerThickness,0<e.whiskerThickness&&(d.beginPath(),d.moveTo(Math.floor(e.x3-e.whiskerLength/2),e.y4),d.lineTo(Math.ceil(e.x3+e.whiskerLength/2),e.y4),d.stroke(),d.beginPath(),d.moveTo(Math.floor(e.x3-e.whiskerLength/
2),e.y1),d.lineTo(Math.ceil(e.x3+e.whiskerLength/2),e.y1),d.stroke()),d.globalAlpha=1,d.strokeStyle=e.lineColor,d.lineWidth=2*e.lineThickness,0<e.lineThickness&&(d.beginPath(),d.moveTo(e.x1,e.y5),d.lineTo(e.x2,e.y5),d.stroke()),d.restore(),d.globalAlpha=1):"error"===c.type&&E(d,e.x1,e.y1,e.x2,e.y2,"white",e.whiskerProperties,e.stemProperties,e.isXYSwapped,0.3))}}d.restore();d.globalAlpha=1;d.beginPath()};$.prototype.getToolTipInnerHTML=function(a){a=a.entries;for(var d=null,b=null,c=null,e=0,g="",
k=!0,l=0;l<a.length;l++)if(a[l].dataSeries.toolTipContent||a[l].dataPoint.toolTipContent){k=!1;break}if(k&&(this.content&&"function"===typeof this.content||this.contentFormatter))a={chart:this.chart,toolTip:this.options,entries:a},d=this.contentFormatter?this.contentFormatter(a):this.content(a);else if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){for(var p=null,h="",l=0;l<a.length;l++)b=a[l].dataSeries,c=a[l].dataPoint,e=a[l].index,g="",0===l&&(k&&!this.content)&&(this.chart.axisX&&0<
this.chart.axisX.length?h+="undefined"!==typeof this.chart.axisX[0].labels[c.x]?this.chart.axisX[0].labels[c.x]:"{x}":this.chart.axisX2&&0<this.chart.axisX2.length&&(h+="undefined"!==typeof this.chart.axisX2[0].labels[c.x]?this.chart.axisX2[0].labels[c.x]:"{x}"),h+="</br>",h=this.chart.replaceKeywordsWithValue(h,c,b,e)),null===c.toolTipContent||"undefined"===typeof c.toolTipContent&&null===b.options.toolTipContent||("line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===
b.type||"splineArea"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type||"waterfall"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=p!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?
this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}",p=b.axisXIndex):"bubble"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=p!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}"):
"rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type||"error"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=p!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}"):"candlestick"===
b.type||"ohlc"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=p!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"):"boxAndWhisker"===
b.type&&(this.chart.axisX&&1<this.chart.axisX.length&&(g+=p!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
null===d&&(d=""),!0===this.reversed?(d=this.chart.replaceKeywordsWithValue(g,c,b,e)+d,l<a.length-1&&(d="</br>"+d)):(d+=this.chart.replaceKeywordsWithValue(g,c,b,e),l<a.length-1&&(d+="</br>")));null!==d&&(d=h+d)}else{b=a[0].dataSeries;c=a[0].dataPoint;e=a[0].index;if(null===c.toolTipContent||"undefined"===typeof c.toolTipContent&&null===b.options.toolTipContent)return null;"line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"column"===
b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type||"waterfall"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}":"bubble"===b.type?g=c.toolTipContent?
c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}":"pie"===b.type||"doughnut"===b.type||"funnel"===b.type||"pyramid"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":
"'color:{color};'")+"\"'>"+(c.name?"{name}:</span>&nbsp;&nbsp;":c.label?"{label}:</span>&nbsp;&nbsp;":"</span>")+"{y}":"rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type||"error"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}":
"candlestick"===b.type||"ohlc"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+"</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}":"boxAndWhisker"===b.type&&(g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:
this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+"</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
null===d&&(d="");d+=this.chart.replaceKeywordsWithValue(g,c,b,e)}return d};$.prototype.enableAnimation=function(){if(!this.container.style.WebkitTransition){var a=this.getContainerTransition(this.containerTransitionDuration);this.container.style.WebkitTransition=a;this.container.style.MsTransition=a;this.container.style.transition=a;this.container.style.MozTransition=this.mozContainerTransition}};$.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&(this.container.style.WebkitTransition=
"",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};$.prototype.hide=function(a){this.container&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=NaN,("undefined"===typeof a||a)&&this.chart.resetOverlayedCanvas())};$.prototype.show=function(a,d,b){this._updateToolTip(a,d,"undefined"===typeof b?!1:b)};$.prototype.fixMozTransitionDelay=function(a,d){if(20<this.chart._eventManager.lastObjectId)this.mozContainerTransition=
this.getContainerTransition(0);else{var b=parseFloat(this.container.style.left),b=isNaN(b)?0:b,c=parseFloat(this.container.style.bottom),c=isNaN(c)?0:c;10<Math.sqrt(Math.pow(b-a,2)+Math.pow(c-d,2))?this.mozContainerTransition=this.getContainerTransition(0.1):this.mozContainerTransition=this.getContainerTransition(0)}};$.prototype.getContainerTransition=function(a){return"left "+a+"s ease-out 0s, bottom "+a+"s ease-out 0s"};ha.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=
[];this.previousDataPointEventObject=null;this.eventObjects=[];r&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),this.ghostCtx.beginPath())};ha.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};ha.prototype.mouseEventHandler=function(a){if("mousemove"===a.type||"click"===a.type){var d=[],b=Ra(a),c=null;if((c=this.chart.getObjectAtXY(b.x,b.y,!1))&&"undefined"!==typeof this.objectMap[c])if(c=this.objectMap[c],"dataPoint"===c.objectType){var e=this.chart.data[c.dataSeriesIndex],
g=e.dataPoints[c.dataPointIndex],k=c.dataPointIndex;c.eventParameter={x:b.x,y:b.y,dataPoint:g,dataSeries:e.options,dataPointIndex:k,dataSeriesIndex:e.index,chart:this.chart};c.eventContext={context:g,userContext:g,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};d.push(c);c=this.objectMap[e.id];c.eventParameter={x:b.x,y:b.y,dataPoint:g,dataSeries:e.options,dataPointIndex:k,dataSeriesIndex:e.index,chart:this.chart};c.eventContext={context:e,userContext:e.options,mouseover:"mouseover",
mousemove:"mousemove",mouseout:"mouseout",click:"click"};d.push(this.objectMap[e.id])}else"legendItem"===c.objectType&&(e=this.chart.data[c.dataSeriesIndex],g=null!==c.dataPointIndex?e.dataPoints[c.dataPointIndex]:null,c.eventParameter={x:b.x,y:b.y,dataSeries:e.options,dataPoint:g,dataPointIndex:c.dataPointIndex,dataSeriesIndex:c.dataSeriesIndex,chart:this.chart},c.eventContext={context:this.chart.legend,userContext:this.chart.legend.options,mouseover:"itemmouseover",mousemove:"itemmousemove",mouseout:"itemmouseout",
click:"itemclick"},d.push(c));e=[];for(b=0;b<this.mouseoveredObjectMaps.length;b++){g=!0;for(c=0;c<d.length;c++)if(d[c].id===this.mouseoveredObjectMaps[b].id){g=!1;break}g?this.fireEvent(this.mouseoveredObjectMaps[b],"mouseout",a):e.push(this.mouseoveredObjectMaps[b])}this.mouseoveredObjectMaps=e;for(b=0;b<d.length;b++){e=!1;for(c=0;c<this.mouseoveredObjectMaps.length;c++)if(d[b].id===this.mouseoveredObjectMaps[c].id){e=!0;break}e||(this.fireEvent(d[b],"mouseover",a),this.mouseoveredObjectMaps.push(d[b]));
"click"===a.type?this.fireEvent(d[b],"click",a):"mousemove"===a.type&&this.fireEvent(d[b],"mousemove",a)}}};ha.prototype.fireEvent=function(a,d,b){if(a&&d){var c=a.eventParameter,e=a.eventContext,g=a.eventContext.userContext;g&&(e&&g[e[d]])&&g[e[d]].call(g,c);"mouseout"!==d?g.cursor&&g.cursor!==b.target.style.cursor&&(b.target.style.cursor=g.cursor):(b.target.style.cursor=this.chart._defaultCursor,delete a.eventParameter,delete a.eventContext);"click"===d&&("dataPoint"===a.objectType&&this.chart.pieDoughnutClickHandler)&&
this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],c);"click"===d&&("dataPoint"===a.objectType&&this.chart.funnelPyramidClickHandler)&&this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex],c)}};ga.prototype.animate=function(a,d,b,c,e){var g=this;this.chart.isAnimating=!0;e=e||M.easing.linear;b&&this.animations.push({startTime:(new Date).getTime()+(a?a:0),duration:d,animationCallback:b,onComplete:c});for(a=[];0<this.animations.length;)if(d=this.animations.shift(),
b=(new Date).getTime(),c=0,d.startTime<=b&&(c=e(Math.min(b-d.startTime,d.duration),0,1,d.duration),c=Math.min(c,1),isNaN(c)||!isFinite(c))&&(c=1),1>c&&a.push(d),d.animationCallback(c),1<=c&&d.onComplete)d.onComplete();this.animations=a;0<this.animations.length?this.animationRequestId=this.chart.requestAnimFrame.call(window,function(){g.animate.call(g)}):this.chart.isAnimating=!1};ga.prototype.cancelAllAnimations=function(){this.animations=[];this.animationRequestId&&this.chart.cancelRequestAnimFrame.call(window,
this.animationRequestId);this.animationRequestId=null;this.chart.isAnimating=!1};var M={yScaleAnimation:function(a,d){if(0!==a){var b=d.dest,c=d.source.canvas,e=d.animationBase;b.drawImage(c,0,0,c.width,c.height,0,e-e*a,b.canvas.width/W,a*b.canvas.height/W)}},xScaleAnimation:function(a,d){if(0!==a){var b=d.dest,c=d.source.canvas,e=d.animationBase;b.drawImage(c,0,0,c.width,c.height,e-e*a,0,a*b.canvas.width/W,b.canvas.height/W)}},xClipAnimation:function(a,d){if(0!==a){var b=d.dest,c=d.source.canvas;
b.save();0<a&&b.drawImage(c,0,0,c.width*a,c.height,0,0,c.width*a/W,c.height/W);b.restore()}},fadeInAnimation:function(a,d){if(0!==a){var b=d.dest,c=d.source.canvas;b.save();b.globalAlpha=a;b.drawImage(c,0,0,c.width,c.height,0,0,b.canvas.width/W,b.canvas.height/W);b.restore()}},easing:{linear:function(a,d,b,c){return b*a/c+d},easeOutQuad:function(a,d,b,c){return-b*(a/=c)*(a-2)+d},easeOutQuart:function(a,d,b,c){return-b*((a=a/c-1)*a*a*a-1)+d},easeInQuad:function(a,d,b,c){return b*(a/=c)*a+d},easeInQuart:function(a,
d,b,c){return b*(a/=c)*a*a*a+d}}},ia={drawMarker:function(a,d,b,c,e,g,k,l){if(b){var p=1;b.fillStyle=g?g:"#000000";b.strokeStyle=k?k:"#000000";b.lineWidth=l?l:0;b.setLineDash&&b.setLineDash(R("solid",l));"circle"===c?(b.moveTo(a,d),b.beginPath(),b.arc(a,d,e/2,0,2*Math.PI,!1),g&&b.fill(),l&&(k?b.stroke():(p=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=p))):"square"===c?(b.beginPath(),b.rect(a-e/2,d-e/2,e,e),g&&b.fill(),l&&(k?b.stroke():(p=b.globalAlpha,b.globalAlpha=
0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=p))):"triangle"===c?(b.beginPath(),b.moveTo(a-e/2,d+e/2),b.lineTo(a+e/2,d+e/2),b.lineTo(a,d-e/2),b.closePath(),g&&b.fill(),l&&(k?b.stroke():(p=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=p)),b.beginPath()):"cross"===c&&(b.strokeStyle=g,b.lineWidth=e/4,b.beginPath(),b.moveTo(a-e/2,d-e/2),b.lineTo(a+e/2,d+e/2),b.stroke(),b.moveTo(a+e/2,d-e/2),b.lineTo(a-e/2,d+e/2),b.stroke())}},drawMarkers:function(a){for(var d=
0;d<a.length;d++){var b=a[d];ia.drawMarker(b.x,b.y,b.ctx,b.type,b.size,b.color,b.borderColor,b.borderThickness)}}};return p}();Na.Chart.version="v2.3.1 GA"})();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext||function(){function V(){return this.context_||(this.context_=new C(this))}function W(a,b,c){var g=M.call(arguments,2);return function(){return a.apply(b,g.concat(M.call(arguments)))}}function N(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");
a.styleSheets.ex_canvas_||(a=a.createStyleSheet(),a.owningElement.id="ex_canvas_",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function X(a){var b=a.srcElement;switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect(),b.style.height=b.attributes.height.nodeValue+"px",b.firstChild.style.height=b.clientHeight+
"px"}}function Y(a){a=a.srcElement;a.firstChild&&(a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function D(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(a,b){for(var c=D(),g=0;3>g;g++)for(var e=0;3>e;e++){for(var f=0,d=0;3>d;d++)f+=a[g][d]*b[d][e];c[g][e]=f}return c}function P(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=
a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function Q(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1),b=a.substring(b+1,c).split(",");if(4!=b.length||"a"!=a.charAt(3))b[3]=1;return b}function E(a,b,c){return Math.min(c,Math.max(b,a))}function F(a,b,c){0>c&&c++;1<c&&c--;return 1>6*c?a+6*(b-a)*c:
1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}function G(a){if(a in H)return H[a];var b,c=1;a=String(a);if("#"==a.charAt(0))b=a;else if(/^rgb/.test(a)){c=Q(a);b="#";for(var g,e=0;3>e;e++)g=-1!=c[e].indexOf("%")?Math.floor(255*(parseFloat(c[e])/100)):+c[e],b+=v[E(g,0,255)];c=+c[3]}else if(/^hsl/.test(a)){e=c=Q(a);b=parseFloat(e[0])/360%360;0>b&&b++;g=E(parseFloat(e[1])/100,0,1);e=E(parseFloat(e[2])/100,0,1);if(0==g)g=e=b=e;else{var f=0.5>e?e*(1+g):e+g-e*g,d=2*e-f;g=F(d,f,b+1/3);e=F(d,f,b);b=F(d,f,b-1/3)}b="#"+
v[Math.floor(255*g)]+v[Math.floor(255*e)]+v[Math.floor(255*b)];c=c[3]}else b=Z[a]||a;return H[a]={color:b,alpha:c}}function C(a){this.m_=D();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*q;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",
c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(!1);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function R(a,b,c,g){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:g.x,y:g.y});a.currentX_=g.x;a.currentY_=g.y}function S(a,b){var c=G(a.strokeStyle),g=c.color,c=c.alpha*a.globalAlpha,e=a.lineScale_*a.lineWidth;1>e&&(c*=e);b.push("<g_vml_:stroke",
' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',$[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',g,'" />')}function T(a,b,c,g){var e=a.fillStyle,f=a.arcScaleX_,d=a.arcScaleY_,k=g.x-c.x,n=g.y-c.y;if(e instanceof w){var h=0,l=g=0,u=0,m=1;if("gradient"==e.type_){h=e.x1_/f;c=e.y1_/d;var p=s(a,e.x0_/f,e.y0_/d),h=s(a,h,c),h=180*Math.atan2(h.x-p.x,h.y-p.y)/Math.PI;0>h&&(h+=360);1E-6>h&&(h=0)}else p=s(a,e.x0_,e.y0_),g=(p.x-c.x)/k,l=(p.y-c.y)/n,k/=f*q,
n/=d*q,m=x.max(k,n),u=2*e.r0_/m,m=2*e.r1_/m-u;f=e.colors_;f.sort(function(a,b){return a.offset-b.offset});d=f.length;p=f[0].color;c=f[d-1].color;k=f[0].alpha*a.globalAlpha;a=f[d-1].alpha*a.globalAlpha;for(var n=[],r=0;r<d;r++){var t=f[r];n.push(t.offset*m+u+" "+t.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',c,'"',' colors="',n.join(","),'"',' opacity="',a,'"',' g_o_:opacity2="',k,'"',' angle="',h,'"',' focusposition="',g,",",l,'" />')}else e instanceof
I?k&&n&&b.push("<g_vml_:fill",' position="',-c.x/k*f*f,",",-c.y/n*d*d,'"',' type="tile"',' src="',e.src_,'" />'):(e=G(a.fillStyle),b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />'))}function s(a,b,c){a=a.m_;return{x:q*(b*a[0][0]+c*a[1][0]+a[2][0])-r,y:q*(b*a[0][1]+c*a[1][1]+a[2][1])-r}}function z(a,b,c){isFinite(b[0][0])&&(isFinite(b[0][1])&&isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1]))&&(a.m_=b,c&&(a.lineScale_=aa(ba(b[0][0]*b[1][1]-b[0][1]*
b[1][0]))))}function w(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function I(a,b){if(!a||1!=a.nodeType||"IMG"!=a.tagName)throw new A("TYPE_MISMATCH_ERR");if("complete"!=a.readyState)throw new A("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=b;break;default:throw new A("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}
function A(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var x=Math,k=x.round,J=x.sin,K=x.cos,ba=x.abs,aa=x.sqrt,q=10,r=q/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var M=Array.prototype.slice;O(document);var U={init:function(a){a=a||document;a.createElement("canvas");a.attachEvent("onreadystatechange",W(this.init_,this,a))},init_:function(a){a=a.getElementsByTagName("canvas");for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=
V;O(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",X);a.attachEvent("onresize",Y);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};U.init();for(var v=[],d=0;16>d;d++)for(var B=0;16>B;B++)v[16*d+B]=d.toString(16)+B.toString(16);var Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",
bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",
darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",
ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",
mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",
peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},
H={},L={},$={butt:"flat",round:"round"},d=C.prototype;d.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null);this.element_.innerHTML=""};d.beginPath=function(){this.currentPath_=[]};d.moveTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.lineTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.bezierCurveTo=
function(a,b,c,g,e,f){e=s(this,e,f);a=s(this,a,b);c=s(this,c,g);R(this,a,c,e)};d.quadraticCurveTo=function(a,b,c,g){a=s(this,a,b);c=s(this,c,g);g={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};R(this,g,{x:g.x+(c.x-this.currentX_)/3,y:g.y+(c.y-this.currentY_)/3},c)};d.arc=function(a,b,c,g,e,f){c*=q;var d=f?"at":"wa",k=a+K(g)*c-r,n=b+J(g)*c-r;g=a+K(e)*c-r;e=b+J(e)*c-r;k!=g||f||(k+=0.125);a=s(this,a,b);k=s(this,k,n);g=s(this,g,e);this.currentPath_.push({type:d,
x:a.x,y:a.y,radius:c,xStart:k.x,yStart:k.y,xEnd:g.x,yEnd:g.y})};d.rect=function(a,b,c,g){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath()};d.strokeRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath();this.stroke();this.currentPath_=e};d.fillRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+
c,b+g);this.lineTo(a,b+g);this.closePath();this.fill();this.currentPath_=e};d.createLinearGradient=function(a,b,c,g){var e=new w("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=g;return e};d.createRadialGradient=function(a,b,c,g,e,f){var d=new w("gradientradial");d.x0_=a;d.y0_=b;d.r0_=c;d.x1_=g;d.y1_=e;d.r1_=f;return d};d.drawImage=function(a,b){var c,g,e,d,r,y,n,h;e=a.runtimeStyle.width;d=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,u=a.height;a.runtimeStyle.width=
e;a.runtimeStyle.height=d;if(3==arguments.length)c=arguments[1],g=arguments[2],r=y=0,n=e=l,h=d=u;else if(5==arguments.length)c=arguments[1],g=arguments[2],e=arguments[3],d=arguments[4],r=y=0,n=l,h=u;else if(9==arguments.length)r=arguments[1],y=arguments[2],n=arguments[3],h=arguments[4],c=arguments[5],g=arguments[6],e=arguments[7],d=arguments[8];else throw Error("Invalid number of arguments");var m=s(this,c,g),p=[];p.push(" <g_vml_:group",' coordsize="',10*q,",",10*q,'"',' coordorigin="0,0"',' style="width:',
10,"px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var t=[];t.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",k(m.x/q),",","Dy=",k(m.y/q),"");var v=s(this,c+e,g),w=s(this,c,g+d);c=s(this,c+e,g+d);m.x=x.max(m.x,v.x,w.x,c.x);m.y=x.max(m.y,v.y,w.y,c.y);p.push("padding:0 ",k(m.x/q),"px ",k(m.y/q),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",t.join(""),", sizingmethod='clip');")}else p.push("top:",
k(m.y/q),"px;left:",k(m.x/q),"px;");p.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',q*e,"px;"," height:",q*d,'px"',' cropleft="',r/l,'"',' croptop="',y/u,'"',' cropright="',(l-r-n)/l,'"',' cropbottom="',(u-y-h)/u,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))};d.stroke=function(a){var b=[];b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*q,",",10*q,'"',
' stroked="',!a,'"',' path="');for(var c={x:null,y:null},d={x:null,y:null},e=0;e<this.currentPath_.length;e++){var f=this.currentPath_[e];switch(f.type){case "moveTo":b.push(" m ",k(f.x),",",k(f.y));break;case "lineTo":b.push(" l ",k(f.x),",",k(f.y));break;case "close":b.push(" x ");f=null;break;case "bezierCurveTo":b.push(" c ",k(f.cp1x),",",k(f.cp1y),",",k(f.cp2x),",",k(f.cp2y),",",k(f.x),",",k(f.y));break;case "at":case "wa":b.push(" ",f.type," ",k(f.x-this.arcScaleX_*f.radius),",",k(f.y-this.arcScaleY_*
f.radius)," ",k(f.x+this.arcScaleX_*f.radius),",",k(f.y+this.arcScaleY_*f.radius)," ",k(f.xStart),",",k(f.yStart)," ",k(f.xEnd),",",k(f.yEnd))}if(f){if(null==c.x||f.x<c.x)c.x=f.x;if(null==d.x||f.x>d.x)d.x=f.x;if(null==c.y||f.y<c.y)c.y=f.y;if(null==d.y||f.y>d.y)d.y=f.y}}b.push(' ">');a?T(this,b,c,d):S(this,b);b.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};d.fill=function(){this.stroke(!0)};d.closePath=function(){this.currentPath_.push({type:"close"})};d.save=function(){var a=
{};P(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=t(D(),this.m_)};d.restore=function(){this.aStack_.length&&(P(this.aStack_.pop(),this),this.m_=this.mStack_.pop())};d.translate=function(a,b){z(this,t([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)};d.rotate=function(a){var b=K(a);a=J(a);z(this,t([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};d.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;z(this,t([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};d.transform=function(a,b,c,d,e,f){z(this,t([[a,
b,0],[c,d,0],[e,f,1]],this.m_),!0)};d.setTransform=function(a,b,c,d,e,f){z(this,[[a,b,0],[c,d,0],[e,f,1]],!0)};d.drawText_=function(a,b,c,d,e){var f=this.m_;d=0;var r=1E3,t=0,n=[],h;h=this.font;if(L[h])h=L[h];else{var l=document.createElement("div").style;try{l.font=h}catch(u){}h=L[h]={style:l.fontStyle||"normal",variant:l.fontVariant||"normal",weight:l.fontWeight||"normal",size:l.fontSize||10,family:l.fontFamily||"sans-serif"}}var l=h,m=this.element_;h={};for(var p in l)h[p]=l[p];p=parseFloat(m.currentStyle.fontSize);
m=parseFloat(l.size);"number"==typeof l.size?h.size=l.size:-1!=l.size.indexOf("px")?h.size=m:-1!=l.size.indexOf("em")?h.size=p*m:-1!=l.size.indexOf("%")?h.size=p/100*m:-1!=l.size.indexOf("pt")?h.size=m/0.75:h.size=p;h.size*=0.981;p=h.style+" "+h.variant+" "+h.weight+" "+h.size+"px "+h.family;m=this.element_.currentStyle;l=this.textAlign.toLowerCase();switch(l){case "left":case "center":case "right":break;case "end":l="ltr"==m.direction?"right":"left";break;case "start":l="rtl"==m.direction?"right":
"left";break;default:l="left"}switch(this.textBaseline){case "hanging":case "top":t=h.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":t=-h.size/2.25}switch(l){case "right":d=1E3;r=0.05;break;case "center":d=r=500}b=s(this,b+0,c+t);n.push('<g_vml_:line from="',-d,' 0" to="',r,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?S(this,n):T(this,n,{x:-d,y:0},
{x:r,y:h.size});e=f[0][0].toFixed(3)+","+f[1][0].toFixed(3)+","+f[0][1].toFixed(3)+","+f[1][1].toFixed(3)+",0,0";b=k(b.x/q)+","+k(b.y/q);n.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',N(a),'" style="v-text-align:',l,";font:",N(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",n.join(""))};d.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,!1)};d.strokeText=function(a,
b,c,d){this.drawText_(a,b,c,d,!0)};d.measureText=function(a){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));return{width:this.textMeasureEl_.offsetWidth}};d.clip=function(){};
d.arcTo=function(){};d.createPattern=function(a,b){return new I(a,b)};w.prototype.addColorStop=function(a,b){b=G(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};d=A.prototype=Error();d.INDEX_SIZE_ERR=1;d.DOMSTRING_SIZE_ERR=2;d.HIERARCHY_REQUEST_ERR=3;d.WRONG_DOCUMENT_ERR=4;d.INVALID_CHARACTER_ERR=5;d.NO_DATA_ALLOWED_ERR=6;d.NO_MODIFICATION_ALLOWED_ERR=7;d.NOT_FOUND_ERR=8;d.NOT_SUPPORTED_ERR=9;d.INUSE_ATTRIBUTE_ERR=10;d.INVALID_STATE_ERR=11;d.SYNTAX_ERR=12;d.INVALID_MODIFICATION_ERR=
13;d.NAMESPACE_ERR=14;d.INVALID_ACCESS_ERR=15;d.VALIDATION_ERR=16;d.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=U;CanvasRenderingContext2D=C;CanvasGradient=w;CanvasPattern=I;DOMException=A}();
/*eslint-enable*/
/*jshint ignore:end*/

/***/ }),

/***/ "./src/assets/js/mapData.js":
/*!**********************************!*\
  !*** ./src/assets/js/mapData.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var gradeColor = {
  "G1": "#f6ee2b",
  "G2": "#ee5939",
  "G3": "#f99e2b",
  "G4": "#4cc9f0",
  "G5": "#80c254",
  "G6": "#968ac2",
}

var gradeData = {

  Grade1: ["Chandigarh", "Kerala", "Gujarat"],
  Grade2: ["Haryana", "Tamil Nadu", "Punjab", "Rajasthan"],
  Grade3: ["Delhi", "Dadra \n& Nagar Haveli", "Himachal Pradesh", "Odisha", "Chhattisgarh", "Andhra Pradesh", "Goa", "Madhya Pradesh", "Assam", "Karnataka", "Uttarakhand"],
  Grade4: ['Maharashtra', 'Puducherry', 'Sikkim', 'Mizoram', 'Telangana', 'Daman \nand Diu'],
  Grade5: ['Jharkhand', 'Andaman and Nicobar', 'Jammu \n and Kashmir', 'Tripura', 'Lakshadweep', 'West Bengal', 'Bihar', 'Manipur', 'Uttar Pradesh'],
  Grade6: ['Meghalaya', 'Nagaland', 'Arunachal Pradesh']

}

var domainData = {
  Domain_1: {
    "max": "180",
    "Chandigarh": "160",
    "Kerala": "154",
    "Gujarat": "152",
    "Haryana": "134",
    "Tamil Nadu": "132",
    "Dadra \n& Nagar Haveli": "150",
    "Punjab": "126",
    "Rajasthan": "168",
    "Delhi": "124",
    "Himachal Pradesh": "140",
    "Odisha": "134",
    "Chhattisgarh": "134",
    "Andhra Pradesh": "154",
    "Goa": "132",
    "Madhya Pradesh": "140",
    "Assam": "152",
    "Karnataka": "160",
    "Uttarakhand": "148",
    "Maharashtra": "144",
    "Puducherry": "124",
    "Sikkim": "122",
    "Mizoram": "126",
    "Telangana": "142",
    "Daman \nand Diu": "126",
    "Jharkhand": "154",
    "Andaman and Nicobar": "130",
    "Jammu \n and Kashmir": "132",
    "Tripura": "126",
    "Lakshadweep": "122",
    "West Bengal": "122",
    "Bihar": "128",
    "Manipur": "138",
    "Uttar Pradesh": "132",
    "Meghalaya": "126",
    "Nagaland": "126",
    "Arunachal Pradesh": "114"
  },
  Domain_2: {
    "max": "80",
    "Chandigarh": "75",
    "Kerala": "78",
    "Gujarat": "71",
    "Haryana": "74",
    "Tamil Nadu": "79",
    "Dadra \n& Nagar Haveli": "73",
    "Punjab": "74",
    "Rajasthan": "56",
    "Delhi": "72",
    "Himachal Pradesh": "76",
    "Odisha": "69",
    "Chhattisgarh": "66",
    "Andhra Pradesh": "70",
    "Goa": "75",
    "Madhya Pradesh": "58",
    "Assam": "64",
    "Karnataka": "69",
    "Uttarakhand": "72",
    "Maharashtra": "76",
    "Puducherry": "77",
    "Sikkim": "58",
    "Mizoram": "57",
    "Telangana": "66",
    "Daman \nand Diu": "73",
    "Jharkhand": "53",
    "Andaman and Nicobar": "65",
    "Jammu \n and Kashmir": "53",
    "Tripura": "67",
    "Lakshadweep": "67",
    "West Bengal": "53",
    "Bihar": "56",
    "Manipur": "60",
    "Uttar Pradesh": "62",
    "Meghalaya": "50",
    "Nagaland": "43",
    "Arunachal Pradesh": "46"
  },
  Domain_3: {
    "max": "150",
    "Chandigarh": "133",
    "Kerala": "123",
    "Gujarat": "99",
    "Haryana": "116",
    "Tamil Nadu": "121",
    "Dadra \n& Nagar Haveli": "110",
    "Punjab": "139",
    "Rajasthan": "84",
    "Delhi": "114",
    "Himachal Pradesh": "96",
    "Odisha": "94",
    "Chhattisgarh": "113",
    "Andhra Pradesh": "99",
    "Goa": "138",
    "Madhya Pradesh": "99",
    "Assam": "72",
    "Karnataka": "100",
    "Uttarakhand": "102",
    "Maharashtra": "113",
    "Puducherry": "114",
    "Sikkim": "90",
    "Mizoram": "102",
    "Telangana": "96",
    "Daman \nand Diu": "99",
    "Jharkhand": "95",
    "Andaman and Nicobar": "87",
    "Jammu \n and Kashmir": "88",
    "Tripura": "70",
    "Lakshadweep": "98",
    "West Bengal": "58",
    "Bihar": "86",
    "Manipur": "68",
    "Uttar Pradesh": "73",
    "Meghalaya": "57",
    "Nagaland": "63",
    "Arunachal Pradesh": "63"
  },
  Domain_4: {
    "max": "230",
    "Chandigarh": "213",
    "Kerala": "217",
    "Gujarat": "207",
    "Haryana": "211",
    "Tamil Nadu": "218",
    "Dadra \n& Nagar Haveli": "221",
    "Punjab": "200",
    "Rajasthan": "210",
    "Delhi": "214",
    "Himachal Pradesh": "209",
    "Odisha": "214",
    "Chhattisgarh": "206",
    "Andhra Pradesh": "194",
    "Goa": "209",
    "Madhya Pradesh": "209",
    "Assam": "208",
    "Karnataka": "212",
    "Uttarakhand": "194",
    "Maharashtra": "212",
    "Puducherry": "206",
    "Sikkim": "198",
    "Mizoram": "184",
    "Telangana": "205",
    "Daman \nand Diu": "208",
    "Jharkhand": "204",
    "Andaman and Nicobar": "205",
    "Jammu \n and Kashmir": "203",
    "Tripura": "207",
    "Lakshadweep": "206",
    "West Bengal": "195",
    "Bihar": "203",
    "Manipur": "193",
    "Uttar Pradesh": "202",
    "Meghalaya": "186",
    "Nagaland": "195",
    "Arunachal Pradesh": "197"
  },
  Domain_5: {
    "max": "360",
    "Chandigarh": "260",
    "Kerala": "254",
    "Gujarat": "279",
    "Haryana": "252",
    "Tamil Nadu": "224",
    "Dadra \n& Nagar Haveli": "202",
    "Punjab": "214",
    "Rajasthan": "234",
    "Delhi": "223",
    "Himachal Pradesh": "215",
    "Odisha": "223",
    "Chhattisgarh": "213",
    "Andhra Pradesh": "211",
    "Goa": "163",
    "Madhya Pradesh": "207",
    "Assam": "211",
    "Karnataka": "165",
    "Uttarakhand": "188",
    "Maharashtra": "155",
    "Puducherry": "166",
    "Sikkim": "215",
    "Mizoram": "208",
    "Telangana": "167",
    "Daman \nand Diu": "163",
    "Jharkhand": "144",
    "Andaman and Nicobar": "158",
    "Jammu \n and Kashmir": "168",
    "Tripura": "173",
    "Lakshadweep": "133",
    "West Bengal": "189",
    "Bihar": "140",
    "Manipur": "149",
    "Uttar Pradesh": "134",
    "Meghalaya": "165",
    "Nagaland": "130",
    "Arunachal Pradesh": "134"
  },
  total: {

    "Chandigarh": "841",
    "Kerala": "826",
    "Gujarat": "808",
    "Haryana": "787",
    "Tamil Nadu": "774",
    "Dadra \n& Nagar Haveli": "756",
    "Punjab": "753",
    "Rajasthan": "752",
    "Delhi": "747",
    "Himachal Pradesh": "736",
    "Odisha": "734",
    "Chhattisgarh": "732",
    "Andhra Pradesh": "728",
    "Goa": "717",
    "Madhya Pradesh": "713",
    "Assam": "707",
    "Karnataka": "706",
    "Uttarakhand": "704",
    "Maharashtra": "700",
    "Puducherry": "687",
    "Sikkim": "683",
    "Mizoram": "677",
    "Telangana": "676",
    "Daman \nand Diu": "669",
    "Jharkhand": "650",
    "Andaman and Nicobar": "645",
    "Jammu \n and Kashmir": "644",
    "Tripura": "643",
    "Lakshadweep": "626",
    "West Bengal": "617",
    "Bihar": "613",
    "Manipur": "608",
    "Uttar Pradesh": "603",
    "Meghalaya": "584",
    "Nagaland": "557",
    "Arunachal Pradesh": "554"
  }
};

console.log("Mapdata");
var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",

    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#740f78",
    state_url: "",
    border_size: 1,
    all_states_inactive: "no",
    all_states_zoomable: "no",

    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "black",
    label_hover_color: "#d5ddec",
    label_size: "14",
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "no",
    zoom_percentage: 0,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "",
    popup_opacity: 1,
    popup_shadow: 1,
    popup_corners: 9,
    popup_font: "14px/1.5 Source Sans Pro, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    manual_zoom: "no"
  },
  state_specific: {
    "1": {
      name: "Andaman and Nicobar",
      color: gradeColor.G5,
    },
    "2": {
      name: "Andhra Pradesh",
      color: gradeColor.G3
    },
    "3": {
      name: "Arunachal Pradesh",
      color: gradeColor.G6
    },
    "4": {
      name: "Assam",
      color: gradeColor.G3
    },
    "5": {
      name: "Bihar",
      color: gradeColor.G5
    },
    "6": {
      name: "Chandigarh",
      color: gradeColor.G1
    },
    "7": {
      name: "Chhattisgarh",
      color: gradeColor.G3
    },
    "8": {
      name: "Dadra \n& Nagar Haveli",
      color: gradeColor.G3
    },
    "9": {
      name: "Daman \nand Diu",
      color: gradeColor.G4
    },
    "10": {
      name: "Delhi",
      color: gradeColor.G3
    },
    "11": {
      name: "Goa",
      color: gradeColor.G3
    },
    "12": {
      name: "Gujarat",
      color: gradeColor.G1
    },
    "13": {
      name: "Haryana",
      color: gradeColor.G2
    },
    "14": {
      name: "Himachal Pradesh",
      color: gradeColor.G3
    },
    "16": {
      name: "Jharkhand",
      color: gradeColor.G5
    },
    "17": {
      name: "Karnataka",
      color: gradeColor.G3
    },
    "18": {
      name: "Kerala",
      color: gradeColor.G1
    },
    "19": {
      name: "Lakshadweep",
      color: gradeColor.G5
    },
    "20": {
      name: "Madhya Pradesh",
      color: gradeColor.G3
    },
    "21": {
      name: "Maharashtra",
      color: gradeColor.G4
    },
    "22": {
      name: "Manipur",
      color: gradeColor.G5
    },
    "23": {
      name: "Meghalaya",
      color: gradeColor.G6
    },
    "24": {
      name: "Mizoram",
      color: gradeColor.G4
    },
    "25": {
      name: "Nagaland",
      color: gradeColor.G6
    },
    "26": {
      name: "Odisha",
      color: gradeColor.G3
    },
    "27": {
      name: "Puducherry",
      color: gradeColor.G4
    },
    "28": {
      name: "Punjab",
      color: gradeColor.G2
    },
    "29": {
      name: "Rajasthan",
      color: gradeColor.G2
    },
    "30": {
      name: "Sikkim",
      color: gradeColor.G4
    },
    "31": {
      name: "Tamil Nadu",
      color: gradeColor.G2
    },
    "32": {
      name: "Tripura",
      color: gradeColor.G5
    },
    "33": {
      name: "Uttar Pradesh",
      color: gradeColor.G5
    },
    "34": {
      name: "Uttarakhand",
      color: gradeColor.G3
    },
    "35": {
      name: "West Bengal",
      color: gradeColor.G5
    },
    "36": {
      name: "Jammu \n and Kashmir",
      color: gradeColor.G5
    },
    "37": {
      name: "Telangana",
      color: gradeColor.G4
    }
  },
  locations: {
    "0": {
      lat: 30.703,
      lng: 76.789,
      name: "Chandigarh",
      color: gradeColor.G1,
      size: "17",
      type: "circle",
      opacity: "1"
    },
    "1": {
      lat: 11.93,
      lng: 79.825,
      name: "Puducherry",
      color: gradeColor.G4,
      size: "17",
      type: "circle",
      opacity: "1"
    },
    "2": {
      lat: 20.715,
      lng: 70.981,
      name: "Daman \nand Diu",
      color: gradeColor.G4,
      size: "17",
      type: "circle",
      opacity: "1"
    },
    "3": {
      lat: 20.281,
      lng: 73.05,
      name: "Dadra \n& Nagar Haveli",
      color: gradeColor.G3,
      size: "17",
      type: "circle",
      opacity: "1"
    },

  },
  labels: {
    "0": {
      name: "Andaman and Nicobar",
      parent_id: "1",
      x: 842.8,
      y: 1030.7
    },
    "1": {
      name: "Andhra Pradesh",
      parent_id: "2",
      x: 364.5,
      y: 853.9
    },
    "2": {
      name: "Arunachal Pradesh",
      parent_id: "3",
      x: 927.7,
      y: 352
    },
    "3": {
      name: "Assam",
      parent_id: "4",
      x: 849.1,
      y: 425.1
    },
    "4": {
      name: "Bihar",
      parent_id: "5",
      x: 612.7,
      y: 458
    },
    "5": {
      name: "Chandigarh",
      parent_id: "6",
      x: 265.7,
      y: 247.4
    },
    "6": {
      name: "Chhattisgarh",
      parent_id: "7",
      x: 491.2,
      y: 591.9
    },
    "7": {
      name: "Dadra \n& Nagar Haveli",
      parent_id: "8",
      x: 170,
      y: 690
    },
    "8": {
      name: "Daman \nand Diu",
      parent_id: "9",
      x: 50.8,
      y: 660.6
    },
    "9": {
      name: "Delhi",
      parent_id: "10",
      x: 337,
      y: 340
    },
    "10": {
      name: "Goa",
      parent_id: "11",
      x: 180.7,
      y: 833.8
    },
    "11": {
      name: "Gujarat",
      parent_id: "12",
      x: 123,
      y: 544.6
    },
    "12": {
      name: "Haryana",
      parent_id: "13",
      x: 277.1,
      y: 320.2
    },
    "13": {
      name: "Himachal Pradesh",
      parent_id: "14",
      x: 325.6,
      y: 214.4
    },
    "14": {
      name: "Jharkhand",
      parent_id: "16",
      x: 574.1,
      y: 537.4
    },
    "15": {
      name: "Karnataka",
      parent_id: "17",
      x: 257.1,
      y: 823.4
    },
    "16": {
      name: "Kerala",
      parent_id: "18",
      x: 296.6,
      y: 1047.4
    },
    "17": {
      name: "Lakshadweep",
      parent_id: "19",
      x: 167.3,
      y: 1082.3
    },
    "18": {
      name: "Madhya Pradesh",
      parent_id: "20",
      x: 355,
      y: 556
    },
    "19": {
      name: "Maharashtra",
      parent_id: "21",
      x: 285.4,
      y: 660
    },
    "20": {
      name: "Manipur",
      parent_id: "22",
      x: 890.2,
      y: 498
    },
    "21": {
      name: "Meghalaya",
      parent_id: "23",
      x: 785.9,
      y: 463.5
    },
    "22": {
      name: "Mizoram",
      parent_id: "24",
      x: 860.9,
      y: 536.7
    },
    "23": {
      name: "Nagaland",
      parent_id: "25",
      x: 930,
      y: 441.4
    },
    "24": {
      name: "Odisha",
      parent_id: "26",
      x: 564.1,
      y: 641.2
    },
    "25": {
      name: "Puducherry",
      parent_id: "27",
      x: 450.5,
      y: 970.6
    },
    "26": {
      name: "Punjab",
      parent_id: "28",
      x: 251.7,
      y: 285
    },
    "27": {
      name: "Rajasthan",
      parent_id: "29",
      x: 195.9,
      y: 412.1
    },
    "28": {
      name: "Sikkim",
      parent_id: "30",
      x: 692.2,
      y: 389
    },
    "29": {
      name: "Tamil Nadu",
      parent_id: "31",
      x: 346.4,
      y: 990.2
    },
    "30": {
      name: "Tripura",
      parent_id: "32",
      x: 775.9,
      y: 534.9
    },
    "31": {
      name: "Uttar Pradesh",
      parent_id: "33",
      x: 429.4,
      y: 415.4
    },
    "32": {
      name: "Uttarakhand",
      parent_id: "34",
      x: 384,
      y: 285.6
    },
    "33": {
      name: "West Bengal",
      parent_id: "35",
      x: 670.9,
      y: 551.3
    },
    "34": {
      name: "Jammu \n and Kashmir",
      parent_id: "36",
      x: 275,
      y: 105.4
    },
    "35": {
      name: "Telangana",
      parent_id: "37",
      x: 370.7,
      y: 747.1
    }
  },
  regions: {}
};

var oldGradeData;
var oldLabels;
var originalState = JSON.stringify(simplemaps_countrymap_mapdata.state_specific);
var originalLabel = JSON.stringify(simplemaps_countrymap_mapdata.labels);
var originalLocation = JSON.stringify(simplemaps_countrymap_mapdata.locations);

initializeMap();

function initializeMap() {
  var stateLength = Object.keys(simplemaps_countrymap_mapdata.state_specific).length;
  var locLength = Object.keys(simplemaps_countrymap_mapdata.locations).length;
  for (var i = 1; i <= stateLength + 1; i++) {
    if (i != 15) {
      var stateName = JSON.parse(originalState)[i].name;
      var grade = "Grade-" + findGrade(stateName);
      simplemaps_countrymap_mapdata.state_specific[i].description = getDescription(grade, stateName);


    }
  }
  for (var i = 0; i < locLength; i++) {

    var stateName = JSON.parse(originalLocation)[i].name;
    // console.log(stateName);
    var grade = "Grade-" + findGrade(stateName);
    simplemaps_countrymap_mapdata.locations[i].description = getDescription(grade, stateName);

  }
}

function getDescription(grade, stateName) {
  var des = "<ul class='list-unstyled state-tooltip " + grade + "'>" +
    "<li>" +
    "<h2 class='text-uppercase state-name'>" + stateName + "</h2>" +
    "<div class='state-grade'>" + grade + " (" + domainData['total'][stateName] + ")</div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name one'>Learning Outcomes & Quality" +
    "<div class='domain-score'>" + domainData["Domain_1"][stateName] + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name two'>Access" +
    "<div class='domain-score'>" + domainData["Domain_2"][stateName] + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name three'>Infrastructure & Facilities" +
    "<div class='domain-score'>" + domainData["Domain_3"][stateName] + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name four'>Equity" +
    "<div class='domain-score'>" + domainData["Domain_4"][stateName] + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name five'>Governance Processes" +
    "<div class='domain-score'>" + domainData["Domain_5"][stateName] + "</div></div>" +
    "</li>" +
    "</ul>";

  return des;
}


function findGrade(state) {
  for (var i = 1; i <= Object.keys(gradeData).length; i++) {
    // console.log(gradeData['Grade' + i]);
    if (gradeData['Grade' + i].includes(state)) {
      return i;
    }
  }
}


function showGradeWise(grade) {

  if (grade == 0) {
    initializeMap();
  }
  simplemaps_countrymap_mapdata.labels = JSON.parse(originalLabel);
  //   simplemaps_countrymap_mapdata.locations = JSON.parse(originalLocation);
  var locLength = Object.keys(simplemaps_countrymap_mapdata.locations).length;
  var stateLength = Object.keys(simplemaps_countrymap_mapdata.state_specific).length;
  for (var i = 1; i <= stateLength + 1; i++) {
    if (i != 15) {
      simplemaps_countrymap_mapdata.state_specific[i].color = JSON.parse(originalState)[i].color;
    }
  }

  for (var i = 0; i < locLength; i++) {
    simplemaps_countrymap_mapdata.locations[i].color = JSON.parse(originalLocation)[i].color;
  }
  simplemaps_countrymap.refresh();
  if (grade != 0) {
    for (var i = 1; i <= stateLength + 1; i++) {
      if (i != 15) {
        // console.log(simplemaps_countrymap_mapdata.state_specific[i].name)
        if (!gradeData['Grade' + grade].includes(simplemaps_countrymap_mapdata.state_specific[i].name)) {
          simplemaps_countrymap_mapdata.state_specific[i].color = '#becee8';
        }
      }
    }
    for (var i = 0; i < locLength; i++) {

      if (!gradeData['Grade' + grade].includes(simplemaps_countrymap_mapdata.locations[i].name)) {
        simplemaps_countrymap_mapdata.locations[i].color = '#becee8';
      }

    }

    simplemaps_countrymap.refresh();
  }


}

function showIndicatorWise(indicator) {
  oldLabels = JSON.stringify(simplemaps_countrymap_mapdata.labels);
  var stateLength = Object.keys(simplemaps_countrymap_mapdata.state_specific).length;
  var labelLength = Object.keys(simplemaps_countrymap_mapdata.labels).length;
  var locLength = Object.keys(simplemaps_countrymap_mapdata.locations).length;
  for (var i = 0; i < locLength; i++) {

    simplemaps_countrymap_mapdata.locations[i].color = '#becee8';
    simplemaps_countrymap_mapdata.locations[i].description = "";

  }

  for (var i = 1; i <= stateLength + 1; i++) {
    if (i != 15) {
      simplemaps_countrymap_mapdata.state_specific[i].color = '#becee8';
      simplemaps_countrymap_mapdata.state_specific[i].description = "";
      simplemaps_countrymap_mapdata.state_specific[i].hover_color = '#740f78';
    }
  }

  console.log(indicator);
  for (var i = 0; i < labelLength; i++) {

    simplemaps_countrymap_mapdata.labels[i].name = simplemaps_countrymap_mapdata.labels[i].name + "\n" +
      indicator[simplemaps_countrymap_mapdata.labels[i].name];

    simplemaps_countrymap_mapdata.labels[i].pill = 'yes';
    simplemaps_countrymap_mapdata.labels[i].color = '#383867';


  }
  simplemaps_countrymap.refresh();
  simplemaps_countrymap_mapdata.labels = JSON.parse(oldLabels);

}

function showDomainWise(domain) {

  oldLabels = JSON.stringify(simplemaps_countrymap_mapdata.labels);
  var stateLength = Object.keys(simplemaps_countrymap_mapdata.state_specific).length;
  var labelLength = Object.keys(simplemaps_countrymap_mapdata.labels).length;
  var locLength = Object.keys(simplemaps_countrymap_mapdata.locations).length;

  for (var i = 0; i < locLength; i++) {

    simplemaps_countrymap_mapdata.locations[i].color = '#becee8';
    simplemaps_countrymap_mapdata.locations[i].description = "";

  }

  for (var i = 1; i <= stateLength + 1; i++) {
    if (i != 15) {
      simplemaps_countrymap_mapdata.state_specific[i].color = '#becee8';
      simplemaps_countrymap_mapdata.state_specific[i].description = "";
      simplemaps_countrymap_mapdata.state_specific[i].hover_color = '#740f78';
    }
  }

  for (var i = 0; i < labelLength; i++) {

    simplemaps_countrymap_mapdata.labels[i].name = simplemaps_countrymap_mapdata.labels[i].name + "\n" +
      domainData['Domain_' + domain][simplemaps_countrymap_mapdata.labels[i].name];

    simplemaps_countrymap_mapdata.labels[i].pill = 'yes';
    simplemaps_countrymap_mapdata.labels[i].color = '#383867';


  }
  simplemaps_countrymap.refresh();
  simplemaps_countrymap_mapdata.labels = JSON.parse(oldLabels);
  // console.log(simplemaps_countrymap_mapdata.labels);



}

function gridWiseChart() {
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2",
    title: {
      text: "Grade Wise distribution of states.",
      fontSize: 12,
      fontColor: '#740f78',
      fontWeight: 600,
      fontFamily: 'Source Sans Pro, sans-serif',
      margin: 10,
      verticalAlign: "bottom",
      horizontalAlign: "center",
    },
    axisY: {
      title: "No. of states",
      titleFontFamily: 'Source Sans Pro, sans-serif',
      titleFontSize: 12,
      titleFontWeight: 400,
      titleFontColor: '#cccccc',
      gridColor: '#fafafa',
      tickColor: '#fafafa',
      labelFontSize: 10,
      labelFontColor: '#cccccc'
    },
    axisX: {
      labelFontSize: 10,
      labelAngle: 0,
      titleFontFamily: 'Source Sans Pro, sans-serif',
      titleFontSize: 12,
      titleFontWeight: 400,
    },
    legend: {
      fontColor: '#c1c1c1',
      fontFamily: 'Source Sans Pro, sans-serif',
      fontSize: 12,
      fontWeight: 400,
    },
    dataPointWidth: 20,
    data: [{
      type: "column",
      showInLegend: false,
      click: onClick,
      dataPoints: [{
        y: gradeData['Grade1'].length,
        label: "Grade I",
        color: gradeColor.G1
      },
      {
        y: gradeData['Grade2'].length,
        label: "Grade II",
        color: gradeColor.G2
      },
      {
        y: gradeData['Grade3'].length,
        label: "Grade III",
        color: gradeColor.G3
      },
      {
        y: gradeData['Grade4'].length,
        label: "Grade IV",
        color: gradeColor.G4
      },
      {
        y: gradeData['Grade5'].length,
        label: "Grade V",
        color: gradeColor.G5
      },
      {
        y: gradeData['Grade6'].length,
        label: "Grade VI",
        color: gradeColor.G6
      }
      ]
    }]
  });
  chart.render();
  
}

function removeWatermark() {
  let canvas = document.querySelector('.canvasjs-chart-container');
  let label = canvas.querySelector('.canvasjs-chart-credit');
  label.style.display = 'none';
}

var myExtObject = (function () {

  return {
    showGradeWise: function (grade) {
      showGradeWise(grade);
    },
    findGrade: function (state) {
      return findGrade(state);
    },
    showIndicatorWise: function (indicator) {
      showIndicatorWise(indicator);
    },
    showDomainWise: function (domain) {
      showDomainWise(domain)
    },
    gridWiseChart: function () {
      gridWiseChart();
    },
    getDomainData: function () {
      return domainData;
    },
    refresh: function () {
      simplemaps_countrymap.load();
    },
    hideWatermark: function () {
      removeWatermark();
    }
  }

})(myExtObject || {})

function onClick(e) {
  var i = e.dataPointIndex + 1;
  showGradeWise(i);
}




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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    env: 'dev',
    user_service_url: 'http://' + location.host + '/np-user-service',
    location_service_url: 'http://' + location.host + '/np-location-service',
    pgi_service_url: 'http://' + location.host + '/pgi-service',
    success_code: 'NP001',
    user_service_user: 'np-usr-rest:W',
    user_service_pass: 'UsVCNuxne@123',
    loc_service_user: 'np-loc-rest:W',
    loc_service_pass: 'LoVCNuxne@123',
    pgi_service_user: 'np-appusr-rest:W',
    pgi_service_pass: 'Xy#!@#@123',
    sign_key: 'QD32VdbRuMa0iI0q9q7cH6FIHGcNWGdEZOLyK669',
    encr_pass: 'KeheUber'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/utils/data.ts":
/*!***************************!*\
  !*** ./src/utils/data.ts ***!
  \***************************/
/*! exports provided: statesData, territoriesData, gradeData, Domain1, Domain2, Domain3, Domain4, Domain5, domains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statesData", function() { return statesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "territoriesData", function() { return territoriesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gradeData", function() { return gradeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain1", function() { return Domain1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain2", function() { return Domain2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain3", function() { return Domain3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain4", function() { return Domain4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain5", function() { return Domain5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domains", function() { return domains; });
var statesData = [{
        key: 'Andhra Pradesh',
        value: 'AP',
        path: '<path d="M275.21,160.2v0h0Zm1.49-.09-.89,5.66-1.72-2.45,0-1.82,2.65-1.39Zm-1.49.09-.28-1.42-.62,1-2.89.22-.13-1.66-2.06,1.32,4,1.74h0l-.05,2.35,1,.32,1.52,3.41-17.49,8.56-10.73,4.21-8.59-2.42-7.11.84-6.1,3-5.94,13,.22,2.2-6.65,7L212.7,205l.88,2-2.17,1.9-6.93.93-2-3.34.59-1.76H204l-.27-1.32-5.68-2-7.15,1.38-5.1,2.43-4.37,2.88L178,211.84l-3.31,10.21-4.86,7.69-2.46,11.45,3.2,17,4,7.06-3.31,22.89,5.5,14.81-.4,8.8,3.78,10.08-6.9-12.52-1.29-.58-.27,4.33-1.41-1.41.81-1.4-.92-.17-2.67,4.2,5.3,4.82,3.58.08,3.62,3.2h0V325l-1.73-1-2.18-4.29-3.75-.1-4-2.87-3.6.39-.19,1,2,.4.15.85-1.44-.16-.5,1.38-1.61.4.07,1.64-1.48.66,1,1.48-1.34,1.86L158,328.24l-2.43,0-1,1.09-1.24-1-1.57,1.5,3,2.38-1.94,1.39-1-1.31-1.63.71.35-1.3-1.09.22-.23-2.57L145,331.08,143.51,330l-.62-2.15-5.12-.61-2.59,1,2.41,1.06-.68,3.38,1.21-.86.45.64-1.14.4.1,1-3.64,1.19.33,1.63-2.23,1.6-2-2.16-2.34.27V338l-1.4.94-1.74,3.78-4-.34-4.29-3-3.12.43-1,1.59,1.49.81-2-.06-.28-3.24-6.23,2-2.09-.52-.41,2.52-2-.66-1.8,1.91,1.58,2.92h-1l-2.1,7.24-1.74,1.31.1,2.85-1.11.29-.4-1.17h0l-.26.09-.82-.09-.24,2-1.48.05.1,2.19L87,362l-3.73-2L82,358.1l-3.57.51L80.24,357l-.31-1.82h0l1-4.63h3l2-3.95,1.58,1.61,2.75-.27-.63-3.31,1.69.26L91,341.52l2.54-1-.13-1.41,1.25-.77-.92-1.09,2.89-1.8-1.35-1.5,1.33-.83.42-2.83-1-1.82-1.67,2.14L92,328l-1.71.47-.55-1-1.59.75-1.17-.8,1.46-.6-2-1.11,1.7-10.91-7.8-.45-2.13,1.51.51-2.93-1.6-.35-.23-1.24-3.59.66-1.07-1.55.27-1,2,.18.19-1.26-1.17-1.14,1.6-2.13-.23-3.13-3.47-2.25-.16,1.66-2.52-.43-.92,2h-1l-.1-3,1.7-.64-.55-2.8-2.63,2.61L64,297.52l-3.28-.18-.58,1.28,1,2.36-2.48,1.21.12,1.12-3.14,1.1-.2,2.83-.63-1.41-1.53.45.32-1.24-1,.08-1.85,1,1.26,1-.74.39L50,306.71,48.11,308l-1.74-1.34L46,309.54l-1.19-1-.21,1.32L43,310l.37-5.94L41.05,304l.76-1.76-3.11-.52-1.89,1-.63-1.54-2.7.87-.8-2.72-1.07,1.64-.31-1-1.25,1L30,298.19l-1,.86.32,2.1-1.85.37,1.83,1.41.21,3.23-3.41-.3-1.69,1.08-1.61-1.6-.72,1.9-.9-.48L20,303.24l2.34-3.87,1.15-.2-.26-1.38-5-4.76,2.1-2.09-2.29-3-2.08-.19.37-1.37,2.18-.34.23-1.15,3.74.82-.55,3.66.74,2.2,4.66.54,1.26,2.48,8-1.63L38.42,295l-.26,4.21,2,0,.07.87,1.7-1.44L41,297.27l1.1-1.6-2.64,0,.37-1.87L37.1,293l3.31-3.95-.27-.74L38,289.43l.15-1.39,1.38-.25.63-1.76,5.3.71-.2-5.93-2,0-.6-1.85-2.71-.74-.51,1.46,2,4.09-1.53,1-1.36-1.87.19-1.93-3.82-.33.08-2.71-2.36,1-3.81-1.31L26.84,280l-.33,3.64-1.42.19-1.23-1.48-5.35,0-.62-1.57,1.2-1.07-3.4-2.58.2-2.15,1.43-1.14,1.36.69.11-2.24,1.42-1.63-4.94.48-2-2.68-1.33-.23L10,264.58l1.81-6.52-.85-2.2,3.28-1.21.75-7.88-1.75.64-3.07-.93,1-2.3-.5-2.7,1.09-.95,3.82,3.06,5,.9.9-1,2.21,0-.28,1.17,1.81.27,3.6-5.94L27.8,238l1.23-.31,0-2.21-1.78-1.35,2.07-1.87-.78-1.31L27,230.71l-.28-1.85-2.3.27-1.63-5.59-2.73-2.75.07-.76,2.62.31.13-6.61,2.49-.94,1.67,1.37.42-1.67-3.91-3.73,1-4.39-2-.42,2.09-3.34,3.71-2.05,5-.85,12.47,1.83h0l4.64.45L53,201.73l2.74-.5,4,1.06L64,200.77l5.47,1.82,1.65-2.12,1.31,2.84,2.19.86.78-1.07h1.86l.74-2.54,2.77-1.42.89-5.06,2.86.11,4.28-2.57,7.35,1.22,2.77-2.1,4.62,3.57,2.94.15,3-3.16.06-3.43,1.2.18.47,2.12,1.81.25-.24-3.8,1-1,5-2.15,7,1.42,2-1.12.31-13.32,1.95-2.64,7.69-1,3.38-2.39,7.22-1.56,6.07-3.36,1.69,1.94,2.47-.38,1.93,3,2.69-.21,4.29-5.12,1.05-3.4-1.76-1.93-2-.54.86-2.19,1.74-2.89,4.21-1,2.31-3,.91,1.58,2.92.13,1.88,2.72.85,4.22,1.89.8.68,2.18,1.28-1.92,2.54,1.71.18,1.26,5.09,1.35,2-1.24-2.37-1.84.5-2.2,1-.24-.12-2.62-4.45-1.08-.17,1.53-6.2-2.64,1.46-2.16-1-2.12,1.34-1,1.22,2.62,1.23.39,1.73-1.66.66-2.87,3.07-1.5,4.62,2.51-.82,1.62,4.13-.47,5.11,1.94,1.26-1.26.55-4.75,2.06,0-.39-2.75,4.12,1.07,2.64-1.7,5.57-.93.9-4.47,4.1.11,2.75-3.52,2.25,1.67,2.1-.22,3.72-4.35.39-4.52,1.06-1.51-1-1,3.26-4.89.26-1.91,9.85-5.29.5-1-1.65-2h0l2.05-2.14,7.21-2.8L262,93.21l6.5.71.82,1.66,3.08,1.54,1.22-.33v-3.1l1.48-.69.36,1.21,1.16-.13.18-5.11,1.16.87.36-.73-2.83-2.8,1.28-1,.2-2.53,1.67-.39,1-1.62-2.8-.54,2.39-2.6-1.11-2.05,5.4-6.37,1.2,1.76,1.15-.11.34,3.5,1.13-.17-.89,2.41,3.13,1,.51,1.11-1.66,2,.2,1.84,2.21,2.07,1.53-2.9,5.18-2.23,1.26-3.2L298,75.08l1.1-1,2.19,1.48,1.9-.14.34,2.3,2,.77,4-1.66,1.74.46.23-2.69-1,.5-1.06-1.27,3.54-4.7-2.72-.5-.27-1,1.3-.93-2.2-.1.17-2.54,1.88-.76,3.93-6,3.29,1.52.16,1.33.68-2.51,2.24.44.64-1.64L325.8,56l.12-1.6,1.79.07.72-1.45-3.09-3.39,1.6.18-1.65-1.7-.8,2-1.14-3.66,2-1,3,.69,2.24,2.55-.34-2.72,1.25,0,.16-1-.89-2.44.67-.41,1,1.25.57-.59.39,2-1-.1.09.79,1.72.29.72-3.45,1.55,1.21,1.22-1.93-.48-1.62,1.39-1.68,3.53,6.91,1.25.23-.83,1.35L344.44,50l1.64.52L344.14,47l2.28-1.51,4,9.56,3.33,1.09,4.18-.28,2.62,2.89,2-.18,1.36-1.38,8.66-.81.18-3.76,1.26.79.44-.81-1-.81,1.73.28-1.07-.94,1.56.51,1.51-1.38L376.51,49l1.2-1.45-1.22-2.36,2.7,1.64.85-2,3.68-2.22,1,2.62,1.2-2.1,2,.13,0-1.45-1.65.23-1.34-2.39,3.32.1.19-1.76,1.77.29-.39,1.59L391,41.1h0l2,1.23-8.53,9.82-1.38,4.21-4.22,4-5.25,7.85-11,10.3-.06,2.12-19.4,9.79-7,4.79-2.06,3.44-5.72,5.29v1.66l-3.14,4.26-6.28,6.7-29,14.7L278.5,140.1l-3.39,4.27-1.24,4.57-1.09.53.35,2.18,2.66,2.31,2-.57-.54,5.65-2.07,1.16Z"/>',
        banner: 'ap.jpg'
    },
    {
        key: 'Arunachal Pradesh',
        value: 'AR',
        path: '<path d="M311.2,99.55l1.85,2.91-.18,2.64,4,5.57,3.26,0,4.62-3.74,1.95,2.19-3.06,6.41-5.67.82L313,121.21l-4.69,1.28,2.36,1.83,2.27,4.87-2.6,3.79,1.4,2.37,5.38-2.77,6.48-6.69,5.87-.4,5.89-3.13-3.15,6.39.67,2.15,2.05-.42,1.23,6.5,5.17,7.89-2,4.26-7.46,2.49,1.41,3.74L329,159.17l-1.79-.54.38,2.26-3.43.26-1.9,2,3.11,3.5-7.19,5.49,3.69,2,3.37-.61,1.87,3.71,1.55-.48,2.33-5.09,3.42.07,4.57-3.33,5.6-.2,5.69,3.28,1.53,3.55,5.13.42,3.06-1.31,1.79,3.05,4.65,2.14,6.33-4,5.35,5.26,7.13,1.69L393,188l-2.44.3-2.16,2.49L389,194l-2.05,3.15,4.33.51.23,2.32,2.51,1.11-2.44,2.82.72,6.65-4.47.51-.82-3-3.44,1.52-10.14,8.6-.4,3.22-4.47.06-3.31,5.71-2.37.33-2.94,3.45,2.64,6.7-1.7,5,17.11,24-1.67,2.5-2.49-1.35-2.44.89-5.72-4.24-7.18-2-.81-1.89,1.76-1.3L359.1,257l-1.54-.33-3.91-6-5.92-1.94-.88,1.12-5.7-.28-5.94,5.56-3.4-1.37-15.57,2-13,6.54-6.6,10.53-3.89,2.39h-4.56L283.08,285l-3.78-1.67-4.07,6.54L270,289.1l-6.84,9.62L254.88,302l-4.27-2.23h0l-1.41-3.59,1.89-3.82-2-.81-.43-3.84-1.59-1,3.25-1.91-2.52-11.18h0l3.47.93,6.61-5.48,7.19-2.27.12-5.73,3.72-4.07,4.87,2.89,14.24-4.59,3.56-.18,2.21,2.3.82-2.13,7.37-5.6-2.67-5-.64.84-1.2-1.55-2.17.14-1.57,2.74-.29-2.8-1.4,2-1.19-1,2.65-5.6-.54-3.48-2.73-1-1-2.69-2.45-1.51.95-1.89-1.52-1.73,1.19-1.16-2.52-3.19,1.95-.81-.48-1.2,2.81-3.77,6.85-5.78,3.31-6-10-.65L274.92,206l-6,5.63-8.67,2.95-4.47-2.16L237,219.54l-11.22,2.61-1.42,2.66-2.9.41-2.59,2.33-4.38-.05-.46,1.3-14.66,6.79-1.9-3.35-4.18,1.95-4.58-2-1.44.81-1.57-3.52-2.7,2.23,3,4,.17,2.57-6.71,3.29-6.34,8.45L166.25,255l-10.42,11.61,1.79,1.31.63,3.26-4.12.93-6.37,6.71-12.28,2.39-9.31-1.81-21.64,3.41-6.68-3.49-.08-1.5-2.91-1.69L80.8,273.86l-1.31,1.47.42,2.29-4,1.88-8.27-.11-4,2.73-3.07-.69-5,2.43-11.1.64h0l-.29-8.37-4.58-4.2L39,264.75l3-4.51-2-3.17,4.09-.18,1.24-1.36-4.07-2.92L41,247.23l-2.36-5.88-5.22,1.42-5-1.59-9.42.87-2-2.4L14.19,241l-5.31-6.68.62-2.46L8.29,230l4.35-5.37,1-4.38-.75-2.64L11,216.13l-2.19.41-1.42-3,7.77-.2,3.14,3.33,7.54.22,2.4,5.43L32.06,224l4.29-4.07,4.71.81,10.2-7.4,3.54.08,3.42,5.9,4.2-1.24,1.78-2,3.17,1.39,3-2.83,3.92,1.52,2.91-4.19,4.23-1.67,4.63-6.63-5-5.44,1.58-4.68,7.42-5.68,1.76,2.25,4.53-2.43,4.57-4.25,2.35,2.31,2.2-2.41-.66-3,12.86-2.27.83-5-3.22-2.92,6.14-4.83,1.93-4.58-.35-2.49,1.83-.65.61-2.38,7.16-2.68,1.88,1.68,1.11-2.27,2.82,1.88,5.67.08,7.35-2.36,2.87,1.55,4.53-2.9,5.41,2.66,5-7.75-1.07-1.7.64-3.22,10.55-8.49,3.92-9.69,4.81-4.8,4.55-.33,1-2.83,3.87-2.74,8.35-.16,4.63-9,5.45,3.33,4.37,4.74,1.36,5.74,4.86-1.47,9.94,4-1.66-3.18,6.64,2.2,1.54,2.06,8.49.48,1,3.91,9.46,1.77,2.91-.21,1.89-2.56.87-5.19,3.33.87-.6-6.4,3.17-.3.85-3.29,2.59.9,9.19-8,1.24,1.51L293,98.93l5,.66,8.13-6.07Z"/>',
        banner: 'ar.jpg'
    },
    {
        key: 'Assam',
        value: 'AS',
        path: '<path d="M19.1,235l.6,3.72-1.51.85h0Zm136.09-91,10.24-.59,4.67-2.24,2.83.63,3.64-2.51,7.64.09,3.67-1.73-.39-2.11,1.21-1.36,13,2.1,2.69,1.56.07,1.38,6.18,3.22,20-3.15,8.6,1.68,11.34-2.21,5.87-6.19,3.81-.87-.58-3L258,127.51l9.62-10.72,6.35-4.68,5.86-7.81,6.19-3-.15-2.37-2.76-3.65,2.5-2L287,96.44l1.34-.75,4.23,1.88,3.86-1.8,1.75,3.1,13.54-6.27.43-1.21,4,0,2.4-2.16,2.68-.37,1.3-2.45L333,84l17.35-6.59,4.13,2,8-2.72,5.52-5.2,13.33-1.34,9.22.6-3,5.57-6.34,5.33-2.59,3.5.44,1.1-1.8.75L379.51,90,378.41,91l1.4,1.6-.87,1.75,2.25,1.39,1,2.48,2.52.91.5,3.21-2.45,5.17,1.1.9,1.29-1.83.27,2.59,1.44-2.53,2-.13,1.11,1.43.59-.78,2.47,4.61L386.19,117l-.76,2-2-2.12-3.3.17L367,121.23l-4.49-2.66L359,122.33l-.11,5.28-6.64,2.1-6.11,5.07-3.21-.87h0l-5.19,5.16-5.4,2.82-2.17.49-3.49-2.3-2.55,1.33L319,150l-7,5-3.55.95-1.47-1.4-1.79,3.27-1.8-1.35-4.69,2.79-.33,2.32L295.06,163l-.52,5.55-2.94,1.6-2.1,3.09L288.12,172l-.25-5.63-.79.36-5.49,6.64-.67,7.85-4.1,1.21-6.28,10.33-.83,6.77-2.2,4.4,1.49,5.9L265.13,212l-2,2.8-2.46-1.12-2.83,3.25-1-2.15L258,210.5l-1.54-3.79-1.29,2-3.9,1.82,1.08,4.08-8,5.91-4.46,7-4.4,1.69-5.83,5.67,3.9,5.54,4,2,1,3.67-1.6,2.39,1.34,2.34h0L233.08,255l-3.22,10-1.9,3.2-2.21-.11-1.18,2.06.83,4.5-1.37.83.81,1.33-1.47,2.77L221.43,281v3l-2.7,1.44-1.84-2-.79.68-.16,4.52-1.9,2.1,1.75,2.33L214,298.33l1.92.85-2.79.58.7.91-2.24,4.26.21,5.7-2.36.53h0l-3.94.51-1.47-1.15-.38,1.23-2.58-.34L199,312.86l-3.87-9.51-4.54,11-4,1.47-.77,5.27-3.71.49-1.16,4.54-2.78,1-.3,1.38-2.69-.73-.87-6.68-7.64.09h0l-5.1.16,3.63-8.63-2.52-5.38v-2.91h0l1.21-10.17,2.88-5.29-3.52-10.83,3.52-1.4,5.66,4.68,2.49-.15,1-1.68,2.6.22.78-2-.93-3.33-1.26.79-1-.73,1.32-.25-.8-1.27-1.95.24-.16-4h0l2.27-.35,1.28-4.74,3.57.57-1.12-2.7,5.9,1.49,2.75-4,8.37-2.82-2.42-2,1.67-2.39-.47-3.17-1.45-.18L193.44,246l-1.15.42-2.7-2.82-.83.45-.36-1.67-2.74,1.26-.67-3.7-1.86.28,4.69-4.68.54-3.68-3.1,2.34-1.82-.21-.91-3.45-3.4-.74-2.21-4-2-.57.06-2.72L172,221l-3.13,1.9-6.36.6-4.15,3-.46-9.46,1.63-3.86,2.77-2.48-3.76-.32-.44-2.22,8.57-9-3.42,1.12-3.82-1.15-2.74,2.27-4.89.88-3.75-.55-4.2,2.79-3.16-3.54.35-3.07-3.44-1.42-5.36,4-.67,7.08-3.09,3.27L125,208.47l1.63-1.67-.35-3.88-3.43-.72-4.51,7.57,1.81-.2-3.44,3.52,2,.26,1.34-1.5-.26,1.13-4.93,2.14-1.55-.92-5.19,1.07-3.52,6.17L101.42,223l-1.94-.41-.74-3.14,1-5.56-8.1,2.6-.81-.57,1.74-1.6-1.79.26-2.94,1.78L89.58,212l-3.75.06L84.32,208l-1.63.29.19,2-2.19-2.59-2.81.92-1.64-.94-1.93,2.95L72,210.13l.41-2.83-3.73.44L65,211.23l-1.11-.9,1.37-1.69-2.84-1.51-4.25,4.28,1.33-4.16L56,203.4l-3,1.76-2-1.69-1.91.26-2.48,2.42-8.62,2L34.2,207l-6.92,5.56,1,.88-.83,1.26-3.87,1.5.65,3.36-1.33,2-2.48.64L28,231.16,19.09,235h0L20,229.3l-3.08-5.88.55-3.41-1.77-3.27,4.61-8.29L18,208l-.61-1.17,2.06-.82-2.18-2.31,0,2-1-.26-1.15-3.67-1.59.17,1.56-1.4-.36-1.92-2.34-1.54.7-1.24-1.2-1.9-2-.7h0l.94-.61-2.39-.95,2.26-1.56-2.12-.33,1.92-1.42L9,186.24l1.24.78.75-.85-1.2-2.34,2.48,1.1-.49-2.17,1.85-.63.07-1.51,4.57-2.11-.63-1.23-1.19.42,2.63-4.28L18,171.53l.57-6.09.94-.43-1.24-2.65,1.17-1.76-1.18-3.68h0l.33-2.25,5.8.94,11.45-2.15,2.59-1.07-.28-2.65,1.87-3,5.27.37,3.26-3.24,3.32-.4L61,150.33l9.26,2.27,20.78-.81,2.6-2.73,10.08,1,4.5,1.72,4.38-3.79,5.13,3.11,8-2.14,3.86,1.1,7-3.19,3.4-4.2,2.4-.14,5.37,3.92,3.65.73,2.64-.92,1.17-2.23Z"/>',
        banner: 'as.jpg'
    },
    {
        key: 'Bihar',
        value: 'BR',
        path: '<path d="M377.58,144.2l.06.29h0ZM69.23,60l2.57-.27-.15,2.69,4.41,1.41.21,2.34,3.53-.82,3.06,5.87,25.23,4,5.49,10.69L112.3,96.25l-2.44,4.16,8.82,3.85,1.23-1.28,1.62,1.9,2.79-2,4.78,4.29,5.48.81,1.24,1.75-.83,2.07,7.17,2.53L139.21,117l13.41-1-1.44,4.72,2.57,4.58,9.59,1.49,5.67-4.29,3.56.8,14-7.76,7.74,6.58-.16,12.17,6.59,4.46,2.59-.61-.1,3.54,7.61-3.85.94-3.26,5.28-1.32,8.51,3.25-.18,1.93,4.34-.71,1.94,2.27,2.7-2.47,5.78-.22,16.63,7,2.21,3.54,12.43,6.44,2.65-3.13,5.27,1.69,4.69-2-.18-2.07,2.95-.31.22-2.33,6.39-1.32,2.29-4.75,2.08.13,1.52,11.65,5.51,4,7.24-.6.75,3.2,3.6.21,2.21,2,2.16-5.18,7.56-2.77,10.78,5.1,3.55-1.08,2-3.6,4.32,2.37,2.54-.39,1.8-4.88,4.56,2.81,3.05-4.32,3,5.89,5,2.21.48,2.36h2.49l.36-2.32L377,153l.68-8.44h0l3,2.12,1.77-2.27,4.87-1.26.16,1.69-4.2,3.59,1.14,1.6,2.51-.37.22,2.51,3,2.18-2.89,2.38.55,1.6,2.32-.5,1.88,2.34-6,6.2-5.39,2.48-5.78,6.61-2.51-.17-1.88,3.16-3.79-1,.31,6.06-2.34-.27-.52,1.33-1.41-1.89-5.48,4-.94,9.33-2,2,1.48,3.48,6.81,1.68-2.13,2,2.1,1.18-.93,3.85,2.62-.13,2.22,4,6.77,2.91-1,4.59,1.45.34-2.57,3.92,1.13,4.28,2.87,2.8-.19,2-3.31-.48L370,232.3l-.25,1.39-1.36-.73-.05-1.89-4.64-1-2.09,2.72-1.53-1-1.22,4.31-2.29.07-1.95,2.59-2.11-.89-1.72,3.37.51,2.31,1.79.49-.38,3.39,5.61,4.65-2.6,3.7,1.07,3L353,257h0l-.33-2.18-5.84-.87L345,249.36l-6-.11-2.08-3.15-2.53,1.49-.59,4.19-4.51-1.15,1.1,2.78-1.78,1.84,0,3.93-6.22-2.79-1.7,1.91-3.59-1.54-2.5,11.38-3.14-1.41-3,1.38-5,5.55.88,11.76-.55,2.31-2.83.24-2.78,2.83,1.4,1.76L296,309.05,286.64,306l-2.47,4.76,1,4.05-2.69-2.42-1.69,1.43-1.36-1.51-2.84.31.42-2.53L274.8,308l-2,.15-1.49,3.57L266.39,313l-5.06-3.76L257,315.12l-3.17,1.47-1.32,7.84-1.77.26-1.05,4.5-2.84-.89-5-5.46-5.54-1.54,2.58-3.93-.65-4.21,1.45-2.19-4.54.7-3.62-3-1.73,2.25L225,309.33l-.69-8.61-2.93-3.48-3.67.42.89-3.24-7.76,4-5.61-5.77-7.78.11-3.13-2L191.21,300l-3.64,2.24,1.17,8.9-6.82-1.79-.64,3.2h-2.43L177.41,316,175,313.79l-15.78,2,0,2.49L149,321.22l1.45,2.83-6.19,4.24-1.85-.64.82-4.49-1.77,2.09-4.86.25-1.69,3.06-5.46.33L128,321.22l-3.54.87-.14-5-2.88-1.52-9,6.18-1.6,5.29-6.64-1.57-.52,2.4-3.42.65.31,3.1-2.47,4.43-3-4.36-2.87.61.39-2.34-3.12-2.58-3.58-.52-1.61-2.34,1.18-.65-2.87-1.66.07-2.53,2.49-1.86-2.58-5.35-1.84.15.85,1-1.78,1.79-1.71-1.89-1.35,1.52-2.26-1.71-1.2.7.5,3.1-2.57-2.53-.47,3-2.33,2-4.88-11.06-4.22-2.18L54.42,314l-4.68,1.27L38,317.65l-16.9-1.86h0l3.34-8.39-3.39-2.16,1.25-2.5-2.55-2.08L19.71,298l-2.07.38L12.51,294l.27-4.14L10,286.69l-.78-11.86-2-.58,3-9.08-1.71-4.86,1.11-1.5,3-.68,1.62-3.6,4-.23,6.13-5.59,1.91.81,4.5-1.82,2.16-3.27,3-.28-1.07-.61,1.5-1.51.73.85,2.2-2.08,2.28,1.93,2.89-2L44,239l3.4-.46-2.17-2.47,3.16-.66,5.1-7.23,12.34-6.75-.54-4.95,1.92-2.12,4.16-.91L75,215.82l.66,2.88,6.4.7-.15-1.34,2.7.45,1-6.21,3.76-.35,1.7,4.2,3.63-1.28L97.73,218l2.8-.56.87-3.59-.34,2.87,1.61.75.26-4.47,5.8.69-2.33-2.76,1.53-2.86L103,204.36l-2.29.28.13-3.71-8.15-1.26-1.16-3.33-4.4-2.4L82.87,195l-7.31-4.59-2.75.78.07-2.91L67,182.2l-3.25-.27L61.35,178l-.51-8.19,5.24,1.67L68.69,168l3.58,1.37,1.73-6.1-.8-4.89-7.68-.91L60.8,152l-2.25,1.19-6.16-1.34V146l4.67.81.9-2,5.69-1L66.33,139l0-3.72L81,139l11-2.4-.94-3.79-5.93-1.12L83,125.77l-3.93,2.06-1-.88-.72-1.52L79.47,121l-.87-4.63-2.46-.74L73,118.76l-2.89-1.83.71-2.75L67.73,113l-.82,2L64,113.82l-.34-3.46-1.76-.94,1.68-1.66-.45-7.15-3.87-2.06,2.32-2.32-6.29.21,3-9.29-1.88-3L52.05,82l2.14-3.87-.69-1.83-4.8,1.22-2-1L49,74.12h0l3.87-2.89-2.57-.66-.38-3.17,4.87-1.81L62.22,67l5.27-4.84.18-2.37,1.56.3Z"/>',
        banner: 'br.jpg'
    },
    {
        key: 'Chhattisgarh',
        value: 'CT',
        path: '<path d="M264.89,9.28l5.79,1.09L272,12.93l3.36.88,2.06,8,1.89.86L278.41,24l7.64,2.62L288,30.73l-.83,4.47,3.42,5.13,9.12,2.25.15-3.67,3.94-.61.89,5.43-3,5.49-.21,4.57,2.32,1.75,2.1-1.31L307.37,57,305.3,68.74l5.44,3.5,1.06,7.23,2.38-3.68,1.55,2.91,3.09-.76.41,1.69,5.23-.85L325.51,81l-1.09,4.56-2.3.3-2.51,5.9-1.77,0-1.64,1.7-.27,4.07-4,2.11-4-.13-4.29,4.1-.14,3h0l-1.27-.08-.23,1.22,3.72,2.33-2.12,5.9-8.15,1.46-6.16,6.18-3.4-.17-2.69,1.28-4.92,7.38,2.34,2.34-3.53.62-.18,5.6,1,1.91,2.69,1.3L279,146.3l.74,1.72-3,.71.3,2.32-2.59-1.26-1.36,1.94,1,2.51-3.67,4,3.69,3-1.81,1.24-.65-2.69-3.45,2.23-2.62,7.13.89,3.13,2.48,2.71.5,3.09-1.58.52-6-2.13-.91,3.81,1.17,1.62-3.2,1.54-1.61,7.57-4,2.09-4.51-1.09L244,188.64l-4.37,1.6-3.8-.57-1.34,1.17-2.08-1.24-6.62.62.52,2.89-2,1.86.73,2.09-3.94,5.77-3.83,2.3L215.71,210l-2.48-.16-.8-2.18-3.12-1.3-.66,7.59,1.89,8.13L208,226.27l3.22,2.66.43,3.46,1.25-1.25L214,234l-2,5.45,2,3.17-1.37,1.17.48,3.69-2,3.48.68,5.12,11.8,4.45,1.9-.87,4.31.59-.4,5.84,1,1.35-.84,2.39-3.24.34-3.46,3.27-.78-3.09,1.27-2.53-8.6-2.32-3,1.28-2.81,3.11-6.19-10.11-3,1.21-6.86-4.33-1.9,2.4-4.73-5.55-4.26,4-1.66,5.17.7,2.53,6.3,3.2,1.13,3.55,4.53.76-1.27,4.76.49,9.93-1.35,2.2,4-.48,1.55,5.16,3.62.38-.95,3.09-1.45.24,2.41,2.53-1.79,3.25,1.54,6.39-1.08,1.94,2.27.53.71,1.62-1,1.81,1.77,2.73.82,6.23-3.8.91-.66,6.23-1.83,2-2.71.11-.16,2.61-2.55-.4-3.76,1.68-1.15,3.69-3.53-1.28.17,1.75,3.76,2.05-.43,1.64-2.18-.3-.67,2.13-2.21.92-5.46,6.06-1,3.93-5,.37,0,1.67-3.72.59-3.72,2.51-1.32,4.49,1,1.57-.8,3.86-2,3.8.2,3.48-2.28,5.59-2.47-.54-.5,4.66h0l-7.45-.33-5.38-2.4L136.88,392l-2.34-.2-5-17.32,1.69-5.18-6.36,2.11-.78-3.87,1.1-.57-2.16-1.6-1.8,4-3.61-.32-.07-2.81,3.12-2.1-2.48-2.87-1.61-4.8.59-1.56-2-.61.45-1-2.74-2.16-1-2.78-8.49-6.52-8,2.49L91,336.52h0L89.58,334l2-.3,4.1-3.53L91,323.92v-3.5l3.1-5.24.15-4,3.52-2.85-.19-3,3-1.31,2.2-4.44,5.25-3.94,2.4,5.61,3.52-1.15.94,2.57,3.46-.19,5.45-4.44-3.25-3.95,5.92-2.34-.74-3.2L123.9,288l-1-2-3.49-.34-2.58-2.4-3.65-.24.51-4.8-7.18-4.95.16-2.68-4.17-.33.51,3.15-1.46-1.24-3.29-.1.17-1.3,1.94.36,3.74-3.52-.84-1.81L99,265.33l-.08-1.6,2.13-1.22,2.1,1.5,2.26-.18,1.44-3.39,0-4.73-.33-2.66-2.41-1.75L98.21,251l-.45-1.13,1.59-1.65-1.76-3.1,7.27-1.69,1.78-2.24,4.31-1.62-1.81-3.74,2.06-12.57-3.12-.52-3.16,1.65-1.72-1.93,1.48-2.27,4.13-1.75-2-5-.21-10.19-4.91.1-1.81-4.69,1.34-1.64-.8-3.67,1.37-4.59,10.12-4.69,2.15-2.92-.94-2h0l4.19-8.58-1.19-7,.53-7.61,1.39-2.81,3.88.64,1.17-3.5.27-8-1-1.29,1.56-.25,3.7-9.66,2.26.38.73,3.33,2-.19.26-2.16L131,131.49l2.56-1.11.21-5.89,3.71-1.07,1.66-2.92-.22-9,4-3,2.18,2.35,3.25-2.92L150,109l1.08-2.6,3.17,1.16,1,3.92,1.58-2.33,1.34.73-.56-1.63,2.37,0,2.24-2.86,5.5.06.44-1.55,1.43-.29.45-3.86,2.87-1.08.91-1.63,1,1.73,1.26-1L175.17,94l2.15-2.46L176,87.43l.49-2.41L181.42,84l.2-1.49,4.57-2.58L185,74.73l1.12-2.26,4.89-.14,2.45-2.26,2.77.8,2-2.34-.49-5.28,2.68-3.51-.21-2.51L197.43,55l-1.53.37-.71-2.57-3,1.22-1.77-.62.08-2.19-2.27.63-3.4-7.33-5.07,1.28-1.29-2.13-3.9-1.34L172.13,45l-2.2-.5-1.49,2.54-1.21-1-.07-2.69-1.63-.27L165.11,41l1.87-.71.61-3.76,1.69,0,2.52-3.77-.76-2-1.95-1.06L168.57,26l-1.83-1.41.69-3.3,2.91-1.15,3.49,4.12-.22,1.15,3.61,1.76,4-.77,3.62-3,1.94,1.25,2.85-.64,2.54,2.63,6.66,0,2.36-2-.26,1.3,1.53,1.55,1.65-.93,4.15,1.13,7.5-.48,3.2,1.68,1.61-.61-1-1.85,3.34.07,3.76-2.08.25-3.18,5.21-.89,3.4-2.52h0L243,23.24l8.41-.14,5.86-2.66,1.51-4.22,3.41-2.1.74-3.08Z"/>',
        banner: 'ct.jpg'
    },
    {
        key: 'Goa',
        value: 'GA',
        path: '<path d="M60.08,35.75l64.3-5.81L138,4l7.14,20.9,26.46,3.41,10.05,42.22,12.38,14.41,12.27,2.85L247.62,68h0l19.95-.76,7-12.56,9.7,13.86L292,60.91l10,5.34,5.58,19.37-6,19,13.87,17.28-13,15.84,11,20.13.06,23.64,19.23,9.26L338.35,223,303,238.26l20.68,14.93,6.39,17-13.59,17.71-4.72,20.47,10.09,24.26-17.1,21.26,3.54,10.43-24.52,19.59L267,371.05l1.37,18.2-15.15-5L235.58,395h0l-22.91-9.87L217.12,368l-36.46-46.64-23.13-7.81L173,286.67l-22.55-80.52-9-16.62-13.69,4.22L103.2,172.09,142.81,178l8.39-7.86L131.11,154l-25.82-4.1,7.47-14.46-17.16.12-12-51.95Z"/>',
        banner: 'ga.jpg'
    },
    {
        key: 'Gujarat',
        value: 'GJ',
        path: '<path d="M97.41,199.75l1.8,2.06L98,203.24l-3-2,2.41-1.48Zm-30-1.19.61.95-3.79,2.78.53-2.67ZM120.73,191l1.1,1.67-4.23,1.21L118,192ZM32,143.39l3.29,1.14.17,1.65-2.6.7.1,1.05L30.8,146.2l1.82-.67L32,143.39Zm1.88-4,1.77,1.35,0,1.75-2.43-1.64-.59-1.32,1.29-.14Zm-7.1-7L28.15,134l-.68,3.51-1.56-1,.22-2.36-2.46,2.21-.54-.79Zm.56-7.72L27.32,127l-3.11,3.55.31-3.28,2.85-2.63Zm-1.58-1.86.63,1.58-1.6,1-.35-2Zm-6-12,2.41,1.35,1.73-.67-2.19,9.33-4.62,4.72L14.67,125l1.12-.55-1.19-1.15-1.9.74.49,1-1.76,0,.29-1.12-1.72.68-.71-1.85,1.12-1.54,4-.13,3.67-4.93Zm-2.39.41.3,4.29L15,117.43l0-5.65Zm10.83-2.13,1.24,5.08-4.86,1,1.17-2.31-.53-2.15,3-1.63ZM21.45,107l1.67,0,.86,3.43-3.62-.25-.43-1.52Zm3.47-4.83v4.31l-4-.41-1.67,2,.18-3.29Zm5.54-.16,1.36,1.38,1.64.4-3.95,3.61-1.59-.65.16-1.44,2.69-2Zm-3.09-3.66,2.23,4.54-4.59,5,1.55-5.51-.79-1.09-1.69.65,1.21-2.86,2.08-.78Zm-3.17-.19-1.23,4-4,2.24-.44,5.45-1,.81-1.05-1.16-2.33,2.1.07,6.72-1.73.72-2.8-3.33,2.55-2.91-1.31-4,1.32-.09,2.6-5.24,3.52-.19,1.54-4,2.21.82,2.09-2ZM187.86,52.42l11.65,4.88,3.26-3,2,2.11,6.43-3.49,7.85.22,2.75,2.5,8.4-2.49.78,3.25,2.85,1.18,1.11-4.75,2.67.53L239,56l6.62-5.29,2,.59,0,3,4.92,2.56,2.77.13,1.18-1.36,5.2,1.61,2.37-.62-1.7,2.09-2.86-.88-1.73,1.33,2.7,2.79,3.84-.94h0l1.74,3.47,3.43-.25h0l-.35,2.92,1.71,3.57,2.63-.19-.44-2.7L275.74,64l2.69,2.29,6.64,1-.23,2.54,2.39,3.87,8.29-.3,3.41,2.63,4.13-2.51-1.72-1.32,2.27-5.8.76-.79,2.34,1.15,2.65-2,.85,4.57-1.43,2.13,5.2,2.92,2.51-1.65,1.25.72-1.25,2-1.11-.63-.75,2.81-2.18-.43-3.81,8.2,1.93,3.09,6.7,2.69-1.52,3.11,2.86,2.72L321.38,96l2.53-3.09.17-2.76,2.34-.87L326.18,92l2.7,2.46-.53,4,1.2,4-3.83,4.6,0,5,.81,1.38,2.72-.84,3.6,4.67,1.78.38.31,5.74,3.9-2.56,5.1,2.16-1.44,5,1.3,2.91-1.57,3.43,1.25.79,3.12-1,1.34,2.86,2.36-3,1.12,1.59,3-.81,3.8,7.26,2.73-.29.51-2.12,1.45-.24,1.21,2.61,2.56.36.72,2.4,3.5,0,2,1.74-.41,6,3.42,1.76,1.5-2.63,2.36.25,2.57,4.6-.34,1.57,2.46,2.13h0l2.93,5.46-1.78,1,1.25,2.09,2.34,2.23,3.12-1.63,1.68,4.32-4.63,8.43-1.16,5.75-7.26-.09L374.09,196l-5.29-2.2-2,2.79.5,1.16,2.59-1.16-.44,2.82,1.55-.15,1.2,3.1,1.3-2.36,1,1.61,1.56-.79.26-2.22.84,2.68,3,.27,2.46,2.54-2.21-.37-1.9,2.73-1.24-.6-1,3-3.47-.68-1.36-2.58-2.45.75-.78,4.9,2,2.76-1,1.43,2.88.59.46,7.56,1.49-.51,1.59,1.24-5.08,4.66,3.44,1.91-.48,2.12h0l-20.51,8.56,2.1,2.14-.84,1.82,4,4.09-.65,3.61-6,1.31,2.26,1.75,2.22,6.7L369,258.77h7.12l1.34,1.85,1.82-1.23,2,.95,2.18-1.93,1.4,1.57-.06,3L380,265.08,378.72,264l-.4,1.34L372.6,265l-1.22,1-2.56-2.21-1.14,4.07-4.88,1.79-1-.67-.26,6.84-3.46,2.29-3.66-.33-.58,6.23-4.95.32-.31,1.88-3.38-.91-2.75,1.27-1.42-2.83-1.52.54,4.38,3.88,5.67-.38-.64,3.82,2,2.93,2-.79.53,1.73,5.5.84-.69,2.8,3.06,6.51.27,6.36-1.75,1.22-2.16-.4-1.35,2.3-2.5,0,1.39,1.74-.43,3.33-5.51,3.14-2.89-.71-1.85,1-2.07-1.1-1.8-3.71-4.22-2.44-2.44,1.33-1-4.14-1.77.44-.84,3-2.28,1.44,2.3,3.09,2.48.75L333,325l1.16.2-4.34,8.17-2.35,1.57,2,2.47.4,9.45-3.4.88-.41-1.34-.91,1-2.55-.56-1.35,3.73-4.44,1.78h0l-1.25-1.16,2-2.6-1.12-1.12-3.93-.62.27,2.21-1.54,1-1.92-1.11-.68,1.12-.34-4.74,2.06-.15,2.92-3.78,1.26.26-1.07-2-3,.79-.34-3.61-1,2.19-2.47.25-.38,2.06-1.49-1.7,0,1.72-1.84-.08-.38,1.33-2.33-1.41-1.31.95,2.8,4.3h0l-5.86-.87-2.44,2.59,0,2.67-2-.25,0,1.52-3.92-.75h0l1.1-10.07,4-5.12,3.87-8.39.78-5.63L290.88,302l.1-3.16-1.33.63-3-7.39,2.89-1.16-4-.47.95-4.51-3.28-.79-.49,4.39-1.94.8-.54-9.58-1.87-4.47,2.3-5.89,4.36-5.42-3.16,2,1.77-5.66,1.88-.76-1.32-.71-3.52,3.3L279,259.24l1.88-4.21,4.45-2.27,5.29.42,2.92-1.49-3.39.31-2.66-1.73-12.15,1.65-1.85-2.41,2-2.26,1.8-5.78-3.17-2.18-.95-6.41,2.77-12.82,2.09-3.29,4-1.07,6.52,2.88,3.34-4.78,4.23,1.46,1.5-.69.74-2.87-1.12,2.07-1.8.25L294,211.41l-5.6,3.38-3.92-.5-3.28-3L275.54,214l-.24-2-3.14,5,.41-2.61-1.34-.11-2.18-4.11L266.48,209l1.18-2.58-2-1.76-1.12.91,2,1.4-1.3,2.47,2.48,1,.17,4.61-1,1.83-2.65-4.71.35,4.34,1.79,2.43-.94,1.2-1.24-2.19-.74,3.83-1.21-.35-2.77,13-2.25-7.7,2.73-1.61.69.71.11-3-4,3.5-.12,2.47-.8,4.56,2,3.18.76,10.42,2.53,7.32-5.06,12.4-5.94,7-1,3.15-2-1.28,1.29,1.74-.93,2,1.94,3.21-5.85,2.75-.64,1.41.19-3.47L241,287.38l-9.59,3.19-1.41,1,.61,1.25-5.6,1.14-9.14,4.6-3.11.1.07,1.69-4.62,3.41-3.82-.27.41,1.1-10.73,3.58-3.27,1.53-.37,1.36h-3.57l-.83,1.35-7.13-.27-4.43,2h0l-2.09-2.86h0l-.58-.67,1.37,0v-2l1.62,0,.14-2-4.85-1.72,5.1-2.25-.81-3.87-2.51-1.64-4.58.62-1.8-1.89-3.83,9.5-.32,5.24h0l-3.62-.42L147,304.85l-20.75-16.4-23.64-27.69,3.12-3.23-1.61-4.71-.8,1.18-3-.41L102.9,256l-1.34.6,1.75,1.42-1.16,2.1L73.23,233.69,56.44,214.34l-1.31-4.89,3-6.72,5.06-4.33,1.09.55-2.53,2.57,1.53,2.41,7.66-1.83.63,1.45-2.84,5.84L73.27,213l5.33-2.19.85-2.53,5.23.93,4-1.33,2.36-3.38-1.56-3.18,3.19,2,.7,3.23,5.67-.22.58-2.28,2.14-.13-.07-3.11-1.6-.51,3.45-1.52,1,2.84.92-.72,2.32,2.74,2.36-3.56,2.08.5,3.72-4.08,1.61.86-.29-2.25,5.28-2.19,1.6,1.06,6-.31,4.9-7.32.61-4.67,3.07-1.59,3.09-7.46,4.25-4.07,4.3-9.43-3.43.85-2.19,2.09-.9,5.45-2.4,1.17-6.72-3.25L133.65,167l-3.57.93-2.36-1.19.54,2.38L107.87,174l-2.8,2-2.86,5.23-3.83-1.66-2.59.43L93,177.83l-5,1.24-7.17-3.64-9.64-.64L47.71,159.67l-3.37-.86L34.08,150l-.43-1.25L39,146.28l-1.91.23-.24-5.32L35,138.93l-2.87-.37.08-2.17-1.51-.13-2-3-.83-11,.71-1.63,1.23.17.25-2.39,6.61-4.49,2-3.35L43,108.23l-1.24-.92-6.84,1.29L30.08,114l-.68-4.48,1.92-.72,1.6-3,5.54-2.48-2.6.26-1.52-1.85L33.89,103l-1.82-.11-1.32-1.55.58-1,12.38.07,1.43-22.12,3.28-.95L49.73,84l2.43.83,3.65-5.38,3.26,3.38,5.65-2.88,6.53,2.26L78,79.4l11.67,1.45,6.09-1.52,7.57,6.85,16.88.58L123.8,85l3.65-6.53,27.87-8.65,2.26,1.32-2.43,3.74.94,2.29L155.28,81l5,1.81,9.2.16,5.4-2.29-.55-2.24,4.56-3.71,2.37-1,3,.88,5.17-3.63-.78-2-6.8-.73.46-5.4-1-1.24,1.36-6,5.29-3.35Z"/>',
        banner: 'gj.jpg'
    },
    {
        key: 'Haryana',
        value: 'HR',
        path: '<path d="M274.77,9.57,279,6.68l.58,4.14,3.82,3.06,5.16-3.2L293.89,21l2.64,1.5,2-1.87-1,4.49,2.55,4.19,2.14-1.59,4.49,1.29,7.79,6.52.59,10.94-4.78,3.88,2,3.1L318,55.36l1.79,5.47,5.11-.49L331,64l3.68-1,5.67,5.18,5.19-5.57.29,3L342,69.46l7.32-.5,2.39-4.35,3.44,6.19,3.33,1.53h0L360.25,74,358,81.11l-4.53,3.47L347.9,95.8l-5.17,2.41-2.65,6,1.71,1.39-15,7-.75,5.52-8.63,11.46L314.54,143l-3.67,2.67,2.73,7.74-6,12.52,2.5,5.69-2.58,2.3,5.67,10.87-1.41,3.74L314,191l-3.11,1.56.33,3.18,3.52,1.7-2.54,7.43,1.51,3.5-1.95,2.19,1.53,5.07-1.87,9L321,236.5l-2.49,5.95,3.22,6.09-4.09,1.68.53,2.72h0l-5,3-1.11-2.8-5.48-2.26-4.6,5.64-9.28,1.9L294,272l-3.86,5.67,1.7,2.31H286l-2.41,5.33-2.06.11.28,4.05,4.34,5.64,9.26-2.17,3.85,1.54.06-3.33,4.44,3.24,2.46-.6,3.66,3.11L311,303l4.93,4,7.79-2.4-1.55-4.13,1.75-2.43,9.89-2.87h0L348,306.37l2,6.49-3.16,2.38,3.33,3.64-.32,3.1-2.65,1.29,7.69,2.58L352.3,328l.37,3.28-3.12-1.2.32,3.16,5.22.41-4.78,2.55-.42,7.26-1.47-1.17-1,2.57,1.06,4.91,5.84,5.95-2.57,2.94,2.78,1.23-1.88,3-5.25-.12-1.07,5.57-4.8-1.27v4.34l-7.59-.06-6.61,6.2h0L326,376.42l-3.2,3.55-3.94-4.23-2.61,4.33,1.24-2.78-3.12-.81.08,2.78-2.59,1.8-9.17-5.1-1.84,4.9,4.86,1.68,1.23,3-8.91-.38L295.63,395l-3.78-2.1-3.28,1.94-2.25-4.77,3.49-.17-3.17-3.52,2.05-11.89,2.38-.19,1.27-9.92-2-.68-.05-8.52L294.72,338l-11.57-9.7L278,330.09l-1,6.38-14.58,7.09.92,9.11L257,353.75l-6.31,4.6,0-8-8.82-1.24,4.57-1.77-5.1-3.33,1.28-2.19,3.83.62-2.79-5.65-9.79,2-4.25-4.61-5.91-.17,8,5.9-6,3.22,5.94,3.15-1.38,4.47-4.59,1.18L224,348l-3.2-1.4L213.16,348l3.8,3.23L210.84,355l2.55,3.06L212,364.85l3.35,1.87-.58,4.11,3.14,2.69-5.24,3.91-8.82-7.13-4,2.41-9-2,1.49-5.22-5-.88-.55-1.9,1.55-2.11,2.57,1.65,2.46-5.58-3.16-1.92,3.54-1.07-2.13-2.44,4.16-.67-.49-2.09,3.15-2.28-2.08-1.74L193.12,349l-.26-3.45-4.78-1.56,9.53-9.29,4,.58-.13,2.73,2.9-1.25-5-5.6.83-2.51-4.35-2.05.78-4.61L190,317.53l-3.36-5.92-3.44-2.91-12.37-1.64.83-5.88-15.51-10.4L155,284.16l-6.49-1.46-2.78-16-3.16-4.41,1.54-5.78-4.81-10.59,5.14-5.81-.56-4.18-8-.69-.46-5.7-5.16-.66L132,222l-3.65-1.68,4.11-5.48-.51-8.66-3.92.87-1.32,3.38-3.16-1.17.45-6.81-10,6.93-4.52-4-7.46,5-3.14-.68-4-6.49L89.82,205l-3.94-1.2L83.18,194l-8.94-4.68L65.45,195l-11.07-1.94L53.52,198l-4.79.34.1-4-4-6.7L42,186.83l-.23-2.91,1.43-2,3.75.94,3.69-8.14-5-4.33,4-22.54L47.78,146l-6.32,3.24-5.6-.32-.7-5.19,9.18-9.31L42.27,130l-3-.61,1.45-4.25h0l13.3,4.62-.74-2.12,5.3-5.59,3.45.88,8-3.67,5,4,3.31-1.1.4,3.49,3.16-1.2,7.72,11.06,7.86-2.69,2-4.31,2,5-2.39,2.84,2.69,2.72-1.76,2.37,6.64,3.06.14-4.63,2.8-2.25,5.06,10.33-3.87,3.2.16,4.46-3.89,3,1.61,3.89,5,2.79.23,7.19,7.55-2.61.87-2.43-2.48-2.57,3.86-7.21,3.4,1.36-1.57-4.12,4.52-2.08,6.81-11.5,7,5.7,4.64-.69,1.29,2.76,4.62-.45,1.27-3.19,7.49,2.14.88-6.37,6.83-2,2.54,2.17,3.43-.62,5.22,7.78,8.9,1.87,5.49-2.94,1.88,1.12,4.36-7,4,1.11L219.89,134l-6-2.33L212,126.87l3.91-1.85-1.34-8.63,2.55-1.28-1.78-1.29,5.89-8-6.7-3.63h2.22l-.84-2.86,4.92,4.77,7.46,1.29,2.71-2.32-2.4-2.58,6.66,2.59,1.22-3.61-2.15-3,3-2.28,4.36,12.15,4,.43,1.07,2.45,5.59-2.64,2.27,2.82,2.53-.61,2.66-3,1.28-12-3.61-1.1.81-1.89-2.92-3.06-5.35,3.51,1.57-4.52,6.47-.68,6.74-6.63,4.21-.84,2.43-3.2-2.83-.66-1.16-3.41,6-5.43,5.26,3.24,2.5-2.64,5,5.71v3.19l4.89-3.48-4-6.29V60.32l3.26-4-3.67-2.68,3-7.13L284,41.57l.37-4.65-2.85,2.83L280,36.13h0l.87-9.38h0l1.94-3.46-2-4.82-6.11-5.3Z"/>',
        banner: 'hr.jpg'
    },
    {
        key: 'Himachal Pradesh',
        value: 'HP',
        path: '<path d="M39.3,94.9l5.79-9L42,79.51l1.81-8.87L39.44,63l-9-7.59,1.5-8,6.71,0,8.92,6L63.08,42.2l1.3-4.85,16.29-3.74L85,24,98.18,12.84l8.78.92,8.89-4,3.9.35,5.12,6,11.67-2.28,2.89-9.45,2.6-.84,2.78,2.56,2.9-1.31L144.88,17l4.65,5.85,3.72-.26,4.57,10.85L167,39.4,171.18,38l4.49,3.54,7-1,1.11,8.94,3.14-2.3L193.07,52l1.2,4.09,2.21-1.5,5.31,3,2.57,4.59,3.25-.73,3.52-8.1,7.68,3.2,3.33-3.33,4-.11,7.3-7.59,7.87-2.1,1.35-3.58L248,41.79l8.81,8.93-3.26,5.45,9.77,4.9,3.78,7.12L271,69.44l-1.34,9.79,9,14.29,6-.73-.21-5.85L288,88.46l3.18-5.08L294.38,86l3.52-4.91,6.85,1.32,9.39-5.85-.91-3.36L322.72,70l-.93,12,2.91,6.54-10.45,6.13.28,6.46L312.19,104l3.62,4.29,8.17-7.2,3.21,2.41h0l3.88,1.85-.78,5.55,9.15,5.07-6.2,8.86.23,9.1-3.06,5,11.37-.47,6.07,4.18-2.11,8,2.61,4.87,5.73,2,9.48,13.25,4.49,1-9,27.45,3.78,3.91-1.51,3,2.61,6.54,5.14.28,5.83,9.89-14.11,12.83,1.13,4.43,3.66-.75,5.28,5-2.15,6.81,5.76,2.64.2,6.75,8.83,9.38h0l1,4.49,6.7,6.21,2.48,8.28-14.2,1.06-6-5.26-2.69-7.63-16.71,1.37-1.5-3.59-4.43-1.92L341.52,277l-7.6.39L331,272,328.18,270l-2.49,1.59L321,265.86l-6.57.35-.56,2.93-2.77-.7L307,273.23l-9.62.46-6.81,5.38-6.55.72-1.79,4-6.74-3.14-7.63,3.17-5.07,9.68L258,296l2.8,7.11-3.27,5,2.35,2.14-6-3.09-3.33,2.3,1.26,4.9,5.67-.2-.71,8.59-5.09-3v6.75l-6.37,8,6,7.62-.87,3.25,5.18,2.9.33,5.83-6,2.75,3.67,4.64,4.7-.11.83,4-1.29,2.86L244.2,376.2,233.09,379,231,382.38h0l1.34,2.62h0l-3.63-1.67L225,376.58l-2.6,4.74-8,.55,4.19-4.18-.32-3.26-5.66,6.08-6.19-5.64-4,1.08-6.69-4-5.57.54-2-6L182,364.44l-2.21-3.38,5.21-4.23-.65-11.93-8.5-7.12-4.89-1.4-2.34,1.74-2.78-4.58,1.07-4.89-2.14,2-2.88-1.63-5.85-11.31-5.64,3.49-4.16-3.33-.63-4.52-4.58,3.16h0L134.58,309,123,303.66l-1.26-6.49,3-7.48-4.14-2.3.13-7.27,5.11-4-1.08-1.86-5.14,1.42,2.38-4.56-3.53-3.86-4,3.27.25-3.78-2.16,2.86-.43-2.74-2.92,1.28-2.47-4.86-4,3.61,1.95-3.06-7.83-11.25L94.94,246l-.45,3.4-4.91,1.75,2.36,6.53-4.61,1.43v3l-14,1.64-.74-4.58-3.55-2.69,2.1-6.91-17.1-30.79-9.18-22.64,5.63.35-8.73-18-12.5-5.93-10.72-8.94L14,161.56l-5.76,1.49L6,161,15.4,149.9l-4.72-2.73.27-6.61,12.91-5.21,12.19-14.1,10-5-9.22-12.19Z"/>',
        banner: 'hp.jpg'
    },
    {
        key: "Jammu \n and Kashmir",
        value: 'JK',
        path: '<path d="M120.1,55.49,123,58.88l5.8-.25,4.12-.24,3.63-2.9L140.43,54,144.3,56,148.41,62l4.84,7,6.29,7.26,2.74,5.42L170.5,87l8,3.87,6.77,6.29,8,2.66,6.29,6.54,3.87,3.38,6.53.73,5.57,6,.24,4.35-1.21,3.63,1.7,4.6,2.9,4.36,6.53,1.93h8l9,2.67,5.32,4.83,2.18,6.29,2.42,4.36,8.47,1,9.73-4.45,8.41-2.09h6.78l4.91-7.74,5.57-4.84,6.53-1.45,5.32-2.18,4.84-3.63,8.47-.72,7,2.18,4.35,2.42,2.91-1.7v-6.29l2.66-3.15,4.35-1.2,6,4.83,3.15,3.63,3.87,1,7.5,1.69,5.81,1.7,4.84-2.18,3.38-1.21,3.15,5.08,2.9,4.84,4.12,2.18,5.08,3.63,1.45,3.87-1.21,4.11.72,4.36-.24,3.14-2.17,4.12-.25,2.9-2.42,3.39-.48,3.63.24,6.29-1.93,4.84-1.94,4.6L383,193.5l-1,5.33-3.63,1.93-4,1.74-5.08,2.42v4.84l-1.93,3.15-4.6-.24-5.08.24-2.42,2.18.48,2.66,2.18,3.87,1.24,5.07-2.12,9.07-5,5.45-3,1.21-4.84-1.21-5.45-1.82-3.32,1.52-4.84.9-2.87.91-1.22,2.87,1.06,4.24,1.82,3.78,2.12,3.48,3.32,5.44-.9,3.33-2.58,2.27-3.62,1.51-.61,3.33.45,3.93-1.16,1.74,7.51,6.9.43,4.08,5.62,2.26,11.42.76.29,1.88-3.08,7.08-.13,3.12,4.9,5.42,1.15,5.2,3.16,2.59,1.58,5.37-1,3.81-5,1.28-6.92,5.95-2.74-2.18-2.82.75-3.89,2.8-1.12,5.55-2.81-.69L329.43,343l-3.18-1.46-6.79-6.49-.89-5.56.84-1.83-1.75-5.88L313,324.59l-1.46,2.54-4.11-.32-3,2.35-1.67-.37-2.06,1.41-.08,2.66-1.44-1.08L295.49,335l-1.62-1.92,1.05-1.28-.13-2.9,4.69-2.75-1.3-2.94.41-5.41-4.26,1.45.42,1.51-4.22,2.62-3.07-.59L285.88,325l-1.43-1.19L283,326.1l-1.6-.69.09,2.63-2.71.32-4-6.41.6-4.39-1.74-.56-1.69-3.2-4.39-2.19,1.46-2.45-3.95-4-2.41-.86-.6,1.61-3.54.94-3.27,3.41-1.78.05-1.5,1.49-3.45-1.43L246.94,314l-1.46.33-1.16-2.06-2.38-1.35-1,.68-.54-1.84-2.77-2.14-1.41,1-.5-4-3.13.43-2-1.59-1.88.61-4.12-2.67-2.05-4.87-1.67.12L218.79,294l1.26-5.5-1.3.59L217.5,288l-1.16.38L215,292.6l-5.24,1-2.29-2.68-1.75-.16-4,1.79-3.94-.41-5.94,5L190,301.48l-7.31,1.68-.59,2.17-6.94,5.05-4-2.72-3,0-.68,3.59,4,3.41,2,3.41-.81,4,1.37,2.85L171.4,329l-3.47,5.35-3,.65-1.75,3.49-9.28,4.15L152.5,347l-.56-2.05-1.14-.44.23-1.35-2.92.95-4.71-.78-6.46-4.08-.35-1.15-2.5.59-2.9-3.93-2.34-.72-2.91,2.66-7.33-2.91-7,.68-2.86-7.58,1.73-2.82-1.33-3.64,2.39-7.31-2.8,1-1.42,3.92-4.21,1-2.88,1.78-7-.72-3.39-2.42-5.08-2.42-3.87-3.63-6-2.18-5.08-3.63H62l-1.69-3.63-2.66-2.42-3.39-2.9,1.45-6.05-2.18-4.36-.72-7.5,2.66-3.14-1.94-7.74,1.21-2.91.25-3.63L51.39,258l.24-3.39,2.42-2.9-1.94-7.5-3.63-3.63.24-7L48,227.86l-2.42-6.05,1-6.05v-4.11l3.14-3.39L55,206.81l4.11-1.69.24-4.6L62.52,195l3.38-.48,8.23-.24,2.9-2.18L79,184.79l2.18-4.59v-4.84L76.79,171l-6.05-2.66-4.84-1.45L63,164.71l-1.69-3.63,1-3.87L65.66,155l1.45-2.9-2.42-5.32-5.08.24-5.8-.73L49,144.87l-8.47-.73-4.6-4.21-2.18-4.35L32,129.29l-6.53-3.15L18,124.45l-4.85,3.14-5.32.24-1.93-2.9-.24-5.32L6.87,117l-1.21-3.88,1-3.87L9,103.64l5.81-4.11,6-5.09,5.57-6,5.32-6.77L34,74.85,38.8,71.7l7.5.73,9.44,1,10.65.49,5.08-1.21-4.6-5.08-4.05-2.24,2-2.89,5-.68,4.35,3.87,6.29,1.45,3.15-3.87,4.35-1L92,60.33l3.39-1.7L100.75,56l3.63-2.9,5.32-.48,4.11.72Z"/>',
        banner: 'jk.jpg'
    },
    {
        key: 'Jharkhand',
        value: 'JH',
        path: '<path d="M20.24,121.48l18.25,2,12.64-2.55,5-1.37,5.32-8.23,4.55,2.36,5.27,11.94,2.52-2.13.5-3.24L77.12,123l-.54-3.36,1.29-.74,2.44,1.84,1.46-1.65,1.86,2,1.91-1.93-.91-1.13,2-.16,2.79,5.78-2.69,2-.09,2.73,3.12,1.79-1.29.71,1.74,2.52,3.87.56,3.37,2.79L97,139.33l3.1-.66,3.26,4.7,2.67-4.78-.33-3.35,3.69-.71.56-2.59,7.16,1.7,1.73-5.71,9.72-6.67,3.12,1.64.15,5.38,3.82-.94,1.49,8.28,5.89-.36,1.82-3.3,5.26-.27,1.91-2.26-.9,4.85,2,.69,6.67-4.59-1.56-3,11-3.14,0-2.69,17-2.19,2.65,2.39L190.5,118h2.63l.69-3.46,7.36,1.93-1.27-9.61,3.94-2.41,3.35-10,3.38,2.17,8.4-.13,6.06,6.24,8.37-4.34-1,3.5,4-.45,3.17,3.76.74,9.28,5.15,1.68,1.87-2.43,3.9,3.28,4.91-.75-1.57,2.36.7,4.54-2.78,4.24,6,1.67,5.41,5.89,3.06,1,1.14-4.86,1.9-.28,1.43-8.46,3.43-1.58,4.69-6.4,5.47,4.06,5.28-1.38,1.61-3.86,2.19-.16,2.4,2.31-.46,2.73,3.06-.33,1.47,1.62,1.82-1.54,2.9,2.61-1.09-4.36,2.68-5.15,10.05,3.3,3.86-17.8-1.52-1.91,3-3,3.06-.27.59-2.49L325,76l5.39-6,3.27-1.49L337,70l2.71-12.28,3.88,1.66,1.83-2.06,6.71,3,0-4.24,1.93-2-1.19-3,4.86,1.25.65-4.53,2.72-1.6,2.24,3.39,6.45.12,2,4.94,6.3.93.36,2.36h0l-.92,11.86,8.39,5.8,7.48,9,.57,3-7.05,4,.79,2.61-2.57.14.75,2.68-1.85,2.69-1.6.1.19-2.25-1.63,2,1.81,2.55,5.1,1.52-1.19,4.34,2.24,1.41-2.41,2.92,1.43,1.29-2.42.17,3.11,1.54-1.89,2.84-3.27,1.07L377,116.48l3.09,3.34-.94,4.94,1-1.78,1.35,1.48-3.19,7.29,2.12.72-4.49,9.39-3.84,1-2.42,4.16-3.81.36.16,2.81,4.59,2.32-.25,3.3-10-.53,3.19,2.43-3.2,2,.57,2L353.93,159l-.2,5.75,1.61,1.11L353,168.26l-4.08.48,2,2.44-8.46-2.52-2.4,1.2-1-.77,1.43-2.42-7.89-.92,2,6.82,2.54,1,.23,5.19-2,2.33-1.85-3.1-.46,7.35-2-.42-2.5-.91.59-1.22-5.41-1.16,3,4.31-1.47,2.28-2.06-.06-13.13-6.38-2.55,1.86-3.45-3.19-1.66,1.6-.33,1.65-4.21,3-2.34-1.83,2.25,6.38-2.31,6.69-4.51.89-.54-1.47-3.16-.07-8.53,2.12-5.26,3.83-7.42-.06,0,1.86-4.9,2.24L259.08,211l-.35,4.22,1.52,1.25-6,3.53,1.18,1.39-1.19.75-1.8-1.91-2.95,1.95L248,220.68l1.17-3.08-1.48,1.25-6.3-1.55-.06-8.58-8.18-1.46-3,2.92,3,5.26L224.5,219l-6.5-1.41-.27,5.45,2.74,3.56-2.45.52,1,3.72-4.31,5.48.44,6.15,2.17.07,4.8,5.85,10.18-1.27.92,3.15,7.4,2.31,1.13,3.82,5.21,4.42,7.16-1.93,7.92,3.51,1.94-1.85,6.77.44L272,263.1l2.34-1.9-1.83,3.87-2.83.91-1.18-1.37L265.33,267l2.53,2.42-2.53,3.26-1.39,7.56,7.55,6.75,2.73-1.72,6.57,4.25,2.82,8.79,9.05.3,3.23,6.61-.79,2.19-3.66-.11,1.41,4.53,6.82,2.63-1.23,6.42,4.76,2.73,0,3.77-5.79.25-.38-1.31-.16,2.33-.82,2.18h-2l-.75.22-3.7-.35h0l-6-1.62-.47-2.52-4.56-1.21-1-2.06-3.85,0-2.71-3.84-5.14,1.57-.42,2L258.65,319l-6.1-9-14.4-3.54-5.75-7.08L231,303.23l-4.4,1.87L225.3,309l4.62,2.84,1,4.42-2.37,3.31,2.3.79-1,1.75,2.91.34-6.14,5.63,4.76,5.22-2.2,6.83-4.83,8.05-2.54,1.29-.57,3.42-12.08-2.07,2.27-7.84,3.58,0-2.4-3-10.07,5.56-3.08-3.72L195,343.27l-4.3-1.09-12.13-6.45-2.6.36-.42,3.13-2.94-.48-1.91,1.61L165,349.91l-1.68-3.84-3.2-2.24-.14,1.79-1.27-2-3.06.36-2-3-4.31-1-3.47,2.76-1.88-.43,3.66-2.44,3.91-14.37,3.67-1.64,0-2.14-2.18,0,.42-2.42-1.58-.68-1-11.66-9,3.55-.62-1.09-4.46,3-1.45-2.26-3.67,1.51-2.07-1.83-4.6.43-.74,2.45-18.14-.48L102,313.53l.08,2-2.49.41-1.82,2.72-11.43,1-3.56-3.27-4.38.17L74.88,314l-1.46-6.29L62.36,303.2h0l.21-4.38,6.29-6,5.8.19,5.91-3.1.4-6,2.41-2.5,2.59,0,3.7-8.66,3.37-.45,1.6-6.69-1.55-3.28-7.68,1.25-.6-2.49-4.53,1.12L78,257.91l-3.51,5.4L73,252.7l-8-5.14L68,230.25l-2.24-4-3.08,1.92-3.4-2.57.31-6.71L64,210.85l-1.31-8-5.77.9-.22,5.38-13.4-3.3-5-7.53,1.23-6.55-2.84-6L25.5,181.94,26.75,180,24,178.74l-3-11.81L16,165.63l-1.86-3.75-8.5-1.6h0l6.54-15L10,140.86l6.31-4.57-1.8-3.57L12,132.28,10.48,128l1-4.15Z"/>',
        banner: 'jh.jpg'
    },
    {
        key: 'Karnataka',
        value: 'KA',
        path: '<path d="M76.6,164.4,75,163.23l2-.43-.16-2.26,4.08-2,1.27-1.84,1.25,2.54,2.33.11,4-2,1.36-4-2.48-.45,1.64-2.26,1.06,2.27,1,0-1.09-2.77,4.33-8-1.88-.93-2.55,1.23-1.21-1,3.67-3.3,3,1.34L96.51,136l1.5-2.36-.55-2.45L93,129.68l-.07-1.33-3.76-.64-1.07,1.36.82-1.34L87.5,125.8l.14-3.1,1-.65,1,1.48.41-1.69-1.46-.36-.21-3L86,118.13l.2-2.5-1.72,1.52-.87-1.08,1.81-.49-.52-2.36L87,115.66l.84-3,2-.21-.17,1,1.51.63.75-2.92,3.82-1.5.28-3.21,1.14,2,3-.38,1.25,4.66,3.45-1.36.36-1.78,2.63.13-1.65-1.9,2-2.15.11-2.31,8.68-3.19,3.81,0-.66-4.94L123,94.08l.18-1.58-2.23-1.16.63-.89,5.09,0,.09.92L130,90l2.8,4.32h2.69l-.36,1.81,1.81.1,3.7-1.95.32-4.63,3.14.13,2.74-1.37,2,.74,2-1.26,1.36,2.44,4.31-1.19.3-2.54,1.87.27.06,1.93,1.9,1.07,1.64-.53L162.16,85l-1.58,0,1.92-1.52v-1.8l-2.79-4.38,1.89-2.19L161.47,72l-3-2.41.39-2.25-1.56-.43L157,65l2.07-.51,1.09-4.94,2.32,1.13.75,2.61,2.54-.53,3.61,3,1.24-3,2.06,2.14,1.4-1.82.35,3.67,2.08,1.7,6.83-1.74,1.33,1.4L187,66l2.32,1.47L190,70l-.19-3,4-1.49,1.74,2.55,3.75-1.12.48,2.26,1.63-.07,1.46-3.31-2.55-.33.62-3.42-2.19.12-.16-2.1L201,58.65l-1.75,0,1.26-1.6-1.45-1.18-.46-3,4.65-.54L204,50l3.35-.94-.16-3,2.06-.1V43.34l2.75-.06v3.34l2.29-3.82L217,47.45l1.52.45.42-2.66,1.63-.63L219.88,42l2.6-.3,1.41-2.27-2.81-1.77.18-2.37L224.7,37,231,34.32l.07-6.83,2-.37-.43-2,1.18-1.35-2.53-1.1,1.75-4,1.87-.21,2,1.49.49-1.22,1.38,1.82,2.83,0-.74-2.45,3-1.25L245,13.16l2,.17-.59-2L249.16,8l-.26-2.21,4.27-2.61,1.36,1.36,1.53-1V6.22l2.24.7-2.84,4.51,4.29.24,1.6,2.7,2.48-1.07,0-1.64,2.24.89h0l2.94.78-2.14,4.48,1.85,2.82.15,3-3,2.64,2.57,2.52,3,1,.4,1.38-.52,1.33-1.12-.66-.4,3.17L268,34.71l.64,2.19-1.32-.14L266,39.92l-1.31-.5-.84,1.47L263.52,42l3.4,1.06-.22,1-6.18,3.22L260,53.58l2.77.88.64,1.46,1.43-1.86L266,55.43l2.29-.77.11,1.74L273.54,58l-.09,1.89-2-.48.26-1.27L271,59.66l-1.63.36,0,1.48-2.07-.58,0,1.42-3.46.14,1.4,1.33-.41,1.84-1.6,1-2.63-.94-1,4.73,1.13.72-4.1,3.23,1,.64-2.15,2.71,5.68,3.31,2,5.56-2.55,5.65,1,7.47-1.86-.24-.78,3.94,2.4.15-.09,1.93-2.69.89.91,1.45,2-.53-.29,3.59-4,1.09,1.32,2.72-2,.41-.7,1.52-3.86-.42-.25,1-3.15.32,2.74,3.73,3.23,1.34,3.8,1,4.58-.75,5.37,2.2-.07,2.9-1.4-.62-1.73,2-1.8-.3-.75,1,.06,1.45,1.22.06-1.5,3.71.17,2.45,1.25.7-1,4.17,1.07,1.62,0,4.66h0l-14.41-2.11-5.84,1-4.28,2.36L236.84,154l2.3.5L238,159.6l4.52,4.31-.49,1.94-1.92-1.59-2.89,1.09-.15,7.64-3-.37-.09.88,3.16,3.18,1.89,6.47,2.66-.31L242,185l1.8.24.9,1.52-2.39,2.15,2.06,1.56,0,2.56-1.42.36,1.22,1.26L240,201.48l-2.1-.31.33-1.35-2.56,0-1,1.09-5.82-1-4.41-3.54-1.25,1.11.57,3.11-1.15,2.67,3.54,1.07,2-.74-.87,9.1L223.44,214l1,2.54-2.09,7.53,2.18,4.23,1.55.26,2.36,3.1,5.7-.55L232.49,233l-.13,2.59-1.57-.8-1.66,1.32-.22,2.49,3.93,3-1.4,1.24.72,1.82,6.18,0,1.42,1.72,1.65-.23.38-4.21,2.22-2.85,4.42,1.51,2.72-1.14-.09,3.13,4.41.38-.22,2.23,1.57,2.17,1.77-1.14-2.25-4.73.59-1.68,3.13.86.69,2.13,2.3,0,.23,6.85-6.12-.81-.72,2-1.61.29-.17,1.61,2.5-1.28.31.86L253.64,257l3.17.88-.43,2.17,3,0-1.27,1.85,1.09,1.52-2,1.67-.08-1-2.33.06.3-4.86-2.23-2.41-9.19,1.89-1.45-2.87-5.39-.63-.85-2.54.64-4.23-4.33-.94-.26,1.33-2.52.39-.43,1.58,2.4.22,2.65,3.51L231.79,257l5.79,5.5.3,1.6-1.32.23-2.71,4.47,1.34,4.07,1,.55.83-2.19,1.87,1.85,1.94-1.25,3.95.35-.24-3.74-2.12-1.62,2.14-.43-.37-2.43,1.17-1,.1,3.26,1.44-1.21.37,1.12,1.23-1.9.92,3.14,3.13-1,.72,1.79,2.18-1.13,3.6.6-.88,2,2.7.12-.42,6.87,1.83-.22.25-1.54,1.38,1.2.4-3.3,2,1.56,2.19-1.54,1.42.92.85-.45-1.45-1.14,2.14-1.16,1.17-.09-.36,1.43,1.76-.52.73,1.62.22-3.26,3.63-1.27-.13-1.3,2.86-1.4-1.18-2.72.66-1.49,3.8.21,1.36,1.92,3-3,.65,3.24-2,.75.11,3.41H289l1.07-2.35,2.91.5.19-1.92,4,2.59.26,3.62-1.84,2.46,1.35,1.32-.22,1.46-2.28-.22-.32,1.2,1.24,1.8,4.15-.76.26,1.43,1.85.41-.59,3.38,2.46-1.74,9,.51-2,12.61,2.34,1.28-1.68.7,1.34.92,1.83-.87.64,1.17,2-.53,2.72,2.95,1.92-2.48,1.21,2.12-.49,3.26-1.53,1,1.56,1.73-3.34,2.08,1.06,1.26-1.44.89.15,1.63-2.94,1.2.35,3.85-1.95-.3.73,3.83-3.18.31L310,318.86l-2.34,4.57-3.43,0-1.13,5.35h0l-5.53-1-4.1-4.07-1.76-.2-.74,2.84H289.9l-2-3-1.15,2-.86-.47,1.39-1.92-.92-1.26L279,324.17l.81,2.65-3.77,6.93-1.53-.55-1.41,1.39-1.33-1.42-3.54.94.42,2.06-1.54,3.55.47,2.86,1.54.41-1.72,1.77,2.76-.5-.28,3.88-.9,3.07-3.38,3.94-4,1.23-.25,3.36,14.42,2,2.33,3.47-4.38,5.38-1.6,4-9.74.33-.42,3.16-1.33-.7.19,2.78-2,5-3.3-1.58-1.85,1.12-2.28-2.21-2.39-.23-.81,1-6.88,1.16.36,2.83-2.08-.69-.84-2.93-1.89.7.52-1.08-1.51-1.07-1.75.11-.73,2-3.32-1-3.93,7.81,1.23,2.38-.75,1.53-1.15-1.27-3.89-.75-10.3,0-1.08-3.39-2-1.54-2.92,2.41-1.54-.24h0l-1.5-2.34,1.24-.9-.62-2-4,1.27-3.48-4.09-3,.19-1.91-3.57-4.2.7v-6.71L180,375.41l-6.51-1L170.56,372l-1.37-4.89-4.57.51-.86-2.15-2.16.52-1.52-2.88-3.22-.47-5.2-7.62h-3.52l.12-4.53-3.08-2.26,0-2.51,3.09-.48-.44-2.06-4.08,2.29-.33-1.93-3-1.57-.24-2.59,2.82-1.18-2.83-1.49-3,2.76-1.19-3.52-2.34.45-.89-.91.42-2.43-3.57-1.2-.17,1.76-1.95.36.1-3.08-2.35.31.28-.77L124.1,330l1.32-1.73-.9-1.69-6.93,2h0L115,323.12l-7-27.95L106.73,279l-3.54-13.17-2-4.53-2.14-1L97.37,257l-1.69-9.12-1.62-2.28-4.87-15.85,2.18-1.61-1.58-1.27-.48,1.8-2.57.08-.82-4.59-1.39-1.44.85-.76-1-4.25-1.76-1.87L81,217.52l-6-4.59,1.55-.35.41-2.35-1,0L75,207.41h0L77.33,206l2,.66-.18-2.4L81.33,206l3.23-2.58L84.09,202l2.25-2.8L85,196l.62-2.69L87.42,191l-.84-2.23-2.72-2,4.66-2-.74-4.24-2.53-1.22v-3.11l-1.45-2.65,1.71-2.08-1.83-2.27.79-2.5-.73-2.55-1.31-.7-1,1-1.28-1.82-.92,1.65-2.61.1Z"/>',
        banner: 'ka.jpg'
    },
    {
        key: 'Kerala',
        value: 'KL',
        path: '<path d="M92.6,9.83l10.6-3.11,1.38,2.59-2,2.64,2.32.6-.43,1.17,3.61-.47L107.9,18l3-.55.25-2.7,5.46,1.85-.65,3.7,1.37,1.41,3.58-.7,1.81,5.38,4.55-4.22,4.33,2.28-4.31,1.81.36,4,4.55,2.4.5,3,6.24-3.5.67,3.16-4.72.72-.09,3.84,4.72,3.47-.19,6.91,5.38,0,8,11.65,4.92.72,2.31,4.41,3.32-.79,1.3,3.29,7-.78,2.09,7.47L178,79.86l10,1.5,9.6-4.07V87.55L204,86.47,207,91.94l4.52-.29,5.33,6.26L223,96l.95,3.11L222,100.45l2.29,3.58h0l.12,3.1-3.79.08-2.53,3.41-4.42,1.58-2.28-2.45-3.82,2.44,1.21,9L212,119.9l3.62,2.56,1.09-1.2,6.49,2.15,3.21,4.48,5.17,3,2.43-.43.17,5.08-7.93,5.31.53,4.31,2.95-1.94,11.46,1.47,6.25-3.92,2.42,1.93-2.91,5.52,4,2-.14,6.33,4.69.43-7.27.94-4.86,9.18,14.25,5.34,1.94,4.64,4.05.66.78,2.49-3.56,8.17,1.45,3.92-5.72.27,2.09,3.53-1.89,14.55,2.7,4.72-1.66,5.5,1.59,1.51,2.18-1.07-.17,2,3.66,3.61,5.52,1.38,5.74-3.38,1.12-3.18,9.4-5.2,5,.51-.64,2.95,3,4.45-.34,2.83,2.87,1.14-1.75,7.53L289,238.17l5.1,6.17.92,5.71-2.05.9-3,6.56L292,259l-1.25,2.95,2.12,2.22-2,.73-.14,5-1.55.53-3.21,9.34,3.72.15,5,3.35,4.18-2.4,1.73,2.55,1.36-2.72.82,5.86,3.87,2.54-1.5,3.9-3.75,1.68-1.94,8.79-2.3,0-1.46,3.11v7l-2.56,2.53,1.28,3.08-4.73,4.64-1.16,4.42-4.22,2.11,4.06,5.51,0,2.66,2-.14,3.24,5-2.4,7.11L288,353.86l-1.8-.22,9.3,17-1.5,3.06-5.16.68,1.94,4.73-6.32,5,2.11,5.62-3.2-.89L281.24,391h0L271,383.6l-29-38.35-7.24-5.63-2.33-9.88-15.3-33.85L208.54,249l1.35-.36,3.59,6.8L219,261.3v10.34l2.49,1.73-2.79,13.19,2.2,1.61V286.5l10-.45-7.26-3,1.19-3.86-.75-3.33-1.57.25.94-4.21-2.64-.57-.44-13.77-3.15-4.67-1.39.45,1,2.59-1.41-.41-5.85-12,1.27-4.23-5-5.78,3.2,14.18-1.64.33-10.56-34.47-16-35.21L176.41,159,166.1,130.29l-4.49-8.14-5.53-2.48-6.35-17.57-11.6-13.43-4.21-1.84-7.57-12.57-3-1.57-2.47,1.61-1.67-7.71L101.6,31.85l-9-22Z"/>',
        banner: 'kl.jpg'
    },
    {
        key: 'Madhya Pradesh',
        value: 'MP',
        path: '<path d="M191.17,62.16l2.26.75.93-2.12,3.06-.51,1.69,2.43,1.6-.36L201.8,64l5.08,2,4.11-.57,2.49-1.53.33,1,.8-.65,1.12,1.38,2-.05,2.36,3,1.72-.43,2,.82-.45,1.67,2.44-1.07.55,3.63L225.13,75l.52-.4.29,1.53,1,0,1.78,2.37-.55,2.32,3.45.55-.42,1.35-1.34,0-.44,2.7,2.51.87-.8.48.49.93-1.45.2-.45,1.94-.72-.75-1.33,1,.88,1.67-1.62-.06-.24,1.8-1.66.09,1,2-2.56.78,2.67,2.8-2.59,2.19-.66,4.27-2.34,1.65.28,2.21-1.59.48.67,3-2.23-1.51-.55.58,1,.14-.08.78-3.25,2.45,2.85,3.63-.27,2.43-5.65,1.48-1.26,1.39-1.76-1.14-1.21,1.2-4.19-.87L202,125l-1.14-.58-.91,1.51.53,2.69L198.57,130l-1.32-.32-.76,2.62L195,133.56l1.58,1.85-1,1.25,1.63.63.42,2.52,1.91,1.37-.55,1.1,2.69,1.26-1.24.76,1.09,1.19-2.1-.08-3,2v4.32l-7.16,5.7-.07,1.19,2,2.13.5,3.18,2.12,3.87-.42,5.26-1.73,1.7,2.2,2.25-.12,1.39,4.15,3-1.54,2.7,2.37,2.6,2.43-1.06,3.11-4.64,3.23,1.78,4,5.39,1.31.51,1.47-.93.6.7.64-.93,1.38,3.77,1-1.45,2.88-.61,1.27-3.76,2.61-2.53.77-4.22L222,177.48l.23-1.64.75.79,1.57-.6-3.74-6.89-4.62,2.25-1.21-.57-.42-2.66L216,166l-.34-4.39.7-1-.71-2.24-4.24-2-.65-2-1.39-1,.88-4.68-2-1.76L207,139.2l-3.17-1.71L202,138.62l-1.18-.88.58-.75,1.17.54,1.11-1.5.36,1,1.09-.12.72-1-.72-1.77,2.26.54-.67-2.13,1.2.18.67-1.21,1.11.51,1.06-1.82,1.46-.19.69.92-1.42,1.22-.56-.79.06,1.56,2.25.45.21,1.25,2.24-.26-.94-2.64,3.08-.86-2.55-.17-1.34-1.43.31-1.82,1.09,1.2,3.24.5.7.55-1.41.4.9.67,1-1.69L218.46,127l2.1-.69-.07-1.59,1.59-.12.28.88.62-.9.49,1.39-1.13.51.85,2-1.43,1.61,1.15.9,1.36-.51.81,3.05-2.2,1.18-1.59-1.15,1.7-.08.81-1.12-3.29.61-1.64,1.72.26,1-2.28.85-.38.84,1.25-.11-.26,1.4,1.59,2,1.53-5.6,2.26.62,1.11-.88.76,3.14-1.3,1.09-1.41-.57-.75,1.41-.69-.5-.18,4.35,3.37-2.63,2.1,1.18,0-1.84-1-.54,1.49-1.55.32,1.39,2,1.09-1.4,1.9L227,144.8l.94.24,1.82-2.64,1.59,1.38-.55,1,.94,1.6,2.21-.34-.55-1.19.8-.43.95,1.81,1.41-.13.22-1.18-1.3-.37,1-.61,1,.38,0,1.51,1.91-.55.5-.9-1.58-2.2-.23-2.46,2.6,2.29.64-.65-.79-.76.48-2.08-1.32.53-1-1.38-1.25.92,0-1.89,1.52-1.45,2.26.35-.67,1.89,1,1.39.64-1.4,2.11,1.7,1.86-1.2,1.45.66-1.37,0-1.42,2.16.69.6-1.46.19L243,143.48l.68,2.75.7-1.24.71,1.53,1.64-1.3-.34,1.84,1.29.66,3.34-4.59L252,144.6l.58-.37-.22,1.13,6.52-.6,4.87,2.2-.37-1.69,1.08-.82-1.1-4.36,2.44-.81.49,1.14,1.28-1.87,2.39.16,1.06-3.61,2.76-.62,1.76.85,2.85-2.2.27-1.58,2.26.55.47-1.16,2.42,2-.29,4.78,3.26,2.49.93-.26,1.09,3.34-3.2,1.41-3.72,5.56,2.19,1.31,1.86-1.11,1,.79-.72-2.33,3.3-1.17,1.31,1.81,1.05,0,.26-2.15-1.05-.61,1.47.06,1.49,1.61.84-1.15,2,.93-.54-4,1.67,1.55-1.37.91,2.43,1.46,1-.36-.25,1.34,2.36-.86,2.15.49v-1.09l-2.23-.66v-1.21l-1.14-.69,4.41-.45,1.25,1.75.37-4,1.85-.15,1.18,1.72-1.76,1.77.25,2.55-1.94,1.54.95,2L305,153.1l.54,1.32,1.44.48,2.2-.7h0l.68.45-.12-.82h0l1.74-.77.81,2.27L315,155l-.32-1.06,2.95.1L320.1,157l1.28-3.21,1.65,1.15-.64.26,1.24-.25-.48-3,2.65-3.52-.71-1.8,1-3,1.64.08.37,2.41-.08-2.29.75-.43,2.7,2.39,1.72-.51.36,1.12-1.65.13,3.65,1.59,1.06-1.54-1.54-1.47,1-.74,1.29.42-.67-2.1,2.51-.42.68,1.33,1.64.42-1.18,1.12.4,1.76.68-1.09.67.94-1.68,1.14.47.92,2.39-.92,1,1.74,2.22-.24,2.51,1.87,1.77-.45,2.5,1.29.55-.82.6,3.81-.69,1.86,2.77,3,2-1,4.74,2.83h2.08l1.61-1.56-.75,1,1.35,1.12-.89,0-.73,2.06,1.81.53-.63-1.13,1,0-.09-.74.77.61.24-1-.61,5.13,1,.17.46-1,1.45.79-.11,2.72,1.58-.49,3.51,1.26-.34-4.16,1.36-1.08.73,1.37,3.07,0,.47,1.27,5.68-2.34,1.68,1.2,0,1.51,3-.06-.11,2.21h1.6l.19,2.27-2.41.54-1.48-.71.14,2.07.92.65-1.3,5.53,2.36.58.16,3.88-.63,2.71-1,.62-.29,4-2.19-.94-.59,1.14,2.25,2.6,2.55.14-1.07,2.71,2.44.78.46,2h0l-2.63,2-4,.69-.2,2.46-2.91,1.62-2.59-.06.76,1.44-1.25.47-2.48-1.3-5.81.37-3.22-.87-1.29.71-1.18-1.2.2-1-1.83,1.59-5.16,0-2-2-2.21.49-1.51-1-2.8,2.34-3.1.6L346,207.6l.17-.89-2.71-3.2-2.25.89-.54,2.56,1.42,1.1.4,2.86,1.52.82.58,1.56-1.94,2.93-1.32,0-.47,2.91-1.45.55.32,1.61,1.27.22,0,2.08.94.79,1.16-2,1.7.39,1.89-2.11,3,1,1,1.65,3.94-1,2.63,5.69,1.76-.5-.06,1.7,1.38.48,2.32-1,.55,2,1.19-.29,2.12,1.74.16,2-2.08,2.71L365,241l-1.55,1.81-2.15-.62-1.9,1.75-3.79.11-.87,1.76,1,4-3.54,2L352,253l-3.84.83-.37,1.86,1,3.22-1.66,1.91.71,3-1,.74-.77-1.34-.71,1.26-2.22.84-.35,3-1.11.22-.34,1.2-4.27-.05-1.73,2.22-1.84,0,.44,1.26-1-.56-1.23,1.8-.79-3-2.46-.9-.84,2-1.25-.84-2.52,2.27L322.2,272l-3.09,2.33.17,6.95L318,283.56l-2.88.83L315,289l-2,.86,1.45.84-.2,1.68-1.58.15-.57-2.59-1.75-.29-2.87,7.48-1.2.2.8,1-.22,6.18-.9,2.71-3-.5-1.08,2.18-.41,5.9.93,5.41-3.25,6.66h0l-2.8.28-4.75-3.43-1.64-.22-.35,1.42-1.63-.21-.63-1.45,1-1.45-1.8-3.9-4.87-4.68-3.17-.66-3.24,1.28L273,316.28l-3.09.94-2.52-1-.91,1.52-2.59-.3L258.35,314l-3.76,2.14-4.89.61-2.12-6.13-3.21-.81-.93.79-2-.2-5.31-2.13-.39,3.45-3.18-.46-2.63,2.9-3.47-.11-.66-.82-3.59,1.25.65,1.51-1,.26,1.59,1.94-.38,1.24-1.6-.62-.7.73-4.2-.19-.55,1-1.13-1.26-1.18,1.38-5.95-1-.81-1.36-2.56-.6-3.46,1.26-.33-4.72-1.9-.79-.82,1.9-1.06-.58-1.45.91-1.67-1.08.14,1.11-3.9.57-.51,2.84-10.17,5.25-2.51.44L173.07,323l-.26,1-1.92.24-.71,1-1.26.26-.63-1.79-1,1.21-.72-1h-2.18l.15,1.25-.9.12-4.3-.63-.78-3.73-1.37-.75-.94-2.83,1.79-1.11,4.83,1.26,1.77-.61L163,315.9v-3l-1.29-3.49-2.94-3.32-8.35.41-.13,1.82-2.59.3L147,309.7l-1.59-1.57-.6.66-3.77-.45-7.55,5.76-2.16-.67-.83,1-1.68-.21-.33,2.7-1.1.83,1.27,1.54-.33,1.1-7,6.19,1.62,2.48-1.67,4.23-6-.16L113.67,337l-3.37,1.77-4.18.09-.86-.91-4,.47-2.59-3.76,2.34-.28.25-.83-1.25-2.34.66-1-2.67-5.41-2,1-3.69-1.94-3.56-.27-9.47.91-2.85-.69-2.68,1.06-3.51-1-3.09.53-1.64-1-2.62.66-.1-1.24-3.52.22-4.62-2.29-2.53-5-6.87-3.08-4.89.93-10.25-3.37-.28-1.72L28,308.16l-.33-3.8,1-4.8-1.5-2.16-2-.79L25.15,294l-2.55.3-1.49,1.94-2.31.55-.55,1.5-3.93.48-2.41-1.34h0l.35-1.53-2.48-1.38,3.66-3.36-1.15-.9-1.07.37-.33-5.45-2.08-.43.7-1-1.43-2,.57-3.54,1.76-.54,1,1.87,2.51.49.69-2.17.9.43,1.36-2,1.6.26-1.77-1.83-2.18-.19-.61-1.94-.18,1.6-1.13.57-.75-1.16-.93,1.7L10,273.08l-1.11.1.31-2L7.36,272,7,271.15l1.42-2,3.81,1.59,4.95-6.05,5.24.06.83-4.14,3.35-6.09-1.21-3.11-2.26,1.17L21.44,251l-.9-1.51,1.29-.73-2.12-3.94h0l3-2.35,5.34,1.11,1.47-2.07,2.75-.6,2.7-2.71,2,.33,1.33-.83v-1l-2.24.46,1.2-.93-.93-1.41-2.42.59-3.28-2-.82.88-1.55-2.21,2.32-2.34.14-2.14,1.74-1.86,1.82-.15,2-1.88,1.45.16,2.27-2.28.79.67,1.87-1L45.44,218l1.48-.36-1.41-2.51L47,212.66,45.42,206l.69-3,3.16-4.51-4.93-8.83,1.09-1-.51-1.35-1.09-.91-5.15-.1L40,184.71l.15-2.64,3.13-4.61-1.75.26-.07-1.41-1.67.37-2.95-1.32,2-2.11-.38-2,1.85-.67L40,169.29l1.48-1.69-1.84-.77,1.06-5.22,4.13,6.78,2.2-.25.85-1.95,1.67-.37-.29-2.13h1.19l-.58-2.1-4,.43-2.58-1.25-.42,1,.31-2.93-1.43-3.64,1-2.22.93,1.81.77-.62,1.24,1,.32,1.76,5.44,1.58.57-1.1,2.76-.34-.14-3.69,2.14-1.28-.23-2.6,8.23.13.26.85-1.44.9.82,2.11-1,3-1.68-3.69-.42.71,1.18,1.88-1.39,1.62,2.19,1,.65-.84,4.34-.28L68,158.31l-4.91,2.45-1.18-1.94-2.28-.28,1-1.76-1.17.27-.67-1-.31,1.24,2.24,2.28-2,1.31-.92,2,1.38,2.2,2.22-.5,8.15,1.91,5.73-1.42,1.39,1.65,6.45-3.68,3.49,1.68-.51,2.82,1,.89-.92,1.92.46.85,1.1-.83,2.38,2-.47.93.81.9-1.5,1.15.91.83L89.68,178,87,179.79l-2.48-2.71-1.87,2.25.29.92-1.25.2.48,2.76,1.2,1.79,2,.35.69,2.75-2.36,1.22-1.32,3.91,1.45,0,.58,1.4,2-.07-.09,1.72L84,197,83.2,200l-2.72,1.38-1.38-3.09L77.58,200l-2.24.38-.75-1.48-2.32-1.25-2.18,3.27-.37,2.87,4.59,2.92.69.89-.89.74,1.17,1.23,3-.08,1.45,2,.13-2.81h1.34l.5-1.87-1.37-.91.18-1.29,2.1.67,1.2,1.73.76-1,2.93-1,.79.53,4.29-2.32-.69-4.44,3.83-2.41,3.87-.95-.59-4.86,1.46-2.28-.51-2,1.88-2.22.91,1-.51,1.26.92,3.27,3,0,1.94-1.82L112,190l.4-.94,1.31.49.74-.7,2.71,3.27,2.13-.83-.62-1,1.4-1.4-.41-.95,1.14.36.1-1,3.38-1.07.42,1.74-1.25,2.66,1.19,1.06,2.38,0,2,2.49,2.42-.9,1.94.38.72-2.77,1.25-.84-3.1-3.12-1.5-3.26.49-6.28-1.62-3.14,2.28-.73.59,1.16,1.46-.88.08,2.7,2.24,1.29,1.59-.82,1.35-2.45.81.11.63-2.1-.23-3.5-1.45-3.3-2.41-1-.89-1.63-1.87.9-2.74-.17-2-3.36,1.33-1,4.19-.47,1-1.11-1.54-.73.31-1.39-1.31-.14-1.63-4.39,6.15-3.37,3.69,1.06,1.64-.54,2.43-2.16,4.09-.27,1.79,1.72,4.22-1.43-.35-3.63,1.21-.23-.52-1.61-2.5-2.21,1-2.35-1.56-.26,1.1-4.24-2.48-1.14-1,.62-2.77,2.44-.66,3-5.72-1.38-2.27,1.88-2.88.19-.75,1.06-2.14-2.29-2.22-.39-3.21.89-.15-1.17-3.78-.45-3.47-2.11-.59-2.06-1.09-.53L116.65,126l-.42-7L114.77,118l.2-1.12,2.13-.78,0-3.11,2.79-3.72,1.5.16.86-1.85,3.85.31,1.28-.95-.29-1,2.22-.55,1.5-2.85-.43-.89,2.53-3.11,4.33-1.91,2.15-2.42,2.51-.44,1.43-2.31,3.49,0,3.83-2.84,2-3,4.31-.38-.21-2.06,4.2-.39,6.39-4.58,2,.21,1.34-2,3-.46.33-2.21,2.6-1,.67-2.06,2.35-.13,2-1.85,4.12,1,.15-2.7,1.19-.81-.72-2.09,3.37.27L189,62.61Z"/>',
        banner: 'mp.jpg'
    },
    {
        key: 'Maharashtra',
        value: 'MH',
        path: '<path d="M77.22,45.75l2.57,1.43L84,46.67l.58-1.6L87,44.48l1.58-2.07,2.71-.32.12,2.79,2.1.84,1.6,2.3L94,53.13l.36,4,1.93.42.31,1.82L107.51,63l5.2-1L120,65.3l2.7,5.29L127.65,73l3.74-.24.11,1.33,2.79-.7,1.74,1,3.29-.56L143.06,75l2.85-1.13,3,.73,10.08-1,3.79.28L166.74,76l2.17-1.07,2.84,5.76-.69,1,1.33,2.49-.28.88-2.48.31,2.75,4,4.21-.5.92,1,4.44-.1,3.58-1.88,1.63-4.07,6.39.17,1.77-4.49-1.71-2.64,7.49-6.59.36-1.17-1.35-1.65,1.17-.88.35-2.88,1.79.23.88-1.1,2.3.71,8-6.13,4,.47.64-.69L221,58.82l.81-1.2,2.75-.32.14-1.94,8.89-.44,3.13,3.54,1.37,3.72,0,3.23,1.7,1-1.89.65-5.14-1.34-1.9,1.17,1,3,1.46.81.83,4,4.57.66,1-.12-.16-1.34h2.32l.77,1.1,1.12-1.28.66,1.9,1.35-.28.75-1,2-.25.28-1.08,3.88,1.73,2.67-.46,10.83-5.6.54-3,4.15-.6-.15-1.19L272.48,65,274,64l1.14.61.87-2,2,.84.35,5,3.69-1.34,2.72.64.86,1.44L292,70.33l1.26-1.47,1.21,1.34.58-1.1,4.47.21.75-.78,1.69.66.41-1.32-1.7-2.07,1.1-.27-.68-1.61,3.81-1.33.71.87,3.69.12,2.8-3.09,3.39.49.41-3.67,5.65,2.27,2.15.21,1-.85,3.42.88,2.26,6.52,5.2-.65,4-2.28L345.39,67l2.76.33,1-1.62,2.68,1.11,3.29-1,2.41-2.64,3.44-1.36,3.38.7,5.19,5,1.91,4.15-1,1.54.67,1.55,1.74.22.37-1.51,1.75.23,5,3.65,3-.3h0l.77,1.63-1.77,2.41L373.58,85l-1.12,3.78.66,3L372,93.13,373.5,97l4.05-.09.18,8.42,1.62,4.08-3.41,1.45-1.22,1.87,1.43,1.59,2.6-1.36,2.58.43-1.7,10.38,1.49,3.08-3.56,1.34L376.1,130l-6,1.39,1.46,2.56-1.32,1.36.37.94,4.9.25,2,1.45.27,2.19,0,3.9-1.18,2.8-1.88.15-1.73-1.23-1.75,1,.06,1.32,3.53.34.69,1.5-3.09,2.9-1.6-.29-.13,1.07,2.71.08,1.2,1-.42-2.59,3.44.26-.13,2.22,5.93,4.09-.42,4,3,.19,2.13,2,2.87.28.84,1.66,1.58.5.61,2.64-4.89,1.93,2.68,3.26-4.5,3.67-2.85.15-.78-2.12-2.9,1-2-4.64-4.33,3.26-1.81,3.66-2.53,1.08.16,2.48-2.9,2.34-.13,3.3-2.55,4.32v2.89l3.8,5.17-3.38,2.92-1.61.25,1.19,2.06h0l-3.09,1L361,209l-1.45-1-2.22,1-4.63-4.47-3.77-.87-1.78-2.29,2.11-1.38-.21-8-.86-1.26-2.66.62-.07-3.43,4-3.28-1.08-2.76,1.95-3.51.53-5.12L349.3,170,344,166.41l-2-2.8-2.12-.47-4.72,1.39-2,3.53-2.14-.81-.46-1.41-3.39,2.53-4.76-3.65-2.57.28-.45-1.22-2.86-1.11-.34,4.25-1.4,1.74.76,1.18-2.12.35L310,166.86l-4-.59-1.2-1.1-1.8.51,1.22-1.65-.54-3.18-2.49-.91-2.68.56-.62-5.06-2.86-1-3.21.6-5.3-2.52-3.63-.21-1.52,1.42-.83-1.15-3.69-1-.63-2.12-2.25-.2-.79-1.6L272,150.92l2.11.51,1.35,2.89-1.06,3.34-2.79,1.19-.76,1.31,1.94,2.93v1.6l-1.51.68,1.4,5-5.95,2.21.7,4-1.27,4.71-4.12-.91-1.46.65-.25-1.44-4.55-3.49L251.65,178l0,.89,2.06.83-1.8.6-1,2.88.56.8-1.29,2.23.81,2.25-2.14-.59-.26,2.5L247,189.9l-.2,1.66.47,2.32,2.34,0-.21,1.62,1.93-.14-.63,2,1.93.14,2.87,4.25-4.94.73-2.4,6.08-1.35-1.13L245.64,209l.17,6-3.71,1.36-.41-1.25-2.42.25.18,3.61-1.15-.47-1.43,1,1.84.88-2.79.89,1.38.47L235.62,225l2.23,1.54-.8,1.31h0l-1.9-.75,0,1.39-2.1.91-1.36-2.3-3.64-.2,2.4-3.83-1.89-.6v-2.31l-1.29.86-1.16-1.16-3.62,2.22.22,1.87-2.33,2.85.51,1.71-1.68-.14-1,3.16-2.56,1,.63,2.08-2.41,0-1.16-1.54-.42,1-1.69-1.27-1.59.18-1.48,3.37,2.14.93-1,1.15.36,1.68-1.74.31-.06,5.8L202,248.64l-2.92-1.45-.15,2,2.38,1.5-1.19,1.93-2.21.25.56,2.2-1.39.54-.36,2.26-1.28-.39-2.29-3.94-1.93,3.24V254l-2.33.05v2.14l-1.76.09.14,2.59-2.84.79-.61,2-3.95.46.4,2.56,1.22,1L180.4,267l1.48,0-2.08,1.21.14,1.78,1.85-.1-.52,2.9,2.16.28-1.24,2.82-1.37.07-.4-1.92-3.18.95-1.48-2.16-3.38,1.26.16,2.53-.6-2.14-2-1.25L168,275l-1.13-1.19-5.8,1.48-1.76-1.45-.3-3.11-1.18,1.54-1.75-1.81L155,273.05l-3.07-2.53-2.15.45-.64-2.22-2-1-.93,4.19-1.75.44.29,1.62,1.33.37-.34,1.9,2.54,2.05.1,2.6-1.6,1.86,2.37,3.71v1.53l-1.63,1.29,1.34,0,.11,3.69-1.39.45-1.61-.91L146,291l-1.58-.23-.26,2.15-3.65,1-1.16-2.07-1.73,1.07-1.7-.63-2.32,1.16-2.67-.11-.27,3.93-3.14,1.66-1.54-.09.31-1.53H124l-2.39-3.67-2.74,1.12-.08-.77-4.32,0-.53.75,1.89,1-.15,1.35-2.45,1.07.56,4.19-3.23,0L103.16,305l-.1,2-1.67,1.82,1.4,1.61-2.24-.11-.3,1.51L97.32,313l-1.06-4-2.51.32-1-1.66-.23,2.73-3.24,1.27-.64,2.47-1.28-.53.14-.89-1.7.18-.72,2.5-1.77-2.07.44,2-1.53.41.73.92,1.47-1.3-.17,2.13,2,.33.17,2.51,1.25.3-.35,1.44-.88-1.26-.82.56L85.53,324l1.21,1.63-.7,1.14.91-1.15,3.19.54.06,1.13L94,328.58l.46,2.08-1.27,2,.15,2.9-2.56-1.14-3.12,2.8,1,.87,2.17-1.05,1.59.79-3.68,6.76.93,2.36-.85,0-.91-1.93L86.54,347l2.1.38-1.15,3.42-3.41,1.67-2-.1L81,350.21,80,351.77l-3.46,1.72.14,1.92-1.74.36,1.38,1h0L71.68,359l-1.38-.32-1.38-1.6-1.12-4.72-3-.38-.8-2.33-1.52,2.89-7.18.65h0l-1.49-1,1.22-.4-3.95-7.69-3.78-1.21-1.25-4.79-1.31-.88.58-.83-1.5-6.2-2.21-7.91-1-.09,1.76-2-1.86.36,0-2.05-2.28-3.6.06-2.08,1.17-.49-1.21-1.69,1.08-1.81-.83-.17L38,300.55l-1.6-4.16.8-4.58-1.09,0,.6-1.25-1.38-.74,2.06-2.5-1.52-1.68-2-7.51-1.61-1.58,1.54-.19.26,1,.77-1.26-1.73-3.76-1.88-1,1.81-1.66-.92-.14-.09-3.12L29.85,264l1.47-1.31L29.37,260l-.61-2.8,1-1.07-2.19-4.51L27,247.24l-.58.3-1.58-2.61.39-2-2.27-3.48.61-1L22,235.7l.78-3.1-2.66-1.24.21-3,1.37.07.79,1.87,4.11,1L26,233l1.52,1.74-.36-3.92L26,228.9l-2.89-.15-2-3.09-1.74-.91.58-1.56L18.49,219l1.55-3.4-3.44-7.63.66-5.32,2.21.61,1.14-1.75,1.4,1.87.57-1,.29-2.78-2.92.74-.87-2.53,2.33-.31-.86-1.88.77-1.35,1.11.56L24.92,193l-1.38-.11-.47-2.84-1.42,0-.34,1.51-2.17,1.8-2.21-.58-.82,3.88-1.74,1.64.74-2.49-1.48-.45,1.07-3.78.56.43.54-1-1-.16.51-2.54-2.19-3.57L13,179.17l1-2.58L12,174.38l-.61-4.3,1.67-1.41.28-1.72-1,1.08-2.19-1.71-.26-2.83,1.18-.1-2.38-9.74L7,151.4l0-.93,1.38-.34-.79-3.36,2.44-2-.41-4.87,1.41-3.29h0l3,.58v-1.17l1.56.19,0-2.05,1.87-2,4.5.67h0l.77,2-.64,2,.76.87,1.32-1.08L23.88,138l2,2.13.37-1.56,3.7.73,2.18,1.56,1.43-3.43h0L37,136l1-2.87,2,.43.69-.74.32,1,2.61-.67-.31-7.26-1.5-1.9,1.8-1.2,3.33-6.28L46,116.4l-.05-2-1.9-.57-1.77-2.37,1.75-1.11.64-2.28,1.36-.33.74,3.18,1.88-1,3.23,1.87,1.39,2.85,1.59.84,1.42-.8,2.22.55,4.23-2.41.33-2.56L62,108.89l1.92,0,1-1.76,1.66.3,1.35-.93-.21-4.89-2.35-5L66,94.44l-4.23-.64-.41-1.33-1.54.61-1.53-2.26.49-2.93-4.35.29L51,85.2l1.17-.41L53.28,87l2.11-1,2.6.69.23-1.44L62,85l.45-4.79,2.81.25,2.66-1.76.2-5.25.75.51,3.75-1.37.87-3.13,2,1.7.94-.78,4.4.23.3-1,1,.84,3.67-1.65,0-2.28-1.08-1.21L83,66.77,81.54,66l-1.4.94-1-1.42H73.64l-9.82,3.19-1.7-5.14-1.74-1.35,4.61-1,.5-2.77-3.06-3.15.65-1.4-1.62-1.64,15.76-6.56Z"/>',
        banner: 'mh.jpg'
    },
    {
        key: 'Manipur',
        value: 'MN',
        path: '<path d="M125.59,86.71l.53,6.38,6.52.73-1.09,6.62,9.5-1.34,10.21,10.21,16.25-33.63h4.83l17.43-21.94-.94-7.05-7.33-.19.93-8.52L205.67,32l14,2.5,8.67-3.11.8-5.24,13.67,7.69,1.17,5.7L253,41.48l4.1-6.66,6.67.59,3.82,11L281.32,44l5.13,3.64,20.46-10.17,1.87-10.58,8.42-6.11,6,1,13-17,4.34,1.35-3.75,9.84,3.67.19-7.56,12.25.32,15.44,14.48,9.94L357.13,55h0l-1.65,9.19-8.16,6.09-8.78,36.16,30.7,16.68-.66,23.42-7.48,9.88,3,7.52-15.57,21-5.16,25.25-11.48,1.17L328.21,229l-12.65,11.91-6.87,17.22-5,1.16.1,13.95-7.39,4.5,3.45,4.24-10.92,8.46.31,9.71-12.51,26.07L273.37,352l-9.45,22.2-4.83.56-1.78,17.15L249.87,394l-5.09-10.59L217.52,371.6l-9-1.43-17.44,5.68-11.31-16.6-26.12-1-3.28,9.31-7.65-4.18-9.29,8.84-8.86-5.57-10.24-22-11.8-3.85-3.8,1.56.65,7.67h0l-9.43.39-6.3,5.79,2.16-7.6-3.55-5.24-4.64.27-1.36,7.1-9-1-4.2-6.91-9,9L50,339.74l-4.94,2.56-14.81-5L39,317.38l-2.7-14.72,6.73-13.15-4.18-.72.54-9.13L34.86,277h0l7.41-1.66-.65-18,7.07-13.42-2.22-2.88,8.8-1.83-6.05-2.65L54.84,220l-5.53-7.34,6-6.62.5-14.24,2.47-2.11,5.79,6.3,8.51-4.51,0-9.49,6.11-4.37,4.63-8.72-2.54-4.21L85,162.05l-2.6-14.18,3.71-6.49,7,.35,6-10.07,10.15-31.59Z"/>',
        banner: 'mn.jpg'
    },
    {
        key: 'Meghalaya',
        value: 'MG',
        path: '<path d="M15.07,204.29l19-8.24L18,177.12l5.28-1.36,2.81-4.27-1.38-7.13,8.23-3.19,1.76-2.68-2.22-1.87,14.71-11.8,8.25,2.4L73.72,143,79,137.82l4.07-.55,4.15,3.59,6.29-3.75,7.38,8.18L98,154.11l9-9.08,6,3.2-2.9,3.6,2.35,1.9,7.92-7.41,7.92-.93-.89,6,4.84,1,4.11-6.26,3.48,2,6-1.93,4.67,5.49-.42-4.27,3.46-.63,3.19,8.63,8-.12-3.67,9.39,6.24-3.8,3.8-.54-3.7,3.39,1.73,1.21,17.2-5.51-2.14,11.8,1.56,6.66,4.12.88,6.68-3.35,7.48-13.11,11-2.27,3.29,2,10.46-4.54.56-2.4-2.83,3.17-4.27-.54,7.31-7.49-3.84.42,9.58-16.05,7.27,1.53.75,8.22-3.46,3.56,7.52,4.94,6.57-7,1.43-15,11.36-8.52,7.3,3-.73,6.51,6.71,7.53,8.9-5.94,8,1.18,10.37-1.87,5.83-4.8,8.12,2.42,7.25-2.37-18.2,19.2.94,4.71,8,.68-5.9,5.26L309.9,166l1,20.09,8.81-6.32,13.51-1.29,6.65-4,6.21,3.16-.14,5.76,4.31,1.22,4.68,8.48,7.22,1.56,1.92,7.34,3.89.43,6.57-4.95-1.13,7.79-10,10,4-.6,1.42,7.84,5.83-2.67.75,3.55,1.77-1,5.73,6,2.44-.89,3,6.54,3.08.39,1,6.72-3.56,5.09,5.13,4.26-17.75,6-5.85,8.43-12.53-3.18,2.37,5.74-7.58-1.2L350,276.33l-4.83.75h0L335,274.2l.08-3.7-14.76-2.66L298.8,254.65,262,257.73l-3.74-1.64-1.15,4.06-4.73-1.07-8.12,5.11-5-3.27,1.52-4.28-18.51,6-7-5.14-10-.31-8.85-4.55-24.71,1-27.83,5.87-10.53-3.95-6,4.19-6-2.45-22.74-.48-8.31,4.34-14.32-7L46.71,249.4,28.12,238.59l-17.68,1,1.69-2.07L8.81,226.9,13.13,214h0l3.21-1.79Z"/>',
        banner: 'mg.jpg'
    },
    {
        key: 'Mizoram',
        value: 'MZ',
        path: '<path d="M122.41,46.48l17.47-.21,2,15.27L148,63.21l.69-3.16,6.35-2.3,2.66-10.38,8.47-1.13,1.76-12,9.24-3.36L187.55,5.63l8.86,21.73,4.72-3.3,5.88.76.88-2.8,3.36,2.65,9-1.18h0l3.31,1.94-.39,6.63,3,.51-4.89,9.55,2,10.68-6.38,14.42,10.74,3.66L231.24,69l3,8.77,6.53-6.52,3.05,5,6.52.75,1-5.15,3.36-.2,2.58,3.8L255.68,81l4.57-4.2,6.84-.28h0l-.41,10.06,8.94,8.57.92,25.49,5.48,12-6.61,37.57,2.36,6.82L271,182.05l4,19.6-2.89,11.12,2.74,1.76-13.34,19.95-6.19-.09-8.17-8.09-8.55,1.92-.52,7,5.45,12.26-4.12.89-3.14,14.54-2.35.88,1.87,9.92L232.94,279l7.32,16.54-4.54,10.05,3.05,1.77,1.17,8.49,6.78,5.37L249.18,346l-8.54,2.17,3.16,6.94-2.14,3.26-10.77-4.77-4.22,1.87,2.63,14.26-7.27,0-.56,17.63-2.95.16-4.48-7-3.35,1.85L207.8,393l-6-17.77-3.21.3L181,362.22l-2.58.64-2.08,19.45-10.39,6.12-.65-12-4.8-10.67,2.39-1.57,3.11,2.74.53-7.71L155.05,301l0-14-2.83-12.05-3.72-2.05-3.75-10.63-1.41-10.87-2,1-1.6-5-6.39-2.21,2.53-18.52L132,219.44l-.66-19.79,6.61-1.28-5-11.56,1-6-7.94-16.76-3.2-22.84-2.61-.72,1.92-9.46-3.72-5.43h0l-1.27-13,3.81-.27-1.67-4.88,2.39-3.38,3.93.85,1.52-7-2.74-7.37,2.45-4.4-2.07-6.82,3.15-17Z"/>',
        banner: 'mz.jpg'
    },
    {
        key: 'Nagaland',
        value: 'NL',
        path: '<path d="M372.12,5.35l7.29,32.27L370,43.13l4.58,3,1.24,11.09,5.65,2.33-5.46,11,4.08,10.37h0L364.37,95.07l0,8.18-16.6,25.2,7.41,6.67-.26,6.06,5.88,2.83L358,175.47l4.05,5.16-4.66,9.54.49,12.47,12.38,6.19-15.06,23.6-13.26,6.95-2.9,5.48-1.14,7.77,7.05,23L323.1,295.24l-3.41,12.14-5.83,3.78,3,5.45L306.34,318l-7,13.68-24.74,7.46h0l-9.39-1.24L250.84,328l-.32-15.31,7.5-12.16-3.64-.18,3.72-9.77-4.3-1.34-12.86,16.92-5.95-1-8.36,6.05-1.85,10.5-20.3,10.09-5.09-3.61-13.66,2.4-3.8-10.93-6.61-.59-4.07,6.61-8.86-1.89-1.16-5.66-13.56-7.63-.8,5.2-8.6,3.09-13.93-2.48-23,5.9-.93,8.45,7.28.18.93,7L91.28,359.64H86.49L70.37,393,60.24,382.87l-9.43,1.33,1.09-6.57-6.47-.72-.53-6.33h0l-4.2-7.3,5-7.46-3.1-11.47-12.54-6.17-12.2-17.31,18.21-17.74,13.75-5.26,14-21.89L88.9,257.54l-3.38-12.77,12.19-5.67,4-6.23,4.82,11.84L103,258l3,6.71,8.84-10.13,7.68,3.5,6.3-8.77L141,242.61l-4.67-18.43,6.89-13.74,2.61-21.18L165.41,157l12.84-3.77,2.09-24.54,17.14-20.77,2.48-1.11.78,17.61,4.31,3.76,6.57-9.65,9.19-5,1.61-17.34,10.37-4.46,1-7.27,14.66-8.7,5.63,4.21,5.6-10.21,4.59,4.38,11.08-3,22-15.56,16-26.79,8-4.17,10.94,7.18L339,30.29l16.86-8.8Z"/>',
        banner: 'nl.jpg'
    },
    {
        key: 'Odisha',
        value: 'OR',
        path: '<path d="M355,160.87l7.74,0,.6,3.75L359,165h0l-5.67,4-1.06-1.45h0l-2.11.45,1.49,1.81-2.88-.43,3.09-7.67,3.1-.91ZM172,41.5l8.45,3.43,1.12,4.8,2.66,2,3.34-.13,2.73,2.49L199,53.3l1.39-2.07,1.9-.32-.06-1.53,3.18-1,13.86.36.57-1.87,3.51-.33L225,48l2.81-1.16,1.1,1.74,3.41-2.27.47.83,6.88-2.71.74,8.91,1.21.51-.32,1.85h1.66l0,1.63-2.8,1.26-3,11-2.8,1.87,1.44.32,2.65-2.1,3.29.77,1.49,2.26,2.35-.28,1,1.52.1-1.36,2.45,1.71,1.28,2.94,4.42-7.31,1.46-1.23,2.24.37.32-2.39,2-.28,9.26,4.93,3.29.83L276.76,71l2.35,2.84,7.69-4.25,1.83,2.32-2.73,0-1.73,6,9.23,1.58.44-2.61,1.94-1,3.69-6.15,1.67-5.22-3.63-4,4.69-4.3L300,56l.76-1.34L299,54l1.81-2.53-.8-3.38L296.48,46l1-3,3.37-1.42,1-3L306.29,44l11,2.7L322,53.54l5.14,3,.32-1.49,3.93-1.21,2.07,2.93,2.94,0,.8,1.58,3.48.92.36,1.93,4.57,1.23h0l-.47,4.92,4.78-.72,2.66,4,8,.8,3.85,2.88,1.07,3.57-2.32,5.59,2.06,2.88,4.11.34-.07-3.25L373.35,82l.58-2.93,4.3,1.3,1.76,9.6,5.72,1.92,1.15,1.76,4.69-.06,0,2.18,1.78,1.49-.78,4.25,1.49,2.47h0l-6.51,4.31-11.43-.2-5.55,2.74L362,117.42l-5.67,6.44-4.45,8.33L352,136l9.36,21.49-.81,2.53-4.85-.87-3.42,1.76-3.46,8.57,3,.38-1.53-1.76,2.05-.45h0l1.05,1.46L359,165h0l4.22,1,2.88-1-16.64,11.77L346,185.73l3.21.9.07,3.1-6.43,5.58-8.07,3.6-9.05,11.73-1.46,4-3-.62-3.3-5-2.72.53-.71,1.77,3.72.18,4.42,4.77L278,230.69l-17.74,9-15.65,10.9-4.82,5.36-9.71,7-5.67,5.78-4,6.86L217.71,274h0l-1.6-1.59.52-2.12-2.36-.37-.25,2.34-4.42-.13,1.78,3.17,2.2-.3,0,1.93-2.67-.17-1.59,2.8L208,276l-4.89,3-1.13,2.67-3.61-2.2L200,282.6l-1.59,1.94.88,1.63-2,1.85-2.07-.68,1.42,1.24-2.31-.37,1.29,1.08-.59,1.08-1.68-1.05-.24,5-11.54,1.09-1.81,1.84-2.63.24-3.49-3.85L168,294l-4.44-1.46-5.3-12.73-3,2,2.58,4.73-2.18-.69-2.56-4.5,1.11-1.79-1.67-.31-4.7-9.2L146,272.3l.64,2.16L145,277l-2.07-1.61-1,4.59-2.29-.38-.12-1.05,1.29.13-.53-2.68-.75.78-1.3-1.65-.89.54,1.19,3.25-.21,1.41-1.67,0,.45,3.62-3-3.39-4-.92-2.62,1.36L129,286l1.07-2.7,2.2,2.27-2.14-.24,4.13,4.52-1,1.92-2.39-.08-.16,2.14-4.9.7-.85,2.18-3-.59-.91,3.35-.21-1.77-4.39-2-5.23,7.92-2.51,1-.23,3.39,2.93.13-1.73,1.24.36,1.34,3.63.67L109,317.58l1.41,1.7,1.33-.67-.31,3.59-2.32-.61-5.39,2.21-2.6-1-.46-3.06-2.53.2-2.92-2-1.47,1.31,1.09,1.66-1.67,4.26-6.91,3-2,3.86-2.94-2.76L81,326.78l2.22-2.65-.69-1.48-4.17-1.4L79.58,318l-1.51.22-.45-4.65-1.53.14-1.6-2.35-7.19,8.49,1.47,2.73-3.19,3.47,3.74.71L68,329l-2.23.53-.26,3.37-1.7,1.34,3.77,3.74-.49,1-1.54-1.16-.23,6.81-1.55.17-.49-1.61-2,.92v4.12l-1.63.45-4.1-2.06-1.09-2.2-8.65-1-4.65,4.39-9.62,3.73-2.73,2.85h0l-3.51,2.15-1-1.58-1.61.53-3.31,4.1-2.7-.83-5.59,1.66-1.39-1.45L5,360.14H5l.57-5.23,2.77.61,2.55-6.27-.21-3.9,2.21-4.26.89-4.33L12.65,335l1.48-5,4.17-2.82,4.16-.66,0-1.88L28,324.2l1.09-4.4,6.12-6.8,2.48-1,.75-2.4,2.45.34.48-1.84-4.22-2.29-.19-2,4,1.44,1.29-4.13,4.21-1.89,2.87.45.18-2.93,3-.12,2-2.23.75-7,4.26-1-.93-7-2-3.07,1.15-2L57,272.5l-2.55-.6,1.21-2.18-1.73-7.16,2-3.64-2.7-2.84,1.63-.27,1.06-3.48-4.06-.42-1.74-5.78-4.44.54,1.51-2.48-.54-11.13,1.42-5.33L43,226.88l-1.26-4-7.06-3.6-.79-2.83,1.86-5.81,4.78-4.47,5.3,6.23,2.13-2.69,7.7,4.85L59,213.23l6.94,11.34,3.15-3.49,3.41-1.44,9.65,2.6-1.42,2.84.88,3.47,3.87-3.67,3.63-.38,1-2.68L89,220.3l.44-6.54-4.83-.66-2.13,1-13.24-5-.76-5.75,2.21-3.89-.54-4.14L71.64,194l-2.26-3.55,2.26-6.11-1.22-3.22L69,182.51l-.48-3.88-3.6-3,2.82-4.76-2.12-9.12.74-8.5,3.49,1.45.9,2.44,2.78.18,1.7-5.4,4.29-2.58L84,142.9l-.82-2.35,2.27-2.09-.58-3.23,7.42-.71,2.34,1.4,1.51-1.32,4.26.65,4.89-1.8,5.4,3.85,5.06,1.21,4.48-2.34,1.8-8.48,3.59-1.73-1.31-1.82,1-4.27,6.68,2.39,1.78-.58-.57-3.47-2.77-3-1-3.51,2.94-8,3.86-2.49.74,3,2-1.39-4.14-3.37,4.11-4.55-1.08-2.81,1.52-2.17,2.91,1.41L142,88.7l3.4-.8L144.52,86l1.85-2.66-3-1.46L142.2,79.7l.2-6.29,3.95-.69-2.62-2.62,5.53-8.28,3-1.43,3.82.18,6.9-6.92L172.13,52l2.38-6.61-4.18-2.62.26-1.36,1.4.08Z"/>',
        banner: 'or.jpg'
    },
    {
        key: 'Punjab',
        value: 'PB',
        path: '<path d="M253.11-.45l-2.45,9.17,9.23,12.22-10,5L237.62,40.1l-13,5.24L224.41,52l4.73,2.74-9.45,11.1,2.25,2.09,5.78-1.49,4.6,2.09,10.75,9,12.54,5.94,8.75,18-5.64-.36,9.2,22.71,17.15,30.88L283,161.6l3.55,2.7.74,4.59,14-1.65v-3.05l4.63-1.43-2.37-6.54,4.93-1.76.45-3.41,1.83,6.65L318.6,169l-2,3.07,4.05-3.62,2.48,4.87,2.93-1.28.43,2.75,2.17-2.87-.25,3.79,4-3.28,3.54,3.87-2.39,4.57,5.16-1.42,1.08,1.87-5.13,4-.12,7.29,4.14,2.31-3,7.49,1.26,6.52,11.66,5.38,6.52,7.53h0l-.1,3.94,6.68,5.8,2.17,5.27-2.12,3.78h0l-4-.35.35-2.54-3.06,1.15L354,236l-7.81,5.14,4.05,8.44,7.74,3.5,2.9-2.17h0l1.71,4,3.12-3.09-.42,5.09,6.24,5.38-3.23,7.8,4,2.94-3.57,4.39v5.71l4.38,6.89-5.36,3.8v-3.49L362.3,284l-2.73,2.89-5.76-3.54-6.56,5.94,1.27,3.73,3.09.72L349,297.25l-4.62.91L337,305.41l-7.07.75-1.72,4.95,5.85-3.85,3.19,3.35-.88,2.07,3.94,1.2L338.89,327,336,330.34l-2.76.67-2.49-3.1-6.11,2.9-1.17-2.68-4.41-.47-4.76-13.3-3.32,2.5,2.34,3.34L312,324.15l-7.29-2.84,2.62,2.82-3,2.55-8.16-1.42L290.8,320l.92,3.13h-2.43l7.32,4-6.44,8.72,1.94,1.41-2.79,1.4,1.48,9.45-4.28,2,2.09,5.23,6.52,2.55-14.28,9.48-4.41-1.22-4.78,7.7-2.05-1.22-6,3.21-9.74-2-5.71-8.51-3.75.68-2.78-2.38-7.48,2.18-1,7-8.2-2.35-1.38,3.49-5.06.5-1.4-3-5.08.76-7.68-6.24-7.45,12.59L192,380.78l1.72,4.5L190,383.79l-4.23,7.89,2.72,2.82-1,2.65L179.28,400l-.26-7.86-5.45-3.06-1.76-4.25,4.26-3.26-.18-4.88,4.24-3.5-5.53-11.3-3.07,2.46-.15,5.06-7.26-3.34,1.92-2.59-2.94-3,2.61-3.11-2.21-5.47-2.19,4.7-8.6,2.95-8.44-12.1-3.46,1.32-.43-3.83-3.63,1.21-5.51-4.38-8.78,4-3.78-1L112.89,351l.81,2.33-14.55-5h0l-71.42-3.49.42-10L36.32,325l0-9.67h0l-1-8.73-9.85-14,3.66-6.33,2.78-.54.85-5.52,3.11.7,2.39-5.64L44,270.55l5,.91-1.11-3.36,2.82-2.69-.19-4.92,2,.94,1.08-3.49,3.71-.06,9.23-11.45L72.17,245l-2.24-5,4-1.94-1.33-2.22,3.46-6.32,5.33.23.29-5.23,5.75-2.71L93.63,214l7.69-3.64,2.3-9.78,7.3,2.71,5.65-1.92,2.53-4.48-1.95-4.65-5.25,1.24-1.1-2.08-3.31.48-.79,5-3.81,1.27-1-4.77-4.42-2.22.75-17.71,4.63-3.46,10.26-21.41L111.37,145l-6.9-2,4.32-4.3-.33-4.48-9.52-20.61.1-3,3.83-1.07.52-10.07,5-7.62,2.54.62,4.24-4.92,4.93-.89.68-4.41,3,2.75,1.34-2,7-.39,1-5.65,5.31-3.53.83-3.55,6.1-2,9,4.92,12.66-7.22,5.48,2,3.52-6.51,5,3.95,14.1-19.73.44-4.57-5.08-9.18h0l10.54,1.75,6.51-2.11-.51,3,2.56,1,1.26,4.58L214.05,30l20.75-9.29,3.91-7.8,6.64-1.43Z"/>',
        banner: 'pb.jpg'
    },
    {
        key: 'Rajasthan',
        value: 'RJ',
        path: '<path d="M204.4,26.73l0,3.71-3.14,3.73L201.12,38l27.42,1.34h0l-.61,1.78,1.25.26.86,1.85-3.85,3.91.29,2.18,2.35.14,2.66-1.36.82.78-1.7,9.47,2.09,1.82-1.55,3.41-1.58-.39-.59.85.09,1.22,1.16.32,1.7,2.81,0,1.69,2-.14.36-2,4.65.81,3.69-2.39,3.76,2,1.13,4.12,1.66.51,2.13-.77L253,74.89l1.32.28,3.13-2.08,1.9,1.67,4.18-2.91-.19,2.86,1.33.49.55-1.42,1.65-.36.22,3.64-1.73,2.3,1.53.7L266.16,83l2.17.28.19,2.39,3.34.29.24,1.76-2.16,2.44,2,4.45L271.31,97l1.33,1.86,1.17,6.72,2.72.61L277,109l6.52,4.37-.35,2.47,5.19.69,1.45,1.22,1.41,2.49L294,122,293.7,124l1.83.87-.35,1,2.09,2.35-1.22.53.06-1.15-1.69-.24-4,3.9,2,.65.11,1.45,1.35-1.87.88.73-1.33,1,.21.87-1.75.29.9,1-1.49.45,1.33.81-1,2.34-1.08-.69-.65.88.23.8,2.12.37-.62,2.19,3.78.83,1.68-1,3.7,3,2.2-1.65-1.32-1.13.24-1.72-1.4-.79.57-2.84L300,135.93l2.57-1.61L301,133l3.23-.58,1.34.59.67,1.62,1.92-.49.58-1.88-2.49-1.32,2.54-1.35-3.34-2.48,2.48.07,1.78,1.93,4.12-.82,1.17,2.37-1.61-.26-.54.93,2.14,1.4-1.91.74,3.7.52,0,3.37,2.66-1.93,2.67-.46-.39-3.82,6.12-3,.43-2.68,2.15-.74,4.86,4.07L333.33,136l0,3.58.86.28-.53,4.17-1,.08-.86,5,1.33,1.47-1.47.07.95,2,1.38-.82,1.58.88,1-4.14,3.74.16-.52-1.25-2-.7.77-2.06,3.85,2.14,1.09-.76,0-1.16,1.31.34-.52,1.16,1.09-1.82,1.66,1.78,1.34-1.49.58.47h0l1.24.91-.28,3.4,1.7,1.11.25,2.12-1.36,2,1.7.9-.86,1.09.2,2,2.07.67.61,1.89,1.45.77-.63,1.8.73,1.28,2.85.87L362,168.9l1.73-.81-1,2.09,2.29,3-.2,1.05,1.46.83-.8,1.21-2.16.35-.63,2.21-4,1.36,1,1.37,1.93-.53-.36,2,3.06,1,2-1.76,1.32,2.5h.82l.18-1.52,1.25.43-.81,1.68-3.82.7-9.89,5.2.73,2.33-.46,2.39,1.56,0-.7,1.11,2-1-.54-1,.75-2.93,1,1.27,3.66-.53,4.86-2.36.13-1.71,1.51-1,6,2.35.43-1.71,1.83,1.21,2.83-.53.67,2.43,1.13-.68-.25-2,2.59.51.43-2.35,4.1.69.47-.73,2,1.48-1.56,2-1.54-.29.81,2.56h0l-2.13.44.66,1.73-3.33-.27.71,2.06-1.18.81-.15,2.68-4.08-1-1.94,1.83-2.32.14-.67,2-2.57,1-.33,2.19-3,.46-1.32,2-2-.2-6.33,4.53-4.15.39.2,2-4.27.37-1.95,3-3.79,2.82-3.45,0-1.42,2.28-2.48.43-2.13,2.4L332,228.88,329.47,232l.43.89-1.48,2.81-2.2.55.28.95-1.26.94-3.81-.31-.86,1.84-1.48-.16-2.76,3.68.05,3.08-2.1.77-.21,1.11,1.45,1.07.41,6.88,1.92,4.21,1.08.53.59,2,3.43,2.09,3.74.45.15,1.15,3.18-.88,2.2.39,2.12,2.26.74-1.05,2.86-.18,2.24-1.86,5.66,1.36.66-3,2.74-2.41,1-.62,2.45,1.13-1.09,4.2,1.55.26-1,2.32,2.48,2.19.5,1.59-1.19.24.34,3.59-4.18,1.41-1.77-1.7-4,.27-2.41,2.14-1.63.53-3.64-1.05L330.52,281l1.61,4.34,1.29.14-.3,1.38,1.53.72-1,1.1-4.14.46-1.32,1,2,3.32,2.71.17,1.85-.89.89,1.61,2.38,1,1.44,3.27.23,3.46-.63,2.08-.8-.11L337,306.48l-1.58.81L333.15,306l-.07-2.67-1.46.87-.58-1.14-2.26.71,1.61,3.12-.49,6.21,1.49,3.23,3.06,3.08-1.23.84-.71,2.74-1.92-.37-2.4.88-2-2.46-2.35,0L322.65,320l1.24-2.63-.42-1.73-3.35,1.06-.1,1-1.13-.35.41.94-1.38,1.38.61,1-2.11.82-2.69-3.23-.73.69-1.29-.48-.4.93-3.82-2.2-1.93,1.8-2.94-.05-.91-3.24.51-1.24-.91-1-1.85,2.2.5,2-1.45,2.25.58,4.81-3.83.94L291.47,328l.68,4.39-4.24,2.3-.79-.52-2.9,1-.75,1-1.19-1.72-2.07-.66-.18,1.27,1.35.9-.49,1.86h-1.33l-.13,2.79-1.43-2-3,.08-1.16-1.21.88-.74-.68-.88L269.48,333l.36-2.85,2.16-3.23,2.3,1.24.74,1.46,2.22-.38,1.5-1.6,1.37,3.07,2.69-1.38.77-3.05,2.36-.63.09-1.71-2,.07-.58-1.39-1.43,0,1.31-3.87,2.33-1.22-.68-2.72-2-.34-1.18-1.78-.49-2.73,1.24-.19-.28-.91,1.85-2.23,2.45,2.68,2.7-1.78.12-1.73-.91-.82,1.49-1.13-.81-.9.47-.92-2.35-2-1.1.82-.44-.84.9-1.9-.95-.88.51-2.79-3.46-1.67-6.39,3.65L275,294.79l-5.68,1.4-8.06-1.88-2.2.49-1.37-2.19.92-2,2-1.3-2.21-2.26.3-1.23.67,1,1.16-.27-1,1.75,2.25.27,1.17,1.92,4.86-2.42.32-1.38-4.29.27-.65.84-2.17-1,1.38-1.6-1.17-1.86.42-.7,1.66,3.65,1-3-.81-2.08,1.42-.89-.26-.85-8.14-.13.23,2.58-2.13,1.26.14,3.65-2.73.34-.56,1.09-5.39-1.56-.31-1.75-1.23-1-.77.61-.91-1.79-1,2.19,1.41,3.61-.31,2.9.42-1,2.56,1.24,3.93-.43.58,2.08h-1.18l.28,2.11-1.64.37-.84,1.93-2.19.24-4.08-6.7-1.05,5.15,1.82.77-1.47,1.67.29,1.24-1.84.67.39,2-2,2.08,2.93,1.31,1.65-.37.07,1.4,1.74-.26-3.11,4.57-.15,2.61-1.34,1.62,5.1.1,1.07.9.51,1.34-1.08,1,4.88,8.74-3.12,4.47-.69,2.94,1.52,6.6-1.43,2.46,1.4,2.49-1.47.35-2.65,3.26-1.86.95-.78-.66-2.24,2.25-1.44-.15-2,1.86-1.8.15-1.72,1.83-.14,2.12-2.3,2.32,1.54,2.19.81-.87,3.24,1.94,2.4-.58.92,1.4-1.19.92,2.22-.46v1l-1.31.82-2-.32-2.67,2.67-2.72.6-1.46,2L223,371.3l-3,2.33h0l-1.76-1.53.25-1.11-1.84-3.29-1.69-.18-1.07,1.88-2.44-1.25.29-4.28-1.4-1.25h-2.5l-.51-1.72-1.83-.25-.86-1.87-1,.17-.37,1.52-1.95.21-2.71-5.19-2.14.58-.8-1.14-1.69,2.17-1-2-2.22.73-.9-.57,1.12-2.45-.93-2.08,1-3.55-3.65-1.53-2.78,1.82-.22-4.1-1.28-.27-2.57-3.33-1.94.6-.58-1,0-3.53,2.74-3.29-.86-2.82.38-2.88-1.93-1.76.17-1.91-1.67.62-.12,2-1.81,2.2-2,.8-2.05-1.94,1.08-2.22-4.78-1.93-1.38-2.2,2.72-5.85,1.56.3.54-2,.79.45.89-1.45-.89-.51-1.8,1.17-3.71-2.08,1-1.52-.61-3.27-1.89,1.41-1.67-.82-.54.56L160.6,311l1.23.94-3,1.79-2.44-1.88-5.92.22-1.71-2.77.17-1.81-4.75-.73-1.92-1.64-1.92,2.7.31,1.93-1.88.13-1.22-2.55.25-2.08h0l-2.27.26-1.42-2.56h0l-2.74.67-1.93-2,1.24-.94,2,.63,1.21-1.5-1.69.44-3.71-1.14-.85,1-2-.09-3.51-1.83V296l-1.43-.42-4.73,3.78-1-1.94-1.9-.37-.79,3.39-2-.85-.56-2.32-6,1.78-2-1.79-5.6-.15-4.6,2.49-1.4-1.51-2.33,2.18-8.32-3.49h0l-7.06-12.14-2.23-10-5.59-5.8-1-2.69-3.06-3.29.6-6.15L60.28,248l-2.14-.45L54.61,249l-6,.63-5.25-1.81-8-11.73-.59-6.26,3.93-8.28.49-11.72-.7-3.11-4.44-2.36-8.16.89-2.79-.54-4.08-3-9.36-4.6-1-2.81L9.93,184l2.84-7.25,12.39-11.59,3.25-4.87,3.49-2.64,4-10.34,2.15-3.3,9.13-8.56,5.14-1.27,3.44.7,4.78,5.19.28,3.7,3.46,6,5.53.92,17-7,6-1.17,10.86-.15L114.05,138l1.57-8.34,2.73-3.95,8.24-7.45,5.13-15.17,3.61-4.91,14.26-8.49,10.07-4.57,2.54-6,3.9-5.06,8-15.35,5.24-19.07,9.6-4.24,7.69-2.21Z"/>',
        banner: 'rj.jpg'
    },
    {
        key: 'Sikkim',
        value: 'SK',
        path: '<path d="M257.5,14.71l7.17,9.43,28.16.28,27.32,23.24,1.12,29.92,8.34,3.21,8.17,23.35L327.28,121l-2.55,55.39-26.55,39,14.11,59.81L350,304.62l-7.75,19.21-32.73,10.22-4.32,23.06-12.19,14h0L284,374.77l-13.4-15.57-9.33,6.66-12.49-9.49L228.7,356,215.94,360,219,370.43,186.29,396l-36.11-8.68-6.46-8.85-24,3.3-12.31-6.14-19.7,7.21-17-9.19L67.08,351.5l-19.34-6.71h0l17.41-43.63L56.91,288l1.66-12.9,11.08-7.93-12.1-26,51.27-110.5-8.08-11.15,9.42-6.41-1.69-6.1-23-10.52-2-26.08,5.06-4.74L105,73.18l13.72-9.12,4.75,7.3L157.33,56l14.88,4.29,31.15-25.4L222,37.37l5.19-17.29L247.89,13l-1.55-9.76Z"/>',
        banner: 'sk.jpg'
    },
    {
        key: 'Tamil Nadu',
        value: 'TN',
        path: '<path d="M271.83,306.38l1.63,1.21L272,309.68l.81,1.47,8.11,7.43-10.05-6.35-6-.52-.73-1.67,1.14-1.06,3.36-.08,3.19-2.52ZM194.08,59.46l.47,2.72-2.67,2.46,5.32-.77,1.85,2.82,5.55,3,6.5-.41L211,66l2.2-.08.35-2.91,1.21.12.39-.12.6,1.73,1.66-.43-.15-4.23,2.59-2,3.12-10.77h1.49l-2.35-4.34,2.67-2.84,3,1,.61-3.76,3.11.78,9.26-3,.42,4.83,3,.08L242,39l1.49-2.37,4.65-.64,6.37,4.53,6,.5L263,35.36l2.1-1.4v-2.3l3.49-.41,2.89,3.21,3.32-2.38-.48-2.42,5.41-1.77-.15-1.53,1.7-.6-.67-1-1.8,1.28,1-5-3.59-1.58L280.13,18l7.62.91.92,3.2,2.25,1.58L297.2,21l.34,3.82,1.62-.33-.52,1.93,2.43-1.05,1.54,1.95,2.88-2.07L301,21.72l2.34-2.22L305.13,21l1.46-1.62,3.62.06,5.3-2.36,2-2.77-1.5-2.2,2.19-1-.1-2.43,2.39-.59.75-2.06,2.15.24L323.14,5l-3-.6L320.39,3l5.37-.58,5.89,4.27,5.57.15,3.25,6.38L343,14.66V10.8h0l2.34,10.85-3.27,9.74L339,57.25,332,80,312.62,109.3l-3.37,9h0l-2.83-1.67-4.34,4.08-1.51-4.35,2.63-.88-1.28-1.07-2.06,1.23-1.9-3L295.49,115h0l3.89,1-1.49,2.57,2,.57,1.34,2.68-.68,1.2-2.31-2.15-1.7,2.82,3.19,2,3.27-1.6.17,2.6,2.11-1.14,1.33,2.31h0l-3.09,17.68,5.78,15.08,1.17,27.32h0l-3.79-.73-1.28,1.36-3.67-1.42,1,3.14-3-.61,1.65,3.92,5.85,2.17.31,3.84,2.7,0h0l2,37.23-3.1,1.52-6.61,0-25.44-3-6.47,4-4.69,8.37,0,3.75,2.77,3.9-8,7.58-2.38,5.59-9.1,10.49-4.23,7.24-2.59,9.14,2.93,5.31,8.84,7.58,9,1.35-6.88,1.56-9.88-.9-5.83,1.14L230.19,315l-.65,1.34-4.32-.16-1.11,1.33,1.07,1.16-5.63,1.89-11.93,1.39-14.36,10.93-2.88,5.53-.81,7.92,2.12-.36,3.07,2-4.34.34-4.59,6.62-.59,5,3-.54-.59,6.56L183,371.46l-1.1,2.82,1.24.69-18.73,8.76-4.08,5.07-12.18,3L146.38,396l-16.73-3.17L114,380.17h0l1.82-1.78,2.69.74-1.77-4.72,5.31-4.23-1.63-4,4.35-.58L126,363l-7.82-14.32,1.51.18,2.72-2.91,2-6-2.72-4.17L120,336l0-2.24-3.42-4.64,3.56-1.77,1-3.72,4-3.91L124,317.09l2.15-2.13v-5.88l1.23-2.62,1.94,0L131,299l3.16-1.41,1.26-3.29-3.26-2.13-.69-4.93-1.14,2.28-1.46-2.14-3.51,2-4.21-2.82-3.14-.13,2.71-7.86,1.3-.44.12-4.19,1.72-.61L122,271.5l1.06-2.48-1.75-1.22,2.53-5.52,1.73-.75-.78-4.81-4.29-5.19,5.13-1.92,1.47-6.33-2.41-1,.28-2.38-2.57-3.75.55-2.48-4.22-.43-7.91,4.37-1,2.69-4.83,2.84L100.41,242,97.34,239l.14-1.65-1.83.9L94.3,237l1.4-4.63-2.28-4L95,216.1l-1.76-3,4.81-.22-1.21-3.3,3-6.87-.66-2.1-3.41-.56-1.63-3.9-12-4.49L86.24,184l6.13-.79-4-.37.12-5.32-3.39-1.68,2.45-4.64-2-1.62-5.26,3.3-9.64-1.24-2.49,1.63-.45-3.63,6.68-4.46-.14-4.28-2.05.36-4.35-2.51-2.71-3.77-5.46-1.81-.91,1L55.73,152,53,153.05l-1-7.56,3.22-2.06,1.92,2.06,3.72-1.33L63,141.29l3.19-.06-.1-2.61h0l2,.31,3.76-3.1,2.58,2,1.4,4.36,13.26,0,5,1,1.48,1.64,1-2-1.6-3.06L100,129.66l4.27,1.31.94-2.59,2.25-.14,1.94,1.38-.66,1.39,2.43-.9,1.08,3.76,2.68.88-.46-3.63,8.85-1.49,1.05-1.35,3.07.3,2.94,2.84,2.37-1.43,4.26,2,2.64-6.39-.25-3.58,1.72.91.53-4.08,12.54-.41,2.07-5.19,5.63-6.92-3-4.47-18.57-2.53.32-4.32,5.17-1.58,4.35-5.08,1.16-4,.36-5-3.55.65,2.21-2.28-2-.52-.6-3.7,2-4.57-.54-2.65,4.56-1.2L155.47,67l1.82-1.79,2,.71L164.1,57l-1-3.41,9.46-3.23L173.71,52l-1.79,2.48L173,55l1.48-2.59,2.55,3.9h1.43l.95-3.66,2.27.26L187,58.21l7.11,1.25Z"/>',
        banner: 'tn.jpg'
    },
    {
        key: 'Telangana',
        value: 'TG',
        path: '<path d="M34.49,164.67l1.44-2.36-4-2.77,3-6.09-2.48-.84,5-1.61-3.31-1.59,2.57-1.81,2.08.85-.32-6.52,4.37-.45.74,2.26,6.69-2.45L50,130.52l2.1-2.77,2.44,2,4.32-11,8.91-1.31-5.17-7.68-3.48-.25,1.12-3.64-3.48.25.38-2.93-4.22.08-.84-4.2.36-3,3,1,.46-4.51,3.86,1.06L58.31,89.6l2.32-4-1-1.44,1.77-5.2,3.25-1.07-3.71-1.5-.09-1.61,7.46-3.5,8.2,6.29L77,80.13,79.6,79,87,80.62l2.29-8.52L88.06,65,98.8,61l-2.52-9.09L99,50.66V47.77l-3.5-5.28,1.36-2.37,5-2.14,1.91-6-2.44-5.21-3.8-.92L99.7,19.9l1.42,2.9,4.06.35L106.32,27,113,28.78l1.51,2.08,2.74-2.56,6.56.38,9.55,4.54,5.8-1.07L144.28,34l1.12,9.13,4.84-1,4.49,1.65,1,5.74-2.2,3,3.24-.92,2.17,2,7.16,1.06,6.34,6,3.83-.64-1.37-2.13,2.53-3.14L178,47l5.16,2,.8,2.2,4.64-.51,8.59,6.59,6.12-4.56.83,2.54L208,56.74l3.52-6.37,8.53-2.51,3.82.85,3.63,5.06L237,60.25l2.78,5.67-1,9.24-3.52,6.34,1.95,5-7.21,5.92.13,6.2L235,97.46l1.56,2.29.38,14.5-3.81,2.5,3.22,4.13,6.81,1.57,8.34,8,4-1.76,2.61,1.81,1.1-1.94,5.56-1.82h0l6.3,11.69,12-3.7,12.64,9.7,1.54,4.14,4.07,3.22-.67,1.48,3,.92-.87,2.31,2.4,7.16,3.69,4.27-4.64,3.13.1,4.18,5.37.48,2.69-6,3.21,2.38L314,173l1.17,5.75,9.47-3.14-2.52,7.72,7.5,25.79,3.48.3,7.29-5.87,8,3.59,11.09.49h0l6.31-1.61L367.6,208l7.42-2.22,3.59,1.11,4.4-5.45,2.14-.69,1.26,2.09,4.67-2.85h0l2.92,3.61-.88,1.82-17.44,9.37-.46,3.37-5.78,8.66,1.76,1.78-1.89,2.68-.67,8-6.6,7.7-3.71.39-4-2.95-4.88,6.23-7.25-.2-1.59,7.91L330.77,260l-4.69,3-7.28-1.9.68,4.87-3.64,0-1,8.41-2.23,2.22-9-3.43-7.3.84,1.44-2.88-8.17-4.43-5.43,2.66L283,274.38l-3.05,2.93-2.18-.69L275.57,272l-2.38,1.85,1.84,3.74-2.58,3.83,11,4.68.3-2.7,7.87,1.9.22,4.63-1.85.43-.88,3.9,4.2,3.25-3.5,2.19-9-2.38-.32-2.23L276,292l-2.27,3.4-1.21-3.86-3.34-1.41-1.51-7.47-3.32-4.82-5.16-.22-1.63-2.81-4.09,5.25L246,281.86,242.9,287l-1.51,3.87,3.51,1,3.1,3.42-1.85,6-7.6,9.07-4.76.37-3.4-5.31L226,306l-3-3.44-10.75,5.94-12.78,2.77-6,4.22-13.59,1.84-3.46,4.68-.56,23.58-3.57,2L160,345.09l-8.93,3.81-1.7,1.79.43,6.72-3.21-.43-.83-3.77-2.12-.32-.11,6.08-5.21,5.59-5.2-.26L124.91,358,120,361.69l-13-2.15-7.58,4.54-5-.19-1.58,8.95-4.91,2.51-1.3,4.51H83.29l-1.38,1.91L78,380.24l-2.32-5L72.78,379l-9.67-3.21-7.5,2.68-7-1.87-4.84.89-4.46-3.09-8.21-.79h0l.06-7.13L29.48,364l1.58-6.39-1.93-1.07-.26-3.75,2.3-5.68L29.31,347l-.1-2.23,1.15-1.59,2.76.46,2.65-3.07,2.14.95L38,337l-8.23-3.36-7,1.15L17,333.33l-4.94-2-4.19-5.71,4.81-.49.4-1.57,5.9.65L20,321.84l3.07-.63-2-4.16,6.16-1.67.45-5.51-3.09.81-1.39-2.21,4.1-1.36.16-3-3.68-.23,1.2-6,2.84.35-1.5-11.43,3.9-8.65-3.12-8.52-8.69-5.08,3.28-4.15-1.56-1,6.28-4.95-1.73-1.09,1.49-7.26,4,1.45L32.63,246l.64-2.82-2.15-2,5.29-.21.05-2.17,3.17.88,0-2.27,2.5-.54,1-2.41-.39,2,3,.74.14-2.9-8-2.38-.16-2.66-3.51,1.17-1.78-2.1L30.4,231.1l-1-2.24-4.24-1.34.88-9.71,9.47-4.93.33-1.51-5.21-1.63.54-1.67,1.28-2.24,2,.77,2-4.84,2,.21-1-3.35,2.65.48.62-4.86,1.71,1,.79-2-.61-2.11-4.56-1.5-3.94-3.87,4.64-4L38.54,177l-2.83-4.31L39,165.86Z"/>',
        banner: 'tg.jpg'
    },
    {
        key: 'Tripura',
        value: 'TP',
        path: '<path d="M298.71,6.15l10.39,4.64h0V21.62l9.4,20.07L305,73.86l19-.61h0l9.1,25.94-5.14,27.68L331.32,138l-4,7.17,4.47,12-2.48,11.34-6.4-1.39-3.9,5.52,2.72,8-6.21.44,2.07,21.27h0l-4.78,1.11-5.3,16.45-1.44-9.32L299,206.78l-1.41-7.87-3.9.69-21,23.39L262,219.71l-9-17.66-4.87.5-4.49,11.29,7.44,49-7.55,3.27v7.74l-8.68-.94-12.74,10.12-16.43,30,13.73,44.79-4.6,6.27-8.31.79L194.17,384l-5.82-3.4-10.48,2.61L167.15,392l-8.4-4-15.93-44.27,3-7.11-8.3-1.67,2.65-5.72-6-10.42-8.17-.08-7.89,18.53,7.5,29.47-10-1.18L104.93,342.6l.45-23.32L99.51,310l3.43-2.84-5.5-4.62,6.42-10.15-6.56,1.92L87.57,261.1l-10.63-6.9,2.52-7.52-4.2.08-7.62-13.33-1-16.82,8.53,5.81,2.52-10-11.74-.9.49-11.88,8-3.41L81,199.5,88.45,175l-5.7-10.74,3.85-7.42L83.37,153l9.3.59-1-9.22,2.68-4.8L98,142.17l1.54-6.38,16.26,5.36,4.16-18.39-4.19-14.36,37.9,8.24,20.14-6.54,5.92-21L177,82.5l4.42-4,3.94,15.09,10.62,6.66,6.89-.25-4.24-25.64,16.34,9.45,7.23-4.79-1.3,7.56,10.55,15,4.91-1.29,7.25-31L238.7,52.48,247,47.4l8.67,8.66-4.83-16.67,32.9,1.19,4.51-10,7.63-1.6-4.62-17.18.78-5.94Z"/>',
        banner: 'tp.jpg'
    },
    {
        key: 'Uttarakhand',
        value: 'UK',
        path: '<path d="M188.9,37.5l6,7.47-1.6,5.57,4.37,3L199,61.51l4.52,5.27,6.38,1.49,3.51,10.56,9.91-.21,3.36,8.49,6.3,4,7.51-5.56,5.71.31,4.2-3.06,7.06,3.79,5.61-.15,6.76,11.31,14.51,6.28,6.63,8.38,6.09-4.31,3.73,6.37,3.63-.18,1.63,3.58-2,5.26-4.42,3.56,3.2,3.22.77,8.59,10.1,1.49,7.05,5.28,3.62-.56,14.15,10,6.49-4.27L362.29,162l8.3,10.13L394,180.82l-.08,2.09-3.2-1.29-8.83,3-5.31,7,1.64,5.22-13.07,10.22-1.52,5.53-8,6.27-8.15-.08L341.73,233l-6.45,6.67-6.68-1.06-7.64,7.1,1.82,9.73,4,4.63-1.4,5.68-3.25,4.32-4.07,1.09.79,4.36-7.08,5.36,1.78,3.1-6.67,1.1-.17,4.23,3.77,2.48.47,5.72,4.22,4.39L313,315.77l-5.52-2,2.64,10.06-4.31,3-5.51-2.43-4.5,4.4-1,12.24-2,3.27-2-.6-4.69,9,1.37,11.05h0l-5.25,3.81,1.67,2.14-3,5.84-5.14,2.77-5.11-2.18-3.76-6.77,1.38-2.09-6.82-.83,3.94-1.23L263,361.9l-3.33-.06-1,4.15-3.66.88,2.84-7.33-3.84-3.7-7,1.42-5.17,4.13-5.92-2.6-7,2.91-1.62-6L224,359.48l-10.8.95-1.1-9.76-2.74-.61-1.95-4.27-.87,2.31-6-.09-10.66-9.72-5.14.8.8-3.63-3.2-2.31-.69-7.69L170,320l-1.12,7-6.15-6.27-2,2.2-4.94-.13-.14-6.66-5.23-7.52-5.93.44-9.66-7.62,4.89-4.16,3.53,2.63,2.27-6.88,2.22,1.89,4.65-3.1,5.94-8.2L142.9,281l-20.26-11-8.76-8.05-4.47-15.06-8.43-4-9.08-3.06L80.62,251.68l-4.26-.77-6.12,4.38-6.41,9.55L59.55,266l-.8,5.2-5.48.87-.49-5.43-4.09-.3.51-3.3,2.8.26-2.79-11.76-8.78.44-5,4.21-4.1-1.62.27-2.39-4.18-2,.78-9-7-11.12,3.48-5.38-1.72-2.78,3.06-4.21-1.67-2.56,4.74-5-1.65-2.83,3.24-6.69,3,1.34L36.46,199,46.91,181.6,22.1,169.71l-8.6-9.35-8,.83h0l2-3.35,11-2.78L32,147.32l1.28-2.83-.82-4-4.66.1L24.21,136l5.9-2.72-.33-5.78-5.14-2.87.87-3.23-5.94-7.54,6.31-8V99.22l5.05,3,.7-8.5L26,93.86,24.78,89l3.29-2.27,6,3-2.34-2.11,3.25-5-2.77-7,4.74-2.51,5-9.59,7.56-3.15,6.69,3.12,1.76-4,6.5-.72,6.75-5.33L80.75,53l4.1-4.76,2.74.7.55-2.9,6.52-.35,4.63,5.64,2.47-1.58,2.77,2,2.92,5.3,7.52-.39,6.55-3.88,4.4,1.89,1.48,3.56L144,57l2.66,7.56,5.92,5.21,14.07-1-2.46-8.2-6.64-6.16-1-4.45h0l2.08-9.49,7.44-4.23,6.32-13.94,9.11,4.15Z"/>',
        banner: 'uk.jpg'
    },
    {
        key: 'Uttar Pradesh',
        value: 'UP',
        path: '<path d="M31.41,12.08l3.65-.38L39,16,50.32,21.4l-4.77,8L44.24,30.7l-1.37-.62-1.48,3.06.76,1.29L40,36.72l.77,1.17-1.41,1.93.79,1.26-1.59,2.46,3.22,5.08-.36,4.09,1.91.91-.12,1.09,1.87.74,2.3-1.92,4-.2,1.28,5.37-1.28-.12-.24,1.51,1.87.14.22,2.48,2.51-.4.36-2.38,2-.51L61,55.06l2.79-2,1.95.35L70.87,48,75,49.39l3.85,1.83,2,6.87,4,3.68,9.25,5L101.22,68l-2.71,3.74-2.13,1.42-1-.86-1,3.14-1.61-1.2-2.24,1.9,4.42,3.48,2.71-.2L100,82.82l.07,3,2.26.06.92-1,2.81,2.86.51-3.18,5.33,2.51.31,3.51,1.46,1-.36,1.66,2.35-.36,4.87,4.43,2.72,0,.4-1,.89,2,1.25.28.5,4.46,4.93-.44,1.5-1.7.74,2.72,3.22-1.33,2.7,1.19,2.36-1.89,3.2-.65,1.75,1.69L145.39,106l1.67-.4.44-1.9,1.52,0,1.1,1.51-1.8.57,3.12.38-.63,1,1.71,3.09,2.34,1,2.35-1.27,1.37-2.66-.76-1,2.4-1.74h0l2.44.06,5,4.28,1.78-.15.29,1.66,3.11,1.7,2.17,3.67,4.72.48,3.42,4.48.65-1.26-1.38-5.34,3.35-1.31,2.2,2.83,2.88-.15,1.16,3.18,4,1.25,1.08,2.4,3.93,2,.53-1.17,1.68.7.29,1.74,3.33,1.94,2-1,.9,2.23,2.31,1.65,6.72,1.41,1.13,4.16,4.51,5.31,0,1.65-1,.1,1.33,1.09-.51.86,2.73-.51.2-2,3.53.85,2.06,2.55-.29,2.06,7.48,4.69,4,.87,9.39,7.47,2.11-.14,2.16-4,5.11.32,2.85,3.38,4.37,1.26,12.34,9.49,13.31-2.49.2,3.28,2.26,4.51L297,181.45l10,.13,1.26,1.9,4.1,1.1,7.91-.3,6,7.06,2.79-.68,2.59-4-1.27-1.3.88-1.29-.67-1.26,11.59.58,12.41,6.81h0l-1.52,1.62,1.32.67,3.19-.82.46,1.22-1.42,2.57,2.9,1.4,1.24,2-2,6.16,4.18-.14-1.54,1.55,2.57,1.37.3,4.74-1.12,1.1,1.17.62.23,2.3,2,.83L367,216l2.06.76-.47,1.82,1.92,1.21,2.07-2.09,1.63.5.58,3.07-1.42,2.95.48,1,.68.58,2.61-1.37,1.41,3.94,3.93.75.63,2.52-7.3,1.59L366,230.78l0,2.47-1.78,3.21-3.78.66-.6,1.33-3.09-.55v3.87l4.09.9,1.49-.79,3.13,3.64,5.1.6.53,3.25-1.15,4-2.37-.91-1.73,2.31-3.48-1.11.34,5.44,1.58,2.59,2.16.17,3.91,4-.05,1.93,1.82-.51,4.86,3,2.82-.7,2.93,1.59.77,2.21,5.4.83-.08,2.47,1.51-.18,3.27,2.46-1,1.89,1.55,1.84-3.85-.46-.17,3-1.08-.49.24-1.91-.59,2.39-1.85.36-2-2.07-2.41.85-1.12-2.79-2.5.23L378.2,286l-1.8-.29.11.88-4.25-.46-.44-1.91-2.37-1.56-2.76.6-1.27,1.4.35,3.29-8.18,4.47-3.39,4.8-2.1.44,1.45,1.64-2.26.3.26,1.17-1.93,1.3-1.51-1.28-1.46,1.38-.48-.56-1,1,.71.4-2,.19-1.43,2.17-3,1.21-1.27-.54-4.06,3.71-2.62.15-1.08,2.38-2,.46-.74,1,1.13,3.23-2,6,1.32.39.52,7.87,1.87,2.11-.18,2.75,3.4,2.86,1.37-.25.05,1.8,1.69,1.38-.83,1.66L338.3,345l-2.22,5.57h0L330.69,352l-.6,2.55,1,2.64,1.53.27,1.1,2.19-3.87,2.81,1.33,2.72-4,9.21h0L325.35,376l-.67,2.78-3.08,1.89-1.36,3.81-5.28,2.4-7.59.13-6.73-4.87h0l-.54-2.35-2.84-.91,1.25-3.16-3-.16-2.62-3,.69-1.32,2.55,1.09.33-4.72,1.18-.72.73-3.15-.18-4.52-2.74-.68,1.51-6.43-1.08-.76-.16-2.4,1.72.83,2.81-.63-.22-2.65h-1.87l.14-2.57-3.47.07,0-1.76L293,340.82l-6.61,2.72-.55-1.48-3.57,0-.85-1.59-1.58,1.26.39,4.83-4.08-1.45-1.84.56.13-3.16-1.69-.92-.53,1.14-1.19-.2.7-6-.27,1.2-.89-.71.09.86-1.19,0,.73,1.31-2.1-.61.85-2.4,1,0L268.36,335l.88-1.12-1.88,1.82h-2.42l-5.51-3.29-2.35,1.13L253.86,330l.8-2.16-.7-4.44-.63.95-2.91-1.49-2.07.52-2.91-2.18-2.59.28-1.2-2-2.78,1.07-.55-1.07,2-1.32-.78-1.1-.8,1.27-.46-2,1.38-1.31-1.91-.49-.79-1.55-2.92.49.77,2.45-1.5-.49-1.15.86L233.9,318l-1.23,1.79-4.25-1.85,1.92-.15-.41-1.3-2,.59-3.14-2.79-.87.51.08,2.66-.42-2.8-1.91-.1L220.45,318l.82,2.09-3.07,4.1.56,3.44-1.45.3.75-.31-1.93-1.34L214.64,330l-2.88-3.39-3.43-.11.37,1.23-3.16.38-.94-2.63-2,.88h0l.28.94-.92-.49h0l-2.56.8-1.68-.55-.63-1.54,3-1.49-1.11-2.31,2.26-1.8-.29-3,2.05-2.07-1.38-2-2.14.16-.44,4.65-1.45-2-5.13.53,1.32.8v1.41l2.6.77v1.27l-2.5-.57-2.76,1,.3-1.55-1.18.41-2.82-1.69L189,317,187,315.21l.63,4.69-2.28-1.09-1,1.34-1.74-1.88L181,318.2l1.22.72-.29,2.49-1.24,0-1.51-2.11-3.85,1.37.85,2.71-1.2-.92-2.17,1.29-2.55-1.53,4.33-6.46,3.72-1.65L177,310.27l-1.08.3-3.79-2.9.34-5.56-2.82-2.34-.55,1.35-2.63-.64-.31,1.84-3.31,2.56-2.06-1-3.21.72-1.23,4.21-2.78-.19-1.5,2.18-.56-1.33-2.84.94,1.28,5.07-1.25,1,.42,2-5.66-2.55-7.59.7.26-1.32-.68.42L134.2,314l-3.88,5.34-1.51-.76.41-2.15-1.92,1.52-.82-1.78-.82,1.44-.78-3.2,1.32-2.17,1.7-.22-.81-.7,1.65-2.51,1.61,0-1.7-.76-2.16,1.39-2.46-2-.74,1.63-1.14-1.62.78-2.2-2.63-.41-1.77,1.7,0,2.19,1.45-1.06,1.15,1.6,1.54-.62-.56,2.42.91.89-.73.75-3-2.66.27,2.86,1.83,2.57-.58,1-2.22.64,0-1.76-1.2-.44-1.13.71,1.52.43-.26,1.38-1.64.14-1.11-2.1-.93.49.65,1.39-2.58.39-1.09-1.85.64-1.16-1.85-1.6-2.12,3.07-1.09-.28.14-2.45,1.64-2.21L105.79,310l-.36-1.62-1.74,1.81,1.21.63.06,2.13-2.44-1.37-3.93,3.06.21-5.07.81.59.87-1.64,1.65.66,1.5-1.27-.88-3.65-1.29,1-2.63-.73-1.78,6.52-1.85-2.36.3-1.63-1.45.12.44-1,2.65-1-.3-1.12,1.9-2,3.83-.7-.93,1.3-2,.1,1.86,1.33,2.56-1.37-.94-3.55-1.6.59-1.32-1.05,1.66-1.87-1-2.3,1.31-.59-.57-1.62-.72,1.05-.33-1-1.85.13.09,1.85-2.45.81,1.48,2.42-1.17,2-1-.78,1.63-.46-.81-.64-3.77-.59L91.4,295.7,91,297.82l1.56,1.66,3,.2-3.58,1,1.09,3.07-2.61.3-.24-1.45-2.62-.53-.07-1.81.65.92,1.65-1.42L89,298.7l-1.69.21L86.11,301l-1.29-.6L84,301.84l-1.4-.2.78,2.47-2.62-.62.83,2.05-.84,1.14-1.27.13-.42-1.11-1.29,1.74-1.36-.63-.67.88,1.37,1,2.19-1.32,3.69,2,1.46,9.07,2.3,2.05-1,5.44,1.62,1.17.76,2.35,4.93,2.31.83,2.61-.82,1.12.4,5.11-1.66,2.48.48,3.09,1.41.67,5.38-2.62,4.35,8-1.83.7-.87-.91-.27,1.91,3.89,1.42-.9,4.92-3,2.93L99,367.59l-3.35.72L94.48,370l-1.61-4.38-.74,1.07-.7-.81L89.71,367l-1.52-.59-4.66-6.27L79.78,358l-3.62,5.39-2.83,1.24-2.76-3,1.8-3.14L67.54,355l.14-1.61-2.56-2.62,2-2,.49-6.12-2.47-4.51-.58-3.69L62.25,332l.08-1.39L70.65,324v-5l3.47-2.35,2.45.1-1.27-1.4,1.45-.87L73.62,313l.64-1.27L72,310.09l-.48-2.93-1.91-.73L70.84,305,69,302.82l1.78-1.48.89-3,1.53.36L75.43,297l-.61-3.13,1.06-1.75,1.33.67,1.59-1.71,4.87,1,1.41-1.4,2,1.33,1.46-1.61,6.58-1.73.32-2.82-3.32-4.23L96,278.79l.09-.9-1.2-.17.63-.68,2.6,1.76-.78-3.48,1.85-.56-.32-2.57,2.73-1.91.75-5,3-2.55-3.11-3.26,3-.9-1.2-2.3,1.93-.12.28-2.09,1.88.08-1-1.94,1.55-1.18.84.87.53-2.25,1.68-.24-.56-1.08.93-.57-2.93-1,.52-3.14,1.56,0,.49-1.57-4-.65.64-2.69L106.23,236l-1.16,0-.34-1.79-.6.47,1.33-2.08-.64-4.23L102,229.65l.52-2-2.27-.95-2,.5-2.75-3.48-2.31.06-1.3-1.61L91,223l-.39-1.19-2.89,1.77-4.79.66L77,221.91l-1.28-2-1.85.42-2-2.83-3.55.59-1.09,2.47-2.62-.87h0l-1-3,1.82.34,1.83-2.34L64.92,213l-.54.87L59.55,213l-.5,2.76-3-.6.28,2.33-1.32.8-.79-2.85-3.32.62-2.16-1.42-.5,2-7-2.77-1.77,1.22-.16,2-5.71,2.78-4.31.62-1.16-1.49-.88,3.44.64,1.2-2.31,1.15.82-1.3-1.83,0,.54-2.81L24.19,218l11.63-6.11L40.3,211l1-2-1.46-.5-.22,1.79h-1l-1.55-2.94-2.36,2.07-3.59-1.23.42-2.36-2.27.62-1.18-1.6,4.74-1.6.74-2.61,2.54-.4.94-1.43-1.72-1,.24-1.24-2.69-3.54L34,190.64l-2,1-4-3.15-3.35-1-.86-1.51.74-2.11-1.71-.91-.72-2.22-2.42-.78-.25-2.37,1-1.28-2-1.06,1.6-2.38-.3-2.49-2-1.3.34-4L16.66,164h0l3.26-3.06,3.75,0v-2.14l2.37.63.53-2.75,2.59.06.93-1.5-1.38-.6L30,153.16l-2.88-2.94-.53-2.42.48-1.27.73.58.21-3.59,2.36-1.26-2.58-.2-.16-1.56,1.54.6L29,139.47l1.32-1-3.8-1.27,1.31-.64L28,135l-1.65-1.79L27.88,132l-1-3.21-7-5.54h0l-2.25-3.36,2.17-2.45-1.28-2.08.63-4.15-2,.2L14,107.05l-1.43-.44,1.05-2.34-1.56-1.83h0l-.26-1.35,2-.83-1.6-3,1.24-2.93L8.77,88.48,9.69,84l-.76-2.5,1-1.08-.75-1.73L10.41,75l-1.75-.83-.15-1.58L10,71.86,9,70.64l.7-1.85-2.8-5.36,1.27-1.14L6.9,59.48l3-6.18L8.51,49.48l1.82-1.32,1.42-6.65L16,35.86l.37-2.73,7.4-3.47L22.93,29,24.25,26l2.55-1.19,2.75-5.54,2.23-1.71,1.12-3.53L32,13.26h0Z"/>',
        banner: 'up.jpg'
    },
    {
        key: 'West Bengal',
        value: 'WB',
        path: '<path d="M241.26,394.06l1.8,1.71.32,2.23-3.14-.86Zm21.56-.51,4.41,3.52-3.89.13Zm-7.11-1.32,1.8,1.68-1,2.08-1.84-1.54,1.05-2.22Zm-11.92-.83,3.22,2.51-2.4,2.62-2.56-2.64.92-3.49Zm15-1,1.67,4.21-2.94,1,1-1.68-1.58-1.82Zm12.41.8,1.21,1.37-1.84.26-.26-3.42.88,1.79Zm-23.85-2.5,0,4.1-2.48-1.53,2.52-2.57Zm25.05-1.9.4,2.85,1.38,1.15,1.05,2.91-1.84.21v-1.79l-1.73-1.58-1.41-3.41,2.16-.34Zm-11.5.61-.5,2.85-2.5-1.48,3-1.37Zm-31.59-.65,2.24,1.21.77,2.82-2.74,2.7Zm9.15-.21,1.06,2.49-1.47,3.22-.91-3.52Zm-16-.8.77,1.41-.74,1.25,1,1.1.19,1.62-.75,2.79-2-5.87,1.48-2.3Zm54.69-.05,2.29,5.33-2.78,1.81-3.37-4.28.69-1.7,3.17-1.16Zm-32.65.32,1.71-.37,1,2.16-3,2.94L242.61,387Zm21.37-1.92,3.67,3.42-1.25,4.31-3.06-4.26.64-3.47Zm-30.11.95,1,2-1.12,3,1.34,2.14-2.14,2.18-1.21-5.83,1.53-2.46-1.6-1,1.05-1.59Zm-12.47-1.27,3.17.52,2.14,4.78-.9,4.69L229,395.4l-1.81,1.44-2.18-.61-1.68-12.44Zm45.83-.58,2.49,2.75-2.76-.55Zm-36,.1-.39,2.37L234,387l-1.49,1.15-.69-4.3,1.38-.53Zm41.08-.14,2.4,1.85-1.57.85-.83-2.7Zm-11.43.09,1.95-.07-1.67,3.54,1.32,4.8-1,.67-2.26-.81.4-4.87L259,387l1.36-2.85Zm-16.16-1.38,2.41,3.29-.81,2.3-2-4Zm25.37-.33,2.34,3.9-.71.66-3.44-3.61ZM248.43,381l.6,2.87-1.12-.95-.65-1.47Zm-9,.09-.08,3.55-2.1,1.32.27-3.43,1.91-1.44Zm15.85-1.26,2.75,3.3-.42,1.89.88.41-.23,2.25-2.16.45,1.21,1.91-3.9-1.35.51-4.51,1.36-4.35Zm-11-.2,1.77,1.54,0,3.58-3.4,1.12-1-3.53,2.58-2.71Zm-7.86,0,1.34.76-1.33,4.05-1.56-3,1.55-1.85Zm37,0,1.08,0,.41,3.22L272.77,381l.6-1.47Zm-11,.52.14,2.56L260,383.78l2-5Zm7.25-3L271.9,379l-.77,2.21L268,382.4l-.81-2.77Zm-22.34-.19.94,1.35-.24,2.14-1.73-1.23,1-2.26Zm-16.61.36,1.43,3.49,1.6.45-.2,1.35-2.18.54-.49,2.45L228.5,385l-1.22-4.72,3.42-3Zm33.49-1.41,1.35.93,2.21,7.89-4.35-3.59Zm-46-.66,2.27,4.31-.11,4.77-1.75,4.3.73,2-2.92,1.65-4.32-1.6-.31-1.76,2.31-7.2,4.1-6.5ZM260,376.63l2.2-2.44,1.15,1.24L260.13,380l-.5-2.46.38-.95Zm12-2.68,3.2,1.9-.82,2.83-3.83-1.36,1.46-3.37Zm-22.86-.29,2,2-.94,5.7L247.84,376Zm-3.79,0,.82,1.31-1.29,3.66-1.05-1.55,1.52-3.42Zm-7.42-.51,2.28,1.17.52,2.15-2.7,2.82-2.86-.1,1.35-5.3Zm17.2.35,2.11.25,2.07,2.51-1.46,5.37-3.91-3.9Zm-4.82-1.5,1.76.69-1.28,1.64Zm12.58.26,5-.71,3.31,1.86-.86,1.48-3.15,2.48-4.33-5.11Zm-7.23-1,4.86.84.55,2.42L260,375.92l-1.22-2.49-3.32-.56.3-1.56Zm1.4-3.28.34,1.71,2,.4.63.89-3.16-.22-1.19-2.36,1.39-.42Zm-5.46-2.7,3.56,1.27-2.4,4-3.17-1Zm-33.19-.5L215,371.26l-2.58,1.45,1.67-5.74,4.35-2.14Zm43,.48,5.74.53-.37,5.11-2.62.62L258,368.8l.88-3,2.58-.5Zm14.61-2,2.36,4.22-.94,3.6-2,.57-3.4-6.49.36-2.36,3.58.46Zm-10.91-2.09,1.05,3.12-5.77-.86Zm-1.86-1.69.86,1.09-4.06,1.15-.65,1.54-1.52-.44,1.67-3.58,2.31-.86Zm1-6,3.79,6.93-2.79.17-2.65-2.69,2.7-1.07-2.15-3.67,1.1.33Zm6.32.57,1.88,2.34-1.28,3.92-2.57,1.86,0,2.77,1.42,1.66-.73-3.78,1.85-.13.57,4.75,3.12,4.54-.56,1.34L269.32,371l-1.51-4-.72-4.86,1.87-2.25L266.61,355l1.65.59,2.28-1.49Zm3-1.12,3.11,4.71-.82,4.48-4.48-.48,1.87-4.51-1.55-3.81Zm-19.71,0,6.1,2-6.78,6.05,3.38,3.45-.6,1.51-4.17-1.46L250,359.35l3.82-6.36Zm10.11,3.37L259.17,359l-2.46,3.72-1-.09-1.27-1.41,7-6.52,1.34-.29Zm6.12-5.18.9,1.92L269,354.49l-.45-1.26.13-1.47,1.35-.58Zm-8.63-4,.83,2.89-1.74,1.06,1.52,2.68-2.06.43-2.64-1.86.27-1.62,3.82-3.58Zm1.83-4.28,3.22.18,1.25,2.56,1.65.46.49,4.13-2.63,1.09.69,3.3-6.51-3.32,1.43-.79-.95-6.11,1.36-1.5Zm9.18-2.53-.07,3.93,2.54,1.91L273,347l4.67,6,.11,3.5,1.76-.52-2.2,1.83-2.69-5.31-3-.28-1.13-3.31,1.1-9.82.81,1.25Zm-5.82-10.53-.09,4.83,1.87,4.4-2.15,1.58-1.59-8.76,2-2.05Zm2.59-1.65,1.65.74,2.47,8.15-2.5,1.35-1.13,6.93-2.21-1.78v-2.86l1.67-1.34-1.76-4.86.09-5.69,1.73-.64ZM210.5,1.25l3.71,1.29.7,4.24,3.25,1.76,3.78-1.38,2.35,1.17,4.61-.63,1.24,1.69,6.91,1.67,6.27-4.9-.58-2,2.44-.76,3.85.07,2.39,1.82L253.21,4l2.56,3,1.74-.69h0l7.57,2.82.32,11.23,2.82-3.19,2.22,2L269.55,21,271,22.31l4-1.16,1.37,2.62,2.81.69.75,4.11,1.85,2,8-.63,7.78-3.53.89,1.81,3.72.51.64,2,6.38-.66,4,2.75,1.47-.29.62,1.25-2.62,2.52,1.2.63,1.69.06,1-1.56,3.36,1.28,1.94-1L323,38.32l2.09-1.1,3.19.8h0l1.24,3.87-1.23,1.86,1.31,2.78-1,.46L328,53.4l1.15,2-2.78,4.5,1.25-.44.67,1.3L323.44,63l-.08,1.59-1.94.67.52,2.28-2.61-1.16,1.26,2.46-.79.9-1.3-.82L320,71.12l-2,1.49,2.22.35-2.38,1.65,2.52,1-1,.63h0l-1.25-.16-1.46-2.34-.2-1.23-2.28-.64,1.47,3.7-2.62-.18-.39,1.75-1.2-.26,2.45,2.7-2.33,1.28,1.05.88,1.26-1.31,1.28,3.07-4.56,2.79-.07,4-2.35-.17-.08-2.47-6.64-.22-.58-2.63-2,2.75L296,87.26l-4.44-2.73.13-1.2-1.5.15.68-2-2.69-2.2-4.34-1.14-1.4-2.93.41-3.92L280.35,68l2.3-2.73-3.41-.08,1-1.21L279,62l.43-2.35-3.36.09-4.91-4.63-.83,2.41-1.13-.51-1.44,1.73.56,3,2.79.29.31.82,1.47.15,1,1.67-1,1.7,2.66,1.36,2-.6.29,2.75-6.35,1-2.28-3.32-3-.23-1.29,1,1.08,2.74-2.45.33-1.76-1.81.15-2.91-1.45-.89-2.39.9L257.37,63l-2.87,1.34L253.05,61l1.34-.58-5-3.34-.24-2.53-1.63,0,.11,1.59-2.55-.53.25-2.28-2.2.51-2.6-4.24-3.24-.39L236,43l-2.42,2.89-2.72,8.24,1.33,2.27.75-2.94,7.4,1.85L243,62.48l-2.42.76-1.86-1.74-1.27,2.6-2,.48.59,1L231.94,68l.05,4.37-6.57,2.18L221,77.68l-1.25,4.8,1.56.53-.78,2.67.9.62-2.76.87-3.66,7,1.38,1.62.56,6.57,2.21,1.61,2.22-1.76,1.42.94,3.93-1.61.11,2,6.84,4.76,1.83,3,3.17.63-.66,4.48,3.43,1.11-.22,1.66,5.21,3.68,2-.54L251,125l3.13.49.78-1.91,3.71.34-.39-2.05,3,.11,1.83,3.54-1.42,4.33,1.8,1.14-.08,2.08,2.87,2.81,1.14-.92,1.23,2.25,5.48.79-3.5,2.33.14,2.79-1.53.1.8,2.4-1.56,1.19-5-3.1-2.63,2.74-2-1.32-1.34.93-2.74-2.23-5.89.24-3.28,2-4.23-2.39L238,144.71l1.07,3.82-1.27,1.11.64,3.3-1,2,1.1,1-3.6,4.66.26,1.65-3.83.47-1,2,1.38,1.29-1.46,1.85-3.05-2.1-.88,1.42v-3L224,161.36,218.37,163l2.3,5.27-1.79.76-.73,3.15-.88-1.15-1.06,3-2.26.7-.37,3.37-3.47,3.83,8.78,11.27,3.34,3.15,4.81,1.53,3.7,3.88,7.38.43,5.14,2.29,1.69,3.33.83-2.1,1.16,0,2.79,1.39,4.65-.32,2.06,2.48-.17,5.43-2.08,2.19.68,3.28-1,.39.33,1.29,1.65-.07.1,7.07,2-1,.79,1.63-2.3.46-.22,4.53h-1.89l-2.78,3.12-5.28.58,1.64,3-2.69,2.18,1.22,1.39-1.09,8.57,2,.38-.74,2.49,4.1-.51.91,3.85,5.36,5,3.56-1-.49,3.71-1.64-.1-.5,1.65.31,4-1.84,1.07.8,2.53-3.11.92,1.46,3,4.89,2.57,1.11-.07.24-2.38,2.24,1.82,3.88-.37.36,1.5,4.84-.28-.82,2.15-1.31-.59-2.6,4.41-3.25,2.08.21,6.34-1.7.13,1.35.89-.41,2.37,2.17.32,1.18,2.21-.29,2.85H270l1.37,2.41-.58,3.34-2.51,2.24,2.57,4.9-1.71,5,1.6.55-1.28,2.81-4.4,1.66-1.67,2.62,1,1.83-.77,6.39,1.93,2.28-3.67-.58-1.22,5.22-3.73,3.39-.33,2.22-3.49-.26-4,6.94,1.11,4.36-2.43,4.85.51,4.23-1.83,1.59-.35-1.2-2.05.23-.8,3.48L241.05,375l2-3.5-6.77,1.62-1.42,1.46-.44,5.91-1.71.08-.67-4.07-2.54.68L226,379.86l.88,3.55-3.55-.59-3.45-7.88.89-3.2-1.51-2.27,3.47-4.34,1-3.63-1.34-6.29L220,353l-6.14-.89,2.26-6.38-3.57,5.82-4.12-1.76-1.67-2.68-.79-8.35-1.47-2-2.54-.45,3.75,5.17-.15,7.3,4.4,4L218.1,354l3.41,5.88-8.11,5.9-.58.2-4.65,10.46-3.27,3.92-2.52.48-6.4,6.74-2.33-.32-4.07,2.89-13.29,3.34h0l-1.5-2.48.78-4.26-1.78-1.5,0-2.18-4.7.06L168,381.36l-5.74-1.93-1.77-9.63-4.31-1.3-.58,2.94L151.44,373l.07,3.26-4.13-.34L145.32,373l2.33-5.6-1.07-3.58L142.71,361l-8-.8-2.67-4-4.78.72.46-4.93h0l2.84.26.57-.16h1.54l.63-1.68.13-1.78.28,1,4.44-.19,0-2.89-3.64-2.1.94-4.91-5.23-2L129.16,334l2.81.08.6-1.68-2.48-5.07-6.92-.23L121,320.37l-5-3.26-2.09,1.32-5.79-5.17,1.07-5.8,1.93-2.49-1.93-1.85,2.4-1.8.91,1.05,2.16-.7,1.41-3-1.8,1.46-.95-1.64-5.19-.34-1.48,1.43-6.07-2.7-5.49,1.48-4-3.39-.86-2.92-5.67-1.77-.71-2.41-7.8,1-3.68-4.48-1.65-.06-.34-4.71,3.31-4.2-.75-2.85,1.88-.39-2.1-2.73.2-4.18,5,1.08,6.61-2.71-2.33-4,2.31-2.24,6.26,1.12,0,6.57,4.83,1.19,1.13-1-.9,2.36L97,268.78l2.26-1.5,1.37,1.47.92-.58-.91-1.07,4.6-2.7-1.17-1,.27-3.23,1.47-2.87,3.76-1.72V254.2l5.68,0,4-2.93,6.54-1.62,2.42.05.41,1.12,3.45-.67,1.78-5.13-1.72-4.89,1.78,1.4,3.23-2.29.26-1.26,1.26-1.22,2.65,2.44,2-1.43,10.07,4.89,1.57.05L156.1,241l-2.27-3.3,4.14.89-.45.93,1.92.7,1.54.32.35-5.62,1.42,2.37,1.55-1.79-.18-4-1.94-.73-1.5-5.23,6,.71-1.09,1.85.8.59,1.84-.92,6.49,1.93-1.55-1.87,3.13-.37,1.78-1.82-1.24-.85.16-4.41,5.28,2.09-.45-1.5,2.46-1.54-2.44-1.86,7.69.4.19-2.53-3.51-1.77-.13-2.16,2.92-.28,1.85-3.18,2.94-.81,3.44-7.19-1.61-.55,2.44-5.59-1-1.13-.74,1.37.72-3.79-2.36-2.56,5,2.15,2.5-.82,1.45-2.17-2.38-1.19,1.84-.13-1.09-1,1.85-2.23-1.71-1.09.9-3.32-3.9-1.17-1.39-1.95,1.25-1.53-.15,1.72,1.23-.07,1.42-2.06-.58-2.05,2-.11-.6-2,5.4-3.05-.44-2.33-5.73-6.91-6.43-4.44.71-9.09h0l3.14,1.5-.89-2.47,2.16-3.05-4.64-3.85.31-2.8-1.48-.41L194,130l1.42-2.79,1.75.74,1.61-2.14,1.89-.06,1-3.57L203,123l1.73-2.25,3.84.8,0,1.57,1.13.6.2-1.15,1.29,1.71,2.74.4.15-1.65-2.37-2.32-.94-3.54,2.13-3.24-1.2-.28.83-3.8-5.61-2.4-1.83-3.3-2.17.11.77-3.19-1.73-1,1.76-1.64-5.63-1.39-1.22-2.88,1.67-1.65.78-7.72,4.53-3.29L205,83.13l.44-1.1,1.93.22-.26-5,3.14.78,1.56-2.61,2.07.15,4.78-5.47,4.46-2,5-5.13L226.55,61l-1.91.41-.46-1.32,2.39-2-2.48-1.8-.18-2.07-2.08.31-.94-1.33,3.47-3-.13-1.39-4,1-1.46,1.87L216.22,50h0v0h0l0-.24h0l3.68-6.89,1.76-9.63-.92-6.68-2.38-2.37.62-1.57-1.64-2.12.93-2.51-2.72-1.34-1-2.22L212,14.32,211,10.67,209.06,9.4l1.78-4.69-.34-3.46Z"/>',
        banner: 'wb.jpg'
    }
];
var territoriesData = [
    {
        key: 'Andaman and Nicobar',
        value: 'AN',
        path: '<path d="M248.23,365.29l-.1,1.22,2,.8.27,6.44,3.3,4.81-1.86-.06,1.73,2.43-1.5.49-1.15,2.46.27,4.9-1.07,1.11-1.74-1.28L247.07,392l-1.21-.56.59-2.84-1.59-.82-.32-3.25-2.13-1.91.18-2-2.82-2.92-1.69.46-.32-5.1,1-.71-1.05-.71,1.68-3.55,2.6.15,1.48-1.5,2.31.72.24-1.77,2.25-.37Zm-7.41-11.19,2.35,4.61-5.9,6.46-1.5-3.62.63-3.43,4.47-1.22-.05-2.79Zm-18.29-32,1.63,1,.14,2.48,1-.32,1.92,2.08-.19,3.18-2.14-1.92-3.63,1-.76-1.65.85-1.26-2.24.45.51-3.8,2.93-1.23Zm9.19-.18,1.95,2-.29,3.49-3.86-3.11,1.38-2.22,1,1.59-.19-1.76Zm1.72-5.35.76,4.82L232.49,317l.95-.4Zm-2.86-5.85,1,1.85-2.32,2.73,2.49,3.3.1,2.88-1.08-.71-1.22.83-.41,2-.85-2.6,1.11.21.3-1.53.39,1.18.64-1.75-2.46,1.48.24-2.19-1.64-1.69-.3-2.83,4-3.18Zm-16-1.89.23,2.47L213.76,310Zm-6-5,.94.51-.93,3.87,4.3,3.35-.29,1.19-4.18-1.48-2-2.68.41-3.84,1.73-.92Zm-4.52-6.48.74,1.88-1.22-.52Zm31.41-5.53,1.45,5.79-.86.08-.21,2.51Zm-45.48-37,2,2.67,1.66-.71-1.59.92.27,3-2.25,1.21-3.17-.41-.6-4.93,2.52-.1.39-2.25Zm-14.93-91.61.8,1.79.09-1.09,1.45,1.2.11,3.45,1.5.79.49,6L176.41,179l1.61,1.88-3.09,3.73-4.31-2-2.71.89,1.94-4.58L167.63,176l-.23-6.34,1.18,1.18,3.26-5.61,2.34-1.63.61,1.2.29-1.58Zm6.9-34.07,2.43,4.09-2,1.64,2.43,1.11-.15.95-4.88,1.34-1.14-1.14.32-1.88,2-.28-.51-3.83,1.53-2Zm-2.43-1.75-.75.4.49-2.39Zm-20.77-2.83,2.85.46,0,3.43-3-.39ZM176.4,124l1.63.81-2.16,1.93.53-2.74Zm26.41-13.37,2.82.43-1.22,1.3-1.88-.9ZM200,100l.71-.55,1.48,1.37,2.44,6.45-.62,1.17-2.32-3.79-1.43.1-2.68-2.64,2.17-3,.25.9Zm1.08-3.87.19,3.31-1.7-1.59-.12-1.9Zm2.11-3,1,6.23-2.12-1.7V95.87l-2.83-2,1.61-.33,1.11,1.5,1.24-2Zm2.25-3,1.45,3.84-1.12,3.29-2.06-2.78Zm-20.2-1.35.16,3.91,2.54-.4-1.53,5.37,3.37,1.65-1.18,1.47-1.25-1.14-.14,1.4,1.76.94L186.24,104l.29,6.19,1.23-4.55,2.07-.22.22,1.94-1.8,11.09-.67-.59-.15,1.26-2.14-.94.35,2.06-2.31.9.41,1.6.77-.86.38,1,1.94-2-.46-1.51,1.92,1.16L185.81,131l-.71-1.66-2.83-.83,0-2.8-1.61.53-.53-3.17,1.53.23.46-1.15-.69-.82-1.31.92-1.09-4.65-1.44,1.31-.85-7.84-1.29.53-.52-1.25,2.69-5.49,1.33,3.29.82-.54.14,2.17.38-.73L181,96.12l4.24-7.41Zm2,1,1,0-.32,1.91-1.38-.23.73-1.64Zm9.06-2.11.65,1.83-1.2-.6L195.46,90,195,88.38l1.24-.81Zm9.67-.34.49,1.38,1.06-1.28-.29,3.14-2-1.41Zm-7.49-1L197.39,89l-1.13-3.2,1.39.43.42-1.68.38,1.66Zm-9-1.65,3.35,1,1.58-.71L195.59,87l-1.67,1.13L195.1,91l-1.86-.15.23,2.23-1.55-.43-1.12,1.93.57,1.33-2.63,2.44-1.4-1.75L189,88.64l-1.52-.49.45-1.58.78.56.94-1.19-.28-1.41ZM247.77,84l2,1.83.29,2.87-3-.46-.65-2.26,1.36-2ZM199.22,78.7,198,81.79l-.71-.29.62-2.82ZM185.8,55.54l.37,6.16-1.28-4.4Zm10.32-4.86,1.26.2-.93,1.53,1.26.07,1.44,4.29-1.1,1.86,2.55,3.58L199.36,66l.57,8.15-2,.9-.06.83,1.48-.11L197,77.08,197,79.2,192.34,78l3.55,6-3.43,1-3.34-1-.92,1.34-1.89-.26-1.15-1.57.44-15-1.26-.63,1.08,0,2.7-3.54-1.38-1.25,1-1.64-1.22-5.85.77.94,4.06-5.06L193,52.89h0l1.65-.39h0l1.43-1.82ZM185,46.42l1.33.76.09,5-1.12,2.64-1.42.3.75,1.07-1.15,1.91-1.1-4.4,1.18-5.63L185,46.42ZM202,46.14l-1.5,1.68.19,1.81L199,49.3l.43-2.71.68,1.1,1.9-1.55Zm1.24-32.31.86,2.69-.57,5.05.58,1.76.89-1,.52.84-.86,1.34,1.94,2.6L205.28,29l-1.81-2.37-1.62-.45-.93,1.37L200,25.78,199,26.7,202.19,28l.16,2.43,1.85-.3,0,1.28,1.15-.75L203.43,36l.15,5.49-1.7,2.93L199.79,44l.49,1.24-2.2-2.69-1,.38-.8,1.81,2,2.83L196.85,49l-.29-2.15-1.36.13L193.67,50l1,2.48h0L193,52.9h0l-2.68-2.14v-4l1.33-.07.37-1.45L190,45l.46-4,1.4-.39-.67-1.71,2.06-.68-2.07-.78,1-4.69,1.46-1.15-1.75-1.12L193,29.06l-1.13-.44,1-3.65,1.51-.6-1.31-.94h1.36l.9-1.54-.69-2.34,3.17-1.7-.65-1.94,2.59-.46,1.33.94L201,13.84l1.22,1.75,1.06-1.76Zm-.75-5.77.66,2.76-2.8-1.58,2.14-1.18ZM236.89-61l-1.62,3.78,0-2.15Z"/>',
        banner: 'an.jpg'
    },
    {
        key: 'Chandigarh',
        value: 'CH',
        path: '<path d="M345.67,333.12,283.74,379.6,118.17,304.77,31.49,124.21,198.57,14.41l24.17,62.05L288,51.83,280.72,106,366,113.64h0Z"/>',
        banner: 'ch.jpg'
    },
    {
        key: 'Dadra \n& Nagar Haveli',
        value: 'DNH',
        path: '<path d="M364.84,305.47l-35.95,86.39-54.73-39.28L181,334.08l-9.25,39.27-50.34-53.44L130,289.22,96.64,316.41l-19-22L93.6,243.79,74.41,192.45h0L20.3,109.39,45.52,90.94l45,27.19,7.5-25.56L133.55,94l-.79-33.12,28.77,32.89L169,53.92l47.74-4.8L236.19,6.69l6.49,69.8L300,61.2l20.6,38.43-24.38-5L239.8,167.68l-39.67,2.87,6.6,91.64,13-21.67,37.12,21.56,29.74-20.2-5.13-42.72,75.78,12L379,232.73,340.8,283Z"/>',
        banner: 'dnh.jpg'
    },
    {
        key: 'Daman \nand Diu',
        value: 'DD',
        path: '<path d="M62,299.41l6.29-102.6L143.23,10.86,178.38,48l89.69-12.23,49,32.24L333,143.71l-99.69,43.95,94.83,33.62-2.8,38.35-31.67-.46-.11,38.7-26.87.69L319,367.72h0l-21.67-11.37,4,17.94-61.5,17.27Z"/>',
        banner: 'dd.jpg'
    },
    {
        key: 'Delhi',
        value: 'DL',
        path: '<path d="M271.68,20.48,293.33,46,278.82,78.3l19.75,6.19,42.87,60.68,27.43-2.75-8.74,57.52,17.78,28.83-30.15,34L379,309.27h0l-67.65,19.64-12,16.59,10.6,28.29-53.27,16.42-33.79-27.33-7.55-41.44-25.05-21.29-16.86,4.08L143,282l-.38,22.84-26.38-10.57L52.85,309.2,23.14,270.58l-1.87-27.74,14.11-.75,16.45-36.51,39.81,0L80,189.74l26.38-38.82L97.62,57.77l63.5-13L192.64,6.16l37.53,15.47,7.58,19.18Z"/>',
        banner: 'dl.jpg'
    },
    {
        key: 'Lakshadweep',
        value: 'LKD',
        path: '<path d="M175.27,258.6l-1.49,14.84-13.87,12.64-13.92.16-10-3.31-.41-4.11,4.32,3.34,13.43-.92,11.49-5.77,10.44-16.87Zm85.1-33.46-13,27.05-21.84,3.42L202.7,243.27l19.79.7,14.84-5.26,23-13.57ZM114.64,235.73l.47,1.11-.71-.19Zm170-26,14.84,11.68-10.92,9.77-3.92-21.46ZM181.84,190.24l10,5.3L191.41,206,145,227.24l36.85-37Zm95.09-43.74L257,172.88l59-9.94-65.77,42-17.56-9.48L231.82,173l45.11-26.5ZM93.29,259.71l11.46-22.57,3.68-16.39,4.48-5.32,4.07.22Zm21.22-96.62-2.14,1.7,1.94,5.75-4.68.65,1-7.23Zm24.66-5.53-9.12,7.63,1-4Zm22,17.09,1.72,4.23-15.82,8.71-6.14-3.1,1.07-4.23Zm-73.8-42.21.17.24-.51-.16Zm140.09-1.6-14.75,21.51-20.89,18.83,20.59-30.79Zm-40,29.54,3,2.86.83,4.28-1.3,1.06-1.93-6.47-1.66-1.05Zm-63.64-13.61,3.37,3.08-5-.8Zm57.91-49,8.42,23.39-38.9,18.79Z"/>',
        banner: 'lkd.jpg'
    },
    {
        key: 'Puducherry',
        value: 'PD',
        path: '<path d="M318.85,395.92,282,337.1l-58.65,29.15-4.63-66.54-91.1,41L39,290.25l47.2-72,64.42,54.83,18.82-30.54L132,174,76.88,159.52,118.22,94.1,10,67.82,78.58,7l53.07,77.3,57.14-31.23L224.26,80.4l-73,22.2,42,111.05L314,109.72l78.71,42.43h0L318.86,395.93Z"/>',
        banner: 'pd.jpg'
    }
];
var gradeData = {
    Grade1: ["Chandigarh", "Kerala", "Gujarat"],
    Grade2: ["Haryana", "Tamil Nadu", "Punjab", "Rajasthan"],
    Grade3: ["Delhi", "Dadra \n& Nagar Haveli", "Himachal Pradesh", "Odisha", "Chhattisgarh", "Andhra Pradesh", "Goa", "Madhya Pradesh", "Assam", "Karnataka", "Uttarakhand"],
    Grade4: ['Maharashtra', 'Puducherry', 'Sikkim', 'Mizoram', 'Telangana', 'Daman \nand Diu'],
    Grade5: ['Jharkhand', 'Andaman and Nicobar', 'Jammu \n and Kashmir', 'Tripura', 'Lakshadweep', 'West Bengal', 'Bihar', 'Manipur', 'Uttar Pradesh'],
    Grade6: ['Meghalaya', 'Nagaland', 'Arunachal Pradesh']
};
var Domain1 = [
    {
        "Serial": "1.1.1",
        "Indicator": "% of Elementary schools which have displayed class wise Learning Outcomess",
        "Data Source": "Shagun",
        "Value": "95.03",
        "Weight": "20",
        "Andaman and Nicobar": "20",
        "Andhra Pradesh": "20",
        "Arunachal Pradesh": "20",
        "Assam": "20",
        "Bihar": "8",
        "Chandigarh": "20",
        "Chhattisgarh": "20",
        "Daman \nand Diu": "20",
        "Dadra \n& Nagar Haveli": "20",
        "Delhi": "20",
        "Goa": "20",
        "Gujarat": "20",
        "Haryana": "20",
        "Himachal Pradesh": "20",
        "Jammu \n and Kashmir": "20",
        "Jharkhand": "18",
        "Karnataka": "20",
        "Kerala": "20",
        "Lakshadweep": "20",
        "Madhya Pradesh": "20",
        "Maharashtra": "20",
        "Manipur": "16",
        "Meghalaya": "20",
        "Mizoram": "20",
        "Nagaland": "20",
        "Odisha": "16",
        "Puducherry": "20",
        "Punjab": "20",
        "Rajasthan": "20",
        "Sikkim": "18",
        "Tamil Nadu": "20",
        "Telangana": "20",
        "Tripura": "8",
        "Uttar Pradesh": "20",
        "Uttarakhand": "20",
        "West Bengal": "0"
    },
    {
        "Serial": "1.1.2",
        "Indicator": "Average Language score in Class 3 - Govt and aided schools",
        "Data Source": "NAS",
        "Value": "62",
        "Weight": "20",
        "Andaman and Nicobar": "18",
        "Andhra Pradesh": "20",
        "Arunachal Pradesh": "14",
        "Assam": "20",
        "Bihar": "18",
        "Chandigarh": "20",
        "Chhattisgarh": "18",
        "Daman \nand Diu": "18",
        "Dadra \n& Nagar Haveli": "20",
        "Delhi": "16",
        "Goa": "18",
        "Gujarat": "20",
        "Haryana": "18",
        "Himachal Pradesh": "20",
        "Jammu \n and Kashmir": "18",
        "Jharkhand": "20",
        "Karnataka": "20",
        "Kerala": "20",
        "Lakshadweep": "16",
        "Madhya Pradesh": "20",
        "Maharashtra": "20",
        "Manipur": "20",
        "Meghalaya": "18",
        "Mizoram": "20",
        "Nagaland": "18",
        "Odisha": "18",
        "Puducherry": "16",
        "Punjab": "18",
        "Rajasthan": "20",
        "Sikkim": "16",
        "Tamil Nadu": "18",
        "Telangana": "20",
        "Tripura": "18",
        "Uttar Pradesh": "16",
        "Uttarakhand": "20",
        "West Bengal": "20"
    },
    {
        "Serial": "1.1.3",
        "Indicator": "Average Mathematics score in Class 3 - Govt and aided schools",
        "Data Source": "NAS",
        "Value": "62",
        "Weight": "20",
        "Andaman and Nicobar": "18",
        "Andhra Pradesh": "20",
        "Arunachal Pradesh": "14",
        "Assam": "20",
        "Bihar": "18",
        "Chandigarh": "20",
        "Chhattisgarh": "16",
        "Daman \nand Diu": "16",
        "Dadra \n& Nagar Haveli": "18",
        "Delhi": "16",
        "Goa": "16",
        "Gujarat": "18",
        "Haryana": "16",
        "Himachal Pradesh": "18",
        "Jammu \n and Kashmir": "18",
        "Jharkhand": "18",
        "Karnataka": "20",
        "Kerala": "20",
        "Lakshadweep": "16",
        "Madhya Pradesh": "18",
        "Maharashtra": "18",
        "Manipur": "20",
        "Meghalaya": "16",
        "Mizoram": "18",
        "Nagaland": "18",
        "Odisha": "18",
        "Puducherry": "18",
        "Punjab": "16",
        "Rajasthan": "20",
        "Sikkim": "16",
        "Tamil Nadu": "18",
        "Telangana": "20",
        "Tripura": "18",
        "Uttar Pradesh": "16",
        "Uttarakhand": "18",
        "West Bengal": "20"
    },
    {
        "Serial": "1.1.4",
        "Indicator": "Average Language score in Class 5 - Govt and aided schools",
        "Data Source": "NAS",
        "Value": "53",
        "Weight": "20",
        "Andaman and Nicobar": "16",
        "Andhra Pradesh": "18",
        "Arunachal Pradesh": "12",
        "Assam": "16",
        "Bihar": "16",
        "Chandigarh": "20",
        "Chhattisgarh": "16",
        "Daman \nand Diu": "14",
        "Dadra \n& Nagar Haveli": "18",
        "Delhi": "14",
        "Goa": "16",
        "Gujarat": "16",
        "Haryana": "16",
        "Himachal Pradesh": "18",
        "Jammu \n and Kashmir": "16",
        "Jharkhand": "18",
        "Karnataka": "20",
        "Kerala": "20",
        "Lakshadweep": "14",
        "Madhya Pradesh": "16",
        "Maharashtra": "18",
        "Manipur": "16",
        "Meghalaya": "14",
        "Mizoram": "14",
        "Nagaland": "14",
        "Odisha": "14",
        "Puducherry": "14",
        "Punjab": "14",
        "Rajasthan": "20",
        "Sikkim": "14",
        "Tamil Nadu": "16",
        "Telangana": "16",
        "Tripura": "16",
        "Uttar Pradesh": "14",
        "Uttarakhand": "18",
        "West Bengal": "16"
    },
    {
        "Serial": "1.1.5",
        "Indicator": "Average Mathematics score in Class 5 - Govt and aided schools",
        "Data Source": "NAS",
        "Value": "49",
        "Weight": "20",
        "Andaman and Nicobar": "14",
        "Andhra Pradesh": "18",
        "Arunachal Pradesh": "12",
        "Assam": "18",
        "Bihar": "14",
        "Chandigarh": "18",
        "Chhattisgarh": "14",
        "Daman \nand Diu": "12",
        "Dadra \n& Nagar Haveli": "16",
        "Delhi": "12",
        "Goa": "14",
        "Gujarat": "16",
        "Haryana": "14",
        "Himachal Pradesh": "14",
        "Jammu \n and Kashmir": "16",
        "Jharkhand": "16",
        "Karnataka": "18",
        "Kerala": "18",
        "Lakshadweep": "14",
        "Madhya Pradesh": "14",
        "Maharashtra": "14",
        "Manipur": "16",
        "Meghalaya": "12",
        "Mizoram": "12",
        "Nagaland": "14",
        "Odisha": "16",
        "Puducherry": "14",
        "Punjab": "12",
        "Rajasthan": "18",
        "Sikkim": "12",
        "Tamil Nadu": "14",
        "Telangana": "16",
        "Tripura": "14",
        "Uttar Pradesh": "14",
        "Uttarakhand": "16",
        "West Bengal": "14"
    },
    {
        "Serial": "1.1.6",
        "Indicator": "Average Language score in Class 8 - Govt and aided schools",
        "Data Source": "NAS",
        "Value": "50",
        "Weight": "20",
        "Andaman and Nicobar": "14",
        "Andhra Pradesh": "16",
        "Arunachal Pradesh": "12",
        "Assam": "16",
        "Bihar": "16",
        "Chandigarh": "18",
        "Chhattisgarh": "16",
        "Daman \nand Diu": "16",
        "Dadra \n& Nagar Haveli": "16",
        "Delhi": "16",
        "Goa": "16",
        "Gujarat": "18",
        "Haryana": "16",
        "Himachal Pradesh": "16",
        "Jammu \n and Kashmir": "12",
        "Jharkhand": "18",
        "Karnataka": "18",
        "Kerala": "18",
        "Lakshadweep": "14",
        "Madhya Pradesh": "16",
        "Maharashtra": "18",
        "Manipur": "14",
        "Meghalaya": "14",
        "Mizoram": "12",
        "Nagaland": "12",
        "Odisha": "16",
        "Puducherry": "14",
        "Punjab": "16",
        "Rajasthan": "18",
        "Sikkim": "14",
        "Tamil Nadu": "16",
        "Telangana": "16",
        "Tripura": "16",
        "Uttar Pradesh": "16",
        "Uttarakhand": "16",
        "West Bengal": "16"
    },
    {
        "Serial": "1.1.7",
        "Indicator": "Average Mathematics score in Class 8 - Govt and aided schools",
        "Data Source": "NAS",
        "Value": "34",
        "Weight": "20",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "14",
        "Arunachal Pradesh": "10",
        "Assam": "14",
        "Bihar": "12",
        "Chandigarh": "14",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "12",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "14",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "14",
        "Karnataka": "14",
        "Kerala": "14",
        "Lakshadweep": "10",
        "Madhya Pradesh": "12",
        "Maharashtra": "12",
        "Manipur": "12",
        "Meghalaya": "10",
        "Mizoram": "10",
        "Nagaland": "10",
        "Odisha": "12",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "16",
        "Sikkim": "8",
        "Tamil Nadu": "10",
        "Telangana": "10",
        "Tripura": "12",
        "Uttar Pradesh": "12",
        "Uttarakhand": "12",
        "West Bengal": "12"
    },
    {
        "Serial": "1.1.8",
        "Indicator": "Average Science score in Class 8 - Govt and aided schools",
        "Data Source": "NAS",
        "Value": "36",
        "Weight": "20",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "14",
        "Arunachal Pradesh": "10",
        "Assam": "14",
        "Bihar": "12",
        "Chandigarh": "14",
        "Chhattisgarh": "12",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "14",
        "Delhi": "10",
        "Goa": "12",
        "Gujarat": "14",
        "Haryana": "12",
        "Himachal Pradesh": "12",
        "Jammu \n and Kashmir": "12",
        "Jharkhand": "16",
        "Karnataka": "16",
        "Kerala": "12",
        "Lakshadweep": "10",
        "Madhya Pradesh": "12",
        "Maharashtra": "12",
        "Manipur": "12",
        "Meghalaya": "10",
        "Mizoram": "10",
        "Nagaland": "10",
        "Odisha": "12",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "18",
        "Sikkim": "12",
        "Tamil Nadu": "10",
        "Telangana": "12",
        "Tripura": "12",
        "Uttar Pradesh": "12",
        "Uttarakhand": "14",
        "West Bengal": "12"
    },
    {
        "Serial": "1.1.9",
        "Indicator": "Average Social Science score in Class 8- Govt and aided schools",
        "Data Source": "NAS",
        "Value": "36",
        "Weight": "20",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "14",
        "Arunachal Pradesh": "10",
        "Assam": "14",
        "Bihar": "14",
        "Chandigarh": "16",
        "Chhattisgarh": "12",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "16",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "16",
        "Haryana": "12",
        "Himachal Pradesh": "12",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "16",
        "Karnataka": "14",
        "Kerala": "12",
        "Lakshadweep": "8",
        "Madhya Pradesh": "12",
        "Maharashtra": "12",
        "Manipur": "12",
        "Meghalaya": "12",
        "Mizoram": "10",
        "Nagaland": "10",
        "Odisha": "12",
        "Puducherry": "8",
        "Punjab": "10",
        "Rajasthan": "18",
        "Sikkim": "12",
        "Tamil Nadu": "10",
        "Telangana": "12",
        "Tripura": "12",
        "Uttar Pradesh": "12",
        "Uttarakhand": "14",
        "West Bengal": "12"
    },
    {
        "Serial": "",
        "Indicator": "Total",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "130",
        "Andhra Pradesh": "154",
        "Arunachal Pradesh": "114",
        "Assam": "152",
        "Bihar": "128",
        "Chandigarh": "160",
        "Chhattisgarh": "134",
        "Daman \nand Diu": "126",
        "Dadra \n& Nagar Haveli": "150",
        "Delhi": "124",
        "Goa": "132",
        "Gujarat": "152",
        "Haryana": "134",
        "Himachal Pradesh": "140",
        "Jammu \n and Kashmir": "132",
        "Jharkhand": "154",
        "Karnataka": "160",
        "Kerala": "154",
        "Lakshadweep": "122",
        "Madhya Pradesh": "140",
        "Maharashtra": "144",
        "Manipur": "138",
        "Meghalaya": "126",
        "Mizoram": "126",
        "Nagaland": "126",
        "Odisha": "134",
        "Puducherry": "124",
        "Punjab": "126",
        "Rajasthan": "168",
        "Sikkim": "122",
        "Tamil Nadu": "132",
        "Telangana": "142",
        "Tripura": "126",
        "Uttar Pradesh": "132",
        "Uttarakhand": "148",
        "West Bengal": "122"
    }
];
var Domain2 = [
    {
        "Serial": "1.2.1",
        "Indicator": "Adjusted Net Enrolment Ratio (NER) at elementary level as per entry age of the State/UT",
        "Data Source": "UDISE",
        "Value": "82.16",
        "Weight": "10",
        "Andaman and Nicobar": "9",
        "Andhra Pradesh": "9",
        "Arunachal Pradesh": "10",
        "Assam": "10",
        "Bihar": "10",
        "Chandigarh": "9",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "8",
        "Dadra \n& Nagar Haveli": "9",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "9",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "7",
        "Jharkhand": "9",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "8",
        "Madhya Pradesh": "9",
        "Maharashtra": "10",
        "Manipur": "10",
        "Meghalaya": "10",
        "Mizoram": "10",
        "Nagaland": "8",
        "Odisha": "10",
        "Puducherry": "9",
        "Punjab": "10",
        "Rajasthan": "9",
        "Sikkim": "7",
        "Tamil Nadu": "10",
        "Telangana": "9",
        "Tripura": "10",
        "Uttar Pradesh": "8",
        "Uttarakhand": "9",
        "West Bengal": "9"
    },
    {
        "Serial": "1.2.2",
        "Indicator": "Adjusted Net Enrolment Ratio (NER) at secondary level as per entry age of the State/UT",
        "Data Source": "UDISE",
        "Value": "72.81",
        "Weight": "10",
        "Andaman and Nicobar": "8",
        "Andhra Pradesh": "5",
        "Arunachal Pradesh": "6",
        "Assam": "7",
        "Bihar": "6",
        "Chandigarh": "8",
        "Chhattisgarh": "7",
        "Daman \nand Diu": "6",
        "Dadra \n& Nagar Haveli": "7",
        "Delhi": "9",
        "Goa": "9",
        "Gujarat": "6",
        "Haryana": "7",
        "Himachal Pradesh": "9",
        "Jammu \n and Kashmir": "5",
        "Jharkhand": "5",
        "Karnataka": "8",
        "Kerala": "10",
        "Lakshadweep": "9",
        "Madhya Pradesh": "6",
        "Maharashtra": "7",
        "Manipur": "8",
        "Meghalaya": "4",
        "Mizoram": "6",
        "Nagaland": "4",
        "Odisha": "7",
        "Puducherry": "8",
        "Punjab": "7",
        "Rajasthan": "6",
        "Sikkim": "3",
        "Tamil Nadu": "9",
        "Telangana": "8",
        "Tripura": "9",
        "Uttar Pradesh": "6",
        "Uttarakhand": "7",
        "West Bengal": "6"
    },
    {
        "Serial": "1.2.3",
        "Indicator": "Retention rate at primary level",
        "Data Source": "UDISE",
        "Value": "95.55",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "9",
        "Arunachal Pradesh": "5",
        "Assam": "8",
        "Bihar": "10",
        "Chandigarh": "10",
        "Chhattisgarh": "9",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "8",
        "Jharkhand": "8",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "8",
        "Maharashtra": "10",
        "Manipur": "6",
        "Meghalaya": "6",
        "Mizoram": "6",
        "Nagaland": "6",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "8",
        "Sikkim": "9",
        "Tamil Nadu": "10",
        "Telangana": "9",
        "Tripura": "10",
        "Uttar Pradesh": "8",
        "Uttarakhand": "9",
        "West Bengal": "7"
    },
    {
        "Serial": "1.2.4",
        "Indicator": "Retention rate at elementary level",
        "Data Source": "UDISE",
        "Value": "89.6",
        "Weight": "10",
        "Andaman and Nicobar": "9",
        "Andhra Pradesh": "9",
        "Arunachal Pradesh": "4",
        "Assam": "7",
        "Bihar": "6",
        "Chandigarh": "10",
        "Chhattisgarh": "8",
        "Daman \nand Diu": "9",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "7",
        "Jharkhand": "5",
        "Karnataka": "9",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "7",
        "Maharashtra": "10",
        "Manipur": "6",
        "Meghalaya": "5",
        "Mizoram": "5",
        "Nagaland": "5",
        "Odisha": "8",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "6",
        "Sikkim": "8",
        "Tamil Nadu": "10",
        "Telangana": "7",
        "Tripura": "7",
        "Uttar Pradesh": "7",
        "Uttarakhand": "9",
        "West Bengal": "6"
    },
    {
        "Serial": "1.2.5",
        "Indicator": "Retention rate at secondary level",
        "Data Source": "UDISE",
        "Value": "80.83",
        "Weight": "10",
        "Andaman and Nicobar": "9",
        "Andhra Pradesh": "8",
        "Arunachal Pradesh": "3",
        "Assam": "4",
        "Bihar": "4",
        "Chandigarh": "10",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "7",
        "Delhi": "9",
        "Goa": "10",
        "Gujarat": "7",
        "Haryana": "10",
        "Himachal Pradesh": "9",
        "Jammu \n and Kashmir": "7",
        "Jharkhand": "3",
        "Karnataka": "8",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "4",
        "Maharashtra": "9",
        "Manipur": "4",
        "Meghalaya": "4",
        "Mizoram": "4",
        "Nagaland": "4",
        "Odisha": "7",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "5",
        "Sikkim": "6",
        "Tamil Nadu": "10",
        "Telangana": "7",
        "Tripura": "5",
        "Uttar Pradesh": "6",
        "Uttarakhand": "8",
        "West Bengal": "5"
    },
    {
        "Serial": "1.2.6",
        "Indicator": "Transition rate from primary to upper-primary level",
        "Data Source": "UDISE",
        "Value": "98.22",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "9",
        "Assam": "10",
        "Bihar": "8",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "9",
        "Jharkhand": "8",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "9",
        "Maharashtra": "10",
        "Manipur": "9",
        "Meghalaya": "10",
        "Mizoram": "10",
        "Nagaland": "8",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "10",
        "Tamil Nadu": "10",
        "Telangana": "10",
        "Tripura": "10",
        "Uttar Pradesh": "8",
        "Uttarakhand": "10",
        "West Bengal": "10"
    },
    {
        "Serial": "1.2.7",
        "Indicator": "Transition rate from upper-primary to secondary level",
        "Data Source": "UDISE",
        "Value": "99.89",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "9",
        "Assam": "10",
        "Bihar": "8",
        "Chandigarh": "10",
        "Chhattisgarh": "9",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "9",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "9",
        "Jharkhand": "7",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "9",
        "Maharashtra": "10",
        "Manipur": "9",
        "Meghalaya": "8",
        "Mizoram": "9",
        "Nagaland": "8",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "10",
        "Tamil Nadu": "10",
        "Telangana": "10",
        "Tripura": "10",
        "Uttar Pradesh": "10",
        "Uttarakhand": "10",
        "West Bengal": "10"
    },
    {
        "Serial": "1.2.8",
        "Indicator": "Percentage of identified Out-of-school-children mainstreamed in last completed academic year (Class 1 to 8)",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "10",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "0",
        "Assam": "8",
        "Bihar": "4",
        "Chandigarh": "8",
        "Chhattisgarh": "7",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "4",
        "Goa": "6",
        "Gujarat": "9",
        "Haryana": "8",
        "Himachal Pradesh": "8",
        "Jammu \n and Kashmir": "1",
        "Jharkhand": "8",
        "Karnataka": "4",
        "Kerala": "8",
        "Lakshadweep": "0",
        "Madhya Pradesh": "6",
        "Maharashtra": "10",
        "Manipur": "8",
        "Meghalaya": "3",
        "Mizoram": "7",
        "Nagaland": "0",
        "Odisha": "7",
        "Puducherry": "10",
        "Punjab": "7",
        "Rajasthan": "2",
        "Sikkim": "5",
        "Tamil Nadu": "10",
        "Telangana": "6",
        "Tripura": "6",
        "Uttar Pradesh": "9",
        "Uttarakhand": "10",
        "West Bengal": "0"
    },
    {
        "Serial": "",
        "Indicator": "Total",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "65",
        "Andhra Pradesh": "70",
        "Arunachal Pradesh": "46",
        "Assam": "64",
        "Bihar": "56",
        "Chandigarh": "75",
        "Chhattisgarh": "66",
        "Daman \nand Diu": "73",
        "Dadra \n& Nagar Haveli": "73",
        "Delhi": "72",
        "Goa": "75",
        "Gujarat": "71",
        "Haryana": "74",
        "Himachal Pradesh": "76",
        "Jammu \n and Kashmir": "53",
        "Jharkhand": "53",
        "Karnataka": "69",
        "Kerala": "78",
        "Lakshadweep": "67",
        "Madhya Pradesh": "58",
        "Maharashtra": "76",
        "Manipur": "60",
        "Meghalaya": "50",
        "Mizoram": "57",
        "Nagaland": "43",
        "Odisha": "69",
        "Puducherry": "77",
        "Punjab": "74",
        "Rajasthan": "56",
        "Sikkim": "58",
        "Tamil Nadu": "79",
        "Telangana": "66",
        "Tripura": "67",
        "Uttar Pradesh": "62",
        "Uttarakhand": "72",
        "West Bengal": "53"
    }
];
var Domain3 = [
    {
        "Serial": "1.3.1",
        "Indicator": "Percentage of schools having CAL in Upper Primary Level",
        "Data Source": "UDISE",
        "Value": "20",
        "Weight": "20",
        "Andaman and Nicobar": "4",
        "Andhra Pradesh": "4",
        "Arunachal Pradesh": "4",
        "Assam": "6",
        "Bihar": "2",
        "Chandigarh": "16",
        "Chhattisgarh": "2",
        "Daman \nand Diu": "16",
        "Dadra \n& Nagar Haveli": "8",
        "Delhi": "18",
        "Goa": "14",
        "Gujarat": "16",
        "Haryana": "8",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "2",
        "Jharkhand": "2",
        "Karnataka": "4",
        "Kerala": "16",
        "Lakshadweep": "16",
        "Madhya Pradesh": "4",
        "Maharashtra": "6",
        "Manipur": "8",
        "Meghalaya": "4",
        "Mizoram": "6",
        "Nagaland": "8",
        "Odisha": "4",
        "Puducherry": "18",
        "Punjab": "20",
        "Rajasthan": "6",
        "Sikkim": "6",
        "Tamil Nadu": "10",
        "Telangana": "4",
        "Tripura": "2",
        "Uttar Pradesh": "2",
        "Uttarakhand": "8",
        "West Bengal": "6"
    },
    {
        "Serial": "",
        "Indicator": "Percentage of secondary schools having lab facility",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.3.2",
        "Indicator": "Integrated Science Lab",
        "Data Source": "UDISE",
        "Value": "41.24",
        "Weight": "10",
        "Andaman and Nicobar": "5",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "7",
        "Assam": "3",
        "Bihar": "3",
        "Chandigarh": "9",
        "Chhattisgarh": "7",
        "Daman \nand Diu": "7",
        "Dadra \n& Nagar Haveli": "4",
        "Delhi": "7",
        "Goa": "9",
        "Gujarat": "3",
        "Haryana": "8",
        "Himachal Pradesh": "4",
        "Jammu \n and Kashmir": "5",
        "Jharkhand": "5",
        "Karnataka": "3",
        "Kerala": "5",
        "Lakshadweep": "5",
        "Madhya Pradesh": "5",
        "Maharashtra": "7",
        "Manipur": "6",
        "Meghalaya": "6",
        "Mizoram": "5",
        "Nagaland": "2",
        "Odisha": "3",
        "Puducherry": "6",
        "Punjab": "7",
        "Rajasthan": "3",
        "Sikkim": "6",
        "Tamil Nadu": "5",
        "Telangana": "2",
        "Tripura": "3",
        "Uttar Pradesh": "4",
        "Uttarakhand": "6",
        "West Bengal": "3"
    },
    {
        "Serial": "1.3.3",
        "Indicator": "Computer lab",
        "Data Source": "UDISE",
        "Value": "55.67",
        "Weight": "10",
        "Andaman and Nicobar": "6",
        "Andhra Pradesh": "6",
        "Arunachal Pradesh": "8",
        "Assam": "6",
        "Bihar": "4",
        "Chandigarh": "10",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "9",
        "Dadra \n& Nagar Haveli": "8",
        "Delhi": "8",
        "Goa": "10",
        "Gujarat": "6",
        "Haryana": "6",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "5",
        "Jharkhand": "3",
        "Karnataka": "7",
        "Kerala": "9",
        "Lakshadweep": "9",
        "Madhya Pradesh": "2",
        "Maharashtra": "7",
        "Manipur": "10",
        "Meghalaya": "8",
        "Mizoram": "10",
        "Nagaland": "6",
        "Odisha": "6",
        "Puducherry": "8",
        "Punjab": "5",
        "Rajasthan": "2",
        "Sikkim": "7",
        "Tamil Nadu": "7",
        "Telangana": "5",
        "Tripura": "5",
        "Uttar Pradesh": "6",
        "Uttarakhand": "6",
        "West Bengal": "7"
    },
    {
        "Serial": "1.3.4",
        "Indicator": "% of schools having Book Banks/Reading Rooms/Libraries",
        "Data Source": "UDISE",
        "Value": "96.87",
        "Weight": "20",
        "Andaman and Nicobar": "20",
        "Andhra Pradesh": "20",
        "Arunachal Pradesh": "6",
        "Assam": "14",
        "Bihar": "14",
        "Chandigarh": "20",
        "Chhattisgarh": "20",
        "Daman \nand Diu": "18",
        "Dadra \n& Nagar Haveli": "20",
        "Delhi": "20",
        "Goa": "20",
        "Gujarat": "20",
        "Haryana": "20",
        "Himachal Pradesh": "20",
        "Jammu \n and Kashmir": "14",
        "Jharkhand": "20",
        "Karnataka": "20",
        "Kerala": "20",
        "Lakshadweep": "20",
        "Madhya Pradesh": "18",
        "Maharashtra": "20",
        "Manipur": "6",
        "Meghalaya": "4",
        "Mizoram": "16",
        "Nagaland": "10",
        "Odisha": "20",
        "Puducherry": "20",
        "Punjab": "20",
        "Rajasthan": "16",
        "Sikkim": "12",
        "Tamil Nadu": "20",
        "Telangana": "20",
        "Tripura": "10",
        "Uttar Pradesh": "16",
        "Uttarakhand": "18",
        "West Bengal": "16"
    },
    {
        "Serial": "1.3.5",
        "Indicator": "% of schools covered by vocational education subject",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.3.5.a",
        "Indicator": "Classes 9 & 10",
        "Data Source": "UDISE",
        "Value": "31.48",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "0",
        "Arunachal Pradesh": "1",
        "Assam": "1",
        "Bihar": "0",
        "Chandigarh": "0",
        "Chhattisgarh": "7",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "0",
        "Goa": "8",
        "Gujarat": "0",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "7",
        "Jharkhand": "0",
        "Karnataka": "0",
        "Kerala": "0",
        "Lakshadweep": "0",
        "Madhya Pradesh": "3",
        "Maharashtra": "10",
        "Manipur": "0",
        "Meghalaya": "0",
        "Mizoram": "0",
        "Nagaland": "0",
        "Odisha": "0",
        "Puducherry": "0",
        "Punjab": "7",
        "Rajasthan": "0",
        "Sikkim": "0",
        "Tamil Nadu": "0",
        "Telangana": "0",
        "Tripura": "0",
        "Uttar Pradesh": "0",
        "Uttarakhand": "0",
        "West Bengal": "0"
    },
    {
        "Serial": "1.3.5.b",
        "Indicator": "Classes 11 & 12",
        "Data Source": "UDISE",
        "Value": "1.85",
        "Weight": "10",
        "Andaman and Nicobar": "1",
        "Andhra Pradesh": "0",
        "Arunachal Pradesh": "0",
        "Assam": "3",
        "Bihar": "1",
        "Chandigarh": "10",
        "Chhattisgarh": "4",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "1",
        "Haryana": "5",
        "Himachal Pradesh": "5",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "1",
        "Karnataka": "1",
        "Kerala": "7",
        "Lakshadweep": "0",
        "Madhya Pradesh": "2",
        "Maharashtra": "2",
        "Manipur": "0",
        "Meghalaya": "0",
        "Mizoram": "0",
        "Nagaland": "0",
        "Odisha": "1",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "1",
        "Sikkim": "10",
        "Tamil Nadu": "10",
        "Telangana": "1",
        "Tripura": "0",
        "Uttar Pradesh": "4",
        "Uttarakhand": "1",
        "West Bengal": "0"
    },
    {
        "Serial": "1.3.6",
        "Indicator": "% of primary schools provided graded supplementary material",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "20",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "18",
        "Arunachal Pradesh": "0",
        "Assam": "0",
        "Bihar": "20",
        "Chandigarh": "20",
        "Chhattisgarh": "20",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "20",
        "Delhi": "2",
        "Goa": "20",
        "Gujarat": "4",
        "Haryana": "20",
        "Himachal Pradesh": "0",
        "Jammu \n and Kashmir": "20",
        "Jharkhand": "20",
        "Karnataka": "20",
        "Kerala": "20",
        "Lakshadweep": "0",
        "Madhya Pradesh": "20",
        "Maharashtra": "20",
        "Manipur": "0",
        "Meghalaya": "2",
        "Mizoram": "20",
        "Nagaland": "0",
        "Odisha": "12",
        "Puducherry": "20",
        "Punjab": "20",
        "Rajasthan": "20",
        "Sikkim": "10",
        "Tamil Nadu": "20",
        "Telangana": "20",
        "Tripura": "4",
        "Uttar Pradesh": "2",
        "Uttarakhand": "20",
        "West Bengal": "0"
    },
    {
        "Serial": "1.3.7",
        "Indicator": "% of elementary schools? children taking mid-day meal against target approved in PAB - Govt and aided schools",
        "Data Source": "MDM",
        "Value": "95.35",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "9",
        "Assam": "10",
        "Bihar": "10",
        "Chandigarh": "10",
        "Chhattisgarh": "9",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "10",
        "Karnataka": "9",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "9",
        "Maharashtra": "10",
        "Manipur": "9",
        "Meghalaya": "10",
        "Mizoram": "10",
        "Nagaland": "10",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "9",
        "Sikkim": "10",
        "Tamil Nadu": "10",
        "Telangana": "9",
        "Tripura": "10",
        "Uttar Pradesh": "10",
        "Uttarakhand": "10",
        "West Bengal": "0"
    },
    {
        "Serial": "1.3.8",
        "Indicator": "% of days midday meal served against total working days - Govt and aided elementary schools",
        "Data Source": "MDM",
        "Value": "100",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "10",
        "Assam": "10",
        "Bihar": "9",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "10",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "9",
        "Maharashtra": "10",
        "Manipur": "10",
        "Meghalaya": "10",
        "Mizoram": "10",
        "Nagaland": "10",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "10",
        "Tamil Nadu": "10",
        "Telangana": "10",
        "Tripura": "10",
        "Uttar Pradesh": "9",
        "Uttarakhand": "10",
        "West Bengal": "0"
    },
    {
        "Serial": "1.3.9",
        "Indicator": "Percentage of schools having functional drinking water facility - All School",
        "Data Source": "UDISE",
        "Value": "96.63",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "9",
        "Arunachal Pradesh": "6",
        "Assam": "8",
        "Bihar": "9",
        "Chandigarh": "10",
        "Chhattisgarh": "9",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "8",
        "Jharkhand": "9",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "9",
        "Maharashtra": "10",
        "Manipur": "7",
        "Meghalaya": "4",
        "Mizoram": "8",
        "Nagaland": "6",
        "Odisha": "9",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "9",
        "Sikkim": "9",
        "Tamil Nadu": "10",
        "Telangana": "8",
        "Tripura": "8",
        "Uttar Pradesh": "9",
        "Uttarakhand": "9",
        "West Bengal": "9"
    },
    {
        "Serial": "1.3.10",
        "Indicator": "Percentage of Elementary Level students getting Uniform within three months of start of academic year - Govt. Schools",
        "Data Source": "UDISE",
        "Value": "82.3",
        "Weight": "10",
        "Andaman and Nicobar": "9",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "9",
        "Assam": "6",
        "Bihar": "10",
        "Chandigarh": "9",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "9",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "7",
        "Gujarat": "9",
        "Haryana": "3",
        "Himachal Pradesh": "9",
        "Jammu \n and Kashmir": "9",
        "Jharkhand": "8",
        "Karnataka": "9",
        "Kerala": "7",
        "Lakshadweep": "10",
        "Madhya Pradesh": "10",
        "Maharashtra": "1",
        "Manipur": "10",
        "Meghalaya": "8",
        "Mizoram": "9",
        "Nagaland": "9",
        "Odisha": "10",
        "Puducherry": "1",
        "Punjab": "10",
        "Rajasthan": "1",
        "Sikkim": "10",
        "Tamil Nadu": "9",
        "Telangana": "7",
        "Tripura": "9",
        "Uttar Pradesh": "9",
        "Uttarakhand": "9",
        "West Bengal": "8"
    },
    {
        "Serial": "1.3.11",
        "Indicator": "Percentage of Elementary Level students getting Free Textbook within one month of start of academic year - Govt. Schools",
        "Data Source": "UDISE",
        "Value": "15.88",
        "Weight": "10",
        "Andaman and Nicobar": "2",
        "Andhra Pradesh": "9",
        "Arunachal Pradesh": "3",
        "Assam": "5",
        "Bihar": "4",
        "Chandigarh": "9",
        "Chhattisgarh": "9",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "9",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "6",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "8",
        "Jharkhand": "7",
        "Karnataka": "7",
        "Kerala": "9",
        "Lakshadweep": "8",
        "Madhya Pradesh": "8",
        "Maharashtra": "10",
        "Manipur": "2",
        "Meghalaya": "1",
        "Mizoram": "8",
        "Nagaland": "2",
        "Odisha": "9",
        "Puducherry": "1",
        "Punjab": "10",
        "Rajasthan": "7",
        "Sikkim": "0",
        "Tamil Nadu": "10",
        "Telangana": "10",
        "Tripura": "9",
        "Uttar Pradesh": "2",
        "Uttarakhand": "5",
        "West Bengal": "9"
    },
    {
        "Serial": "",
        "Indicator": "Total",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "87",
        "Andhra Pradesh": "99",
        "Arunachal Pradesh": "63",
        "Assam": "72",
        "Bihar": "86",
        "Chandigarh": "133",
        "Chhattisgarh": "113",
        "Daman \nand Diu": "99",
        "Dadra \n& Nagar Haveli": "110",
        "Delhi": "114",
        "Goa": "138",
        "Gujarat": "99",
        "Haryana": "116",
        "Himachal Pradesh": "96",
        "Jammu \n and Kashmir": "88",
        "Jharkhand": "95",
        "Karnataka": "100",
        "Kerala": "123",
        "Lakshadweep": "98",
        "Madhya Pradesh": "99",
        "Maharashtra": "113",
        "Manipur": "68",
        "Meghalaya": "57",
        "Mizoram": "102",
        "Nagaland": "63",
        "Odisha": "94",
        "Puducherry": "114",
        "Punjab": "139",
        "Rajasthan": "84",
        "Sikkim": "90",
        "Tamil Nadu": "121",
        "Telangana": "96",
        "Tripura": "70",
        "Uttar Pradesh": "73",
        "Uttarakhand": "102",
        "West Bengal": "58"
    }
];
var Domain4 = [
    {
        "Serial": "1.4.1",
        "Indicator": "Difference in student performance in Language between Scheduled Castes (SC) and General category in Govt. and Aided elementary schools",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.4.1.a",
        "Indicator": "Class 3",
        "Data Source": "NAS",
        "Value": "0",
        "Weight": "6",
        "Andaman and Nicobar": "6",
        "Andhra Pradesh": "6",
        "Arunachal Pradesh": "6",
        "Assam": "6",
        "Bihar": "6",
        "Chandigarh": "6",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "6",
        "Dadra \n& Nagar Haveli": "6",
        "Delhi": "6",
        "Goa": "6",
        "Gujarat": "6",
        "Haryana": "6",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "6",
        "Jharkhand": "6",
        "Karnataka": "6",
        "Kerala": "6",
        "Lakshadweep": "6",
        "Madhya Pradesh": "6",
        "Maharashtra": "6",
        "Manipur": "6",
        "Meghalaya": "5",
        "Mizoram": "5",
        "Nagaland": "6",
        "Odisha": "6",
        "Puducherry": "6",
        "Punjab": "6",
        "Rajasthan": "6",
        "Sikkim": "6",
        "Tamil Nadu": "6",
        "Telangana": "6",
        "Tripura": "6",
        "Uttar Pradesh": "6",
        "Uttarakhand": "6",
        "West Bengal": "6"
    },
    {
        "Serial": "1.4.1.b",
        "Indicator": "Class 5",
        "Data Source": "NAS",
        "Value": "28",
        "Weight": "6",
        "Andaman and Nicobar": "6",
        "Andhra Pradesh": "6",
        "Arunachal Pradesh": "6",
        "Assam": "6",
        "Bihar": "6",
        "Chandigarh": "6",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "6",
        "Dadra \n& Nagar Haveli": "6",
        "Delhi": "6",
        "Goa": "6",
        "Gujarat": "6",
        "Haryana": "6",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "6",
        "Jharkhand": "6",
        "Karnataka": "6",
        "Kerala": "6",
        "Lakshadweep": "6",
        "Madhya Pradesh": "6",
        "Maharashtra": "6",
        "Manipur": "6",
        "Meghalaya": "6",
        "Mizoram": "6",
        "Nagaland": "6",
        "Odisha": "6",
        "Puducherry": "6",
        "Punjab": "6",
        "Rajasthan": "6",
        "Sikkim": "6",
        "Tamil Nadu": "6",
        "Telangana": "6",
        "Tripura": "6",
        "Uttar Pradesh": "6",
        "Uttarakhand": "6",
        "West Bengal": "6"
    },
    {
        "Serial": "1.4.1.c",
        "Indicator": "Class 8",
        "Data Source": "NAS",
        "Value": "26",
        "Weight": "8",
        "Andaman and Nicobar": "8",
        "Andhra Pradesh": "8",
        "Arunachal Pradesh": "8",
        "Assam": "8",
        "Bihar": "8",
        "Chandigarh": "8",
        "Chhattisgarh": "8",
        "Daman \nand Diu": "8",
        "Dadra \n& Nagar Haveli": "8",
        "Delhi": "8",
        "Goa": "8",
        "Gujarat": "8",
        "Haryana": "8",
        "Himachal Pradesh": "8",
        "Jammu \n and Kashmir": "8",
        "Jharkhand": "8",
        "Karnataka": "8",
        "Kerala": "8",
        "Lakshadweep": "8",
        "Madhya Pradesh": "8",
        "Maharashtra": "8",
        "Manipur": "8",
        "Meghalaya": "8",
        "Mizoram": "8",
        "Nagaland": "8",
        "Odisha": "8",
        "Puducherry": "7",
        "Punjab": "8",
        "Rajasthan": "8",
        "Sikkim": "8",
        "Tamil Nadu": "8",
        "Telangana": "8",
        "Tripura": "8",
        "Uttar Pradesh": "8",
        "Uttarakhand": "8",
        "West Bengal": "8"
    },
    {
        "Serial": "1.4.2",
        "Indicator": "Difference in student performance in Mathematics between Scheduled Castes (SC) and General category in Govt. and Aided elementary schools",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.4.2.a",
        "Indicator": "Class 3",
        "Data Source": "NAS",
        "Value": "0",
        "Weight": "6",
        "Andaman and Nicobar": "6",
        "Andhra Pradesh": "6",
        "Arunachal Pradesh": "6",
        "Assam": "6",
        "Bihar": "6",
        "Chandigarh": "6",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "6",
        "Dadra \n& Nagar Haveli": "6",
        "Delhi": "6",
        "Goa": "6",
        "Gujarat": "6",
        "Haryana": "6",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "6",
        "Jharkhand": "6",
        "Karnataka": "6",
        "Kerala": "6",
        "Lakshadweep": "6",
        "Madhya Pradesh": "6",
        "Maharashtra": "6",
        "Manipur": "6",
        "Meghalaya": "5",
        "Mizoram": "5",
        "Nagaland": "6",
        "Odisha": "6",
        "Puducherry": "6",
        "Punjab": "6",
        "Rajasthan": "6",
        "Sikkim": "6",
        "Tamil Nadu": "6",
        "Telangana": "6",
        "Tripura": "6",
        "Uttar Pradesh": "6",
        "Uttarakhand": "6",
        "West Bengal": "6"
    },
    {
        "Serial": "1.4.2.b",
        "Indicator": "Class 5",
        "Data Source": "NAS",
        "Value": "22",
        "Weight": "6",
        "Andaman and Nicobar": "6",
        "Andhra Pradesh": "6",
        "Arunachal Pradesh": "6",
        "Assam": "6",
        "Bihar": "6",
        "Chandigarh": "6",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "6",
        "Dadra \n& Nagar Haveli": "6",
        "Delhi": "6",
        "Goa": "6",
        "Gujarat": "6",
        "Haryana": "6",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "6",
        "Jharkhand": "6",
        "Karnataka": "6",
        "Kerala": "6",
        "Lakshadweep": "6",
        "Madhya Pradesh": "6",
        "Maharashtra": "6",
        "Manipur": "6",
        "Meghalaya": "5",
        "Mizoram": "6",
        "Nagaland": "6",
        "Odisha": "6",
        "Puducherry": "6",
        "Punjab": "6",
        "Rajasthan": "6",
        "Sikkim": "6",
        "Tamil Nadu": "6",
        "Telangana": "6",
        "Tripura": "6",
        "Uttar Pradesh": "6",
        "Uttarakhand": "6",
        "West Bengal": "6"
    },
    {
        "Serial": "1.4.2.c",
        "Indicator": "Class 8",
        "Data Source": "NAS",
        "Value": "18",
        "Weight": "8",
        "Andaman and Nicobar": "8",
        "Andhra Pradesh": "8",
        "Arunachal Pradesh": "8",
        "Assam": "8",
        "Bihar": "8",
        "Chandigarh": "8",
        "Chhattisgarh": "8",
        "Daman \nand Diu": "8",
        "Dadra \n& Nagar Haveli": "8",
        "Delhi": "8",
        "Goa": "8",
        "Gujarat": "8",
        "Haryana": "8",
        "Himachal Pradesh": "8",
        "Jammu \n and Kashmir": "8",
        "Jharkhand": "8",
        "Karnataka": "8",
        "Kerala": "8",
        "Lakshadweep": "8",
        "Madhya Pradesh": "8",
        "Maharashtra": "8",
        "Manipur": "8",
        "Meghalaya": "8",
        "Mizoram": "8",
        "Nagaland": "8",
        "Odisha": "8",
        "Puducherry": "8",
        "Punjab": "8",
        "Rajasthan": "8",
        "Sikkim": "8",
        "Tamil Nadu": "8",
        "Telangana": "8",
        "Tripura": "8",
        "Uttar Pradesh": "8",
        "Uttarakhand": "8",
        "West Bengal": "8"
    },
    {
        "Serial": "1.4.3",
        "Indicator": "Difference in student performance in Language between Scheduled Tribes (ST) and General category in Govt. and Aided elementary schools",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.4.3.a",
        "Indicator": "Class 3",
        "Data Source": "NAS",
        "Value": "2",
        "Weight": "6",
        "Andaman and Nicobar": "6",
        "Andhra Pradesh": "6",
        "Arunachal Pradesh": "6",
        "Assam": "6",
        "Bihar": "6",
        "Chandigarh": "5",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "6",
        "Dadra \n& Nagar Haveli": "6",
        "Delhi": "6",
        "Goa": "6",
        "Gujarat": "6",
        "Haryana": "6",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "6",
        "Jharkhand": "6",
        "Karnataka": "6",
        "Kerala": "5",
        "Lakshadweep": "3",
        "Madhya Pradesh": "6",
        "Maharashtra": "6",
        "Manipur": "5",
        "Meghalaya": "5",
        "Mizoram": "5",
        "Nagaland": "6",
        "Odisha": "6",
        "Puducherry": "6",
        "Punjab": "6",
        "Rajasthan": "6",
        "Sikkim": "6",
        "Tamil Nadu": "6",
        "Telangana": "6",
        "Tripura": "6",
        "Uttar Pradesh": "6",
        "Uttarakhand": "6",
        "West Bengal": "6"
    },
    {
        "Serial": "1.4.3.b",
        "Indicator": "Class 5",
        "Data Source": "NAS",
        "Value": "2",
        "Weight": "6",
        "Andaman and Nicobar": "6",
        "Andhra Pradesh": "6",
        "Arunachal Pradesh": "6",
        "Assam": "6",
        "Bihar": "6",
        "Chandigarh": "6",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "6",
        "Dadra \n& Nagar Haveli": "6",
        "Delhi": "6",
        "Goa": "6",
        "Gujarat": "6",
        "Haryana": "6",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "6",
        "Jharkhand": "6",
        "Karnataka": "6",
        "Kerala": "6",
        "Lakshadweep": "6",
        "Madhya Pradesh": "6",
        "Maharashtra": "6",
        "Manipur": "6",
        "Meghalaya": "6",
        "Mizoram": "5",
        "Nagaland": "6",
        "Odisha": "6",
        "Puducherry": "6",
        "Punjab": "6",
        "Rajasthan": "6",
        "Sikkim": "6",
        "Tamil Nadu": "6",
        "Telangana": "6",
        "Tripura": "6",
        "Uttar Pradesh": "5",
        "Uttarakhand": "6",
        "West Bengal": "5"
    },
    {
        "Serial": "1.4.3.c",
        "Indicator": "Class 8",
        "Data Source": "NAS",
        "Value": "10",
        "Weight": "8",
        "Andaman and Nicobar": "8",
        "Andhra Pradesh": "8",
        "Arunachal Pradesh": "8",
        "Assam": "8",
        "Bihar": "8",
        "Chandigarh": "8",
        "Chhattisgarh": "8",
        "Daman \nand Diu": "8",
        "Dadra \n& Nagar Haveli": "8",
        "Delhi": "8",
        "Goa": "8",
        "Gujarat": "8",
        "Haryana": "8",
        "Himachal Pradesh": "8",
        "Jammu \n and Kashmir": "8",
        "Jharkhand": "8",
        "Karnataka": "8",
        "Kerala": "7",
        "Lakshadweep": "8",
        "Madhya Pradesh": "8",
        "Maharashtra": "8",
        "Manipur": "8",
        "Meghalaya": "8",
        "Mizoram": "8",
        "Nagaland": "8",
        "Odisha": "7",
        "Puducherry": "8",
        "Punjab": "8",
        "Rajasthan": "8",
        "Sikkim": "8",
        "Tamil Nadu": "8",
        "Telangana": "8",
        "Tripura": "7",
        "Uttar Pradesh": "8",
        "Uttarakhand": "8",
        "West Bengal": "7"
    },
    {
        "Serial": "1.4.4",
        "Indicator": "Difference in student performance in Mathematics between Scheduled Tribes (ST) and General category in Govt. and Aided elementary schools",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.4.4.a",
        "Indicator": "Class 3",
        "Data Source": "NAS",
        "Value": "1",
        "Weight": "6",
        "Andaman and Nicobar": "6",
        "Andhra Pradesh": "6",
        "Arunachal Pradesh": "6",
        "Assam": "6",
        "Bihar": "6",
        "Chandigarh": "6",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "6",
        "Dadra \n& Nagar Haveli": "6",
        "Delhi": "6",
        "Goa": "6",
        "Gujarat": "6",
        "Haryana": "6",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "6",
        "Jharkhand": "6",
        "Karnataka": "6",
        "Kerala": "5",
        "Lakshadweep": "6",
        "Madhya Pradesh": "6",
        "Maharashtra": "6",
        "Manipur": "5",
        "Meghalaya": "5",
        "Mizoram": "5",
        "Nagaland": "6",
        "Odisha": "5",
        "Puducherry": "6",
        "Punjab": "6",
        "Rajasthan": "6",
        "Sikkim": "6",
        "Tamil Nadu": "6",
        "Telangana": "6",
        "Tripura": "6",
        "Uttar Pradesh": "6",
        "Uttarakhand": "6",
        "West Bengal": "6"
    },
    {
        "Serial": "1.4.4.b",
        "Indicator": "Class 5",
        "Data Source": "NAS",
        "Value": "4",
        "Weight": "6",
        "Andaman and Nicobar": "6",
        "Andhra Pradesh": "5",
        "Arunachal Pradesh": "6",
        "Assam": "5",
        "Bihar": "6",
        "Chandigarh": "6",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "6",
        "Dadra \n& Nagar Haveli": "6",
        "Delhi": "6",
        "Goa": "6",
        "Gujarat": "6",
        "Haryana": "6",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "6",
        "Jharkhand": "6",
        "Karnataka": "6",
        "Kerala": "6",
        "Lakshadweep": "6",
        "Madhya Pradesh": "6",
        "Maharashtra": "6",
        "Manipur": "6",
        "Meghalaya": "5",
        "Mizoram": "6",
        "Nagaland": "6",
        "Odisha": "6",
        "Puducherry": "6",
        "Punjab": "5",
        "Rajasthan": "6",
        "Sikkim": "6",
        "Tamil Nadu": "6",
        "Telangana": "6",
        "Tripura": "6",
        "Uttar Pradesh": "6",
        "Uttarakhand": "6",
        "West Bengal": "6"
    },
    {
        "Serial": "1.4.4.c",
        "Indicator": "Class 8",
        "Data Source": "NAS",
        "Value": "1",
        "Weight": "8",
        "Andaman and Nicobar": "8",
        "Andhra Pradesh": "8",
        "Arunachal Pradesh": "8",
        "Assam": "8",
        "Bihar": "8",
        "Chandigarh": "8",
        "Chhattisgarh": "8",
        "Daman \nand Diu": "8",
        "Dadra \n& Nagar Haveli": "8",
        "Delhi": "8",
        "Goa": "8",
        "Gujarat": "8",
        "Haryana": "8",
        "Himachal Pradesh": "8",
        "Jammu \n and Kashmir": "8",
        "Jharkhand": "8",
        "Karnataka": "8",
        "Kerala": "8",
        "Lakshadweep": "8",
        "Madhya Pradesh": "8",
        "Maharashtra": "8",
        "Manipur": "8",
        "Meghalaya": "8",
        "Mizoram": "8",
        "Nagaland": "8",
        "Odisha": "8",
        "Puducherry": "8",
        "Punjab": "8",
        "Rajasthan": "8",
        "Sikkim": "8",
        "Tamil Nadu": "8",
        "Telangana": "8",
        "Tripura": "8",
        "Uttar Pradesh": "8",
        "Uttarakhand": "8",
        "West Bengal": "8"
    },
    {
        "Serial": "1.4.5",
        "Indicator": "Difference in student performance in Language between Urban and Rural areas in Govt. and Aided elementary schools",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.4.5.a",
        "Indicator": "Class 3",
        "Data Source": "NAS",
        "Value": "12",
        "Weight": "3",
        "Andaman and Nicobar": "3",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "3",
        "Bihar": "3",
        "Chandigarh": "3",
        "Chhattisgarh": "3",
        "Daman \nand Diu": "3",
        "Dadra \n& Nagar Haveli": "3",
        "Delhi": "3",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "3",
        "Himachal Pradesh": "3",
        "Jammu \n and Kashmir": "3",
        "Jharkhand": "3",
        "Karnataka": "3",
        "Kerala": "3",
        "Lakshadweep": "3",
        "Madhya Pradesh": "3",
        "Maharashtra": "3",
        "Manipur": "3",
        "Meghalaya": "3",
        "Mizoram": "3",
        "Nagaland": "3",
        "Odisha": "3",
        "Puducherry": "3",
        "Punjab": "3",
        "Rajasthan": "3",
        "Sikkim": "3",
        "Tamil Nadu": "3",
        "Telangana": "3",
        "Tripura": "3",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "3"
    },
    {
        "Serial": "1.4.5.b",
        "Indicator": "Class 5",
        "Data Source": "NAS",
        "Value": "1",
        "Weight": "3",
        "Andaman and Nicobar": "3",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "3",
        "Bihar": "3",
        "Chandigarh": "3",
        "Chhattisgarh": "3",
        "Daman \nand Diu": "3",
        "Dadra \n& Nagar Haveli": "3",
        "Delhi": "3",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "3",
        "Himachal Pradesh": "3",
        "Jammu \n and Kashmir": "3",
        "Jharkhand": "3",
        "Karnataka": "3",
        "Kerala": "3",
        "Lakshadweep": "3",
        "Madhya Pradesh": "3",
        "Maharashtra": "3",
        "Manipur": "3",
        "Meghalaya": "3",
        "Mizoram": "3",
        "Nagaland": "3",
        "Odisha": "3",
        "Puducherry": "3",
        "Punjab": "3",
        "Rajasthan": "3",
        "Sikkim": "3",
        "Tamil Nadu": "3",
        "Telangana": "3",
        "Tripura": "3",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "3"
    },
    {
        "Serial": "1.4.5.c",
        "Indicator": "Class 8",
        "Data Source": "NAS",
        "Value": "3",
        "Weight": "4",
        "Andaman and Nicobar": "4",
        "Andhra Pradesh": "4",
        "Arunachal Pradesh": "4",
        "Assam": "4",
        "Bihar": "4",
        "Chandigarh": "4",
        "Chhattisgarh": "4",
        "Daman \nand Diu": "4",
        "Dadra \n& Nagar Haveli": "4",
        "Delhi": "4",
        "Goa": "4",
        "Gujarat": "4",
        "Haryana": "4",
        "Himachal Pradesh": "4",
        "Jammu \n and Kashmir": "4",
        "Jharkhand": "4",
        "Karnataka": "4",
        "Kerala": "4",
        "Lakshadweep": "4",
        "Madhya Pradesh": "4",
        "Maharashtra": "4",
        "Manipur": "4",
        "Meghalaya": "4",
        "Mizoram": "4",
        "Nagaland": "4",
        "Odisha": "4",
        "Puducherry": "4",
        "Punjab": "4",
        "Rajasthan": "4",
        "Sikkim": "4",
        "Tamil Nadu": "4",
        "Telangana": "4",
        "Tripura": "4",
        "Uttar Pradesh": "4",
        "Uttarakhand": "4",
        "West Bengal": "4"
    },
    {
        "Serial": "1.4.6",
        "Indicator": "Difference in student performance in Mathematics between Urban and Rural areas in Govt. and Aided elementary schools",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.4.6.a",
        "Indicator": "Class 3",
        "Data Source": "NAS",
        "Value": "4",
        "Weight": "3",
        "Andaman and Nicobar": "3",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "3",
        "Bihar": "3",
        "Chandigarh": "3",
        "Chhattisgarh": "3",
        "Daman \nand Diu": "3",
        "Dadra \n& Nagar Haveli": "3",
        "Delhi": "3",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "3",
        "Himachal Pradesh": "3",
        "Jammu \n and Kashmir": "3",
        "Jharkhand": "3",
        "Karnataka": "3",
        "Kerala": "3",
        "Lakshadweep": "3",
        "Madhya Pradesh": "3",
        "Maharashtra": "3",
        "Manipur": "3",
        "Meghalaya": "3",
        "Mizoram": "3",
        "Nagaland": "3",
        "Odisha": "3",
        "Puducherry": "3",
        "Punjab": "3",
        "Rajasthan": "3",
        "Sikkim": "3",
        "Tamil Nadu": "3",
        "Telangana": "3",
        "Tripura": "3",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "3"
    },
    {
        "Serial": "1.4.6.b",
        "Indicator": "Class 5",
        "Data Source": "NAS",
        "Value": "2",
        "Weight": "3",
        "Andaman and Nicobar": "3",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "3",
        "Bihar": "3",
        "Chandigarh": "3",
        "Chhattisgarh": "3",
        "Daman \nand Diu": "3",
        "Dadra \n& Nagar Haveli": "3",
        "Delhi": "3",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "3",
        "Himachal Pradesh": "3",
        "Jammu \n and Kashmir": "3",
        "Jharkhand": "3",
        "Karnataka": "3",
        "Kerala": "3",
        "Lakshadweep": "3",
        "Madhya Pradesh": "3",
        "Maharashtra": "3",
        "Manipur": "3",
        "Meghalaya": "3",
        "Mizoram": "3",
        "Nagaland": "3",
        "Odisha": "3",
        "Puducherry": "3",
        "Punjab": "3",
        "Rajasthan": "3",
        "Sikkim": "3",
        "Tamil Nadu": "3",
        "Telangana": "3",
        "Tripura": "3",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "3"
    },
    {
        "Serial": "1.4.6.c",
        "Indicator": "Class 8",
        "Data Source": "NAS",
        "Value": "2",
        "Weight": "4",
        "Andaman and Nicobar": "4",
        "Andhra Pradesh": "4",
        "Arunachal Pradesh": "4",
        "Assam": "4",
        "Bihar": "4",
        "Chandigarh": "4",
        "Chhattisgarh": "4",
        "Daman \nand Diu": "4",
        "Dadra \n& Nagar Haveli": "4",
        "Delhi": "4",
        "Goa": "4",
        "Gujarat": "4",
        "Haryana": "4",
        "Himachal Pradesh": "4",
        "Jammu \n and Kashmir": "4",
        "Jharkhand": "4",
        "Karnataka": "4",
        "Kerala": "4",
        "Lakshadweep": "4",
        "Madhya Pradesh": "4",
        "Maharashtra": "4",
        "Manipur": "4",
        "Meghalaya": "4",
        "Mizoram": "4",
        "Nagaland": "4",
        "Odisha": "4",
        "Puducherry": "4",
        "Punjab": "4",
        "Rajasthan": "4",
        "Sikkim": "4",
        "Tamil Nadu": "4",
        "Telangana": "4",
        "Tripura": "4",
        "Uttar Pradesh": "4",
        "Uttarakhand": "4",
        "West Bengal": "4"
    },
    {
        "Serial": "1.4.7",
        "Indicator": "Difference in student performance in Language between Boys and Girls in Govt. and Aided elementary schools",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.4.7.a",
        "Indicator": "Class 3",
        "Data Source": "NAS",
        "Value": "3",
        "Weight": "3",
        "Andaman and Nicobar": "3",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "3",
        "Bihar": "3",
        "Chandigarh": "3",
        "Chhattisgarh": "3",
        "Daman \nand Diu": "3",
        "Dadra \n& Nagar Haveli": "3",
        "Delhi": "3",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "3",
        "Himachal Pradesh": "3",
        "Jammu \n and Kashmir": "3",
        "Jharkhand": "3",
        "Karnataka": "3",
        "Kerala": "3",
        "Lakshadweep": "3",
        "Madhya Pradesh": "3",
        "Maharashtra": "3",
        "Manipur": "3",
        "Meghalaya": "3",
        "Mizoram": "3",
        "Nagaland": "3",
        "Odisha": "3",
        "Puducherry": "3",
        "Punjab": "3",
        "Rajasthan": "3",
        "Sikkim": "3",
        "Tamil Nadu": "3",
        "Telangana": "3",
        "Tripura": "3",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "3"
    },
    {
        "Serial": "1.4.7.b",
        "Indicator": "Class 5",
        "Data Source": "NAS",
        "Value": "4",
        "Weight": "3",
        "Andaman and Nicobar": "3",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "3",
        "Bihar": "3",
        "Chandigarh": "3",
        "Chhattisgarh": "3",
        "Daman \nand Diu": "3",
        "Dadra \n& Nagar Haveli": "3",
        "Delhi": "3",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "3",
        "Himachal Pradesh": "3",
        "Jammu \n and Kashmir": "3",
        "Jharkhand": "3",
        "Karnataka": "3",
        "Kerala": "3",
        "Lakshadweep": "3",
        "Madhya Pradesh": "3",
        "Maharashtra": "3",
        "Manipur": "3",
        "Meghalaya": "3",
        "Mizoram": "3",
        "Nagaland": "3",
        "Odisha": "3",
        "Puducherry": "3",
        "Punjab": "3",
        "Rajasthan": "3",
        "Sikkim": "3",
        "Tamil Nadu": "3",
        "Telangana": "3",
        "Tripura": "3",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "3"
    },
    {
        "Serial": "1.4.7.c",
        "Indicator": "Class 8",
        "Data Source": "NAS",
        "Value": "3",
        "Weight": "4",
        "Andaman and Nicobar": "4",
        "Andhra Pradesh": "4",
        "Arunachal Pradesh": "4",
        "Assam": "4",
        "Bihar": "4",
        "Chandigarh": "4",
        "Chhattisgarh": "4",
        "Daman \nand Diu": "4",
        "Dadra \n& Nagar Haveli": "4",
        "Delhi": "4",
        "Goa": "4",
        "Gujarat": "4",
        "Haryana": "4",
        "Himachal Pradesh": "4",
        "Jammu \n and Kashmir": "4",
        "Jharkhand": "4",
        "Karnataka": "4",
        "Kerala": "4",
        "Lakshadweep": "4",
        "Madhya Pradesh": "4",
        "Maharashtra": "4",
        "Manipur": "4",
        "Meghalaya": "4",
        "Mizoram": "4",
        "Nagaland": "4",
        "Odisha": "4",
        "Puducherry": "4",
        "Punjab": "4",
        "Rajasthan": "4",
        "Sikkim": "4",
        "Tamil Nadu": "4",
        "Telangana": "4",
        "Tripura": "4",
        "Uttar Pradesh": "4",
        "Uttarakhand": "4",
        "West Bengal": "4"
    },
    {
        "Serial": "1.4.8",
        "Indicator": "Difference in student performance in Mathematics between Boys and Girls in Govt. and Aided elementary schools",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.4.8.a",
        "Indicator": "Class 3",
        "Data Source": "NAS",
        "Value": "0",
        "Weight": "3",
        "Andaman and Nicobar": "3",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "3",
        "Bihar": "3",
        "Chandigarh": "3",
        "Chhattisgarh": "3",
        "Daman \nand Diu": "3",
        "Dadra \n& Nagar Haveli": "3",
        "Delhi": "3",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "3",
        "Himachal Pradesh": "3",
        "Jammu \n and Kashmir": "3",
        "Jharkhand": "3",
        "Karnataka": "3",
        "Kerala": "3",
        "Lakshadweep": "3",
        "Madhya Pradesh": "3",
        "Maharashtra": "3",
        "Manipur": "3",
        "Meghalaya": "3",
        "Mizoram": "3",
        "Nagaland": "3",
        "Odisha": "3",
        "Puducherry": "3",
        "Punjab": "3",
        "Rajasthan": "3",
        "Sikkim": "3",
        "Tamil Nadu": "3",
        "Telangana": "3",
        "Tripura": "3",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "3"
    },
    {
        "Serial": "1.4.8.b",
        "Indicator": "Class 5",
        "Data Source": "NAS",
        "Value": "0",
        "Weight": "3",
        "Andaman and Nicobar": "3",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "3",
        "Bihar": "3",
        "Chandigarh": "3",
        "Chhattisgarh": "3",
        "Daman \nand Diu": "3",
        "Dadra \n& Nagar Haveli": "3",
        "Delhi": "3",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "3",
        "Himachal Pradesh": "3",
        "Jammu \n and Kashmir": "3",
        "Jharkhand": "3",
        "Karnataka": "3",
        "Kerala": "3",
        "Lakshadweep": "3",
        "Madhya Pradesh": "3",
        "Maharashtra": "3",
        "Manipur": "3",
        "Meghalaya": "3",
        "Mizoram": "3",
        "Nagaland": "3",
        "Odisha": "3",
        "Puducherry": "3",
        "Punjab": "3",
        "Rajasthan": "3",
        "Sikkim": "3",
        "Tamil Nadu": "3",
        "Telangana": "3",
        "Tripura": "3",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "3"
    },
    {
        "Serial": "1.4.8.c",
        "Indicator": "Class 8",
        "Data Source": "NAS",
        "Value": "1",
        "Weight": "4",
        "Andaman and Nicobar": "4",
        "Andhra Pradesh": "4",
        "Arunachal Pradesh": "4",
        "Assam": "4",
        "Bihar": "4",
        "Chandigarh": "4",
        "Chhattisgarh": "4",
        "Daman \nand Diu": "4",
        "Dadra \n& Nagar Haveli": "4",
        "Delhi": "4",
        "Goa": "4",
        "Gujarat": "4",
        "Haryana": "4",
        "Himachal Pradesh": "4",
        "Jammu \n and Kashmir": "4",
        "Jharkhand": "4",
        "Karnataka": "4",
        "Kerala": "4",
        "Lakshadweep": "4",
        "Madhya Pradesh": "4",
        "Maharashtra": "4",
        "Manipur": "4",
        "Meghalaya": "4",
        "Mizoram": "4",
        "Nagaland": "4",
        "Odisha": "4",
        "Puducherry": "4",
        "Punjab": "4",
        "Rajasthan": "4",
        "Sikkim": "4",
        "Tamil Nadu": "4",
        "Telangana": "4",
        "Tripura": "4",
        "Uttar Pradesh": "4",
        "Uttarakhand": "4",
        "West Bengal": "4"
    },
    {
        "Serial": "1.4.9",
        "Indicator": "Difference of Upper Primary to Secondary level",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.4.9.a",
        "Indicator": "Difference between SCs and General Categorys Transition Rate from Upper Primary to Secondary level",
        "Data Source": "UDISE",
        "Value": "97.1",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "9",
        "Assam": "10",
        "Bihar": "10",
        "Chandigarh": "10",
        "Chhattisgarh": "9",
        "Daman \nand Diu": "9",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "9",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "10",
        "Maharashtra": "10",
        "Manipur": "8",
        "Meghalaya": "8",
        "Mizoram": "5",
        "Nagaland": "8",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "9",
        "Tamil Nadu": "10",
        "Telangana": "9",
        "Tripura": "10",
        "Uttar Pradesh": "9",
        "Uttarakhand": "9",
        "West Bengal": "10"
    },
    {
        "Serial": "1.4.9.b",
        "Indicator": "Difference between STs and General Categorys Transition Rate from Upper Primary to Secondary level",
        "Data Source": "UDISE",
        "Value": "0.66",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "9",
        "Arunachal Pradesh": "10",
        "Assam": "9",
        "Bihar": "10",
        "Chandigarh": "10",
        "Chhattisgarh": "9",
        "Daman \nand Diu": "9",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "9",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "9",
        "Jharkhand": "9",
        "Karnataka": "9",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "9",
        "Maharashtra": "10",
        "Manipur": "8",
        "Meghalaya": "9",
        "Mizoram": "9",
        "Nagaland": "9",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "1",
        "Rajasthan": "10",
        "Sikkim": "10",
        "Tamil Nadu": "9",
        "Telangana": "9",
        "Tripura": "10",
        "Uttar Pradesh": "10",
        "Uttarakhand": "10",
        "West Bengal": "9"
    },
    {
        "Serial": "1.4.10",
        "Indicator": "Difference between boys and girls Transition Rate from Upper Primary to Secondary level",
        "Data Source": "UDISE",
        "Value": "1.38",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "10",
        "Assam": "10",
        "Bihar": "10",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "10",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "10",
        "Maharashtra": "10",
        "Manipur": "10",
        "Meghalaya": "10",
        "Mizoram": "10",
        "Nagaland": "10",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "10",
        "Tamil Nadu": "10",
        "Telangana": "10",
        "Tripura": "10",
        "Uttar Pradesh": "9",
        "Uttarakhand": "10",
        "West Bengal": "10"
    },
    {
        "Serial": "1.4.11",
        "Indicator": "Difference between Minorities and General Category?s Transition Rate from Upper Primary to Secondary level",
        "Data Source": "UDISE",
        "Value": "2.9",
        "Weight": "20",
        "Andaman and Nicobar": "20",
        "Andhra Pradesh": "20",
        "Arunachal Pradesh": "18",
        "Assam": "18",
        "Bihar": "20",
        "Chandigarh": "20",
        "Chhattisgarh": "18",
        "Daman \nand Diu": "18",
        "Dadra \n& Nagar Haveli": "20",
        "Delhi": "20",
        "Goa": "20",
        "Gujarat": "16",
        "Haryana": "16",
        "Himachal Pradesh": "16",
        "Jammu \n and Kashmir": "20",
        "Jharkhand": "18",
        "Karnataka": "20",
        "Kerala": "20",
        "Lakshadweep": "20",
        "Madhya Pradesh": "16",
        "Maharashtra": "20",
        "Manipur": "18",
        "Meghalaya": "20",
        "Mizoram": "8",
        "Nagaland": "20",
        "Odisha": "20",
        "Puducherry": "20",
        "Punjab": "20",
        "Rajasthan": "18",
        "Sikkim": "20",
        "Tamil Nadu": "20",
        "Telangana": "18",
        "Tripura": "20",
        "Uttar Pradesh": "14",
        "Uttarakhand": "16",
        "West Bengal": "20"
    },
    {
        "Serial": "1.4.12",
        "Indicator": "Gross enrolment ratio of CWSN (age group 6-18 years)",
        "Data Source": "UDISE",
        "Value": "59.04",
        "Weight": "10",
        "Andaman and Nicobar": "6",
        "Andhra Pradesh": "5",
        "Arunachal Pradesh": "6",
        "Assam": "9",
        "Bihar": "4",
        "Chandigarh": "10",
        "Chhattisgarh": "7",
        "Daman \nand Diu": "5",
        "Dadra \n& Nagar Haveli": "7",
        "Delhi": "7",
        "Goa": "10",
        "Gujarat": "6",
        "Haryana": "4",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "4",
        "Karnataka": "4",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "5",
        "Maharashtra": "7",
        "Manipur": "6",
        "Meghalaya": "4",
        "Mizoram": "10",
        "Nagaland": "3",
        "Odisha": "6",
        "Puducherry": "6",
        "Punjab": "8",
        "Rajasthan": "5",
        "Sikkim": "6",
        "Tamil Nadu": "9",
        "Telangana": "4",
        "Tripura": "4",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "0"
    },
    {
        "Serial": "1.4.13",
        "Indicator": "% of entitled CWSN receiving Aids and Appliances for Govt and aided schools",
        "Data Source": "Shagun",
        "Value": "34.619999999999997",
        "Weight": "10",
        "Andaman and Nicobar": "4",
        "Andhra Pradesh": "0",
        "Arunachal Pradesh": "0",
        "Assam": "8",
        "Bihar": "2",
        "Chandigarh": "0",
        "Chhattisgarh": "0",
        "Daman \nand Diu": "5",
        "Dadra \n& Nagar Haveli": "8",
        "Delhi": "1",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "9",
        "Himachal Pradesh": "6",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "7",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "0",
        "Madhya Pradesh": "10",
        "Maharashtra": "1",
        "Manipur": "2",
        "Meghalaya": "0",
        "Mizoram": "0",
        "Nagaland": "0",
        "Odisha": "9",
        "Puducherry": "1",
        "Punjab": "0",
        "Rajasthan": "9",
        "Sikkim": "0",
        "Tamil Nadu": "10",
        "Telangana": "10",
        "Tripura": "10",
        "Uttar Pradesh": "8",
        "Uttarakhand": "0",
        "West Bengal": "0"
    },
    {
        "Serial": "1.4.14",
        "Indicator": "Percentage of schools having ramp for disabled children to access school building",
        "Data Source": "UDISE",
        "Value": "29.4",
        "Weight": "10",
        "Andaman and Nicobar": "3",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "6",
        "Bihar": "7",
        "Chandigarh": "8",
        "Chhattisgarh": "7",
        "Daman \nand Diu": "7",
        "Dadra \n& Nagar Haveli": "8",
        "Delhi": "8",
        "Goa": "5",
        "Gujarat": "9",
        "Haryana": "7",
        "Himachal Pradesh": "8",
        "Jammu \n and Kashmir": "3",
        "Jharkhand": "6",
        "Karnataka": "5",
        "Kerala": "7",
        "Lakshadweep": "7",
        "Madhya Pradesh": "7",
        "Maharashtra": "9",
        "Manipur": "4",
        "Meghalaya": "4",
        "Mizoram": "5",
        "Nagaland": "3",
        "Odisha": "7",
        "Puducherry": "7",
        "Punjab": "7",
        "Rajasthan": "5",
        "Sikkim": "2",
        "Tamil Nadu": "7",
        "Telangana": "4",
        "Tripura": "5",
        "Uttar Pradesh": "8",
        "Uttarakhand": "5",
        "West Bengal": "6"
    },
    {
        "Serial": "1.4.15",
        "Indicator": "Percentage of schools having functional CWSN friendly toilets",
        "Data Source": "UDISE",
        "Value": "14.46",
        "Weight": "10",
        "Andaman and Nicobar": "2",
        "Andhra Pradesh": "1",
        "Arunachal Pradesh": "1",
        "Assam": "4",
        "Bihar": "2",
        "Chandigarh": "6",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "5",
        "Dadra \n& Nagar Haveli": "8",
        "Delhi": "8",
        "Goa": "1",
        "Gujarat": "4",
        "Haryana": "5",
        "Himachal Pradesh": "3",
        "Jammu \n and Kashmir": "1",
        "Jharkhand": "1",
        "Karnataka": "4",
        "Kerala": "3",
        "Lakshadweep": "2",
        "Madhya Pradesh": "2",
        "Maharashtra": "5",
        "Manipur": "1",
        "Meghalaya": "1",
        "Mizoram": "3",
        "Nagaland": "2",
        "Odisha": "4",
        "Puducherry": "3",
        "Punjab": "5",
        "Rajasthan": "3",
        "Sikkim": "1",
        "Tamil Nadu": "3",
        "Telangana": "1",
        "Tripura": "1",
        "Uttar Pradesh": "2",
        "Uttarakhand": "1",
        "West Bengal": "2"
    },
    {
        "Serial": "1.4.16",
        "Indicator": "Percentage of schools having functional toilet",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "1.4.16.a",
        "Indicator": "Percentage of schools having functional boys toilet",
        "Data Source": "UDISE",
        "Value": "100",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "8",
        "Arunachal Pradesh": "10",
        "Assam": "7",
        "Bihar": "9",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "10",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "10",
        "Maharashtra": "10",
        "Manipur": "9",
        "Meghalaya": "8",
        "Mizoram": "9",
        "Nagaland": "10",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "10",
        "Tamil Nadu": "10",
        "Telangana": "10",
        "Tripura": "9",
        "Uttar Pradesh": "10",
        "Uttarakhand": "10",
        "West Bengal": "10"
    },
    {
        "Serial": "1.4.16.b",
        "Indicator": "Percentage of schools having functional girls toilet",
        "Data Source": "UDISE",
        "Value": "100",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "9",
        "Arunachal Pradesh": "10",
        "Assam": "8",
        "Bihar": "9",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "10",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "10",
        "Maharashtra": "10",
        "Manipur": "9",
        "Meghalaya": "8",
        "Mizoram": "10",
        "Nagaland": "10",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "10",
        "Tamil Nadu": "10",
        "Telangana": "10",
        "Tripura": "9",
        "Uttar Pradesh": "10",
        "Uttarakhand": "10",
        "West Bengal": "10"
    },
    {
        "Serial": "",
        "Indicator": "Total",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "205",
        "Andhra Pradesh": "194",
        "Arunachal Pradesh": "197",
        "Assam": "208",
        "Bihar": "203",
        "Chandigarh": "213",
        "Chhattisgarh": "206",
        "Daman \nand Diu": "208",
        "Dadra \n& Nagar Haveli": "221",
        "Delhi": "214",
        "Goa": "209",
        "Gujarat": "207",
        "Haryana": "211",
        "Himachal Pradesh": "209",
        "Jammu \n and Kashmir": "203",
        "Jharkhand": "204",
        "Karnataka": "212",
        "Kerala": "217",
        "Lakshadweep": "206",
        "Madhya Pradesh": "209",
        "Maharashtra": "212",
        "Manipur": "193",
        "Meghalaya": "186",
        "Mizoram": "184",
        "Nagaland": "195",
        "Odisha": "214",
        "Puducherry": "206",
        "Punjab": "200",
        "Rajasthan": "210",
        "Sikkim": "198",
        "Tamil Nadu": "218",
        "Telangana": "205",
        "Tripura": "207",
        "Uttar Pradesh": "202",
        "Uttarakhand": "194",
        "West Bengal": "195"
    }
];
var Domain5 = [
    {
        "Serial": "2.1.1",
        "Indicator": "% of Children whose Unique ID is seeded in SDMIS",
        "Data Source": "UDISE",
        "Value": "100",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "10",
        "Assam": "10",
        "Bihar": "10",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "10",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "10",
        "Maharashtra": "10",
        "Manipur": "10",
        "Meghalaya": "10",
        "Mizoram": "10",
        "Nagaland": "10",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "10",
        "Tamil Nadu": "10",
        "Telangana": "10",
        "Tripura": "10",
        "Uttar Pradesh": "10",
        "Uttarakhand": "10",
        "West Bengal": "10"
    },
    {
        "Serial": "2.1.2",
        "Indicator": "% of Teachers whose Unique ID is seeded in any electronic database of the State Government/UT Administration",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "10",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "0",
        "Assam": "6",
        "Bihar": "8",
        "Chandigarh": "10",
        "Chhattisgarh": "7",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "10",
        "Goa": "0",
        "Gujarat": "6",
        "Haryana": "10",
        "Himachal Pradesh": "9",
        "Jammu \n and Kashmir": "8",
        "Jharkhand": "10",
        "Karnataka": "7",
        "Kerala": "8",
        "Lakshadweep": "10",
        "Madhya Pradesh": "10",
        "Maharashtra": "10",
        "Manipur": "3",
        "Meghalaya": "0",
        "Mizoram": "6",
        "Nagaland": "0",
        "Odisha": "10",
        "Puducherry": "4",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "10",
        "Tamil Nadu": "6",
        "Telangana": "5",
        "Tripura": "3",
        "Uttar Pradesh": "0",
        "Uttarakhand": "5",
        "West Bengal": "6"
    },
    {
        "Serial": "2.1.3",
        "Indicator": "% of average daily attendance of students captured digitally (States and Uts may set digital mechanism similar to AMS of MDM",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "10",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "4",
        "Assam": "9",
        "Bihar": "8",
        "Chandigarh": "0",
        "Chhattisgarh": "9",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "10",
        "Goa": "0",
        "Gujarat": "0",
        "Haryana": "0",
        "Himachal Pradesh": "0",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "0",
        "Karnataka": "3",
        "Kerala": "10",
        "Lakshadweep": "0",
        "Madhya Pradesh": "0",
        "Maharashtra": "0",
        "Manipur": "5",
        "Meghalaya": "0",
        "Mizoram": "0",
        "Nagaland": "0",
        "Odisha": "10",
        "Puducherry": "0",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "10",
        "Tamil Nadu": "0",
        "Telangana": "10",
        "Tripura": "10",
        "Uttar Pradesh": "7",
        "Uttarakhand": "0",
        "West Bengal": "8"
    },
    {
        "Serial": "2.1.4",
        "Indicator": "% of average daily attendance of teachers recorded in an electronic attendance system",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "10",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "4",
        "Assam": "10",
        "Bihar": "0",
        "Chandigarh": "10",
        "Chhattisgarh": "9",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "10",
        "Goa": "0",
        "Gujarat": "10",
        "Haryana": "7",
        "Himachal Pradesh": "0",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "0",
        "Karnataka": "0",
        "Kerala": "0",
        "Lakshadweep": "0",
        "Madhya Pradesh": "0",
        "Maharashtra": "0",
        "Manipur": "0",
        "Meghalaya": "0",
        "Mizoram": "0",
        "Nagaland": "0",
        "Odisha": "0",
        "Puducherry": "0",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "3",
        "Tamil Nadu": "0",
        "Telangana": "0",
        "Tripura": "0",
        "Uttar Pradesh": "10",
        "Uttarakhand": "0",
        "West Bengal": "0"
    },
    {
        "Serial": "2.1.5",
        "Indicator": "% of Schools at Elementary level Covered Under Twinning/ Partnership",
        "Data Source": "Shagun",
        "Value": "71.930000000000007",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "2",
        "Arunachal Pradesh": "0",
        "Assam": "2",
        "Bihar": "1",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "3",
        "Dadra \n& Nagar Haveli": "2",
        "Delhi": "6",
        "Goa": "10",
        "Gujarat": "3",
        "Haryana": "10",
        "Himachal Pradesh": "1",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "7",
        "Karnataka": "1",
        "Kerala": "10",
        "Lakshadweep": "0",
        "Madhya Pradesh": "10",
        "Maharashtra": "0",
        "Manipur": "1",
        "Meghalaya": "0",
        "Mizoram": "0",
        "Nagaland": "0",
        "Odisha": "0",
        "Puducherry": "1",
        "Punjab": "1",
        "Rajasthan": "10",
        "Sikkim": "9",
        "Tamil Nadu": "1",
        "Telangana": "1",
        "Tripura": "8",
        "Uttar Pradesh": "0",
        "Uttarakhand": "8",
        "West Bengal": "0"
    },
    {
        "Serial": "2.1.6",
        "Indicator": "% of Schools at Elementary level displaying photo of elementary teachers for Govt and aided schools - Govt. and aided schools",
        "Data Source": "Shagun",
        "Value": "95.03",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "4",
        "Arunachal Pradesh": "0",
        "Assam": "10",
        "Bihar": "7",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "3",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "8",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "1",
        "Jammu \n and Kashmir": "9",
        "Jharkhand": "10",
        "Karnataka": "8",
        "Kerala": "10",
        "Lakshadweep": "0",
        "Madhya Pradesh": "10",
        "Maharashtra": "6",
        "Manipur": "6",
        "Meghalaya": "0",
        "Mizoram": "10",
        "Nagaland": "10",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "7",
        "Rajasthan": "10",
        "Sikkim": "9",
        "Tamil Nadu": "0",
        "Telangana": "8",
        "Tripura": "5",
        "Uttar Pradesh": "4",
        "Uttarakhand": "6",
        "West Bengal": "10"
    },
    {
        "Serial": "2.1.7",
        "Indicator": "% of single teacher primary schools",
        "Data Source": "UDISE",
        "Value": "0",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "8",
        "Arunachal Pradesh": "6",
        "Assam": "9",
        "Bihar": "10",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "7",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "9",
        "Jharkhand": "8",
        "Karnataka": "8",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "9",
        "Maharashtra": "10",
        "Manipur": "9",
        "Meghalaya": "10",
        "Mizoram": "10",
        "Nagaland": "10",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "7",
        "Sikkim": "10",
        "Tamil Nadu": "10",
        "Telangana": "8",
        "Tripura": "10",
        "Uttar Pradesh": "10",
        "Uttarakhand": "9",
        "West Bengal": "10"
    },
    {
        "Serial": "2.1.8",
        "Indicator": "% of elementary schools having PTR as per RTE norm",
        "Data Source": "UDISE",
        "Value": "99.71",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "8",
        "Arunachal Pradesh": "7",
        "Assam": "7",
        "Bihar": "3",
        "Chandigarh": "10",
        "Chhattisgarh": "9",
        "Daman \nand Diu": "9",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "8",
        "Goa": "7",
        "Gujarat": "9",
        "Haryana": "8",
        "Himachal Pradesh": "9",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "5",
        "Karnataka": "8",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "7",
        "Maharashtra": "9",
        "Manipur": "9",
        "Meghalaya": "9",
        "Mizoram": "10",
        "Nagaland": "10",
        "Odisha": "9",
        "Puducherry": "10",
        "Punjab": "9",
        "Rajasthan": "7",
        "Sikkim": "10",
        "Tamil Nadu": "9",
        "Telangana": "8",
        "Tripura": "10",
        "Uttar Pradesh": "6",
        "Uttarakhand": "9",
        "West Bengal": "8"
    },
    {
        "Serial": "2.1.9",
        "Indicator": "% of primary and upper primary schools meeting head-teacher norms as per RTE",
        "Data Source": "UDISE",
        "Value": "6.25",
        "Weight": "10",
        "Andaman and Nicobar": "1",
        "Andhra Pradesh": "0",
        "Arunachal Pradesh": "1",
        "Assam": "7",
        "Bihar": "2",
        "Chandigarh": "8",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "4",
        "Dadra \n& Nagar Haveli": "2",
        "Delhi": "1",
        "Goa": "3",
        "Gujarat": "9",
        "Haryana": "6",
        "Himachal Pradesh": "7",
        "Jammu \n and Kashmir": "5",
        "Jharkhand": "1",
        "Karnataka": "6",
        "Kerala": "10",
        "Lakshadweep": "9",
        "Madhya Pradesh": "5",
        "Maharashtra": "6",
        "Manipur": "3",
        "Meghalaya": "8",
        "Mizoram": "8",
        "Nagaland": "8",
        "Odisha": "6",
        "Puducherry": "0",
        "Punjab": "5",
        "Rajasthan": "5",
        "Sikkim": "7",
        "Tamil Nadu": "10",
        "Telangana": "0",
        "Tripura": "6",
        "Uttar Pradesh": "6",
        "Uttarakhand": "7",
        "West Bengal": "5"
    },
    {
        "Serial": "2.1.10",
        "Indicator": "% of secondary schools having principals/ head masters in position",
        "Data Source": "UDISE",
        "Value": "6.19",
        "Weight": "20",
        "Andaman and Nicobar": "2",
        "Andhra Pradesh": "0",
        "Arunachal Pradesh": "10",
        "Assam": "16",
        "Bihar": "8",
        "Chandigarh": "18",
        "Chhattisgarh": "12",
        "Daman \nand Diu": "14",
        "Dadra \n& Nagar Haveli": "20",
        "Delhi": "8",
        "Goa": "16",
        "Gujarat": "16",
        "Haryana": "16",
        "Himachal Pradesh": "16",
        "Jammu \n and Kashmir": "16",
        "Jharkhand": "6",
        "Karnataka": "12",
        "Kerala": "18",
        "Lakshadweep": "16",
        "Madhya Pradesh": "10",
        "Maharashtra": "14",
        "Manipur": "14",
        "Meghalaya": "14",
        "Mizoram": "18",
        "Nagaland": "16",
        "Odisha": "12",
        "Puducherry": "18",
        "Punjab": "14",
        "Rajasthan": "16",
        "Sikkim": "14",
        "Tamil Nadu": "18",
        "Telangana": "10",
        "Tripura": "18",
        "Uttar Pradesh": "14",
        "Uttarakhand": "12",
        "West Bengal": "14"
    },
    {
        "Serial": "2.1.11",
        "Indicator": "Teacher",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "0",
        "Arunachal Pradesh": "0",
        "Assam": "0",
        "Bihar": "0",
        "Chandigarh": "0",
        "Chhattisgarh": "0",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "0",
        "Goa": "0",
        "Gujarat": "0",
        "Haryana": "0",
        "Himachal Pradesh": "0",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "0",
        "Karnataka": "0",
        "Kerala": "0",
        "Lakshadweep": "0",
        "Madhya Pradesh": "0",
        "Maharashtra": "0",
        "Manipur": "0",
        "Meghalaya": "0",
        "Mizoram": "0",
        "Nagaland": "0",
        "Odisha": "0",
        "Puducherry": "0",
        "Punjab": "0",
        "Rajasthan": "0",
        "Sikkim": "0",
        "Tamil Nadu": "0",
        "Telangana": "0",
        "Tripura": "0",
        "Uttar Pradesh": "0",
        "Uttarakhand": "0",
        "West Bengal": "0"
    },
    {
        "Serial": "2.1.11.a",
        "Indicator": "% Upper Primary schools meeting norms of subject-teacher as per RTE",
        "Data Source": "UDISE",
        "Value": "81.290000000000006",
        "Weight": "10",
        "Andaman and Nicobar": "9",
        "Andhra Pradesh": "7",
        "Arunachal Pradesh": "6",
        "Assam": "8",
        "Bihar": "7",
        "Chandigarh": "10",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "5",
        "Dadra \n& Nagar Haveli": "8",
        "Delhi": "10",
        "Goa": "8",
        "Gujarat": "4",
        "Haryana": "8",
        "Himachal Pradesh": "8",
        "Jammu \n and Kashmir": "4",
        "Jharkhand": "5",
        "Karnataka": "2",
        "Kerala": "8",
        "Lakshadweep": "10",
        "Madhya Pradesh": "3",
        "Maharashtra": "2",
        "Manipur": "8",
        "Meghalaya": "8",
        "Mizoram": "8",
        "Nagaland": "8",
        "Odisha": "2",
        "Puducherry": "3",
        "Punjab": "7",
        "Rajasthan": "5",
        "Sikkim": "9",
        "Tamil Nadu": "7",
        "Telangana": "7",
        "Tripura": "5",
        "Uttar Pradesh": "2",
        "Uttarakhand": "8",
        "West Bengal": "6"
    },
    {
        "Serial": "2.1.11.b",
        "Indicator": "% Secondary Schools who have teachers for all core subjects",
        "Data Source": "UDISE",
        "Value": "50.44",
        "Weight": "20",
        "Andaman and Nicobar": "12",
        "Andhra Pradesh": "12",
        "Arunachal Pradesh": "10",
        "Assam": "8",
        "Bihar": "6",
        "Chandigarh": "18",
        "Chhattisgarh": "4",
        "Daman \nand Diu": "8",
        "Dadra \n& Nagar Haveli": "14",
        "Delhi": "20",
        "Goa": "10",
        "Gujarat": "4",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "2",
        "Karnataka": "4",
        "Kerala": "10",
        "Lakshadweep": "8",
        "Madhya Pradesh": "8",
        "Maharashtra": "4",
        "Manipur": "10",
        "Meghalaya": "4",
        "Mizoram": "12",
        "Nagaland": "8",
        "Odisha": "2",
        "Puducherry": "2",
        "Punjab": "10",
        "Rajasthan": "4",
        "Sikkim": "8",
        "Tamil Nadu": "12",
        "Telangana": "10",
        "Tripura": "4",
        "Uttar Pradesh": "2",
        "Uttarakhand": "10",
        "West Bengal": "0"
    },
    {
        "Serial": "2.1.12",
        "Indicator": "% of academic positions filled in state and district academic institutions at the beginning of the given academic year",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "2.1.12.a",
        "Indicator": "SCERT/SIE",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "5",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "1",
        "Arunachal Pradesh": "1",
        "Assam": "2",
        "Bihar": "2",
        "Chandigarh": "3",
        "Chhattisgarh": "5",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "4",
        "Goa": "3",
        "Gujarat": "4",
        "Haryana": "3",
        "Himachal Pradesh": "5",
        "Jammu \n and Kashmir": "5",
        "Jharkhand": "1",
        "Karnataka": "5",
        "Kerala": "3",
        "Lakshadweep": "0",
        "Madhya Pradesh": "5",
        "Maharashtra": "0",
        "Manipur": "4",
        "Meghalaya": "5",
        "Mizoram": "4",
        "Nagaland": "0",
        "Odisha": "3",
        "Puducherry": "5",
        "Punjab": "4",
        "Rajasthan": "3",
        "Sikkim": "3",
        "Tamil Nadu": "5",
        "Telangana": "5",
        "Tripura": "5",
        "Uttar Pradesh": "4",
        "Uttarakhand": "4",
        "West Bengal": "2"
    },
    {
        "Serial": "2.1.12.b",
        "Indicator": "DIETs",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "5",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "1",
        "Arunachal Pradesh": "5",
        "Assam": "3",
        "Bihar": "3",
        "Chandigarh": "0",
        "Chhattisgarh": "3",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "4",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "4",
        "Himachal Pradesh": "5",
        "Jammu \n and Kashmir": "4",
        "Jharkhand": "3",
        "Karnataka": "5",
        "Kerala": "3",
        "Lakshadweep": "4",
        "Madhya Pradesh": "3",
        "Maharashtra": "0",
        "Manipur": "4",
        "Meghalaya": "3",
        "Mizoram": "5",
        "Nagaland": "5",
        "Odisha": "3",
        "Puducherry": "3",
        "Punjab": "4",
        "Rajasthan": "3",
        "Sikkim": "3",
        "Tamil Nadu": "5",
        "Telangana": "3",
        "Tripura": "4",
        "Uttar Pradesh": "2",
        "Uttarakhand": "4",
        "West Bengal": "3"
    },
    {
        "Serial": "2.1.13",
        "Indicator": "Average occupancy (in months) of District Education Officer (or equivalent) & Block Education Officer (or equivalent) in last 03 years for all Districts",
        "Data Source": "Shagun",
        "Value": "12",
        "Weight": "10",
        "Andaman and Nicobar": "4",
        "Andhra Pradesh": "2",
        "Arunachal Pradesh": "2",
        "Assam": "4",
        "Bihar": "3",
        "Chandigarh": "3",
        "Chhattisgarh": "2",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "4",
        "Delhi": "3",
        "Goa": "0",
        "Gujarat": "3",
        "Haryana": "2",
        "Himachal Pradesh": "4",
        "Jammu \n and Kashmir": "4",
        "Jharkhand": "3",
        "Karnataka": "3",
        "Kerala": "2",
        "Lakshadweep": "2",
        "Madhya Pradesh": "5",
        "Maharashtra": "4",
        "Manipur": "4",
        "Meghalaya": "4",
        "Mizoram": "7",
        "Nagaland": "5",
        "Odisha": "4",
        "Puducherry": "4",
        "Punjab": "2",
        "Rajasthan": "2",
        "Sikkim": "6",
        "Tamil Nadu": "2",
        "Telangana": "6",
        "Tripura": "5",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "6"
    },
    {
        "Serial": "2.1.14",
        "Indicator": "Average occupancy (in months) of Principal Secretary (Education)",
        "Data Source": " SPD (SSA) & SPD(RMSA) for last 03 years",
        "Value": "Shagun",
        "Weight": "9",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "4",
        "Bihar": "5",
        "Chandigarh": "4",
        "Chhattisgarh": "5",
        "Daman \nand Diu": "2",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "2",
        "Goa": "4",
        "Gujarat": "6",
        "Haryana": "2",
        "Himachal Pradesh": "3",
        "Jammu \n and Kashmir": "3",
        "Jharkhand": "2",
        "Karnataka": "3",
        "Kerala": "3",
        "Lakshadweep": "3",
        "Madhya Pradesh": "3",
        "Maharashtra": "5",
        "Manipur": "10",
        "Meghalaya": "4",
        "Mizoram": "3",
        "Nagaland": "5",
        "Odisha": "5",
        "Puducherry": "4",
        "Punjab": "4",
        "Rajasthan": "4",
        "Sikkim": "6",
        "Tamil Nadu": "8",
        "Telangana": "2",
        "Tripura": "7",
        "Uttar Pradesh": "4",
        "Uttarakhand": "2",
        "West Bengal": "3"
    },
    {
        "Serial": "2.1.15",
        "Indicator": "Details of visits to the elementary schools during the previous academic year:",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "2.1.15.a",
        "Indicator": "% of schools visited at least 3 times for academic inspections",
        "Data Source": "UDISE",
        "Value": "11.7",
        "Weight": "4",
        "Andaman and Nicobar": "1",
        "Andhra Pradesh": "0",
        "Arunachal Pradesh": "2",
        "Assam": "1",
        "Bihar": "2",
        "Chandigarh": "1",
        "Chhattisgarh": "2",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "3",
        "Goa": "0",
        "Gujarat": "1",
        "Haryana": "1",
        "Himachal Pradesh": "0",
        "Jammu \n and Kashmir": "1",
        "Jharkhand": "1",
        "Karnataka": "0",
        "Kerala": "1",
        "Lakshadweep": "1",
        "Madhya Pradesh": "2",
        "Maharashtra": "0",
        "Manipur": "1",
        "Meghalaya": "1",
        "Mizoram": "1",
        "Nagaland": "1",
        "Odisha": "1",
        "Puducherry": "1",
        "Punjab": "1",
        "Rajasthan": "2",
        "Sikkim": "0",
        "Tamil Nadu": "1",
        "Telangana": "1",
        "Tripura": "3",
        "Uttar Pradesh": "2",
        "Uttarakhand": "1",
        "West Bengal": "1"
    },
    {
        "Serial": "2.1.15.b",
        "Indicator": "% of schools visited at least 3 times by CRC Co-ordinator",
        "Data Source": "UDISE",
        "Value": "20.76",
        "Weight": "3",
        "Andaman and Nicobar": "1",
        "Andhra Pradesh": "2",
        "Arunachal Pradesh": "1",
        "Assam": "2",
        "Bihar": "2",
        "Chandigarh": "2",
        "Chhattisgarh": "2",
        "Daman \nand Diu": "2",
        "Dadra \n& Nagar Haveli": "3",
        "Delhi": "3",
        "Goa": "3",
        "Gujarat": "2",
        "Haryana": "1",
        "Himachal Pradesh": "1",
        "Jammu \n and Kashmir": "1",
        "Jharkhand": "2",
        "Karnataka": "3",
        "Kerala": "2",
        "Lakshadweep": "2",
        "Madhya Pradesh": "2",
        "Maharashtra": "2",
        "Manipur": "1",
        "Meghalaya": "1",
        "Mizoram": "2",
        "Nagaland": "1",
        "Odisha": "2",
        "Puducherry": "0",
        "Punjab": "2",
        "Rajasthan": "0",
        "Sikkim": "0",
        "Tamil Nadu": "3",
        "Telangana": "2",
        "Tripura": "2",
        "Uttar Pradesh": "2",
        "Uttarakhand": "2",
        "West Bengal": "2"
    },
    {
        "Serial": "2.1.15.c",
        "Indicator": "% of schools visited at least 3 times by Block level officer (BRC/BEO)",
        "Data Source": "UDISE",
        "Value": "16.37",
        "Weight": "3",
        "Andaman and Nicobar": "1",
        "Andhra Pradesh": "1",
        "Arunachal Pradesh": "1",
        "Assam": "1",
        "Bihar": "2",
        "Chandigarh": "0",
        "Chhattisgarh": "1",
        "Daman \nand Diu": "1",
        "Dadra \n& Nagar Haveli": "1",
        "Delhi": "1",
        "Goa": "1",
        "Gujarat": "1",
        "Haryana": "1",
        "Himachal Pradesh": "0",
        "Jammu \n and Kashmir": "1",
        "Jharkhand": "1",
        "Karnataka": "1",
        "Kerala": "1",
        "Lakshadweep": "1",
        "Madhya Pradesh": "1",
        "Maharashtra": "1",
        "Manipur": "1",
        "Meghalaya": "0",
        "Mizoram": "1",
        "Nagaland": "1",
        "Odisha": "1",
        "Puducherry": "0",
        "Punjab": "2",
        "Rajasthan": "1",
        "Sikkim": "0",
        "Tamil Nadu": "2",
        "Telangana": "2",
        "Tripura": "1",
        "Uttar Pradesh": "1",
        "Uttarakhand": "1",
        "West Bengal": "0"
    },
    {
        "Serial": "2.1.16",
        "Indicator": "Average number of days taken",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "2.1.16.a",
        "Indicator": "Average number of days taken by State govt. to release total Central share of funds to societies (during the given financial year)",
        "Data Source": "Shagun",
        "Value": "41",
        "Weight": "10",
        "Andaman and Nicobar": "8",
        "Andhra Pradesh": "8",
        "Arunachal Pradesh": "10",
        "Assam": "8",
        "Bihar": "8",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "7",
        "Delhi": "8",
        "Goa": "7",
        "Gujarat": "10",
        "Haryana": "8",
        "Himachal Pradesh": "9",
        "Jammu \n and Kashmir": "8",
        "Jharkhand": "8",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "7",
        "Madhya Pradesh": "9",
        "Maharashtra": "0",
        "Manipur": "5",
        "Meghalaya": "9",
        "Mizoram": "9",
        "Nagaland": "8",
        "Odisha": "9",
        "Puducherry": "9",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "9",
        "Tamil Nadu": "9",
        "Telangana": "6",
        "Tripura": "8",
        "Uttar Pradesh": "7",
        "Uttarakhand": "9",
        "West Bengal": "10"
    },
    {
        "Serial": "2.1.16.b",
        "Indicator": "Average number of days taken by State govt. to release total State share due to State societies (during the given financial year)",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "9",
        "Arunachal Pradesh": "10",
        "Assam": "10",
        "Bihar": "10",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "10",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "10",
        "Goa": "10",
        "Gujarat": "10",
        "Haryana": "9",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "10",
        "Karnataka": "10",
        "Kerala": "10",
        "Lakshadweep": "10",
        "Madhya Pradesh": "10",
        "Maharashtra": "1",
        "Manipur": "10",
        "Meghalaya": "10",
        "Mizoram": "9",
        "Nagaland": "8",
        "Odisha": "10",
        "Puducherry": "7",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "8",
        "Tamil Nadu": "10",
        "Telangana": "7",
        "Tripura": "8",
        "Uttar Pradesh": "10",
        "Uttarakhand": "10",
        "West Bengal": "10"
    },
    {
        "Serial": "2.1.17",
        "Indicator": "% of teachers evaluated (during the given year)",
        "Data Source": "Shagun",
        "Value": "91.32",
        "Weight": "10",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "0",
        "Assam": "0",
        "Bihar": "2",
        "Chandigarh": "10",
        "Chhattisgarh": "7",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "2",
        "Goa": "0",
        "Gujarat": "8",
        "Haryana": "10",
        "Himachal Pradesh": "10",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "1",
        "Karnataka": "0",
        "Kerala": "0",
        "Lakshadweep": "0",
        "Madhya Pradesh": "10",
        "Maharashtra": "10",
        "Manipur": "4",
        "Meghalaya": "0",
        "Mizoram": "0",
        "Nagaland": "0",
        "Odisha": "10",
        "Puducherry": "10",
        "Punjab": "4",
        "Rajasthan": "4",
        "Sikkim": "6",
        "Tamil Nadu": "10",
        "Telangana": "0",
        "Tripura": "2",
        "Uttar Pradesh": "0",
        "Uttarakhand": "5",
        "West Bengal": "0"
    },
    {
        "Serial": "2.1.18",
        "Indicator": "% of govt. head-teachers/principals who have completed School Leadership (SL) training in the given financial year",
        "Data Source": "Shagun",
        "Value": "54.6",
        "Weight": "20",
        "Andaman and Nicobar": "12",
        "Andhra Pradesh": "20",
        "Arunachal Pradesh": "14",
        "Assam": "0",
        "Bihar": "0",
        "Chandigarh": "0",
        "Chhattisgarh": "6",
        "Daman \nand Diu": "20",
        "Dadra \n& Nagar Haveli": "20",
        "Delhi": "10",
        "Goa": "16",
        "Gujarat": "20",
        "Haryana": "20",
        "Himachal Pradesh": "20",
        "Jammu \n and Kashmir": "20",
        "Jharkhand": "8",
        "Karnataka": "0",
        "Kerala": "20",
        "Lakshadweep": "0",
        "Madhya Pradesh": "0",
        "Maharashtra": "20",
        "Manipur": "2",
        "Meghalaya": "0",
        "Mizoram": "0",
        "Nagaland": "0",
        "Odisha": "20",
        "Puducherry": "4",
        "Punjab": "20",
        "Rajasthan": "16",
        "Sikkim": "0",
        "Tamil Nadu": "20",
        "Telangana": "6",
        "Tripura": "0",
        "Uttar Pradesh": "12",
        "Uttarakhand": "0",
        "West Bengal": "0"
    },
    {
        "Serial": "2.1.19",
        "Indicator": "% of schools that have completed self-evaluation and made school improvement plans in the given financial year",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "10",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "10",
        "Arunachal Pradesh": "0",
        "Assam": "10",
        "Bihar": "0",
        "Chandigarh": "10",
        "Chhattisgarh": "10",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "10",
        "Delhi": "0",
        "Goa": "0",
        "Gujarat": "10",
        "Haryana": "10",
        "Himachal Pradesh": "2",
        "Jammu \n and Kashmir": "10",
        "Jharkhand": "1",
        "Karnataka": "9",
        "Kerala": "10",
        "Lakshadweep": "0",
        "Madhya Pradesh": "10",
        "Maharashtra": "0",
        "Manipur": "4",
        "Meghalaya": "10",
        "Mizoram": "10",
        "Nagaland": "0",
        "Odisha": "10",
        "Puducherry": "0",
        "Punjab": "10",
        "Rajasthan": "10",
        "Sikkim": "9",
        "Tamil Nadu": "10",
        "Telangana": "9",
        "Tripura": "10",
        "Uttar Pradesh": "0",
        "Uttarakhand": "10",
        "West Bengal": "10"
    },
    {
        "Serial": "2.1.20",
        "Indicator": "% of teachers provided with sanctioned number of days of training in the given financial year - Govt. and aided",
        "Data Source": "Shagun",
        "Value": "97.79",
        "Weight": "20",
        "Andaman and Nicobar": "20",
        "Andhra Pradesh": "20",
        "Arunachal Pradesh": "0",
        "Assam": "18",
        "Bihar": "12",
        "Chandigarh": "20",
        "Chhattisgarh": "18",
        "Daman \nand Diu": "16",
        "Dadra \n& Nagar Haveli": "20",
        "Delhi": "0",
        "Goa": "18",
        "Gujarat": "18",
        "Haryana": "18",
        "Himachal Pradesh": "20",
        "Jammu \n and Kashmir": "20",
        "Jharkhand": "20",
        "Karnataka": "10",
        "Kerala": "20",
        "Lakshadweep": "20",
        "Madhya Pradesh": "20",
        "Maharashtra": "16",
        "Manipur": "18",
        "Meghalaya": "14",
        "Mizoram": "20",
        "Nagaland": "10",
        "Odisha": "20",
        "Puducherry": "18",
        "Punjab": "0",
        "Rajasthan": "14",
        "Sikkim": "20",
        "Tamil Nadu": "18",
        "Telangana": "16",
        "Tripura": "12",
        "Uttar Pradesh": "8",
        "Uttarakhand": "18",
        "West Bengal": "18"
    },
    {
        "Serial": "2.1.21",
        "Indicator": "Number of new teachers recruited through a transparent online recruitment system as a % of total number of new teachers recruited (in the given year).",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "20",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "0",
        "Arunachal Pradesh": "0",
        "Assam": "20",
        "Bihar": "0",
        "Chandigarh": "20",
        "Chhattisgarh": "0",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "20",
        "Goa": "0",
        "Gujarat": "20",
        "Haryana": "20",
        "Himachal Pradesh": "0",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "0",
        "Karnataka": "20",
        "Kerala": "20",
        "Lakshadweep": "0",
        "Madhya Pradesh": "0",
        "Maharashtra": "0",
        "Manipur": "0",
        "Meghalaya": "0",
        "Mizoram": "20",
        "Nagaland": "0",
        "Odisha": "20",
        "Puducherry": "0",
        "Punjab": "20",
        "Rajasthan": "20",
        "Sikkim": "20",
        "Tamil Nadu": "0",
        "Telangana": "0",
        "Tripura": "20",
        "Uttar Pradesh": "0",
        "Uttarakhand": "0",
        "West Bengal": "20"
    },
    {
        "Serial": "2.1.22",
        "Indicator": "Number of teachers transferred through a transparent online system as a % of total number of teachers transferred",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "20",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "20",
        "Arunachal Pradesh": "0",
        "Assam": "18",
        "Bihar": "0",
        "Chandigarh": "0",
        "Chhattisgarh": "0",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "20",
        "Goa": "0",
        "Gujarat": "20",
        "Haryana": "20",
        "Himachal Pradesh": "4",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "0",
        "Karnataka": "0",
        "Kerala": "20",
        "Lakshadweep": "0",
        "Madhya Pradesh": "20",
        "Maharashtra": "0",
        "Manipur": "0",
        "Meghalaya": "0",
        "Mizoram": "0",
        "Nagaland": "0",
        "Odisha": "0",
        "Puducherry": "0",
        "Punjab": "0",
        "Rajasthan": "0",
        "Sikkim": "0",
        "Tamil Nadu": "20",
        "Telangana": "0",
        "Tripura": "0",
        "Uttar Pradesh": "0",
        "Uttarakhand": "0",
        "West Bengal": "18"
    },
    {
        "Serial": "2.1.23",
        "Indicator": "Number of head-teachers/principals recruited through a merit-based selection system as a % of total number of head-teachers/principals recruited (in the given year)",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "20",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "0",
        "Arunachal Pradesh": "0",
        "Assam": "0",
        "Bihar": "0",
        "Chandigarh": "20",
        "Chhattisgarh": "0",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "0",
        "Goa": "0",
        "Gujarat": "20",
        "Haryana": "0",
        "Himachal Pradesh": "20",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "0",
        "Karnataka": "0",
        "Kerala": "0",
        "Lakshadweep": "0",
        "Madhya Pradesh": "0",
        "Maharashtra": "0",
        "Manipur": "0",
        "Meghalaya": "20",
        "Mizoram": "0",
        "Nagaland": "0",
        "Odisha": "0",
        "Puducherry": "20",
        "Punjab": "0",
        "Rajasthan": "0",
        "Sikkim": "0",
        "Tamil Nadu": "0",
        "Telangana": "20",
        "Tripura": "0",
        "Uttar Pradesh": "0",
        "Uttarakhand": "0",
        "West Bengal": "0"
    },
    {
        "Serial": "2.1.24",
        "Indicator": "% State budget share spent on education to total state budget",
        "Data Source": "Shagun",
        "Value": "10.5",
        "Weight": "20",
        "Andaman and Nicobar": "12",
        "Andhra Pradesh": "12",
        "Arunachal Pradesh": "20",
        "Assam": "4",
        "Bihar": "16",
        "Chandigarh": "10",
        "Chhattisgarh": "18",
        "Daman \nand Diu": "4",
        "Dadra \n& Nagar Haveli": "16",
        "Delhi": "20",
        "Goa": "8",
        "Gujarat": "16",
        "Haryana": "12",
        "Himachal Pradesh": "16",
        "Jammu \n and Kashmir": "8",
        "Jharkhand": "14",
        "Karnataka": "12",
        "Kerala": "4",
        "Lakshadweep": "0",
        "Madhya Pradesh": "12",
        "Maharashtra": "0",
        "Manipur": "6",
        "Meghalaya": "14",
        "Mizoram": "12",
        "Nagaland": "0",
        "Odisha": "14",
        "Puducherry": "10",
        "Punjab": "10",
        "Rajasthan": "16",
        "Sikkim": "14",
        "Tamil Nadu": "14",
        "Telangana": "0",
        "Tripura": "0",
        "Uttar Pradesh": "0",
        "Uttarakhand": "14",
        "West Bengal": "4"
    },
    {
        "Serial": "2.1.25",
        "Indicator": "Funds (including value of goods and services in kind) arranged through PPP",
        "Data Source": " CSR as a percentage of State budget on schools education",
        "Value": "Shagun",
        "Weight": "0",
        "Andaman and Nicobar": "10",
        "Andhra Pradesh": "0",
        "Arunachal Pradesh": "1",
        "Assam": "0",
        "Bihar": "0",
        "Chandigarh": "0",
        "Chhattisgarh": "0",
        "Daman \nand Diu": "5",
        "Dadra \n& Nagar Haveli": "9",
        "Delhi": "0",
        "Goa": "0",
        "Gujarat": "1",
        "Haryana": "10",
        "Himachal Pradesh": "1",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "0",
        "Karnataka": "0",
        "Kerala": "1",
        "Lakshadweep": "4",
        "Madhya Pradesh": "0",
        "Maharashtra": "1",
        "Manipur": "10",
        "Meghalaya": "1",
        "Mizoram": "0",
        "Nagaland": "1",
        "Odisha": "0",
        "Puducherry": "1",
        "Punjab": "1",
        "Rajasthan": "1",
        "Sikkim": "3",
        "Tamil Nadu": "0",
        "Telangana": "0",
        "Tripura": "0",
        "Uttar Pradesh": "0",
        "Uttarakhand": "0",
        "West Bengal": "10"
    },
    {
        "Serial": "2.1.26",
        "Indicator": "Percentage of each of the following registered under PFMS :",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "",
        "Andhra Pradesh": "",
        "Arunachal Pradesh": "",
        "Assam": "",
        "Bihar": "",
        "Chandigarh": "",
        "Chhattisgarh": "",
        "Daman \nand Diu": "",
        "Dadra \n& Nagar Haveli": "",
        "Delhi": "",
        "Goa": "",
        "Gujarat": "",
        "Haryana": "",
        "Himachal Pradesh": "",
        "Jammu \n and Kashmir": "",
        "Jharkhand": "",
        "Karnataka": "",
        "Kerala": "",
        "Lakshadweep": "",
        "Madhya Pradesh": "",
        "Maharashtra": "",
        "Manipur": "",
        "Meghalaya": "",
        "Mizoram": "",
        "Nagaland": "",
        "Odisha": "",
        "Puducherry": "",
        "Punjab": "",
        "Rajasthan": "",
        "Sikkim": "",
        "Tamil Nadu": "",
        "Telangana": "",
        "Tripura": "",
        "Uttar Pradesh": "",
        "Uttarakhand": "",
        "West Bengal": ""
    },
    {
        "Serial": "2.1.26.a",
        "Indicator": "Schools",
        "Data Source": "Shagun",
        "Value": "88.07",
        "Weight": "4",
        "Andaman and Nicobar": "4",
        "Andhra Pradesh": "4",
        "Arunachal Pradesh": "0",
        "Assam": "0",
        "Bihar": "4",
        "Chandigarh": "4",
        "Chhattisgarh": "4",
        "Daman \nand Diu": "4",
        "Dadra \n& Nagar Haveli": "4",
        "Delhi": "0",
        "Goa": "0",
        "Gujarat": "4",
        "Haryana": "4",
        "Himachal Pradesh": "2",
        "Jammu \n and Kashmir": "3",
        "Jharkhand": "4",
        "Karnataka": "4",
        "Kerala": "4",
        "Lakshadweep": "0",
        "Madhya Pradesh": "4",
        "Maharashtra": "4",
        "Manipur": "2",
        "Meghalaya": "2",
        "Mizoram": "4",
        "Nagaland": "3",
        "Odisha": "4",
        "Puducherry": "4",
        "Punjab": "4",
        "Rajasthan": "4",
        "Sikkim": "0",
        "Tamil Nadu": "4",
        "Telangana": "0",
        "Tripura": "0",
        "Uttar Pradesh": "4",
        "Uttarakhand": "4",
        "West Bengal": "0"
    },
    {
        "Serial": "2.1.26.b",
        "Indicator": "SCERT (Note: Every State/UT which does not have an SCERT should have an equivalent which should be considered here)",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "3",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "3",
        "Bihar": "0",
        "Chandigarh": "3",
        "Chhattisgarh": "3",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "0",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "0",
        "Himachal Pradesh": "0",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "0",
        "Karnataka": "0",
        "Kerala": "3",
        "Lakshadweep": "0",
        "Madhya Pradesh": "3",
        "Maharashtra": "3",
        "Manipur": "0",
        "Meghalaya": "3",
        "Mizoram": "3",
        "Nagaland": "3",
        "Odisha": "3",
        "Puducherry": "0",
        "Punjab": "3",
        "Rajasthan": "3",
        "Sikkim": "0",
        "Tamil Nadu": "3",
        "Telangana": "0",
        "Tripura": "0",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "3"
    },
    {
        "Serial": "2.1.26.c",
        "Indicator": "DIETs",
        "Data Source": "Shagun",
        "Value": "0",
        "Weight": "3",
        "Andaman and Nicobar": "0",
        "Andhra Pradesh": "3",
        "Arunachal Pradesh": "3",
        "Assam": "0",
        "Bihar": "0",
        "Chandigarh": "0",
        "Chhattisgarh": "3",
        "Daman \nand Diu": "0",
        "Dadra \n& Nagar Haveli": "0",
        "Delhi": "0",
        "Goa": "3",
        "Gujarat": "3",
        "Haryana": "0",
        "Himachal Pradesh": "3",
        "Jammu \n and Kashmir": "0",
        "Jharkhand": "0",
        "Karnataka": "0",
        "Kerala": "0",
        "Lakshadweep": "0",
        "Madhya Pradesh": "3",
        "Maharashtra": "3",
        "Manipur": "0",
        "Meghalaya": "3",
        "Mizoram": "3",
        "Nagaland": "0",
        "Odisha": "3",
        "Puducherry": "0",
        "Punjab": "0",
        "Rajasthan": "3",
        "Sikkim": "0",
        "Tamil Nadu": "3",
        "Telangana": "0",
        "Tripura": "0",
        "Uttar Pradesh": "3",
        "Uttarakhand": "3",
        "West Bengal": "0"
    },
    {
        "Serial": "",
        "Indicator": "Total",
        "Data Source": "",
        "Value": "",
        "Weight": "",
        "Andaman and Nicobar": "160",
        "Andhra Pradesh": "211",
        "Arunachal Pradesh": "134",
        "Assam": "211",
        "Bihar": "140",
        "Chandigarh": "255",
        "Chhattisgarh": "213",
        "Daman \nand Diu": "152",
        "Dadra \n& Nagar Haveli": "193",
        "Delhi": "223",
        "Goa": "163",
        "Gujarat": "279",
        "Haryana": "252",
        "Himachal Pradesh": "215",
        "Jammu \n and Kashmir": "168",
        "Jharkhand": "144",
        "Karnataka": "165",
        "Kerala": "254",
        "Lakshadweep": "133",
        "Madhya Pradesh": "207",
        "Maharashtra": "155",
        "Manipur": "149",
        "Meghalaya": "165",
        "Mizoram": "208",
        "Nagaland": "130",
        "Odisha": "223",
        "Puducherry": "168",
        "Punjab": "214",
        "Rajasthan": "234",
        "Sikkim": "215",
        "Tamil Nadu": "224",
        "Telangana": "167",
        "Tripura": "173",
        "Uttar Pradesh": "134",
        "Uttarakhand": "188",
        "West Bengal": "189"
    }
];
var domains = [
    {
        key: 'Domain_1',
        value: "Learning Outcomes & Quality",
        max: 180,
        img: 'assets/images/domains-icon/lo.png',
        id: 'lo',
        banner: 'd-1.jpg',
        text: 'The indicators in this domain mainly deal with the scores of students in Language and Mathematics in standard 3, 5 and 8 of Govt. and aided schools.'
    },
    {
        key: 'Domain_2',
        value: "Access",
        max: 80,
        img: 'assets/images/domains-icon/ac.png',
        id: 'ac',
        banner: 'd-2.jpg',
        text: 'The indicators in this domain relate to Net Enrolment Ratio at elementary and secondary level, Retention rate at primary, elementary and secondary level and Transition rate from primary to upper-primary level and from upper-primary to secondary level. Mainstreaming of out of school children is also included in this domain.'
    },
    {
        key: 'Domain_3',
        value: "Infrastructure & Facilities",
        max: 150,
        img: 'assets/images/domains-icon/in.png',
        id: 'in',
        banner: 'd-3.jpg',
        text: 'The indicators in this domain are mainly related to infrastructure in schools to enable adequate facilities for teaching and learning. These include functional toilets, availability of clean drinking water, Science and Computer laboratories at secondary and senior secondary level, libraries, provision of vocational education, etc.'
    },
    {
        key: 'Domain_4',
        value: "Equity",
        max: 230,
        img: 'assets/images/domains-icon/eq.png',
        id: 'eq',
        banner: 'd-4.jpg',
        text: 'This domain deals with indicators relating to comparative performance of learning outcomes of various categories of students (viz. General category vis-à-vis Scheduled Castes/Scheduled Tribes, Rural and Urban areas, Boys and Girls). It also includes Children with Special Need (CWSN).'
    },
    {
        key: 'Domain_5',
        value: "Governance Processes",
        max: 360,
        img: 'assets/images/domains-icon/gp.png',
        id: 'gp',
        banner: 'd-5.jpg',
        text: 'This domain deals with indicators relating to management and administration of school education. The fact that this domain has maximum weightage for the PGI underscores its importance in determining the performance of school education system in States and UTs.'
    }
];



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\KG\Codebase\PGI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map