'use strict;'

const removeElement = (array, item) => {
	const i = array.indexOf(item);
	if(i !== -1) return array.splice(i, 1)
}
const array = [1,2,3,4,5]
console.log(array);
removeElement(array, 4);
console.log(array);


// eslint-disable-next-line no-undef
module.exports = { removeElement };