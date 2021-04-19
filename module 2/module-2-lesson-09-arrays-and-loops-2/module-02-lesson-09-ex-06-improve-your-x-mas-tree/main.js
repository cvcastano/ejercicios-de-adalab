'use strict';
function drawTree(height) {

    let triangle = '▲';
    let firstRound = true;
    let tree = "";
    for (let i = 0; i < height; i++) {
        if (firstRound === true) {
            console.log('★');
            firstRound = false;
        } else {
            tree += triangle;
            console.log(tree);
        }
    }
    console.log('|')
}
drawTree(5);