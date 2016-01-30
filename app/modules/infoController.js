var infoService = homeModule.factory('infoService',
    ['$resource', '$http', '$window',
        function ($resource, $http, $window) {
            var result = {
                activityInfo: function () {
                    var items = $http.get('http://bd.btsoftvn.net/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=TinTuc&type=thd')
                        .then(function (response) {
                            return response.data;
                        });
                    return items;
                },
                eventInfo: function () {
                    var items = $http.get('http://bd.btsoftvn.net/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=TinTuc&type=tsk')
                        .then(function (response) {
                            return response.data;
                        });
                    return items;
                },
                bussinessInfo: function () {
                    var items = $http.get('http://bd.btsoftvn.net/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=TinTuc&type=tnv')
                        .then(function (response) {
                            return response.data;
                        });
                    return items;
                },
                getById: function (id) {
                    var item = $http.get('http://bd.btsoftvn.net/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=TinTuc&ItemId=' + id)
                        .then(function (response) {
                            return response.data;
                        });
                    return item;
                }
            };
            return result;
        }]);

var activityInfoController = homeModule.controller('activityInfoController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location',
        'infoService', function
($scope, $window, $stateParams, $uibModal, $location,
            infoService) {

            $scope.data = [];

            var loadData = function () {
                infoService.activityInfo().then(function (data) {
                    $scope.data = data.Obj;
                    console.log( data.Obj);
                });
            };
            loadData();

        }]);

var eventInfoController = homeModule.controller('eventInfoController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location',
        'infoService', function
($scope, $window, $stateParams, $uibModal, $location,
            infoService) {

            $scope.data = [];

            var loadData = function () {
                infoService.eventInfo().then(function (data) {
                    $scope.data = data.Obj;

                });
            };
            loadData();

        }]);

var bussinessInfoController = homeModule.controller('bussinessInfoController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location',
        'infoService', function
($scope, $window, $stateParams, $uibModal, $location,
            infoService) {

            $scope.data = [];

            var loadData = function () {
                infoService.bussinessInfo().then(function (data) {
                    $scope.data = data.Obj;
                    console.log(data.Obj);
                });
            };
            loadData();

        }]);                        
var detailInfoController = homeModule.controller('detailInfoController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location',
        'infoService', function
($scope, $window, $stateParams, $uibModal, $location,
            infoService) {

            $scope.target = {};
            var paramId = $stateParams.id;
            console.log(paramId);
            var loadData = function () {
                infoService.getById(paramId).then(function (data) {
                    console.log(data);
                    $scope.target = data.Obj;
                    

                });
            };
            loadData();
        }]);                                