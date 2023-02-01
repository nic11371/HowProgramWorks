'use strict;'

const ages = persons => {
	for(const i in persons) {
		persons[i] = persons[i].died - persons[i].born;	
	}
	return persons
}


console.log(ages({
	  lenin: { born: 1870, died: 1924 },
	  mao: { born: 1893, died: 1976 },
	  gandhi: { born: 1869, died: 1948 },
	  hirohito: { born: 1901, died: 1989 },
	}))