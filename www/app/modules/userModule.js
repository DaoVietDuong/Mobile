var userModule = angular.module('userModule',
    ['ui.router', 'ngRoute']);


userModule.config(
    ['$windowProvider', '$stateProvider', '$httpProvider', '$urlRouterProvider', '$routeProvider', '$locationProvider',
        function ($windowProvider, $stateProvider, $httpProvider, $urlRouterProvider, $routeProvider, $locationProvider) {

            $stateProvider.state('login',
                {
                    url: '/login',
                    templateUrl: 'app/views/login.html',
                    controller: 'authenticationController'
                });
        }])