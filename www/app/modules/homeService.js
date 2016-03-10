homeModule.factory('homeService',
    ['$resource', '$http', '$window', 'clientService', 'configService',
        function ($resource, $http, $window, clientService, configService) {
            var result = {
                config: configService,
                client: clientService,
            };

            var tempData = $window.CacheManager();
            var cacheStatus = tempData.cacheStatus;
            result.cacheStatus = cacheStatus;
            result.tempData = tempData;

            function initData() {

                tempData.register('listDVC', null, function () {
                   return $resource(configService.rootUrl + '/dvc/_layouts/15/BTS.SP.INTERNET/Mobile/Action.ashx?p=DichvuCong').query({}, isArray = true);
                });

            }
            initData();
            return result;
        }])