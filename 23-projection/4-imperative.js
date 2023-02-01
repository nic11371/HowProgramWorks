'use strict;'

const projection = meta => {
	const keys = Object.keys(meta);
	return obj => {
		const hash = {};
		keys.forEach(key => {
			const def = meta[key];
			const [field, fn] = def;
			const value = obj[field];
			hash[key] = fn ? fn(value) : value;
		});
		return hash;
	}
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