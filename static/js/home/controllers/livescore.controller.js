(function () {
    'use strict';

    angular
        .module('website.livescore.controllers')
        .controller('LiveScoreController', LiveScoreController);

    LiveScoreController.$inject = ['$scope', '$http','$sce'];

    function LiveScoreController($scope, $http,$sce) {

        var self = this;
        $scope.trustedHtml = [];


        var fetchLivescore = () => {
            $http.get("/livescore/all")
                .then(function (response) {
                    $scope.livescores = response.data;
                    console.log($scope.livescores)
                    setTimeout(()=>fetchLivescore(),20000)
                });
        }

        fetchLivescore()
        

    }


})();