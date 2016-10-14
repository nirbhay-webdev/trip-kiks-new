/*
 * User service
 * */

class InitialService {

    constructor($http, apiBaseUrl) {
        'ngInject';
        this.$http = $http;
        this.apiBaseUrl = apiBaseUrl
    }

    getInitialDetails(uniqueId){

    }

    static factory() {
        'ngInject';
        return new UserService();
    }

}

export default InitialService;
