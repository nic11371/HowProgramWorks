'use strict;'

const getConference = () => {
	let onDone = null;
	const deferred = {
		data: callback => onDone = callback,
	};
		setTimeout(() => {
			if(onDone) onDone(['Moscow', 'Sochi', 'St.Petersburg'])
		}, 5000);
	return deferred;
}

const conference = getConference();

conference.data(city => {
	console.log('city ' + city);
	
})

console.log('end');
