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