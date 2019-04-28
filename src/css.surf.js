require('./css/styles.css');
require('../node_modules/animate.css/animate.min.css');

require('./js/navbar.js');

let sideNav = document.getElementById("sideNav"),
	page = document.getElementById("page");

document.getElementById('menuToggle').addEventListener('click', () => {

	sideNav.classList.toggle('navOpen');
	page.classList.toggle('navOpen');

});