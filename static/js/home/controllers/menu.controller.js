(function () {
    'use strict';

    angular
        .module('website.menu.controllers')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['$scope', '$http', '$location'];

    function MenuController($scope, $http, $location) {

        var self = this;

        $scope.$on('$routeChangeSuccess', function (event, current) {
            if ($location.path() == "/home") {
                $scope.mainMenu = true
                $scope.teamMenu = false
            } else if ($location.path() == "/teams") {
                $scope.teamMenu = true
                $scope.mainMenu = false
            } else {
                $scope.mainMenu = false
                $scope.teamMenu = false
            }

        });

        $http.get("/marquee/latest")
            .then(function (response) {
                $scope.marquee = response.data;
                console.log($scope.marquee)
            });

        $http.get("/teams/all")
            .then(function (response) {
                self.teams = response.data;
                console.log(self.teams)
            });



    }


})();