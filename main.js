(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/home/home.module": [
		"./src/app/modules/home/home.module.ts",
		"modules-home-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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



var routes = [
    { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n<app-error-control></app-error-control>\n\n<!-- <app-footer></app-footer> -->"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'turnero-hospital-espaniol';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_core_store_effects_calendar_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/core/store/effects/calendar.effects */ "./src/app/core/store/effects/calendar.effects.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core_store_effects_form_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../app/core/store/effects/form.effects */ "./src/app/core/store/effects/form.effects.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_store_reducers_calendar_reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/store/reducers/calendar.reducers */ "./src/app/core/store/reducers/calendar.reducers.ts");
/* harmony import */ var _core_store_reducers_form_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/store/reducers/form.reducers */ "./src/app/core/store/reducers/form.reducers.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_store_reducers_error_reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/store/reducers/error.reducers */ "./src/app/core/store/reducers/error.reducers.ts");
/* harmony import */ var _core_store_effects_error_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/store/effects/error.effects */ "./src/app/core/store/effects/error.effects.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
                    // router: routerReducer,
                    formulario: _core_store_reducers_form_reducers__WEBPACK_IMPORTED_MODULE_15__["formReducer"],
                    calendario: _core_store_reducers_calendar_reducers__WEBPACK_IMPORTED_MODULE_14__["calendarReducer"],
                    error: _core_store_reducers_error_reducers__WEBPACK_IMPORTED_MODULE_17__["errorReducer"],
                }),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["StoreRouterConnectingModule"].forRoot(),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production,
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([
                    _app_core_store_effects_form_effects__WEBPACK_IMPORTED_MODULE_10__["FormEffects"],
                    _app_core_store_effects_calendar_effects__WEBPACK_IMPORTED_MODULE_8__["CalendarEffects"],
                    _core_store_effects_error_effects__WEBPACK_IMPORTED_MODULE_18__["ErrorEffects"],
                ]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ],
            exports: [
                _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/service.service */ "./src/app/core/services/service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            ],
            providers: [
                _services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n</div>"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <a href=\"home\">\n    <img src=\"./assets/img/LogoHE200.png\" alt=\"logo\">\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/mocks/mocks.ts":
/*!*************************************!*\
  !*** ./src/app/core/mocks/mocks.ts ***!
  \*************************************/
/*! exports provided: planMock1, planMock2, planMock3, planMock4, obraSocialMock1, obraSocialMock2, obrasSocialesMocks, especialidadesMocks, centroAtencionMock, centroAtencionesMocks, profesionalesMocks, diasDisponiblesMock, horariosMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planMock1", function() { return planMock1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planMock2", function() { return planMock2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planMock3", function() { return planMock3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planMock4", function() { return planMock4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obraSocialMock1", function() { return obraSocialMock1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obraSocialMock2", function() { return obraSocialMock2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obrasSocialesMocks", function() { return obrasSocialesMocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "especialidadesMocks", function() { return especialidadesMocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centroAtencionMock", function() { return centroAtencionMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centroAtencionesMocks", function() { return centroAtencionesMocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profesionalesMocks", function() { return profesionalesMocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diasDisponiblesMock", function() { return diasDisponiblesMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horariosMock", function() { return horariosMock; });
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date.utils */ "./src/app/core/utils/date.utils.ts");

var planMock1 = {
    codigo: 1,
    nombre: '210 - Básico'
};
var planMock2 = {
    codigo: 2,
    nombre: '310 - Básico'
};
var planMock3 = {
    codigo: 3,
    nombre: '410 - Básico'
};
var planMock4 = {
    codigo: 4,
    nombre: '510 - Básico'
};
var obraSocialMock1 = {
    codigo: 123,
    nombre: 'OSDE',
    plan: [
        planMock1, planMock2
    ]
};
var obraSocialMock2 = {
    codigo: 12345,
    nombre: 'ACA Salud',
    plan: [
        planMock3, planMock4
    ]
};
var obrasSocialesMocks = [obraSocialMock1, obraSocialMock2];
var especialidadesMocks = [
    {
        codigo: 1,
        nombre: 'Kinesiología'
    },
    {
        codigo: 2,
        nombre: 'Endocrinología'
    }
];
var centroAtencionMock = {
    codigo: 'HE',
    nombre: 'Hospital Español'
};
var centroAtencionesMocks = [centroAtencionMock];
var profesional1 = {
    codigo: 'PeJu',
    nombreApellido: 'Perez, Juan',
    observaciones: '',
};
var turno1 = {
    codigo: '148',
    centroAtencion: centroAtencionMock,
    fecha: new Date('2020/03/28'),
    hora: '10:00',
    observaciones: ''
};
var turno2 = {
    codigo: '348',
    centroAtencion: centroAtencionMock,
    fecha: new Date('2020/03/30'),
    hora: '20:15',
    observaciones: ''
};
var disponibilidad = {
    profesional: profesional1,
    especialidad: especialidadesMocks[0],
    turnoManiana: turno1,
    turnoTarde: turno2
};
var profesionalesMocks = [
    disponibilidad, disponibilidad
];
var diasDisponibles = function () {
    var response = [];
    _utils_date_utils__WEBPACK_IMPORTED_MODULE_0__["DateUtils"].getDaysArray(new Date(), 15).forEach(function (day, index) {
        response.push({
            fecha: _utils_date_utils__WEBPACK_IMPORTED_MODULE_0__["DateUtils"].getFormatDate(day),
            conDisponibilidad: index % 2 === 0
        });
    });
    return response;
};
var diasDisponiblesMock = diasDisponibles();
var horariosMock = [
    turno1, turno2
];


/***/ }),

