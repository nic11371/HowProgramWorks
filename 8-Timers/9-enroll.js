'use strict;'

// eslint-disable-next-line no-undef
const timers = require('timers');

const timer = {
	_onTimeout: () => {
		console.log('_onTimeout called');
		
	}
};

timers.enroll(timer, 1000);
timers.active(timer);
console.log(timer);
