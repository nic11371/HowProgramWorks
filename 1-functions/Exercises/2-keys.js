'use strict';

const generateKey = (length, possible) => {
	// let result = '';
	// for(let i = 0; i < length; i++) {
	// 	result += possible.charAt(Math.floor(Math.random() * possible.length ))
	// }
	// return result
	let arr = [];
	for(let i = 0; i < length; i++) {
		let randomNumber = Math.floor(Math.random() * length);
		arr[i] = possible[randomNumber];

	}
	return arr.join('')
}

console.log(generateKey( 3, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"))