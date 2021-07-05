(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["live-session-chat-live-session-chat-module"],{

/***/ "8pV3":
/*!****************************************************************************!*\
  !*** ./src/app/component/live-session-chat/live-session-chat.component.ts ***!
  \****************************************************************************/
/*! exports provided: LiveSessionChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveSessionChatComponent", function() { return LiveSessionChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_utilities_formative_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/formative_data */ "HB5e");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_service_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/chat.service */ "jHPu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var src_app_service_attachment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/attachment.service */ "V7yy");
/* harmony import */ var src_app_service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/live-session-chat.service */ "cN4R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/divider */ "lUkA");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../spinner/spinner.component */ "GXBN");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-moment */ "QUrN");



















const _c0 = ["textarea"];
const _c1 = ["sound"];
function LiveSessionChatComponent_section_0_ng_container_15_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LiveSessionChatComponent_section_0_ng_container_15_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const student_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r10.get_selected_student_chat(student_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", student_r9.student_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", student_r9.admin_unread_count, " ");
} }
function LiveSessionChatComponent_section_0_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LiveSessionChatComponent_section_0_ng_container_15_li_1_Template, 9, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.active_student_list);
} }
function LiveSessionChatComponent_section_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select A batch from the dropdown above ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r15.selected_student.student_name, " ");
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r23.label);
} }
const _c2 = function () { return { minWidth: "100%", "border-radius": "10px" }; };
function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-dropdown", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_3_Template_p_dropdown_onChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r24.transfer_chat(_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LiveSessionChatComponent_section_0_div_19_ng_container_3_div_3_ng_template_4_Template, 3, 1, "ng-template", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r26.end_chat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " End Chat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r16.transfer_admin);
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_div_1_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, message_r28.created_at, "hh:mmA"), "");
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r28.text_message, " ");
} }
const _c3 = function (a0) { return { "text-white": a0 }; };
function LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_div_1_div_7_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r35 = ctx.$implicit;
    const i_r36 = ctx.index;
    const message_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", file_r35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c3, message_r28.sender_type === "student"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("file", i_r36, "");
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_div_1_div_7_li_5_Template, 3, 5, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", message_r28.attachment);
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_div_1_small_5_Template, 3, 4, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_div_1_ng_container_6_Template, 4, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_div_1_div_7_Template, 6, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", message_r28.sender_type === "student" ? "align-self-start" : "align-self-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r28.sender_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r28.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r28.text_message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (message_r28.attachment == null ? null : message_r28.attachment.length) > 0);
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_div_1_Template, 8, 5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.selected_student_chat_message);
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r42.files.length, " ");
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_ng_container_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r46.send_message(_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r39.value == "" && ctx_r43.files.length == 0);
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "button", 79);
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "textarea", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_Template_textarea_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r48.textarea_auto_increment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r50.attchment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_span_9_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_ng_template_10_Template, 2, 1, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_ng_container_13_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_ng_template_14_Template, 1, 0, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.files.length == 0)("ngIfElse", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r18.message_sending)("ngIfElse", _r44);
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_template_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r51.assign_chat_to_admin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Start Chat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r20.selected_student);
} }
function LiveSessionChatComponent_section_0_div_19_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LiveSessionChatComponent_section_0_div_19_ng_container_3_h3_2_Template, 2, 1, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LiveSessionChatComponent_section_0_div_19_ng_container_3_div_3_Template, 8, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LiveSessionChatComponent_section_0_div_19_ng_container_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r53.load_more(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_container_8_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LiveSessionChatComponent_section_0_div_19_ng_container_3_div_10_Template, 16, 4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LiveSessionChatComponent_section_0_div_19_ng_container_3_ng_template_12_Template, 3, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.selected_student);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.selected_student && ctx_r12.selected_student.sme_id == ctx_r12.admin_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r12.selected_student_chat_message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.selected_student_chat_message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.selected_student.sme_id)("ngIfElse", _r19);
} }
function LiveSessionChatComponent_section_0_div_19_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please Select A student to start Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LiveSessionChatComponent_section_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LiveSessionChatComponent_section_0_div_19_ng_container_3_Template, 14, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LiveSessionChatComponent_section_0_div_19_ng_template_4_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.selected_student)("ngIfElse", _r13);
} }
function LiveSessionChatComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LiveSessionChatComponent_section_0_Template_p_dropdown_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r55.selected_batch = $event; })("onChange", function LiveSessionChatComponent_section_0_Template_p_dropdown_onChange_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r57.get_all_student_chat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LiveSessionChatComponent_section_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r58.end_all_chat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " End All Chat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LiveSessionChatComponent_section_0_ng_container_15_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LiveSessionChatComponent_section_0_ng_template_17_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LiveSessionChatComponent_section_0_div_19_Template, 6, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.batch)("ngModel", ctx_r0.selected_batch);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.end_all_chat_button);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.active_student_list.length > 0)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selected_batch);
} }
function LiveSessionChatComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LiveSessionChatComponent {
    constructor(chat_service, router, user_service, attachment_service, live_session_chat_service) {
        this.chat_service = chat_service;
        this.router = router;
        this.user_service = user_service;
        this.attachment_service = attachment_service;
        this.live_session_chat_service = live_session_chat_service;
        this.spinner = false;
        this.active_student_list = [];
        this.selected_student_chat_message = [];
        this.has_sme = false;
        this.admin_id = localStorage.getItem('uid');
        this.files = [];
        this.message_sending = false;
        // assign chat to admin
        this.live_session_chat_service.assign_chat().subscribe((res) => {
            this.active_student_list.forEach((stu) => {
                if (res.chat_id === stu._id) {
                    stu.sme_id = res.sme_id;
                }
            });
            this.filter_data();
        });
        // new message
        this.live_session_chat_service.new_message_received().subscribe((res) => {
            this.sound.nativeElement.pause();
            this.sound.nativeElement.currentTime = 0;
            if (res.sender_type !== 'admin') {
                this.sound.nativeElement.play();
            }
            if (this.selected_student_chat_message) {
                this.selected_student_chat_message.push(res);
            }
            // update admin read counter
            this.active_student_list.forEach((stu) => {
                if (stu._id === this.selected_student._id) {
                    stu.admin_unread_count = 0;
                }
            });
            this.sorting(this.active_student_list);
            setTimeout(() => {
                this.scroll_chat_container();
            }, 50);
        });
        // increment counter
        this.live_session_chat_service
            .increment_admin_counter()
            .subscribe((res) => {
            this.active_student_list = this.active_student_list.map((stu) => {
                if (stu._id === res.chat_id) {
                    stu.admin_unread_count = res.admin_unread_count + 1;
                }
                else {
                    stu.admin_unread_count = stu.admin_unread_count;
                }
                return stu;
            });
            this.sorting(this.active_student_list);
        });
        // end chat
        this.live_session_chat_service.end_chat().subscribe((res) => {
            res.forEach((element) => {
                const dest = this.active_student_list.find((chats) => chats._id === element._id);
                if (dest) {
                    dest.sme_id = null;
                }
                else {
                    element.sme_id = null;
                    this.active_student_list.push(element);
                }
            });
            this.spinner = false;
            this.sorting(this.active_student_list);
        });
        // transfer chat
        this.live_session_chat_service.transfer_chat().subscribe((res) => {
            if (res.sme_id === localStorage.getItem('uid')) {
                this.active_student_list.push(res);
                this.sorting(this.active_student_list);
            }
            console.log(this.active_student_list);
            this.spinner = false;
        });
    }
    filter_data() {
        this.active_student_list = this.active_student_list.filter((stu) => stu.sme_id === localStorage.getItem('uid') || stu.sme_id == null);
        if (this.selected_student.sme_id !== localStorage.getItem('uid')) {
            this.selected_student = '';
        }
        this.spinner = false;
        setTimeout(() => {
            this.scroll_chat_container();
        }, 100);
    }
    sorting(data) {
        this.active_student_list.sort((a, b) => b.admin_unread_count - a.admin_unread_count);
    }
    textarea_auto_increment(event) {
        const tx = event.target;
        tx.style.height = 'auto';
        tx.style.height = tx.scrollHeight + 'px';
    }
    scroll_chat_container() {
        const div = document.getElementById('chat-body');
        if (div != null) {
            div.scrollTop = div.scrollHeight - div.clientHeight;
        }
        else {
            setTimeout(() => {
                this.scroll_chat_container();
            }, 200);
        }
    }
    get_admin_batch() {
        this.user_service.get_admin_batch_details().subscribe((res) => {
            const data = res.data;
            this.user = data;
            this.batch = data.batch_ids;
        }, (error) => {
            this.error_handler(error);
        });
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
    // after batch select get all the student list
    get_all_student_chat() {
        this.spinner = true;
        this.selected_student = '';
        this.selected_student_chat_message = [];
        this.chat_service.get_batch_chat(this.selected_batch._id).subscribe((res) => {
            this.active_student_list = res.data;
            this.sorting(this.active_student_list);
            this.spinner = false;
        }, (error) => this.error_handler(error));
    }
    // after student selected get their chat
    get_selected_student_chat(student) {
        this.spinner = true;
        if (this.selected_student) {
            this.live_session_chat_service.leave({
                room_id: this.selected_student.student_id + this.selected_student.batch_id,
            });
        }
        this.selected_student = student;
        if (this.selected_student.sme_id === localStorage.getItem('uid')) {
            this.live_session_chat_service.join_room({
                room_id: this.selected_student.student_id + this.selected_student.batch_id,
            });
        }
        this.chat_service
            .get_selected_studentChat(this.selected_student._id)
            .subscribe((res) => {
            const response = res.data;
            this.selected_student_chat_message = response.message;
            this.scroll_chat_container();
            this.spinner = false;
        }, (error) => this.error_handler(error));
    }
    assign_chat_to_admin() {
        this.spinner = true;
        const data = {
            chat_id: this.selected_student._id,
            sme_id: localStorage.getItem('uid'),
        };
        this.live_session_chat_service.join_room({
            room_id: this.selected_student.student_id + this.selected_student.batch_id,
        });
        this.live_session_chat_service.assign_chat_to_admin(data);
    }
    // attachment
    attchment(event) {
        this.files = [];
        for (let i = 0; i < event.target.files.length; i++) {
            this.files.push(event.target.files[i]);
        }
    }
    // send message
    send_message(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.message_sending = true;
            const message_obj = {
                text_message: message.value,
                sme_id: localStorage.getItem('uid'),
                sender_name: this.user.name,
                sender_type: 'admin',
                attachment: [],
                created_at: new Date(),
            };
            const data = {
                room_id: this.selected_student.student_id + this.selected_student.batch_id,
                chat_id: this.selected_student._id,
            };
            this.textarea.nativeElement.value = '';
            try {
                if (this.files.length > 0) {
                    const files = yield this.attachment_service.upload_files(this.files);
                    message_obj['attachment'] = src_app_utilities_formative_data__WEBPACK_IMPORTED_MODULE_2__["FormativeData"].concat_url_with_files(files.files_paths);
                }
                this.live_session_chat_service.send_message(message_obj, data);
                this.files = [];
                this.message_sending = false;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    end_chat() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: 'Do you want to end this chat',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
        }).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.isConfirmed) {
                this.spinner = true;
                this.selected_student_chat_message = [];
                this.live_session_chat_service.leave({
                    room_id: this.selected_student.student_id + this.selected_student.batch_id,
                });
                this.live_session_chat_service.end_all_chat([this.selected_student]);
                this.selected_student = '';
            }
        }));
    }
    transfer_chat(doc) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: 'Do you want to transfer this chat',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
        }).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.isConfirmed) {
                this.spinner = true;
                this.selected_student_chat_message = [];
                this.selected_student.sme_id = doc.value;
                this.active_student_list = this.active_student_list.filter((stu) => !(stu.student_id === this.selected_student.student_id &&
                    stu.batch_id === this.selected_student.batch_id));
                this.live_session_chat_service.transfer(this.selected_student);
                this.live_session_chat_service.leave({
                    room_id: this.selected_student.student_id + this.selected_student.batch_id,
                });
                this.selected_student = '';
            }
        }));
    }
    // for transfer
    get_all_admin() {
        this.spinner = true;
        this.user_service.get_all_admin().subscribe((res) => {
            this.transfer_admin = res.data;
            this.spinner = false;
        }, (error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.errorMessage,
            }).then(() => {
                this.spinner = false;
                this.router.navigate(['/main']);
            });
        });
    }
    load_more() { }
    end_all_chat() { }
    ngOnInit() {
        this.get_admin_batch();
        this.get_all_admin();
    }
    ngOnDestroy() {
        this.live_session_chat_service.remove_listen();
        if (this.selected_student) {
            this.live_session_chat_service.leave({
                room_id: this.selected_student.student_id + this.selected_student.batch_id,
            });
        }
    }
}
LiveSessionChatComponent.ɵfac = function LiveSessionChatComponent_Factory(t) { return new (t || LiveSessionChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_attachment_service__WEBPACK_IMPORTED_MODULE_7__["AttachmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_8__["LiveSessionChatService"])); };
LiveSessionChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LiveSessionChatComponent, selectors: [["app-live-session-chat"]], viewQuery: function LiveSessionChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.textarea = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sound = _t.first);
    } }, decls: 5, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["src", "../../../assets/Sound/pop.mp3"], ["sound", ""], ["showspinner", ""], [1, "row"], [1, "col-sm-12", "col-md-4", "m-b-md"], [1, "card"], [1, "card-body", "p-0", "p-2"], [1, "row", "align-items-center"], [1, "col-7"], ["placeholder", "Select a Batch", "optionLabel", "batch_name", "display", "chip", 3, "options", "ngModel", "ngModelChange", "onChange"], [1, "col-5"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "card-body"], [1, "email-list"], [1, "list-unstyled"], ["nodata", ""], ["class", "col-sm-12 col-md-8", 4, "ngIf"], ["style", "cursor: pointer", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], [1, "javascript:void(0)"], [1, "email-list-item"], [1, "email-author"], ["src", "../../assets/images/avatars/profile-image-1.png", "alt", ""], [1, "author-name"], [1, "email-date"], [1, "h4", "warnning"], [1, "col-sm-12", "col-md-8"], ["warning", ""], [1, "chat-header", "d-flex", "justify-content-between", "align-items-center"], ["class", "h3", 4, "ngIf"], ["class", "control d-flex", 4, "ngIf"], ["id", "chat-body", 1, "chat-body", "px-2"], [1, "d-flex"], ["pButton", "", "pRipple", "", "pTooltip", "Load more", "type", "button", "icon", "pi pi-cloud-download", 1, "p-button-rounded", "p-button-outlined", "m-auto", 3, "disabled", "click"], [1, "post-comments", "d-flex", "flex-column"], [4, "ngIf"], [1, "chat-footer"], ["class", "row p-0 align-items-center", 4, "ngIf", "ngIfElse"], [1, "row", "p-0"], ["startchat", ""], [1, "h3"], [1, "control", "d-flex"], [1, "batch_list"], ["placeholder", "Transfer Chat", "optionLabel", "name", "optionValue", "_id", 3, "options", "onChange"], ["transfer_admin_id", ""], ["pTemplate", "group"], [1, "control"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "p-d-flex", "p-ai-center"], ["class", "post-comm", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "post-comm", 3, "ngClass"], ["src", "../../assets/images/avatars/profile-image-2.png", "alt", "", 1, "comment-img"], [1, "comment-container", "pb-2"], [1, "comment-author"], ["class", "comment-date", 4, "ngIf"], ["class", "attachment", 4, "ngIf"], [1, "comment-date"], [1, "comment-text"], [1, "attachment"], [1, "d-flex", "flex-wrap", 2, "list-style", "none", "margin", "0", "padding", "0"], ["class", "mr-2", 4, "ngFor", "ngForOf"], [1, "mr-2"], ["target", "_blank", 3, "href", "ngClass"], [1, "row", "p-0", "align-items-center"], [1, "col-9", "col-md-10"], ["name", "text", "placeholder", "Write Something", "id", "", "cols", "30", "rows", "1", 1, "form-control", 3, "input"], ["textarea", ""], [1, "chat-control", "col-3", "col-md-2", "d-flex", "align-items-center", "p-0", "pl-0"], [1, "file"], ["type", "file", "multiple", "", "name", "file", "id", "file", 3, "change"], ["for", "file", "title", "select files"], ["count", ""], [1, "send", "z-1000"], ["wait", ""], [1, "fas", "fa-paperclip"], [1, "count"], ["type", "button", 3, "disabled", "click"], [1, "far", "fa-paper-plane"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-spin pi-spinner", "disabled", "true", 1, "p-button-rounded"], [1, "col-12"], [1, "btn", "btn-success", "w-100", 3, "disabled", "click"], [1, "spinner"]], template: function LiveSessionChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LiveSessionChatComponent_section_0_Template, 20, 9, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "audio", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LiveSessionChatComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.spinner)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonDirective"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__["Tooltip"], primeng_api__WEBPACK_IMPORTED_MODULE_14__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], primeng_divider__WEBPACK_IMPORTED_MODULE_15__["Divider"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"]], pipes: [ngx_moment__WEBPACK_IMPORTED_MODULE_17__["DateFormatPipe"]], styles: ["[_ngcontent-%COMP%]:root     .p-dropdown {\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaXZlLXNlc3Npb24tY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLG1CQUFBO0FBRE4iLCJmaWxlIjoibGl2ZS1zZXNzaW9uLWNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIDo6bmctZGVlcCB7XG4gICAgLnAtZHJvcGRvd24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LiveSessionChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-live-session-chat',
                templateUrl: './live-session-chat.component.html',
                styleUrls: ['./live-session-chat.component.scss'],
            }]
    }], function () { return [{ type: src_app_service_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: src_app_service_attachment_service__WEBPACK_IMPORTED_MODULE_7__["AttachmentService"] }, { type: src_app_service_live_session_chat_service__WEBPACK_IMPORTED_MODULE_8__["LiveSessionChatService"] }]; }, { textarea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['textarea']
        }], sound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['sound']
        }] }); })();


