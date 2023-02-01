'use strict;'

const write = s => process.stdout.write(s)
process.stdin.on('data', chunk => {
	console.log(chunk);
	
})

console.clear();
console.log('\x1b[1;10H');

setTimeout(() => {
	process.exit(0)
}, 6000)

console.log(`
                      __________________
                      Login:
                      __________________
`);

write('\x1b[3A\x1b[29C');
// rl.question(' '.repeat(25) + 'Login: ', name => {
// 	console.log('Hello ' + name);
// 	rl.close();
	
// })

