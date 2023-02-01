'use strict;'

// eslint-disable-next-line no-undef
const crypto = require('crypto');
const argKey = x => x.toString() + ':' + typeof x;

const generateKey = args => {
	const key = args.map(argKey).join('|');
	return crypto.createHash('sha256').update(key).digest('hex');
}

const memoize = fn => {
	const cache = {};
	return (...args) => {
		const key = generateKey(args);
		const val = cache[key];
		if(val) return val;
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