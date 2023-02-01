'use strict;'

const text = (s = '', obj = {
	line: (a) => (s +=  '\n' + a,obj ) ,
			
	[Symbol.iterator]: () => ({
		
			index: ''
			,
		
		next() { 
			let current = s.split('\n');	
			
			const res = { value: current[this.index++], done: this.finished }
	
			console.log(res);
			if(this.index == current.length) this.finished = true
		
	return res
			
		
		}
	})

}) => obj;


const txt = text('line')
	.line('line2')
	.line('line3')

console.log(`'${[...txt]}'`);
// console.log(...txt);


