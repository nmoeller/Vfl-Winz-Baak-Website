(function () {
    'use strict';

    angular
        .module('website.article.controllers')
        .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$http', '$routeParams','$sce'];

    function ArticleController($scope, $http, $routeParams,$sce) {

        var self = this;
        $scope.mainMenu =false;
        var articleId = $routeParams.id-1;


        if (!$scope.articles) {
            $http.get("/articles/all")
                .then(function (response) {
                    $scope.articles = response.data;
                    console.log($scope.articles)
                    $scope.article = $scope.articles[articleId];
                    $scope.safeContent = $sce.trustAsHtml($scope.article.content)
                });
        } else {
            $scope.article = $scope.articles[articleId];
            $scope.safeContent = $sce.trustAsHtml($scope.article.content)
        }

    }


})();