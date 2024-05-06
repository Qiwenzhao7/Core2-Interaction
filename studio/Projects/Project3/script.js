// window.addEventListener('scroll', function () {
//     var scrolled = window.scrollY;
//     var content = document.querySelector('.content');
//     content.style.top = 50 + scrolled * 0.1 + '%'; // Adjust the scrolling speed as needed
// });

var key = 'e92c3c9cd77dad7b1b1d40b741adca16';
var zip = 10011;

// API URL
// ---------------------
var URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${key}`;

//FETCH REQUEST
// ---------------------

fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then(function (Data) {
        // log the data
        render(Data);
    });

function render(data) {
    console.log(data);
}

// function render(data) {
//     var containerElement = document.querySelector('.Container');
//     var weatherVaneElement = document.querySelector('.WeatherVane');
//     var infoElement = document.querySelector('.Info');

//     infoElement.innerHTML = `
//     <p>${zip}</p>
//     <p>Temp: ${data.main.temp}</p>
//     <p>Wind Direction:${data.wind.deg}deg</p>
//     <p>Wind Speed:${data.wind.speed}mph</p>

//    ` ;
//     containerElement.style.background = `hsl(${data.main.temp},100%,50%)`;
//     weatherVaneElement.style.transform = `rotate${data.wind.deg}deg`;
//     weatherVaneElement.style.animationduration =
//         console.log(data);
// }
