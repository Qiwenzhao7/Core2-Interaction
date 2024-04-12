// Month and Day Lists
// -----------------------------------------------------------
var monthList = ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
var dayList = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

//The.Date.Object
// -----------------------------------------------------------
var dateObject = new Date();
console.log('dateObject',dateObject);

//Hours
// -----------------------------------------------------------
var hours = dateObject.getHours();
console.log('hours:',hours);

//Minutes
// -----------------------------------------------------------
var hours = dateObject.getMinutes();
console.log('minutes:',minutes);

//seconds
// -----------------------------------------------------------
var hours = dateObject.getSeconds();
console.log('seconds:',seconds);

//period
// -----------------------------------------------------------
var period = (hours <= 12) ? 'am' :'pm'; //ternary operator
console.log('period:',period);

//Year
// -----------------------------------------------------------
var hours = dateObject.getYear();
console.log('year:',Year);

//Month
// -----------------------------------------------------------
var month =monthList [dateObject.getMonth()];
console.log('month:',month);