'use strict;'

const cities = new Set();

cities.add("Beijing");

['Tula', 'Moscow', 'Kiev'].forEach(city => cities.add(city));

if(cities.has('Tula')) console.log('true');

console.log({key: cities.keys()});
cities.delete('Kiev')
console.log({value: cities.values()});