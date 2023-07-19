const { getBoard, createKnight, Tree } = require("./gameboard");
const { default: knight } = require("./knight");

console.log('hello world12')
const board = getBoard()

let tree = new Tree(3,3,6,7)
//tree.createKnight(3,3)
//tree.moveknight(3,3,5,5)
tree.findknightchild()
console.log(board)
//console.log(tree.moveknight(3,3,5,5))