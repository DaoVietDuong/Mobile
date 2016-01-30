homeModule.factory('homeService', [
    '$resource', '$http', '$window', 
    function($resource, $http, $window)
    {
     var result = {
    getAll: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var item = $http.get('http://bd.btsoftvn.net/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=ThongBao')
            .then(function (response) {

        return response.data;
      });
      // Return the promise to the controller
      return item;
    },
    getById: function(id)
    {
     var item = $http.get('http://bd.btsoftvn.net/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=ThongBao&ItemId='+id)
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
['$scope', '$window', '$stateParams', '$uibModal', '$location', 'clientService',
'homeService',
function($scope, $window, $stateParams, $uibModal, $location, clientService,
homeService)
{
    $scope.data = [];
    $scope.target = {};
    var loadData = function () {
    homeService.getAll().then(function(data) {
    console.log(data);
    $scope.target = data;
    $scope.data = data.Obj;
  });
    };
    loadData();
    
}])

var homeDetailController = homeModule.controller('homeDetailController', [
    '$scope', '$window', '$stateParams', '$uibModal', 
'homeService',
function($scope, $window, $stateParams, $uibModal, 
homeService){
    var paramId = $stateParams.id;
    $scope.target = {};
    homeService.getById(paramId)
    .then(function(data)
    {
        console.log(data);
        $scope.target = data.Obj;
    });
}])

var indexController = homeModule.controller('indexController', [
    '$scope', 'clientService',
    function($scope, clientService)
    {
        $scope.config = clientService.config;
        console.log(clientService);
    }
])