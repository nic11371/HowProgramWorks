'use strict;'

const between = (str, quote) => {
	const start = quote[0];
	const end = quote[1];
	let i = str.indexOf(start);
	if(i === -1) return '';
	const line = str.substring(i + 1);
	
		i = str.indexOf(end);
		if(i === -1 ) return '';
		return line.substring(0, i - 1)
	
	
}

const name = "<Nikolay Nikolaevich> Melnikov";
console.log(between(name, '<>'))