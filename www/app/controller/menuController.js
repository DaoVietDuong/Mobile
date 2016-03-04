var menuController = ngControllers.controller('menuController', [
    '$scope', '$window', '$uibModal', 'configService',
    function ($scope, $window, $uibModal, configService) {

    }
])
ngControllers.config(['$windowProvider', '$stateProvider', '$httpProvider', '$urlRouterProvider', '$routeProvider', '$locationProvider',
    function ($windowProvider, $stateProvider, $httpProvider, $urlRouterProvider, $routeProvider, $locationProvider) {
        var window = $windowProvider.$get('$window');
        var moduleRoot = '/Phonegap';
        var moduleUrl = function (url) {
            var result = url;
            if (moduleRoot) {
                result = (moduleRoot + '/' + url).replace('//', '/');
            }
            return result;
        };

        $stateProvider.state('introMenu',
            {
                url: '/introMenu',
                templateUrl: moduleUrl('app/menus/intro.html'),
                controller: 'menuController'
            }
            ).
            state('infoMenu',
                {
                    url: '/infoMenu',
                    templateUrl: moduleUrl('app/menus/info.html'),
                    controller: 'menuController'
                }
                )
            .state('documentMenu',
                {
                    url: '/documentMenu',
                    templateUrl: moduleUrl('app/menus/document.html'),
                    controller: 'menuController'
                }
                ).
            state('publicServiceMenu',
                {
                    url: '/publicServiceMenu',
                    templateUrl: moduleUrl('app/menus/publicService.html'),
                    controller: 'menuController'
                }
                );
    }])