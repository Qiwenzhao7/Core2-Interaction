// Select your container element.
var containerElement = document.querySelector('.Container');

// Define the insert function with a parameter.
function insertDataItem(dataItem) {

	// Update this to your match your collection's metadata.
	containerElement.innerHTML += `
		<div class="Shells" style="background: ${ dataItem['color'] }">
			<p>Name: ${ dataItem['Name'] }</p>
			<p>Description: ${ dataItem['Description'] }</p>
			<p>Date: ${ dataItem['Date'] }</p>
		</div>
	`
}

// Run the insert function for every element in the collection array
data.forEach((dataItem) => {
	insertDataItem(dataItem)
});