'use strict;'

const text = s => ({
	line: a => text(s + '\n' + a),
	toString: () => s
});

const txt = text('line')
.line('line3')
.line('line4');

console.log(txt + '');