/***/ "./src/app/core/services/service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/service.service.ts ***!
  \**************************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mocks_mocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mocks/mocks */ "./src/app/core/mocks/mocks.ts");
/* harmony import */ var _utils_service_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/service.utils */ "./src/app/core/utils/service.utils.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");







var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.useMockups = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].mockups;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoint;
        this.endpoint_obraSocial = this.endpoint + '/getObraSocial';
        this.endpoint_especialidad = this.endpoint + '/getEspecialidad';
        this.endpoint_centroAtencion = this.endpoint + '/getCentroAtencion';
        this.endpoint_busquedaProfesionales = this.endpoint + '/busquedaProfesionales';
        this.endpoint_busquedaDiasDisponibles = this.endpoint + '/busquedaDiasDisponibles';
        this.endpoint_busquedaHorarios = this.endpoint + '/busquedaHorarios';
    }
    ServiceService.prototype.getObraSociales = function () {
        if (this.useMockups) {
            console.log('Run mock for: getObraSociales()');
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__["obrasSocialesMocks"]);
        }
        else {
            console.log('Run to server ' + this.endpoint_obraSocial);
            return this.http.get(this.endpoint_obraSocial)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["throwErrorIfBadCode"])(res);
                return res.obraSocial;
            }));
        }
    };
    ServiceService.prototype.getEspecialidades = function () {
        if (this.useMockups) {
            console.log('Run mock for: getEspecialidades()');
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__["especialidadesMocks"]);
        }
        else {
            console.log('Run to server ' + this.endpoint_especialidad);
            return this.http.get(this.endpoint_especialidad)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["throwErrorIfBadCode"])(res);
                return res.especialidad;
            }));
        }
    };
    ServiceService.prototype.getCentrosDeAtencion = function () {
        if (this.useMockups) {
            console.log('Run mock for: getCentrosDeAtencion()');
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__["centroAtencionesMocks"]);
        }
        else {
            console.log('Run to server ' + this.endpoint_centroAtencion);
            return this.http.get(this.endpoint_centroAtencion)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["throwErrorIfBadCode"])(res);
                return res.centroAtencion;
            }));
        }
    };
    ServiceService.prototype.busquedaProfesionales = function (filter) {
        if (this.useMockups) {
            console.log('Run mock for: busquedaProfesionales() - filter', filter);
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__["profesionalesMocks"]);
        }
        else {
            console.log('Run to server ' + this.endpoint_busquedaProfesionales);
            return this.http.post(this.endpoint_busquedaProfesionales, filter)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["throwErrorIfBadCode"])(res);
                return res.disponibilidad;
            }));
        }
    };
    ServiceService.prototype.busquedaDiasDisponibles = function (filter) {
        if (this.useMockups) {
            console.log('Run mock for: busquedaDiasDisponibles() - filter', filter);
            // MOCK SIN ERROR
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__["diasDisponiblesMock"]);
            // PARA PROBAR ERRORES CON MOCK
            // const mock: DisponibilidadDiasRespuesta = {
            //   dia: Mock.diasDisponiblesMock,
            //   respuesta: {
            //     codigo: 300,
            //     mensaje: 'prueba error'
            //   }
            // };
            // return getWsFromMock(mock)
            //   .pipe(map(
            //       (res: DisponibilidadDiasRespuesta) => {
            //         throwErrorIfBadCode(res);
            //         return res.dia;
            //       }
            //   ));
        }
        else {
            console.log('Run to server ' + this.endpoint_busquedaDiasDisponibles);
            return this.http.post(this.endpoint_busquedaDiasDisponibles, filter)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["throwErrorIfBadCode"])(res);
                return res.dia;
            }));
        }
    };
    ServiceService.prototype.busquedaHorarios = function (filter) {
        if (this.useMockups) {
            console.log('Run mock for: busquedaHorarios() - filter', filter);
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__["horariosMock"]);
        }
        else {
            console.log('Run to server ' + this.endpoint_busquedaHorarios);
            return this.http.post(this.endpoint_busquedaHorarios, filter)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["throwErrorIfBadCode"])(res);
                return res.turno;
            }));
        }
    };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/core/store/actions/calendar.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/core/store/actions/calendar.actions.ts ***!
  \********************************************************/
