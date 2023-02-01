'use strict;'

const range = {
	start: 1,
	end: 10,
	[Symbol.iterator] () {
		let value = this.start
		return {
		next: () => ({
			value,
			done: value++ === this.end + 1

		})}
	}
}

console.log({
	range,
	// eslint-disable-next-line no-undef
	names: Object.getOwnPropertyNames(range),
	// eslint-disable-next-line no-undef
	symbols: Object.getOwnPropertySymbols(range)
});
for (const i of range) {
	console.log(i);
	
}

const sum = (a, b) => a + b
const res = (...iterables) => iterables.reduce(sum)
const sumRes = res(...range)
console.log(sumRes);
