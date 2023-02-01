'use strict';

const array = () => {
	const result = [];
	const a = x => result[x];
	a.push = y => result.push(y);
	a.pop = () => result.pop();
	return a;
};

console.log(array());
