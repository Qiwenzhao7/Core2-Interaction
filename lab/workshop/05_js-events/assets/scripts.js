// SELECTING ANY HTML ELEMENT
// --------------------------------------------

var containerElement = document.querySelector('.Container');


// INSERT ALL COSTUMES
// --------------------------------------------

// color swatch function
function insertColorSwatches(costume) {

	// get the relevant kirby element using the data-costume html attribute
	var kirbyElement = document.querySelector(`.Kirby[data-costume="${ costume.title }"]`);

	// add swatches to kirby element HTML
	costume['colors'].forEach((color) => {
		kirbyElement.innerHTML += `
			<div class="Swatch" style="background: ${ color }"></div>
		`;
	});
}

// single costume function
function insertCostume(costume) {

	// add to the container HTML
	containerElement.innerHTML += `
		<article class="Kirby" data-costume="${ costume['title'] }">
			<h2>${ costume['title'] }</h2>
			<img src="media/${ costume['image'] }"/>
			<p>${ costume['powers'] }</p>
		</article>
	`;

	// insert color swatches
	insertColorSwatches(costume);

}

// multiple costume function
function insertCostumes(costumes) {

	// empty the container element
	containerElement.innerHTML = '';

	// run function to insert a single costume
	costumes.forEach((costume) => {
		insertCostume(costume);
	});

}

// run function to insert multiple costumes
insertCostumes(costumes);