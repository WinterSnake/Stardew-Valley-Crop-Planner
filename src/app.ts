const DAYSPERSEASON: number = 28;

window.onload = function() {
	const table = document.getElementById("calendar-table");
	// Create day calendar table
	for (let i = 0; i < DAYSPERSEASON; ++i) {
		if (i % 7 == 0) {
			var tableRow = document.createElement("tr");
			table.append(tableRow);
		}
		let tableElement = document.createElement("td");
		tableElement.innerHTML = String(i + 1);
		tableRow.append(tableElement);
	}
	console.log(table);
}
