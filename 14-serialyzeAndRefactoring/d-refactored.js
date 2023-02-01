'use strict;'

const shortenStack = (dir, stack) => {
	if(!stack) return '';
	if(stack.indexOf(dir) === -1) return stack;
	const exp = new RegExp(`${dir}(/node_modules)?`, 'g');
	return stack.replace(exp, '');

}

// eslint-disable-next-line no-undef
module.exports = {shortenStack};