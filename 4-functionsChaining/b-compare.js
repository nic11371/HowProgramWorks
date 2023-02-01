'use strict;'

global.api = {
	metasync: require('metasync')
}

const implementation = (
	['6-promise', '7-functor', '8-prototype', '9-build']
	.map(name => './' + name + '.js')
	.map(require)
);

const test = require('./a-test.js');

implementation.map((chaining, i) => {
	console.log('Implementation: #' + i);
	test(chaining)
	
})
