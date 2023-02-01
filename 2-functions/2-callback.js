'use strict;'

const fn = (par, callback) => {
	if(!par) {
		return new Error ("Paremeter isn't available")
	} else {
		callback(null, "Data " + par);
		return "Value"
	}
}
const res = fn("Example", (err, data) => {
	if (err) throw err;
	console.log({data})
})

console.log({res});



