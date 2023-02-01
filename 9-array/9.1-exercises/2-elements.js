'use strict;'

const removeElements = (array, ...items) => {
	for (const i of items) {
		const index = array.indexOf(i);
		if(index !== -1 ) array.splice(index, 1)
	}
	return array
};

 const array = ['Kiev', 'Beijing', 'Lima', 'Saratov']
console.log(array);
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);
 
 // eslint-disable-next-line no-undef
 module.exports = { removeElements };