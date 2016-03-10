userModule.factory('authenticationService', [
    '$resource', '$http', '$window', '$httpParamSerializerJQLike', 'configService',
    function ($resource, $http, $window, $httpParamSerializerJQLike, configService) {
        var result = {
            login: function (object) {
                var res = $http({
                    url: configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Login.ashx',
                    method: 'POST',
                    data: $httpParamSerializerJQLike(object),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
                return res;
            },
        };
        return result;

    }
])


var authenticationController = userModule.controller('authenticationController',
    ['$scope', '$window', '$stateParams', '$uibModalInstance', '$location', 'clientService', 'configService',
        'authenticationService',
        function ($scope, $window, $stateParams, $uibModalInstance, $location, clientService, configService,
            authenticationService) {
            var config = configService.config;  
            $scope.config = config;
            $scope.message = "";
            $scope.data = [];
            $scope.target = {};
            $scope.login = function () {
                authenticationService.login({ username: $scope.target.username, pass: $scope.target.password }).
                    then(function (response) {
                        if(response.data.Status == "200")
                        {
                            saveLocalStore(response.data.Data);
                            
                            $scope.cancel();
                        }else
                        {
                            $scope.message = "Không đăng nhập được, vui lòng kiểm tra lại thông tin!";
                        }
                    });
            };
            
            $scope.ok = function () {
                $uibModalInstance.close($scope.selected.item);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
            
            
            function saveLocalStore(data) {
                localStorage.setItem(config.keyLocalStore.username, JSON.stringify(data));
            }
        }])

