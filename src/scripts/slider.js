/* global showSlides */
/* eslint-disable no-unused-vars */

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  var prev = document.getElementsByClassName("prev");
  prev[0].style.background = "#ff45002b";
  prev[0].style.cursor = "pointer";
  prev = document.getElementsByClassName("next");
  prev[0].style.background = "#ff45002b";
  prev[0].style.cursor = "pointer";
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function defineSlider() {

  window.showSlides = function(n) {

    try {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    } catch (e) {/*not tag*/ }

  };

}

defineSlider();

var slideIndex = 1;
showSlides(slideIndex);
