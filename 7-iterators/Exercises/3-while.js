'use strict;'

const sum = (...args) => {
	let acc = 0;
	let i = 0;
	while(i < args.length) {
		i++;
		acc = acc + i
	}
	return acc;
}

console.log(sum(1,2,3));
