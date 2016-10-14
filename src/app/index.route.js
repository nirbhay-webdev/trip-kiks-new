function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
      .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
        }).state('company-info', {
            url: '/company-info',
            templateUrl: 'app/company-info/company-info.html',
            controller: 'CompanyInfoController',
            controllerAs: 'cInfo'
        })

    $urlRouterProvider.otherwise('/');
}

export default routerConfig;
