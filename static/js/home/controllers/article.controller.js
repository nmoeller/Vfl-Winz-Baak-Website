(function () {
    'use strict';

    angular
        .module('website.article.controllers')
        .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$http', '$routeParams', '$sce'];

    function ArticleController($scope, $http, $routeParams, $sce) {

        var self = this;
        $scope.mainMenu = false;
        var articleId = $routeParams.id - 1;

        $http.get("/articles/id/"+articleId)
            .then(function (response) {
                $scope.articles = response.data[0];
                console.log($scope.articles)
                $scope.article = $scope.articles;
                $scope.safeContent = $sce.trustAsHtml($scope.article.content)
            });


    }


})();