'use strict;'

const fs = require('events');
const emitter = new fs.EventEmitter();

emitter.on('New city', city => {
	console.log("New city " + city);
	
})
emitter.on('new array', array => {
	console.log('new array ' + array.reduce((a, b) => a + b));
	
})

emitter.emit('New city', 'Tula')
emitter.emit('new array', [1, 6])