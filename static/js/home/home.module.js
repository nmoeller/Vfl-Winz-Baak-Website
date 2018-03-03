(function () {
    'use strict';

    angular
        .module('website.homepage', [
            'website.homepage.controllers',
            'website.news.controllers',
        'website.article.controllers',
        'website.teams.controllers'
        ]);

    angular
        .module('website.homepage.controllers', [])

    angular
        .module('website.news.controllers', [])

    angular
        .module('website.article.controllers', [])

    angular
        .module('website.teams.controllers', [])

})();