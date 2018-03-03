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
            }).when('/news', {
                controller: "NewsController",
                controllerAs: "ctrl",
                templateUrl: "/static/html/news.html"
            }).when('/article', {
                controller: "ArticleController",
                controllerAs: "ctrl",
                templateUrl: "/static/html/article.html"
            }).when('/teams', {
                controller: "TeamsController",
                controllerAs: "ctrl",
                templateUrl: "/static/html/teams.html"
            }).when('/training', {
                templateUrl: "/static/html/training.html"
            })
            .otherwise("/home")


    }
})();