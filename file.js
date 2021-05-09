
'use strict';

function id(x) { return document.getElementById(x); }

/* ---- ---- ---- ---- ---- ---- ---- ----
	// Anonymous function syntax:
	btn.addEventListener('click', function () {
		alert("Howdy");
	} );
	
	// For named function syntax:
	function thing() {
		alert("Howdy");
	}
	btn.addEventListener('click', thing);
*/

function getFactors(value) {
	let result = [];
	for (let i = 0; i <= value; i += 1) {
		if (value % i == 0) // if value divides evenly by i, then i is a factor of value
			result.push(i);
	}
	return result;
}


id('asdf78').addEventListener('click', function () {
	//id('answer').innerHTML = getFactors(parseInt(id('rfws32').value)).join(", ");
	
	let value = parseInt(id('rfws32').value);
	let factors = getFactors(value);
	
	id('answer').innerHTML = factors.join(", ");
});





















