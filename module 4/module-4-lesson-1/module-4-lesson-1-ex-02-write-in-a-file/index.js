const fs = require('fs');

const lorem = 'Lorem ipsum';

const object = {
    originalContent: "Lorem ipsum",
    changedContent: "LOREM IPSUM",
    textLenght: 11
 };

const text = JSON.stringify(object);

 console.log(object);  //consoled in object mode
 console.log(text);  //consoled in text mode

const writeFileHandler = (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('File saved');
    }
}


 fs.writeFile('./output.txt', text, writeFileHandler)