'use strict';

  const person2 = {
	name: "Marcus Aurelius",
	get city() {
		return "Roma";
	},
	set city(value) {
		console.log("Marcus remains in Roma");
	}
  };

  person2.city = "Kiev";
  console.dir({person2})