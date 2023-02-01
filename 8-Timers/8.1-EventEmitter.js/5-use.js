'use strict;'

// eslint-disable-next-line no-undef
const emitter = require('./4-star-fix');

const ee = emitter();

ee.on('emit1', data => {
	console.log('Certain');
	console.log(data);
})

ee.on('*', (name, data) => {
	console.log('Certain');
	console.log([name, data]);
})

ee.emit('event1', {a: 100});
ee.emit('event2', {a: 300});
ee.emit('*', {a:700})