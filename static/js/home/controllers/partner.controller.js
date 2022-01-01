(function () {
    'use strict';

    angular
        .module('website.partner.controllers')
        .controller('PartnerController', PartnerController);

    PartnerController.$inject = ['$scope', '$http','$sce'];

    function PartnerController($scope, $http,$sce) {

        var self = this;
        $scope.trustedHtml = [];

        $http.get("/partner/all")
            .then(function (response) {
                $scope.partners = response.data;
                $scope.partners.forEach(element => {
                    $scope.trustedHtml.push($sce.trustAsHtml(element.content))
                });
                console.log($scope.partners)
            });
        

    }


})();