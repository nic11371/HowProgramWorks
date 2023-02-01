'use strict;'

const cityPopulation2 = new Map();


cityPopulation2.set('Shanghai', 24256800);
cityPopulation2.set('Beijing', 21516000);
cityPopulation2.set('Delhi', 16787941);
cityPopulation2.set('Lagos', 16060303);
cityPopulation2.set('Tula', '')

console.log(cityPopulation2);
cityPopulation2.delete('Lagos')

if(cityPopulation2.has('Beijing')) console.log('Beijing: ', cityPopulation2.get('Beijing'));
if(!cityPopulation2.has("Lagos")) console.log('Is not available');
if(!cityPopulation2.has("Tula")) console.log('Is not available');


console.log([...cityPopulation2.keys()]);
console.log(cityPopulation2.size);

console.log(cityPopulation2.values());
console.log(cityPopulation2.entries());
cityPopulation2.delete('Tula')
console.log(cityPopulation2.entries());
cityPopulation2.clear();
console.log(cityPopulation2.entries());