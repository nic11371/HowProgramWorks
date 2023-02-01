'use strict;'

const fn = a => {
	const b = "Closure variable"
	return c => {
		console.log({a, b, c})
	}

}

const f1 = fn("parametr 1");
f1("parametr 2")
