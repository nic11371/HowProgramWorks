'use strict;'

 const view = (lens, obj) => lens.get(obj);
 const set = (lens, value, obj) => lens.set(value, obj);
 const over = (lens, fn, obj) => lens.set(fn(lens.get(obj)), obj);
const remove = (lens, obj) => lens.delete(obj);

const lens = (source, destination = source) => ({
	get: obj => obj[source],
	set: (value, obj) => ({...obj, [destination]: value}),
	delete: obj => {
		// eslint-disable-next-line no-unused-vars
		const {[source]: forgot, ...others} = obj; 
		return others;
	}
});

const upper = s => s.toUpperCase();

const person = {
	name: 'Marcus',
	city: 'Roma',
	born:  121
};

const nameLens = lens('name');

console.log('view', view(nameLens, person));
console.log('set', set(nameLens, 'Marcus', person));
console.log('over', over(nameLens, upper, person));

const renameLens = lens('name', 'RenameName');
console.log('view', view(renameLens, person));
console.log('set', set(renameLens, 'Marcus', person));
console.log('over', over(renameLens, upper, person));

const excpect = lens('name');
console.log('remove', remove(excpect, person));

