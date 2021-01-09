window.onscroll = function(e){

	e.preventDefault();

	let scroll = window.scrollY;

	var Scroll = document.querySelector("#efec-scroll");
	var ulone = document.querySelector("#ulone");
	var ultwu = document.querySelector("#ultwu");
	var logo = document.getElementById("logo");

	if (scroll > 300) {
		Scroll.classList.add("bg-menu");
		ulone.classList.add("nav-scroll");
		ultwu.classList.add("nav-scroll");
		logo.classList.add("logo");
	}else{
		Scroll.classList.remove("bg-menu");
		ulone.classList.remove("nav-scroll");
		ultwu.classList.remove("nav-scroll");
		logo.classList.remove("logo");
	}
};
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
    // Show button
    scrollToTopBtn.classList.add("scrollToTopBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("scrollToTopBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll);


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

jQuery(document).ready(function(){
    'use strict'
    $('.slider').ripples({
        dropRadius:20,
        perturbance:0.03 
        
      });
      $('.gallery').magnificPopup({

        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
          },
        // other options
      });
      new WOW().init();
     

 
});


