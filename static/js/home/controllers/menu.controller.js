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
                $scope.mainSite = true


            } else {
                $scope.mainSite = false
            }
            

        });

        $http.get("/marquee/latest")
            .then(function (response) {
                $scope.marquee = response.data.text;

            });







    }


})();