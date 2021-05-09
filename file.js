
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

function getFactors(x) {
	if (isNaN(x) || x == 0 || x != Math.floor(x)) return;
	
	let negative = (x < 0) ? 1 : 0;
	x = Math.abs(x);
	
	let factors = [];
	for (let i = 1; i <= x; i += 1) {
		if (x % i == 0) // if x divides evenly by i, then i is a factor of x
			factors.push(negative ? -i : i);
	}
	return factors;
}

id('btn1').addEventListener('click', function () {
	//id('answer1').innerHTML = getFactors(parseInt(id('input1').value)).join(", ");
	
	let value = parseInt(id('input1').value);
	let factors = getFactors(value);
	
	if (factors)
		id('answer1').innerHTML = factors.join(", ");
});

// ---- ---- ---- ---- ---- ---- ---- ----


/*
	str = str.replace(/\s+/g, " ");

	str = str.split('/');
*/












