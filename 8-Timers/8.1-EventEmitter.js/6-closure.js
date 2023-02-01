'use strict;'

const emitter = () => {
	const events = {};
	return {
		on: (name, fn) => {
			const event = events[name];
			if(event) event.push(fn)
			events[name] = [fn] 
		},
		emit: (name, ...data) => {
			const event = events[name];
			if(event) event.forEach(fn => fn(...data))
		}
	}
}

const ee = emitter();

ee.on('emit1', data => {
	console.log(data);
	
})

ee.emit('emit1', {a: 100})