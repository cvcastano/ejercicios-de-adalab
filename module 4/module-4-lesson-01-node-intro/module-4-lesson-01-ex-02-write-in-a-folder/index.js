const fs = require('fs');

const fileHandler = (err, fileContent) => {
    if (err) {
        console.log('Error', err);
    } else {
        const jsonData = JSON.parse(fileContent);
    console.log(jsonData.originalContent);
    }
}


fs.readFile('./lorem.json', 'utf8', fileHandler);

 
