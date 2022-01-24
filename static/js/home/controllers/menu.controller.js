(function () {
    'use strict';

    angular
        .module('website.menu.controllers')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['$scope', '$http', '$location'];

    function MenuController($scope, $http, $location) {

        var self = this;

        $scope.$on('$routeChangeSuccess', function (event, current) {
            if ($location.path() == "/home") {
                $scope.mainSite = true


            } else {
                $scope.mainSite = false
            }
            

        });

        $http.get("/marquee/latest")
            .then(function (response) {
                $scope.marquee = response.data.text;

            });

            var fetchLivescore = () => {
                $http.get("/livescore/all")
                    .then(function (response) {
                        $scope.livescores = response.data;
                        $scope.livescores = $scope.livescores.map((element) => {
                            element["latestupdate"] = Date.now() - Date.parse(element.updated_at)
                            return element})
                        console.log($scope.livescores)
                        setTimeout(()=>fetchLivescore(),20000)
                    });
            }
    
            fetchLivescore()







    }


})();