'use strict;'

// eslint-disable-next-line no-undef
const vm = require('vm');

const jstp = `{
	name: 'Nikolay',
	address: {city: 'Moscow'},
	professions: ['radio'],
	fn: x => x / 2
}`;

const script = vm.createScript('(' + jstp + ')');
const data = script.runInThisContext();
console.log(data);
console.log(script);
