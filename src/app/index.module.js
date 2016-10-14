/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';

//controllers
import MainController from './main/main.controller';
import DashboardController from './dashboard/dashboard.controller';
import CompanyInfoController from './company-info/company-info.controller';

//Resources
// import UserResource from './common/resources/UserResource';

//Directives

angular.module('tripkiks', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.materialize'])

//Define constants
    .constant('moment', moment)
    .constant('apiBaseUrl', 'http://localhost:3000/')

    //Define Config
    .config(config)
    .config(routerConfig)

    //Define Run blocks
    .run(runBlock)

    //Define Filters

    //Define Resource factories
    // .factory('User', UserResource)

    //Define controllers
    .controller('MainController', MainController)
    .controller('DashboardController', DashboardController)
    .controller('CompanyInfoController', CompanyInfoController)

// .directive('footerHtml', () => new FooterDirective())
