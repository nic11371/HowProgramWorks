'use strict;'

// eslint-disable-next-line no-undef
const EventEmitter = require('./1-simple');

const ee = new EventEmitter();

ee.on('emit1', data => {
	console.log(data);
	
}) 

ee.emit('emit1', {a: 5})
	
