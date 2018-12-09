/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
 // function listMajors() {
 //   gapi.client.sheets.spreadsheets.values.get({
 //     spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
 //     range: 'Class Data!A2:E',
 //   }).then(function(response) {
 //     var range = response.result;
 //     if (range.values.length > 0) {
 //       appendPre('Name, Major:');
 //       for (i = 0; i < range.values.length; i++) {
 //         var row = range.values[i];
 //         // Print columns A and E, which correspond to indices 0 and 4.
 //         appendPre(row[0] + ', ' + row[4]);
 //       }
 //     } else {
 //       appendPre('No data found.');
 //     }
 //   }, function(response) {
 //     appendPre('Error: ' + response.result.error.message);
 //   });
 // }
function listEvents() {
  var result = Sheets.Spreadsheets.Values.get('1jdAx-yiYrLM30_5wKO23fRz7L8s-JdvKDd07PizG8II', 'Class Data!A2:L');
  var numRows = result.values ? result.values.length : 0;

  console.log(result);
  console.log(numRows);
}
