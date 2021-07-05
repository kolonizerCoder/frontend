(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Module-main-main-module"],{

/***/ "1liP":
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class NotificationService {
    constructor(http) {
        this.http = http;
    }
    get_my_notification(uid, skip) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/notification/get-my-notification/${uid}/${skip}`);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "EjJx":
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/*! exports provided: default, InvalidTokenError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidTokenError", function() { return n; });
function e(e){this.message=e}e.prototype=new Error,e.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,"");if(t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,i=0,c="";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function t(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e}function o(e,r){if("string"!=typeof e)throw new n("Invalid token specified");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(".")[o]))}catch(e){throw new n("Invalid token specified: "+e.message)}}n.prototype=new Error,n.prototype.name="InvalidTokenError";/* harmony default export */ __webpack_exports__["default"] = (o);
//# sourceMappingURL=jwt-decode.esm.js.map


/***/ }),

/***/ "GxyC":
/*!*****************************************!*\
  !*** ./src/app/utilities/Decode_jwt.ts ***!
  \*****************************************/
/*! exports provided: ACTIVE_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_USER", function() { return ACTIVE_USER; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "EjJx");

const ACTIVE_USER = () => Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(localStorage.getItem('token'));


/***/ }),

/***/ "N4zb":
/*!********************************************!*\
  !*** ./src/app/Module/main/main.module.ts ***!
  \********************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "rj+u");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/header/header.component */ "Pk+G");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/footer/footer.component */ "xb3B");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/main/main.component */ "vH0y");
/* harmony import */ var _component_aside_aside_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/aside/aside.component */ "h5dU");
/* harmony import */ var src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/SharedModule/primeng/primeng.module */ "ATLQ");
/* harmony import */ var src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/SharedModule/shared-utilities/shared-utilities.module */ "S5PD");










class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
            src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_7__["PrimengModule"],
            src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_8__["SharedUtilitiesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_component_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _component_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _component_aside_aside_component__WEBPACK_IMPORTED_MODULE_6__["AsideComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
        src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_7__["PrimengModule"],
        src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_8__["SharedUtilitiesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _component_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _component_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                    _component_aside_aside_component__WEBPACK_IMPORTED_MODULE_6__["AsideComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                    src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_7__["PrimengModule"],
                    src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_8__["SharedUtilitiesModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Pk+G":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_utilities_Decode_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/Decode_jwt */ "GxyC");
/* harmony import */ var src_app_service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/live-session-chat.service */ "cN4R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/notification.service */ "1liP");







const _c0 = ["sound"];
const _c1 = function () { return ["update-password"]; };
class HeaderComponent {
    constructor(live_session_service, router, notification_service) {
        this.live_session_service = live_session_service;
        this.router = router;
        this.notification_service = notification_service;
        this.notification = [];
        this.count = 0;
        this.spinner = false;
        this.live_session_service.new_ticket().subscribe((res) => {
            if (res.sender_type !== 'admin') {
                res.createdAt = Date.now();
                this.sound.nativeElement.pause();
                this.sound.nativeElement.currentTime = 0;
                this.sound.nativeElement.play();
                this.notification.unshift(res);
                this.count++;
            }
        });
        this.live_session_service.update_notification_list().subscribe(() => {
            this.get_notification(0);
            console.log('get');
        });
    }
    show_aside() {
        const arrow = document.querySelector('.arrow');
        document.querySelector('body').classList.toggle('sidebar-hidden');
        arrow.classList.toggle('arrow-swing');
    }
    get_notification(skip) {
        this.spinner = true;
        this.notification_service
            .get_my_notification(localStorage.getItem('uid'), skip)
            .subscribe((res) => {
            this.count = res.count;
            this.notification = res.data;
            this.spinner = false;
        }, (error) => this.error_handler(error));
    }
    error_handler(error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.errorMessage,
        }).then(() => {
            this.spinner = false;
            this.router.navigate(['/main']);
        });
    }
    logout() {
        localStorage.clear();
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            icon: 'success',
            title: 'Logout',
        }).then(() => this.router.navigate(['']));
    }
    onScroll() {
        this.notification_service
            .get_my_notification(localStorage.getItem('uid'), this.notification.length)
            .subscribe((res) => {
            this.count = res.count;
            res.data.forEach((element) => this.notification.push(element));
        }, (error) => this.error_handler(error));
    }
    ngOnInit() {
        this.user = Object(src_app_utilities_Decode_jwt__WEBPACK_IMPORTED_MODULE_2__["ACTIVE_USER"])();
        // this.get_notification(0);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_3__["LiveSessionChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sound = _t.first);
    } }, decls: 25, vars: 2, consts: [[1, "page-header"], [1, "navbar", "navbar-expand-lg", "d-flex", "justify-content-between"], ["id", "navbarNav", 1, ""], [1, "navbar-nav"], [1, "nav-item"], ["href", "javascript:void(0)", 1, "nav-link", "d-block", 3, "click"], [1, "fas", "fa-arrow-right", "arrow"], [1, "header-logo", "d-none", "d-sm-block"], ["href", "index.html", 1, ""], ["src", "assets/images/logo.png", "alt", ""], ["id", "headerNav", 1, ""], [1, "nav-item", "dropdown"], ["href", "#", "id", "profileDropDown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "profile-dropdown"], ["src", "../../assets/images/avatars/user.svg", "alt", ""], ["aria-labelledby", "profileDropDown", 1, "dropdown-menu", "dropdown-menu-end", "profile-drop-menu"], ["href", "javascript:void(0)", "routerLinkActive", "router-link-active", 1, "dropdown-item", 3, "routerLink"], ["data-feather", "user"], [1, "dropdown-divider"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], ["data-feather", "log-out"], ["src", "../../../assets/Sound/pop.mp3"], ["sound", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener() { return ctx.show_aside(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Update Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_20_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "audio", 20, 21);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: [".bell-count[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 0.3rem 0.5rem;\n  border-radius: 50%;\n  right: 7px;\n  top: 0;\n  background-color: #ee6e83;\n}\n\na.notifications-dropdown[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  transition: all 250ms ease-in-out;\n}\n\n.arrow-swing[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.header-logo[_ngcontent-%COMP%] {\n  width: 150px;\n  object-fit: contain;\n}\n\n.header-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: contain;\n}\n\n.page-header[_ngcontent-%COMP%]   .header-notif[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n\n.notif-text[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.notification[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n}\n\n.notification[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.notification[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1)   span[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.4rem;\n  background: #34c38f;\n  border-radius: 20px;\n  font-size: 8px;\n  color: #fff;\n}\n\n.notification[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%] {\n  padding: 0.6em 0;\n}\n\n.notification[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.2em 0;\n}\n\n.notification[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 16px;\n  opacity: 0.7;\n}\n\n.notification[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUNOOztBQUlBO0VBQ0Usd0JBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0FBREY7O0FBS0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBRko7O0FBR0k7RUFDRSxlQUFBO0FBRE47O0FBSU07RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUZSOztBQU1FO0VBQ0UsZ0JBQUE7QUFKSjs7QUFLSTtFQUNFLG1CQUFBO0FBSE47O0FBS0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBSE47O0FBT0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUxOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZWxsLWNvdW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHJpZ2h0OiA3cHg7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNmU4Mztcbn1cblxuYS5ub3RpZmljYXRpb25zLWRyb3Bkb3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYXJyb3cge1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hcnJvdy1zd2luZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgYSB7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9XG4gIH1cbn1cblxuLnBhZ2UtaGVhZGVyIC5oZWFkZXItbm90aWYge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3RpZi10ZXh0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIHA6bnRoLWNoaWxkKDEpIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzRjMzhmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5ub3RpZmljYXRpb24tYm9keSB7XG4gICAgcGFkZGluZzogMC42ZW0gMDtcbiAgICBoNCB7XG4gICAgICBtYXJnaW46IDAgMCAwLjJlbSAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiAgfVxuICAubm90aWZpY2F0aW9uLWZvb3RlciB7XG4gICAgc3Ryb25nIHtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: src_app_service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_3__["LiveSessionChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }]; }, { sound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sound']
        }] }); })();


/***/ }),

/***/ "h5dU":
/*!****************************************************!*\
  !*** ./src/app/component/aside/aside.component.ts ***!
  \****************************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_utilities_Decode_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utilities/Decode_jwt */ "GxyC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner/spinner.component */ "GXBN");






const _c0 = function () { return ["live-session-chat"]; };
function AsideComponent_div_0_li_29_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Agent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["trainer-mode"]; };
function AsideComponent_div_0_li_29_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Trainer Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function AsideComponent_div_0_li_29_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsideComponent_div_0_li_29_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.accordion_list($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Live Session Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AsideComponent_div_0_li_29_li_6_Template, 4, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AsideComponent_div_0_li_29_li_7_Template, 5, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.user.permissions.includes("LS00"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.user.permissions.includes("TM11"));
} }
const _c2 = function () { return ["view-tickets", "active"]; };
function AsideComponent_div_0_li_30_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All Active Tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["view-tickets", "close"]; };
function AsideComponent_div_0_li_30_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All Close Tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function () { return ["my-tickets", "active"]; };
function AsideComponent_div_0_li_30_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Active Tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
const _c5 = function () { return ["my-tickets", "close"]; };
function AsideComponent_div_0_li_30_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Close Tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c5));
} }
function AsideComponent_div_0_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsideComponent_div_0_li_30_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.accordion_list($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AsideComponent_div_0_li_30_li_6_Template, 4, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AsideComponent_div_0_li_30_li_7_Template, 5, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AsideComponent_div_0_li_30_li_8_Template, 4, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AsideComponent_div_0_li_30_li_9_Template, 5, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.user.ticket_permission.includes("CVAAT00") || ctx_r4.user.ticket_permission.includes("CVMCAAT00"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.user.ticket_permission.includes("CVACT00") || ctx_r4.user.ticket_permission.includes("CVMCACT00"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.user.ticket_permission.includes("CVMCMAT00"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.user.ticket_permission.includes("CVMCMCT00"));
} }
const _c6 = function () { return { exact: true }; };
const _c7 = function () { return ["/main"]; };
const _c8 = function () { return ["view-subject"]; };
const _c9 = function () { return ["view-course"]; };
const _c10 = function () { return ["view-batch"]; };
const _c11 = function () { return ["user-details", "admin"]; };
const _c12 = function () { return ["students-details", "students"]; };
const _c13 = function () { return ["view-blog"]; };
const _c14 = function () { return ["view-category"]; };
const _c15 = function () { return ["view-custom-fields"]; };
const _c16 = function () { return ["view-priority"]; };
function AsideComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsideComponent_div_0_Template_a_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.accordion_list($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Batch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AsideComponent_div_0_li_29_Template, 8, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AsideComponent_div_0_li_30_Template, 10, 4, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Knowledge Base");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsideComponent_div_0_Template_a_click_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.accordion_list($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Setting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Custom Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.permissions.includes("LS00") || ctx_r0.user.permissions.includes("TM11"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.ticket_permission.includes("CVAAT00") || ctx_r0.user.ticket_permission.includes("CVACT00") || ctx_r0.user.ticket_permission.includes("CVMCMAT00") || ctx_r0.user.ticket_permission.includes("CVMCMCT00"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c15));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c16));
} }
function AsideComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AsideComponent {
    constructor() {
        this.spinner = false;
    }
    accordion_list(event) {
        const list = event.target.nextElementSibling;
        list.classList.toggle('d-none');
    }
    ngOnInit() {
        this.user = Object(src_app_utilities_Decode_jwt__WEBPACK_IMPORTED_MODULE_1__["ACTIVE_USER"])();
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(); };
AsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideComponent, selectors: [["app-aside"]], decls: 3, vars: 2, consts: [["class", "page-sidebar", 4, "ngIf", "ngIfElse"], ["showspinner", ""], [1, "page-sidebar"], [1, "list-unstyled", "accordion-menu"], [1, "sidebar-title"], ["routerLinkActive", "active-page", 3, "routerLinkActiveOptions"], [1, "nav-link", 3, "routerLink"], [1, "fas", "fa-house-user", "px-3"], ["routerLinkActive", "active-page"], ["href", "javascript:void(0)", 3, "click"], [1, "fas", "fa-user-tag", "px-3"], [1, "fas", "fa-chevron-right", "dropdown-icon"], [1, "d-none", "px-3"], [3, "routerLink"], [1, "pointer-none"], [1, "fas", "fa-book", "px-3"], [1, "fab", "fa-contao", "px-3"], [1, "fas", "fa-layer-group", "px-3"], ["routerLinkActive", "active-page", 4, "ngIf"], [1, "fas", "fa-blog", "px-3"], [1, "fas", "fa-cogs", "px-3"], [1, "fab", "fa-cuttlefish"], [1, "fas", "fa-level-up-alt"], [1, "fas", "fa-tty", "px-3"], [1, "fas", "fa-comment-dots", "px-3"], [1, "fas", "fa-user-clock", "px-3"], [1, "fas", "fa-ticket-alt", "px-3"], [1, "fas", "fa-folder-open", "px-3"], [1, "far", "fa-folder-open", "px-3"], [1, "spinner"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AsideComponent_div_0_Template, 65, 24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AsideComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.spinner)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]], styles: [".dropdown-icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.pointer-none[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc2lkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGIiwiZmlsZSI6ImFzaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLWljb24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnBvaW50ZXItbm9uZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aside',
                templateUrl: './aside.component.html',
                styleUrls: ['./aside.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rj+u":
/*!****************************************************!*\
  !*** ./src/app/Module/main/main-routing.module.ts ***!
  \****************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/main/main.component */ "vH0y");





const routes = [
    {
        path: '',
        component: _component_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "k4it")).then((m) => m.HomeModule),
            },
            {
                path: 'create-user',
                data: { role: 'U01' },
                loadChildren: () => Promise.all(/*! import() | create-user-create-user-module */[__webpack_require__.e("common"), __webpack_require__.e("create-user-create-user-module")]).then(__webpack_require__.bind(null, /*! ../create-user/create-user.module */ "nX0Q")).then((m) => m.CreateUserModule),
            },
            {
                path: 'user-details/:user_type',
                loadChildren: () => Promise.all(/*! import() | user-details-user-details-module */[__webpack_require__.e("common"), __webpack_require__.e("user-details-user-details-module")]).then(__webpack_require__.bind(null, /*! ../user-details/user-details.module */ "GplT")).then((m) => m.UserDetailsModule),
            },
            {
                path: 'students-details/:user_type',
                loadChildren: () => Promise.all(/*! import() | students-details-students-details-module */[__webpack_require__.e("common"), __webpack_require__.e("students-details-students-details-module")]).then(__webpack_require__.bind(null, /*! ../students-details/students-details.module */ "2QgD")).then((m) => m.StudentsDetailsModule),
            },
            {
                path: 'edit-user/:user_id',
                loadChildren: () => Promise.all(/*! import() | edit-user-edit-user-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-user-edit-user-module")]).then(__webpack_require__.bind(null, /*! ../edit-user/edit-user.module */ "u/vl")).then((m) => m.EditUserModule),
            },
            {
                path: 'view-user-profile/:user_id',
                loadChildren: () => Promise.all(/*! import() | view-user-profile-view-user-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("view-user-profile-view-user-profile-module")]).then(__webpack_require__.bind(null, /*! ../view-user-profile/view-user-profile.module */ "O0gQ")).then((m) => m.ViewUserProfileModule),
            },
            {
                path: 'create-subject',
                data: { role: 'SUB01' },
                loadChildren: () => Promise.all(/*! import() | create-subject-create-subject-module */[__webpack_require__.e("common"), __webpack_require__.e("create-subject-create-subject-module")]).then(__webpack_require__.bind(null, /*! ../create-subject/create-subject.module */ "ps6u")).then((m) => m.CreateSubjectModule),
            },
            {
                path: 'view-subject',
                loadChildren: () => Promise.all(/*! import() | view-subject-view-subject-module */[__webpack_require__.e("common"), __webpack_require__.e("view-subject-view-subject-module")]).then(__webpack_require__.bind(null, /*! ../view-subject/view-subject.module */ "e2Iw")).then((m) => m.ViewSubjectModule),
            },
            {
                path: 'create-course',
                data: { role: 'C10' },
                loadChildren: () => Promise.all(/*! import() | create-course-create-course-module */[__webpack_require__.e("common"), __webpack_require__.e("create-course-create-course-module")]).then(__webpack_require__.bind(null, /*! ../create-course/create-course.module */ "QuFq")).then((m) => m.CreateCourseModule),
            },
            {
                path: 'view-course',
                loadChildren: () => Promise.all(/*! import() | view-course-view-course-module */[__webpack_require__.e("common"), __webpack_require__.e("view-course-view-course-module")]).then(__webpack_require__.bind(null, /*! ../view-course/view-course.module */ "EvaA")).then((m) => m.ViewCourseModule),
            },
            {
                path: 'edit-course/:course_id',
                loadChildren: () => Promise.all(/*! import() | edit-course-edit-course-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-course-edit-course-module")]).then(__webpack_require__.bind(null, /*! ../edit-course/edit-course.module */ "Wl0H")).then((m) => m.EditCourseModule),
            },
            {
                path: 'create-student',
                data: { role: 'CS10' },
                loadChildren: () => Promise.all(/*! import() | create-student-create-student-module */[__webpack_require__.e("common"), __webpack_require__.e("create-student-create-student-module")]).then(__webpack_require__.bind(null, /*! ../create-student/create-student.module */ "OgZF")).then((m) => m.CreateStudentModule),
            },
            {
                path: 'student-profile/:student_id',
                loadChildren: () => Promise.all(/*! import() | student-profile-student-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("student-profile-student-profile-module")]).then(__webpack_require__.bind(null, /*! ../student-profile/student-profile.module */ "RylN")).then((m) => m.StudentProfileModule),
            },
            {
                path: 'view-batch',
                loadChildren: () => Promise.all(/*! import() | view-batch-view-batch-module */[__webpack_require__.e("common"), __webpack_require__.e("view-batch-view-batch-module")]).then(__webpack_require__.bind(null, /*! ../view-batch/view-batch.module */ "Gv+O")).then((m) => m.ViewBatchModule),
            },
            {
                path: 'edit-batch/:batch_id',
                loadChildren: () => Promise.all(/*! import() | edit-batch-edit-batch-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-batch-edit-batch-module")]).then(__webpack_require__.bind(null, /*! ../edit-batch/edit-batch.module */ "nwRY")).then((m) => m.EditBatchModule),
            },
            {
                path: 'create-batch',
                data: { role: 'B10' },
                loadChildren: () => Promise.all(/*! import() | create-batch-create-batch-module */[__webpack_require__.e("common"), __webpack_require__.e("create-batch-create-batch-module")]).then(__webpack_require__.bind(null, /*! ../create-batch/create-batch.module */ "PfeO")).then((m) => m.CreateBatchModule),
            },
            {
                path: 'add-student-into-batch/:batch_id/:batch_name',
                loadChildren: () => Promise.all(/*! import() | add-student-into-batch-add-student-into-batch-module */[__webpack_require__.e("common"), __webpack_require__.e("add-student-into-batch-add-student-into-batch-module")]).then(__webpack_require__.bind(null, /*! ../add-student-into-batch/add-student-into-batch.module */ "wZe5")).then((m) => m.AddStudentIntoBatchModule),
            },
            {
                path: 'assign-batch-to-admin/:user_id',
                loadChildren: () => Promise.all(/*! import() | assign-batch-to-admin-assign-batch-to-admin-module */[__webpack_require__.e("common"), __webpack_require__.e("assign-batch-to-admin-assign-batch-to-admin-module")]).then(__webpack_require__.bind(null, /*! ../assign-batch-to-admin/assign-batch-to-admin.module */ "JsET")).then((m) => m.AssignBatchToAdminModule),
            },
            {
                path: 'live-session-chat',
                loadChildren: () => Promise.all(/*! import() | live-session-chat-live-session-chat-module */[__webpack_require__.e("common"), __webpack_require__.e("live-session-chat-live-session-chat-module")]).then(__webpack_require__.bind(null, /*! ../live-session-chat/live-session-chat.module */ "SGWI")).then((m) => m.LiveSessionChatModule),
            },
            {
                path: 'trainer-mode',
                loadChildren: () => Promise.all(/*! import() | trainer-mode-trainer-mode-module */[__webpack_require__.e("common"), __webpack_require__.e("trainer-mode-trainer-mode-module")]).then(__webpack_require__.bind(null, /*! ../trainer-mode/trainer-mode.module */ "TdQM")).then((m) => m.TrainerModeModule),
            },
            {
                path: 'update-password',
                loadChildren: () => Promise.all(/*! import() | update-password-update-password-module */[__webpack_require__.e("common"), __webpack_require__.e("update-password-update-password-module")]).then(__webpack_require__.bind(null, /*! ../update-password/update-password.module */ "A2PL")).then((m) => m.UpdateProfileModule),
            },
            {
                path: 'update-student/:student_id',
                loadChildren: () => Promise.all(/*! import() | update-student-profile-update-student-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("update-student-profile-update-student-profile-module")]).then(__webpack_require__.bind(null, /*! ../update-student-profile/update-student-profile.module */ "OX3V")).then((m) => m.UpdateStudentProfileModule),
            },
            {
                path: 'view-category',
                loadChildren: () => __webpack_require__.e(/*! import() | view-category-view-category-module */ "view-category-view-category-module").then(__webpack_require__.bind(null, /*! ../view-category/view-category.module */ "OmYe")).then((m) => m.ViewCategoryModule),
            },
            {
                path: 'create-category',
                data: { role: 'CAT10' },
                loadChildren: () => __webpack_require__.e(/*! import() | create-category-create-category-module */ "create-category-create-category-module").then(__webpack_require__.bind(null, /*! ../create-category/create-category.module */ "275s")).then((m) => m.CategoryModule),
            },
            {
                path: 'edit-category/:category_id',
                loadChildren: () => __webpack_require__.e(/*! import() | edit-category-edit-category-module */ "edit-category-edit-category-module").then(__webpack_require__.bind(null, /*! ../edit-category/edit-category.module */ "FljL")).then((m) => m.EditCategoryModule),
            },
            {
                path: 'view-blog',
                loadChildren: () => __webpack_require__.e(/*! import() | view-blog-view-blog-module */ "view-blog-view-blog-module").then(__webpack_require__.bind(null, /*! ../view-blog/view-blog.module */ "PNqj")).then((m) => m.ViewBlogModule),
            },
            {
                path: 'edit-blog/:blog_id',
                loadChildren: () => Promise.all(/*! import() | edit-blog-edit-blog-module */[__webpack_require__.e("default~create-blog-create-blog-module~edit-blog-edit-blog-module"), __webpack_require__.e("edit-blog-edit-blog-module")]).then(__webpack_require__.bind(null, /*! ../edit-blog/edit-blog.module */ "GUSy")).then((m) => m.EditBlogModule),
            },
            {
                path: 'create-blog',
                data: { role: 'BLOG01' },
                loadChildren: () => Promise.all(/*! import() | create-blog-create-blog-module */[__webpack_require__.e("default~create-blog-create-blog-module~edit-blog-edit-blog-module"), __webpack_require__.e("create-blog-create-blog-module")]).then(__webpack_require__.bind(null, /*! ../create-blog/create-blog.module */ "Vtxi")).then((m) => m.CreateBlogModule),
            },
            {
                path: 'view-tickets/:type',
                loadChildren: () => Promise.all(/*! import() | view-ticket-view-ticket-module */[__webpack_require__.e("common"), __webpack_require__.e("view-ticket-view-ticket-module")]).then(__webpack_require__.bind(null, /*! ../view-ticket/view-ticket.module */ "AQfp")).then((m) => m.ViewTicketModule),
            },
            {
                path: 'my-tickets/:type',
                loadChildren: () => Promise.all(/*! import() | my-tickets-my-tickets-module */[__webpack_require__.e("common"), __webpack_require__.e("my-tickets-my-tickets-module")]).then(__webpack_require__.bind(null, /*! ../my-tickets/my-tickets.module */ "dr0W")).then((m) => m.MyTicketsModule),
            },
            {
                path: 'custom-fields',
                loadChildren: () => Promise.all(/*! import() | custom-fields-custom-fields-module */[__webpack_require__.e("common"), __webpack_require__.e("custom-fields-custom-fields-module")]).then(__webpack_require__.bind(null, /*! ../custom-fields/custom-fields.module */ "2iWI")).then((m) => m.CustomFieldsModule),
            },
            {
                path: 'view-custom-fields',
                loadChildren: () => Promise.all(/*! import() | view-custom-fields-view-custom-fields-module */[__webpack_require__.e("common"), __webpack_require__.e("view-custom-fields-view-custom-fields-module")]).then(__webpack_require__.bind(null, /*! ../view-custom-fields/view-custom-fields.module */ "eKp4")).then((m) => m.ViewCustomFieldsModule),
            },
            {
                path: 'ticket-details/:ticket_id',
                loadChildren: () => Promise.all(/*! import() | ticket-details-ticket-details-module */[__webpack_require__.e("common"), __webpack_require__.e("ticket-details-ticket-details-module")]).then(__webpack_require__.bind(null, /*! ../ticket-details/ticket-details.module */ "zQzu")).then((m) => m.TicketDetailsModule),
            },
            {
                path: 'create-priority',
                loadChildren: () => Promise.all(/*! import() | create-priority-create-priority-module */[__webpack_require__.e("common"), __webpack_require__.e("create-priority-create-priority-module")]).then(__webpack_require__.bind(null, /*! ../create-priority/create-priority.module */ "Ppjy")).then((m) => m.CreatePriorityModule),
            },
            {
                path: 'view-priority',
                loadChildren: () => Promise.all(/*! import() | view-priority-view-priority-module */[__webpack_require__.e("common"), __webpack_require__.e("view-priority-view-priority-module")]).then(__webpack_require__.bind(null, /*! ../view-priority/view-priority.module */ "F3AM")).then((m) => m.ViewPriorityModule),
            },
        ],
    },
];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vH0y":
/*!**************************************************!*\
  !*** ./src/app/component/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "Pk+G");
/* harmony import */ var _aside_aside_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aside/aside.component */ "h5dU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class MainComponent {
    constructor() { }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 6, vars: 0, consts: [[1, "page-container"], [1, "page-content"], [1, "main-wrapper"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _aside_aside_component__WEBPACK_IMPORTED_MODULE_2__["AsideComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xb3B":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=Module-main-main-module.js.map