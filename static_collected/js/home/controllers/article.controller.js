(function () {
    'use strict';

    angular
        .module('website.article.controllers')
        .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$http', '$routeParams', '$sce', '$rootScope', '$location'];

    function ArticleController($scope, $http, $routeParams, $sce, $rootScope, $location) {

        var self = this;
        $scope.mainMenu = false;
        //console.log()
        $rootScope.canonical = $location.absUrl()

        function htmlToPlaintext(text) {
            return text ? String(text).replace(/<[^>]+>/gm, '') : '';
        }

        var articleId = $routeParams.id;

        $http.get("/articles/id/" + articleId)
            .then(function (response) {
                $scope.articles = response.data[0];
                

                $scope.article = $scope.articles;
            $rootScope.title = "Vfl Winz Baak - " + $scope.article.title
                $scope.safeContent = $sce.trustAsHtml($scope.article.content)
                $rootScope.description = htmlToPlaintext($scope.article.content)
            });


    }


})();