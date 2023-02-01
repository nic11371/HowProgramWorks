'use strict;'

const data = {name: 'Nikolay', city: 'Tula', born: '1991'};

const person = new Proxy(data, {
	get (obj, key){
	return obj[key]
},
	set(obj, key, value) {
		console.log(obj.key);
		
		obj[key] = value
		return true
	}
})

console.log(person.born);
for(const key in person) {
	console.log({key: person[key]});
	
}

person.name = 'Nick'
console.log(person.name);

