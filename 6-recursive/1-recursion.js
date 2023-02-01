'use strict;'

const maxCallStack = (a) => {
	try{
		return maxCallStack(++a)
	} catch(e) {
		return a
	}
}

console.log(maxCallStack(0));
