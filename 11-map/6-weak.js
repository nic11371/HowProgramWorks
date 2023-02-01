'use strict;'

const cities = {
	beijing: {name: 'Beijing'},
	kiev: {name: 'Kiev'},
	london: {name: 'London'},
	baghdad: {name: "Baghdad"}
};

const capitalOf = new WeakMap();
capitalOf.set(cities.beijing, 'China')
capitalOf.set(cities.kiev, 'Kiev')
capitalOf.set(cities.baghdad, 'Baghdad')
capitalOf.set(cities.london, 'London')

delete cities.london;
capitalOf.delete(cities.baghdad);
console.log({cities, capitalOf});

capitalOf[cities.london]