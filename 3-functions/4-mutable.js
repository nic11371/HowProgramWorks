'use strict;'

const text = (s = ' ', obj = {
	line: a => (s += '\n' + a, obj),
	toString: () => s
}) => obj;

const txt = text('line')
.line('line2')
.line('line3')
.line('line4')

console.log(`${txt}`);

