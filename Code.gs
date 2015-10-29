function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Naviance Emailler')
  .addItem('Send Emails', 'sendEmails')
  .addToUi();
}

function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;
  var numRows = sheet.getLastRow() - 1;
  var dataRange = sheet.getRange(startRow, 1, numRows, 6);
  var data = dataRange.getValues();
  for (i in data) {
    var row = data[i];
    var emailAddress = row[5];
    var message = "Hello " + row[1] + " " + row[3] + ",\n\n";
    message += "You will be setting up your Naviance account with Mr. Alder some time this month. Please keep this special code in your email until you are instructed to use it.";
    message += "\n\nCode: " + row[4];
    var subject = "Your Naviance Code";
    MailApp.sendEmail(emailAddress, subject, message);
  }

}
