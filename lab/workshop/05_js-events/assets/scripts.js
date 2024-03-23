//select our container element
var containerElement = document.querySelector('.Container');

//insert color swatches function definition
function insertColorSwatches(costume) {

 //select the kirby element 
 var kirbyElement = document.querySelector(`.Kirby[data-costume="${ costume.title }"]`);

 //for each color in the costume...
 costume['colors'].forEach((color) => {
  
  //add the swatch HTML with background color
  kirbyElement.innerHTML += `
   <div class="Swatch" style="background: ${ color }"></div>
  `;
 });
}

//insert single costume function
function insertCostume(costume) {

 //put costume into html
 containerElement.innerHTML += `
  <article class="Kirby" data-costume="${ costume['title'] }">
   <h2>${ costume['title'] }</h2>
   < img src="media/${ costume['image'] }"/>
   <p>${ costume['powers'] }</p >
  </article>
 `;

 //insert color swatch
 insertColorSwatches(costume);

}

//insert costumes function definition
function insertCostumes(costumes) {

 //empty the container element
 containerElement.innerHTML = '';

 //for each costume...
 costumes.forEach((costume) => {
  //insert costume
  insertCostume(costume);
 });

}

//insert all costumes into the Dom
insertCostumes(costumes);

//FILTER COSTUME BY COLOR
//-------------------------------------


//get all the costumes with a single color
//var redCostumes = costume.fillter((costume) => {
// //test for the color red
// return costume['colors'].includes{'red'};
// });

function getCostumesWithColor(color){

 var costumeWithColor = costumes.fillter((costume) => {
  return costumes['colors'].includes(color);
 });

 //return the variable
 return costumeWithColor;
}

var redCostumes = getCostumesWithColor('red');



//EVENT LISTENERS
//---------------------------------

//get all the button element
var colorButtonElements = document.querySelectorAll('.ColorControls input');

//for each button...
colorButtonElements.forEach((button) => {
 button.addEventListener('click',() =>{
  console.log(button);
 });
});