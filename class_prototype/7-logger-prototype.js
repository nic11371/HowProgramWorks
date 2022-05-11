'use strict';

function Logger(level) {
	this.color = Logger.colors[level] || Logger.colors.info;
}

Logger.colors = {
	warning: '\x1b[1;33m',
	error: '\x1b[0;31m',
	info: '\x1b[1;37m',
}

Logger.prototype.log = function(s) {
	const date = new Date().toISOString();
	console.log(this.color + date + '\t' + s);
}

const warning = new Logger('warning');
const debug = new Logger('debug');
const error = new Logger('error');
const slow = new Logger('slow');

warning.log('world');
debug.log('Hello');
error.log('Bye');
slow.log("I'm slow logger");

