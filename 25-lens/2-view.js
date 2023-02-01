'use strict;'

const getter = prop => obj => obj[prop];
const setter = prop => (value, obj) => ({...obj, [prop]: value});
const view = (fn, obj) => fn.get(obj);
const lens = (getter, setter) => ({
	get: obj => getter(obj),
	set: (val, obj) => setter(val, obj),
});

const person = {
	name: 'Marcus Aurelius',
	city: 'Rome',
	born: 121
}

const lensName = lens(getter('name'), setter('name'));
console.log(view(lensName, person));
