'use strict;'

const emitter = () => {
	let events = {};
	const ee = {
		on: (name, fn, timeout = 0) => {
			const event = events[name] || [];
			events[name] = event;
			event.push(fn);
			if(timeout) setTimeout(() => {
					ee.remove(name, fn);
			}, timeout)
		},
		emit: (name, ...data) => {
			const event = events[name];
			if(event) event.forEach(fn => fn(...data))
		},
		once: (name, fn) => {
			const g = (...args) => {
				ee.remove(name, g);
				fn(...args)
			}
			ee.on(name, g)
		},
		remove: (name, fn) => {
			const event = events[name];
			if(!event) return;
			const i = event.indexOf(fn);
			if(i !== -1) event.splice(i, 1);
		},
		clear: (name) => {
			if(name) delete events[name];
			else events = {};
		},
		listeners: name => {
			const event = events[name];
		return event.slice();
		},
		count: name => {
			const event = events[name];
			return event ? event.length : 0;
		},
		name: () => {return Object.keys(events)}
		};
return ee
};

const ee = emitter();

ee.on('e1', data => {
	console.log(data)
});
ee.emit('e1', {a: "hello"})

ee.once('e2', data => console.log(data)
)

ee.emit('e2', "Hi");
ee.emit('e2', 'Hi')
const f2 = data => console.log(data)
ee.on('e3', f2);
ee.remove('e3', f2);
ee.emit('e3', "REMOVE");

ee.on('e4', data => console.log(data))
ee.clear('e4');
ee.emit('e4', 'Hello');
ee.clear()


ee.on('e5', () => {});
ee.on('e5', () => {});
console.log(ee.count('e5'));

ee.on('e6', () => {});
ee.on('e6', () => {});
ee.on('e8', () => {})
ee.on('e9', () => {});

console.log(ee.listeners('e8'))

console.log(ee.name());
