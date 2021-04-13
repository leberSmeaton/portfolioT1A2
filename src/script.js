// Get the modal
var modal = document.getElementById("myModalAbout");
// var modal = document.getElementById("myModalSkills");
// var modal = document.getElementById("myModalContact");

// Get the button that opens the modal
var btn = document.getElementById("myBtnAbout");
// var btn = document.getElementById("myBtnSkills");
// var btn = document.getElementById("myBtnContact");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 
//
//slideshow carousel
//
//

var slideIndex = [1,1,1,1];
// show the first image of each carousel
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);
// show the first image of each carousel and the number of image carousels from 0 - 3. aka all 4.

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

// show the first image of each carousel and the number of image carousels from 0 - 3. aka all 4.
// start loop at 0, upward to the length of images, ++ upwards!
function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}