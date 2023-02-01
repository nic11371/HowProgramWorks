'use strict;'

const max = (a, b) => a > b ? a : b;

const amax = new Proxy(max, {
	apply(target, context, args) {
		console.log(target.name, args);
		
		return args.reduce(target)
	}
})

console.log(max(2, 5,7,54,78,4,3,9,2));
console.log(amax(2, 5,7,54,78,4,3,9,2));
