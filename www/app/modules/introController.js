var introService = homeModule.factory('introService',
    ['$resource', '$http', '$window', 'configService',
        function ($resource, $http, $window, configService) {
            var result = {
                generalIntro: function () {
                    var items = $http.get(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=GioiThieu')
                        .then(function (response) {
                            return response.data;
                        });
                    return items;
                },
                historyIntro: function () {
                    var items = $http.get(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=GioiThieu&i=lichsu')
                        .then(function (response) {
                            return response.data;
                        });
                    return items;
                },
                featureIntro: function () {
                    var items = $http.get(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=GioiThieu&i=chucnang')
                        .then(function (response) {
                            return response.data;
                        });
                    return items;
                },
                constructIntro: function () {
                    var items = $http.get(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=GioiThieu&i=sodo')
                        .then(function (response) {
                            return response.data;
                        });
                    return items;
                },
                directIntro: function () {
                    var items = $http.get(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=GioiThieu&i=dinhhuong')
                        .then(function (response) {
                            return response.data;
                        });
                    return items;
                }

            };
            return result;
        }])

var generalIntroController = homeModule.controller('generalIntroController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location', 'configService',
        'introService', function
($scope, $window, $stateParams, $uibModal, $location, configService,
            introService) {
            var config = configService.config;
             $scope.config = config;
            $scope.data = [];

            var updateData = function () {
                introService.generalIntro().then(function (data) {
                    $scope.data = data.Obj;

                });
            };
            updateData();

        }]);

var historyIntroController = homeModule.controller('historyIntroController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location', 'configService',
        'introService',
        function ($scope, $window, $stateParams, $uibModal, $location, configService,
            introService) {
            var config = configService.config;
             $scope.config = config;
            $scope.data = [];

            var updateData = function () {
                introService.historyIntro().then(function (data) {
                    $scope.data = data.Obj;

                });
            };
            updateData();
        }])

var featureIntroController = homeModule.controller('featureIntroController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location', 'configService',
        'introService',
        function ($scope, $window, $stateParams, $uibModal, $location, configService,
            introService) {
            var config = configService.config;
             $scope.config = config;
            $scope.data = [];

            var updateData = function () {
                introService.featureIntro().then(function (data) {
                    console.log(data);
                    $scope.data = data.Obj;
                });
            };
            updateData();

        }])

var constructIntroController = homeModule.controller('constructIntroController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location', 'configService',
        'introService',
        function ($scope, $window, $stateParams, $uibModal, $location, configService,
            introService) {
            var config = configService.config;
             $scope.config = config;
            $scope.data = [];

            var updateData = function () {
                introService.constructIntro().then(function (data) {
                    $scope.data = data.Obj;
                });
            };
            updateData();
        }])

var directIntroController = homeModule.controller('directIntroController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location', 'configService',
        'introService',
        function ($scope, $window, $stateParams, $uibModal, $location, configService,
            introService) {
            var config = configService.config;
             $scope.config = config;
            $scope.data = [];

            var updateData = function () {
                introService.directIntro().then(function (data) {
                    $scope.data = data.Obj;
                });
            };
            updateData();
        }])