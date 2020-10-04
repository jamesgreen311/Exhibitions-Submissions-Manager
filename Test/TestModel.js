const ds = SpreadsheetApp.getActiveSpreadsheet();
//const ws = ds.getActiveSheet();
const ws = ds.getSheetByName("Test");

function saveData(data) {
    const timestamp = new Date();
    ws.appendRow([
        testData.firstName,
        testData.lastName,
        testData.email,
        testData.phone,
        testData.workTitle,
        testData.width,
        testData.height,
        testData.medium,
        testData.price,
        '', //image file
        '', //availability
        '', //hidden
        timestamp
    ]);


}