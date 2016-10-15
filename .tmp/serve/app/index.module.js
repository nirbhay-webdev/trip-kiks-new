/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWEzZDY3MmJiMjE5NjRiZmM1OWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcGFueS1pbmZvL2NvbXBhbnktaW5mby5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7d0NDckNtQixDQUFnQjs7Ozt1Q0FDVixDQUFlOzs7O3FDQUNuQixDQUFhOzs7Ozs7K0NBR1AsQ0FBd0I7Ozs7eURBQ25CLENBQWtDOzs7OzZEQUNoQyxDQUF3Qzs7Ozs7Ozs7O0FBTzFFLFFBQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7O0VBR3ZILFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQzFCLFFBQVEsQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLENBQUM7OztFQUdoRCxNQUFNLDBCQUFR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S0N4QnZCLG1CQUFtQixHQUNWLFNBRFQsbUJBQW1CLENBQ1QsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUMzQixlQUFVLENBQUM7OzJCQUZiLG1CQUFtQjs7QUFHakIsU0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsU0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsVUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ2pDLFNBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLFNBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLFNBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0VBQzFCOztzQkFJVSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NiNUIscUJBQXFCLEdBQ1osU0FEVCxxQkFBcUIsQ0FDWCxLQUFLLEVBQUUsVUFBVSxFQUFFO0FBQzNCLGVBQVUsQ0FBQzs7MkJBRmIscUJBQXFCOztBQUduQixTQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixTQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixVQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDakMsU0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsU0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsU0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7RUFDMUI7O3NCQUtVLHFCQUFxQiIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGFhM2Q2NzJiYjIxOTY0YmZjNTlhXG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCB0b2FzdHI6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2luZGV4LmNvbmZpZyc7XG5pbXBvcnQgcm91dGVyQ29uZmlnIGZyb20gJy4vaW5kZXgucm91dGUnO1xuaW1wb3J0IHJ1bkJsb2NrIGZyb20gJy4vaW5kZXgucnVuJztcblxuLy9jb250cm9sbGVyc1xuaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInO1xuaW1wb3J0IERhc2hib2FyZENvbnRyb2xsZXIgZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXInO1xuaW1wb3J0IENvbXBhbnlJbmZvQ29udHJvbGxlciBmcm9tICcuL2NvbXBhbnktaW5mby9jb21wYW55LWluZm8uY29udHJvbGxlcic7XG5cbi8vUmVzb3VyY2VzXG4vLyBpbXBvcnQgVXNlclJlc291cmNlIGZyb20gJy4vY29tbW9uL3Jlc291cmNlcy9Vc2VyUmVzb3VyY2UnO1xuXG4vL0RpcmVjdGl2ZXNcblxuYW5ndWxhci5tb2R1bGUoJ3RyaXBraWtzJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ1Jlc291cmNlJywgJ3VpLnJvdXRlcicsICd1aS5tYXRlcmlhbGl6ZSddKVxuXG4vL0RlZmluZSBjb25zdGFudHNcbiAgICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcbiAgICAuY29uc3RhbnQoJ2FwaUJhc2VVcmwnLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycpXG5cbiAgICAvL0RlZmluZSBDb25maWdcbiAgICAuY29uZmlnKGNvbmZpZylcbiAgICAuY29uZmlnKHJvdXRlckNvbmZpZylcblxuICAgIC8vRGVmaW5lIFJ1biBibG9ja3NcbiAgICAucnVuKHJ1bkJsb2NrKVxuXG4gICAgLy9EZWZpbmUgRmlsdGVyc1xuXG4gICAgLy9EZWZpbmUgUmVzb3VyY2UgZmFjdG9yaWVzXG4gICAgLy8gLmZhY3RvcnkoJ1VzZXInLCBVc2VyUmVzb3VyY2UpXG5cbiAgICAvL0RlZmluZSBjb250cm9sbGVyc1xuICAgIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKVxuICAgIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgRGFzaGJvYXJkQ29udHJvbGxlcilcbiAgICAuY29udHJvbGxlcignQ29tcGFueUluZm9Db250cm9sbGVyJywgQ29tcGFueUluZm9Db250cm9sbGVyKVxuXG4vLyAuZGlyZWN0aXZlKCdmb290ZXJIdG1sJywgKCkgPT4gbmV3IEZvb3RlckRpcmVjdGl2ZSgpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2pzaGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qc1xuICoqLyIsImZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsICRjb21waWxlUHJvdmlkZXIpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgIC8vIEVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gICAgLy9mb3IgY2FjaGUgdXJsc1xuICAgICRjb21waWxlUHJvdmlkZXIuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0KC9eXFxzKihodHRwcz98ZmlsZXxibG9ifGNkdmZpbGV8Y29udGVudCk6fGRhdGE6aW1hZ2VcXC8vKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vanNoaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzXG4gKiovIiwiZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcbiAgICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnZGFzaGJvYXJkJywge1xuICAgICAgICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0Rhc2hib2FyZENvbnRyb2xsZXInLFxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnZGFzaGJvYXJkJ1xuICAgICAgICB9KS5zdGF0ZSgnY29tcGFueS1pbmZvJywge1xuICAgICAgICAgICAgdXJsOiAnL2NvbXBhbnktaW5mbycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wYW55LWluZm8vY29tcGFueS1pbmZvLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0NvbXBhbnlJbmZvQ29udHJvbGxlcicsXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdjSW5mbydcbiAgICAgICAgfSlcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyQ29uZmlnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2pzaGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzXG4gKiovIiwiZnVuY3Rpb24gcnVuQmxvY2soJGxvZywgJHJvb3RTY29wZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAkcm9vdFNjb3BlLnNhZmVBcHBseSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHZhciBwaGFzZSA9IHRoaXMuJHJvb3QuJCRwaGFzZTtcbiAgICAgICAgaWYocGhhc2UgPT0gJyRhcHBseScgfHwgcGhhc2UgPT0gJyRkaWdlc3QnKSB7XG4gICAgICAgICAgICBpZihmbiAmJiAodHlwZW9mKGZuKSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoZm4pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBydW5CbG9jaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9qc2hpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5ydW4uanNcbiAqKi8iLCIvKipcbiAqIENsYXNzIHJlc3BvbnNpYmxlIHRvIGxvZ2luIHRoZSB1c2VyLlxuICogKi9cblxuY2xhc3MgTWFpbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBhcGlCYXNlVXJsKSB7XG4gICAgICAgICduZ0luamVjdCc7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5hcGlCYXNlVXJsID0gYXBpQmFzZVVybDtcbiAgICAgICAgJGh0dHAuZGVmYXVsdHMudXNlWERvbWFpbiA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1RhYnMgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhcm91c2VsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zbGlkZXJTaG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2RzZHNkc1wiKVxuICAgICAgICAvLyBmdW5jdGlvbiB0byBzdWJtaXQgdGhlIGZvcm0gYWZ0ZXIgYWxsIHZhbGlkYXRpb24gaGFzIG9jY3VycmVkXHRcdFx0XG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAvLyBjaGVjayB0byBtYWtlIHN1cmUgdGhlIGZvcm0gaXMgY29tcGxldGVseSB2YWxpZFxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnb3VyIGZvcm0gaXMgYW1hemluZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250cm9sbGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2pzaGludC1sb2FkZXIhLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiLyoqXG4gKiBDbGFzcyByZXNwb25zaWJsZSB0byBsb2dpbiB0aGUgdXNlci5cbiAqICovXG5cbmNsYXNzIERhc2hib2FyZENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBhcGlCYXNlVXJsKSB7XG4gICAgICAgICduZ0luamVjdCc7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5hcGlCYXNlVXJsID0gYXBpQmFzZVVybDtcbiAgICAgICAgJGh0dHAuZGVmYXVsdHMudXNlWERvbWFpbiA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1RhYnMgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhcm91c2VsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zbGlkZXJTaG93ID0gdHJ1ZTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZENvbnRyb2xsZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vanNoaW50LWxvYWRlciEuL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzXG4gKiovIiwiLyoqXG4gKiBDbGFzcyByZXNwb25zaWJsZSB0byBsb2dpbiB0aGUgdXNlci5cbiAqICovXG5cbmNsYXNzIENvbXBhbnlJbmZvQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIGFwaUJhc2VVcmwpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLmFwaUJhc2VVcmwgPSBhcGlCYXNlVXJsO1xuICAgICAgICAkaHR0cC5kZWZhdWx0cy51c2VYRG9tYWluID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93VGFicyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2Fyb3VzZWwgPSB0cnVlO1xuICAgICAgICB0aGlzLnNsaWRlclNob3cgPSB0cnVlO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlJbmZvQ29udHJvbGxlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9qc2hpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wYW55LWluZm8vY29tcGFueS1pbmZvLmNvbnRyb2xsZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9