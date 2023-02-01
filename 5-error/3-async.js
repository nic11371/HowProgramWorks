'use strict;'

const sum = (a, b, cb) => {
	if(typeof a === 'number' && typeof b === 'number') return  cb(null, a + b)
	else cb( new Error('This argument is not figure'))
}

sum(2, 3, (err, res) => {
	if(err) {
		console.log(err.message);
		return
		} else {
			console.log(res);
			
		}
	
})

sum(2, "A", (err, res) => {
	if(err) {
		console.log(err.message);
		return
		} else {
			console.log(res);
			
		}
	
})