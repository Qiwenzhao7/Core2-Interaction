
var containerElement = document.querySelector('.Container');

function insertColorSwatches(costume) {

var kirbyElement = document.querySelector(`.Kirby[data-costume="${ costume.title }"]`);

	
	costume['colors'].forEach((color) => {
		kirbyElement.innerHTML += `
			<div class="Swatch" style="background: ${ color }"></div>
		`;
	});
}


function insertCostume(costume) {


	containerElement.innerHTML += `
		<article class="Kirby" data-costume="${ costume['title'] }">
			<h2>${ costume['title'] }</h2>
			<img src="media/${ costume['image'] }"/>
			<p>${ costume['powers'] }</p>
		</article>
	`;


	insertColorSwatches(costume);

}

function insertCostumes(costumes) {


	containerElement.innerHTML = '';


	costumes.forEach((costume) => {
		insertCostume(costume);
	});

}


insertCostumes(costumes);