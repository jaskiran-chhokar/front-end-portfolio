let navbar = document.getElementById("navbar");
window.onscroll = function () {
	"use strict";
	if (document.body.scrollTop >= 200) {
		myNav.classList.add("navbar");
	}
	else {
		myNav.classList.remove("navbar");
	}
};
