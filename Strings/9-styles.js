'use strict;'

const esc = (code, s) => `\x1b[${code}m${s}\x1b[0m`;

const tag = (strings, ...values) => {
	const result = [strings[0]];
	let i = 1;
	for(let val of values) {
		const str = strings[i++];
		result.push(esc(i + 1, val), str)
	}
	
	return result.join('')
}

const greet = "Hello";
const person = {name: 'Nikolay', position: "work"};
const text = tag`${greet} ${person.name} ${person.position}!`
console.log({text});
