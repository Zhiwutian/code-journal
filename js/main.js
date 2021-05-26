/* global data */
/* exported data */

var $photoInput = document.getElementById('photoUrl');
var $entryImage = document.getElementById('formImage');
var $entryForm = document.getElementById('entryForm');
var $entriesUl = document.getElementById('entries-list');
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

document.addEventListener('DOMContentLoaded', function (event) {
  if (!data.entries.length) {
    $entriesUl.append(renderNoEntries());
  } else {
    for (var entryIndex = 0; entryIndex < data.entries.length; entryIndex++) {
      var renderedEntry = renderEntry(data.entries[entryIndex]);
      $entriesUl.append(renderedEntry);
    }
  }

});

function renderNoEntries() {
  var $li = document.createElement('li');

  var $textContainer = document.createElement('div');
  $textContainer.className = 'row column-full justify-center';

  var $textP = document.createElement('p');
  $textP.textContent = 'No entries have been recorded';

  $textContainer.append($textP);
  $li.append($textContainer);

  return $li;
}

function renderEntry(entryInfo) {

  var $li = document.createElement('li');

  var $entryRow = document.createElement('div');
  $entryRow.className = 'column-full row margin-spacer';

  var $imageColumn = document.createElement('div');
  $imageColumn.className = 'column-half margin-spacer';

  var $entryImage = document.createElement('img');
  $entryImage.className = 'column-full';
  $entryImage.src = entryInfo.photoUrl;

  var $textColumn = document.createElement('div');
  $textColumn.className = 'column-half margin-spacer';

  var $entryTitle = document.createElement('h2');
  $entryTitle.textContent = entryInfo.title;

  var $entryNotes = document.createElement('p');
  $entryNotes.textContent = entryInfo.notes;

  $imageColumn.append($entryImage);
  $textColumn.append($entryTitle, $entryNotes);
  $entryRow.append($imageColumn, $textColumn);
  $li.append($entryRow);

  return $li;
}
