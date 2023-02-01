'use strict;'

const wrap = (before, after, fn) => (...args) => after(fn(...before(...args)));

const func = (p1, p2) => {
	console.log(p1, p2);
	return [p1, p2];
}

const before = (...args) => {
	console.log('before');
	return args
};

const after = res => {
	console.log('after');
	return res;
}

const wrapped = wrap(before, after, func);
const res = wrapped('one', 'two');
console.log({
	res,
	func: func.length,
	wrapped: wrapped.length
});
