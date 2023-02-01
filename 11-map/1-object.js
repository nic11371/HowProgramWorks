'use strict;'

class Dictionary {
	constructor() {
		this.map = Object.create(null);
	}
	set(key, value) {
		this.map[key] = value;
		return this;
	}
	get(key) {
		return this.map[key]
	}
	has(key) {
		for (const i in key){
			if(i === '' || i === 0 || i === undefined || i === null || i === false) {
				return console.log(this.key[i])
			} 
			return !!this.map[key]
		}
	}
	delete(key) {
		delete this.map[key]
	}
	get size() {
		return Object.keys(this.map).length;
	}
	keys(){
		return Object.keys(this.map)
	}
	clear() {
		this.map = Object.create(null)
	}
	static from(hash) {
		const instance = new Dictionary();
		for(const key in hash) {
			instance.set(key, hash[key]);
		}
		return instance;
	}
}

const cities = {
	Shanghai: 24256800,
	Beijing: 21516000,
	Delhi: 16787941,
	Lagos: 16060303,
}

const cityPopulation = Dictionary.from(cities);
console.log(cityPopulation);

const cityPopulation2 = new Dictionary();
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


console.log(cityPopulation2.keys());
console.log(cityPopulation2.size);




