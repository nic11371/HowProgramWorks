'use strict;'

// eslint-disable-next-line no-undef
const begin = process.hrtime.bigint();

const diff = end => (end - begin) / 1000000n;

setTimeout(() => {
	// eslint-disable-next-line no-undef
	const end = process.hrtime.bigint();
	console.log('10: ' + diff(end));
}, 10);

setTimeout(() => {
	// eslint-disable-next-line no-undef
	const end = process.hrtime.bigint();
	console.log('50: ' + diff(end));
}, 50);

setTimeout(() => {
	// eslint-disable-next-line no-undef
	const end = process.hrtime.bigint();
	console.log('100: ' + diff(end));
}, 100);

const fib = n => n > 2 ? fib(n - 1) + fib(n - 2) : 1;

for (let i = 0; i < 40; i++) fib(10)