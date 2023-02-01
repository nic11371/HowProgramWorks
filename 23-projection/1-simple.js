'use strict;'

const partial = (fn, ...args) => (...rest) => fn(...args.concat(rest));
const projection = (fields, obj) => Object.keys(obj)
	.filter(field => fields.includes(field))
	.reduce((hash, key) => (hash[key] = obj[key], hash), {});

const persons = [
	{name: 'Ibn Arabi', city: 'Murcia', born: 1165},
	{name: 'Mao Zedong', city: 'Shaoshan', born: 1893},
	{name: 'Rene Descartes', city: 'La Haye en Touraine', born: 1596},
	{name: 'Victor Glushkov', city: 'Rostov on Don', born: 1923},
	{name: 'Marcus Aurelius', city: 'Rome', born: 121},
];

const p1 = partial(projection, ['name', 'born']); 
const p2 = partial(projection, ['name']);

const data = persons.map(p1).map(p2);
console.log(data);


