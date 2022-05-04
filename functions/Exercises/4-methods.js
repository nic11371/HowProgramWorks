'use strict';

const methods = iface => {
	let arr = [];
	for(let i in iface) {
		arr.push([iface[i].name, iface[i].length]);
	}
	return arr;
}

console.log(methods(
	{
 m1: x => [x],
	m2: function (x, y) {
		return [x, y];
	},
		m3(x, y, z) {
		return [x, y, z];
		}
	}
))