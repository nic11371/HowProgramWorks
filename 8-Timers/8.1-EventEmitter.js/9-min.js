'use strict;'

const emitter = (l, o) => (l = {}, o = {
	on: (n, f) => (l[n] = l[n] || []).push(f),
	emit: (n, ...a) => (l[n] = l[n] || []).map(f => f(...a)),
	once: (n, f, g) => o.on(n, g = (...a) => (f(...a), o.remove(n, g))),
	remove: (n, f, i) => (i = l[n] || [], i.splice(i.indexOf(f), 1)),
	count: n => (l[n] || []).length, 
	clear: n => (n ? delete l[n] : l = {}),
	listeners: n => (l[n] || []).slice(),
	name: () => Object.keys(l)
});


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