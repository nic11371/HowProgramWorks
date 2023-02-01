'use strict;'

const reduce = (fn, acc, [curr, ...rest]) => (
	curr === undefined ? acc : reduce(fn, fn(curr, acc), rest)
)

const sum = reduce((a, b) => a + b, 0, [1,2,3,5,6,8,6,3]);
console.log(sum);

