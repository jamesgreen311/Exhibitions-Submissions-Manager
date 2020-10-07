/*
  Any representation of information such as a chart, diagram or table.

  The view means presentation of the model in a particular format.
*/

var sid = ""

function doGet(e) {
  Route.path("done", showDone);
  Route.path("765E5EB0", showAnnual);
  Route.path("6E074B39", showSuntrust);

  var r;
  showId = e.parameter.sid;

  if (Route[e.parameter.v]) {
    r = Route[e.parameter.v]();
  } else {
    // default to main page
    r = render(pageName);
  }

  return r;
}

function projectMenu() {
    SpreadsheetApp.getUi().createMenu(topMenuName)
    .addItem("Submission Form", "loadForm")
    .addToUi();  
}

function loadForm() {
  let html = HtmlService.createTemplateFromFile(pageName)
    .setWidth(800)
    .setHeight(800)
    .evalute();
  SpreadsheetApp.getUi().showModalDialog(html, formTitle);
}

function showDone() {
  return render(`${pageRoot}/Done`);
}

function showAnnual() {
  return render(`${pageRoot}/CrossroadsAnnual`);
}

function showSuntrust() {
  return render(`${pageRoot}/SunTrust`);
}