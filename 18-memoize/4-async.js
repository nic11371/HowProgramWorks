'use strict;'

// eslint-disable-next-line no-undef
const fs = require('fs')

const memoizeAsync = (lib, fnName) => {
	const fn = lib[fnName];
	const cache = {};
	console.log('override', fnName);
	lib[fnName] = (...args) => {
		console.dir({ call: fnName, args, cache });
		const key = args[0];
		const cb = args.pop();
		const record = cache[key];
		console.log('key:', key);
		console.log('cached:', record);
		if(record) {
			console.log('from cache');
			cb(record.err, record.data);
			return;
		}
		fn(...args, (err, data) => {
			console.log('from file');
			console.log('Save key:', key);
			cache[key] = {err, data};
			console.dir({ cache });
			cb(err, data)
		})
	}
};
memoizeAsync(fs, 'readFile');
fs.readFile('4-async.js', 'utf8', (err, data) => {
	console.log('data length:', data.length);
	fs.readFile('4-async.js', 'utf8', (err, data) => {
	console.log('data length:', data.length);
	});
 });