/*! exports provided: SET_PROFESIONALES_DISPONIBLES, GET_DIAS_DISPONIBLES, SET_DIAS_DISPONIBLES, SET_TURNO_SELECTED, SET_PROFESIONAL_SELECTED, SET_FECHA_SELECTED, GET_HORARIOS_DISPONIBLES, SET_HORARIOS_DISPONIBLES, setProfesionalesDisponibles, getDiasDisponibles, setDiasDisponibles, setTurnoSelected, setProfesionalSelected, setFechaSelected, getHorariosDisponibles, setHorariosDisponibles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PROFESIONALES_DISPONIBLES", function() { return SET_PROFESIONALES_DISPONIBLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DIAS_DISPONIBLES", function() { return GET_DIAS_DISPONIBLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DIAS_DISPONIBLES", function() { return SET_DIAS_DISPONIBLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TURNO_SELECTED", function() { return SET_TURNO_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PROFESIONAL_SELECTED", function() { return SET_PROFESIONAL_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FECHA_SELECTED", function() { return SET_FECHA_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HORARIOS_DISPONIBLES", function() { return GET_HORARIOS_DISPONIBLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_HORARIOS_DISPONIBLES", function() { return SET_HORARIOS_DISPONIBLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfesionalesDisponibles", function() { return setProfesionalesDisponibles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiasDisponibles", function() { return getDiasDisponibles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDiasDisponibles", function() { return setDiasDisponibles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTurnoSelected", function() { return setTurnoSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfesionalSelected", function() { return setProfesionalSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFechaSelected", function() { return setFechaSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHorariosDisponibles", function() { return getHorariosDisponibles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHorariosDisponibles", function() { return setHorariosDisponibles; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var SET_PROFESIONALES_DISPONIBLES = '[API] - setProfesionalesDisponibles';
var GET_DIAS_DISPONIBLES = '[Calendar] - getDiasDisponibles';
var SET_DIAS_DISPONIBLES = '[API] - setDiasDisponibles';
var SET_TURNO_SELECTED = '[Calendar] - setTurnoSelected';
var SET_PROFESIONAL_SELECTED = '[Calendar] - setProfesionalSelected';
var SET_FECHA_SELECTED = '[Calendar] - setFechaSelected';
var GET_HORARIOS_DISPONIBLES = '[Calendar] - getHorariosDisponibles';
var SET_HORARIOS_DISPONIBLES = '[API] - setHorariosDisponibles';
var setProfesionalesDisponibles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_PROFESIONALES_DISPONIBLES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var getDiasDisponibles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_DIAS_DISPONIBLES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setDiasDisponibles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_DIAS_DISPONIBLES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setTurnoSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_TURNO_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setProfesionalSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_PROFESIONAL_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setFechaSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_FECHA_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var getHorariosDisponibles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_HORARIOS_DISPONIBLES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setHorariosDisponibles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_HORARIOS_DISPONIBLES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/core/store/actions/error.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/store/actions/error.actions.ts ***!
  \*****************************************************/
