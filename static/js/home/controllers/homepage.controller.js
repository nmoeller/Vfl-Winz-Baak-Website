(function () {
    'use strict';

    angular
        .module('website.homepage.controllers')
        .controller('HomepageController', HomepageController);

    HomepageController.$inject = ['$scope', '$http'];

    function HomepageController($scope, $http) {

        var self = this;
        $scope.mainMenu = true;


        $http.get("/articles/all")
            .then(function (response) {
                $scope.articles = response.data;
                console.log($scope.articles)
            });

    }


})();