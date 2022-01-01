(function () {
    'use strict';

    angular
        .module('website.homepage', [
            'website.homepage.controllers',
            'website.news.controllers',
            'website.article.controllers',
            'website.teams.controllers',
            'website.menu.controllers',
            'website.sports.controllers',
            'website.training.controllers',
            'website.partner.controllers',
        'website.link.controllers'
        ]);

    angular
        .module('website.homepage.controllers', [])

    angular
        .module('website.news.controllers', [])

    angular
        .module('website.article.controllers', [])

    angular
        .module('website.teams.controllers', [])
    
    angular
        .module('website.menu.controllers', [])
    
    angular
        .module('website.sports.controllers', [])
    
    angular
        .module('website.training.controllers', [])
    angular
        .module('website.link.controllers', [])
        angular
        .module('website.partner.controllers', [])

})();