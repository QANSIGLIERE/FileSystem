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

function saveBase64AsImage(pngBase64String, pathToFile) {
    fs.writeFile(pathToFile, pngBase64String, { encoding: 'base64' });
    fs.readFileSync(pathToFile);
}

function fileExists(pathToFile) {
    return fs.existsSync(pathToFile) ? true : false;
}

function deleteFile(pathToFile) {
    try {
        fs.unlinkSync(pathToFile);
        return true;
    } catch {
        return false;
    }
}

module.exports.createFileFromString = createFileFromString;
module.exports.saveBase64AsImage = saveBase64AsImage;
module.exports.fileExists = fileExists;
module.exports.deleteFile = deleteFile;
