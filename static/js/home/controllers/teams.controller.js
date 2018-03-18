(function () {
    'use strict';

    angular
        .module('website.teams.controllers')
        .controller('TeamsController', TeamsController);

    TeamsController.$inject = ['$scope', '$http'];

    function TeamsController($scope, $http) {

        var self = this;

        $http.get("/teams/all")
            .then(function (response) {
                $scope.teams = response.data;
                
            for(var team in $scope.teams)
                {
                    getTable(team)
                }

            });

        $http.get("/players/all")
            .then(function (response) {
                $scope.players = response.data;
                console.log($scope.players)
            });
        
        function getTable(team)
        {
            $http.get("/webtt/html/tabelle_"+$scope.teams[team].name+".html")
            .then(function (response) {
                $scope.teams[team].tabelle = response;
                console.log($scope.teams)
        })}
                  


    }

    angular
        .module('website.teams.controllers').filter('position', function ($filter) {
            return function (player,group) {
                if (group.indexOf("Herren")) {
                    var result = $filter("orderBy")(player, "positionMan");
                    return result;
                } else {
                    var result = $filter("orderBy")(player, "positionYouth");
                    return result;
                }

            }
        });


})();