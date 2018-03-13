(function () {
    'use strict';

    angular
        .module('website.sports.controllers')
        .controller('SportsController', SportsController);

    SportsController.$inject = ['$scope', '$http'];

    function SportsController($scope, $http) {

        var self = this;

        
        $http.get("/players/trainer")
            .then(function (response) {
                $scope.trainer= response.data;
                console.log($scope.trainer)
            });

    }


})();