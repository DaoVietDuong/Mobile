homeModule.factory('indexService', [
    '$resource', '$http', '$window', 'configService',
    function ($resource, $http, $window, configService) {
        var result = {
            getAll: function () {
                // $http returns a promise, which has a then function, which also returns a promise
                var item = $http.get(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=ThongBao')
                    .then(function (response) {

                        return response.data;
                    });
                // Return the promise to the controller
                return item;
            },
            getById: function (id) {
                var item = $http.get(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=ThongBao&ItemId=' + id)
                    .then(function (response) {

                        return response.data;
                    });
                return item;
            }
        };
        return result;

    }
])


var homeController = homeModule.controller('homeController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location', 'clientService', 'configService',
        'indexService',
        function ($scope, $window, $stateParams, $uibModal, $location, clientService, configService,
            indexService) {
            var config = configService.config;
            $scope.data = [];
            $scope.target = {};
            var loadData = function () {
                indexService.getAll().then(function (data) {
                    console.log(data);
                    $scope.target = data;
                    $scope.data = data.Obj;
                });
            };
            loadData();

        }])

var homeDetailController = homeModule.controller('homeDetailController', [
    '$scope', '$window', '$stateParams', '$uibModal', 'configService',
    'indexService',
    function ($scope, $window, $stateParams, $uibModal, configService,
        indexService) {
        var paramId = $stateParams.id;
        $scope.target = {};
        indexService.getById(paramId)
            .then(function (data) {
                $scope.target = data.Obj;
            });
    }])

var indexController = homeModule.controller('indexController', [
    '$scope', 'clientService', '$uibModal', '$log', 'configService',
    function ($scope, clientService, $uibModal, $log, configService) {
        var currentUser = configService.currentUser;
        $scope.config = configService.config;

        $scope.logOut = function () {
            localStorage.clear();
            updateData();
        }
        $scope.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/views/login.html',
                controller: 'authenticationController',
                size: 'sm',
                resolve: {
                    msg: function () {
                        return "";
                    }
                }
            }
                );

            modalInstance.result.then(function (data) {
                console.log(data);
            }, function () {
                $log.info('Hello' + new Date());
                updateData();
            });
        }
        function updateData() {
            $scope.isLogin = currentUser.isLogin();
            if (currentUser.userData()) {
                
                $scope.brandName = currentUser.userData().NguoiDaiDien;
            }
        }
        updateData();
    }
])