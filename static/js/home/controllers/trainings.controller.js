(function () {
    'use strict';

    angular
        .module('website.training.controllers')
        .controller('TrainingsController', TrainingsController);

    TrainingsController.$inject = ['$scope', '$http'];

    function TrainingsController($scope, $http) {

        var self = this;

        
        $http.get("/players/trainer")
            .then(function (response) {
                $scope.trainer= response.data;
                console.log($scope.trainer)
            });

    }


})();