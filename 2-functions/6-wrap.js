'use strict;'

 const logable = fn => (...args) => {
	const res = fn(...args);
	console.log(`Call: ${fn.name} (${args.join(', ')}) Result: ${res}`);
	return res;
 }

 const sum = (a, b) => a + b;

 const wrapper = logable(sum);
 const a = wrapper(1, 2);
const b = wrapper(2, 4);

console.log({a, b});

 
