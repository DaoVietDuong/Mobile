ngDirectives.directive('back', function factory($window) {
    return {
        restrict   : 'E',
        replace    : true,
        transclude : true,
        template: ' <button type="button" ng-click="back()" class="btn btn-info"><span class="glyphicon glyphicon-chevron-left"></span>Trở lại</button>',
        link: function ($scope, element, attrs) {
          $scope.back = function() {
            $window.history.back();
          };
        }
      };
});