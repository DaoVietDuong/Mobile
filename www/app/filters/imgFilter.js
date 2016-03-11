ngFilters.filter("imgUrlFilter", function() {
    return function(x) {
        var n = x.indexOf('"', 10);
        var m = x.indexOf('"')
        var st = x.substring(m + 1, n);
        var rootUrl = "http://haiquanbinhduong.gov.vn:8081";
        var result = rootUrl + st;
        return result;


    };
});