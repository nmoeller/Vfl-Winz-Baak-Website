(function () {
    'use strict';

    angular
        .module('website.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: "HomepageController",
                controllerAs: "ctrl",
                templateUrl: "/static/html/home.html"
            })
            .otherwise("/")


    }
})();