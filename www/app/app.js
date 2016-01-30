

var mainApp = angular.module('mainApp', [
   'ngResource', 'ui.bootstrap', 'ui.router', 'ngRoute',
   'ngDirectives', 'ngFilters', 'ngControllers', 'ngServices',
    'homeModule',
    ]);



mainApp.config(['$windowProvider', '$stateProvider', '$httpProvider', '$urlRouterProvider', '$routeProvider', '$locationProvider',
function($windowProvider, $stateProvider, $httpProvider , $urlRouterProvider, $routeProvider, $locationProvider)
{
    var window = $windowProvider.$get('$window');
     var moduleRoot = '/Phonegap';
        var moduleUrl = function(url) {
            var result = url;
            if (moduleRoot) {
                result = (moduleRoot + '/' + url).replace('//', '/');
            }
            return result;
        };
        // $routeProvider.
        // when('/home', {
        // templateUrl : moduleUrl('temp1.html'),
        // controller: 'ctrl1'
        // })
        $urlRouterProvider.otherwise('home'); //url not state
    $stateProvider.state('home',
    {
        url: '/home',
        templateUrl: 'app/views/home.html',
        controller: 'homeController'
    }
    )
	.state('detail', 
    {
        url:'/detail/:id',
        templateUrl: 'app/views/detail.html',
		controller: 'homeDetailController'
    })
    .state('generalIntro',
    {
        url:'/generalIntro',
        templateUrl: 'app/views/generalIntro.html',
        controller: 'generalIntroController'
    })
    .state('historyIntro', 
    {
        url:'/historyIntro',
        templateUrl: 'app/views/historyIntro.html',
        controller: 'historyIntroController'
    })
    .state('featureIntro',
    {
        url: '/featureIntro',
        templateUrl: 'app/views/featureIntro.html',
        controller: 'featureIntroController'
    })
    .state('constructIntro',
    {
        url: '/contructIntro',
        templateUrl: 'app/views/constructIntro.html',
        controller: 'constructIntroController'
    })
    .state('directIntro',
    {
        url: '/directIntro',
        templateUrl: 'app/views/directIntro.html',
        controller: 'directIntroController'
    })
    .state('eventInfo',
    {
        url: '/eventInfo',
        templateUrl : 'app/views/eventInfo.html',
        controller: 'eventInfoController'
    }
    )
    .state('bussinessInfo',
    {
        url: '/bussinessInfo',
        templateUrl : 'app/views/bussinessInfo.html',
        controller: 'bussinessInfoController'
    }  
    )
    .state('activityInfo',
    {
        url: '/activityInfo',
        templateUrl : 'app/views/activityInfo.html',
        controller: 'activityInfoController'
    })
    .state('detailInfo',
    {
        url: '/detailInfo/:id',
        templateUrl: 'app/views/detailInfo.html',
        controller: 'detailInfoController'
    })
    .state('document',
    {
        url: '/document',
        templateUrl : 'app/views/document.html',
        controller: 'documentController'
    })
    .state('detailDocument',
    {
        url: '/detailDocument/:type/:src',
        templateUrl : 'app/views/detailDocument.html',
        controller: 'detailDocumentController'        
    })
    .state('grovDocument',
    {
        url: '/grovDocument',
        templateUrl : 'app/views/groupDocument.html',
        controller: 'grovDocumentController'         
    });        
    // if(window.history && window.history.pushState){
            // //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

         // // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

         // // if you don't wish to set base URL then use this
         // $locationProvider.html5Mode({
                 // enabled: false,
                 // requireBase: false
          // });
        // }
}])

