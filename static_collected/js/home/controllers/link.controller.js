(function () {
    'use strict';

    angular
        .module('website.link.controllers')
        .controller('LinkController', LinkController);

    LinkController.$inject = ['$scope', '$http'];

    function LinkController($scope, $http) {

        var self = this;


        $http.get("/links/all")
            .then(function (response) {
                $scope.links = response.data;
                console.log($scope.links)
            });

    }


})();