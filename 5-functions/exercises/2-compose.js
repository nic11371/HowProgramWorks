'use strict;'

const compose = (...fns) => {
	const handlers = [];
const composed = x => {
	if(fns.length === 0) return x;
	let last = fns.length - 1;
	let res = x;
	try {
	for(let i = last; i >= 0; i --) {
		res = fns[i](res);
	}
	return res 
} catch (e) {
	for(const handler of handlers) handler(e)
}
}
composed.on = (name, handler) => {
	if(name === 'error') handlers.push(handler)
}
return composed
}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, twice, cube);
console.log(f(10));

