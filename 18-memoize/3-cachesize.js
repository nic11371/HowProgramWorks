'use strict;'

const argKey = x => x.toString() + ':' + typeof x;
const generateKey = args => args.map(argKey).join('|');

const memoize = (fn, length) => {
	const cache = new Map();
	return (...args) => {
		const key = generateKey(args);
		console.log(`${fn.name}(${key}) call`);
		if(cache.has(key)) return cache.get(key);
		console.log(`${fn.name}(${key}) calculate`);
		const res = fn(...args);
		if(cache.size >= length ) {
			const firstKey = cache.keys().next().value;
			console.log('Delete key ', firstKey);
			cache.delete(firstKey)
		}
		cache.set(key, res);
		return res;
	}
}

const max = (a, b) => (a > b ? a : b);
const mMax = memoize(max, 3);

console.log(mMax(10, 8));
console.log(mMax(10, 8));
console.log(mMax(1, 15));
console.log(mMax(3, 2));
console.log(mMax(5, 6));
console.log(mMax(1, 15));
console.log(mMax(10, 8));
console.log(mMax(1, 15));
console.log(mMax(0, 0));
console.log(mMax(0, 0));
