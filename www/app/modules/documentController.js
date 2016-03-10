homeModule.factory('documentService', [
    '$resource', '$http', '$window', 'configService',
    function ($resource, $http, $window, configService) {
        var result = {
            getNew: function () {
                // $http returns a promise, which has a then function, which also returns a promise
                var item = $http.get(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=VanBan')
                    .then(function (response) {

                        return response.data;
                    });
                // Return the promise to the controller
                return item;
            },
            getByTypeDocuments: function (_type) {
                // $http returns a promise, which has a then function, which also returns a promise
                var item = $http.get(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx',
                    {
                        params: { p: 'VanBan', type: _type }
                    })
                    .then(function (response) {

                        return response.data;
                    });
                // Return the promise to the controller
                return item;
            },
            getByTypeSrcDocument: function (_type, _src) {
                // $http returns a promise, which has a then function, which also returns a promise
                var item = $http.get(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx',
                    {
                        params: { p: 'VanBan', type: _type, cqbh: _src }
                    })
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


var documentController = homeModule.controller('documentController',
    ['$scope', '$window', '$stateParams', '$uibModal', '$location', 'configService',
        'documentService',
        function ($scope, $window, $stateParams, $uibModal, $location, configService,
            documentService) {
            var config = configService.config;
            $scope.data = [];
            $scope.target = {};
            var updateData = function () {
                documentService.getNew().then(function (data) {
                    console.log(data);
                    $scope.target = data;
                    $scope.data = data.Obj;
                });
            };
            updateData();

        }])

var detailDocumentController = homeModule.controller('detailDocumentController',
    ['$scope', '$window', '$stateParams', '$uibModal', 'configService',
        'documentService',
        function ($scope, $window, $stateParams, $uibModal, configService,
            documentService) {
            $scope.config = configService.config;
            console.log($scope.config);
            $scope.data = [];
            $scope.target = {};
            var updateData = function () { };
            if ($stateParams.type && $stateParams.src) {
                var _type = $stateParams.type;
                var _src = $stateParams.src;
                updateData = function () {
                    documentService.getByTypeSrcDocument(_type, _src).then(function (data) {
                        console.log(data);
                        $scope.target = data;
                        $scope.data = data.Obj;
                    });
                };
            } else if ($stateParams.type) {
                var _type = $stateParams.type;
                updateData = function () {
                    documentService.getByTypeDocuments(_type).then(function (data) {
                        console.log(data);
                        $scope.target = data;
                        $scope.data = data.Obj;
                    });
                };
            }

            updateData();
        }])

