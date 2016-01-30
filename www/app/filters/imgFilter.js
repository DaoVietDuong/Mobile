ngFilters.filter("imgUrlFilter", function () {
    return function (x) {
        var n = x.indexOf('"', 10); 
        var m = x.indexOf('"')
        var st = x.substring(m+1, n);
        return st;
    };
});