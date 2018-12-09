/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}


/**
 * Print all the events in the spreadsheet:
 * https://docs.google.com/spreadsheets/d/1jdAx-yiYrLM30_5wKO23fRz7L8s-JdvKDd07PizG8II/edit
 */

function listEvents() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1jdAx-yiYrLM30_5wKO23fRz7L8s-JdvKDd07PizG8II',
    range: 'Sheet1!A2:L',
  }).then(function(response) {
    var range = response.result;
    if (range.values.length > 0) {
      appendPre('events data:');
      for (i = 0; i < range.values.length; i++) {
        var row = range.values[i];
        // Print each row
        appendPre(row);
      }
    } else {
      appendPre('No data found.');
    }
  }, function(response) {
    appendPre('Error: ' + response.result.error.message);
  });
}