/*! exports provided: SHOW_ERROR, CLEAN_ERROR, showError, cleanError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ERROR", function() { return SHOW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_ERROR", function() { return CLEAN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanError", function() { return cleanError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var SHOW_ERROR = '[ERROR] - Show Error';
var CLEAN_ERROR = '[ERROR] - Clean Error';
var showError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SHOW_ERROR, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var cleanError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CLEAN_ERROR, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/core/store/actions/form.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/core/store/actions/form.actions.ts ***!
  \****************************************************/
/*! exports provided: GET_OBRA_SOCIALES, GET_ESPECIALIDADES, GET_CENTROS_DE_ATENCION, SET_OBRA_SOCIALES, SET_ESPECIALIDADES, SET_CENTROS_DE_ATENCION, SET_FECHA_NACIMIENTO, SET_OBRA_SOCIAL_SELECTED, SET_PLAN_SELECTED, SET_ESPECIALIDAD_SELECTED, SET_CENTRO_DE_ATENCION_SELECTED, GET_BUSQUEDA_PROFESIONALES, getObraSociales, getEspecialidades, getCentrosDeAtencion, setObraSociales, setEspecialidades, setCentrosDeAtencion, setFechaNacimiento, setObraSocialSelected, setPlanSelected, setEspecialidadSelected, setCentroDeAtencionSelected, getBusquedaProfesionales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_OBRA_SOCIALES", function() { return GET_OBRA_SOCIALES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ESPECIALIDADES", function() { return GET_ESPECIALIDADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CENTROS_DE_ATENCION", function() { return GET_CENTROS_DE_ATENCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OBRA_SOCIALES", function() { return SET_OBRA_SOCIALES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ESPECIALIDADES", function() { return SET_ESPECIALIDADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CENTROS_DE_ATENCION", function() { return SET_CENTROS_DE_ATENCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FECHA_NACIMIENTO", function() { return SET_FECHA_NACIMIENTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OBRA_SOCIAL_SELECTED", function() { return SET_OBRA_SOCIAL_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PLAN_SELECTED", function() { return SET_PLAN_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ESPECIALIDAD_SELECTED", function() { return SET_ESPECIALIDAD_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CENTRO_DE_ATENCION_SELECTED", function() { return SET_CENTRO_DE_ATENCION_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BUSQUEDA_PROFESIONALES", function() { return GET_BUSQUEDA_PROFESIONALES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObraSociales", function() { return getObraSociales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEspecialidades", function() { return getEspecialidades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentrosDeAtencion", function() { return getCentrosDeAtencion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setObraSociales", function() { return setObraSociales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEspecialidades", function() { return setEspecialidades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCentrosDeAtencion", function() { return setCentrosDeAtencion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFechaNacimiento", function() { return setFechaNacimiento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setObraSocialSelected", function() { return setObraSocialSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlanSelected", function() { return setPlanSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEspecialidadSelected", function() { return setEspecialidadSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCentroDeAtencionSelected", function() { return setCentroDeAtencionSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBusquedaProfesionales", function() { return getBusquedaProfesionales; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var GET_OBRA_SOCIALES = '[Form] - getObraSociales';
var GET_ESPECIALIDADES = '[Form] - getEspecialidades';
var GET_CENTROS_DE_ATENCION = '[Form] - getCentrosDeAtencion';
var SET_OBRA_SOCIALES = '[API] - setObraSociales ';
var SET_ESPECIALIDADES = '[API] - setEspecialidades';
var SET_CENTROS_DE_ATENCION = '[API] - setCentrosDeAtencion';
var SET_FECHA_NACIMIENTO = '[Form] - setFechaNacimiento ';
var SET_OBRA_SOCIAL_SELECTED = '[Form] - setObraSocialSelected ';
var SET_PLAN_SELECTED = '[Form] - setPlanSelected ';
var SET_ESPECIALIDAD_SELECTED = '[Form] - setEspecialidadSelected ';
var SET_CENTRO_DE_ATENCION_SELECTED = '[Form] - setCentroDeAtencionSelected ';
var GET_BUSQUEDA_PROFESIONALES = '[Form] - getBusquedaProfesionales ';
var getObraSociales = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_OBRA_SOCIALES);
var getEspecialidades = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_ESPECIALIDADES);
var getCentrosDeAtencion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_CENTROS_DE_ATENCION);
var setObraSociales = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_OBRA_SOCIALES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setEspecialidades = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_ESPECIALIDADES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setCentrosDeAtencion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_CENTROS_DE_ATENCION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setFechaNacimiento = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_FECHA_NACIMIENTO, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setObraSocialSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_OBRA_SOCIAL_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setPlanSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_PLAN_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setEspecialidadSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_ESPECIALIDAD_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setCentroDeAtencionSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_CENTRO_DE_ATENCION_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var getBusquedaProfesionales = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_BUSQUEDA_PROFESIONALES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/core/store/effects/calendar.effects.ts":
/*!********************************************************!*\
  !*** ./src/app/core/store/effects/calendar.effects.ts ***!
  \********************************************************/
