(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-custom-fields-view-custom-fields-module"],{

/***/ "eKp4":
/*!************************************************************************!*\
  !*** ./src/app/Module/view-custom-fields/view-custom-fields.module.ts ***!
  \************************************************************************/
/*! exports provided: ViewCustomFieldsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomFieldsModule", function() { return ViewCustomFieldsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_custom_fields_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-custom-fields-routing.module */ "uZpz");
/* harmony import */ var _component_view_custom_fields_view_custom_fields_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/view-custom-fields/view-custom-fields.component */ "rmK0");
/* harmony import */ var src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/SharedModule/shared-utilities/shared-utilities.module */ "S5PD");
/* harmony import */ var src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/SharedModule/primeng/primeng.module */ "ATLQ");







class ViewCustomFieldsModule {
}
ViewCustomFieldsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewCustomFieldsModule });
ViewCustomFieldsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewCustomFieldsModule_Factory(t) { return new (t || ViewCustomFieldsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _view_custom_fields_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewCustomFieldsRoutingModule"],
            src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_4__["SharedUtilitiesModule"],
            src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_5__["PrimengModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewCustomFieldsModule, { declarations: [_component_view_custom_fields_view_custom_fields_component__WEBPACK_IMPORTED_MODULE_3__["ViewCustomFieldsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _view_custom_fields_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewCustomFieldsRoutingModule"],
        src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_4__["SharedUtilitiesModule"],
        src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_5__["PrimengModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewCustomFieldsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_component_view_custom_fields_view_custom_fields_component__WEBPACK_IMPORTED_MODULE_3__["ViewCustomFieldsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _view_custom_fields_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewCustomFieldsRoutingModule"],
                    src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_4__["SharedUtilitiesModule"],
                    src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_5__["PrimengModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "rmK0":
/*!******************************************************************************!*\
  !*** ./src/app/component/view-custom-fields/view-custom-fields.component.ts ***!
  \******************************************************************************/
/*! exports provided: ViewCustomFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomFieldsComponent", function() { return ViewCustomFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_utilities_Decode_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/Decode_jwt */ "GxyC");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_service_custom_fields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/custom-fields.service */ "qadR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menu */ "1SLH");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../spinner/spinner.component */ "GXBN");














function ViewCustomFieldsComponent_section_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Active Custom Fields ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ViewCustomFieldsComponent_section_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Disabled Custom Fields ");
} }
function ViewCustomFieldsComponent_section_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Disabled Fields ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ViewCustomFieldsComponent_section_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Active Fields ");
} }
function ViewCustomFieldsComponent_section_0_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ViewCustomFieldsComponent_section_0_ng_template_21_Template_input_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return _r9.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewCustomFieldsComponent_section_0_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "CreatedAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewCustomFieldsComponent_section_0_ng_template_23_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r21);
} }
function ViewCustomFieldsComponent_section_0_ng_template_23_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewCustomFieldsComponent_section_0_ng_template_23_ng_container_12_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return _r22.toggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-menu", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewCustomFieldsComponent_section_0_ng_template_23_ng_container_12_Template_p_menu_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const fields_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.update_custom_fields(fields_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("popup", true)("model", ctx_r18.items);
} }
function ViewCustomFieldsComponent_section_0_ng_template_23_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewCustomFieldsComponent_section_0_ng_template_23_ng_template_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const fields_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.enable_fields(fields_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewCustomFieldsComponent_section_0_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ViewCustomFieldsComponent_section_0_ng_template_23_li_7_Template, 2, 1, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ViewCustomFieldsComponent_section_0_ng_template_23_ng_container_12_Template, 4, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ViewCustomFieldsComponent_section_0_ng_template_23_ng_template_13_Template, 1, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fields_r16 = ctx.$implicit;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fields_r16.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fields_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", fields_r16.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 6, fields_r16.createdAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.disbaled_fields)("ngIfElse", _r19);
} }
function ViewCustomFieldsComponent_section_0_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No User found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["../custom-fields"]; };
const _c1 = function () { return [10, 25, 50]; };
const _c2 = function () { return ["name"]; };
function ViewCustomFieldsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ViewCustomFieldsComponent_section_0_ng_container_5_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ViewCustomFieldsComponent_section_0_ng_template_6_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewCustomFieldsComponent_section_0_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.update_data(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ViewCustomFieldsComponent_section_0_ng_container_11_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ViewCustomFieldsComponent_section_0_ng_template_12_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Create Custom Fields ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p-table", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ViewCustomFieldsComponent_section_0_ng_template_21_Template, 4, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ViewCustomFieldsComponent_section_0_ng_template_22_Template, 11, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ViewCustomFieldsComponent_section_0_ng_template_23_Template, 15, 9, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ViewCustomFieldsComponent_section_0_ng_template_24_Template, 3, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.disbaled_fields)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.disbaled_fields)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.custom_fields)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1))("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c2));
} }
function ViewCustomFieldsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ViewCustomFieldsComponent {
    constructor(custom_fields_service, router) {
        this.custom_fields_service = custom_fields_service;
        this.router = router;
        this.spinner = false;
        this.items = [{ label: 'Actions', items: [] }];
        this.disbaled_fields = false;
    }
    setMenu() {
        this.user_profile = Object(src_app_utilities_Decode_jwt__WEBPACK_IMPORTED_MODULE_2__["ACTIVE_USER"])();
        this.get_custom_fields(false);
        // this.items[0].items.push({
        //   label: 'Edit',
        //   icon: 'pi pi-user-edit',
        //   command: () => {
        //     this.menu_type = 'edit';
        //   },
        // });
        this.items[0].items.push({
            label: 'Disabled',
            icon: 'pi pi-trash',
            command: () => {
                this.menu_type = 'disabled';
            },
        });
    }
    update_data() {
        this.disbaled_fields = !this.disbaled_fields;
        this.get_custom_fields(this.disbaled_fields);
    }
    get_custom_fields(type) {
        this.spinner = true;
        this.custom_fields_service.get_custom_fields(type).subscribe((res) => {
            this.custom_fields = res.data;
            console.log(this.custom_fields);
            this.spinner = false;
        }, (error) => this.error_handler(error));
    }
    error_handler(error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.errorMessage,
        }).then(() => {
            this.spinner = false;
            this.router.navigate(['/main']);
        });
    }
    update_custom_fields(fields) {
        switch (this.menu_type) {
            case 'edit':
                this.router.navigate(['/main/edit-course', fields._id]);
                break;
            case 'disabled':
                this.disabled_(fields);
                break;
            default:
                console.log('');
        }
    }
    disabled_(fields) {
        this.spinner = true;
        this.update_fields_helper(fields, true);
    }
    enable_fields(fields) {
        this.spinner = true;
        this.update_fields_helper(fields, false);
    }
    update_fields_helper(fields, type) {
        const string = type ? 'Disabled' : 'Enabled';
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: `Do you want to ${string} ${fields.name} fields`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, ${string} it!`,
        }).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.isConfirmed) {
                fields['disabled'] = type;
                console.log(fields);
                this.spinner = false;
                this.custom_fields_service.update_status(fields).subscribe((res) => {
                    console.log(res);
                    this.get_custom_fields(this.disbaled_fields);
                    this.spinner = false;
                }, (error) => this.error_handler(error));
            }
            else {
                this.spinner = false;
            }
        }));
    }
    ngOnInit() {
        this.setMenu();
    }
}
ViewCustomFieldsComponent.ɵfac = function ViewCustomFieldsComponent_Factory(t) { return new (t || ViewCustomFieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_custom_fields_service__WEBPACK_IMPORTED_MODULE_4__["CustomFieldsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ViewCustomFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewCustomFieldsComponent, selectors: [["app-view-custom-fields"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["showspinner", ""], [1, "card"], [1, "card-body"], [1, "header"], [1, ""], ["dis", ""], [1, "d-flex", "align-items-center"], [1, "btn", "btn-outline-dark", "mr-3"], ["href", "javascript:void(0)", 3, "click"], ["enable", ""], [1, "btn", "btn-primary"], [3, "routerLink"], [1, "fas", "fa-plus"], ["dataKey", "id", "styleClass", "p-datatable-customers", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "rowsPerPageOptions", "paginator", "globalFilterFields"], ["customfields", ""], ["pTemplate", "caption", "class", "w-100"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "p-d-flex", "w-100"], [1, "p-input-icon-left", "p-ml-auto", "w-100"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search keyword", 1, "w-100", 3, "input"], [1, "option-list"], [4, "ngFor", "ngForOf"], [1, "position-relative"], ["en", ""], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-ellipsis-h", 1, "p-button-rounded", "p-button-text", 3, "click"], [3, "popup", "model", "click"], ["menu", ""], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-text", 3, "click"], ["colspan", "5"], [1, "spinner"]], template: function ViewCustomFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ViewCustomFieldsComponent_section_0_Template, 25, 14, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewCustomFieldsComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.spinner)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"], primeng_menu__WEBPACK_IMPORTED_MODULE_11__["Menu"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".option-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n\n[_nghost-%COMP%]     .p-menu {\n  position: absolute !important;\n  top: 60px !important;\n  left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3LWN1c3RvbS1maWVsZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQUFKOztBQUtJO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBRk4iLCJmaWxlIjoidmlldy1jdXN0b20tZmllbGRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbi1saXN0IHtcbiAgbGkge1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gIH1cbn1cbjpob3N0IHtcbiAgOjpuZy1kZWVwIHtcbiAgICAucC1tZW51IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgICAgdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewCustomFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-view-custom-fields',
                templateUrl: './view-custom-fields.component.html',
                styleUrls: ['./view-custom-fields.component.scss'],
            }]
    }], function () { return [{ type: src_app_service_custom_fields_service__WEBPACK_IMPORTED_MODULE_4__["CustomFieldsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "uZpz":
/*!********************************************************************************!*\
  !*** ./src/app/Module/view-custom-fields/view-custom-fields-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ViewCustomFieldsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomFieldsRoutingModule", function() { return ViewCustomFieldsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_view_custom_fields_view_custom_fields_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/view-custom-fields/view-custom-fields.component */ "rmK0");





const routes = [{ path: '', component: _component_view_custom_fields_view_custom_fields_component__WEBPACK_IMPORTED_MODULE_2__["ViewCustomFieldsComponent"] }];
class ViewCustomFieldsRoutingModule {
}
ViewCustomFieldsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewCustomFieldsRoutingModule });
ViewCustomFieldsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewCustomFieldsRoutingModule_Factory(t) { return new (t || ViewCustomFieldsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewCustomFieldsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewCustomFieldsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=view-custom-fields-view-custom-fields-module.js.map