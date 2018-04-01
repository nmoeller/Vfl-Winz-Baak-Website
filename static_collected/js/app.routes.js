(function () {
    'use strict';

    angular
        .module('website.routes')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
            .when('/home', {
                title: 'VfL Winz Baak Tischtennis',
                robots: 'index, follow',
                description: 'Tischtennis, Kindertraining, Jugendtraining, Anfängertraining, Leistungstraining, Wettkampf,Mädchen, Jungen, Mannschaften, Mannschaftssport, Ballroboter, Ballmaschine, qualifizierte Übungsleiter und Trainer, Coaching im Training und im Wettkampf, Turniere, Spaß, Vereinsleben, VfL Winz-Baak, Weihnachtsfeiern, Bochum, Linden, Dahlhausen, Hattingen, Essen,Witten, André Engelmann, Jens Neumeier, schnell, Ping-Pong, NRW-Liga, Landesliga, Bezirksliga, Bezirksklasse, Kreisliga, Kreisklasse',
                canonical: 'https://tt.vfl-winz-baak.de/home',
                controller: "HomepageController",
                controllerAs: "ctrl",
                templateUrl: "/static/html/home.html"
            }).when('/news', {
                title: 'VfL Winz Baak News',
                robots: 'index, follow',
                description: 'Tischtennis, Kindertraining, Jugendtraining, Anfängertraining, Leistungstraining, Wettkampf,Mädchen, Jungen, Mannschaften, Mannschaftssport, Ballroboter, Ballmaschine, qualifizierte Übungsleiter und Trainer, Coaching im Training und im Wettkampf, Turniere, Spaß, Vereinsleben, VfL Winz-Baak, Weihnachtsfeiern, Bochum, Linden, Dahlhausen, Hattingen, Essen,Witten, André Engelmann, Jens Neumeier, schnell, Ping-Pong, NRW-Liga, Landesliga, Bezirksliga, Bezirksklasse, Kreisliga, Kreisklasse',
                canonical: 'https://tt.vfl-winz-baak.de/news',
                controller: "NewsController",
                controllerAs: "ctrl",
                templateUrl: "/static/html/news.html"
            }).when('/article', {
                title: 'VfL Winz Baak Artikel',
                robots: 'index, follow',
                description: 'Tischtennis, Kindertraining, Jugendtraining, Anfängertraining, Leistungstraining, Wettkampf,Mädchen, Jungen, Mannschaften, Mannschaftssport, Ballroboter, Ballmaschine, qualifizierte Übungsleiter und Trainer, Coaching im Training und im Wettkampf, Turniere, Spaß, Vereinsleben, VfL Winz-Baak, Weihnachtsfeiern, Bochum, Linden, Dahlhausen, Hattingen, Essen,Witten, André Engelmann, Jens Neumeier, schnell, Ping-Pong, NRW-Liga, Landesliga, Bezirksliga, Bezirksklasse, Kreisliga, Kreisklasse',
                canonical: 'https://tt.vfl-winz-baak.de/article',
                controller: "ArticleController",
                controllerAs: "ctrl",
                templateUrl: "/static/html/article.html"
            }).when('/teams', {
                title: 'VfL Winz Baak Mannschaften',
                robots: 'index, follow',
                description: 'Tischtennis, Kindertraining, Jugendtraining, Anfängertraining, Leistungstraining, Wettkampf,Mädchen, Jungen, Mannschaften, Mannschaftssport, Ballroboter, Ballmaschine, qualifizierte Übungsleiter und Trainer, Coaching im Training und im Wettkampf, Turniere, Spaß, Vereinsleben, VfL Winz-Baak, Weihnachtsfeiern, Bochum, Linden, Dahlhausen, Hattingen, Essen,Witten, André Engelmann, Jens Neumeier, schnell, Ping-Pong, NRW-Liga, Landesliga, Bezirksliga, Bezirksklasse, Kreisliga, Kreisklasse',
                canonical: 'https://tt.vfl-winz-baak.de/teams',
                controller: "TeamsController",
                controllerAs: "ctrl",
                templateUrl: "/static/html/teams.html"
            }).when('/training', {
                title: 'VfL Winz Baak Training',
                robots: 'index, follow',
                description: 'Tischtennis, Kindertraining, Jugendtraining, Anfängertraining, Leistungstraining, Wettkampf,Mädchen, Jungen, Mannschaften, Mannschaftssport, Ballroboter, Ballmaschine, qualifizierte Übungsleiter und Trainer, Coaching im Training und im Wettkampf, Turniere, Spaß, Vereinsleben, VfL Winz-Baak, Weihnachtsfeiern, Bochum, Linden, Dahlhausen, Hattingen, Essen,Witten, André Engelmann, Jens Neumeier, schnell, Ping-Pong, NRW-Liga, Landesliga, Bezirksliga, Bezirksklasse, Kreisliga, Kreisklasse',
                canonical: 'https://tt.vfl-winz-baak.de/training',
                templateUrl: "/static/html/training.html",
                controller: "TrainingsController",
                controllerAs: "ctrl"
            }).when('/aboutUs', {
                title: 'VfL Winz Baak Vereinsleben',
                robots: 'index, follow',
                description: 'Tischtennis, Kindertraining, Jugendtraining, Anfängertraining, Leistungstraining, Wettkampf,Mädchen, Jungen, Mannschaften, Mannschaftssport, Ballroboter, Ballmaschine, qualifizierte Übungsleiter und Trainer, Coaching im Training und im Wettkampf, Turniere, Spaß, Vereinsleben, VfL Winz-Baak, Weihnachtsfeiern, Bochum, Linden, Dahlhausen, Hattingen, Essen,Witten, André Engelmann, Jens Neumeier, schnell, Ping-Pong, NRW-Liga, Landesliga, Bezirksliga, Bezirksklasse, Kreisliga, Kreisklasse',
                canonical: 'https://tt.vfl-winz-baak.de/aboutUs',
                templateUrl: "/static/html/about.html"
            }).when('/impressum', {
                title: 'VfL Winz Baak Impressum',
                robots: 'index, nofollow',
                description: 'Tischtennis, Kindertraining, Jugendtraining, Anfängertraining, Leistungstraining, Wettkampf,Mädchen, Jungen, Mannschaften, Mannschaftssport, Ballroboter, Ballmaschine, qualifizierte Übungsleiter und Trainer, Coaching im Training und im Wettkampf, Turniere, Spaß, Vereinsleben, VfL Winz-Baak, Weihnachtsfeiern, Bochum, Linden, Dahlhausen, Hattingen, Essen,Witten, André Engelmann, Jens Neumeier, schnell, Ping-Pong, NRW-Liga, Landesliga, Bezirksliga, Bezirksklasse, Kreisliga, Kreisklasse',
                canonical: 'https://tt.vfl-winz-baak.de/impressum',
                templateUrl: "/static/html/impressum.html"
            }).when('/calendar', {
                title: 'VfL Winz Baak Kalender',
                robots: 'index, follow',
                description: 'Tischtennis, Kindertraining, Jugendtraining, Anfängertraining, Leistungstraining, Wettkampf,Mädchen, Jungen, Mannschaften, Mannschaftssport, Ballroboter, Ballmaschine, qualifizierte Übungsleiter und Trainer, Coaching im Training und im Wettkampf, Turniere, Spaß, Vereinsleben, VfL Winz-Baak, Weihnachtsfeiern, Bochum, Linden, Dahlhausen, Hattingen, Essen,Witten, André Engelmann, Jens Neumeier, schnell, Ping-Pong, NRW-Liga, Landesliga, Bezirksliga, Bezirksklasse, Kreisliga, Kreisklasse',
                canonical: 'https://tt.vfl-winz-baak.de/calendar',
                templateUrl: "/static/html/calendar.html"
            }).when('/sports', {
                title: 'VfL Winz Baak Sportliches',
                robots: 'index, follow',
                description: 'Tischtennis, Kindertraining, Jugendtraining, Anfängertraining, Leistungstraining, Wettkampf,Mädchen, Jungen, Mannschaften, Mannschaftssport, Ballroboter, Ballmaschine, qualifizierte Übungsleiter und Trainer, Coaching im Training und im Wettkampf, Turniere, Spaß, Vereinsleben, VfL Winz-Baak, Weihnachtsfeiern, Bochum, Linden, Dahlhausen, Hattingen, Essen,Witten, André Engelmann, Jens Neumeier, schnell, Ping-Pong, NRW-Liga, Landesliga, Bezirksliga, Bezirksklasse, Kreisliga, Kreisklasse',
                canonical: 'https://tt.vfl-winz-baak.de/sports',
                templateUrl: "/static/html/sportliches.html",
                controller: "SportsController",
                controllerAs: "ctrl"
            }).when('/contact', {
                templateUrl: "/static/html/contact.html",
                controller: "ContactController",
                controllerAs: "ctrl"
            })
            .otherwise("/home")


    }

    angular
        .module('website.routes')
        .run(run);

    run.$inject = ['$rootScope', '$sce'];

    function run($rootScope, $sce) {


        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
            $rootScope.description = current.$$route.description;
            $rootScope.canonical = $sce.trustAsResourceUrl(current.$$route.canonical);
            $rootScope.robots = current.$$route.robots
            $rootScope.dynamicLink = current.$$route.dynamicLink


        });


    }
})();