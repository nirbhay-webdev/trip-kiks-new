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

    validateForm() {
        console.log("sdsdsds")
        // function to submit the form after all validation has occurred			
        this.submitForm = function (isValid) {
            // check to make sure the form is completely valid
            if (isValid) {
                alert('our form is amazing');
            }

        }
    }
}

export default MainController;
