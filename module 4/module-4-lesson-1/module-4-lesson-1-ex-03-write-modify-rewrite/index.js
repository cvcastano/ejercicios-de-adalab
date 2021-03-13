const fs = require('fs');


readFileHandler = (error, fileContent) => {
    if (error !== null) {
        console.log('Error: ', error);
    } else {
        console.log('The file content is: ', fileContent);
    }
}

fs.readFile('./input-file.txt', 'utf8', readFileHandler);