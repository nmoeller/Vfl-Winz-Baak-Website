(function () {
    'use strict';

    angular
        .module('website.news.controllers')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['$scope', '$http'];

    function NewsController($scope, $http) {

        var self = this;

        $scope.sitePage = true;

        var navbar = document.getElementById("myNavbar");
        navbar.className = "w3-bar" + " w3-card" + " w3-black";

        $http.get("/articles/all")
            .then(function (response) {
                $scope.articles = response.data;
                console.log($scope.articles)
            });

    }


})();