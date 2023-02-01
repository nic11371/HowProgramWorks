'use strict;'

const lens = (source, destination = source) => ({
	get: obj => obj[source],
	set: (value, obj) => ({...obj, [destination]: value}) 
});

const view = (lens, obj) => lens.get(obj);

const field = (name, meta = (x => x)) => obj => meta(view(lens(name), obj));

const projection = meta => {
	const keys = Object.keys(meta);
	return obj => {
		const hash = {};
		keys.forEach(key => {
			const field = meta[key];
			hash[key] = field(obj);
		});
		return hash;
	}
}

const age = year => new Date().getFullYear() - new Date(year + '').getFullYear();
const place = city => '<' + city.toUpperCase() + '>';

const md = {
	name: field('name'),
	place: field('city', place),
	age: field('born', age)
}

const persons = [
	{name: 'Ibn Arabi', city: 'Murcia', born: 1165},
	{name: 'Mao Zedong', city: 'Shaoshan', born: 1893},
	{name: 'Rene Descartes', city: 'La Haye en Touraine', born: 1596},
	{name: 'Victor Glushkov', city: 'Rostov on Don', born: 1923},
	{name: 'Marcus Aurelius', city: 'Rome', born: 121},
];

const p1 = projection(md);
const data = persons.map(p1);
console.log(data);
