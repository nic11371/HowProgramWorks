'use strict;'

// eslint-disable-next-line no-undef
const readLine = require('readline');

const rl = readLine.createInterface({
	// eslint-disable-next-line no-undef
	input: process.stdin,
	// eslint-disable-next-line no-undef
	output: process.stdout
});

rl.question('Enter your name: ', name => {
	console.log('Hello ' + name);
	rl.close();
	
})