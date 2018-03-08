(function () {
    'use strict';

    angular
        .module('website.news.controllers')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['$scope', '$http'];

    function NewsController($scope, $http) {

        var self = this;


        $http.get("/articles/all")
            .then(function (response) {
                $scope.articles = response.data;
                console.log($scope.articles)
            });

    }


})();