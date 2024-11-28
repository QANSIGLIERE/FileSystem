const fs = require('fs');

function createFileFromString(fileName, stringValue) {
    if (typeof stringValue == 'string') {
        fs.writeFile(fileName, stringValue, 'utf-8', err => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            } else {
                console.log(`File "${fileName}" is written successfully!`);
            }
        });
    } else {
        console.log(`Value should have "String" type. Now it is ${typeof err}`);
    }
}

module.exports.createFileFromString = createFileFromString;
