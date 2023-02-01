'use strict;'

const data = {name: 'Nikolay', city: 'Tula', _born: '1991'};

const person = new Proxy(data, {
	ownKeys(obj) {
		return Object.keys(obj).filter(name => !name.startsWith('_'))
	}
})

console.log(Object.keys(person));
