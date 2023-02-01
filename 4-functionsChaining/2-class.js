'use strict;'

class Text {
  constructor(s) {
	this.value = s;
  }
  line(a) {
	this.value += '\n' + a
	return this
}
	toString() {
		return this.value;
	}
}

const txt = new Text('line')
	.line('line1').line('line2').line('line3')

	console.log(txt + '');
	