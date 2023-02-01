'use strict;'

// eslint-disable-next-line no-undef
const fs = require('fs');
function Memoized() {}

const memoize = fn => {
	
	const cache = new Map();
	const memoized = function(...args) {
		const key = args[0];
		const cb = args.pop();
		const record = cache.get(key);
		if(record) {
			cb(record.err, record.data)
			return;
		}
		fn(...args, (err, data) => {
			cache.set(key, {err, data});
			cb(err, data)
		})
	}


	const fields = {
		cache, 
		timeout: 0,
		limit: 0,
		size: 0,
		maxSize: 0,
	}

	// eslint-disable-next-line no-undef
	Object.setPrototypeOf(memoized, Memoized.prototype);
	return Object.assign(memoized, fields)
}

// eslint-disable-next-line no-undef
Memoized.prototype.clear = function() {
	this.cache.clear()
}

fs.readFile = memoize(fs.readFile);
fs.readFile('6-metasync.js', 'utf-8', (err, data) => {
	console.log('data-length', data.length);
	fs.readFile('6-metasync.js', 'utf-8', (err, data) => {
		console.log('data-length', data.length);
		fs.readFile.clear();
		fs.readFile('6-metasync.js', 'utf-8', (err, data) => {
			console.log('data-length', data.length);
		});
	});
});