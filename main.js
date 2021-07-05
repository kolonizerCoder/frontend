(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\datatrained\Live-Session-Chat-Complete-admin\Live-Session-Chat-Complete-admin\src\main.ts */"zUnb");


/***/ }),

/***/ "3Dxn":
/*!*************************************************!*\
  !*** ./src/app/utilities/http_error_message.ts ***!
  \*************************************************/
/*! exports provided: ERROR_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGE", function() { return ERROR_MESSAGE; });
const ERROR_MESSAGE = (message, err) => {
    switch (message) {
        case 'jwt expired':
            localStorage.clear();
            return 'Your token has expired.Plese login';
        case `E11000 duplicate key error collection: liveSession.categories index: category_name_1 dup key: { category_name: "Academics Team" }`:
            return 'Category Already Found';
        default:
            return message;
    }
};


/***/ }),

/***/ "ATLQ":
/*!********************************************************!*\
  !*** ./src/app/SharedModule/primeng/primeng.module.ts ***!
  \********************************************************/
/*! exports provided: PrimengModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimengModule", function() { return PrimengModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/autocomplete */ "V5BG");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/chips */ "RGqm");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/keyfilter */ "sKUQ");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/multiselect */ "lVkt");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/steps */ "KcHJ");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tree */ "g9iH");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/treetable */ "EVgl");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/message */ "FMpt");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/menu */ "1SLH");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/accordion */ "7LiV");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/badge */ "fqaE");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/divider */ "lUkA");




























