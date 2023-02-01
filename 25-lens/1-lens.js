'use strict;'

const getter = prop => obj => obj[prop];
const setter = prop => (value, obj) => ({...obj, [prop]: value});

const lens = (getter, setter) => ({
	get: obj => getter(obj),
	set: (value, obj) => setter(value, obj)
});

const immedialty = lens(getter('name'), setter('name'));
console.log({immedialty});
