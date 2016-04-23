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

nextDay.Monday = 1;
nextDay.Tueday = 2;
nextDay.Wednesday = 3;
nextDay.Thursday = 4;
nextDay.Friday = 5;
nextDay.Saturday = 6;
nextDay.Sunday = 7;

exports = module.exports = nextDay;
