'use strict;'

// eslint-disable-next-line no-undef
const fs = require('fs');

const getDataset = file => {
	const lines = fs.readFileSync(file, 'utf8').split('\n');
	console.log(lines.shift())
	console.log(lines.pop())
	return lines.map(line => line.split(','));
}

// eslint-disable-next-line no-unused-vars
const buildIndex = (ds, col) => {
	const index = new Map();
	for(const record of ds) {
		index.set(record[col], record)
	}
	return index;
}

const city = getDataset('./cities.csv');
console.log(city);

const byName = buildIndex(city, 0)
console.log(byName);

const byPopulation = buildIndex(city, 1)
console.log(byPopulation);

const delhi = byName.get('Delhi');
console.log(delhi);

const record = byPopulation.get('21516000')
console.log(record);

