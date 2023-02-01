'use strict;'

const sum = (a, b) => {
	if(typeof a === 'number' && typeof b === 'number') return [null, a + b]
	else return [new Error('This argument is not figure')]
}

console.log(sum(2,7));
console.log(sum(7, "d"));
