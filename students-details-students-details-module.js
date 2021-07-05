(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["students-details-students-details-module"],{

/***/ "2QgD":
/*!********************************************************************!*\
  !*** ./src/app/Module/students-details/students-details.module.ts ***!
  \********************************************************************/
/*! exports provided: StudentsDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsDetailsModule", function() { return StudentsDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _students_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students-details-routing.module */ "VHuX");
/* harmony import */ var _component_students_details_students_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/students-details/students-details.component */ "Axfv");
/* harmony import */ var src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/SharedModule/primeng/primeng.module */ "ATLQ");
/* harmony import */ var src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/SharedModule/shared-utilities/shared-utilities.module */ "S5PD");







class StudentsDetailsModule {
}
StudentsDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentsDetailsModule });
StudentsDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentsDetailsModule_Factory(t) { return new (t || StudentsDetailsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _students_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentsDetailsRoutingModule"],
            src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_4__["PrimengModule"],
            src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_5__["SharedUtilitiesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentsDetailsModule, { declarations: [_component_students_details_students_details_component__WEBPACK_IMPORTED_MODULE_3__["StudentsDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _students_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentsDetailsRoutingModule"],
        src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_4__["PrimengModule"],
        src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_5__["SharedUtilitiesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsDetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_component_students_details_students_details_component__WEBPACK_IMPORTED_MODULE_3__["StudentsDetailsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _students_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentsDetailsRoutingModule"],
                    src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_4__["PrimengModule"],
                    src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_5__["SharedUtilitiesModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Axfv":
/*!**************************************************************************!*\
  !*** ./src/app/component/students-details/students-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: StudentsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsDetailsComponent", function() { return StudentsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_utilities_Decode_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utilities/Decode_jwt */ "GxyC");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var src_app_service_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/permission.service */ "NSqX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_students_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/students.service */ "S8Dk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/menu */ "1SLH");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../spinner/spinner.component */ "GXBN");















function StudentsDetailsComponent_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function StudentsDetailsComponent_div_0_ng_template_13_Template_input_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r3.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentsDetailsComponent_div_0_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentsDetailsComponent_div_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentsDetailsComponent_div_0_ng_template_15_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r11.toggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-menu", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentsDetailsComponent_div_0_ng_template_15_Template_p_menu_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const student_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.set_dynamic_url(student_r10._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", student_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popup", true)("model", ctx_r6.items);
} }
function StudentsDetailsComponent_div_0_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No User found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["../../create-student"]; };
const _c1 = function () { return [10, 25, 50]; };
const _c2 = function () { return ["name", "email"]; };
function StudentsDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Students List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Create Student ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-table", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StudentsDetailsComponent_div_0_ng_template_13_Template, 4, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StudentsDetailsComponent_div_0_ng_template_14_Template, 7, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StudentsDetailsComponent_div_0_ng_template_15_Template, 9, 4, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, StudentsDetailsComponent_div_0_ng_template_16_Template, 3, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.students_data)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
} }
function StudentsDetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StudentsDetailsComponent {
    constructor(user_service, permission_service, router, student_service) {
        this.user_service = user_service;
        this.permission_service = permission_service;
        this.router = router;
        this.student_service = student_service;
        this.spinner = false;
        this.student_type_disabled = false;
    }
    get_users_data() {
        this.spinner = true;
        this.student_service.get_student_details(false).subscribe((res) => {
            this.students_data = res.data;
            this.spinner = false;
        }, (error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.errorMessage,
            }).then(() => {
                this.router.navigate(['/main']);
            });
        });
    }
    setMenu() {
        this.user_profile = Object(src_app_utilities_Decode_jwt__WEBPACK_IMPORTED_MODULE_1__["ACTIVE_USER"])();
        if (!this.user_profile.permissions.includes('RS00')) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Access Denied',
            });
            this.router.navigate(['/main']);
            return;
        }
        this.get_users_data();
        this.items = [
            {
                label: 'Actions',
                items: [
                    {
                        label: 'View',
                        icon: 'pi pi-eye',
                        command: () => {
                            this.menu_type = 'view';
                        },
                    },
                ],
            },
        ];
        if (this.user_profile.permissions.includes('US01')) {
            this.items[0].items.push({
                label: 'Update Student',
                icon: 'pi pi-user-edit',
                command: () => {
                    this.menu_type = 'edit';
                },
            });
        }
    }
    set_dynamic_url(id) {
        if (this.menu_type === 'view') {
            this.router.navigate(['main/student-profile', id]);
        }
        else {
            this.router.navigate(['main/update-student', id]);
        }
    }
    ngOnInit() {
        this.setMenu();
    }
}
StudentsDetailsComponent.ɵfac = function StudentsDetailsComponent_Factory(t) { return new (t || StudentsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_students_service__WEBPACK_IMPORTED_MODULE_6__["StudentsService"])); };
StudentsDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentsDetailsComponent, selectors: [["app-students-details"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["showspinner", ""], [1, "card"], [1, "card-body"], [1, "header"], [1, ""], [1, "d-flex", "align-items-center"], [1, "btn", "btn-primary"], [3, "routerLink"], [1, "fas", "fa-plus"], ["dataKey", "id", "styleClass", "p-datatable-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "rowsPerPageOptions", "paginator", "globalFilterFields"], ["usertable", ""], ["pTemplate", "caption", "class", "w-100"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "p-d-flex", "w-100"], [1, "p-input-icon-left", "p-ml-auto", "w-100"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search keyword", 1, "w-100", 3, "input"], [1, "position-relative"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-ellipsis-h", 1, "p-button-rounded", "p-button-text", 3, "click"], [3, "popup", "model", "click"], ["menu", ""], ["colspan", "5"], [1, "spinner"]], template: function StudentsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StudentsDetailsComponent_div_0_Template, 17, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentsDetailsComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.spinner)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["PrimeTemplate"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonDirective"], primeng_menu__WEBPACK_IMPORTED_MODULE_12__["Menu"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"]], styles: ["[_nghost-%COMP%]     .p-menu {\n  position: absolute !important;\n  top: 60px !important;\n  left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdHVkZW50cy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBRE4iLCJmaWxlIjoic3R1ZGVudHMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgOjpuZy1kZWVwIHtcbiAgICAucC1tZW51IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgICAgdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-students-details',
                templateUrl: './students-details.component.html',
                styleUrls: ['./students-details.component.scss'],
            }]
    }], function () { return [{ type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_service_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_service_students_service__WEBPACK_IMPORTED_MODULE_6__["StudentsService"] }]; }, null); })();


/***/ }),

/***/ "VHuX":
/*!****************************************************************************!*\
  !*** ./src/app/Module/students-details/students-details-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: StudentsDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsDetailsRoutingModule", function() { return StudentsDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_component_students_details_students_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/students-details/students-details.component */ "Axfv");





const routes = [{ path: '', component: src_app_component_students_details_students_details_component__WEBPACK_IMPORTED_MODULE_2__["StudentsDetailsComponent"] }];
class StudentsDetailsRoutingModule {
}
StudentsDetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentsDetailsRoutingModule });
StudentsDetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentsDetailsRoutingModule_Factory(t) { return new (t || StudentsDetailsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentsDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsDetailsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=students-details-students-details-module.js.map