'use strict';

const logger = level => {
	const color = logger.colors[level] || logger.colors.info;

	return s => {
		const date = new Date().toISOString();
		console.log(color + date + '\t' + s);
	}
}

logger.colors = {
	warning: '\x1b[1;33m',
	error: '\x1b[0;31m',
	info: '\x1b[1;37m',
}

const warning = logger('warning');
const debug = logger('debug');
const error = logger('error');
const slow = logger('slow');

warning('World');
debug('Hello');
error('Bye!');
slow("I'm slow logger");
