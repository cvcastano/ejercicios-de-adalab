'use strict';

console.log('🌟');
let triangle = '🎄';
let tree = "";

function drawTree(height) {
    for (let i = 0; i < height; i++) {
        tree += triangle;
        console.log(tree);
    }
    console.log('🟫')
}

drawTree(5);