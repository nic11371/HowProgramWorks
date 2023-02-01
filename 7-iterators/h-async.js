'use strict;'

const range = {
	start: 1,
	end: 10,
	[Symbol.asyncIterator]() {
		let value = this.start;
		return {
			next: () => Promise.resolve(
				{
					value,
					done: value++ === this.end + 1,
				
				}
			)
		}
	}
}

console.log({
		range,
		names: Object.getOwnPropertyNames(range),
		symbols: Object.getOwnPropertySymbols(range)
	}
);

(async () => {
 for await (const item of range) {
		console.log(item);
		
	}
}) ();

// const sum = (a, b) => a + b;
// const rangeArray = (...rest) => rest.reduce(sum)
// const rangeSum = rangeArray(...range)
// console.log(rangeSum);

