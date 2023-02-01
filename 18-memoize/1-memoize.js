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

const sumSec = (a, b) => {
	console.log('Calculating');
	let r = 0;
	for(let i = a; i < b; i++) {
		r += i
	}
	return r;
}

const mSumSec = memoize(sumSec);

console.log(mSumSec(2, 5));
console.log(mSumSec(2, 5));
console.log(mSumSec(2,6));

