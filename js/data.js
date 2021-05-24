/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var storedData = JSON.parse(localStorage.getItem('entry-data'));
if (storedData !== null) {
  data = storedData;
}
window.addEventListener('beforeunload', function (event) {
  var currentData = JSON.stringify(data);
  localStorage.setItem('entry-data', currentData);
});
