'use strict;'

const summator = element => {
	let value = element;
	const add = delta => {
		value += delta;
		if(value >= add.maxElement) add.maxEvent(value)
		return add;
	}
	add.max = (val, callback) => {
		add.maxElement = val;
		add.maxEvent = callback;
		return add;
	}
	return add;
}

const print = elem => {
	console.log("Element printed with max value: " + elem);
	
}

const a1 = summator(10).max(100, print) (-5);
a1(30)
a1(40)
a1(50)
a1(-60)(40)(30)