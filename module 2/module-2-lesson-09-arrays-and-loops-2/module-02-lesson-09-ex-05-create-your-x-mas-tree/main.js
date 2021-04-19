'use strict';

function drawTree(height) {
    let tree = "";
    let triangle = '▲';
    for (let i = 0; i < height; i++) {
        tree += triangle
        console.log(tree)
    }
}
drawTree(5)

