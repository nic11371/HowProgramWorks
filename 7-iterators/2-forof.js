'use strict;'

const sum = (...args) => {
	let acc = 0;
	for(const i of args) {
		acc += i
	}
	return acc
}

console.log(sum(1,2,3));