/*! exports provided: CalendarEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEffects", function() { return CalendarEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/service.service */ "./src/app/core/services/service.service.ts");
/* harmony import */ var _actions_calendar_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/calendar.actions */ "./src/app/core/store/actions/calendar.actions.ts");
/* harmony import */ var _actions_error_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/error.actions */ "./src/app/core/store/actions/error.actions.ts");








var CalendarEffects = /** @class */ (function () {
    function CalendarEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.getDiasDisponibles$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_6__["GET_DIAS_DISPONIBLES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return _this.service.busquedaDiasDisponibles(payload.filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (diasDisponibles) {
                return ({ type: _actions_calendar_actions__WEBPACK_IMPORTED_MODULE_6__["SET_DIAS_DISPONIBLES"], diasDisponibles: diasDisponibles });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_7__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getHorariosDisponibles$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_6__["GET_HORARIOS_DISPONIBLES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return _this.service.busquedaHorarios(payload.filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (horarios) {
                return ({ type: _actions_calendar_actions__WEBPACK_IMPORTED_MODULE_6__["SET_HORARIOS_DISPONIBLES"], horarios: horarios });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_7__["SHOW_ERROR"], error: error.message });
            })); }));
        });
    }
    CalendarEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]])
    ], CalendarEffects);
    return CalendarEffects;
}());



/***/ }),

/***/ "./src/app/core/store/effects/error.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/store/effects/error.effects.ts ***!
  \*****************************************************/
/*! exports provided: ErrorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorEffects", function() { return ErrorEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/error.actions */ "./src/app/core/store/actions/error.actions.ts");






var ErrorEffects = /** @class */ (function () {
    function ErrorEffects(actions$) {
        var _this = this;
        this.actions$ = actions$;
        this.showError$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(100).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return ({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["CLEAN_ERROR"], error: payload.error }); })); }));
        });
    }
    ErrorEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], ErrorEffects);
    return ErrorEffects;
}());



/***/ }),

/***/ "./src/app/core/store/effects/form.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/core/store/effects/form.effects.ts ***!
  \****************************************************/
/*! exports provided: FormEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEffects", function() { return FormEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_calendar_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/calendar.actions */ "./src/app/core/store/actions/calendar.actions.ts");
/* harmony import */ var _actions_error_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/error.actions */ "./src/app/core/store/actions/error.actions.ts");
/* harmony import */ var _actions_form_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/form.actions */ "./src/app/core/store/actions/form.actions.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/service.service */ "./src/app/core/services/service.service.ts");









