'use strict;'

const cities = new Set([
	{name: 'Beijing'},
	{name: 'Kiev'},
	{name: 'London'},
	{name: 'Baghdad'}
])

console.log(cities);

const list = new WeakSet();
for(const city of cities) {
list.add(city);
console.log(city);}


const iterator = cities.values();
const beijing = iterator.next().value;
console.log(beijing);

iterator.next();
const london = iterator.next().value;
console.log(london);

cities.delete(london)

for(const city of cities) {
	console.log(city, list.has(city));
	
}

list.delete(beijing)
console.log(cities);

for(const city of cities) {
	console.log(city, list.has(city));
	
}

