function testFetch() {
    let endPoint = `${ScriptApp.getService().getUrl()}?v=done`;
    Logger.log(endPoint);
    Logger.lot(UrlFetchApp.fetch(endPoint).getContentText());
}