var FormEffects = /** @class */ (function () {
    function FormEffects(actions$, formService) {
        var _this = this;
        this.actions$ = actions$;
        this.formService = formService;
        this.getObraSociales$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_7__["GET_OBRA_SOCIALES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return _this.formService.getObraSociales().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (obrasSociales) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_7__["SET_OBRA_SOCIALES"], obrasSociales: obrasSociales }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_6__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getEspecialidades$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_7__["GET_ESPECIALIDADES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return _this.formService.getEspecialidades().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (especialidades) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_7__["SET_ESPECIALIDADES"], especialidades: especialidades }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_6__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getCentrosDeAtencion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_7__["GET_CENTROS_DE_ATENCION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return _this.formService.getCentrosDeAtencion().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (centrosDeAtencion) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_7__["SET_CENTROS_DE_ATENCION"], centrosDeAtencion: centrosDeAtencion }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_6__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getBusquedaProfesionales$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_7__["GET_BUSQUEDA_PROFESIONALES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.formService.busquedaProfesionales(payload.filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (profesionalesDisponibles) {
                return ({ type: _actions_calendar_actions__WEBPACK_IMPORTED_MODULE_5__["SET_PROFESIONALES_DISPONIBLES"], profesionalesDisponibles: profesionalesDisponibles });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_6__["SHOW_ERROR"], error: error.message });
            })); }));
        });
    }
    FormEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_8__["ServiceService"]])
    ], FormEffects);
    return FormEffects;
}());



/***/ }),

/***/ "./src/app/core/store/reducers/calendar.reducers.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/store/reducers/calendar.reducers.ts ***!
  \**********************************************************/
/*! exports provided: calendarReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarReducer", function() { return calendarReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_calendar_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/calendar.actions */ "./src/app/core/store/actions/calendar.actions.ts");
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/date.utils */ "./src/app/core/utils/date.utils.ts");




var initialState = {
    profesionalesDisponibles: [],
    profesionalSelected: undefined,
    turnoSelected: undefined,
    diasDisponibles: [],
    fechaSelected: undefined,
    horariosDisponibles: [],
};
var _setProfesionalesDisponibles = function (state, profesionalesDisponibles) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.profesionalesDisponibles = profesionalesDisponibles.slice();
    return stateNew;
};
var _setDiasDisponibles = function (state, diasDisponibles) {
    if (!diasDisponibles) {
        return state;
    }
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.diasDisponibles = diasDisponibles.map(function (x) {
        return {
            fecha: _utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["DateUtils"].getDate(x.fecha),
            conDisponibilidad: x.conDisponibilidad
        };
    }).slice();
    return stateNew;
};
var _setTurnoSelected = function (state, turnoSelected) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.turnoSelected = turnoSelected;
    return stateNew;
};
var _setProfesionalSelected = function (state, profesional) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.profesionalSelected = profesional;
    return stateNew;
};
var _setFechaSelected = function (state, fecha) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.fechaSelected = fecha;
    return stateNew;
};
var _setHorariosDisponibles = function (state, horarios) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.horariosDisponibles = horarios;
    return stateNew;
};
var _calendarReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_2__["setProfesionalesDisponibles"], function (state, _a) {
    var profesionalesDisponibles = _a.profesionalesDisponibles;
    return _setProfesionalesDisponibles(state, profesionalesDisponibles);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_2__["setDiasDisponibles"], function (state, _a) {
    var diasDisponibles = _a.diasDisponibles;
    return _setDiasDisponibles(state, diasDisponibles);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_2__["setTurnoSelected"], function (state, _a) {
    var turnoSelected = _a.turnoSelected;
    return _setTurnoSelected(state, turnoSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_2__["setProfesionalSelected"], function (state, _a) {
    var profesional = _a.profesional;
    return _setProfesionalSelected(state, profesional);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_2__["setFechaSelected"], function (state, _a) {
    var fecha = _a.fecha;
    return _setFechaSelected(state, fecha);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_2__["setHorariosDisponibles"], function (state, _a) {
    var horarios = _a.horarios;
    return _setHorariosDisponibles(state, horarios);
}));
function calendarReducer(state, action) {
    return _calendarReducer(state, action);
}


/***/ }),

/***/ "./src/app/core/store/reducers/error.reducers.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/store/reducers/error.reducers.ts ***!
  \*******************************************************/
/*! exports provided: Errors, errorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorReducer", function() { return errorReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_error_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/error.actions */ "./src/app/core/store/actions/error.actions.ts");
/* harmony import */ var _utils_error_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/error.utils */ "./src/app/core/utils/error.utils.ts");




var Errors = /** @class */ (function () {
    function Errors() {
    }
    return Errors;
}());

