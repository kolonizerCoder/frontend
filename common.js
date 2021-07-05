(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Fdyq":
/*!********************************************!*\
  !*** ./src/app/service/subject.service.ts ***!
  \********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SubjectService {
    constructor(http) {
        this.http = http;
    }
    create_subject(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/subject/create-subject`, { data });
    }
    get_subject(type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/subject/all-subject/enable/${type}`);
    }
    update_subject(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/subject/update-subject`, { data });
    }
}
SubjectService.ɵfac = function SubjectService_Factory(t) { return new (t || SubjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SubjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubjectService, factory: SubjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HB5e":
/*!*********************************************!*\
  !*** ./src/app/utilities/formative_data.ts ***!
  \*********************************************/
/*! exports provided: FormativeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormativeData", function() { return FormativeData; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");


class FormativeData {
    // formalized data which is accepted by tree
    static format(data) {
        const output = [];
        data.forEach((obj) => {
            const dest = output.find((target) => target.data.name === obj.groupBy);
            if (!dest) {
                output.push({
                    data: { name: obj.groupBy },
                    children: [{ data: { name: obj.permission_name, code: obj.code } }],
                });
            }
            else {
                dest.children.push({
                    data: { name: obj.permission_name, code: obj.code },
                });
            }
        });
        return output;
    }
    // Remove those nodes who don't have permission code generally parents nodes
    static removeParent(data) {
        const filterdata = data.map((res) => res.data.code);
        return [...new Set(filterdata.filter((el) => el))];
    }
    static format_firebase_get_request_data(input) {
        let response = [];
        input.forEach((doc) => {
            const data = doc.data();
            data['doc_id'] = doc.id;
            response.push(data);
        });
        return response;
    }
    static formative_snapshot_data(res) {
        const format_data = res.map((e) => {
            const data = e.payload.doc.data();
            data['doc_id'] = e.payload.doc.id;
            return data;
        });
        return format_data;
    }
    static concat_url_with_files(data) {
        return data.map((path) => _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].FILES_URL + '/' + path);
    }
    static formative_date(date, type) {
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US').transform(date, type);
    }
    static format_batch_data(data, subject) {
        const output = [];
        data.map((batch) => {
            output.push({
                data: {
                    name: batch.batch_ids.batch_name,
                    id: batch.batch_ids._id,
                    type: 'Batch',
                },
                children: subject.map((subject) => {
                    return {
                        data: {
                            name: subject.subject_name,
                            id: subject._id,
                            type: 'Subject',
                            batch: batch.batch_ids.batch_name,
                            batch_id: batch.batch_ids._id,
                        },
                    };
                }),
            });
        });
        return output;
    }
    static groupBy_batchID(data) {
        const batch_ids = [];
        data.forEach((subj) => {
            if (subj.data.batch_id) {
                const dest = batch_ids.find((target) => target.batch_ids === subj.data.batch_id);
                if (!dest) {
                    batch_ids.push({
                        active: true,
                        batch_ids: subj.data.batch_id,
                        subject_ids: [subj.data.id],
                    });
                }
                else {
                    dest.subject_ids.push(subj.data.id);
                }
            }
        });
        return batch_ids;
    }
}


/***/ }),

/***/ "Ivph":
/*!*******************************************!*\
  !*** ./src/app/utilities/password_eye.ts ***!
  \*******************************************/
/*! exports provided: eye_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eye_button", function() { return eye_button; });
const eye_button = (tag) => {
    let type = tag.nativeElement.getAttribute('type') === 'password' ? 'text' : 'password';
    tag.nativeElement.setAttribute('type', type);
};


/***/ }),

/***/ "KYlL":
/*!***********************************!*\
  !*** ./src/app/utilities/days.ts ***!
  \***********************************/
/*! exports provided: day */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day", function() { return day; });
const day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];


/***/ }),

