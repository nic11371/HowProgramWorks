'use strict;'

const sum = async (a, b) => {
	if(typeof a === 'number' && typeof b === 'number') return a + b
	else throw new Error('This argument is not figure')
}

(async () => {
		try{
			console.log(await sum(2,3));			
		} catch(e) {
			console.log(e.message);
		}
		try{
			console.log(await sum(2,"S"));			
		} catch(e) {
			console.log(e.message);
		}
	}) ();


	