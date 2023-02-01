'use strict;'

const curry = fn => (...args) => {
	if(fn.length > args.length) {
		return curry(fn.bind(null, ...args))
	} else {
		return fn(...args);
	}
}

const sum = (a,b,c,d) => (a+b+c+d);
const f1 = curry(sum);
const f2 = f1(1) (2) (3) (4) ;
console.log(f2);
