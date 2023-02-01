'use strict;'

const fs = require('fs');

fs.readFile('./2-functions/2-callback.js', 'utf-8', (err, data) => {
	console.log({lines: data.split('\n').length});
	
})

console.log('end');
