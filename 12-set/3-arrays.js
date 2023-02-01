'use strict;'

const union = (s1, s2) => {
	const ds = s1.slice(0);
	for(let i in s2) {
		const item = s2[i];
		if(!ds.includes(item)) ds.push(item)
	}
	return ds
}

const intersection = (s1, s2) => {
	const ds = [];
	for(let i in s1) {
		const item = s1[i];
		if(s2.includes(item)) ds.push((item))
	}
	return ds
}

const difference = (s1, s2) => {
	const ds = [];
	for(let i in s1) {
		const item = s1[i];
		if(!s2.includes(item)) ds.push(item)
	}
	return ds
}

const complement = (s1, s2) => difference(s2, s1)

const cities1 = ['Beijing', 'Kiev'];
const cities2 = ['Kiev', 'London', 'Baghdad'];

const operations = [union, intersection, difference, complement];

const result = operations.map(index => ({
	[index.name]: index(cities1, cities2)
}))

console.log(result);