/***/ "NSqX":
/*!***********************************************!*\
  !*** ./src/app/service/permission.service.ts ***!
  \***********************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PermissionService {
    constructor(http) {
        this.http = http;
    }
    get_all_permission() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/permission/all-permission`);
    }
}
PermissionService.ɵfac = function PermissionService_Factory(t) { return new (t || PermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PermissionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PermissionService, factory: PermissionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Ouoq":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService {
    constructor(http) {
        this.http = http;
    }
    create_user(data) {
        // return this.firebase_store.collection('user').doc(id).set(data);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/user/create-user`, data);
    }
    login(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/user/login`, data);
    }
    get_user_details() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/user/admin-accounts`);
    }
    get_user_by_id(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/user/get-user-id/${id}`);
    }
    update_user_by_id(data, id) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/user/update-user-id/${id}`, data);
    }
    add_admin_into_batch(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/user/add-admin-into-batch`, { data });
    }
    update_password(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/user/update-password`, data);
    }
    get_admin_batch_details() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/user/get-admin-batch-details`);
    }
    get_all_admin() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/user/get-admin-list`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "S8Dk":
/*!*********************************************!*\
  !*** ./src/app/service/students.service.ts ***!
  \*********************************************/
/*! exports provided: StudentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsService", function() { return StudentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class StudentsService {
    constructor(http) {
        this.http = http;
    }
    create_single_student(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/student/create-student`, { data });
    }
    get_student_details(type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/student/get-all-student/${type}`);
    }
    get_student_details_id(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/student/get-student-details/${id}`);
    }
    get_unassigned_batch_students() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/student/get-unassigned_batch_students`);
    }
    add_student_into_batch(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/student/assign-batch-to-student`, { data });
    }
    bulk_student_registration(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/student/bulk-registration-student`, { data });
    }
    total_student() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/student/total-active-students`);
    }
    get_student_details_upadte(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/student/get-student-details-update/${id}`);
    }
    update_student_profile(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/student/update-student-profile`, { data });
    }
}
StudentsService.ɵfac = function StudentsService_Factory(t) { return new (t || StudentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
StudentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentsService, factory: StudentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "V7yy":
/*!***********************************************!*\
  !*** ./src/app/service/attachment.service.ts ***!
  \***********************************************/
/*! exports provided: AttachmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentService", function() { return AttachmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AttachmentService {
    constructor(http) {
        this.http = http;
    }
    upload_files(data) {
        let formdata = new FormData();
        for (var i = 0; i < data.length; i++) {
            formdata.append('files[]', data[i], data[i]['name']);
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ATTACHMENT_URL, formdata).toPromise();
    }
}
AttachmentService.ɵfac = function AttachmentService_Factory(t) { return new (t || AttachmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AttachmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AttachmentService, factory: AttachmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttachmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "bA0T":
/*!*********************************************!*\
  !*** ./src/app/service/priority.service.ts ***!
  \*********************************************/
/*! exports provided: PriorityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityService", function() { return PriorityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PriorityService {
    constructor(http) {
        this.http = http;
    }
    create_priority(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/priority/create-priority`, { data });
    }
    get_priority(type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/priority/all-priorities/${type}`);
    }
    update_status(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/priority/update-priority`, { data });
    }
}
PriorityService.ɵfac = function PriorityService_Factory(t) { return new (t || PriorityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PriorityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PriorityService, factory: PriorityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PriorityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jHPu":
/*!*****************************************!*\
  !*** ./src/app/service/chat.service.ts ***!
  \*****************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ChatService {
    constructor(http) {
        this.http = http;
    }
    get_batch_chat(batch_id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/chat/get-chat-by-batchID/${batch_id}`);
    }
    get_selected_studentChat(chat_id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/chat/get-chat-by-id/${chat_id}`);
    }
    get_chat_message_trainer_mode(batch_id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/chat/get-chat-trainer-mode/${batch_id}`);
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nYmY":
/*!*******************************************!*\
  !*** ./src/app/service/course.service.ts ***!
  \*******************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CourseService {
    constructor(http) {
        this.http = http;
    }
    create_course(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/course/create-course`, { data });
    }
    get_all_course(type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/course/get-course/enable/${type}`);
    }
    change_status(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/course/update-status`, { data });
    }
    view_details_by_id(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/course/get-course/view-course/${id}`);
    }
    edit_course_by_id(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/course/get-course/edit-course/${id}`);
    }
    update_course(data, id) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/course/upadte-course-details/${id}`, { data });
    }
}
CourseService.ɵfac = function CourseService_Factory(t) { return new (t || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CourseService, factory: CourseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "qadR":
/*!**************************************************!*\
  !*** ./src/app/service/custom-fields.service.ts ***!
  \**************************************************/
