'use strict;'

const sum = (...args) => {
	let acc = 0;
	let i = 0;
	do {
		i++;
		acc = acc + i;
	} while(i < args.length)
	return acc;
}

console.log(sum(1,2,3));
