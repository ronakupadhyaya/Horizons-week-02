// This is where you will write code to initially render
// the Horello dynamic landing page. We have provided functions
// in utils.js to help with this process. You should only have to
// write logic for the fetching of data (using AJAX), while
// using the given renderers to render HTML elements.

$(document).ready(function() {
  render();
  refreshStatic();
});

function render() {
  $.ajax(apiUrl + '/boards/' + boardId, {
    method: 'GET',
    data: {
      key: apiKey,
      token: apiToken,
      cards: 'all',
      lists: 'all'
    },
    success: function(data) {
      renderBoard(data);
    }
  });
}
