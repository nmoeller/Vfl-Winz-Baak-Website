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
                description: 'Tischtennis, Kindertraining, Jugendtraining, Anfängertraining, Leistungstraining, Wettkampf,Mädchen, Jungen, Mannschaften, Mannschaftssport, Ballroboter, Ballmaschine, qualifizierte Übungsleiter und Trainer, Coaching im Training und im Wettkampf, Turniere, Spaß, Vereinsleben, VfL Winz-Baak, Weihnachtsfeiern, Bochum, Linden, Dahlhausen, Hattingen, Essen,Witten, André Engelmann, Jens Neumeier, schnell, Ping-Pong, NRW-Liga, Landesliga, Bezirksliga, Bezirksklasse, Kreisliga, Kreisklasse, TT, tt',
                canonical: 'https://tt.vfl-winz-baak.de/news',
                controller: "NewsController",
                controllerAs: "ctrl",
                templateUrl: "/static/html/news.html"
            }).when('/article', {
                robots: 'index, follow',
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
                description: 'Unser Trainingsangebot an Euch.4 verschiedene Trainingstage zur AuswahlIhr könnt also trainieren, wenn es Euer Zeitplan hergibt.Freies Spielen.Der Dienstag ist ein Spieltag für alle, an denen das Erlernte geübt werden kann. Es ist kein angeleiteter Trainingstag mit Übungseinheiten, sondern "freies Spielen" für Jugend und Erwachsene.Kurze Wartezeiten.Bei vier möglichen Trainingstagen entzerrt sich unsere große Trainingsgruppe und Ihr müsst nur zu den absoluten Spitzenzeiten auf einen freien Trainingstisch warten.Verschiedene Trainingspartner.Viele verschiedene Trainingspartner aus allen Leistungsklassen. Wir haben derzeit 6 Nachwuchsteams und 5 Teams im Erwachsenenbereich. Da finden sich an jedem Trainingstag ausreichend Spielpartner.Große Trainingsgruppen.Gemeinsames Training in großen Gruppen. Alle Jugendlichen und alle Senioren bilden jeweils eine große Trainingsgruppe. Weitere Unterteilungen nach Leistungen, Mannschaften oder Alter gibt es bei uns grundsätzlich nicht. Das Nachwuchstraining wird natürlich von unserem Übungsleiterteam betreut und strukturiert, die Erwachsenen trainieren frei ohne Übungsleiter.',
                canonical: 'https://tt.vfl-winz-baak.de/training',
                templateUrl: "/static/html/training.html",
                controller: "TrainingsController",
                controllerAs: "ctrl"
            }).when('/aboutUs', {
                title: 'VfL Winz Baak Vereinsleben',
                robots: 'index, follow',
                description: 'Feiern, Sommerfeste - Weihnachten.Weihnachtsfeier Senioren.So what... jeder Kegelclub macht doch seine eigene Weihnachtsfeier? Weit gefehlt Unwissender! Winz-Baak-TT macht nämlich seit Jahren seinen exklusiven Weihnachtsmarkt. Wenn das Wetter es irgendwie zulässt werden Feuerkörbe, Pavillons und Bistrogarnituren im Garten unseres freundlichen Gastgebers aufgestellt und die Weihnachtsfeier wird mit Dönerspieß, Pilzepfanne, Kakao, Glühwein und Crepeeisen zum Outdoorweihnachtsmarkt für einen Abend.Weihnachtsfeier Kids.Natürlich feiert auch unser Nachwuchs seine Weihnachtsfeier. Ob auf der Kegelbahn, beim Indoor-Fußball oder auch direkt in unserer Halle. Erst wird zusammen etwas gespielt und dann wird beschert, bevor schließlich die Essensbestellung eintrifft.Saisoneröffnung.Die Sommerpause ist vorbei, die Vereinskollegen hat man hinreichend lange nicht gesehen und allgemein ist man wieder "heiß wie Frittenfett" auf die neue Saison. Braucht es noch mehr Gründe um sich auf Steak und Würstchen zusammenzufinden und auf eine erfolgreiche neue Saison anzustoßen.',
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
                description: 'Neben hervorragender Jugendarbeit in Hattingen und Bochum auch im Herrenbereich für eine sehr gute Adresse für leistungsorientierte als auch freizeitorientierte Spieler.JugendtrainingUnseren Kindern bringen wir an unseren Trainingstagen in Gruppen als auch im Einzeltraining Grundschlagarten bei und führen sie langsam an den Wettkampfsport heran.Wir bieten.Mit Roboter- und Balleimertraining sowie von Videoanalysen bringen wir Euch das Tischtennispielen bei und bereiten Euch auf Wettkampfspiele, Turniere, Ranglisten und weitere Meisterschaften vor.Probetraining Wir freuen uns über Zuwachs jeglicher Alters- und Leistungsklassen. Komm einfach zum Probetraining oder an den Spieltagen vorbei und lern uns kennen.',
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