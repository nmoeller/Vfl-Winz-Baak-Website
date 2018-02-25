(function () {
    'use strict';

    angular
        .module('website.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                controller: "HomepageController",
                controllerAs: "ctrl",
                templateUrl: "/static/html/home.html"
            }).when('/paralax', {
                controller: "HomepageController",
                controllerAs: "ctrl",
                templateUrl: "/static/html/paralax.html"
            })
            .otherwise("/home")


    }
})();