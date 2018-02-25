(function () {
    'use strict';

    angular
        .module('website.homepage.controllers')
        .controller('HomepageController', HomepageController);

    HomepageController.$inject = ['$scope'];

    function HomepageController($scope) {

        var self = this;

        self.welcomeText = "Website mit Django und AngularJS"

    }


})();