/***/ }),

/***/ "SGWI":
/*!**********************************************************************!*\
  !*** ./src/app/Module/live-session-chat/live-session-chat.module.ts ***!
  \**********************************************************************/
/*! exports provided: LiveSessionChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveSessionChatModule", function() { return LiveSessionChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _live_session_chat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-session-chat-routing.module */ "yBQm");
/* harmony import */ var _component_live_session_chat_live_session_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/live-session-chat/live-session-chat.component */ "8pV3");
/* harmony import */ var src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/SharedModule/primeng/primeng.module */ "ATLQ");
/* harmony import */ var src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/SharedModule/shared-utilities/shared-utilities.module */ "S5PD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








class LiveSessionChatModule {
}
LiveSessionChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LiveSessionChatModule });
LiveSessionChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LiveSessionChatModule_Factory(t) { return new (t || LiveSessionChatModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _live_session_chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["LiveSessionChatRoutingModule"],
            src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_4__["PrimengModule"],
            src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_5__["SharedUtilitiesModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LiveSessionChatModule, { declarations: [_component_live_session_chat_live_session_chat_component__WEBPACK_IMPORTED_MODULE_3__["LiveSessionChatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _live_session_chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["LiveSessionChatRoutingModule"],
        src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_4__["PrimengModule"],
        src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_5__["SharedUtilitiesModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveSessionChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_component_live_session_chat_live_session_chat_component__WEBPACK_IMPORTED_MODULE_3__["LiveSessionChatComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _live_session_chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["LiveSessionChatRoutingModule"],
                    src_app_SharedModule_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_4__["PrimengModule"],
                    src_app_SharedModule_shared_utilities_shared_utilities_module__WEBPACK_IMPORTED_MODULE_5__["SharedUtilitiesModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "yBQm":
/*!******************************************************************************!*\
  !*** ./src/app/Module/live-session-chat/live-session-chat-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: LiveSessionChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveSessionChatRoutingModule", function() { return LiveSessionChatRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_live_session_chat_live_session_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/live-session-chat/live-session-chat.component */ "8pV3");





const routes = [{ path: '', component: _component_live_session_chat_live_session_chat_component__WEBPACK_IMPORTED_MODULE_2__["LiveSessionChatComponent"] }];
class LiveSessionChatRoutingModule {
}
LiveSessionChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LiveSessionChatRoutingModule });
LiveSessionChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LiveSessionChatRoutingModule_Factory(t) { return new (t || LiveSessionChatRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LiveSessionChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveSessionChatRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=live-session-chat-live-session-chat-module.js.map