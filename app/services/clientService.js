ngServices.factory('clientService', [
    '$resource', '$http', '$window', '$injector',
    function ($resource, $http, $window, $injector) {
        var configTypeDocument =
            {
                vanBanLuat: 'vbl',
                vanBanChinhPhu: 'vbcp',
                vanBanBoNganh: 'vbbn',
                vanBanTongCucHaiQuan: 'vbtchq',
                vanBanHaiQuanBinhDuong: 'vbhqbd',
            };
        var configsrcDocument =
            {
                boTaiChinh: 'btc',
                boKeHoachDauTu: 'bkhdt',
                boCongThuong: 'bct',
                boYTe: 'byt',
                boGiaoThongVanTai: 'bgtvt',
                boNongNghiepPTNT: 'bngptnt'
            };



        var configlocal = {
            typeDocument: configTypeDocument,
            srcDocument: configsrcDocument
        }

        var result =
            {
                config: configlocal
            };

        return result;
    }
])