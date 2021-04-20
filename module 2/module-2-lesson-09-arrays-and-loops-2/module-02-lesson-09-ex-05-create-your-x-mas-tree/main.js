'use strict';

let tree = "";
let triangle = '🎄';

function drawTree(height) {
    for (let i = 0; i < height; i++) {
        tree += triangle
        console.log(tree)
    }
}
drawTree(5)

