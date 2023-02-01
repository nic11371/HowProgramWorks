'use strict;'

 const getter = prop => obj => obj[prop];
 const setter = prop => (value, obj) => ({...obj, [prop]: value});
 const set = (lens, value, obj) => lens.set(value, obj);
 const lens = (getter, setter) => ({
	get: obj => getter(obj),
	set: (value, obj) => setter(value, obj)
 });

 const person = {
	name: 'Marcus Aurelius',
	city: 'Rome',
	born: 121
}

const nameLens = lens(getter('name'), setter('name'));
console.log('set: ', set(nameLens, 'Nikolay', person));
