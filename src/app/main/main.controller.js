/**
 * Class responsible to login the user.
 * */

class MainController {
    constructor($http, apiBaseUrl) {
        'ngInject';
        this.$http = $http;
        this.apiBaseUrl = apiBaseUrl;
        $http.defaults.useXDomain = true;
        this.showTabs = true;
        this.carousel = true;
        this.sliderShow = true;
    }
    
}

export default MainController;