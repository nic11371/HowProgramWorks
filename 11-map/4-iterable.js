'use strict;'

const cityPopulation2 = new Map();

cityPopulation2.set('Shanghai', 24256800);
cityPopulation2.set('Beijing', 21516000);
cityPopulation2.set('Delhi', 16787941);
cityPopulation2.set('Lagos', 16060303);
cityPopulation2.set('Tula', '')

for (const city of cityPopulation2) {
	console.log(city);
}

for(const [name, population] of cityPopulation2) {
	console.log(`Population of ${name} is ${population}`);
	
}