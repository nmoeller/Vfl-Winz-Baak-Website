(function () {
    'use strict';

    angular
        .module('website.teams.controllers')
        .controller('TeamsController', TeamsController);

    TeamsController.$inject = ['$scope', '$http','$sce'];

    function TeamsController($scope, $http,$sce) {

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
                
            });
        
        function getTable(team)
        {
            var name = $scope.teams[team].webttFileName
            if(name){
            $http.get("/webtt/html/"+name+".html")
            .then(function (response) {
                
                $scope.teams[team].tabelle = $sce.trustAsHtml($(response.data).find('table')[0].outerHTML);
               
            }
        )}
                  


    }
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