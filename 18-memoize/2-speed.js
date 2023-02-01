'use strict;'

const argKey = x => x.toString() + ':' + typeof x;
const generateKey = args => args.map(argKey).join('|');

const memoize = fn => {
	const cache = Object.create(null);
	return (...args) => {
		const key = generateKey(args);
		const value = cache[key];
		if(value) return value;
		const res = fn(...args);
		cache[key] = res;
		return res;
	}
}

const speedTest = (name, fn, args, count) => {
	const tmp = [];
	const start = new Date().getTime();
	for(let i = 0; i < count; i++) {
		tmp.push(fn(...args))
	}
	const end = new Date().getTime();
	const time = end - start;
	console.log(`${name} * ${tmp.length} : ${time}`);
	
}

const LOOP_COUNT = 10000;
const fib = n => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));
const mFib = memoize(fib);

speedTest('fib(20)', fib, [20], LOOP_COUNT);
speedTest('memoized Fib(20)', mFib, [20], LOOP_COUNT)