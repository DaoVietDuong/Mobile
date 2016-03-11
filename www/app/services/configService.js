ngServices.factory('configService', [
    '$resource', '$http', '$window', '$injector',
    function ($resource, $http, $window, $injector) {
        var result = {
            
        }

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

        result.pageDefault = {
            TotalItems: 0,
            ItemsPerPage: 5,
            CurrentPage: 1,
            PageSize: 5,
            TotalPage: 5
        };
        var key = {
            username: 'User-Data'
        };
        result.config = {
            typeDocument: configTypeDocument,
            srcDocument: configsrcDocument,
            keyLocalStore: key
        };

        function getUser() {

            if (localStorage[key.username]) {
                return JSON.parse(localStorage[key.username]);
            }
            else
            { return null; }
        }
        
        function checkStatusUser() {

            if (localStorage[key.username]) {
                return true;
            }
            else {
                return false;
            }
        };
        result.rootUrl  = "http://bd.btsoftvn.net";
        result.currentUser = {
            isLogin: checkStatusUser,
            userData: getUser
        }
        return result;
    }
])