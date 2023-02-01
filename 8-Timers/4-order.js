'use strict;'

// eslint-disable-next-line no-undef
const fs = require('fs');

setTimeout(() => {
	console.log('callback #1 setTimeout 0');
}, 0);

setTimeout(() => {
	console.log('callback #2 setTimeout 0');
}, 0);

setTimeout(() => {
	console.log('callback # setTimeout 1');
}, 1);

setTimeout(() => {
	console.log('callback #4 setTimeout 1');
}, 1);

// eslint-disable-next-line no-undef
setImmediate(() => {
	console.log('callback #5 setImmediate');
});

// eslint-disable-next-line no-undef
setImmediate(() => {
	console.log('callback #6 setImmediate');
});

const t7 = setInterval(() => {
	clearInterval(t7)
	console.log('callback #7 setInterval');
}, 0);

const t8 = setInterval(() => {
	clearInterval(t8)
	console.log('callback #8 setInterval');
}, 0);

// eslint-disable-next-line no-undef
process.nextTick(() => {
	console.log('callback #9 process.nextTick');
});

// eslint-disable-next-line no-undef
process.nextTick(() => {
	console.log('callback #10 process.nextTick');
});

// eslint-disable-next-line no-unexpected-multiline
(callback => callback())(() => {
	console.log('callback #11 callback');
});

// eslint-disable-next-line no-unexpected-multiline
(callback => callback())(() => {
	console.log('callback #12 callback');
});

fs.readFile('./4-order.js', 'utf8', () => {
	console.log('callback #13 readFile');
});

fs.readFile('./4-order.js', 'utf8', () => {
	console.log('callback #14 readFile');
});

