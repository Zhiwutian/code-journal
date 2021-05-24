/* global data */
/* exported data */

var $photoInput = document.getElementById('photoUrl');
var $entryImage = document.getElementById('formImage');
var $entryForm = document.getElementById('entryForm');

$photoInput.addEventListener('input', function (event) {
  $entryImage.setAttribute('src', event.target.value);
});

$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var entryObj = {
    title: event.target.elements.title.value,
    photoUrl: event.target.elements.photoUrl.value,
    notes: event.target.elements.notes.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(entryObj);
  $entryImage.setAttribute('src', './images/placeholder-image-square.jpg');
  $entryForm.reset();
});
