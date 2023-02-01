'use strict;'

const fs = require('fs');


const print = (fileName, err, data) => {
	console.log({lines: data.split('\n').length});
	
}
const fileName = './2-functions/2-callback.js';

fs.readFile(fileName, 'utf-8', print.bind(null, fileName))
console.log('end');
