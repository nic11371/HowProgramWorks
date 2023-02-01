'use strict;'

const emitter = (events = {}) => ({
	on: (name, fn) => (events[name] = events[name] || []).push(fn),
	emit: (name, ...data) => (events[name] || []).forEach(fn => fn(...data))
})

const ee = emitter();

ee.on('emit1', data => {
	console.log(data);
	
})

ee.emit('emit1', {a: 100})