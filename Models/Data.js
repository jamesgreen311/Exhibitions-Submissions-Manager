/*
    The central component of the pattern. It is the application's dynamic data structure, independent of the user interface.
    It directly manages the data, logic and rules of the application.

    The model is responsible for managing the data of the application. It receives user input from the controller.
*/

// Map form to database
const Data = {
    firstName: "a:a",
    lastName: "b:b"
}

const sheetHeaders = [
    "FIRSTNAME",
    "LASTNAME",
    "EMAIL",
    "PHONE",
    "WORKTITLE",
    "WIDTH",
    "HEIGHT",
    "MEDIUM",
    "PRICE",
    "FILENAME",
    "FILEID",
    "AVAILABILITY",
    "HIDDEN",
    "TIMESTAMP"
]

let testData = {
    firstName: "Susan",
    lastName: "Fisher",
    email: "susan.fisher@me.com",
    phone: "(999) 999-9999",
    workTitle: "Morning glory",
    width: 40,
    height: 60,
    medium: "Oil",
    price: 1200
}

