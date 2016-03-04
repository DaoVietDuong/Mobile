
ngFilters.filter("jsDate", function () {

    return function (x) {
        if(x)
        {
        return new Date(parseInt(x.substr(6)));
        }
        else
        {
            return;
        }
    };
});