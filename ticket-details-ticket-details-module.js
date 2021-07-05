(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ticket-details-ticket-details-module"],{

/***/ "FMN1":
/*!************************************************************************!*\
  !*** ./src/app/Module/ticket-details/ticket-details-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: TicketDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailsRoutingModule", function() { return TicketDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/ticket-details/ticket-details.component */ "e3Hv");





const routes = [{ path: '', component: _component_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_2__["TicketDetailsComponent"] }];
class TicketDetailsRoutingModule {
}
TicketDetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TicketDetailsRoutingModule });
TicketDetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TicketDetailsRoutingModule_Factory(t) { return new (t || TicketDetailsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketDetailsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "e3Hv":
/*!**********************************************************************!*\
  !*** ./src/app/component/ticket-details/ticket-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: TicketDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailsComponent", function() { return TicketDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_utilities_Decode_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/Decode_jwt */ "GxyC");
/* harmony import */ var src_app_utilities_formative_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/formative_data */ "HB5e");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/ticket.service */ "qs8k");
/* harmony import */ var src_app_service_attachment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/attachment.service */ "V7yy");
/* harmony import */ var src_app_service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/live-session-chat.service */ "cN4R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = ["textarea"];
function TicketDetailsComponent_section_0_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", file_r12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" files", i_r13, " ");
} }
function TicketDetailsComponent_section_0_li_33_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", file_r17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" file", i_r18, "");
} }
function TicketDetailsComponent_section_0_li_33_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TicketDetailsComponent_section_0_li_33_ul_8_li_1_Template, 3, 2, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", message_r14.attachment);
} }
function TicketDetailsComponent_section_0_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TicketDetailsComponent_section_0_li_33_ul_8_Template, 2, 1, "ul", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", message_r14.type === "admin" ? "flex-end" : "flex-start");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r14.sender_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r14.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r14.attachment);
} }
function TicketDetailsComponent_section_0_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TicketDetailsComponent_section_0_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.files.length, " ");
} }
function TicketDetailsComponent_section_0_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketDetailsComponent_section_0_ng_container_48_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.send_message(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r5.value == "" && ctx_r9.files.length == 0);
} }
function TicketDetailsComponent_section_0_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "button", 51);
} }
const _c1 = function () { return ["../view-ticket"]; };
function TicketDetailsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Close Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, TicketDetailsComponent_section_0_li_28_Template, 3, 2, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Replies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, TicketDetailsComponent_section_0_li_33_Template, 9, 4, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "textarea", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function TicketDetailsComponent_section_0_Template_textarea_input_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.textarea_auto_increment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TicketDetailsComponent_section_0_Template_input_change_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.attchment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, TicketDetailsComponent_section_0_span_44_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, TicketDetailsComponent_section_0_ng_template_45_Template, 2, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, TicketDetailsComponent_section_0_ng_container_48_Template, 3, 1, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, TicketDetailsComponent_section_0_ng_template_49_Template, 1, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](46);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](50);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ticket : ", ctx_r0.ticket_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.ticket_details.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.ticket_details.priority.priority_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 12, ctx_r0.ticket_details.createdAt, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.ticket_details.body, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.ticket_details.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.ticket_details.comment.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.files.length == 0)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.message_sending)("ngIfElse", _r10);
} }
function TicketDetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TicketDetailsComponent {
    constructor(activated_route, ticket_service, router, attachment_service, live_session_service) {
        this.activated_route = activated_route;
        this.ticket_service = ticket_service;
        this.router = router;
        this.attachment_service = attachment_service;
        this.live_session_service = live_session_service;
        this.spinner = false;
        this.files = [];
        this.message_sending = false;
        this.live_session_service.new_reply_ticket().subscribe((res) => {
            this.ticket_details.comment.message.push(res);
            setTimeout(() => {
                this.scroll_chat_container();
            }, 50);
        });
    }
    // // attachment
    attchment(event) {
        this.files = [];
        for (let i = 0; i < event.target.files.length; i++) {
            this.files.push(event.target.files[i]);
        }
    }
    textarea_auto_increment(event) {
        const tx = event.target;
        tx.style.height = 'auto';
        tx.style.height = tx.scrollHeight + 'px';
    }
    scroll_chat_container() {
        const div = document.getElementById('comment-list');
        if (div != null) {
            div.scrollTop = div.scrollHeight - div.clientHeight;
        }
        else {
            setTimeout(() => {
                this.scroll_chat_container();
            }, 200);
        }
    }
    get_ticket_details() {
        this.spinner = true;
        this.ticket_service.get_ticket_details(this.ticket_id).subscribe((res) => {
            this.ticket_details = res.data;
            this.spinner = false;
        }, (error) => this.error_handler(error));
    }
    error_handler(error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.errorMessage || 'Some Went Wrong',
        }).then(() => {
            this.spinner = false;
            this.router.navigate(['/main']);
        });
    }
    send_message(textarea) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.message_sending = true;
            const student = Object(src_app_utilities_Decode_jwt__WEBPACK_IMPORTED_MODULE_2__["ACTIVE_USER"])();
            const data = {
                type: 'admin',
                message: textarea.value,
                sender_name: student.name,
                createdAt: Date.now(),
            };
            try {
                if (this.files.length > 0) {
                    const files = yield this.attachment_service.upload_files(this.files);
                    data['attachment'] = src_app_utilities_formative_data__WEBPACK_IMPORTED_MODULE_3__["FormativeData"].concat_url_with_files(files.files_paths);
                }
                this.ticket_service.reply_ticket(data, this.ticket_id).subscribe((res) => {
                    this.live_session_service.ticket_reply(data, {
                        room_id: this.ticket_id,
                    }, this.ticket_details.student);
                    this.live_session_service.update_notification({
                        user_id: localStorage.getItem('uid'),
                        id: this.ticket_id,
                    });
                    this.textarea.nativeElement.value = '';
                    this.files = [];
                    this.message_sending = false;
                }, (error) => this.error_handler(error));
            }
            catch (error) {
                this.error_handler(error);
            }
        });
    }
    ngOnInit() {
        this.ticket_id = this.activated_route.snapshot.params.ticket_id;
        this.live_session_service.join_room({ room_id: this.ticket_id });
        this.get_ticket_details();
        this.scroll_chat_container();
    }
    ngOnDestroy() {
        this.live_session_service.remove_listen();
    }
}
TicketDetailsComponent.ɵfac = function TicketDetailsComponent_Factory(t) { return new (t || TicketDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_attachment_service__WEBPACK_IMPORTED_MODULE_7__["AttachmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_8__["LiveSessionChatService"])); };
TicketDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TicketDetailsComponent, selectors: [["app-ticket-details"]], viewQuery: function TicketDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.textarea = _t.first);
    } }, decls: 3, vars: 2, consts: [["class", "container-fluid", 4, "ngIf", "ngIfElse"], ["showspinner", ""], [1, "container-fluid"], [1, "card"], [1, "card-body"], [1, "header", "d-block", "d-md-flex", "justify-content-between", "align-items-center"], [1, "", 2, "word-break", "break-all"], [1, "d-flex"], [1, "btn", "btn-danger", 2, "margin-right", "0.7rem"], [1, "btn", "btn-primary"], [3, "routerLink"], [1, "fas", "fa-arrow-left"], [1, "details"], [1, "h4"], [1, "text-success"], [1, "", 2, "display", "inline-block", "margin-left", "0.5rem"], [1, "mt-4", 3, "innerHTML"], [2, "color", "#6bcac2"], [1, "attachment-list", "p-0"], [4, "ngFor", "ngForOf"], [1, "comment-section", "p-3", "mt-5"], [1, "h5"], ["id", "comment-list", 1, "p-0", "message-list"], ["class", "d-flex mt-4 p-2", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-footer"], [1, "row", "p-0", "align-items-center"], [1, "col-9", "col-md-11"], ["name", "text", "placeholder", "Write Something", "id", "", "cols", "30", "rows", "1", 1, "form-control", 3, "input"], ["textarea", ""], [1, "chat-control", "col-3", "col-md-1", "d-flex", "align-items-center", "p-0", "pl-0"], [1, "attachment"], [1, "file"], ["type", "file", "multiple", "", "name", "file", "id", "file", 3, "change"], ["for", "file", "title", "select files"], [4, "ngIf", "ngIfElse"], ["count", ""], [1, "send", "z-1000"], ["wait", ""], ["target", "_blank", "download", "", 3, "href"], [1, "d-flex", "mt-4", "p-2", 3, "ngClass"], [1, "avatar", "flex-shrink-0"], ["src", "../../../assets/images/avatars/user.svg", "alt", ""], [1, "text"], [1, "h6"], ["class", "p-0 attachment", 4, "ngIf"], [1, "p-0", "attachment"], ["target", "_blank", 3, "href"], [1, "fas", "fa-paperclip"], [1, "count"], ["type", "button", 3, "disabled", "click"], [1, "far", "fa-paper-plane"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-spin pi-spinner", "disabled", "true", 1, "p-button-rounded"], [1, "spinner"]], template: function TicketDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TicketDetailsComponent_section_0_Template, 51, 16, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TicketDetailsComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.spinner)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".comment-section[_ngcontent-%COMP%] {\n  background-color: #f3f4f7;\n  border-radius: 5px;\n}\n.comment-section[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%] {\n  list-style: none;\n  max-height: 370px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n}\n.comment-section[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   .flex-end[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.comment-section[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   .flex-start[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  background-color: #0a80ff !important;\n  color: #fff !important;\n}\n.comment-section[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 80%;\n  background-color: #fff;\n  border-radius: 10px;\n}\n.comment-section[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.comment-section[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.comment-section[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 0.8rem;\n}\n.comment-section[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%] {\n  width: 100%;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.comment-section[_ngcontent-%COMP%]   .message-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 40px;\n  margin: 0 0.3rem;\n}\n.attachment-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  margin-top: 0.5rem;\n  flex-wrap: wrap;\n}\n.attachment-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.5rem 0.4rem;\n  background-color: #f1f1f1;\n  border-radius: 24px;\n  padding: 0.5rem 1rem;\n}\n.attachment-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aWNrZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBQ0Usb0JBQUE7QUFDTjtBQUVJO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBQU47QUFHSTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUNRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDVjtBQUdNO0VBQ0UsbUJBQUE7QUFEUjtBQUVRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFWO0FBQ1U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSkY7QUFLRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBSEo7QUFJSTtFQUNFLHFCQUFBO0FBRk4iLCJmaWxlIjoidGlja2V0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIC5tZXNzYWdlLWxpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWF4LWhlaWdodDogMzcwcHg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuZmxleC1lbmQge1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgfVxuXG4gICAgLmZsZXgtc3RhcnQge1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTgwZmYgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgLmF2YXRhciB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRleHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xuICAgICAgICAuYXR0YWNobWVudCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAuM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmF0dGFjaG1lbnQtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBsaSB7XG4gICAgbWFyZ2luOiAwLjVyZW0gMC40cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TicketDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-ticket-details',
                templateUrl: './ticket-details.component.html',
                styleUrls: ['./ticket-details.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_service_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_service_attachment_service__WEBPACK_IMPORTED_MODULE_7__["AttachmentService"] }, { type: src_app_service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_8__["LiveSessionChatService"] }]; }, { textarea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['textarea']
        }] }); })();


/***/ }),

/***/ "zQzu":
/*!****************************************************************!*\
  !*** ./src/app/Module/ticket-details/ticket-details.module.ts ***!
  \****************************************************************/
/*! exports provided: TicketDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailsModule", function() { return TicketDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ticket_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket-details-routing.module */ "FMN1");
/* harmony import */ var _component_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/ticket-details/ticket-details.component */ "e3Hv");





class TicketDetailsModule {
}
TicketDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TicketDetailsModule });
TicketDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TicketDetailsModule_Factory(t) { return new (t || TicketDetailsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ticket_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketDetailsRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketDetailsModule, { declarations: [_component_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_3__["TicketDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ticket_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketDetailsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketDetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_component_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_3__["TicketDetailsComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ticket_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketDetailsRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=ticket-details-ticket-details-module.js.map