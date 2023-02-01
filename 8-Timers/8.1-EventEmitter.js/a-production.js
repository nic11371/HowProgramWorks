'use strict;'

const emitter = () => {
	const events = new Map();
	const wrapped = new Map();
	const ee = {
		on: (name, f, timeout = 0) => {
			const event = events.get(name);
			if (event) event.push(f)
			else events.set(name, [f]);
			if (timeout) setTimeout(() => {
				ee.remove(name, f)
			}, timeout)
		},
		emit: (name, ...data) => {
			const event = events.get(name);
			if (event) event.forEach(f => f(...data))
		},
		once: (name, f) => {
			const g = (...data) => {
				ee.remove(name, g);
				f(...data);
			};
			wrapped.set(f, g);
			ee.on(name, g)
		},
		remove: (name, f) => {
			const event = events.get(name);
			if (!event) return;
			const i = event.indexOf(f);
			if (i !== -1) {
				event.splice(i, 1);
				return;
			}
			const g = wrapped.get(f);
			if (g) {
				const i = event.indexOf(g);
				if (i !== -1) event.splice(i, 1);
				if (!event.length) events.delete(name)
			}
		},
		clear: name => {
			if (name) events.delete(name);
			else events.clear()
		},
		listeners: name => {
			const event = events.get(name);
			return event.slice();
		},
		count: name => {
			const event = events.get(name);
			return event ? event.length : 0
		},
		name: () => [...events.keys()]
	}
	return ee;
}

const ee = emitter();

ee.on('e1', data => {
	console.log(data)
});
ee.emit('e1', { a: "hello" })

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


ee.on('e5', () => { });
ee.on('e5', () => { });
console.log(ee.count('e5'));

ee.on('e6', () => { });
ee.on('e6', () => { });
ee.on('e8', () => { })
ee.on('e9', () => { });

console.log(ee.listeners('e8'))

console.log(ee.name());