const primeng = [
    primeng_autocomplete__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
    primeng_chips__WEBPACK_IMPORTED_MODULE_5__["ChipsModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
    primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"],
    primeng_keyfilter__WEBPACK_IMPORTED_MODULE_9__["KeyFilterModule"],
    primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__["MultiSelectModule"],
    primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
    primeng_steps__WEBPACK_IMPORTED_MODULE_12__["StepsModule"],
    primeng_password__WEBPACK_IMPORTED_MODULE_13__["PasswordModule"],
    primeng_tree__WEBPACK_IMPORTED_MODULE_14__["TreeModule"],
    primeng_treetable__WEBPACK_IMPORTED_MODULE_15__["TreeTableModule"],
    primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__["ProgressSpinnerModule"],
    primeng_message__WEBPACK_IMPORTED_MODULE_18__["MessageModule"],
    primeng_messages__WEBPACK_IMPORTED_MODULE_17__["MessagesModule"],
    primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
    primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"],
    primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
    primeng_accordion__WEBPACK_IMPORTED_MODULE_23__["AccordionModule"],
    primeng_badge__WEBPACK_IMPORTED_MODULE_24__["BadgeModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__["TooltipModule"],
    primeng_divider__WEBPACK_IMPORTED_MODULE_26__["DividerModule"],
];
class PrimengModule {
}
PrimengModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrimengModule });
PrimengModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PrimengModule_Factory(t) { return new (t || PrimengModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
        primeng_chips__WEBPACK_IMPORTED_MODULE_5__["ChipsModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"],
        primeng_keyfilter__WEBPACK_IMPORTED_MODULE_9__["KeyFilterModule"],
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__["MultiSelectModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
        primeng_steps__WEBPACK_IMPORTED_MODULE_12__["StepsModule"],
        primeng_password__WEBPACK_IMPORTED_MODULE_13__["PasswordModule"],
        primeng_tree__WEBPACK_IMPORTED_MODULE_14__["TreeModule"],
        primeng_treetable__WEBPACK_IMPORTED_MODULE_15__["TreeTableModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__["ProgressSpinnerModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_18__["MessageModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_17__["MessagesModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_23__["AccordionModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_24__["BadgeModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__["TooltipModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_26__["DividerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimengModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
        primeng_chips__WEBPACK_IMPORTED_MODULE_5__["ChipsModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"],
        primeng_keyfilter__WEBPACK_IMPORTED_MODULE_9__["KeyFilterModule"],
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__["MultiSelectModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
        primeng_steps__WEBPACK_IMPORTED_MODULE_12__["StepsModule"],
        primeng_password__WEBPACK_IMPORTED_MODULE_13__["PasswordModule"],
        primeng_tree__WEBPACK_IMPORTED_MODULE_14__["TreeModule"],
        primeng_treetable__WEBPACK_IMPORTED_MODULE_15__["TreeTableModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__["ProgressSpinnerModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_18__["MessageModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_17__["MessagesModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_23__["AccordionModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_24__["BadgeModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__["TooltipModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_26__["DividerModule"]], exports: [primeng_autocomplete__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
        primeng_chips__WEBPACK_IMPORTED_MODULE_5__["ChipsModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"],
        primeng_keyfilter__WEBPACK_IMPORTED_MODULE_9__["KeyFilterModule"],
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__["MultiSelectModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
        primeng_steps__WEBPACK_IMPORTED_MODULE_12__["StepsModule"],
        primeng_password__WEBPACK_IMPORTED_MODULE_13__["PasswordModule"],
        primeng_tree__WEBPACK_IMPORTED_MODULE_14__["TreeModule"],
        primeng_treetable__WEBPACK_IMPORTED_MODULE_15__["TreeTableModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__["ProgressSpinnerModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_18__["MessageModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_17__["MessagesModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_23__["AccordionModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_24__["BadgeModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__["TooltipModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_26__["DividerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimengModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng],
                exports: [primeng],
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    ATTACHMENT_URL: 'https://files.datatrained.com/upload-files',
    FILES_URL: 'https://files.datatrained.com',
    time_api_url: 'http://worldclockapi.com/api/json/utc/now',
    BASE_SERVER_URL: 'https://ops-api.datatrained.org/liveSessionBackend',
};


/***/ }),

/***/ "GXBN":
/*!********************************************************!*\
  !*** ./src/app/component/spinner/spinner.component.ts ***!
  \********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");



class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 2, vars: 0, consts: [[1, "spinner"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-progressSpinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_progressspinner__WEBPACK_IMPORTED_MODULE_1__["ProgressSpinner"]], styles: ["@keyframes p-progress-spinner-color {\n  100%, 0% {\n    stroke: #d62d20;\n  }\n  40% {\n    stroke: #0057e7;\n  }\n  66% {\n    stroke: #008744;\n  }\n  80%, 90% {\n    stroke: #ffa700;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFFRSxlQUFBO0VBQUY7RUFFQTtJQUNFLGVBQUE7RUFBRjtFQUVBO0lBQ0UsZUFBQTtFQUFGO0VBRUE7SUFFRSxlQUFBO0VBREY7QUFDRiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBwLXByb2dyZXNzLXNwaW5uZXItY29sb3Ige1xuICAxMDAlLFxuICAwJSB7XG4gICAgc3Ryb2tlOiAjZDYyZDIwO1xuICB9XG4gIDQwJSB7XG4gICAgc3Ryb2tlOiAjMDA1N2U3O1xuICB9XG4gIDY2JSB7XG4gICAgc3Ryb2tlOiAjMDA4NzQ0O1xuICB9XG4gIDgwJSxcbiAgOTAlIHtcbiAgICBzdHJva2U6ICNmZmE3MDA7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Q8jT":
/*!******************************************************************!*\
  !*** ./src/app/component/pagenotfound/pagenotfound.component.ts ***!
  \******************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/main"]; };
class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(); };
PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 6, vars: 2, consts: [[1, "w-100", "h-100", "d-flex", "justify-content-center", "flex-column", "align-items-center"], ["src", "assets/images/404.jpg", "alt", "", 1, "page-not-found"], [1, "goto"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-button-raised"], [3, "routerLink"]], template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Goto Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".page-not-found[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: contain;\n}\n\n.goto[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 30%;\n}\n\n.goto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n\n.goto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlbm90Zm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUFFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFTiIsImZpbGUiOiJwYWdlbm90Zm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1ub3QtZm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmdvdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzAlO1xuICBidXR0b24ge1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG5cbiAgICBhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagenotfound',
                templateUrl: './pagenotfound.component.html',
                styleUrls: ['./pagenotfound.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S5PD":
/*!**************************************************************************!*\
  !*** ./src/app/SharedModule/shared-utilities/shared-utilities.module.ts ***!
  \**************************************************************************/
/*! exports provided: SharedUtilitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedUtilitiesModule", function() { return SharedUtilitiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/spinner/spinner.component */ "GXBN");
/* harmony import */ var _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primeng/primeng.module */ "ATLQ");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-csv-parser */ "U7/n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-moment */ "QUrN");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _pipe_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipe/sanitize-html.pipe */ "o4GV");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");












class SharedUtilitiesModule {
}
SharedUtilitiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedUtilitiesModule });
SharedUtilitiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedUtilitiesModule_Factory(t) { return new (t || SharedUtilitiesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_3__["PrimengModule"],
            ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_7__["MomentModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollModule"],
        ], ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        ngx_moment__WEBPACK_IMPORTED_MODULE_7__["MomentModule"],
        ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedUtilitiesModule, { declarations: [_component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"], _pipe_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SanitizeHtmlPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_3__["PrimengModule"],
        ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        ngx_moment__WEBPACK_IMPORTED_MODULE_7__["MomentModule"],
        ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollModule"]], exports: [_component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"],
        ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        ngx_moment__WEBPACK_IMPORTED_MODULE_7__["MomentModule"],
        ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"],
        _pipe_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SanitizeHtmlPipe"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedUtilitiesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"], _pipe_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SanitizeHtmlPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_3__["PrimengModule"],
                    ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    ngx_moment__WEBPACK_IMPORTED_MODULE_7__["MomentModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"],
                    ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollModule"],
                ],
                exports: [
                    _component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"],
                    ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    ngx_moment__WEBPACK_IMPORTED_MODULE_7__["MomentModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"],
                    _pipe_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SanitizeHtmlPipe"],
                    ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill */ "kzlf");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill-image-resize-module */ "8xju");
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/live-session-chat.service */ "cN4R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






quill__WEBPACK_IMPORTED_MODULE_1___default.a.register('modules/imageResize', quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default.a);
class AppComponent {
    constructor(live_session_chat_service) {
        this.live_session_chat_service = live_session_chat_service;
        this.title = 'LiveSessionChatAdmin';
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.live_session_chat_service.join_room({
            room_id: localStorage.getItem('uid'),
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.live_session_chat_service.disconnect();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_3__["LiveSessionChatService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_3__["LiveSessionChatService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _component_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/pagenotfound/pagenotfound.component */ "Q8jT");
/* harmony import */ var _SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SharedModule/primeng/primeng.module */ "ATLQ");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SharedModule/shared-utilities/shared-utilities.module */ "S5PD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Interceptor_global_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Interceptor/global.interceptor */ "bVb2");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-quill */ "CzEO");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _Interceptor_global_interceptor__WEBPACK_IMPORTED_MODULE_10__["GlobalInterceptor"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_6__["PrimengModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_8__["SharedUtilitiesModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _component_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_6__["PrimengModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_8__["SharedUtilitiesModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _component_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_6__["PrimengModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_8__["SharedUtilitiesModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModule"].forRoot(),
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: _Interceptor_global_interceptor__WEBPACK_IMPORTED_MODULE_10__["GlobalInterceptor"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bVb2":
/*!***************************************************!*\
  !*** ./src/app/Interceptor/global.interceptor.ts ***!
  \***************************************************/
/*! exports provided: GlobalInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalInterceptor", function() { return GlobalInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utilities_http_error_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/http_error_message */ "3Dxn");





class GlobalInterceptor {
    constructor() { }
    handleError(err) {
        err['errorMessage'] = Object(_utilities_http_error_message__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE"])(err.error.message, err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
    }
    intercept(request, next) {
        const token = `Bearer ${localStorage.getItem('token')}`;
        if (!token) {
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
        request = request.clone({
            setHeaders: {
                Authorization: token,
            },
        });
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
GlobalInterceptor.ɵfac = function GlobalInterceptor_Factory(t) { return new (t || GlobalInterceptor)(); };
GlobalInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalInterceptor, factory: GlobalInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cN4R":
/*!******************************************************!*\
  !*** ./src/app/service/live-session-chat.service.ts ***!
  \******************************************************/
/*! exports provided: LiveSessionChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveSessionChatService", function() { return LiveSessionChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class LiveSessionChatService {
    constructor() {
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_SERVER_URL, {
            upgrade: false,
            transports: ['websocket'],
        });
    }
    join_room(data) {
        this.socket.emit('join', data);
    }
    send_message(message, data) {
        this.socket.emit('message', message, data);
    }
    assign_chat_to_admin(data) {
        this.socket.emit('assign-chat-to-admin', data);
    }
    end_all_chat(data) {
        this.socket.emit('end-all-chat', data);
    }
    transfer(data) {
        this.socket.emit('transfer', data);
    }
    disconnect() {
        this.socket.disconnect(() => {
            this.socket.removeAllListeners();
        });
    }
    remove_listen() {
        this.socket.removeAllListeners();
    }
    leave(data) {
        this.socket.emit('leave', data);
    }
    update_notification(data) {
        this.socket.emit('update-notification-read', data);
    }
    new_message_received() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.socket.on('new message', (data) => observer.next(data));
            return () => this.socket.disconnect();
        });
    }
    increment_admin_counter() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.socket.on('increment counter', (data) => observer.next(data));
            return () => this.socket.disconnect();
        });
    }
    assign_chat() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.socket.on('assign-chat', (data) => observer.next(data));
            return () => this.socket.disconnect();
        });
    }
    end_chat() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.socket.on('end-chat', (data) => observer.next(data));
            return () => this.socket.disconnect();
        });
    }
    transfer_chat() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.socket.on('transfer-chat', (data) => observer.next(data));
            return () => this.socket.disconnect();
        });
    }
    new_ticket() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.socket.on('ticket-notification', (data) => observer.next(data));
            return () => this.socket.disconnect();
        });
    }
    new_reply_ticket() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.socket.on('new-reply-ticket', (data) => observer.next(data));
            return () => this.socket.disconnect();
        });
    }
    update_notification_list() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.socket.on('upadte-notification-list', (data) => observer.next(data));
            return () => this.socket.disconnect();
        });
    }
    ticket_reply(message, room, uid) {
        this.socket.emit('ticket-reply', message, room, uid);
    }
}
LiveSessionChatService.ɵfac = function LiveSessionChatService_Factory(t) { return new (t || LiveSessionChatService)(); };
LiveSessionChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LiveSessionChatService, factory: LiveSessionChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveSessionChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jfKN":
/*!*******************************************!*\
  !*** ./src/app/gaurd/auth-gaurd.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGaurdGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdGuard", function() { return AuthGaurdGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGaurdGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Login',
            }).then(() => this.router.navigate(['']));
            return false;
        }
    }
}
AuthGaurdGuard.ɵfac = function AuthGaurdGuard_Factory(t) { return new (t || AuthGaurdGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGaurdGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGaurdGuard, factory: AuthGaurdGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGaurdGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "o4GV":
/*!********************************************!*\
  !*** ./src/app/pipe/sanitize-html.pipe.ts ***!
  \********************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SanitizeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(html) {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    }
}
SanitizeHtmlPipe.ɵfac = function SanitizeHtmlPipe_Factory(t) { return new (t || SanitizeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SanitizeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sanitizeHtml", type: SanitizeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SanitizeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sanitizeHtml',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/pagenotfound/pagenotfound.component */ "Q8jT");
/* harmony import */ var _gaurd_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gaurd/auth-gaurd.guard */ "jfKN");
/* harmony import */ var _gaurd_login_gaurd_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gaurd/login-gaurd.guard */ "ySLE");







const routes = [
    {
        path: '',
        canActivate: [_gaurd_login_gaurd_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGaurdGuard"]],
        loadChildren: () => Promise.all(/*! import() | Module-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("Module-login-login-module")]).then(__webpack_require__.bind(null, /*! ./Module/login/login.module */ "tSze")).then((m) => m.LoginModule),
    },
    {
        path: 'main',
        canActivate: [_gaurd_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGaurdGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | Module-main-main-module */ "Module-main-main-module").then(__webpack_require__.bind(null, /*! ./Module/main/main.module */ "N4zb")).then((m) => m.MainModule),
    },
    { path: '**', component: _component_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__["PagenotfoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ySLE":
/*!********************************************!*\
  !*** ./src/app/gaurd/login-gaurd.guard.ts ***!
  \********************************************/
/*! exports provided: LoginGaurdGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGaurdGuard", function() { return LoginGaurdGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LoginGaurdGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('uid') && localStorage.getItem('token')) {
            this.router.navigate(['/main']);
        }
        else {
            return true;
        }
    }
}
LoginGaurdGuard.ɵfac = function LoginGaurdGuard_Factory(t) { return new (t || LoginGaurdGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginGaurdGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGaurdGuard, factory: LoginGaurdGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGaurdGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map