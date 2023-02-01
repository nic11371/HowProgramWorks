'use strict;'

const curry = fn => (...args) => (
	fn.length > args.length ? 
		((...args1) =>
			curry(fn).apply(null, args.concat(args1))
			) : fn.apply(null, args)
);

//при возврате ...args2 стр 8 ф-я fn перезаписывается 


const sum = (a, b, c, d) => (a + b + c + d);
const f = curry(sum);
const f1 = f(1) (2) (3) (5);
console.log(f1);
	