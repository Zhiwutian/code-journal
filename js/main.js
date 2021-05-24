/* global data */
/* exported data */

var $photoInput = document.getElementById("photoUrl");
var $entryImage = document.getElementById("formImage");

$photoInput.addEventListener("input", function(event) {
  $entryImage.setAttribute("src", event.target.value);
});
