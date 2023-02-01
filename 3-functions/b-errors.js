'use strict;'

const sum = element => {
	let value = element;
	const a = delta => {
		value += delta;
		if(value >= a.maxValue) {
		setTimeout(() => {
			a.maxEvent(new Error('Max value limited'), value)
		}, 3000)}
		return a;
	}
	a.max = (max, callback) => {
		a.maxValue = max;
		a.maxEvent = callback;
		return a;
	}
	return a;
}

const maxReached = (err, value) => {
	if(err) throw err; 
	console.log('max reached ' + value);
}

try{
const a1 = sum(10).max(100, maxReached)(-5);
a1(20);
a1(30);
a1(50);
a1(20);
a1(20)(50)(-40)(70)
} catch (e) {
	console.log('Never');
	
}