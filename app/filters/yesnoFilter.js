ngFilters.filter('fil2',
function()
{
    return function(number){ return number == '1' ? 'a' : 'b';}
}
);