var initialState = {
    errors: []
};
var _showError = function (state, error) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.errors = state.errors.concat([_utils_error_utils__WEBPACK_IMPORTED_MODULE_3__["ErrorUtils"].getFormatedError(error)]);
    return stateNew;
};
var _cleanError = function (state, error) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.errors = state.errors.filter(function (x) { return x !== _utils_error_utils__WEBPACK_IMPORTED_MODULE_3__["ErrorUtils"].getFormatedError(error); });
    return stateNew;
};
var _errorReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_error_actions__WEBPACK_IMPORTED_MODULE_2__["showError"], function (state, _a) {
    var error = _a.error;
    return _showError(state, error);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_error_actions__WEBPACK_IMPORTED_MODULE_2__["cleanError"], function (state, _a) {
    var error = _a.error;
    return _cleanError(state, error);
}));
function errorReducer(state, action) {
    return _errorReducer(state, action);
}


/***/ }),

/***/ "./src/app/core/store/reducers/form.reducers.ts":
/*!******************************************************!*\
  !*** ./src/app/core/store/reducers/form.reducers.ts ***!
  \******************************************************/
/*! exports provided: initialState, formReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formReducer", function() { return formReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_form_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/form.actions */ "./src/app/core/store/actions/form.actions.ts");



var initialState = {
    obrasSociales: [],
    especialidades: [],
    centrosDeAtencion: [],
    fechaNacimiento: undefined,
    obraSocialSelected: undefined,
    planSelected: undefined,
    especialidadSelected: undefined,
    centroDeAtencionSelected: undefined,
};
var _setObraSociales = function (state, obraSociales) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.obrasSociales = obraSociales;
    return stateNew;
};
var _setObraSocialSelected = function (state, obraSocialSelected) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.obraSocialSelected = obraSocialSelected;
    stateNew.planSelected = undefined;
    return stateNew;
};
var _setPlanSelected = function (state, planSelected) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.planSelected = planSelected;
    return stateNew;
};
var _setFechaNacimiento = function (state, fechaNacimiento) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.fechaNacimiento = fechaNacimiento;
    return stateNew;
};
var _setEspecialidades = function (state, especialidades) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.especialidades = especialidades;
    return stateNew;
};
var _setCentrosDeAtencion = function (state, centrosDeAtencion) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.centrosDeAtencion = centrosDeAtencion;
    return stateNew;
};
var _setEspecialidadSelected = function (state, especialidadSelected) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.especialidadSelected = especialidadSelected;
    return stateNew;
};
var _setCentroDeAtencionSelected = function (state, centroDeAtencionSelected) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.centroDeAtencionSelected = centroDeAtencionSelected;
    return stateNew;
};
var _formReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setObraSociales"], function (state, _a) {
    var obrasSociales = _a.obrasSociales;
    return _setObraSociales(state, obrasSociales);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setEspecialidades"], function (state, _a) {
    var especialidades = _a.especialidades;
    return _setEspecialidades(state, especialidades);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setCentrosDeAtencion"], function (state, _a) {
    var centrosDeAtencion = _a.centrosDeAtencion;
    return _setCentrosDeAtencion(state, centrosDeAtencion);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setFechaNacimiento"], function (state, _a) {
    var fechaNacimiento = _a.fechaNacimiento;
    return _setFechaNacimiento(state, fechaNacimiento);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setObraSocialSelected"], function (state, _a) {
    var obraSocialSelected = _a.obraSocialSelected;
    return _setObraSocialSelected(state, obraSocialSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setPlanSelected"], function (state, _a) {
    var planSelected = _a.planSelected;
    return _setPlanSelected(state, planSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setEspecialidadSelected"], function (state, _a) {
    var especialidadSelected = _a.especialidadSelected;
    return _setEspecialidadSelected(state, especialidadSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setCentroDeAtencionSelected"], function (state, _a) {
    var centroDeAtencionSelected = _a.centroDeAtencionSelected;
    return _setCentroDeAtencionSelected(state, centroDeAtencionSelected);
}));
function formReducer(state, action) {
    return _formReducer(state, action);
}


/***/ }),

/***/ "./src/app/core/store/selectors/error.selectors.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/store/selectors/error.selectors.ts ***!
  \*********************************************************/
