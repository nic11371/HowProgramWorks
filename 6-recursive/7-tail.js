'use strict;'

const tail = (n, acc = 0) => {
	if(n === 0) return acc;
	else return tail(n - 1, acc + n)
}

console.log(tail(5));


let tailAdd = (n, acc = 0) => {
	// eslint-disable-next-line no-constant-condition
	while(true) {
		if(n === 0) return acc;
		else {
			acc = acc + n;
			n = n - 1
		}
	}
}

console.log(tailAdd(5));
