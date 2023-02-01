'use strict;'

const getter = prop => obj => obj[prop];
const setter = prop => (value, obj) => ({...obj, [prop]: value});
const lens = (getter, setter) => ({
	get: obj => getter(obj),
	set: (value, obj) => setter(value, obj)
});

const view = (lens, obj) => lens.get(obj);
const set = (lens, value, obj) => lens.set(value, obj);
const over = (lens, fn, obj) => lens.set(fn(lens.get(obj)), obj);

const person = {
	name: 'Marcus Aurelius',
	city: 'Rome',
	born: 121
 };

 const upper = s => s.toUpperCase();

 const nameLens = lens(getter('name'), setter('name'));
 console.log('view', view(nameLens, person));
 console.log('set', set(nameLens, 'MARCUS', person));
 console.log('over', over(nameLens, upper, person));
 
