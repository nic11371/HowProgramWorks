'use strict;'

const Text = function(s) {
	this.value = s;
}

Text.prototype.line = function(a) {
	this.value += '\n ' + a;
	return this;
} 

Text.prototype.toString = function() {
	return this.value;
}

const text = new Text('line')
.line('line2').line('line3').line('line4')
console.log(text + '');
