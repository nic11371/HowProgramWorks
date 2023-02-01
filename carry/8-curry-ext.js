'use strict;'

const curry = (fn, ...par) => {
	const fun = (...args) => {
		if(fn.length > args.length) {
			const f = fn.bind(null, ...args)
			return curry(f)
		} else {
			return fn(...args);
		}
	}
	
	par.length ? fun(...par) : fun
}

const sum = (a,b,c,d) => (a+b+c+d);
const f1 = curry(sum);
const f2 = f1(1,2,3)(3);
console.log(f2);