/*! exports provided: CustomFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldsService", function() { return CustomFieldsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CustomFieldsService {
    constructor(http) {
        this.http = http;
    }
    create_custom_fields(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/custom/create-custom-fields`, { data });
    }
    get_custom_fields(type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/custom/get-custom-fields/${type}`);
    }
    update_status(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/custom/update-fields-status`, { data });
    }
    get_fields_for_tables(type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/custom/feilds-for-tables/${type}`);
    }
}
CustomFieldsService.ɵfac = function CustomFieldsService_Factory(t) { return new (t || CustomFieldsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CustomFieldsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomFieldsService, factory: CustomFieldsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomFieldsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "qs8k":
/*!*******************************************!*\
  !*** ./src/app/service/ticket.service.ts ***!
  \*******************************************/
/*! exports provided: TicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketService", function() { return TicketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TicketService {
    constructor(http) {
        this.http = http;
    }
    get_ticket_permission() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/ticket-permission/all-permission`);
    }
    get_all_active_ticket(skip) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/ticket/all-active-tickets/${skip}`);
    }
    get_all_close_ticket(skip) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/ticket/all-close-tickets/${skip}`);
    }
    get_my_category_all_active_ticket(skip) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/ticket/my-category-all-active-tickets/${skip}`);
    }
    get_my_category_all_close_ticket(skip) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/ticket/my-category-all-close-tickets/${skip}`);
    }
    get_my_active_ticket(skip) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/ticket/active-tickets/${skip}`);
    }
    get_my_close_ticket(skip) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/ticket/close-tickets/${skip}`);
    }
    get_ticket_details(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/ticket/ticket-details/${id}`);
    }
    reply_ticket(data, ticket_id) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/ticket/reply_ticket/${ticket_id}`, { data });
    }
}
TicketService.ɵfac = function TicketService_Factory(t) { return new (t || TicketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TicketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TicketService, factory: TicketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "taL5":
/*!******************************************!*\
  !*** ./src/app/service/batch.service.ts ***!
  \******************************************/
/*! exports provided: BatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchService", function() { return BatchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BatchService {
    constructor(http) {
        this.http = http;
    }
    create_batch(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/batch/create-batch`, {
            data,
        });
    }
    get_all_batch(type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/batch/get-batch/enable/${type}`);
    }
    change_batch_status(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/batch/update-status`, { data });
    }
    get_batch_details_by(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/batch/view-batch-details/${id}`);
    }
    get_batch_details_for_addStudent(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/batch/batch-details-for-add-student/${id}`);
    }
    get_edit_batch_details_by_id(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/batch/get-edit-batch-details/${id}`);
    }
    get_batch_details_home() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_SERVER_URL}/batch/get-batch-details-home`);
    }
}
BatchService.ɵfac = function BatchService_Factory(t) { return new (t || BatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BatchService, factory: BatchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BatchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ztMo":
/*!********************************************!*\
  !*** ./src/app/utilities/ACCESS_DENIED.ts ***!
  \********************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

class Notification {
    constructor(router) {
        this.router = router;
    }
    static ACCESS_DENIED() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Access Denied. You don't have Enough Permission To access this route`,
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=common.js.map