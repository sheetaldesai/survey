webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_survey_new_survey_component__ = __webpack_require__("../../../../../src/app/new-survey/new-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poll_poll_component__ = __webpack_require__("../../../../../src/app/poll/poll.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */], pathMatch: 'full' },
    { path: 'logout', redirectTo: '', pathMatch: 'full' },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_4__new_survey_new_survey_component__["a" /* NewSurveyComponent */], pathMatch: 'full' },
    { path: 'dashboard/:id', component: __WEBPACK_IMPORTED_MODULE_5__poll_poll_component__["a" /* PollComponent */], pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_survey_new_survey_component__ = __webpack_require__("../../../../../src/app/new-survey/new-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__poll_poll_component__ = __webpack_require__("../../../../../src/app/poll/poll.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__new_survey_new_survey_component__["a" /* NewSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__poll_poll_component__["a" /* PollComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-right{\n    text-align: right;\n}\n\n.navbar-right a {\n    padding: 15px;\n}\n\n.search {\n    margin-bottom: 15px;\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav>\n      <div class=\"navbar-right\"> \n         <a  [routerLink]=\"['/create']\">Create a New Poll</a>\n         <a  [routerLink]=\"['/logout']\">Logout</a>\n      </div> \n    </nav>\n    <div class=\"main\">\n      <div class=\"search\">\n        <input type=\"text\" placeholder=\"search\">\n      </div>\n      <div>\n        <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Name</th>\n                <th>Survey Question</th>\n                <th>Date Posted</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor = \"let question of questions\">\n                <td>{{question.username}}</td>\n                <td><a [routerLink]=\"[question._id]\">{{question.question}}</a></td>\n                <td>{{question['createdAt'] | date:\"medium\"}}</td>\n                <td><button (click)=\"onDelete(question)\" [hidden]=\"loggedUser != question.username\" >Delete</button></td>\n              </tr>\n            </tbody>\n          </table>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_dataService) {
        this._dataService = _dataService;
        this.questions = [];
        this.loggedUser = "";
        this.loggedUser = this._dataService.getLogin();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Logged in user: ", this.loggedUser);
        this._dataService.questionObservable.subscribe(function (questions) { return _this.questions = questions; });
        this._dataService.getAllQuestions();
    };
    DashboardComponent.prototype.onDelete = function (question) {
        this._dataService.delete(question);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
        this.questionObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this.qObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]({});
        this.login = { username: "" };
        console.log("service constructor login: ", this.login.username);
    }
    DataService.prototype.setLogin = function (name) {
        this.login.username = name;
    };
    DataService.prototype.getLogin = function () {
        return this.login.username;
    };
    DataService.prototype.getAllQuestions = function () {
        var _this = this;
        this._http.get('/questions').subscribe(function (questions) {
            console.log("Got questions from server: ", questions);
            _this.questionObservable.next(questions);
        }),
            function (error) { return console.log(error); };
    };
    DataService.prototype.create = function (que) {
        var _this = this;
        console.log("Service adding question to the serer: ", que);
        this._http.post('/questions', que).subscribe(function (response) { return _this.getAllQuestions(); }, function (errorResponse) { return console.log(errorResponse); });
    };
    DataService.prototype.delete = function (que) {
        var _this = this;
        console.log("Service deleting question ", que);
        this._http.delete('/questions/' + que._id).subscribe(function (response) {
            console.log(response);
            _this.getAllQuestions();
        });
    };
    DataService.prototype.getQuestion = function (id, callback) {
        console.log("Service getting question id: ", id);
        this._http.get('questions/' + id).subscribe(function (response) {
            console.log("Got question from server : ", response);
            callback(response);
            //this.qObservable.next(response);
        }), function (error) { return console.log(error); };
    };
    DataService.prototype.updateOption = function (id, votes) {
        console.log("Service sending updateOption id, votes: ", id, votes);
        this._http.put('comments/' + id, { votes: votes }).subscribe(function (response) {
            console.log("Updated comment: ", response);
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #form=\"ngForm\" (submit)=\"onLogin()\" method=\"post\">\n      <div class=\"form-group\">\n        <label for=\"name\">Your Name</label>\n        <input \n          type=\"text\" \n          name=\"username1\"\n          [(ngModel)]=\"login.username\"\n          #username1=\"ngModel\"\n          required\n          class=\"form-control\"\n        />\n        <small class=\"form-text text-muted error\" *ngIf='!username1.valid'>Name is required.</small>\n      </div>\n      <input type=\"submit\" [disabled] = !form.form.valid value=\"Log In\">\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_router, _dataService) {
        this._router = _router;
        this._dataService = _dataService;
        this.login = { username: "" };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        console.log("login clicked name:", this.login.username);
        this._dataService.setLogin(this.login.username);
        this._router.navigate(['/dashboard']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-survey/new-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-survey/new-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  {{question | json}}\n  <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">  \n          <a class=\"nav-item nav-link\" [routerLink]=\"['/dashboard']\">Goto Dashboard</a>\n    </nav>\n  <h1>Put a new question here</h1>\n  <form #form=\"ngForm\" (submit)=\"onSubmit()\" method=\"post\">\n      <div class=\"form-group\">\n        <label for=\"question\">Question</label>\n        <input \n          type=\"text\" \n          name=\"question\"\n          [(ngModel)]=\"question.question\"\n          #q=\"ngModel\"\n          required\n          minlength=\"6\"\n          class=\"form-control\"\n        />\n        <small class=\"form-text text-muted error\" *ngIf='!q.valid'>Question is required and has to be minimum 6 characters long.</small>\n      </div>\n      <div class=\"form-group\" >\n        <label for=\"option1\">Option 1</label>\n        <input \n          type=\"text\" \n          name=\"option1\"\n          [(ngModel)]=\"question.option1.text\"\n          #option11=\"ngModel\"\n          required\n          minlength=\"3\"\n          class=\"form-control\"\n        />\n        <small class=\"form-text text-muted error\" *ngIf='!option11.valid'>Option 1 is required and has to be mininum 3 characters long.</small>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"option2\">Option 2</label>\n          <input \n            type=\"text\" \n            name=\"option2\"\n            [(ngModel)]=\"question.option2.text\"\n            #option22=\"ngModel\"\n            required\n            minlength=\"3\"\n            class=\"form-control\"\n          />\n          <small class=\"form-text text-muted error\" *ngIf='!option22.valid'>Option 2 is required and has to be mininum 3 characters long.</small>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"option3\">Option 3</label>\n          <input \n            type=\"text\" \n            name=\"option3\"\n            [(ngModel)]=\"question.option3.text\"\n            #option33=\"ngModel\"\n            required\n            minlength=\"3\"\n            class=\"form-control\"\n          />\n          <small class=\"form-text text-muted error\" *ngIf='!option33.valid'>Option 3 is required and has to be mininum 3 characters long.</small>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"option4\">Option 4</label>\n          <input \n            type=\"text\" \n            name=\"option4\"\n            [(ngModel)]=\"question.option4.text\"\n            #option44=\"ngModel\"\n            required\n            minlength=\"3\"\n            class=\"form-control\"\n          />\n          <small class=\"form-text text-muted error\" *ngIf='!option44.valid'>Option 4 is required and has to be mininum 3 characters long.</small>\n      </div>\n      <div class=\"form-group\">\n          <input type=\"submit\"  value=\"Save\">\n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/new-survey/new-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewSurveyComponent = (function () {
    function NewSurveyComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.question = new __WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]();
        console.log(this.question);
    }
    NewSurveyComponent.prototype.ngOnInit = function () {
    };
    NewSurveyComponent.prototype.onSubmit = function () {
        this.question.username = this._dataService.getLogin();
        if (this.question.username == "") {
            this.question.username = "sheetal";
        }
        console.log("save clicked question: ", this.question);
        this._dataService.create(this.question);
        this._router.navigate(['/dashboard']);
    };
    NewSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-survey',
            template: __webpack_require__("../../../../../src/app/new-survey/new-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-survey/new-survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NewSurveyComponent);
    return NewSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Option; });
var Option = (function () {
    function Option(text, votes) {
        if (text === void 0) { text = ""; }
        if (votes === void 0) { votes = 0; }
        this.text = text;
        this.votes = votes;
    }
    return Option;
}());



/***/ }),

/***/ "../../../../../src/app/poll/poll.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-right {\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/poll/poll.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a [routerLink]=\"['/dashboard']\">Goto Polls</a></li>\n        </ul>\n  </nav>\n<h1>{{question['question']}}</h1>\n<p>Click the vote button to choose one</p>\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n  <tr scope=\"row\">\n    <th>Option</th>\n    <th>Current count of votes</th>\n    <th>Action</th>\n  </tr>\n  </thead>\n\n  <tr *ngFor = \"let option of options\">\n    \n    <td>{{option['text']}}</td>\n    <td>{{option['votes']}}</td>\n    <td><button (click)=\"onVote(option)\">Vote</button></td>\n  </tr>\n  <!--<tr>\n    <td>{{question.option2.text}}</td>\n    <td>{{question.option2.votes}}</td>\n    <td><button (click)=\"onVote(option2)\">Vote</button></td>\n  </tr>\n  <tr>\n    <td>{{question.option3.text}}</td>\n    <td>{{question.option3.votes}}</td>\n    <td><button (click)=\"onVote(option3)\">Vote</button></td>\n  </tr>\n  <tr>\n    <td>{{question.option4.text}}</td>\n    <td>{{question.option4.votes}}</td>\n    <td><button (click)=\"onVote(option4)\">Vote</button></td>\n  </tr>-->\n</table>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/poll/poll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PollComponent = (function () {
    function PollComponent(_route, _router, _dataService) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._dataService = _dataService;
        this.question = {};
        this.options = [];
        this._route.paramMap.subscribe(function (params) {
            //console.log("params: ", params);
            var id = params.get('id');
            console.log("id:", id);
            if (id) {
                _this._dataService.getQuestion(id, function (question) {
                    _this.question = question;
                    console.log(_this.question['question']);
                    _this.options = _this.question['_options'];
                    console.log("Options: ", _this.options);
                });
            }
            else {
                console.log("Id not found");
            }
        });
    }
    PollComponent.prototype.ngOnInit = function () {
    };
    PollComponent.prototype.onVote = function (option) {
        option['votes'] += 1;
        console.log("Vote clicked for ", option);
        this._dataService.updateOption(option._id, option.votes);
    };
    PollComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-poll',
            template: __webpack_require__("../../../../../src/app/poll/poll.component.html"),
            styles: [__webpack_require__("../../../../../src/app/poll/poll.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], PollComponent);
    return PollComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__("../../../../../src/app/option.ts");

var Question = (function () {
    function Question(question, username, option1, option2, option3, option4) {
        if (question === void 0) { question = ""; }
        if (username === void 0) { username = ""; }
        if (option1 === void 0) { option1 = new __WEBPACK_IMPORTED_MODULE_0__option__["a" /* Option */](); }
        if (option2 === void 0) { option2 = new __WEBPACK_IMPORTED_MODULE_0__option__["a" /* Option */](); }
        if (option3 === void 0) { option3 = new __WEBPACK_IMPORTED_MODULE_0__option__["a" /* Option */](); }
        if (option4 === void 0) { option4 = new __WEBPACK_IMPORTED_MODULE_0__option__["a" /* Option */](); }
        this.question = question;
        this.username = username;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
    }
    return Question;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map