ngServices.factory('clientService', [
    '$resource', '$http', '$window', '$injector',
    function ($resource, $http, $window, $injector) {
        var result = {
            now : new Date()
        }
        // var configTypeDocument =
        //     {
        //         vanBanLuat: 'vbl',
        //         vanBanChinhPhu: 'vbcp',
        //         vanBanBoNganh: 'vbbn',
        //         vanBanTongCucHaiQuan: 'vbtchq',
        //         vanBanHaiQuanBinhDuong: 'vbhqbd',
        //     };
        // var configsrcDocument =
        //     {
        //         boTaiChinh: 'btc',
        //         boKeHoachDauTu: 'bkhdt',
        //         boCongThuong: 'bct',
        //         boYTe: 'byt',
        //         boGiaoThongVanTai: 'bgtvt',
        //         boNongNghiepPTNT: 'bngptnt'
        //     };

        // var key = {
        //     username: 'User-Data'
        // };
        // var configlocal = {
        //     typeDocument: configTypeDocument,
        //     srcDocument: configsrcDocument,
        //     keyLocalStore: key
        // };

        // function getUser() {
        //     if (localStorage[configlocal.keyLocalStore.username]) {
        //         return JSON.parse(localStorage[configlocal.keyLocalStore.username]);
        //     }
        //     else
        //     { return null; }
        // }
        // var inforUser = {

        //     isLogin: checkStatusUser,
        //     userData: getUser
        // }

        // function checkStatusUser() {
        //     if (localStorage[configlocal.keyLocalStore.username]) {
        //         return true;
        //     }
        //     else {
        //         return false;
        //     }
        // };
        // var result =
        //     {
        //         config: configlocal,
        //         currentUser: inforUser
        //     };

        return result;
    }
])