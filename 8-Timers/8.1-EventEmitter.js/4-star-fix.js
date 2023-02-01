'use strict;'

// eslint-disable-next-line no-undef
const event = require('events');

const emitter = () => {
	const ee = new event.EventEmitter();
	const emit = ee.emit;
	ee.emit = (...args) => {
		if(args[0] !== '*') emit.apply(ee, args);
		args.unshift('*');
		emit.apply(ee, args);
	}
	return ee;
}

// eslint-disable-next-line no-undef
module.exports = emitter;