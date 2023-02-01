'use strict;'

// eslint-disable-next-line no-undef
const readline = require('readline');

const rl = readline.createInterface({
	// eslint-disable-next-line no-undef
	input: process.stdin,
	// eslint-disable-next-line no-undef
	output: process.stdout,
	prompt: '> '
});

rl.prompt()
const commands = {
	hello() {
		console.log('Hello');
		
	},
	help() {
		console.log('Commands available' + Object.keys(commands).join(', '));
		
	},
	exit() {
		rl.close()
	}
}

rl.on('line', line => {
	line = line.trim();
	const command = commands[line]
	if(command) command()
	else console.log('Unknown command');
	rl.prompt()
}).on('close', () => {
	console.log('Bye');
	
	// eslint-disable-next-line no-undef
	process.exit()
})