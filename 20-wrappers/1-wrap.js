'use strict;'

const wrap = fn => {
	console.log('Wrapped function', fn.name);
	return (...args) => {
		console.log('Called wrap', fn.name);
		console.log({args});
		const func = fn(...args);
		console.log('End wrap', fn.name);
		console.log(func);
		return func;
	}
}
// const wrap = fn => (...args) => fn(...args)
const func = (p1, p2) => {
	console.log(p1, p2);
	return [p1, p2]
}
const wrapped = wrap(func);
func('one', 'two');
wrapped('three', 'four')