(function () {
    'use strict';

    angular
        .module('website.contact.controllers')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$scope', '$http'];

    function ContactController($scope, $http) {

        var self = this;

        self.showSucessMessage = false;
        self.showMissingDataMessage = false;
        self.showErrorMessage = false;

        self.submitForm = function (data) {

            if ($scope.text.length > 0 && $scope.name.length > 0 && $scope.email.length > 0) {
                $http({
                    method: "POST",
                    url: "/email/send",
                    data: {"text": $scope.text, "name": $scope.name, "email": $scope.email},
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function (response) {

                    if (response.status === 200) {
                        self.showSucessMessage = true;

                        $scope.contactForm.$setPristine();
                        $scope.contactForm.$setUntouched();
                        $scope.name = "";
                        $scope.text = "";
                        $scope.email = "";
                    } else if (response.status === 422) {
                        self.showMissingDataMessage = true;
                    } else {
                        self.showErrorMessage = true;
                    }

                })
            } else {
                self.showMissingDataMessage = true;
            }


        }

    }


})();