/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global malarkey:false, toastr:false, moment:false */
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _indexConfig = __webpack_require__(1);

	var _indexConfig2 = _interopRequireDefault(_indexConfig);

	var _indexRoute = __webpack_require__(2);

	var _indexRoute2 = _interopRequireDefault(_indexRoute);

	var _indexRun = __webpack_require__(3);

	var _indexRun2 = _interopRequireDefault(_indexRun);

	//controllers

	var _mainMainController = __webpack_require__(4);

	var _mainMainController2 = _interopRequireDefault(_mainMainController);

	var _dashboardDashboardController = __webpack_require__(5);

	var _dashboardDashboardController2 = _interopRequireDefault(_dashboardDashboardController);

	var _companyInfoCompanyInfoController = __webpack_require__(6);

	var _companyInfoCompanyInfoController2 = _interopRequireDefault(_companyInfoCompanyInfoController);

	//Resources
	// import UserResource from './common/resources/UserResource';

	//Directives

	angular.module('tripkiks', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.materialize'])

	//Define constants
	.constant('moment', moment).constant('apiBaseUrl', 'http://localhost:3000/')

	//Define Config
	.config(_indexConfig2['default']).config(_indexRoute2['default'])

	//Define Run blocks
	.run(_indexRun2['default'])

	//Define Filters

	//Define Resource factories
	// .factory('User', UserResource)

	//Define controllers
	.controller('MainController', _mainMainController2['default']).controller('DashboardController', _dashboardDashboardController2['default']).controller('CompanyInfoController', _companyInfoCompanyInfoController2['default']);

	// .directive('footerHtml', () => new FooterDirective())

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function config($logProvider, $compileProvider) {
	    'ngInject';
	    // Enable log
	    $logProvider.debugEnabled(true);

	    //for cache urls
	    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile|content):|data:image\//);
	}

	exports['default'] = config;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function routerConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';

	    $stateProvider.state('home', {
	        url: '/',
	        templateUrl: 'app/main/main.html',
	        controller: 'MainController',
	        controllerAs: 'main'
	    }).state('dashboard', {
	        url: '/dashboard',
	        templateUrl: 'app/dashboard/dashboard.html',
	        controller: 'DashboardController',
	        controllerAs: 'dashboard'
	    }).state('company-info', {
	        url: '/company-info',
	        templateUrl: 'app/company-info/company-info.html',
	        controller: 'CompanyInfoController',
	        controllerAs: 'cInfo'
	    });

	    $urlRouterProvider.otherwise('/');
	}

	exports['default'] = routerConfig;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function runBlock($log, $rootScope) {
	    'ngInject';

	    $rootScope.safeApply = function (fn) {
	        var phase = this.$root.$$phase;
	        if (phase == '$apply' || phase == '$digest') {
	            if (fn && typeof fn === 'function') {
	                fn();
	            }
	        } else {
	            this.$apply(fn);
	        }
	    };

	    $log.debug('runBlock end');
	}

	exports['default'] = runBlock;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Class responsible to login the user.
	 * */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var MainController = (function () {
	    function MainController($http, apiBaseUrl) {
	        'ngInject';

	        _classCallCheck(this, MainController);

	        this.$http = $http;
	        this.apiBaseUrl = apiBaseUrl;
	        $http.defaults.useXDomain = true;
	        this.showTabs = true;
	        this.carousel = true;
	        this.sliderShow = true;
	    }

	    _createClass(MainController, [{
	        key: 'validateForm',
	        value: function validateForm() {
	            console.log('sdsdsds');
	            // function to submit the form after all validation has occurred			
	            this.submitForm = function (isValid) {
	                // check to make sure the form is completely valid
	                if (isValid) {
	                    alert('our form is amazing');
	                }
	            };
	        }
	    }]);

	    return MainController;
	})();

	exports['default'] = MainController;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Class responsible to login the user.
	 * */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var DashboardController = function DashboardController($http, apiBaseUrl) {
	    'ngInject';

	    _classCallCheck(this, DashboardController);

	    this.$http = $http;
	    this.apiBaseUrl = apiBaseUrl;
	    $http.defaults.useXDomain = true;
	    this.showTabs = true;
	    this.carousel = true;
	    this.sliderShow = true;
	};

	exports['default'] = DashboardController;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Class responsible to login the user.
	 * */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var CompanyInfoController = function CompanyInfoController($http, apiBaseUrl) {
	    'ngInject';

	    _classCallCheck(this, CompanyInfoController);

	    this.$http = $http;
	    this.apiBaseUrl = apiBaseUrl;
	    $http.defaults.useXDomain = true;
	    this.showTabs = true;
	    this.carousel = true;
	    this.sliderShow = true;
	};

	exports['default'] = CompanyInfoController;
	module.exports = exports['default'];

/***/ }
/******/ ]);