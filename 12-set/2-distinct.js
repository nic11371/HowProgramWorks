'use strict;'

const distinct = dataset => {
	const keys = new Set();
	return dataset.filter(record => {
		const col = Object.keys(record).sort();
		const key = col.map(field => record[field]).join('\x00');
		const has = keys.has(key);
		if(!has) keys.add(key);
		return !has
	})
}

const flights = [
	{from: 'Kiev', to: 'Roma'},
	{from: 'Kiev', to: 'St. Petersburg'},
	{from: 'Cairo', to: 'Teheran'},
	{from: 'Kiev', to: 'Roma'},
	{from: 'Paris', to: 'Sochi'},
	{from: 'Cairo', to: 'Moscow'},

]

const object = new Set(flights)
console.log(object);

const district = distinct(flights);
console.log(district);
