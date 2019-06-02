(function () {
    'use strict';

    angular
        .module('website.teams.controllers')
        .controller('TeamsController', TeamsController);

    TeamsController.$inject = ['$scope', '$http', '$sce', '$filter'];

    function TeamsController($scope, $http, $sce, $filter) {

        var self = this;

        $http.get("/teams/all")
            .then(function (response) {
                $scope.teams = response.data;
                $http.get("/players/all")
                    .then(function (response) {
                        $scope.players = response.data;
                        for (var team in $scope.teams) {
                            getTable(team)
                        }
                        $http.get("/webtt/qttr/ttr.csv")
                            .then(function (response) {
                                processData(response.data)
                                console.log(response)
                            });


                    });


            });



        function getTable(team) {
            var name = $scope.teams[team].webttFileName
            $scope.teams[team].anzahl = $filter("filter")($scope.players, $scope.teams[team].name).length;
            console.log($scope.teams);
            if (name) {
                $http.get("/webtt/tabelle.php?team=" + name)
                    .then(function (response) {

                        $scope.teams[team].tabelle = $sce.trustAsHtml($(response.data).find('table')[0].outerHTML);

                    })
            }
        }

        function processData(allText) {
            var allTextLines = allText.split(/\r\n|\n/);
            var headers = ['last_name','first_name',  'TTR'];
            var lines = [];

            for (var i = 0; i < allTextLines.length-1; i++) {
                var data1 = allTextLines[i].split(',');
                var data2 = data1[1].split(';');
                var data = [data1[0], data2[0].replace(" ", ''), data2[1]];


                if (data.length == headers.length) {

                    var tarr = {};
                    for (var j = 0; j < headers.length; j++) {
                        tarr[headers[j]] = data[j];
                    }
                    lines.push(tarr);
                }
            }
            for (var i in $scope.players) {
                for (var j in lines) {
                    if ($scope.players[i]['first_name'] == lines[j]['first_name'] ) {
                        if ($scope.players[i]['last_name'] == lines[j]['last_name']) {
                            $scope.players[i].TTR = lines[j].TTR;
                        }
                    }
                }
            }

            console.log($scope.players);




        }
    }


    angular
        .module('website.teams.controllers').filter('position', function ($filter) {
            return function (player, group) {
                if (group.indexOf("Herren") != -1) {
                    var result = $filter("orderBy")(player, "positionMan");
                    return result;
                } else {
                    var result = $filter("orderBy")(player, "positionYouth");
                    return result;
                }

            }
        });


})();