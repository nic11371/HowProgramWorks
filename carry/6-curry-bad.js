'use strict;'

const curry = fn => (...args) => (
	fn.length > args.length ? curry(
		((fn, ...args1) => (...args2) => (
			fn(...args1.concat(args2)))
		)(fn, ...args)
	) : fn(...args)
);

//при возврате ...args2 стр 8 ф-я fn перезаписывается 


const sum = (a, b, c, d) => (a + b + c + d);
const f = curry(sum);
const f1 = f(1) (2) (3)(4);
console.log(f1);
