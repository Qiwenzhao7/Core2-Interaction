// Get Hand Elements
// -----------------------------------------------------------
var hoursHand = document.querySelector('.Hand--hours')
var minutesHand = document.querySelector('.Hand--minutes');
var secondsHand = document.querySelector('.Hand--seconds');

//Get Time
// -----------------------------------------------------------
var dateObject = new Date();
var hours = dateObject.getHours();
var minutes = dateObject.getMinutes();
var seconds = dateObject.getSeconds();
console.log(hours, minutes, seconds);

var hoursRotation =(360/24)* hours;
var hoursRotation = (360 / 24) * hours;
var minutesRotation = (360/60)* Minutes;
var secondsRotation = (360/60)* Seconds;
console.log(hoursRotation);

//Change.Dom
hoursHand.style.transform = `rotate(${ hoursRotation }deg)`; //e.g.:rotate(120deg)
minutesHand.style.transform = `rotate(${ minutesRotation }deg)`;
secondsHand.style.transform = `rotate(${ secondsRotation }deg)`;