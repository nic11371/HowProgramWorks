'use strict;'

const sum = (...args) => {
	let acc = 0;
	for(let i = 0; i <= args.length; i++) {
		acc += i
	}
	return acc
}

console.log(sum(1,2,3,5))
// module.exports = {sum};