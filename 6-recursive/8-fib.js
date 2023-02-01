'use strict;'

const fibonacci = n => (
	n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
)

console.log(fibonacci(10));

const fib = (n) => {
	let a = 1, b = 0, c = 0;
	// eslint-disable-next-line no-constant-condition
	while(n > 0) {
			c = a + b;
			b = a;
			a = c;
			n --;
		}
	return b
}

console.log(fib(10));
