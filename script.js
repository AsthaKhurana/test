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
