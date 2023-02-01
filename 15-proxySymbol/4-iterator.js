'use strict;'

const generateObjectNumbers = {start: 1, end: 10};

generateObjectNumbers[Symbol.iterator] = function() {
	let value = this.start;
	return {
		next: () => ({
			value,
			done: value++ === this.end + 1
		})
	}
}

Object.defineProperty(generateObjectNumbers, Symbol.iterator, {
	enumerable: false,
	configurable: false
})

console.log(generateObjectNumbers);
console.log(Object.getOwnPropertySymbols(generateObjectNumbers));


for(const value of generateObjectNumbers) {
	console.log(value);
	
}

const fn = (...args) => {
	args.reduce((prev, acc) => prev + acc)
}
const sum = fn(...generateObjectNumbers)
console.log(sum);
