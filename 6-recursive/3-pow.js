'use strict;'

const pow = (base, n) => {
	if(n === 1) return base
	else return pow(base, n - 1) * base
}

console.log(pow(2, 4));
