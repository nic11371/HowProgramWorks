'use strict;'

function a(x) {
	return b(x)
}  

function b(g) {
	return a(g)
}

console.log(a(0));
