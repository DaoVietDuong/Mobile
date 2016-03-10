homeModule.factory('publicServiceService', [
    '$resource', '$http', '$window', '$httpParamSerializerJQLike',
    function ($resource, $http, $window, $httpParamSerializerJQLike) {
        var result = {
            base: $resource(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Login.ashx'),
            query: function (object) {
                var res = $http({
                    url: configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx',
                    method: 'POST',
                    data: $httpParamSerializerJQLike(object),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                return res;
            }
        };
        return result;

    }
])


var publicServiceController = homeModule.controller('publicServiceController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location', 'clientService', 'configService', 'homeService',
        'publicServiceService',
        function ($scope, $window, $stateParams, $uibModal, $location, clientService, configService, homeService,
            publicServiceService) {
            var currentUser = configService.currentUser.userData();
            $scope.data = [];
            $scope.target = {};
            $scope.filtered = {};
            $scope.tempData = homeService.tempData;
            $scope.page = angular.copy(configService.pageDefault);
            $scope.filtered.PageObject = $scope.page;
            function updateData() {
                var tranfer = { Description: "Dịch vụ công", Package: $scope.filtered }
                $scope.target.p = "DichvuCong";
                $scope.target.userId = currentUser.UserId;
                $scope.target.jsonObject = JSON.stringify(tranfer);

                publicServiceService.query($scope.target).then(function (response) {
                    if (response) {
                        $scope.data = response.data.Obj;
                    }
                });
            };
            if (currentUser) {
                updateData();
            };

            $scope.setPageUp = function () {
                $scope.page.CurrentPage = $scope.page.CurrentPage + 1;
                if (currentUser) {
                    updateData();
                };
            };

            $scope.setPageDown = function () {
                $scope.page.CurrentPage = $scope.page.CurrentPage - 1;
                if (currentUser) {
                    updateData();
                };
            }

            $scope.search = function () {
                if (currentUser) {
                    updateData();
                };
            }
        }])

