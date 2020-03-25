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

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<!-- <app-footer></app-footer> -->"

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
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core_store_effects_form_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../app/core/store/effects/form.effects */ "./src/app/core/store/effects/form.effects.ts");
/* harmony import */ var _core_store_reducers_form_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/store/reducers/form.reducers */ "./src/app/core/store/reducers/form.reducers.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_store_reducers_calendar_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/store/reducers/calendar.reducers */ "./src/app/core/store/reducers/calendar.reducers.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({
                    // router: routerReducer,
                    formulario: _core_store_reducers_form_reducers__WEBPACK_IMPORTED_MODULE_9__["formReducer"],
                    calendario: _core_store_reducers_calendar_reducers__WEBPACK_IMPORTED_MODULE_15__["calendarReducer"],
                }),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["StoreRouterConnectingModule"].forRoot(),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([
                    _app_core_store_effects_form_effects__WEBPACK_IMPORTED_MODULE_8__["FormEffects"]
                ]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            ],
            exports: [
                _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
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
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]
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

module.exports = "<div class=\"header\">\n  <a href=\"home\">\n    <img src=\"../../../assets/img/LogoHE200.png\" alt=\"logo\">\n  </a>\n</div>\n"

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
/*! exports provided: planMock1, planMock2, planMock3, planMock4, obraSocialMock1, obraSocialMock2, obrasSocialesMocks, especialidadesMocks, centroAtencionMock, centroAtencionesMocks, profesionalesMocks */
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
var disponibilidad = {
    profesional: profesional1,
    especialidad: especialidadesMocks[0],
    turnoManiana: {
        codigo: '148',
        centroAtencion: centroAtencionMock,
        fecha: new Date("2020/03/28"),
        hora: '10:00',
        observaciones: ''
    },
    turnoTarde: {
        codigo: '348',
        centroAtencion: centroAtencionMock,
        fecha: new Date("2020/03/30"),
        hora: '20:15',
        observaciones: ''
    }
};
var profesionalesMocks = [
    disponibilidad, disponibilidad
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mocks_mocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mocks/mocks */ "./src/app/core/mocks/mocks.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utils_observable_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../utils/observable.utils */ "./src/app/core/utils/observable.utils.ts");







var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.useMockups = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockups;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoint;
        this.endpoint_obraSocial = this.endpoint + '/getObraSocial';
        this.endpoint_especialidad = this.endpoint + '/getEspecialidad';
        this.endpoint_centroAtencion = this.endpoint + '/getCentroAtencion';
        this.endpoint_busquedaProfesionales = this.endpoint + '/busquedaProfesionales';
    }
    ServiceService.prototype.getObraSociales = function () {
        if (this.useMockups) {
            console.log('Run mock for: getObraSociales()');
            return Object(_utils_observable_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__["obrasSocialesMocks"]);
        }
        else {
            console.log('Run to server ' + this.endpoint_obraSocial);
            var respuesta = this.http.get(this.endpoint_obraSocial).toPromise().then(function (obRespuesta) {
                if (obRespuesta.respuesta.codigo === 200) {
                    return obRespuesta.obraSocial;
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(respuesta);
        }
    };
    ServiceService.prototype.getEspecialidades = function () {
        if (this.useMockups) {
            console.log('Run mock for: getEspecialidades()');
            return Object(_utils_observable_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__["especialidadesMocks"]);
        }
        else {
            console.log('Run to server ' + this.endpoint_especialidad);
            var respuesta = this.http.get(this.endpoint_especialidad).toPromise().then(function (obRespuesta) {
                if (obRespuesta.respuesta.codigo === 200) {
                    return obRespuesta.especialidad;
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(respuesta);
        }
    };
    ServiceService.prototype.getCentrosDeAtencion = function () {
        if (this.useMockups) {
            console.log('Run mock for: getCentrosDeAtencion()');
            return Object(_utils_observable_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__["centroAtencionesMocks"]);
        }
        else {
            console.log('Run to server ' + this.endpoint_centroAtencion);
            var respuesta = this.http.get(this.endpoint_centroAtencion).toPromise().then(function (obRespuesta) {
                if (obRespuesta.respuesta.codigo === 200) {
                    return obRespuesta.centroAtencion;
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(respuesta);
        }
    };
    ServiceService.prototype.busquedaProfesionales = function (filter) {
        if (this.useMockups) {
            console.log('Run mock for: busquedaProfesionales() - filter: '
                + JSON.stringify(filter));
            return Object(_utils_observable_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__["profesionalesMocks"]);
        }
        else {
            console.log('Run to server ' + this.endpoint_busquedaProfesionales);
            var respuesta = this.http.post(this.endpoint_busquedaProfesionales, filter).toPromise().then(function (obRespuesta) {
                if (obRespuesta.respuesta.codigo === 200) {
                    return obRespuesta.disponibilidad;
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(respuesta);
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
/*! exports provided: SET_PROFESIONALES_DISPONIBLES, setProfesionalesDisponibles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PROFESIONALES_DISPONIBLES", function() { return SET_PROFESIONALES_DISPONIBLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfesionalesDisponibles", function() { return setProfesionalesDisponibles; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var SET_PROFESIONALES_DISPONIBLES = '[Form API] - setProfesionalesDisponibles';
var setProfesionalesDisponibles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_PROFESIONALES_DISPONIBLES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
var SET_OBRA_SOCIALES = '[Form API] - setObraSociales ';
var SET_ESPECIALIDADES = '[Form API] - setEspecialidades';
var SET_CENTROS_DE_ATENCION = '[Form API] - setCentrosDeAtencion';
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
/* harmony import */ var _actions_form_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/form.actions */ "./src/app/core/store/actions/form.actions.ts");
/* harmony import */ var _actions_calendar_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/calendar.actions */ "./src/app/core/store/actions/calendar.actions.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/service.service */ "./src/app/core/services/service.service.ts");








var FormEffects = /** @class */ (function () {
    function FormEffects(actions$, formService) {
        var _this = this;
        this.actions$ = actions$;
        this.formService = formService;
        this.getObraSociales$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_5__["GET_OBRA_SOCIALES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return _this.formService.getObraSociales().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (obrasSociales) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_5__["SET_OBRA_SOCIALES"], obrasSociales: obrasSociales }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; })); }));
        });
        this.getEspecialidades$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_5__["GET_ESPECIALIDADES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return _this.formService.getEspecialidades().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (especialidades) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_5__["SET_ESPECIALIDADES"], especialidades: especialidades }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; })); }));
        });
        this.getCentrosDeAtencion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_5__["GET_CENTROS_DE_ATENCION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return _this.formService.getCentrosDeAtencion().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (centrosDeAtencion) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_5__["SET_CENTROS_DE_ATENCION"], centrosDeAtencion: centrosDeAtencion }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; })); }));
        });
        this.getBusquedaProfesionales$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_5__["GET_BUSQUEDA_PROFESIONALES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.formService.busquedaProfesionales(payload.filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (profesionalesDisponibles) {
                return ({ type: _actions_calendar_actions__WEBPACK_IMPORTED_MODULE_6__["SET_PROFESIONALES_DISPONIBLES"], profesionalesDisponibles: profesionalesDisponibles });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; })); }));
        });
    }
    FormEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"]])
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



var initialState = {
    profesionalesDisponibles: []
};
var _setProfesionalesDisponibles = function (state, profesionalesDisponibles) {
    var stateNew = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    stateNew.profesionalesDisponibles = profesionalesDisponibles.slice();
    return stateNew;
};
var _calendarReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_2__["setProfesionalesDisponibles"], function (state, _a) {
    var profesionalesDisponibles = _a.profesionalesDisponibles;
    return _setProfesionalesDisponibles(state, profesionalesDisponibles);
}));
function calendarReducer(state, action) {
    return _calendarReducer(state, action);
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

/***/ "./src/app/core/utils/observable.utils.ts":
/*!************************************************!*\
  !*** ./src/app/core/utils/observable.utils.ts ***!
  \************************************************/
/*! exports provided: getWsFromMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWsFromMock", function() { return getWsFromMock; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_DELAY = 1000;
function getWsFromMock(mockup, delayMs) {
    delayMs = delayMs ? delayMs : DEFAULT_DELAY;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(mockup).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(delayMs));
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
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