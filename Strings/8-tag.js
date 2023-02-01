'use strict;'

const tag = (string, ...values) => {
	console.log({string, values});
	
}

const greet = "Hello";
const person = {name: "Mark"};
const text = tag`${greet} ${person.name}!`
console.log({text});


