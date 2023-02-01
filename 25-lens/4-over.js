'use strict;'

const getter = prop => obj => obj[prop]; 
const setter = prop => (value, obj) => ({...obj, [prop]: value}); 
const lens = (getter, setter) => ({
	get: obj => getter(obj),
	set: (obj, value) => setter(value, obj)
});
const over = (lens, map, obj) => lens.set(map(lens.get(obj)), obj);

const person = {
	name: 'Marcus Aurelius',
	city: 'Roma',
	born: 121
};

const nameLens = lens(getter('name'), setter('name'));
const upper = s => s.toUpperCase();
console.log('over', over(nameLens, upper, person));
