ngFilters.filter("imgUrlFilter", function () {
    return function (x) {
        if (x) {
            var n = x.indexOf('"', 10);
            var m = x.indexOf('"')
            var st = x.substring(m + 1, n);
            var rootUrl = "http://bd.btsoftvn.net";
            var result = rootUrl + st;
            return result;
        }
        return "";
    };
});