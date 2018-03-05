(function () {
    'use strict';

    var app = angular
        .module("website", [
            'website.routes',
            'website.homepage',
            'website.contact',
            'duScroll'
            
        ]);

    angular
        .module("website.routes", ['ngRoute']);


    angular
        .module("website")
        .run(run);

    run.$inject = ['$http'];

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }


})();
