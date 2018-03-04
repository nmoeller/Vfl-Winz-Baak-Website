(function () {
    'use strict';

    angular
        .module('website.homepage.controllers')
        .controller('HomepageController', HomepageController);

    HomepageController.$inject = ['$scope', '$http'];

    function HomepageController($scope, $http) {

        var self = this;

        $http.get("/articles/all")
            .then(function (response) {
                $scope.articles = response.data;
                console.log($scope.articles)
            });

        $http.get("/marquee/latest")
            .then(function (response) {
                $scope.marquee = response.data.text;
                console.log($scope.marquee)
            });

    }


})();