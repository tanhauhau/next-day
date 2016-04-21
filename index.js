function nextDay(date, day){
    if( day < 0 || day > 7 ||
        typeof date !== 'object' || !(date instanceof Date)) {
        return undefined;
    }

    var dayLeft = (day % 7) - date.getDay();
    if(dayLeft <= 0){
        dayLeft += 7;
    }
    return {
        date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + dayLeft),
        dayLeft: dayLeft
    };
}

exports = module.exports = nextDay;
