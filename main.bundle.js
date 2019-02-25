webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/achievements/achievements.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/achievements/achievements.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  achievements page still under work\n</p>\n"

/***/ }),

/***/ "./src/app/achievements/achievements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementsComponent = /** @class */ (function () {
    function AchievementsComponent() {
    }
    AchievementsComponent.prototype.ngOnInit = function () {
    };
    AchievementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-achievements',
            template: __webpack_require__("./src/app/achievements/achievements.component.html"),
            styles: [__webpack_require__("./src/app/achievements/achievements.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AchievementsComponent);
    return AchievementsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_skills_skills_component__ = __webpack_require__("./src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_achievements_achievements_component__ = __webpack_require__("./src/app/achievements/achievements.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Import pages to navigate to




// Specify paths here
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__app_homepage_homepage_component__["a" /* HomepageComponent */], pathMatch: 'full' },
    { path: 'Skills', component: __WEBPACK_IMPORTED_MODULE_3__app_skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'Projects', component: __WEBPACK_IMPORTED_MODULE_4__app_projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'Achievements', component: __WEBPACK_IMPORTED_MODULE_5__app_achievements_achievements_component__["a" /* AchievementsComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-homebar></app-homebar>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
        // Home page for app
        ,
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homebar_homebar_component__ = __webpack_require__("./src/app/homebar/homebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__skills_skills_component__ = __webpack_require__("./src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__achievements_achievements_component__ = __webpack_require__("./src/app/achievements/achievements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Base modules



// For flex-layout

// Angular Material



// For page navigation


// Pages for website




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__homebar_homebar_component__["a" /* HomebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__achievements_achievements_component__["a" /* AchievementsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__homepage_homepage_component__["a" /* HomepageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* AppMaterialModules */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/homebar/homebar.component.css":
/***/ (function(module, exports) {

module.exports = "/* Overall toolbar */\n.homebar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/* For mobile settings */\n.is-mobile .homebar-toolbar {\n  position: fixed;\n  /* To make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n/* Toolbar label */\nh1{\n  margin-left: 8px;\n  cursor: pointer;\n  font-size: 150%;\n}\n.sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.is-mobile .sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n/* Sidenav content */\nmat-nav-list mat-list-item{\n  text-align: center;\n}\n\n"

/***/ }),

/***/ "./src/app/homebar/homebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Mobile/Tablet -->\n<div class=\"homebar\" [class.is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" class=\"homebar-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\">\n      <mat-icon style=\"font-size: 32px !important\">more_vert</mat-icon>\n    </button>\n    <h1 routerLink= \"\">An Huynh</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav (click)=\"snav.toggle()\" [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item routerLink = \"/Skills\"> <b>Skills</b> </a>\n        <a mat-list-item routerLink = \"/Projects\"> <b>Projects</b> </a>\n        <a mat-list-item routerLink = \"/Achievements\"> <b>Achievements</b> </a>\n        <!-- Add information about Meetups I'm in, Hobbies, Interests, Hackathons I've been to ...-->\n        <a mat-list-item routerLink = \"\"> <b>Hobbies</b> </a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <router-outlet></router-outlet>\n  </mat-sidenav-container>\n</div>\n\n"

/***/ }),

/***/ "./src/app/homebar/homebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomebarComponent = /** @class */ (function () {
    function HomebarComponent(changeDetectorRef, media) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    HomebarComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    HomebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homebar',
            template: __webpack_require__("./src/app/homebar/homebar.component.html"),
            styles: [__webpack_require__("./src/app/homebar/homebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], HomebarComponent);
    return HomebarComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "/* Top of page - Header/Hero's Image */\n.header-section {\n  background: url('bannerImage.0fabb9e2d94271dbaf27.jpg') 90%;\n  background-repeat: no-repeat;\n  margin: 0;\n  background-size: cover;\n  height: 80vh;\n  text-align: center;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n  -ms-flex-pack: center;\n      -webkit-box-pack: center;\n          justify-content: center;\n}\n.header-section .header-section-text {\n  color: #fefefe;\n  text-shadow: 1px 1px 2px #0a0a0a;\n}\n.header-section-text h1 {\n  font-size: 60px;\n  margin: 0;\n}\n.header-section-text h1 span {\n  border: 5px solid white;\n  padding: 6px 14px;\n  display: inline-block;\n}\n.header-description {\n  margin: 20px;\n  display: block;\n  font-size: 30px;\n  text-shadow: 0 0 10px black;\n}\n.btn{\n  color: white;\n  padding: 10px 24px;\n  font-size: 20px;\n  text-decoration: none;\n  background: #aaa1a1;\n  border-radius: 10px;\n  -webkit-transition: 0.3s all;\n  transition: 0.3s all;\n}\n.btn:hover{\n  background: #80b1b3;\n}\n/* About me AND Contact me*/\n.about-me, .contact-section {\n  width: 100%; /* width of parent element*/\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n.about-me:after, .contact-section :after { /* Fixing issue with col-left and col-right not being \"contained\" inside main class */\n  content: '';\n  display:block;\n  clear: both;\n}\n.about-me h2, .contact-section h2 {\n  color: #333;\n  text-align: center;\n  text-transform: uppercase;\n  padding-bottom: 10px;\n  position: relative;\n}\n/* Creating the \"section\" line */\n.about-me h2:after, .contact-section h2:after {\n  content: '';\n  position: absolute;\n  width: 80px;\n  height: 2px;\n  margin-left: -40px;\n  left: 50%;\n  bottom: 0px;\n  background-color: #666666;\n}\n/* About me */\n.about-me .col-left, .about-me .col-right {\n  padding-top: 20px;\n  width: 50%; /* splitting page in half */\n  float: left;\n}\n.about-me .col-left {\n  content: url('PersonalPic.23395d693e4c2b619453.jpg');\n  padding-left: 5%;\n  padding-right: 5%;\n  max-width: 100%; /* Allows image to automatically resize with browser */\n}\n.about-me .col-right p {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  overflow: auto;\n  font-size: 20px;\n}\n/* Specify what page does when screen gets smaller with media query */\n@media screen and (max-width:550px) {\n  .about-me .col-left, .about-me .col-right {\n    width:100%; /* The width is 100%, when the viewport is 550px or smaller */\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n/* Contact me */\n.contact-section {\n  text-align: center;\n  padding-bottom: 40px;\n}\n.social-container {\n  padding-top: 20px;\n  width: 80%;\n  margin: 0 auto;\n  text-align: left;\n}\n.social-container i {\n  float: left;\n  margin-top: 17px;\n  margin-right: 20px;\n  font-size: 24px;\n  color: indigo;\n}\n.col-1, .col-2, .col-3 {\n  width: 33.3333333%;\n  display: inline-block;\n  float: left;\n}\n.col-1 p, .col-2 p, .col-3 p {\n  display: inline-block;\n  position: relative;\n}\n.col-3 p{\n  margin-bottom: 0;\n  margin-top: 7px;\n}\n.line2 {\n  padding-top: 10px;\n}\n.text-bold{\n  color: #333;\n  font-weight: bold;\n  margin-bottom: 0;\n}\n/* Specify what page does when screen gets smaller with media query */\n@media screen and (max-width:715px) {\n  .social-container .col-1, .social-container .col-2, .social-container .col-3 {\n    width:100%; /* The width is 100%, when the viewport is 715px or smaller */\n    margin-left: 20%;\n    padding: 5px;\n  }\n}\n/* Footer */\nfooter{\n  background-color: #d8d4db;\n  width: 100%;\n  padding: 10px 0px;\n}\nfooter:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.footer-text{\n  text-align: center;\n}\n.footer-text p{\n  margin-top: 5;\n  margin-bottom: 0;\n}\n.brown-text{\n  color: brown;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<!-- Hero's Image -->\n<div class=\"header-section\">\n  <div class=\"header-section-text\">\n    <h1><span>Prospective Software Engineer</span></h1>\n    <span class = \"header-description\">BA in Computer Science - Class of 2019</span>\n    <a class = \"btn\" href=\"https://huynhtan97.github.io/Portfolio/assets/AnHuynhResume2019.pdf\"><b>Resume</b></a>\n  </div>\n</div>\n\n<!-- About me -->\n<div class = \"about-me\">\n  <h2>About Me</h2>\n  <div class = \"col-left\">\n    <!-- Personal pic of me here -->\n  </div>\n  <div class = \"col-right\">\n    <p>Hi! Thank you for visiting my website!</p>\n    <p>I'm currently a Senior in Computer Science (with minors in Applied Math and Electrical Engineering) at Wentworth\n      Institute of Technology in Boston, MA. I'm originally from West Hartford, CT and decided to move to the city\n      in order to meet new people and seek opportunities in the city.</p>\n    <p>I got into the field back in my Junior Year of high school where I took my first computer programming class. From there, I have both\n      learned and gotten involved more within the field from attending hackathons, to self-teaching myself various languages like Javascript and PHP.</p>\n    <p><b>To view my skills, projects, achievements, and hobbies:</b> Please click on the 3 dotted menu button in the toolbar.</p>\n  </div>\n</div>\n\n<!-- Contact Me -->\n<div class = \"contact-section\">\n  <h2>Contact Me</h2>\n  <div class = \"social-container\">\n    <div class = \"col-1\">\n      <div class =\"line1\">\n        <i class = \"material-icons\">local_phone</i>\n        <p> <span class = \"text-bold\">Phone Number:</span> <br/>  <a href=\"tel: 1-860-794-1274\">1-860-794-1274</a></p>\n      </div>\n      <div class =\"line2\">\n        <i class = \"material-icons\">mail_outline</i>\n        <p> <span class = \"text-bold\">Email:</span> <br/> <a href=\"mailto:\">huynha1@wit.edu</a></p>\n      </div>\n    </div>\n    <div class = \"col-2\">\n      <div class =\"line1\">\n        <i class = \"material-icons\">account_circle</i>\n        <p> <span class = \"text-bold\">Linkedin:</span> <br/> <a href=\"https://www.linkedin.com/in/huynhan1/\">@huynha1</a></p>\n      </div>\n      <div class =\"line2\">\n        <i class = \"material-icons\">code</i>\n        <p> <span class = \"text-bold\">Github:</span> <br/> <a href=\"https://github.com/huynhtan97\">@huynhtan97</a></p>\n      </div>\n    </div>\n    <div class = \"col-3\">\n      <div class =\"line1\">\n        <i class = \"material-icons\">location_on</i>\n        <p> <span class = \"text-bold\">Current City:</span> <br/> <a href=\"https://goo.gl/maps/cUr6fd9R7ZS2\">Boston, MA</a></p>\n      </div>\n      <div class =\"line2\">\n        <i class = \"material-icons\">create</i>\n        <p> <span class = \"text-bold\">Medium:</span> <br/> <a href=\"https://medium.com/hackwitus/meet-an-2406e0d7540d\">An Huynh</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<footer>\n  <div class = \"footer-text\">\n    <p> Made with <a class=\"brown-text\" href=\"https://angular.io/guide/quickstart\">Angular 5+</a>\n      and hosted on <a class=\"brown-text\" href=\"https://github.com/huynhtan97/huynhtan97.github.io\">Github</a> </p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(changeDetectorRef, media) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    HomepageComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_overlay__ = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_platform__ = __webpack_require__("./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_observers__ = __webpack_require__("./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_portal__ = __webpack_require__("./node_modules/@angular/cdk/esm5/portal.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppMaterialModules = /** @class */ (function () {
    function AppMaterialModules() {
    }
    AppMaterialModules = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                // Material Modules
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_a11y__["a" /* A11yModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__["a" /* BidiModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_observers__["a" /* ObserversModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_overlay__["e" /* OverlayModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk_platform__["b" /* PlatformModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_cdk_portal__["g" /* PortalModule */],
            ],
            declarations: []
        })
    ], AppMaterialModules);
    return AppMaterialModules;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = ".header:after{\n  content: '';\n  display:block;\n  clear: both;\n}\n\n.header h2 {\n  color: #666666;\n  text-align: center;\n  text-transform: uppercase;\n  padding-bottom: 10px;\n  position: relative;\n}\n\n/* Creating the \"section\" line */\n\n.header h2:after{\n  content: '';\n  position: absolute;\n  width: 80px;\n  height: 2px;\n  margin-left: -40px;\n  left: 50%;\n  bottom: 0px;\n  background-color: #666666;\n}\n\n/* For the cards */\n\n.cards {\n  padding: 30px;\n  margin-bottom: 16px;\n}\n\nmat-card {\n  margin: 15px;\n}\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"header\">\n  <h2>Highlighted Projects</h2>\n</div>\n\n<!--\n<div class=\"cards\" fxLayout=\"row\" fxLayout.lt-md=\"column\"  fxLayoutGap=\"10px\" fxLayoutAlign=\"center\">\n  <div fxLayout.gt-md=\"row\" fxLayout.lt-sm=\"column\"  fxLayoutGap=\"10px\" fxFlex=\"100\"  fxFlex.gt-md=\"50\">\n    <div fxFlex.lt-lg=\"50\" fxFlex.lt-sm=\"100\" ><mat-card>1</mat-card></div>\n    <div fxFlex.lt-lg=\"50\" fxFlex.lt-sm=\"100\" ><mat-card>2</mat-card></div>\n  </div>\n  <div fxLayout.gt-md=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px\" fxFlex=\"100\"   fxFlex.gt-md=\"50\">\n    <div fxFlex.lt-lg=\"50\" fxFlex.lt-sm=\"100\" ><mat-card>3</mat-card></div>\n    <div fxFlex.lt-lg=\"50\" fxFlex.lt-sm=\"100\" ><mat-card>4</mat-card></div>\n  </div>\n</div>\n-->\n<!-- Keep cards in a row until width < 959px -->\n<div class=\"cards\" fxLayout=\"row\" fxLayout.lt-md=\"column\"  fxLayoutGap=\"10px\" fxLayoutAlign=\"center\">\n  <!--Move all cards to one column if width < 1279px -->\n  <div fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\" fxFlex=\"90\">\n    <!-- Keep cards in grid and not overlap eachother -->\n    <div fxFlex.lt-lg=\"50\" fxFlex.lt-sm=\"100\">\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title><h4>shefightsback</h4></mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src=\"https://huynhtan97.github.io/Portfolio/assets/images/sheFightsBack.png\" alt=\"shefightsback\" style=\"max-height: 300px\">\n        <mat-card-content>\n          <p>\n            Winner of Most Innovative and She Learns (Best Beginners) prize at SheHacks 2018. Mobile application aimed to allow victims of\n            domestic abuse to efficiently report incidents and reach out for help without risk of personal safety.\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <a mat-button href=\"https://github.com/huynhtan97/sheFightsBack\">View Github</a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div fxFlex.lt-lg=\"50\" fxFlex.lt-sm=\"100\">\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title><h4>shefightsback</h4></mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src=\"https://huynhtan97.github.io/Portfolio/assets/images/sheFightsBack.png\" alt=\"shefightsback\" style=\"max-height: 300px\">\n        <mat-card-content>\n          <p>\n            Winner of Most Innovative and She Learns (Best Beginners) prize at SheHacks 2018. Mobile application aimed to allow victims of\n            domestic abuse to efficiently report incidents and reach out for help without risk of personal safety.\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <a mat-button href=\"https://github.com/huynhtan97/sheFightsBack\">View Github</a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n\n  <div fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\" fxFlex=\"90\">\n    <div fxFlex.lt-lg=\"50\" fxFlex.lt-sm=\"100\">\n     <mat-card>\n        <mat-card-header>\n          <mat-card-title><h4>shefightsback</h4></mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src=\"https://huynhtan97.github.io/Portfolio/assets/images/sheFightsBack.png\" alt=\"shefightsback\" style=\"max-height: 300px\">\n        <mat-card-content>\n          <p>\n            Winner of Most Innovative and She Learns (Best Beginners) prize at SheHacks 2018. Mobile application aimed to allow victims of\n            domestic abuse to efficiently report incidents and reach out for help without risk of personal safety.\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <a mat-button href=\"https://github.com/huynhtan97/sheFightsBack\">View Github</a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div fxFlex.lt-lg=\"50\" fxFlex.lt-sm=\"100\">\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title><h4>shefightsback</h4></mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src=\"https://huynhtan97.github.io/Portfolio/assets/images/sheFightsBack.png\" alt=\"shefightsback\" style=\"max-height: 300px\">\n        <mat-card-content>\n          <p>\n            Winner of Most Innovative and She Learns (Best Beginners) prize at SheHacks 2018. Mobile application aimed to allow victims of\n            domestic abuse to efficiently report incidents and reach out for help without risk of personal safety.\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <a mat-button href=\"https://github.com/huynhtan97/sheFightsBack\">View Github</a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = "/* Contains all the chips */\n.body{\n  padding: 0px 20px 20px 20px;\n}\n/* Header on top of page */\n.header{\n  width: 100%; /* width of parent element*/\n  padding-top: 30px;\n}\n.header:after{\n  content: '';\n  display:block;\n  clear: both;\n}\n.header h2 {\n  color: #666666;\n  text-align: center;\n  text-transform: uppercase;\n  padding-bottom: 10px;\n  position: relative;\n}\n/* Creating the \"section\" line */\n.header h2:after{\n  content: '';\n  position: absolute;\n  width: 80px;\n  height: 2px;\n  margin-left: -40px;\n  left: 50%;\n  bottom: 0px;\n  background-color: #666666;\n}\n.header h5{\n  color: #333;\n  text-align: center;\n  text-transform: uppercase;\n  position: relative;\n  margin-bottom: 20px;\n}\n/* mat-card containing chip list */\nmat-card {\n  margin: 15px;\n}\n/* Chip List with skills */\nmat-chip {\n  max-width: 200px;\n  margin: 10px;\n}\nmat-chip:hover{\n  color: lightgray;\n  cursor: pointer;\n  /* Got from MaterializeCSS */\n  -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);\n}\n.mat-tooltip {\n  color: #fff;\n  max-width: 250px;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"header\">\n  <h2>My Skills and Experiences</h2>\n  <h5>Hover over each chip for additional information</h5>\n</div>\n\n<!-- Move each card, chip list, and header into its own directive? -->\n\n<div class = \"body\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title><h4>Languages</h4></mat-card-title>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let chip of languagesAndColors\" selected [color]=\"chip.color\" [matTooltip]=\"chip.years\" matTooltipPosition='above'>\n        {{chip.skill}}\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title><h4>Tools/Services</h4></mat-card-title>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let chip of toolsAndColors\" selected [color]=\"chip.color\" [matTooltip]=\"chip.years\" matTooltipPosition='above'>\n        {{chip.skill}}\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title><h4>Frameworks</h4></mat-card-title>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let chip of frameworksAndColors\" selected [color]=\"chip.color\" [matTooltip]=\"chip.years\" matTooltipPosition='above'>\n        {{chip.skill}}\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title><h4>Software</h4></mat-card-title>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let chip of softwareAndColors\" selected [color]=\"chip.color\" [matTooltip]=\"chip.years\" matTooltipPosition='above'>\n        {{chip.skill}}\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title><h4>Soft Skills</h4></mat-card-title>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let chip of softskillsAndColor\" selected [color]=\"chip.color\" [matTooltip]=\"chip.from\" matTooltipPosition='above'>\n        {{chip.skill}}\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        /**
         * @type {TechSkills[]}
         * @memberof SkillsComponent
         * if years >= 3, then color = warn
         * if years == 2, then color = accent
         * if years < 2, then color = primary
         */
        this.languagesAndColors = [
            { skill: 'Java', years: '4+ years', color: 'warn' },
            { skill: 'Javascript', years: '3+ years', color: 'warn' },
            { skill: 'Typescript', years: '2+ years', color: 'accent' },
            { skill: 'jQuery', years: '1+ years', color: 'primary' },
            { skill: 'Python', years: '2+ years', color: 'accent' },
            { skill: 'PHP', years: '1+ years', color: 'primary' },
            { skill: 'HTML', years: '3+ years', color: 'warn' },
            { skill: 'CSS/Sass/Bootstrap', years: '3+ years', color: 'warn' },
            { skill: 'C', years: '1+ years', color: 'primary' },
            { skill: 'C++', years: '1+ years', color: 'primary' },
            { skill: 'Shell scripting', years: '1+ years', color: 'primary' },
            { skill: 'Scala', years: '1+ years', color: 'primary' },
            { skill: 'Ruby', years: '2+ years', color: 'accent' },
            { skill: 'Matlab', years: '2+ years', color: 'accent' },
            { skill: 'Markdown', years: '3+ years', color: 'warn' },
            { skill: 'LaTeX', years: '1+ years', color: 'primary' },
            { skill: 'R', years: '1+ years', color: 'primary' },
            { skill: 'SQL', years: '3+ years', color: 'warn' },
        ];
        this.toolsAndColors = [
            { skill: 'AWS', years: '2+ years', color: 'accent' },
            { skill: 'Google Cloud Platform', years: '1+ years', color: 'primary' },
            { skill: 'IBM Cloud', years: '1+ years', color: 'primary' }
        ];
        this.frameworksAndColors = [
            { skill: 'AngularJS', years: '2+ years', color: 'accent' },
            { skill: 'Rails', years: '2+ years', color: 'accent' },
            { skill: 'React', years: '1+ years', color: 'primary' },
        ];
        this.softwareAndColors = [
            { skill: 'Android Studio', years: '2+ years', color: 'primary' },
            { skill: 'XCode', years: '2+ years', color: 'accent' },
            { skill: 'Rails', years: '2+ years', color: 'accent' },
            { skill: 'MySQL', years: '3+ years', color: 'warn' },
            { skill: 'MongoDB', years: '2+ years', color: 'accent' },
            { skill: 'Microsoft SQL Server', years: '2+ years', color: 'accent' },
            { skill: 'Github', years: '4+ years', color: 'warn' },
            { skill: 'Heroku', years: '2+ years', color: 'accent' },
            { skill: 'Spring Tool Suite', years: '2+ years', color: 'accent' },
            { skill: 'ServiceNow', years: '1+ years', color: 'primary' },
            { skill: 'Unity', years: '3+ years', color: 'warn' },
            { skill: 'Microsoft Office', years: '8+ years', color: 'warn' },
        ];
        /**
         * @type {SoftSkills[]}
         * @memberof SkillsComponent
         * if from == Internships, then color = warn
         * if from == School Clubs, then color = accent
         * if from == (Anything else), then color = primary
         */
        this.softskillsAndColor = [
            { skill: 'Organization', from: 'School', color: 'primary' },
            { skill: 'Teamwork', from: 'School Clubs', color: 'accent' },
            { skill: 'Team Leadership', from: 'School Clubs', color: 'accent' },
            { skill: 'Public Speaking', from: 'Self-taught', color: 'primary' },
            { skill: 'Communication', from: 'School+Internships', color: 'warn' },
            { skill: 'Accountability', from: 'School Clubs+Internships', color: 'warn' },
            { skill: 'Time Management', from: 'School Clubs', color: 'accent' },
            { skill: 'Listening', from: 'School', color: 'primary' },
            { skill: 'Adaptability', from: 'School Clubs+Internships', color: 'warn' },
            { skill: 'Quick Learner', from: 'Internships', color: 'primary' },
            { skill: 'Problem-Solving', from: 'School Clubs+Internships', color: 'warn' },
            { skill: 'Self-Motivation', from: 'School', color: 'primary' }
        ];
    }
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);




// Angular material

if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map