/*! exports provided: selectError, selectErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectErrorMessages", function() { return selectErrorMessages; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('error');
var selectErrorMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectError, function (error) { return error.errors[error.errors.length - 1]; });


/***/ }),

/***/ "./src/app/core/utils/date.utils.ts":
/*!******************************************!*\
  !*** ./src/app/core/utils/date.utils.ts ***!
  \******************************************/
/*! exports provided: DateUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtils", function() { return DateUtils; });
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.getDate = function (string) {
        var date = string.split('/').map(function (x) { return Number(x); });
        return new Date(date[1] + "-" + date[0] + "-" + date[2]);
    };
    DateUtils.getFormatDate = function (date) {
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    };
    DateUtils.getDaysArray = function (from, howManyDays) {
        var a = [];
        for (var i = 0; i < howManyDays; i++) {
            var d = new Date();
            d.setDate(from.getDate() + i);
            a.push(d);
        }
        return a;
    };
    return DateUtils;
}());



/***/ }),

/***/ "./src/app/core/utils/error.utils.ts":
/*!*******************************************!*\
  !*** ./src/app/core/utils/error.utils.ts ***!
  \*******************************************/
/*! exports provided: ErrorUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorUtils", function() { return ErrorUtils; });
var ErrorUtils = /** @class */ (function () {
    function ErrorUtils() {
    }
    ErrorUtils.listGenericErrors = [
        'Http failure response for (unknown url): 0 Unknown Error',
    ];
    ErrorUtils.getFormatedError = function (error) {
        var result = error;
        if (ErrorUtils.listGenericErrors.indexOf(error) !== -1) {
            result = 'Ha ocurrido un error, reintente nuevamente más tarde.';
        }
        return result;
    };
    return ErrorUtils;
}());



/***/ }),

/***/ "./src/app/core/utils/service.utils.ts":
/*!*********************************************!*\
  !*** ./src/app/core/utils/service.utils.ts ***!
  \*********************************************/
/*! exports provided: getWsFromMock, throwErrorIfBadCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWsFromMock", function() { return getWsFromMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwErrorIfBadCode", function() { return throwErrorIfBadCode; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_DELAY = 1000;
function getWsFromMock(mockup, delayMs) {
    delayMs = delayMs ? delayMs : DEFAULT_DELAY;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(mockup).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(delayMs));
}
function throwErrorIfBadCode(res) {
    if (res.respuesta.codigo !== 200) {
        throw new Error(res.respuesta.codigo + " - " + res.respuesta.mensaje);
    }
}


/***/ }),

/***/ "./src/app/shared/components/errors/error-control/error-control.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/errors/error-control/error-control.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/errors/error-control/error-control.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/errors/error-control/error-control.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ErrorControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorControlComponent", function() { return ErrorControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_store_selectors_error_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/store/selectors/error.selectors */ "./src/app/core/store/selectors/error.selectors.ts");





var ErrorControlComponent = /** @class */ (function () {
    function ErrorControlComponent(snackBar, store) {
        this.snackBar = snackBar;
        this.store = store;
    }
    ErrorControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_core_store_selectors_error_selectors__WEBPACK_IMPORTED_MODULE_4__["selectErrorMessages"]).subscribe(function (x) { return _this.openDialog(x); });
    };
    ErrorControlComponent.prototype.openDialog = function (msg) {
        if (msg) {
            this.snackBar.open(msg, 'x', {
                duration: 3000,
            });
        }
    };
    ErrorControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-control',
            template: __webpack_require__(/*! ./error-control.component.html */ "./src/app/shared/components/errors/error-control/error-control.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ErrorControlComponent);
    return ErrorControlComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_errors_error_control_error_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/errors/error-control/error-control.component */ "./src/app/shared/components/errors/error-control/error-control.component.ts");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_errors_error_control_error_control_component__WEBPACK_IMPORTED_MODULE_5__["ErrorControlComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
            ],
            exports: [
                _components_errors_error_control_error_control_component__WEBPACK_IMPORTED_MODULE_5__["ErrorControlComponent"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            ],
            entryComponents: []
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    endpoint: 'http://localhost:8080',
    mockups: true
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alejandro/Proyectos/personal/turnero-hospital-espaniol/turnero-hospital-espaniol/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map