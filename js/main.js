// JavaScript Document

(function(){
	"use strict";
	
	//console.log("testing");

	var button = document.querySelector("#mobileBtn");
	var navLinks = document.querySelector("#navLinks");

	function responsiveNav() {
		navLinks.classList.toggle("slideToggle");
    }

   button.addEventListener("click", responsiveNav, false);
		
})();