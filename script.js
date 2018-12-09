/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
 function listEvents() {
   gapi.client.sheets.spreadsheets.values.get({
     spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
     range: 'Class Data!A2:E',
   }).then(function(response) {
     var range = response.result;
     if (range.values.length > 0) {
       console.log(range);
       }
     } else {
       appendPre('No data found.');
     }
   }, function(response) {
     appendPre('Error: ' + response.result.error.message);
   });
 
