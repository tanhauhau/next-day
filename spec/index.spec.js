describe("Works fine", function() {

    var nextDay = require('../index.js');

    //April 21, 2016, Thursday
    var today = new Date(2016, 3, 21);
    it("Monday", function() {
        var nextMonday = nextDay(today, 1);
        expect(nextMonday.date).toBeDefined();
        expect(nextMonday.date).toEqual(new Date(2016,3,25));
        expect(nextMonday.dayLeft).toBeDefined();
        expect(nextMonday.dayLeft).toEqual(4);
    });
    it("Tueday", function(){
        var nextTueday = nextDay(today, 2);
        expect(nextTueday.date).toBeDefined();
        expect(nextTueday.date).toEqual(new Date(2016,3,26));
        expect(nextTueday.dayLeft).toBeDefined();
        expect(nextTueday.dayLeft).toEqual(5);
    });
    it("Wednesday", function(){
        var nextWednesday = nextDay(today, 3);
        expect(nextWednesday.date).toBeDefined();
        expect(nextWednesday.date).toEqual(new Date(2016,3,27));
        expect(nextWednesday.dayLeft).toBeDefined();
        expect(nextWednesday.dayLeft).toEqual(6);
    });
    it("Thursday", function(){
        var nextThursday = nextDay(today, 4);
        expect(nextThursday.date).toBeDefined();
        expect(nextThursday.date).toEqual(new Date(2016,3,28));
        expect(nextThursday.dayLeft).toBeDefined();
        expect(nextThursday.dayLeft).toEqual(7);
    });
    it("Friday", function(){
        var nextFriday = nextDay(today, 5);
        expect(nextFriday.date).toBeDefined();
        expect(nextFriday.date).toEqual(new Date(2016,3,22));
        expect(nextFriday.dayLeft).toBeDefined();
        expect(nextFriday.dayLeft).toEqual(1);
    });
    it("Saturday", function(){
        var nextSaturday = nextDay(today, 6);
        expect(nextSaturday.date).toBeDefined();
        expect(nextSaturday.date).toEqual(new Date(2016,3,23));
        expect(nextSaturday.dayLeft).toBeDefined();
        expect(nextSaturday.dayLeft).toEqual(2);
    });
    it("Sunday", function(){
        var nextSunday = nextDay(today, 7);
        expect(nextSunday.date).toBeDefined();
        expect(nextSunday.date).toEqual(new Date(2016,3,24));
        expect(nextSunday.dayLeft).toBeDefined();
        expect(nextSunday.dayLeft).toEqual(3);
        expect(nextSunday).toEqual(nextDay(today, 0));
    });

    it("Constant", function(){
        expect(nextDay.Monday).toEqual(1);
        expect(nextDay.Tueday).toEqual(2);
        expect(nextDay.Wednesday).toEqual(3);
        expect(nextDay.Thursday).toEqual(4);
        expect(nextDay.Friday).toEqual(5);
        expect(nextDay.Saturday).toEqual(6);
        expect(nextDay.Sunday).toEqual(7);
    });
});
