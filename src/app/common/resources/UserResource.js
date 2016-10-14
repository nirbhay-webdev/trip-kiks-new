export default ['$resource', 'apiBaseUrl', function ($resource, apiBaseUrl) {

    return $resource(apiBaseUrl + '/user/:id', {id: '@id'},
        {
            update: {method: 'PUT'}
        }
    );

}];
