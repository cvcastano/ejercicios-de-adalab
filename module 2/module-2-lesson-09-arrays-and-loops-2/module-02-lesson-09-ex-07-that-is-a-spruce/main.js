'use strict';

// Intenta cambiar el código para que aparezca el árbol completo.

console.log('        🌟');
let triangle = '🎄';
let blank = '  ';

function drawTree() {
    for (let nTriangles = 1, nBlanks = 4; nTriangles <= 9; nTriangles += 2, nBlanks--) {

        console.log(blank.repeat(nBlanks) + triangle.repeat(nTriangles));
    }
    console.log('        🟫');
}
drawTree()













// function drawTree() {
//     console.log('        🌟');
//     let triangle = '🎄';
//     let space = '  ';

//     for (let numTriangles = 1, numSpaces = 4; numTriangles <= 9; numTriangles += 2, numSpaces--) {
//         let spaces = space.repeat(numSpaces);
//         let triangles = triangle.repeat(numTriangles);
//         console.log(spaces + triangles)

//     }
//     console.log('        🟫');
// }
// drawTree();


