'use strict;'

const limit = (count, fn) => {
	let counter = 0;
	return (...args) => {
		if(counter === count) return;
		counter++;
		fn(...args);
	};
};

const func = par => {
	console.log('Called', par);
}

const fn2 = limit(2, func);
fn2('one');
fn2('two');
fn2('three');
