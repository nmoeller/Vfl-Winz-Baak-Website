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
             
            });

        $http.get("/marquee/latest")
            .then(function (response) {
                $scope.marquee = response.data.text;
              
            });
        
               $http.get("/players/ansprechpartner")
            .then(function (response) {
                $scope.ansprechpartner= response.data;
               
            });

    }


})();