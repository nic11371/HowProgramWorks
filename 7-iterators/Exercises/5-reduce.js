'use strict;'

const sum = (...args) => {
	return args.reduce((acc, val) => acc + val)
}

console.log(sum(1,2,3));
