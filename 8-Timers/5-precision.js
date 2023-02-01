'use strict;'

// eslint-disable-next-line no-undef
const begin = process.hrtime.bigint();

const diff = end => (end - begin) / 1000000n;

setTimeout(() => {
	// eslint-disable-next-line no-undef
	const end = process.hrtime.bigint()
	console.log('10ms: ' + diff(end));
}, 10)