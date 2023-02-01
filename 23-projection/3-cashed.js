'use strict;'

const projection = meta => {
	const keys = Object.keys(meta);
	return obj => keys.reduce((hash, key) => (hash[key] = meta[key]
		.reduce((value, fn, i) => (i ? fn(value) : obj[fn]), null), hash), {});
}

const persons = [
	{name: 'Ibn Arabi', city: 'Murcia', born: 1165},
	{name: 'Mao Zedong', city: 'Shaoshan', born: 1893},
	{name: 'Rene Descartes', city: 'La Haye en Touraine', born: 1596},
	{name: 'Victor Glushkov', city: 'Rostov on Don', born: 1923},
	{name: 'Marcus Aurelius', city: 'Rome', born: 121},
];

const md = {
	name: ['name'],
	place: ['city', s => '<' + s.toUpperCase() + '>'],
	age: ['born', y => (
	new Date().getFullYear() - new Date(y + '').getFullYear()
	)]
};

const p1 = projection(md);
const data = persons.map(p1);
console.log(data);
