'use strict;'

const data = {name: 'Nikolay', city: 'Tula', born: '1991'};

const person = new Proxy(data, {
	has(obj, key) {
		return(key in obj || key === 'age')
	},
	get(obj, key) {
		if(key === 'age') {
			return new Date().getFullYear() - new Date(obj.born + '').getFullYear()
		}
		return obj[key]
	}
	
})

if('age' in person) {
	console.log('Try person.age');
	if(person.age) {
		console.log('Try person[/age]');
		if(person['age']) {
			console.log({
				born: person.born,
				age: person.age
			});
			
		}
		
	}
	
}

console.log(person);


